import type { Attributes, Position } from '../types/player'

interface OverallWeights {
  physique: number
  technique: number
  mental: number
  leadership: number
}

// Poids par poste : reflète ce qui fait vraiment un bon joueur à ce poste,
// plutôt qu'une simple moyenne brute des 4 attributs.
const OVERALL_WEIGHTS: Record<Position, OverallWeights> = {
  QB: { physique: 0.15, technique: 0.3, mental: 0.35, leadership: 0.2 },
  WR: { physique: 0.35, technique: 0.35, mental: 0.15, leadership: 0.15 },
  'RB-FB': { physique: 0.45, technique: 0.25, mental: 0.15, leadership: 0.15 },
  CB: { physique: 0.35, technique: 0.3, mental: 0.2, leadership: 0.15 },
  SS: { physique: 0.3, technique: 0.25, mental: 0.25, leadership: 0.2 },
  EDGE: { physique: 0.4, technique: 0.3, mental: 0.15, leadership: 0.15 },
}

export function overallOf(player: { position: Position; attributes: Attributes }): number {
  const w = OVERALL_WEIGHTS[player.position]
  const a = player.attributes
  const weighted = a.physique * w.physique + a.technique * w.technique + a.mental * w.mental + a.leadership * w.leadership
  return Math.round(weighted)
}
