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
    name: 'Athlete\'s discipline',
    emoji: '🥗',
    description: 'Strict routine, nutrition, sleep. More reliable physical progression.',
  },
  {
    id: 'equilibre',
    name: 'Balanced',
    emoji: '⚖️',
    description: 'Serious but a normal social life.',
  },
  {
    id: 'popularite',
    name: 'Local popularity',
    emoji: '🎉',
    description: 'Quickly becomes a local figure: more local media attention, but more distractions.',
  },
]

export const getLifestyle = (id: LifestyleId) => LIFESTYLES.find((l) => l.id === id)!
