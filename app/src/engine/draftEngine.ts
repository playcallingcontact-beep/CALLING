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
    title: 'Combine — Tests physiques',
    context:
      'Première étape avant la draft : le combine peut faire grimper — ou chuter — la cote, parfois indépendamment des statistiques college. Un athlète moyen peut y devenir un "workout warrior" du jour au lendemain.',
    choices: [
      {
        id: 'aggressive',
        label: 'Tout donner physiquement',
        description: 'Fort potentiel de hausse spectaculaire, mais aussi de contre-performance.',
      },
      {
        id: 'safe',
        label: 'Une préparation maîtrisée et technique',
        description: 'Une progression plus modeste, mais fiable et sans risque.',
      },
    ],
  },
  {
    step: 2,
    emoji: '🎤',
    title: 'Combine — Entretiens avec les franchises',
    context:
      'Les états-majors NFL enchaînent les entretiens en coulisses. Ce qui s’y dit compte parfois autant que le chrono au 40 yards — une mauvaise impression peut coûter cher, une bonne peut faire grimper une cote entière.',
    choices: [
      {
        id: 'confident',
        label: 'Se vendre avec aplomb',
        description: 'De quoi marquer les esprits — ou passer pour arrogant selon les franchises.',
      },
      {
        id: 'reserved',
        label: 'Rester sobre et professionnel',
        description: 'Moins spectaculaire, mais rassure la majorité des recruteurs.',
      },
    ],
  },
  {
    step: 3,
    emoji: '🎯',
    title: 'Pro Day — Ateliers spécifiques au poste',
    context:
      'Dernière étape avant la draft : des ateliers taillés pour le poste, souvent décisifs pour les scouts qui doutaient encore du geste technique.',
    choices: [
      {
        id: 'technical',
        label: 'Viser la démonstration technique',
        description: 'Un geste impeccable peut faire forte impression — ou trahir un manque de régularité.',
      },
      {
        id: 'poised',
        label: 'Jouer la carte de la régularité',
        description: 'Rien de spectaculaire, mais une répétition sobre et sans erreur.',
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
        next.log.push('Un combine explosif — le profil "workout warrior" fait grimper sa cote bien au-delà des stats college.')
      } else if (roll < 0.18) {
        next.exposureScore = clamp(next.exposureScore - 5)
        next.attributes.physique = clamp(next.attributes.physique - 2)
        next.log.push('Un combine décevant, une petite gêne physique en prime.')
      } else {
        next.exposureScore = clamp(next.exposureScore + 4)
        next.log.push('Un combine solide, sans éclat particulier.')
      }
    } else {
      next.exposureScore = clamp(next.exposureScore + 4)
      next.attributes.technique = clamp(next.attributes.technique + 2)
      next.log.push('Une préparation sérieuse et sans risque, appréciée par les scouts les plus prudents.')
    }
  } else if (step === 2) {
    if (choice === 'confident') {
      const roll = Math.random()
      if (roll > 0.7) {
        next.exposureScore = clamp(next.exposureScore + 8)
        next.attributes.leadership = clamp(next.attributes.leadership + 3)
        next.log.push('Un entretien mémorable — les états-majors retiennent son aplomb et son sens du leadership.')
      } else if (roll < 0.2) {
        next.exposureScore = clamp(next.exposureScore - 4)
        next.log.push('Perçu comme trop sûr de lui par plusieurs franchises, qui s’en méfient désormais.')
      } else {
        next.exposureScore = clamp(next.exposureScore + 3)
        next.attributes.leadership = clamp(next.attributes.leadership + 1)
        next.log.push('Un entretien correct, sans plus.')
      }
    } else {
      next.exposureScore = clamp(next.exposureScore + 3)
      next.attributes.leadership = clamp(next.attributes.leadership + 1)
      next.attributes.mental = clamp(next.attributes.mental + 1)
      next.log.push('Une attitude posée et professionnelle, appréciée par les recruteurs les plus prudents.')
    }
  } else {
    if (choice === 'technical') {
      const roll = Math.random()
      if (roll > 0.72) {
        next.exposureScore = clamp(next.exposureScore + 10)
        next.attributes.technique = clamp(next.attributes.technique + 4)
        next.log.push('Des ateliers de position impeccables — son geste technique fait forte impression.')
      } else if (roll < 0.18) {
        next.exposureScore = clamp(next.exposureScore - 4)
        next.log.push('Des ateliers ternes, des doutes techniques ressurgissent chez certains recruteurs.')
      } else {
        next.exposureScore = clamp(next.exposureScore + 3)
        next.attributes.technique = clamp(next.attributes.technique + 1)
        next.log.push('Des ateliers solides, dans la moyenne du groupe.')
      }
    } else {
      next.exposureScore = clamp(next.exposureScore + 3)
      next.attributes.technique = clamp(next.attributes.technique + 2)
      next.log.push('Une répétition sobre et sans erreur, qui rassure sur sa régularité.')
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
      ? `${player.name} n’est pas sélectionné, mais signe comme agent libre non drafté avec les ${team}.`
      : `${player.name} est sélectionné en round ${round} par les ${team}.`

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
      { age: player.age + 1, label: round === 0 ? `${team} (NFL, non drafté)` : `${team} (NFL, round ${round})` },
    ],
    log: [...player.log, log],
  }
}
