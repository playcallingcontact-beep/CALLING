import type { Position } from '../types/player'
import type { CareerTier } from '../engine/scoreEngine'

export const TIER_TITLE: Record<CareerTier, string> = {
  Argent: 'Joueur de rôle BFL',
  Or: 'Titulaire reconnu',
  Diamant: 'Star de la ligue',
  Saphir: 'Icône de la ligue',
  'Arc-en-ciel': 'Légende de la BFL',
}

export const TIER_BADGE: Record<CareerTier, string> = {
  Argent: 'Carrière Argent',
  Or: 'Carrière Or',
  Diamant: 'Carrière Diamant',
  Saphir: 'Carrière Saphir',
  'Arc-en-ciel': 'Carrière Arc-en-ciel',
}

// Habillage visuel de la carte de fin de carrière par palier — un dégradé (même pour les
// teintes unies, en répétant la couleur) pour pouvoir toujours rendre la bordure via la même
// technique CSS (wrapper en dégradé + intérieur, cf. CareerCard.tsx), y compris l'arc-en-ciel.
export interface TierAccent {
  borderGradient: string
  badgeBg: string
  badgeText: string
  glow: string
}

export const TIER_ACCENT: Record<CareerTier, TierAccent> = {
  Argent: {
    borderGradient: 'linear-gradient(135deg, #dfe4ea, #9aa5b1)',
    badgeBg: '#c7cdd6',
    badgeText: '#2f333a',
    glow: 'rgba(199, 205, 214, 0.45)',
  },
  Or: {
    borderGradient: 'linear-gradient(135deg, #f7d774, #d69a1f)',
    badgeBg: 'var(--de-gold)',
    badgeText: '#3a2a05',
    glow: 'rgba(240, 185, 61, 0.5)',
  },
  Diamant: {
    borderGradient: 'linear-gradient(135deg, #e8fbff, #7fd8f2)',
    badgeBg: '#8fe3ff',
    badgeText: '#0a3a4a',
    glow: 'rgba(143, 227, 255, 0.55)',
  },
  Saphir: {
    borderGradient: 'linear-gradient(135deg, #6f9bff, #1c3fa8)',
    badgeBg: '#3b6fe0',
    badgeText: '#ffffff',
    glow: 'rgba(59, 111, 224, 0.55)',
  },
  'Arc-en-ciel': {
    borderGradient: 'linear-gradient(135deg, #ff5757, #ffbd59, #ffe459, #59ff9e, #59d3ff, #a259ff, #ff59d3)',
    badgeBg: 'linear-gradient(90deg, #ff5757, #ffbd59, #ffe459, #59ff9e, #59d3ff, #a259ff, #ff59d3)',
    badgeText: '#1a1a1a',
    glow: 'rgba(178, 143, 255, 0.55)',
  },
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
