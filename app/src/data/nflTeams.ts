export type Conference = 'Liberty' | 'Federal'
export type Division = 'East' | 'North' | 'South' | 'West'

export interface NflTeamDef {
  name: string
  conference: Conference
  division: Division
  tier: 1 | 2 | 3 | 4 | 5
  colors: [string, string]
}

// Tier 5 = franchise dominante, Tier 1 = franchise en reconstruction.
// Noms fictifs, mais force calée sur le niveau de compétitivité réel de chaque marché en NFL (saison 2024).
// Couleurs inspirées du vrai marché évoqué par chaque franchise fictive.
export const NFL_TEAMS: NflTeamDef[] = [
  // Liberty Conference — East
  { name: 'Buffalo Bulls', conference: 'Liberty', division: 'East', tier: 5, colors: ['#00338D', '#C60C30'] },
  { name: 'Miami Sharks', conference: 'Liberty', division: 'East', tier: 2, colors: ['#00B2A9', '#FFFFFF'] },
  { name: 'New England Minutemen', conference: 'Liberty', division: 'East', tier: 1, colors: ['#002244', '#C60C30'] },
  { name: 'New York Fighters', conference: 'Liberty', division: 'East', tier: 2, colors: ['#125740', '#FFFFFF'] },

  // Liberty Conference — North
  { name: 'Baltimore Blackbirds', conference: 'Liberty', division: 'North', tier: 5, colors: ['#241773', '#000000'] },
  { name: 'Cincinnati Cougars', conference: 'Liberty', division: 'North', tier: 3, colors: ['#FB4F14', '#000000'] },
  { name: 'Cleveland Hounds', conference: 'Liberty', division: 'North', tier: 1, colors: ['#311D00', '#FF3C00'] },
  { name: 'Pittsburgh Ironclads', conference: 'Liberty', division: 'North', tier: 4, colors: ['#101820', '#FFB612'] },

  // Liberty Conference — South
  { name: 'Houston Stampede', conference: 'Liberty', division: 'South', tier: 4, colors: ['#03202F', '#A71930'] },
  { name: 'Indianapolis Stallions', conference: 'Liberty', division: 'South', tier: 3, colors: ['#002C5F', '#FFFFFF'] },
  { name: 'Jacksonville Pumas', conference: 'Liberty', division: 'South', tier: 2, colors: ['#006778', '#D7A22A'] },
  { name: 'Tennessee Olympians', conference: 'Liberty', division: 'South', tier: 1, colors: ['#0C2340', '#C8102E'] },

  // Liberty Conference — West
  { name: 'Denver Mustangs', conference: 'Liberty', division: 'West', tier: 4, colors: ['#FB4F14', '#002244'] },
  { name: 'Kansas City Warriors', conference: 'Liberty', division: 'West', tier: 5, colors: ['#E31837', '#FFB81C'] },
  { name: 'Los Angeles Thunder', conference: 'Liberty', division: 'West', tier: 3, colors: ['#0080C6', '#FFC20E'] },
  { name: 'Las Vegas Rebels', conference: 'Liberty', division: 'West', tier: 1, colors: ['#000000', '#A5ACAF'] },

  // Federal Conference — East
  { name: 'Dallas Renegades', conference: 'Federal', division: 'East', tier: 2, colors: ['#041E42', '#869397'] },
  { name: 'New York Behemoths', conference: 'Federal', division: 'East', tier: 1, colors: ['#0B2265', '#A71930'] },
  { name: 'Philadelphia Condors', conference: 'Federal', division: 'East', tier: 5, colors: ['#004C54', '#A5ACAF'] },
  { name: 'Washington Sentinels', conference: 'Federal', division: 'East', tier: 4, colors: ['#5A1414', '#FFB612'] },

  // Federal Conference — North
  { name: 'Chicago Grizzlies', conference: 'Federal', division: 'North', tier: 2, colors: ['#0B162A', '#C83803'] },
  { name: 'Detroit Tigers', conference: 'Federal', division: 'North', tier: 5, colors: ['#0076B6', '#B0B7BC'] },
  { name: 'Green Bay Foundry', conference: 'Federal', division: 'North', tier: 4, colors: ['#203731', '#FFB612'] },
  { name: 'Minnesota Norsemen', conference: 'Federal', division: 'North', tier: 4, colors: ['#4F2683', '#FFC62F'] },

  // Federal Conference — South
  { name: 'Atlanta Firebirds', conference: 'Federal', division: 'South', tier: 3, colors: ['#A71930', '#000000'] },
  { name: 'Carolina Wildcats', conference: 'Federal', division: 'South', tier: 1, colors: ['#0085CA', '#000000'] },
  { name: 'New Orleans Krewe', conference: 'Federal', division: 'South', tier: 2, colors: ['#D3BC8D', '#000000'] },
  { name: 'Tampa Bay Corsairs', conference: 'Federal', division: 'South', tier: 3, colors: ['#D50A0A', '#34302B'] },

  // Federal Conference — West
  { name: 'Arizona Scorchers', conference: 'Federal', division: 'West', tier: 3, colors: ['#97233F', '#000000'] },
  { name: 'Los Angeles Horns', conference: 'Federal', division: 'West', tier: 4, colors: ['#003594', '#FFA300'] },
  { name: 'San Francisco Miners', conference: 'Federal', division: 'West', tier: 3, colors: ['#AA0000', '#B3995D'] },
  { name: 'Seattle Ospreys', conference: 'Federal', division: 'West', tier: 3, colors: ['#002244', '#69BE28'] },
]

export const getTeamsByTier = (tier: number) => NFL_TEAMS.filter((t) => t.tier === tier)
export const getTeamsByDivision = (conference: Conference, division: Division) =>
  NFL_TEAMS.filter((t) => t.conference === conference && t.division === division)
export const getTeamColors = (teamName: string): [string, string] =>
  NFL_TEAMS.find((t) => t.name === teamName)?.colors ?? ['#9CA3AF', '#4B5563']
export const getTeamTier = (teamName: string): number => NFL_TEAMS.find((t) => t.name === teamName)?.tier ?? 3
