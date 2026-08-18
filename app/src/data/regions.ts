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
    name: 'Texas / Sud profond',
    description: 'Vivier historique très dense, concurrence énorme.',
    exposureModifier: 8,
  },
  {
    id: 'californie',
    name: 'Californie',
    description: 'Vivier dense, exposition médiatique forte.',
    exposureModifier: 6,
  },
  {
    id: 'floride',
    name: 'Floride',
    description: 'Vivier dense, conditions favorables toute l’année.',
    exposureModifier: 6,
  },
  {
    id: 'midwest',
    name: 'Midwest',
    description: 'Solide, mais moins d’exposition nationale.',
    exposureModifier: 2,
  },
  {
    id: 'nord-est',
    name: 'Nord-Est',
    description: 'Vivier plus faible, moins de gros programmes à proximité.',
    exposureModifier: -3,
  },
  {
    id: 'zone-rurale',
    name: 'Petite ville / zone rurale',
    description: 'Rare, mais possible : profil "diamant brut".',
    exposureModifier: -6,
  },
]

export const getRegion = (id: RegionId) => REGIONS.find((r) => r.id === id)!
