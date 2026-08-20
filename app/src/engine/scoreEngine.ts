import type { CareerStats, Player, Position } from '../types/player'
import { headlineStatDef } from '../data/proStats'

// Courbe volontairement back-loaded (exposant > 1, pas une racine carrée) : 1-2 récompenses
// sur une longue carrière ne doivent presque rien rapporter, seule une accumulation proche du
// plafond doit vraiment compter — sinon la moindre distinction ponctuelle gonfle le score
// d'une carrière par ailleurs quelconque.
function diminishing(count: number, capCount: number): number {
  return Math.min(1, Math.pow(count / capCount, 1.85))
}

function strongFirst(count: number, extraCap = 2): number {
  if (count <= 0) return 0
  return Math.min(1, 0.7 + 0.3 * Math.min(1, (count - 1) / extraCap))
}

export type CareerTier = 'Argent' | 'Or' | 'Diamant' | 'Saphir' | 'Arc-en-ciel'

// Certaines carrières (QB en tête) accumulent structurellement plus d'occasions de gagner des
// distinctions comptées par diminishing()/strongFirst() ci-dessus — bien plus de saisons pro
// avant le déclin (jusqu'à 19-20 pour QB contre 8 pour RB-FB), donc bien plus de chances
// d'atteindre les plafonds de Pro Bowl/All-Pro/playoffs même à niveau de jeu égal. Sans
// correction, ça faisait grimper QB à 30% de cartes Arc-en-ciel contre 0-2% pour les autres
// postes.
//
// Cible utilisateur, en % de TOUTES les carrières (Destin Brisée inclus, ~5%) : 15% Argent /
// 35% Or / 30% Diamant / 10% Saphir / 5% Arc-en-ciel / 5% Destin Brisée (= 100%). Destin Brisée
// n'entre jamais dans individualBlock/collectiveBlock (rawBlock forcé à 0, cf.
// simulateCareers.ts) et est géré en amont, indépendamment d'ici — donc, dans la population
// RESTANTE (carrières notées, ~95% du total), les seuils doivent tomber aux centiles cumulés
// 15/95, 50/95, 80/95 et 90/95 (≈15.8/52.6/84.2/94.7), PAS 15/50/80/90 : utiliser 15/50/80/90
// directement double de fait Saphir et Arc-en-ciel puisque ça ignore que Destin Brisée occupe
// déjà 5% en bas de la distribution complète. Valeurs mesurées par simulation sur 5000
// carrières/poste (jeu aléatoire non optimisé), quantiles calculés sur le sous-ensemble hors
// Destin Brisée uniquement.
const POSITION_QUANTILES: Record<Position, { q15: number; q50: number; q80: number; q90: number }> = {
  QB: { q15: 10.5, q50: 20.7, q80: 25.9, q90: 28.3 },
  WR: { q15: 5.5, q50: 12.3, q80: 19.3, q90: 22.2 },
  'RB-FB': { q15: 2.9, q50: 5.7, q80: 11.9, q90: 16.4 },
  CB: { q15: 4.3, q50: 9.4, q80: 17.0, q90: 19.5 },
  SS: { q15: 5.6, q50: 12.6, q80: 19.7, q90: 22.6 },
  EDGE: { q15: 4.4, q50: 10.0, q80: 17.3, q90: 19.9 },
}

// Plafond théorique de individualBlock + collectiveBlock (17 + 17, cf. plus bas) — sert de
// borne haute au dernier segment de la courbe, au-delà du 90e centile.
const RAW_BLOCK_MAX = 34

// Convertit le rawBlock (échelle brute, très différente d'un poste à l'autre) en un block
// calibré 0-29 (donc note finale 70-99) : une fonction linéaire par morceaux, ancrée sur les 4
// seuils ci-dessus, qui fait correspondre le 15e/50e/80e/90e centile RÉEL de CE poste aux
// frontières de palier 75/86/90/95. Un poste qui joue "dans sa moyenne" pour son propre poste
// obtient donc la même note relative qu'un autre poste dans sa moyenne à lui.
//
// Anchors à 4/15/19/24, PAS 5/16/20/25 (= seuil de palier - 70) : finalScore utilise
// Math.ceil(70 + block), et ceil(x) >= T dès que x > T-1, donc le vrai seuil d'un palier T est
// block > T-71, pas block >= T-70. Sans ce -1, un rawBlock pile au centile visé (ex. q15)
// produisait déjà un block de 5 pile, donc x=75 pile, donc Or au lieu d'Argent — chaque palier
// « mangeait » la tranche du dessous et décalait toute la distribution d'un cran vers le haut
// (vérifié par simulation : sans le -1, Arc-en-ciel ressortait à ~2x la cible pour tous les
// postes, avec le -1 chaque poste retombe à ~1 point de la cible).
function calibrateBlock(rawBlock: number, position: Position): number {
  const q = POSITION_QUANTILES[position]

  if (rawBlock <= q.q15) {
    return q.q15 > 0 ? Math.max(0, (rawBlock / q.q15) * 4) : 0
  }
  if (rawBlock <= q.q50) {
    return 4 + ((rawBlock - q.q15) / Math.max(0.01, q.q50 - q.q15)) * (15 - 4)
  }
  if (rawBlock <= q.q80) {
    return 15 + ((rawBlock - q.q50) / Math.max(0.01, q.q80 - q.q50)) * (19 - 15)
  }
  if (rawBlock <= q.q90) {
    return 19 + ((rawBlock - q.q80) / Math.max(0.01, q.q90 - q.q80)) * (24 - 19)
  }
  const t = Math.min(1, (rawBlock - q.q90) / Math.max(0.01, RAW_BLOCK_MAX - q.q90))
  return 24 + t * (29 - 24)
}

export interface ScoreBreakdown {
  finalScore: number
  individualBlock: number
  collectiveBlock: number
  tier: CareerTier
}

const EMPTY_STATS: CareerStats = {
  gamesPlayed: 0,
  stats: {},
  proBowls: 0,
  allProFirstTeam: 0,
  mvpSterling: 0,
  offRookieOfYear: false,
  defRookieOfYear: false,
  comebackPOY: 0,
  manOfYear: 0,
  playoffAppearances: 0,
  superBowlWins: 0,
  superBowlMVP: 0,
}

export function computeFinalScore(player: Player): ScoreBreakdown {
  const stats = player.careerStats ?? EMPTY_STATS
  const seasonsPlayed = Math.max(1, player.season)

  const headline = headlineStatDef(player.position)
  const headlineTotal = stats.stats[headline.key] ?? 0
  const statsPerSeason = headlineTotal / seasonsPlayed
  // Une production soutenue, digne des meilleures références réelles à ce poste, doit à elle
  // seule pouvoir porter une carrière vers l'exceptionnel — pas seulement les trophées MVP,
  // qui restent rares et dépendants de la chance d'une seule saison.
  const statsNorm = Math.min(1, statsPerSeason / (headline.seasonTarget * 1.5))
  const rookieNorm = stats.offRookieOfYear || stats.defRookieOfYear ? 1 : 0
  const allStarNorm = diminishing(stats.proBowls, 7)
  const allProNorm = diminishing(stats.allProFirstTeam, 4)
  const sterlingNorm = strongFirst(stats.mvpSterling, 2)

  const individualRaw = statsNorm * 0.22 + rookieNorm * 0.05 + allStarNorm * 0.13 + allProNorm * 0.3 + sterlingNorm * 0.3

  const superBowlNorm = diminishing(stats.superBowlWins, 2)
  const superBowlMvpNorm = strongFirst(stats.superBowlMVP, 2)
  const playoffNorm = diminishing(stats.playoffAppearances, 7)

  const collectiveRaw = superBowlNorm * 0.45 + superBowlMvpNorm * 0.15 + playoffNorm * 0.4

  const individualBlock = Math.round(individualRaw * 17 * 10) / 10
  const collectiveBlock = Math.round(collectiveRaw * 17 * 10) / 10

  const calibratedBlock = calibrateBlock(individualBlock + collectiveBlock, player.position)
  const finalScore = Math.min(99, Math.ceil(70 + calibratedBlock))

  const tier: CareerTier =
    finalScore >= 95
      ? 'Arc-en-ciel'
      : finalScore >= 90
        ? 'Saphir'
        : finalScore >= 86
          ? 'Diamant'
          : finalScore >= 75
            ? 'Or'
            : 'Argent'

  return { finalScore, individualBlock, collectiveBlock, tier }
}
