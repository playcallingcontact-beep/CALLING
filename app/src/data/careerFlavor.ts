import type { Position } from '../types/player'
import type { CareerTier } from '../engine/scoreEngine'

export const TIER_TITLE: Record<CareerTier, string> = {
  Normale: 'Joueur de rôle NFL',
  Solide: 'Titulaire reconnu',
  Exceptionnelle: 'Star de la ligue',
  'Légende Absolue': 'Légende de la NFL',
}

export const TIER_BADGE: Record<CareerTier, string> = {
  Normale: 'Carrière normale',
  Solide: 'Carrière solide',
  Exceptionnelle: 'Carrière exceptionnelle',
  'Légende Absolue': 'Légende absolue',
}

const NICKNAMES: Record<Position, string[]> = {
  QB: ['le stratège', 'le bras d’or', 'le commandant', 'le maître du fourth quarter'],
  WR: ['les mains sûres', 'l’éclair', 'le voleur de yards', 'le magicien des lignes de touche'],
  'RB-FB': ['le marteau', 'le fantôme du backfield', 'la locomotive', 'le briseur de tacles'],
  CB: ['le verrou', 'l’ombre', 'le voleur de ballons', 'le mur infranchissable'],
  SS: ['le gardien', 'le mur arrière', 'le stratège défensif', 'le dernier rempart'],
  EDGE: ['le chasseur', 'la tempête', 'le cauchemar des tackles', 'le spécialiste du sack'],
}

export function pickNickname(position: Position): string {
  const options = NICKNAMES[position]
  return options[Math.floor(Math.random() * options.length)]
}
