export interface CollegeDef {
  name: string
  tier: 1 | 2 | 3 | 4 | 5
  colors: [string, string]
}

// Tier 5 = programme d'élite, Tier 1 = programme modeste (comme un classement recrutement en étoiles).
// Couleurs inspirées du vrai programme évoqué par chaque nom fictif.
export const COLLEGES: CollegeDef[] = [
  { name: 'LUS Lions', tier: 5, colors: ['#461D7C', '#FDD023'] },
  { name: 'Alabama Red Storm', tier: 5, colors: ['#9E1B32', '#FFFFFF'] },
  { name: 'Texas Wranglers', tier: 5, colors: ['#BF5700', '#FFFFFF'] },
  { name: 'Oregon Emerald', tier: 5, colors: ['#154733', '#FEE123'] },
  { name: 'Ohio Deer', tier: 5, colors: ['#BB0000', '#666666'] },

  { name: 'UCS Gladiators', tier: 4, colors: ['#990000', '#FFC72C'] },
  { name: 'Colorado Bull', tier: 4, colors: ['#000000', '#CFB87C'] },
  { name: 'Florida Crocodiles', tier: 4, colors: ['#0021A5', '#FA4616'] },
  { name: 'Michigan Claw', tier: 4, colors: ['#00274C', '#FFCB05'] },
  { name: 'Notre Dame Shamrocks', tier: 4, colors: ['#0C2340', '#C99700'] },

  { name: 'Boise Horses', tier: 3, colors: ['#0033A0', '#D64309'] },
  { name: 'Arizona Tridents', tier: 3, colors: ['#AB0520', '#0C234B'] },
  { name: 'South Carolina Boar', tier: 3, colors: ['#73000A', '#000000'] },
  { name: 'Ole Renegades', tier: 3, colors: ['#14213D', '#CE1126'] },
  { name: 'Penn Grizzlies', tier: 3, colors: ['#041E42', '#FFFFFF'] },

  { name: 'Purdue Ironhawks', tier: 2, colors: ['#000000', '#CEB888'] },
  { name: 'Nebraska Cyclones', tier: 2, colors: ['#D00000', '#F5F1E7'] },
  { name: 'Kentucky Ridgebacks', tier: 2, colors: ['#0033A0', '#FFFFFF'] },
  { name: 'Wisconsin Timberwolves', tier: 2, colors: ['#C5050C', '#FFFFFF'] },
  { name: 'Maryland Falcons', tier: 2, colors: ['#E03A3E', '#000000'] },

  { name: 'Vermont Ravens', tier: 1, colors: ['#154734', '#FFFFFF'] },
  { name: 'Wyoming Coyotes', tier: 1, colors: ['#492F24', '#FFC425'] },
  { name: 'Delaware Herons', tier: 1, colors: ['#4A90D9', '#FFFFFF'] },
  { name: 'Montana Rattlers', tier: 1, colors: ['#7A2E2E', '#D9C9A3'] },
  { name: 'Maine Ospreys', tier: 1, colors: ['#0C2340', '#F58220'] },
]

export const getCollegesByTier = (tier: number) => COLLEGES.filter((c) => c.tier === tier)
export const getCollegeColors = (schoolName: string): [string, string] =>
  COLLEGES.find((c) => c.name === schoolName)?.colors ?? ['#9CA3AF', '#4B5563']
