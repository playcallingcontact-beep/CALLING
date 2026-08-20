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
    name: 'Elite high school program',
    emoji: '🏫',
    description: 'A school with tradition and strong coaching, but fierce internal competition from day one.',
    attributes: { physique: 58, technique: 52, mental: 48, leadership: 44, exposition: 35 },
  },
  {
    id: 'multi-sport',
    name: 'Multi-sport athlete',
    emoji: '🏀',
    description: 'Coming from another sport (basketball, track), raw physical profile, less technically polished at football.',
    attributes: { physique: 62, technique: 44, mental: 55, leadership: 46, exposition: 15 },
  },
  {
    id: 'fils-ancien-pro',
    name: 'Son of a former pro',
    emoji: '👨‍👦',
    description: 'Already a name and a network, but heavy pressure and expectations from high school on.',
    attributes: { physique: 50, technique: 54, mental: 42, leadership: 58, exposition: 40 },
  },
  {
    id: 'walk-on-rural',
    name: 'Rural walk-on',
    emoji: '🌾',
    description: 'Barely seen by recruiters, highly motivated, has to get noticed on pure performance.',
    attributes: { physique: 56, technique: 58, mental: 60, leadership: 38, exposition: 8 },
  },
  {
    id: 'prodige-precoce',
    name: 'Early prodigy',
    emoji: '💎',
    description: 'Excellent game-reading from a young age (especially relevant for QB), physical tools still developing.',
    attributes: { physique: 46, technique: 62, mental: 50, leadership: 50, exposition: 30 },
  },
]

export const getOrigin = (id: OriginId) => ORIGINS.find((o) => o.id === id)!
