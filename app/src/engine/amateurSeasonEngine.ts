import type { Player } from '../types/player'
import { generateStatsForSeason, mergeStats } from './statGeneration'
import { clamp } from './eventEngine'
import { applyAmateurDevelopment } from './developmentEngine'
import { classifySeasonPerformance, performanceFeedback } from './performanceEngine'
import { overallOf } from './overall'
import { headlineStatDef } from '../data/proStats'
import { applyHighSchoolAwards, applyNcaaAwards } from './amateurAwardsEngine'
import { AWARDS } from '../data/awards'

const HS_GAMES = 10
const COLLEGE_GAMES = 13

export interface AmateurSeasonResult {
  player: Player
  statsThisSeason: Record<string, number>
  gamesPlayed: number
  awardsWon: string[]
}

export function resolveAmateurSeason(player: Player): AmateurSeasonResult {
  if (player.act === 'PRO') {
    return { player, statsThisSeason: {}, gamesPlayed: 0, awardsWon: [] }
  }

  const isCollege = player.act === 'COLLEGE'
  const totalGames = isCollege ? COLLEGE_GAMES : HS_GAMES
  const gamesPlayed = totalGames
  const roleMultiplier = isCollege ? (player.depthChartStatus === 'starter' ? 1 : 0.4) : 1

  const next: Player = { ...player, attributes: applyAmateurDevelopment(player) }

  const statsThisSeason = generateStatsForSeason(next, gamesPlayed, totalGames, roleMultiplier)

  // Feedback de performance : une saison exceptionnelle (ou catastrophique) peut laisser une
  // petite trace sur les attributs, en plus de la progression naturelle — rare et borné.
  const headline = headlineStatDef(next.position)
  const headlineRatio = (statsThisSeason[headline.key] ?? 0) / headline.seasonTarget
  const { tier } = classifySeasonPerformance({
    overall: overallOf(next),
    headlineRatio,
    gamesPlayed,
    totalGames,
    role: isCollege ? (next.depthChartStatus ?? 'starter') : 'starter',
    madePlayoffs: false,
    awardsCount: 0,
  })
  const feedback = performanceFeedback(tier)
  if (feedback) {
    next.attributes = {
      ...next.attributes,
      [feedback.attribute]: clamp(next.attributes[feedback.attribute] + feedback.delta),
    }
  }

  if (isCollege) {
    const prev = player.collegeStats
    next.collegeStats = { gamesPlayed: prev.gamesPlayed + gamesPlayed, stats: mergeStats(prev.stats, statsThisSeason) }
  } else {
    const prev = player.hsStats
    next.hsStats = { gamesPlayed: prev.gamesPlayed + gamesPlayed, stats: mergeStats(prev.stats, statsThisSeason) }
  }

  const { player: withAwards, awardIds } = isCollege ? applyNcaaAwards(next) : applyHighSchoolAwards(next)
  const awardsWon = awardIds.map((id) => AWARDS[id]?.name ?? id)

  return { player: withAwards, statsThisSeason, gamesPlayed, awardsWon }
}
