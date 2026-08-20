import type { Attributes, EntourageId, LifestyleId, OriginId, Player, Position, RegionId } from '../types/player'
import { getOrigin } from '../data/origins'
import { getRegion } from '../data/regions'
import { rollPotential } from './potentialEngine'

export interface CharacterChoices {
  name: string
  avatarId: string
  position: Position
  regionId: RegionId
  originId: OriginId
  lifestyleId: LifestyleId
  entourageId: EntourageId
}

const HS_NAME_PREFIXES = ['Ridgeview', 'Eastport', 'Cedar Hollow', 'Franklin', 'Westbrook', 'Lakeside', 'Ironwood', 'Sundale']
const HS_NAME_SUFFIXES = ['High School', 'Academy', 'Prep']

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function clamp(value: number, min = 1, max = 99): number {
  return Math.max(min, Math.min(max, value))
}

export function computeHighSchoolTier(regionId: RegionId, attributes: Attributes): 1 | 2 | 3 | 4 | 5 {
  const region = getRegion(regionId)
  const raw = region.exposureModifier + attributes.exposition / 10 + (Math.random() * 6 - 3)
  const tier = clamp(Math.round(1 + raw / 3), 1, 5)
  return tier as 1 | 2 | 3 | 4 | 5
}

export function createPlayer(choices: CharacterChoices): Player {
  const origin = getOrigin(choices.originId)
  const region = getRegion(choices.regionId)

  const attributes: Attributes = { ...origin.attributes }
  const highSchoolTier = computeHighSchoolTier(choices.regionId, attributes)
  const exposureScore = clamp(attributes.exposition + region.exposureModifier, 1, 99)
  const highSchoolName = `${pick(HS_NAME_PREFIXES)} ${pick(HS_NAME_SUFFIXES)}`

  return {
    name: choices.name || 'Joueur',
    avatarId: choices.avatarId,
    position: choices.position,
    regionId: choices.regionId,
    originId: choices.originId,
    lifestyleId: choices.lifestyleId,
    entourageId: choices.entourageId,
    attributes,
    potential: rollPotential(),
    injuryHistory: [],
    age: 15,
    act: 'HS',
    season: 1,
    starRating: exposureScore >= 70 ? 3 : exposureScore >= 45 ? 2 : 1,
    exposureScore,
    highSchoolName,
    highSchoolTier,
    offers: [],
    hsStats: { gamesPlayed: 0, stats: {} },
    collegeStats: { gamesPlayed: 0, stats: {} },
    careerPath: [{ age: 15, label: `${highSchoolName} (HS)` }],
    valueHistory: [{ age: 15, value: exposureScore }],
    careerEarningsM: 0,
    flags: { entourage: choices.entourageId, lifestyle: choices.lifestyleId },
    log: [`${choices.name || 'The player'} enters freshman year at ${highSchoolName}.`],
    awardsCareer: {},
  }
}
