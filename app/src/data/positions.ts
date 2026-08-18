import type { Position } from '../types/player'

export interface PositionDef {
  id: Position
  name: string
  side: 'Offense' | 'Défense'
  emoji: string
  description: string
}

export const POSITIONS: PositionDef[] = [
  {
    id: 'QB',
    name: 'Quarterback',
    side: 'Offense',
    emoji: '🎯',
    description:
      'Poste le plus scruté, le plus dépendant du mental/leadership. Montée lente, pic tardif possible.',
  },
  {
    id: 'WR',
    name: 'Wide Receiver',
    side: 'Offense',
    emoji: '🙌',
    description:
      'Statistiques offensives très visibles, dépendant de la vitesse et de la technique de course de route.',
  },
  {
    id: 'RB-FB',
    name: 'Running Back / Fullback',
    side: 'Offense',
    emoji: '🏃',
    description:
      'Impact statistique immédiat et lisible, mais la courbe d’âge la plus courte et la plus brutale du jeu.',
  },
  {
    id: 'CB',
    name: 'Cornerback',
    side: 'Défense',
    emoji: '🔒',
    description:
      'Poste très exposé aux erreurs individuelles visibles, très dépendant de la vitesse pure.',
  },
  {
    id: 'SS',
    name: 'Strong Safety',
    side: 'Défense',
    emoji: '🛡️',
    description:
      'Hybride physique / lecture de jeu, profil polyvalent contre la course et la passe.',
  },
  {
    id: 'EDGE',
    name: 'Edge Rusher',
    side: 'Défense',
    emoji: '⚡',
    description:
      'Forte valeur statistique (sacks), physique dominant, bon potentiel d’awards individuels.',
  },
]

export const getPosition = (id: Position) => POSITIONS.find((p) => p.id === id)!
