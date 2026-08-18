import type { Player, Position } from '../types/player'
import { overallOf } from './overall'
import { grantAward } from './awardsEngine'

export interface AmateurAwardsResult {
  player: Player
  awardIds: string[]
}

const OFFENSE: Position[] = ['QB', 'WR', 'RB-FB']

function sideAward(position: Position, offenseId: string, defenseId: string): string {
  return OFFENSE.includes(position) ? offenseId : defenseId
}

function eliteCarryBonus(overall: number, base: number, scale: number, cap: number): number {
  return Math.min(cap, Math.max(0, (overall - base) * scale))
}

function posAwardId(position: Position): string {
  if (position === 'QB') return 'ncaa-pos-qb'
  if (position === 'RB-FB') return 'ncaa-pos-rb'
  if (position === 'WR') return 'ncaa-pos-wr'
  if (position === 'EDGE') return 'ncaa-pos-edge'
  return 'ncaa-pos-db' // CB, SS
}

// Distinctions + titres du lycée : le HS ne modélise pas de depth chart, donc tous les joueurs
// sont éligibles aux honneurs individuels — le niveau d'équipe (highSchoolTier) porte
// l'essentiel du parcours collectif, un joueur individuellement dominant peut le tirer vers
// le haut (même logique que l'eliteCarryBonus déjà utilisé côté NFL).
export function applyHighSchoolAwards(player: Player): AmateurAwardsResult {
  let next = player
  const awardIds: string[] = []
  const grant = (id: string) => {
    next = grantAward(next, id)
    awardIds.push(id)
  }
  const overall = overallOf(next)
  const tier = next.highSchoolTier

  // Seuils calés sur la plage d'overall réellement atteignable en HS (~40-70 typique,
  // rarement au-delà de 75) — plus basse que NCAA/NFL, contrairement au reste du jeu qui
  // raisonne sur une échelle 1-99 uniforme.
  if (overall >= 73 && Math.random() < 0.12) {
    grant('hs-national-poy')
    grant(sideAward(next.position, 'hs-national-off-poy', 'hs-national-def-poy'))
    grant('hs-all-us')
  } else if (overall >= 67 && Math.random() < 0.12) {
    grant('hs-state-poy')
    grant('hs-all-us')
  } else if (overall >= 62 && Math.random() < 0.18) {
    grant(sideAward(next.position, 'hs-state-off-poy', 'hs-state-def-poy'))
  } else if (overall >= 58 && Math.random() < 0.15) {
    grant('hs-all-us')
  }

  const carry = eliteCarryBonus(overall, 55, 0.008, 0.15)
  const stateChampProb = [0.03, 0.05, 0.08, 0.13, 0.2][tier - 1] + carry
  if (Math.random() < stateChampProb) {
    grant('hs-state-champion')
    if (overall >= 70 && Math.random() < 0.35) grant('hs-state-championship-mvp')
    if (Math.random() < 0.12 + carry) grant('hs-national-champion')
  }
  if (Math.random() < 0.04 + tier * 0.01) grant('hs-perfect-season')

  return { player: next, awardIds }
}

// Distinctions + titres NCAA : les honneurs individuels supposent une place de titulaire
// (un remplaçant n'a pas la production/visibilité nécessaire), le parcours collectif dépend
// surtout du niveau du programme (collegeTier).
export function applyNcaaAwards(player: Player): AmateurAwardsResult {
  let next = player
  const awardIds: string[] = []
  const grant = (id: string) => {
    next = grantAward(next, id)
    awardIds.push(id)
  }
  const overall = overallOf(next)
  const tier = next.collegeTier ?? 3

  // Seuils calés sur la plage d'overall NCAA réellement observée en cours de saison
  // (~55-85, médiane d'entrée NFL en fin de parcours autour de 78) — nettement sous les
  // seuils NFL puisqu'un joueur ne culmine généralement qu'après le combine/la draft.
  if (next.depthChartStatus === 'starter') {
    if (overall >= 83 && Math.random() < 0.08) {
      grant('ncaa-kaheisman')
      grant(sideAward(next.position, 'ncaa-isswell', 'ncaa-liyamrik'))
      grant('ncaa-walter-camp')
      grant('ncaa-all-us-first')
    } else if (overall >= 76 && Math.random() < 0.14) {
      grant(sideAward(next.position, 'ncaa-isswell', 'ncaa-liyamrik'))
      grant('ncaa-all-us-first')
    } else if (overall >= 70 && Math.random() < 0.18) {
      grant('ncaa-all-us-first')
    } else if (overall >= 62 && Math.random() < 0.2) {
      grant('ncaa-all-us-second')
    }

    if (overall >= 70 && Math.random() < 0.12) grant(posAwardId(next.position))
  }

  const carry = eliteCarryBonus(overall, 65, 0.008, 0.15)
  const confChampProb = [0.05, 0.09, 0.14, 0.2, 0.28][tier - 1] + carry
  const wonConference = Math.random() < confChampProb
  if (wonConference) {
    grant('ncaa-conference-champion')
    if (overall >= 75 && Math.random() < 0.3) grant('ncaa-conference-championship-mvp')
  }

  const cfpProb = wonConference ? 0.55 + carry : 0.05 + carry * 0.5
  const madeCfp = Math.random() < cfpProb
  if (madeCfp) {
    grant('ncaa-cfp')
    if (Math.random() < 0.15 + carry) {
      grant('ncaa-national-champion')
      if (overall >= 78 && Math.random() < 0.3) grant('ncaa-national-championship-mvp')
    }
  }
  if (Math.random() < 0.03 + tier * 0.008) grant('ncaa-undefeated')

  return { player: next, awardIds }
}
