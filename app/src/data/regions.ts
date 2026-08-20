import type { RegionId } from '../types/player'

export interface RegionDef {
  id: RegionId
  name: string
  description: string
  exposureModifier: number
}

export const REGIONS: RegionDef[] = [
  {
    id: 'texas',
    name: 'Texas / Deep South',
    description: 'Historic talent pool, incredibly dense competition.',
    exposureModifier: 8,
  },
  {
    id: 'californie',
    name: 'California',
    description: 'Dense talent pool, strong media exposure.',
    exposureModifier: 6,
  },
  {
    id: 'floride',
    name: 'Florida',
    description: 'Dense talent pool, favorable conditions year-round.',
    exposureModifier: 6,
  },
  {
    id: 'midwest',
    name: 'Midwest',
    description: 'Solid, but less national exposure.',
    exposureModifier: 2,
  },
  {
    id: 'nord-est',
    name: 'Northeast',
    description: 'Weaker talent pool, fewer major programs nearby.',
    exposureModifier: -3,
  },
  {
    id: 'zone-rurale',
    name: 'Small town / rural area',
    description: 'Rare, but possible: "diamond in the rough" profile.',
    exposureModifier: -6,
  },
]

export const getRegion = (id: RegionId) => REGIONS.find((r) => r.id === id)!
