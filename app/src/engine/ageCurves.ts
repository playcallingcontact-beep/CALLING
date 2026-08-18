import type { Position } from '../types/player'

export interface AgeCurve {
  peakStart: number
  peakEnd: number
  declineRate: number
  typicalRetirementAge: number
  injuryRisk: 'modere' | 'eleve' | 'tres-eleve'
}

export const AGE_CURVES: Record<Position, AgeCurve> = {
  QB: { peakStart: 28, peakEnd: 34, declineRate: 1.5, typicalRetirementAge: 38, injuryRisk: 'modere' },
  WR: { peakStart: 26, peakEnd: 29, declineRate: 2.5, typicalRetirementAge: 32, injuryRisk: 'modere' },
  'RB-FB': { peakStart: 23, peakEnd: 26, declineRate: 5, typicalRetirementAge: 29, injuryRisk: 'tres-eleve' },
  CB: { peakStart: 25, peakEnd: 28, declineRate: 4, typicalRetirementAge: 31, injuryRisk: 'modere' },
  SS: { peakStart: 26, peakEnd: 29, declineRate: 2, typicalRetirementAge: 33, injuryRisk: 'modere' },
  EDGE: { peakStart: 25, peakEnd: 29, declineRate: 3, typicalRetirementAge: 32, injuryRisk: 'eleve' },
}

const INJURY_BASE_RATE: Record<AgeCurve['injuryRisk'], number> = {
  modere: 0.1,
  eleve: 0.16,
  'tres-eleve': 0.24,
}

export function isInDecline(position: Position, age: number): boolean {
  return age > AGE_CURVES[position].peakEnd
}

// Progression naturelle des attributs avec l'âge et l'expérience, avant même
// l'effet des choix narratifs : montée franche tant que le joueur se développe,
// affinement plus lent une fois entré dans sa fenêtre de pic, plateau ensuite
// (le déclin post-pic reste géré séparément, poste par poste).
export function seasonalDevelopment(position: Position, age: number): number {
  const curve = AGE_CURVES[position]
  if (age < curve.peakStart) return 2
  if (age <= curve.peakEnd) return 1
  return 0
}

export function seasonInjuryProbability(position: Position, age: number): number {
  const curve = AGE_CURVES[position]
  const base = INJURY_BASE_RATE[curve.injuryRisk]
  const ageFactor = age > curve.peakEnd ? (age - curve.peakEnd) * 0.015 : 0
  return Math.min(0.5, base + ageFactor)
}

// Calibré pour qu'une carrière Pro complète (souvent 12-20 saisons) reste à ~5% de chances
// cumulées de DESTIN BRISÉE, pas 20%+ — le risque doit rester un vrai coup du sort rare,
// pas une quasi-certitude statistique sur une longue carrière.
export function destinBriseeProbability(position: Position, age: number): number {
  const curve = AGE_CURVES[position]
  const riskMultiplier = curve.injuryRisk === 'tres-eleve' ? 1.6 : curve.injuryRisk === 'eleve' ? 1.2 : 1
  const ageFactor = age > curve.peakEnd ? (age - curve.peakEnd) * 0.0003 : 0
  return (0.003 + ageFactor) * riskMultiplier
}
