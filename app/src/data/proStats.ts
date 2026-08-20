import type { Position } from '../types/player'

export interface StatDef {
  key: string
  label: string
  seasonTarget: number
}

// seasonTarget = valeur de référence pour une saison "moyenne" (overall 70, titulaire, 17 matchs).
export const POSITION_STATS: Record<Position, StatDef[]> = {
  QB: [
    { key: 'passYards', label: 'Passing Yards', seasonTarget: 3500 },
    { key: 'rushYards', label: 'Rushing Yards', seasonTarget: 150 },
    { key: 'touchdowns', label: 'Touchdowns', seasonTarget: 24 },
  ],
  WR: [
    { key: 'recYards', label: 'Receiving Yards', seasonTarget: 900 },
    { key: 'receptions', label: 'Receptions', seasonTarget: 65 },
    { key: 'touchdowns', label: 'Touchdowns', seasonTarget: 6 },
  ],
  'RB-FB': [
    { key: 'rushYards', label: 'Rushing Yards', seasonTarget: 1000 },
    { key: 'recYards', label: 'Receiving Yards', seasonTarget: 250 },
    { key: 'touchdowns', label: 'Touchdowns', seasonTarget: 8 },
  ],
  CB: [
    { key: 'interceptions', label: 'Interceptions', seasonTarget: 3 },
    { key: 'tackles', label: 'Tackles', seasonTarget: 55 },
    { key: 'passesDefended', label: 'Passes Defended', seasonTarget: 10 },
  ],
  SS: [
    { key: 'tackles', label: 'Tackles', seasonTarget: 90 },
    { key: 'interceptions', label: 'Interceptions', seasonTarget: 2 },
    { key: 'sacks', label: 'Sacks', seasonTarget: 1 },
  ],
  EDGE: [
    { key: 'sacks', label: 'Sacks', seasonTarget: 8 },
    { key: 'tackles', label: 'Tackles', seasonTarget: 45 },
    { key: 'forcedFumbles', label: 'Forced Fumbles', seasonTarget: 2 },
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
