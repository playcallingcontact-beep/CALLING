import type { Player } from '../types/player'
import { POSITION_STATS } from '../data/proStats'
import { overallOf } from './overall'

export function generateStatsForSeason(
  player: Player,
  gamesPlayed: number,
  totalGames: number,
  roleMultiplier: number,
): Record<string, number> {
  const overall = overallOf(player)
  const stats: Record<string, number> = {}
  for (const def of POSITION_STATS[player.position]) {
    const variance = 0.85 + Math.random() * 0.3
    stats[def.key] = Math.round(def.seasonTarget * (overall / 70) * (gamesPlayed / totalGames) * roleMultiplier * variance)
  }
  return stats
}

export function mergeStats(base: Record<string, number>, addition: Record<string, number>): Record<string, number> {
  const merged = { ...base }
  for (const [key, value] of Object.entries(addition)) {
    merged[key] = (merged[key] ?? 0) + value
  }
  return merged
}
