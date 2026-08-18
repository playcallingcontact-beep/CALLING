import type { LifestyleId } from '../types/player'

export interface LifestyleDef {
  id: LifestyleId
  name: string
  emoji: string
  description: string
}

export const LIFESTYLES: LifestyleDef[] = [
  {
    id: 'discipline',
    name: 'Discipline d’athlète',
    emoji: '🥗',
    description: 'Routine stricte, nutrition, sommeil. Progression physique plus fiable.',
  },
  {
    id: 'equilibre',
    name: 'Équilibré',
    emoji: '⚖️',
    description: 'Sérieux mais vie sociale normale.',
  },
  {
    id: 'popularite',
    name: 'Popularité locale',
    emoji: '🎉',
    description:
      'Devient vite une figure locale : plus d’attention médiatique locale, mais plus de distractions.',
  },
]

export const getLifestyle = (id: LifestyleId) => LIFESTYLES.find((l) => l.id === id)!
