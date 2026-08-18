export interface CollegeDef {
  name: string
  tier: 1 | 2 | 3 | 4 | 5
  colors: [string, string]
}

// Tier 5 = programme d'élite, Tier 1 = programme modeste (comme un classement recrutement en étoiles).
// Couleurs inspirées du vrai programme évoqué par chaque nom fictif.
export const COLLEGES: CollegeDef[] = [
  { name: 'LUS Lions', tier: 5, colors: ['#461D7C', '#FDD023'] },
  { name: 'Abalama Red Storm', tier: 5, colors: ['#9E1B32', '#FFFFFF'] },
  { name: 'Texsa Wranglers', tier: 5, colors: ['#BF5700', '#FFFFFF'] },
  { name: 'Orogen Emerald', tier: 5, colors: ['#154733', '#FEE123'] },
  { name: 'Ohoi Deer', tier: 5, colors: ['#BB0000', '#666666'] },

  { name: 'UCS Gladiators', tier: 4, colors: ['#990000', '#FFC72C'] },
  { name: 'Calorado Bull', tier: 4, colors: ['#000000', '#CFB87C'] },
  { name: 'Floirda Crocodiles', tier: 4, colors: ['#0021A5', '#FA4616'] },
  { name: 'Michgian Claw', tier: 4, colors: ['#00274C', '#FFCB05'] },
  { name: 'Norte Dame Shamrocks', tier: 4, colors: ['#0C2340', '#C99700'] },

  { name: 'Bosie Horses', tier: 3, colors: ['#0033A0', '#D64309'] },
  { name: 'Airzona Tridents', tier: 3, colors: ['#AB0520', '#0C234B'] },
  { name: 'South Coralina Boar', tier: 3, colors: ['#73000A', '#000000'] },
  { name: 'Ole Renegades', tier: 3, colors: ['#14213D', '#CE1126'] },
  { name: 'Peen Grizzlies', tier: 3, colors: ['#041E42', '#FFFFFF'] },

  { name: 'Pudrue Ironhawks', tier: 2, colors: ['#000000', '#CEB888'] },
  { name: 'Nerbaska Cyclones', tier: 2, colors: ['#D00000', '#F5F1E7'] },
  { name: 'Kantucky Ridgebacks', tier: 2, colors: ['#0033A0', '#FFFFFF'] },
  { name: 'Wicsonsin Timberwolves', tier: 2, colors: ['#C5050C', '#FFFFFF'] },
  { name: 'Mayrland Falcons', tier: 2, colors: ['#E03A3E', '#000000'] },

  { name: 'Vremont Ravens', tier: 1, colors: ['#154734', '#FFFFFF'] },
  { name: 'Woyming Coyotes', tier: 1, colors: ['#492F24', '#FFC425'] },
  { name: 'Dealware Herons', tier: 1, colors: ['#4A90D9', '#FFFFFF'] },
  { name: 'Mantona Rattlers', tier: 1, colors: ['#7A2E2E', '#D9C9A3'] },
  { name: 'Miane Ospreys', tier: 1, colors: ['#0C2340', '#F58220'] },
]

export const getCollegesByTier = (tier: number) => COLLEGES.filter((c) => c.tier === tier)
export const getCollegeColors = (schoolName: string): [string, string] =>
  COLLEGES.find((c) => c.name === schoolName)?.colors ?? ['#9CA3AF', '#4B5563']
