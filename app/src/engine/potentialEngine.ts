// Potentiel individuel caché : ne module QUE la vitesse de développement naturelle
// (voir developmentEngine.ts). Ne doit jamais entrer dans engine/overall.ts.

export type PotentialTier = 'limite' | 'moyen' | 'solide' | 'eleve' | 'exceptionnel'

// Moyenne de 3 tirages uniformes -> distribution en cloche centrée ~50, extrêmes rares,
// sans dépendance externe à une lib de random gaussien.
export function rollPotential(): number {
  const sum = Math.random() * 100 + Math.random() * 100 + Math.random() * 100
  return Math.round(sum / 3)
}

// 0 -> 0.75x (développement lent), 50 -> ~1.05x, 100 -> 1.35x (développement rapide).
// Volontairement borné : le potentiel accélère ou ralentit la croissance automatique,
// il ne la bloque jamais et ne plafonne rien — les choix du joueur restent non affectés.
export function potentialGrowthMultiplier(potential: number): number {
  return 0.75 + (potential / 100) * 0.6
}

export function potentialTierOf(potential: number): PotentialTier {
  if (potential >= 80) return 'exceptionnel'
  if (potential >= 65) return 'eleve'
  if (potential >= 35) return 'solide'
  if (potential >= 20) return 'moyen'
  return 'limite'
}

const FLAVOR_LINES: Record<PotentialTier, string[]> = {
  exceptionnel: [
    'Les scouts commencent à voir quelque chose de spécial chez toi.',
    'Un rapport interne qualifie sa marge de progression de « rare ».',
  ],
  eleve: [
    'Le staff technique évoque un profil « à fort potentiel ».',
    'On commence à parler de toi dans les couloirs du programme.',
  ],
  solide: ['Tu as les qualités pour réussir, mais beaucoup reste à prouver.'],
  moyen: ['Ton avenir dépendra beaucoup de ce que tu feras des prochaines saisons.'],
  limite: ['Le chemin s’annonce difficile, mais rien n’est jamais totalement écrit.'],
}

// Ligne narrative occasionnelle (pas systématique) qui laisse deviner le potentiel sans
// jamais afficher le chiffre brut. Le paramètre chance contrôle la fréquence d'apparition.
export function potentialFlavorLine(potential: number, chance = 0.22): string | null {
  if (Math.random() > chance) return null
  const lines = FLAVOR_LINES[potentialTierOf(potential)]
  return lines[Math.floor(Math.random() * lines.length)]
}
