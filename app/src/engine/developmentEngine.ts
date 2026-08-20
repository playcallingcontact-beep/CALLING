import type { Attributes, Player, Position } from '../types/player'
import { clamp } from './eventEngine'
import { AGE_CURVES, isInDecline, seasonalDevelopment } from './ageCurves'
import { potentialGrowthMultiplier } from './potentialEngine'

// Base plus généreuse que le rythme Pro (ageCurves.seasonalDevelopment renvoie +2 pré-pic) :
// calibrée pour qu'un parcours HS+College typique approche ~75 OVR en sortie de fac, cible
// demandée pour une entrée NFL crédible. Le rythme Pro (ageCurves.ts) reste inchangé.
const AMATEUR_BASE_GROWTH = 3

// Léger déclin non-physique en fin de carrière : la technique s'érode bien plus lentement
// que le physique, le mental reste quasi stable, le leadership peut légèrement progresser au
// début du déclin (le vétéran qui compense la perte physique par la lecture du jeu) puis se
// stabilise — un gain qui ne s'arrête jamais empêcherait l'OVR de vraiment décliner.
const TECHNIQUE_DECLINE_FACTOR = 0.35
const MENTAL_DECLINE_FACTOR = 0.15
const LEADERSHIP_VETERAN_GAIN_BASE = 0.15
const LEADERSHIP_VETERAN_TAPER = 0.02

function jitter(spread: number): number {
  return (Math.random() - 0.5) * 2 * spread
}

// Largeur approximative (en saisons) de la fenêtre de croissance Pro pré-pic de chaque poste
// (du repêchage jusqu'à mi-pic, cf. peakMidpoint plus bas) — dérivée de AGE_CURVES. Sert
// uniquement à calibrer variancePositionBoost ci-dessous, pas à changer les courbes elles-mêmes.
const PRO_GROWTH_WINDOW: Record<Position, number> = {
  QB: 9,
  WR: 5,
  'RB-FB': 2,
  CB: 4,
  SS: 5,
  EDGE: 5,
}
const MAX_PRO_GROWTH_WINDOW = Math.max(...Object.values(PRO_GROWTH_WINDOW))

// Un poste à fenêtre de croissance courte (RB-FB en tête) a moins d'occasions de "moyenniser"
// la chance sur la durée d'une carrière : chaque saison doit donc compter davantage, en bien
// comme en mal, pour que le meilleur des cas puisse viser aussi haut qu'un poste à fenêtre
// longue — sans changer la moyenne (voir varianceFactor plus bas, centré sur 1). QB (fenêtre la
// plus longue) reste la référence, sans boost.
function variancePositionBoost(position: Position): number {
  return Math.sqrt(MAX_PRO_GROWTH_WINDOW / PRO_GROWTH_WINDOW[position])
}

function applyUniformGrowth(attributes: Attributes, amount: number): Attributes {
  return {
    ...attributes,
    physique: clamp(attributes.physique + amount),
    technique: clamp(attributes.technique + amount),
    mental: clamp(attributes.mental + amount),
    leadership: clamp(attributes.leadership + amount),
  }
}

export function applyAmateurDevelopment(player: Player): Attributes {
  const multiplier = potentialGrowthMultiplier(player.potential)
  const amount = Math.max(0, AMATEUR_BASE_GROWTH * multiplier + jitter(1.3))
  return applyUniformGrowth(player.attributes, amount)
}

export function applyProDevelopment(player: Player): { attributes: Attributes; logs: string[] } {
  const a = player.attributes

  const curve = AGE_CURVES[player.position]

  if (isInDecline(player.position, player.age)) {
    const yearsInDecline = player.age - curve.peakEnd
    // Le déclin réel n'est pas linéaire : léger juste après le pic, il s'accélère plus le
    // joueur s'accroche — un vétéran qui insiste 10 ans après son pic ne décline pas au même
    // rythme que sa première saison post-pic.
    const acceleration = Math.min(2.5, 1 + yearsInDecline * 0.08)
    const physiqueDecline = curve.declineRate * acceleration
    const leadershipGain = Math.max(0, LEADERSHIP_VETERAN_GAIN_BASE - yearsInDecline * LEADERSHIP_VETERAN_TAPER)
    const next: Attributes = {
      ...a,
      physique: clamp(a.physique - physiqueDecline),
      technique: clamp(a.technique - physiqueDecline * TECHNIQUE_DECLINE_FACTOR),
      mental: clamp(a.mental - physiqueDecline * MENTAL_DECLINE_FACTOR),
      leadership: clamp(a.leadership + leadershipGain),
    }
    return { attributes: next, logs: ['Physical decline is starting to show with age.'] }
  }

  // Fenêtre de pic = montée puis plateau, pas une croissance continue jusqu'au déclin :
  // la progression naturelle s'arrête à mi-pic, le reste du pic est un plateau stable.
  const peakMidpoint = curve.peakStart + Math.floor((curve.peakEnd - curve.peakStart) / 2)
  if (player.age > peakMidpoint && player.age <= curve.peakEnd) {
    return { attributes: a, logs: [] }
  }

  let base = seasonalDevelopment(player.position, player.age)
  if (base <= 0) return { attributes: a, logs: [] }

  // Les 3 dernières saisons avant le pic ralentissent (montée qui s'amortit en approchant le
  // plateau) plutôt qu'une croissance pleine puissance jusqu'à la porte du pic — sinon, pour
  // les postes à pic tardif (QB notamment), tout l'excédent d'OVR se construit avant même
  // d'entrer dans la fenêtre de pic.
  if (player.age >= curve.peakStart - 3) base *= 0.5

  const multiplier = potentialGrowthMultiplier(player.potential)
  const boost = variancePositionBoost(player.position)
  // Facteur centré sur 1 (E[varianceFactor] = 1, jitter() étant lui-même centré sur 0) : la
  // moyenne de la croissance Pro n'est donc pas modifiée par ce facteur, seule sa dispersion
  // l'est, davantage pour les postes à fenêtre courte — un plancher à 0.15 (jamais 0 ni négatif)
  // évite qu'une très mauvaise saison n'annule complètement la croissance.
  const varianceFactor = Math.max(0.15, 1 + jitter(1.8) * boost)
  const amount = Math.max(0, base * multiplier * varianceFactor)
  return { attributes: applyUniformGrowth(a, amount), logs: [] }
}

// Réévaluation du rôle chaque saison Pro : la place de titulaire se mérite ET peut se perdre.
// Un choix de draft précoce (round 1-2) offre une vraie chance de départ, mais au-delà de ces
// deux premières saisons le rôle suit le niveau réel — sinon un titulaire qui décline reste
// titulaire à vie et produit des statistiques de carrière totalement irréalistes.
// Hystérésis volontaire (threshold-margin pour garder le poste, threshold+margin pour le
// conquérir) : évite qu'un OVR qui oscille d'un point fasse changer de rôle chaque saison.
const ROLE_BASE_THRESHOLD = 62
const ROLE_TIER_STEP = 3
const ROLE_HOLD_MARGIN = 5
const ROLE_WIN_MARGIN = 4
// Au-delà de la fenêtre de pic, la concurrence de plus jeunes joueurs et le turnover des
// rosters font monter la barre chaque année, indépendamment du rythme de déclin individuel
// du joueur — sans ça, un déclin très lent (QB notamment) suffit à rester titulaire jusqu'à
// 45 ans, ce qui n'arrive presque jamais en réalité.
const AGE_PRESSURE_PER_YEAR = 4

export function evaluateProRole(player: Player, overall: number, teamTier: number, peakEnd: number): 'starter' | 'backup' {
  const yearsPastPeak = Math.max(0, player.age - peakEnd)
  const threshold = ROLE_BASE_THRESHOLD + teamTier * ROLE_TIER_STEP + yearsPastPeak * AGE_PRESSURE_PER_YEAR
  const draftRound = player.draftRound ?? 7
  if (player.season <= 2 && draftRound > 0 && draftRound <= 2) return 'starter'

  const current = player.depthChartStatus ?? 'backup'
  if (current === 'starter') return overall >= threshold - ROLE_HOLD_MARGIN ? 'starter' : 'backup'
  return overall >= threshold + ROLE_WIN_MARGIN ? 'starter' : 'backup'
}
