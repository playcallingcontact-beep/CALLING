export type Position = 'QB' | 'WR' | 'RB-FB' | 'CB' | 'SS' | 'EDGE'

export type AttributeKey = 'physique' | 'technique' | 'mental' | 'leadership' | 'exposition'

export type Attributes = Record<AttributeKey, number>

export type RegionId =
  | 'texas'
  | 'californie'
  | 'floride'
  | 'midwest'
  | 'nord-est'
  | 'zone-rurale'

export type OriginId =
  | 'programme-elite'
  | 'multi-sport'
  | 'fils-ancien-pro'
  | 'walk-on-rural'
  | 'prodige-precoce'

export type LifestyleId = 'discipline' | 'equilibre' | 'popularite'

export type EntourageId = 'famille' | 'mentor-prive' | 'cercle-amis'

export type Act = 'HS' | 'COLLEGE' | 'PRO'

export interface RecruitingOffer {
  schoolName: string
  programTier: 1 | 2 | 3 | 4 | 5
}

export interface ActStats {
  gamesPlayed: number
  stats: Record<string, number>
}

export interface CareerStats {
  gamesPlayed: number
  stats: Record<string, number>
  proBowls: number
  allProFirstTeam: number
  mvpSterling: number
  offRookieOfYear: boolean
  defRookieOfYear: boolean
  comebackPOY: number
  manOfYear: number
  playoffAppearances: number
  superBowlWins: number
  superBowlMVP: number
}

export type RetirementType = 'voluntaire' | 'forcee' | 'destin-brisee'

export type InjurySeverity = 'legere' | 'moyenne' | 'grave' | 'catastrophique'

export interface InjuryRecord {
  age: number
  season: number
  severity: InjurySeverity
  gamesOut: number
  attributeImpacted?: AttributeKey
  description: string
}

export interface CareerPathStep {
  age: number
  label: string
}

export interface ValuePoint {
  age: number
  value: number
}

export interface Player {
  name: string
  avatarId: string
  position: Position
  regionId: RegionId
  originId: OriginId
  lifestyleId: LifestyleId
  entourageId: EntourageId
  attributes: Attributes
  // Potentiel individuel caché, roulé une fois au chargen. Ne module que la vitesse de
  // développement naturelle (engine/developmentEngine.ts) — n'entre jamais dans overallOf().
  potential: number
  injuryHistory: InjuryRecord[]
  age: number
  act: Act
  season: number
  starRating: 1 | 2 | 3 | 4 | 5
  exposureScore: number
  highSchoolName: string
  highSchoolTier: 1 | 2 | 3 | 4 | 5
  offers: RecruitingOffer[]
  hsStats: ActStats
  collegeStats: ActStats
  collegeName?: string
  collegeTier?: 1 | 2 | 3 | 4 | 5
  redshirted?: boolean
  depthChartStatus?: 'starter' | 'backup'
  nflTeam?: string
  draftRound?: number
  contractYearsRemaining?: number
  contractValueM?: number
  careerStats?: CareerStats
  careerEarningsM: number
  retired?: boolean
  retirementType?: RetirementType
  finalScore?: number
  careerPath: CareerPathStep[]
  valueHistory: ValuePoint[]
  flags: Record<string, boolean | number | string>
  log: string[]
  // Compteur générique id d'award (voir data/awards.ts) -> nombre de fois gagné, cumulé sur
  // toute la carrière (HS + NCAA + NFL confondus). Séparé de CareerStats pour ne pas toucher
  // aux champs déjà consommés par scoreEngine.ts.
  awardsCareer: Record<string, number>
}
