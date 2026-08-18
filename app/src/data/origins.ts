import type { Attributes, OriginId } from '../types/player'

export interface OriginDef {
  id: OriginId
  name: string
  emoji: string
  description: string
  attributes: Attributes
}

export const ORIGINS: OriginDef[] = [
  {
    id: 'programme-elite',
    name: 'Programme lycéen élite',
    emoji: '🏫',
    description:
      'Lycée avec tradition, bon encadrement, mais concurrence interne forte dès le départ.',
    attributes: { physique: 58, technique: 52, mental: 48, leadership: 44, exposition: 35 },
  },
  {
    id: 'multi-sport',
    name: 'Athlète multi-sport',
    emoji: '🏀',
    description:
      'Vient d’un autre sport (basket, athlétisme), profil physique brut, football moins maîtrisé techniquement.',
    attributes: { physique: 62, technique: 44, mental: 55, leadership: 46, exposition: 15 },
  },
  {
    id: 'fils-ancien-pro',
    name: 'Fils d’ancien pro',
    emoji: '👨‍👦',
    description: 'Déjà un nom, du réseau, mais pression et attentes fortes dès le lycée.',
    attributes: { physique: 50, technique: 54, mental: 42, leadership: 58, exposition: 40 },
  },
  {
    id: 'walk-on-rural',
    name: 'Walk-on de zone rurale',
    emoji: '🌾',
    description: 'Peu vu par les recruteurs, très motivé, doit se faire remarquer par la performance pure.',
    attributes: { physique: 56, technique: 58, mental: 60, leadership: 38, exposition: 8 },
  },
  {
    id: 'prodige-precoce',
    name: 'Prodige précoce',
    emoji: '💎',
    description:
      'Très bonne lecture du jeu dès le plus jeune âge (surtout pertinent pour QB), physique encore à développer.',
    attributes: { physique: 46, technique: 62, mental: 50, leadership: 50, exposition: 30 },
  },
]

export const getOrigin = (id: OriginId) => ORIGINS.find((o) => o.id === id)!
