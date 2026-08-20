import type { Position } from '../types/player'

export interface PositionDef {
  id: Position
  name: string
  side: 'Offense' | 'Defense'
  emoji: string
  description: string
}

export const POSITIONS: PositionDef[] = [
  {
    id: 'QB',
    name: 'Quarterback',
    side: 'Offense',
    emoji: '🎯',
    description: 'The most scrutinized position, most dependent on mental/leadership. Slow climb, late peak possible.',
  },
  {
    id: 'WR',
    name: 'Wide Receiver',
    side: 'Offense',
    emoji: '🙌',
    description: 'Highly visible offensive stats, dependent on speed and route-running technique.',
  },
  {
    id: 'RB-FB',
    name: 'Running Back / Fullback',
    side: 'Offense',
    emoji: '🏃',
    description: 'Immediate, easy-to-read statistical impact, but the shortest and harshest age curve in the game.',
  },
  {
    id: 'CB',
    name: 'Cornerback',
    side: 'Defense',
    emoji: '🔒',
    description: 'Highly exposed to visible individual mistakes, very dependent on pure speed.',
  },
  {
    id: 'SS',
    name: 'Strong Safety',
    side: 'Defense',
    emoji: '🛡️',
    description: 'Physical/game-reading hybrid, a versatile profile against both the run and the pass.',
  },
  {
    id: 'EDGE',
    name: 'Edge Rusher',
    side: 'Defense',
    emoji: '⚡',
    description: 'Strong statistical value (sacks), dominant physicality, good individual award potential.',
  },
]

export const getPosition = (id: Position) => POSITIONS.find((p) => p.id === id)!
