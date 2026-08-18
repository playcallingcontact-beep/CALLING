import type { Position } from '../types/player'

export interface StatDef {
  key: string
  label: string
  seasonTarget: number
}

// seasonTarget = valeur de référence pour une saison "moyenne" (overall 70, titulaire, 17 matchs).
export const POSITION_STATS: Record<Position, StatDef[]> = {
  QB: [
    { key: 'passYards', label: 'Yards de passe', seasonTarget: 3500 },
    { key: 'rushYards', label: 'Yards de course', seasonTarget: 150 },
    { key: 'touchdowns', label: 'Touchdowns', seasonTarget: 24 },
  ],
  WR: [
    { key: 'recYards', label: 'Yards de réception', seasonTarget: 900 },
    { key: 'receptions', label: 'Réceptions', seasonTarget: 65 },
    { key: 'touchdowns', label: 'Touchdowns', seasonTarget: 6 },
  ],
  'RB-FB': [
    { key: 'rushYards', label: 'Yards de course', seasonTarget: 1000 },
    { key: 'recYards', label: 'Yards de réception', seasonTarget: 250 },
    { key: 'touchdowns', label: 'Touchdowns', seasonTarget: 8 },
  ],
  CB: [
    { key: 'interceptions', label: 'Interceptions', seasonTarget: 3 },
    { key: 'tackles', label: 'Tacles', seasonTarget: 55 },
    { key: 'passesDefended', label: 'Passes déviées', seasonTarget: 10 },
  ],
  SS: [
    { key: 'tackles', label: 'Tacles', seasonTarget: 90 },
    { key: 'interceptions', label: 'Interceptions', seasonTarget: 2 },
    { key: 'sacks', label: 'Sacks', seasonTarget: 1 },
  ],
  EDGE: [
    { key: 'sacks', label: 'Sacks', seasonTarget: 8 },
    { key: 'tackles', label: 'Tacles', seasonTarget: 45 },
    { key: 'forcedFumbles', label: 'Fumbles forcés', seasonTarget: 2 },
  ],
}

// Statistique "phare" utilisée pour normaliser le bloc individuel du score final.
export const HEADLINE_STAT: Record<Position, string> = {
  QB: 'passYards',
  WR: 'recYards',
  'RB-FB': 'rushYards',
  CB: 'interceptions',
  SS: 'tackles',
  EDGE: 'sacks',
}

export function headlineStatDef(position: Position): StatDef {
  const key = HEADLINE_STAT[position]
  return POSITION_STATS[position].find((s) => s.key === key)!
}
