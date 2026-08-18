import type { AttributeKey } from '../types/player'
import { clamp } from './eventEngine'

export type PerformanceTier = 'catastrophique' | 'mauvaise' | 'moyenne' | 'bonne' | 'excellente' | 'elite'

export interface SeasonPerformance {
  note: number
  tier: PerformanceTier
}

// Étend le calcul de note déjà utilisé côté Pro (overall + playoffs + hasard) en y ajoutant
// la production réelle de la saison, le temps de jeu et le rôle — pour que la classification
// reflète la performance jouée, pas seulement le talent brut.
export function classifySeasonPerformance(params: {
  overall: number
  headlineRatio: number
  gamesPlayed: number
  totalGames: number
  role: 'starter' | 'backup'
  madePlayoffs: boolean
  awardsCount: number
}): SeasonPerformance {
  const { overall, headlineRatio, gamesPlayed, totalGames, role, madePlayoffs, awardsCount } = params
  const healthFactor = totalGames > 0 ? gamesPlayed / totalGames : 1
  const roleFactor = role === 'starter' ? 1 : 0.6

  const raw =
    overall / 10 +
    Math.min(1.5, headlineRatio) * 1.2 +
    (madePlayoffs ? 0.3 : -0.2) +
    awardsCount * 0.4 +
    (Math.random() * 1.4 - 0.7)

  const note = Math.round(clamp(raw * healthFactor * roleFactor, 1, 10) * 10) / 10

  const tier: PerformanceTier =
    note >= 9
      ? 'elite'
      : note >= 7.5
        ? 'excellente'
        : note >= 6
          ? 'bonne'
          : note >= 4
            ? 'moyenne'
            : note >= 2.5
              ? 'mauvaise'
              : 'catastrophique'

  return { note, tier }
}

// Feedback rare et borné : seules les saisons extrêmes laissent une trace sur les attributs,
// et toujours un delta minime (±1). Jamais de formule mécanique du type "+yards = +OVR" —
// le moteur d'événements/choix reste le principal levier de progression.
export function performanceFeedback(tier: PerformanceTier): { attribute: AttributeKey; delta: number } | null {
  if (tier === 'elite' && Math.random() < 0.3) {
    return { attribute: Math.random() < 0.5 ? 'mental' : 'technique', delta: 1 }
  }
  if (tier === 'excellente' && Math.random() < 0.2) {
    return { attribute: 'mental', delta: 1 }
  }
  if (tier === 'catastrophique' && Math.random() < 0.25) {
    return { attribute: 'mental', delta: -1 }
  }
  return null
}
