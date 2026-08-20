import type { Player } from '../types/player'
import { clamp, computeStarRating } from './eventEngine'
import { NFL_TEAMS, getTeamsByTier } from '../data/nflTeams'

export type CombineStep = 1 | 2 | 3
export type CombineChoiceId = 'aggressive' | 'safe' | 'confident' | 'reserved' | 'technical' | 'poised'

export interface CombineStepChoiceDef {
  id: CombineChoiceId
  label: string
  description: string
}

export interface CombineStepDef {
  step: CombineStep
  emoji: string
  title: string
  context: string
  choices: [CombineStepChoiceDef, CombineStepChoiceDef]
}

// Le pré-draft calque désormais le rythme "3 événements" du reste du jeu : tests physiques,
// entretiens avec les franchises, puis ateliers techniques au Pro Day — trois décisions
// distinctes plutôt qu'une seule question binaire.
export const COMBINE_STEPS: CombineStepDef[] = [
  {
    step: 1,
    emoji: '📏',
    title: 'Combine — Physical Testing',
    context:
      'The first step before the draft: the combine can send your stock up — or down — sometimes independently of your college stats. An average athlete can become an overnight "workout warrior."',
    choices: [
      {
        id: 'aggressive',
        label: 'Go all-out physically',
        description: 'Strong potential for a spectacular boost, but also for a bad showing.',
      },
      {
        id: 'safe',
        label: 'A controlled, technical preparation',
        description: 'A more modest gain, but reliable and risk-free.',
      },
    ],
  },
  {
    step: 2,
    emoji: '🎤',
    title: 'Combine — Team Interviews',
    context:
      'BFL front offices run through back-to-back interviews behind closed doors. What gets said there sometimes matters as much as the 40-yard dash — a bad impression can cost you, a good one can boost your entire stock.',
    choices: [
      {
        id: 'confident',
        label: 'Sell yourself with confidence',
        description: 'Enough to leave a mark — or come off as arrogant, depending on the franchise.',
      },
      {
        id: 'reserved',
        label: 'Stay composed and professional',
        description: 'Less flashy, but reassures most recruiters.',
      },
    ],
  },
  {
    step: 3,
    emoji: '🎯',
    title: 'Pro Day — Position-Specific Drills',
    context:
      'The final step before the draft: drills tailored to your position, often decisive for scouts still unsure about your technique.',
    choices: [
      {
        id: 'technical',
        label: 'Go for the technical showcase',
        description: 'A flawless rep can make a strong impression — or expose a lack of consistency.',
      },
      {
        id: 'poised',
        label: 'Play the consistency card',
        description: 'Nothing spectacular, but a clean, error-free rep.',
      },
    ],
  },
]

export function applyCombineStepChoice(player: Player, step: CombineStep, choice: CombineChoiceId): Player {
  const next: Player = { ...player, attributes: { ...player.attributes }, log: [...player.log] }

  if (step === 1) {
    if (choice === 'aggressive') {
      const roll = Math.random()
      if (roll > 0.72) {
        next.exposureScore = clamp(next.exposureScore + 13)
        next.log.push('An explosive combine — the "workout warrior" profile pushes his stock well past his college stats.')
      } else if (roll < 0.18) {
        next.exposureScore = clamp(next.exposureScore - 5)
        next.attributes.physique = clamp(next.attributes.physique - 2)
        next.log.push('A disappointing combine, with a minor physical setback on top.')
      } else {
        next.exposureScore = clamp(next.exposureScore + 4)
        next.log.push('A solid combine, without anything particularly flashy.')
      }
    } else {
      next.exposureScore = clamp(next.exposureScore + 4)
      next.attributes.technique = clamp(next.attributes.technique + 2)
      next.log.push('A serious, risk-free preparation, appreciated by the more cautious scouts.')
    }
  } else if (step === 2) {
    if (choice === 'confident') {
      const roll = Math.random()
      if (roll > 0.7) {
        next.exposureScore = clamp(next.exposureScore + 8)
        next.attributes.leadership = clamp(next.attributes.leadership + 3)
        next.log.push('A memorable interview — front offices take note of his confidence and leadership.')
      } else if (roll < 0.2) {
        next.exposureScore = clamp(next.exposureScore - 4)
        next.log.push('Seen as too full of himself by several franchises, who are now wary.')
      } else {
        next.exposureScore = clamp(next.exposureScore + 3)
        next.attributes.leadership = clamp(next.attributes.leadership + 1)
        next.log.push('A decent interview, nothing more.')
      }
    } else {
      next.exposureScore = clamp(next.exposureScore + 3)
      next.attributes.leadership = clamp(next.attributes.leadership + 1)
      next.attributes.mental = clamp(next.attributes.mental + 1)
      next.log.push('A composed, professional attitude, appreciated by the more cautious recruiters.')
    }
  } else {
    if (choice === 'technical') {
      const roll = Math.random()
      if (roll > 0.72) {
        next.exposureScore = clamp(next.exposureScore + 10)
        next.attributes.technique = clamp(next.attributes.technique + 4)
        next.log.push('Flawless position drills — his technique leaves a strong impression.')
      } else if (roll < 0.18) {
        next.exposureScore = clamp(next.exposureScore - 4)
        next.log.push('Lackluster drills, reviving technical doubts among some recruiters.')
      } else {
        next.exposureScore = clamp(next.exposureScore + 3)
        next.attributes.technique = clamp(next.attributes.technique + 1)
        next.log.push('Solid drills, right around the group average.')
      }
    } else {
      next.exposureScore = clamp(next.exposureScore + 3)
      next.attributes.technique = clamp(next.attributes.technique + 2)
      next.log.push('A clean, error-free rep that reassures on his consistency.')
    }
  }

  next.starRating = computeStarRating(next.exposureScore)
  return next
}

export function computeDraftRound(player: Player): number {
  const noise = Math.random() * 12 - 6
  const score = player.exposureScore + noise
  if (score >= 82) return 1
  if (score >= 70) return 2
  if (score >= 58) return 3
  if (score >= 47) return 4
  if (score >= 37) return 5
  if (score >= 27) return 6
  if (score >= 18) return 7
  return 0
}

function assignTeam(round: number): string {
  let pool = NFL_TEAMS
  if (round === 1 || round === 2) {
    pool = [...getTeamsByTier(1), ...getTeamsByTier(2), ...getTeamsByTier(3)]
  }
  return pool[Math.floor(Math.random() * pool.length)].name
}

export function rookieContract(round: number): { years: number; valueM: number } {
  if (round === 0) return { years: 1, valueM: 0.6 }
  const years = 4
  const valueByRound: Record<number, number> = { 1: 28, 2: 14, 3: 8, 4: 5.5, 5: 4.2, 6: 3.6, 7: 3.2 }
  return { years, valueM: valueByRound[round] ?? 3.2 }
}

export function runDraft(player: Player): Player {
  const round = computeDraftRound(player)
  const team = assignTeam(round)
  const contract = rookieContract(round)

  const log =
    round === 0
      ? `${player.name} goes unselected, but signs as an undrafted free agent with the ${team}.`
      : `${player.name} is selected in round ${round} by the ${team}.`

  return {
    ...player,
    act: 'PRO',
    season: 1,
    age: player.age + 1,
    nflTeam: team,
    draftRound: round,
    contractYearsRemaining: contract.years,
    contractValueM: contract.valueM,
    careerStats: {
      gamesPlayed: 0,
      stats: {},
      proBowls: 0,
      allProFirstTeam: 0,
      mvpSterling: 0,
      offRookieOfYear: false,
      defRookieOfYear: false,
      comebackPOY: 0,
      manOfYear: 0,
      playoffAppearances: 0,
      superBowlWins: 0,
      superBowlMVP: 0,
    },
    depthChartStatus: round <= 3 ? 'starter' : 'backup',
    careerPath: [
      ...player.careerPath,
      { age: player.age + 1, label: round === 0 ? `${team} (BFL, undrafted)` : `${team} (BFL, round ${round})` },
    ],
    log: [...player.log, log],
  }
}
