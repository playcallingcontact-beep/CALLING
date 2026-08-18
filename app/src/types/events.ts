import type { AttributeKey, Player, Position } from './player'

export interface EventEffect {
  attribute?: AttributeKey
  delta?: number
  exposureDelta?: number
  flag?: string
  flagValue?: boolean | number | string
  log?: string
}

export interface EventEffectVariant {
  weight: number
  effects: EventEffect[]
}

export interface EventChoice {
  id: string
  label: string
  // Utilisé tel quel si `variants` est absent. Reste la voie simple/déterministe pour un
  // choix qui doit toujours donner le même résultat.
  effects: EventEffect[]
  // Si présent, un variant est tiré au sort (pondéré par `weight`) à chaque résolution — le
  // même choix peut donc être un bonus une carrière et un malus la suivante. `effects` sert
  // alors de valeur par défaut ignorée (gardé pour la rétrocompatibilité du type).
  variants?: EventEffectVariant[]
}

// Chaque saison pioche exactement un événement par thème (voir pickSeasonEvents) — donc
// toujours 3 événements/saison, un de chaque catégorie, plutôt que 3 au hasard dans un pool
// unique.
export type EventTheme = 'FOOTBALL' | 'VIE_SOCIALE' | 'PERSONNEL'

export interface GameEvent {
  id: string
  arcId?: string
  theme: EventTheme
  // Un même scénario peut être valable sur plusieurs actes (ex: une lecture de jeu QB reste
  // pertinente en Lycée, en College et en NFL) — d'où un tableau plutôt qu'une valeur unique.
  acts: ('HS' | 'COLLEGE' | 'PRO')[]
  seasonMin?: number
  seasonMax?: number
  positions?: Position[]
  requiresFlag?: { key: string; value?: boolean | number | string }
  // Plusieurs conditions cumulatives (ET logique) — utile pour des chaînes de conséquences
  // qui dépendent de plusieurs choix passés à la fois.
  requiresFlags?: { key: string; value?: boolean | number | string }[]
  forbidsFlag?: string
  forbidsFlags?: string[]
  emoji: string
  title: string
  context: string
  choices: EventChoice[]
  weight?: number
}

export type EventEligibility = (player: Player, event: GameEvent) => boolean
