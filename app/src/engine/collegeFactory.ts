import type { Player, RecruitingOffer } from '../types/player'
import { COLLEGES } from '../data/colleges'
import { overallOf } from './overall'

function clamp(value: number, min = 1, max = 99): number {
  return Math.max(min, Math.min(max, value))
}

function pickWalkOnOffer(): RecruitingOffer {
  const bottomTier = COLLEGES.filter((c) => c.tier === 1)
  const school = bottomTier[Math.floor(Math.random() * bottomTier.length)]
  return { schoolName: school.name, programTier: school.tier }
}

export function computeDepthChart(player: Pick<Player, 'position' | 'attributes'>, tier: number): 'starter' | 'backup' {
  const threshold = 40 + tier * 8
  return overallOf(player) >= threshold ? 'starter' : 'backup'
}

export function enterCollege(player: Player, signedWith: RecruitingOffer | null): Player {
  const offer = signedWith ?? pickWalkOnOffer()

  return {
    ...player,
    act: 'COLLEGE',
    season: 1,
    age: 18,
    collegeName: offer.schoolName,
    collegeTier: offer.programTier,
    redshirted: false,
    depthChartStatus: computeDepthChart(player, offer.programTier),
    careerPath: [...player.careerPath, { age: 18, label: `${offer.schoolName} (NCAA)` }],
    flags: { ...player.flags },
    log: [...player.log, `${player.name} rejoint ${offer.schoolName}.`],
  }
}

export function applyRedshirt(player: Player): Player {
  return {
    ...player,
    age: player.age + 1,
    redshirted: true,
    attributes: {
      ...player.attributes,
      physique: clamp(player.attributes.physique + 3),
      technique: clamp(player.attributes.technique + 3),
    },
    log: [...player.log, `${player.name} prend une saison de redshirt pour progresser loin des projecteurs.`],
  }
}

export function refreshDepthChart(player: Player): Player {
  if (!player.collegeTier) return player
  return { ...player, depthChartStatus: computeDepthChart(player, player.collegeTier) }
}
