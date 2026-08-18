import type { InjuryRecord, InjurySeverity, Player } from '../types/player'
import { seasonInjuryProbability } from './ageCurves'

interface InjuryTierDef {
  severity: InjurySeverity
  weight: number
  gamesOutRange: [number, number]
  attributeImpact: number
  description: string
}

// Poids relatifs entre eux (pas besoin de sommer à 1) : légère très fréquente, catastrophique
// rare. Ne remplace pas DESTIN BRISÉE (proSeasonEngine.ts la vérifie avant, séparément et
// inchangée) — cette table ne gère que les blessures qui n'y mettent pas fin.
const INJURY_TIERS: InjuryTierDef[] = [
  {
    severity: 'legere',
    weight: 0.55,
    gamesOutRange: [1, 3],
    attributeImpact: 0,
    description: 'Blessure légère, quelques matchs manqués, sans séquelle notable.',
  },
  {
    severity: 'moyenne',
    weight: 0.28,
    gamesOutRange: [4, 7],
    attributeImpact: 1.5,
    description: 'Blessure plus sérieuse, absence prolongée et petite gêne physique.',
  },
  {
    severity: 'grave',
    weight: 0.14,
    gamesOutRange: [8, 13],
    attributeImpact: 3,
    description: 'Blessure grave, longue absence et séquelles physiques notables.',
  },
  {
    severity: 'catastrophique',
    weight: 0.03,
    gamesOutRange: [14, 17],
    attributeImpact: 5,
    description: 'Blessure très grave — la saison est quasiment perdue et le corps en garde la trace.',
  },
]

const TOTAL_WEIGHT = INJURY_TIERS.reduce((sum, t) => sum + t.weight, 0)

const HISTORY_RISK_BUMP_PER_INJURY = 0.01
const HISTORY_RISK_CAP = 0.08

// Des blessures répétées augmentent légèrement le risque futur, borné pour ne jamais rendre
// une saison mathématiquement condamnée.
export function injuryRiskModifier(injuryHistory: InjuryRecord[]): number {
  return Math.min(HISTORY_RISK_CAP, injuryHistory.length * HISTORY_RISK_BUMP_PER_INJURY)
}

export interface InjuryRoll {
  severity: InjurySeverity
  gamesOut: number
  attributeImpact: number
  description: string
}

export function rollInjury(player: Player): InjuryRoll | null {
  const base = seasonInjuryProbability(player.position, player.age)
  const prob = Math.min(0.6, base + injuryRiskModifier(player.injuryHistory))
  if (Math.random() >= prob) return null

  const roll = Math.random() * TOTAL_WEIGHT
  let cumulative = 0
  let tier = INJURY_TIERS[0]
  for (const t of INJURY_TIERS) {
    cumulative += t.weight
    if (roll <= cumulative) {
      tier = t
      break
    }
  }

  const [minGames, maxGames] = tier.gamesOutRange
  const gamesOut = minGames + Math.floor(Math.random() * (maxGames - minGames + 1))
  return { severity: tier.severity, gamesOut, attributeImpact: tier.attributeImpact, description: tier.description }
}

export function recordInjury(player: Player, roll: InjuryRoll): InjuryRecord {
  return {
    age: player.age,
    season: player.season,
    severity: roll.severity,
    gamesOut: roll.gamesOut,
    attributeImpacted: roll.attributeImpact > 0 ? 'physique' : undefined,
    description: roll.description,
  }
}
