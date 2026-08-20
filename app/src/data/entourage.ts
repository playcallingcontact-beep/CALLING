import type { EntourageId } from '../types/player'

export interface EntourageDef {
  id: EntourageId
  name: string
  emoji: string
  description: string
}

export const ENTOURAGE: EntourageDef[] = [
  {
    id: 'famille',
    name: 'Supportive family',
    emoji: '👨‍👩‍👧',
    description: 'Manages recruiting offers, protects against bad influences.',
  },
  {
    id: 'mentor-prive',
    name: 'Private recruiter / mentor',
    emoji: '🕴️',
    description: 'Pushes for maximum exposure, but costs money and creates dependency.',
  },
  {
    id: 'cercle-amis',
    name: 'High school friend group',
    emoji: '🤙',
    description: 'Strong loyalty, but can sometimes be a bad influence on discipline.',
  },
]

export const getEntourage = (id: EntourageId) => ENTOURAGE.find((e) => e.id === id)!
