import type { Player } from '../types/player'
import { COLLEGES } from '../data/colleges'
import { overallOf } from './overall'

export interface TransferOffer {
  schoolName: string
  programTier: 1 | 2 | 3 | 4 | 5
  role: 'starter' | 'backup'
}

// Le plafond de programme atteignable dépend de la performance réelle, pas seulement de
// l'overall brut : un titulaire qui joue peu impressionnant reste plus courtisé qu'un
// remplaçant à overall équivalent, faute de temps de jeu prouvé.
function ceilingTierForPlayer(player: Player): 1 | 2 | 3 | 4 | 5 {
  const overall = overallOf(player)
  const score = overall + (player.depthChartStatus === 'starter' ? 6 : -4)
  if (score >= 78) return 5
  if (score >= 65) return 4
  if (score >= 52) return 3
  if (score >= 38) return 2
  return 1
}

export function generateTransferOffers(player: Player): TransferOffer[] {
  const ceilingTier = ceilingTierForPlayer(player)
  const pool = COLLEGES.filter((c) => c.name !== player.collegeName && c.tier <= ceilingTier)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  const count = 2 + Math.floor(Math.random() * 3)
  const chosen = shuffled.slice(0, Math.min(count, shuffled.length))

  return chosen
    .map((c) => {
      // Un programme plus huppé que le tier actuel ne promet le plus souvent qu'une rotation ;
      // un programme au niveau ou en dessous mise gros sur un rôle de titulaire immédiat.
      const reach = c.tier > (player.collegeTier ?? 1)
      const role: 'starter' | 'backup' = reach && Math.random() < 0.6 ? 'backup' : 'starter'
      return { schoolName: c.name, programTier: c.tier, role }
    })
    .sort((a, b) => b.programTier - a.programTier)
}

export function transferToCollege(player: Player, offer: TransferOffer): Player {
  return {
    ...player,
    collegeName: offer.schoolName,
    collegeTier: offer.programTier,
    depthChartStatus: offer.role,
    // Le transfert se décide en intersaison ; l'âge loggé est celui de la saison à venir (pas
    // celui de la saison qu'on vient de boucler), pour que la durée par école se déduise
    // proprement des écarts d'âge entre entrées de careerPath (cf. Act2End.tsx).
    careerPath: [...player.careerPath, { age: player.age + 1, label: `${offer.schoolName} (transfert NC2A)` }],
    log: [
      ...player.log,
      `${player.name} entre au portail des transferts et rejoint ${offer.schoolName} (${
        offer.role === 'starter' ? 'titulaire annoncé' : 'rôle de remplaçant'
      }).`,
    ],
  }
}
