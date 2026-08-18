import type { Player, RecruitingOffer } from '../types/player'
import { COLLEGES } from '../data/colleges'

function offerCountForStars(stars: number): number {
  switch (stars) {
    case 5:
      return 6 + Math.floor(Math.random() * 3)
    case 4:
      return 4 + Math.floor(Math.random() * 2)
    case 3:
      return 2 + Math.floor(Math.random() * 2)
    case 2:
      return 1 + Math.floor(Math.random() * 2)
    default:
      return Math.random() > 0.5 ? 1 : 0
  }
}

function bestReachableTier(stars: number): 1 | 2 | 3 | 4 | 5 {
  if (stars >= 5) return 5
  if (stars === 4) return 4
  if (stars === 3) return 3
  if (stars === 2) return 2
  return 1
}

export function generateOffers(player: Player): RecruitingOffer[] {
  const count = offerCountForStars(player.starRating)
  const ceilingTier = bestReachableTier(player.starRating)
  const pool = COLLEGES.filter((c) => c.tier <= ceilingTier)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  const chosen = shuffled.slice(0, Math.min(count, shuffled.length))

  return chosen
    .map((c) => ({ schoolName: c.name, programTier: c.tier }))
    .sort((a, b) => b.programTier - a.programTier)
}
