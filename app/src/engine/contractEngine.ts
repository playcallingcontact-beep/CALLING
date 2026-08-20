import type { Player } from '../types/player'
import { NFL_TEAMS } from '../data/nflTeams'
import { overallOf } from './overall'

export interface FreeAgencyOffer {
  team: string
  tier: 1 | 2 | 3 | 4 | 5
  years: number
  valueM: number
  role: 'starter' | 'backup'
}

export function applyExtension(player: Player): Player {
  const overall = overallOf(player)
  const years = 3 + Math.floor(Math.random() * 2)
  const valueM = Math.round((overall / 70) * 18 * 10) / 10
  return {
    ...player,
    contractYearsRemaining: years,
    contractValueM: valueM,
    log: [...player.log, `Contract extension signed with the ${player.nflTeam} (${years} years, $${valueM}M).`],
  }
}

export function applyFranchiseTag(player: Player): Player {
  const overall = overallOf(player)
  const valueM = Math.round((overall / 70) * 22 * 10) / 10
  return {
    ...player,
    contractYearsRemaining: 1,
    contractValueM: valueM,
    flags: { ...player.flags, franchiseTagged: true },
    log: [...player.log, `The ${player.nflTeam} activate the franchise tag for one more season ($${valueM}M).`],
  }
}

export function hasNoFreeAgencyOffers(player: Player): boolean {
  const overall = overallOf(player)
  return overall < 35 && Math.random() < 0.45
}

export function generateFreeAgencyOffers(player: Player): FreeAgencyOffer[] {
  const overall = overallOf(player)
  const ceilingTier = overall >= 80 ? 5 : overall >= 68 ? 4 : overall >= 55 ? 3 : overall >= 42 ? 2 : 1

  const pool = NFL_TEAMS.filter((t) => t.name !== player.nflTeam)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  const count = 3 + Math.floor(Math.random() * 2)
  const chosen = shuffled.slice(0, Math.min(count, shuffled.length))

  const offers: FreeAgencyOffer[] = chosen.map((team) => {
    const contender = team.tier >= ceilingTier
    // Les grosses équipes offrent surtout un rôle de rotation ; les équipes plus modestes
    // misent gros sur un rôle de titulaire pour convaincre.
    const role: 'starter' | 'backup' = contender && Math.random() < 0.55 ? 'backup' : 'starter'
    const years = 1 + Math.floor(Math.random() * 4)
    const roleFactor = role === 'starter' ? 1 : 0.55
    const tierFactor = 0.7 + team.tier * 0.15
    const variance = 0.85 + Math.random() * 0.3
    const valueM = Math.round((overall / 70) * 15 * roleFactor * tierFactor * variance * 10) / 10

    return { team: team.name, tier: team.tier, years, valueM, role }
  })

  return offers.sort((a, b) => b.valueM - a.valueM)
}

export function signFreeAgencyOffer(player: Player, offer: FreeAgencyOffer): Player {
  return {
    ...player,
    nflTeam: offer.team,
    contractYearsRemaining: offer.years,
    contractValueM: offer.valueM,
    depthChartStatus: offer.role,
    careerPath: [...player.careerPath, { age: player.age, label: `${offer.team} (BFL, free agency)` }],
    log: [
      ...player.log,
      `Signs in free agency with the ${offer.team} (${offer.years} years, $${offer.valueM}M, ${
        offer.role === 'starter' ? 'projected starter' : 'backup role'
      }).`,
    ],
  }
}

export function forcedRetirement(player: Player): Player {
  return {
    ...player,
    retired: true,
    retirementType: 'forcee',
    log: [...player.log, 'No offers come in during free agency. The career ends for lack of a contract.'],
  }
}
