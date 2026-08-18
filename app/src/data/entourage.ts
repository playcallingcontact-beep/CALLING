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
    name: 'Famille encadrante',
    emoji: '👨‍👩‍👧',
    description: 'Gère les offres de recrutement, protège des dérives.',
  },
  {
    id: 'mentor-prive',
    name: 'Recruteur / mentor personnel',
    emoji: '🕴️',
    description: 'Pousse vers l’exposition maximale, mais coûte de l’argent et crée une dépendance.',
  },
  {
    id: 'cercle-amis',
    name: 'Cercle d’amis du lycée',
    emoji: '🤙',
    description: 'Fidélité forte, mais influence parfois négative sur la discipline.',
  },
]

export const getEntourage = (id: EntourageId) => ENTOURAGE.find((e) => e.id === id)!
