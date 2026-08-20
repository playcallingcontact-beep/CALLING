import type { Player } from '../types/player'
import { NFL_TEAMS, type NflTeamDef, getTeamTier } from '../data/nflTeams'
import { overallOf } from './overall'
import { grantAward } from './awardsEngine'

export type PlayoffRoundId = 'wildcard' | 'divisional' | 'conference' | 'superbowl'

export interface PlayoffRoundDef {
  round: PlayoffRoundId
  roundLabel: string
  opponentName: string
  opponentColors: [string, string]
  winProbability: number
}

export const PLAYOFF_ROUND_LABELS: Record<PlayoffRoundId, string> = {
  wildcard: 'Wild Card',
  divisional: 'Divisional Round',
  conference: 'Conference Championship',
  superbowl: 'Ring Bowl',
}

// La tête de série n°1 de la conférence bénéficie d'un bye direct en Divisional Round, comme
// en NFL réelle (7 équipes par conférence, seule la n°1 ne joue pas le Wild Card). Le seed
// dépend de la force de la franchise plutôt que d'un classement simulé match par match.
export function determineSeed(tier: number): number {
  const base = 8 - tier * 1.3
  const noise = Math.random() * 3 - 1.5
  return Math.min(7, Math.max(1, Math.round(base + noise)))
}

function pickOpponent(ownTeamName: string, conference: NflTeamDef['conference'], sameConference: boolean): NflTeamDef {
  const pool = NFL_TEAMS.filter(
    (t) => t.name !== ownTeamName && (sameConference ? t.conference === conference : t.conference !== conference),
  )
  return pool[Math.floor(Math.random() * pool.length)]
}

// Centré sur 0.60 pour un affrontement équilibré : un joueur/franchise nettement supérieur
// peut dépasser 0.80, une franchise modeste en playoffs surprise peut tomber sous 0.35. La
// moyenne vise à rester proche du taux "un titre tous les ~6-7 ans de playoffs" déjà calibré
// côté simulation, tout en rendant le résultat sensible à la qualité réelle du joueur/de
// l'équipe plutôt qu'un simple jet à 18% plat indépendant du contexte.
function roundWinProbability(player: Player, ownTier: number, opponent: NflTeamDef): number {
  const overall = overallOf(player)
  const strengthDiff = (ownTier - opponent.tier) * 0.04
  const overallFactor = (overall - 72) * 0.0035
  return Math.min(0.85, Math.max(0.35, 0.6 + strengthDiff + overallFactor))
}

export function buildPlayoffBracket(player: Player, ownTeamName: string): PlayoffRoundDef[] {
  const ownTier = getTeamTier(ownTeamName)
  const ownTeam = NFL_TEAMS.find((t) => t.name === ownTeamName)
  const conference = ownTeam?.conference ?? 'Liberty'
  const seed = determineSeed(ownTier)
  const rounds: PlayoffRoundId[] =
    seed === 1 ? ['divisional', 'conference', 'superbowl'] : ['wildcard', 'divisional', 'conference', 'superbowl']

  return rounds.map((round) => {
    const opponent = pickOpponent(ownTeamName, conference, round !== 'superbowl')
    return {
      round,
      roundLabel: PLAYOFF_ROUND_LABELS[round],
      opponentName: opponent.name,
      opponentColors: opponent.colors,
      winProbability: roundWinProbability(player, ownTier, opponent),
    }
  })
}

export function resolvePlayoffRound(winProbability: number): boolean {
  return Math.random() < winProbability
}

export interface PlayoffTitleResult {
  player: Player
  wonMVP: boolean
}

export function applySuperBowlWin(player: Player): PlayoffTitleResult {
  const overall = overallOf(player)
  const wonMVP = overall >= 80 && Math.random() < 0.3
  const cs = player.careerStats!
  let next: Player = {
    ...player,
    careerStats: {
      ...cs,
      superBowlWins: cs.superBowlWins + 1,
      superBowlMVP: cs.superBowlMVP + (wonMVP ? 1 : 0),
    },
  }
  next = grantAward(next, 'nfl-super-bowl-champion')
  if (wonMVP) next = grantAward(next, 'nfl-super-bowl-mvp')
  return { player: next, wonMVP }
}

export function applyConferenceChampionshipWin(player: Player): PlayoffTitleResult {
  const overall = overallOf(player)
  const wonMVP = overall >= 78 && Math.random() < 0.3
  let next = grantAward(player, 'nfl-conference-champion')
  if (wonMVP) next = grantAward(next, 'nfl-conference-championship-mvp')
  return { player: next, wonMVP }
}
