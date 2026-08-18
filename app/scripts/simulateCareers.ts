// Simulateur headless de carrières — appelle directement les moteurs purs (aucun React/DOM).
// Sert à équilibrer potentialEngine/developmentEngine/injuryEngine sans dépendre de
// playthroughs manuels au navigateur. Usage : npx tsx scripts/simulateCareers.ts [N]

import { createPlayer, type CharacterChoices } from '../src/engine/characterFactory'
import { POSITIONS } from '../src/data/positions'
import { REGIONS } from '../src/data/regions'
import { ORIGINS } from '../src/data/origins'
import { LIFESTYLES } from '../src/data/lifestyles'
import { ENTOURAGE } from '../src/data/entourage'
// Pas d'import de data/avatars.ts ici : ce fichier importe des .png, que tsx (hors Vite) ne
// sait pas charger. L'avatar n'a aucun effet sur la simulation, un id générique suffit.
const AVATAR_IDS = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']
import { pickSeasonEvents, applyChoice } from '../src/engine/eventEngine'
import { HIGHSCHOOL_EVENTS } from '../src/data/events/highschool'
import { COLLEGE_EVENTS } from '../src/data/events/college'
import { PRO_EVENTS } from '../src/data/events/pro'
import { SCENARIO_EVENTS } from '../src/data/events/scenarios'
import { resolveAmateurSeason } from '../src/engine/amateurSeasonEngine'
import { generateOffers } from '../src/engine/signingDay'
import { enterCollege, applyRedshirt, refreshDepthChart } from '../src/engine/collegeFactory'
import { generateTransferOffers, transferToCollege } from '../src/engine/transferPortal'
import { applyCombineStepChoice, runDraft, COMBINE_STEPS, type CombineStep } from '../src/engine/draftEngine'
import { resolveProSeason } from '../src/engine/proSeasonEngine'
import { buildPlayoffBracket, resolvePlayoffRound, applySuperBowlWin } from '../src/engine/playoffEngine'
import {
  applyExtension,
  applyFranchiseTag,
  hasNoFreeAgencyOffers,
  generateFreeAgencyOffers,
  signFreeAgencyOffer,
  forcedRetirement,
} from '../src/engine/contractEngine'
import { AGE_CURVES } from '../src/engine/ageCurves'
import { overallOf } from '../src/engine/overall'
import { computeFinalScore } from '../src/engine/scoreEngine'
import { headlineStatDef } from '../src/data/proStats'
import { AWARDS_LIST } from '../src/data/awards'
import type { InjurySeverity, Player, Position } from '../src/types/player'
import type { GameEvent } from '../src/types/events'

const EVENTS_PER_SEASON = 3
const TOTAL_HS_SEASONS = 2
const MAX_COLLEGE_SEASON = 4

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const ALL_EVENTS: GameEvent[] = [...HIGHSCHOOL_EVENTS, ...COLLEGE_EVENTS, ...PRO_EVENTS, ...SCENARIO_EVENTS]

function playSeasonEvents(player: Player, seenIds: Set<string>): Player {
  const events = pickSeasonEvents(player, ALL_EVENTS, seenIds, EVENTS_PER_SEASON)
  let current = player
  for (const event of events) {
    current = applyChoice(current, pick(event.choices)).player
    if (current.act === 'COLLEGE') current = refreshDepthChart(current)
    seenIds.add(event.id)
  }
  return current
}

function randomChoices(): CharacterChoices {
  return {
    name: 'Sim',
    avatarId: pick(AVATAR_IDS),
    position: pick(POSITIONS).id,
    regionId: pick(REGIONS).id,
    originId: pick(ORIGINS).id,
    lifestyleId: pick(LIFESTYLES).id,
    entourageId: pick(ENTOURAGE).id,
  }
}

export interface CareerRecord {
  position: Position
  entryAge: number
  entryOvr: number
  peakOvr: number
  peakAge: number
  retireAge: number
  proSeasons: number
  retirementType: string
  injuries: Record<InjurySeverity, number>
  finalOvr: number
  finalScore: number
  tier: string
  starterSeasons: number
  backupSeasons: number
  careerHeadlineTotal: number
  awardsCareer: Record<string, number>
}

export function simulateOneCareer(): CareerRecord {
  let player = createPlayer(randomChoices())
  let seenIds = new Set<string>()

  for (let s = 0; s < TOTAL_HS_SEASONS; s++) {
    player = playSeasonEvents(player, seenIds)
    player = resolveAmateurSeason(player).player
    if (s < TOTAL_HS_SEASONS - 1) player = { ...player, season: player.season + 1, age: player.age + 1 }
  }

  const offers = generateOffers(player)
  const signedWith = offers.length > 0 && Math.random() < 0.9 ? pick(offers) : null
  player = enterCollege(player, signedWith)
  seenIds = new Set()

  if (Math.random() < 0.25) player = applyRedshirt(player)

  let declared = false
  while (!declared) {
    player = playSeasonEvents(player, seenIds)
    player = resolveAmateurSeason(player).player

    if (player.season >= MAX_COLLEGE_SEASON) {
      declared = true
      break
    }

    if (Math.random() < 0.2) {
      const transferOffers = generateTransferOffers(player)
      if (transferOffers.length > 0) player = transferToCollege(player, pick(transferOffers))
    }
    player = { ...player, season: player.season + 1, age: player.age + 1 }
  }

  for (let step = 1; step <= COMBINE_STEPS.length; step++) {
    const stepDef = COMBINE_STEPS[step - 1]
    const choice = pick(stepDef.choices).id
    player = applyCombineStepChoice(player, step as CombineStep, choice)
  }
  player = runDraft(player)
  seenIds = new Set()

  const entryAge = player.age
  const entryOvr = overallOf(player)
  let peakOvr = entryOvr
  let peakAge = entryAge

  const injuries: Record<InjurySeverity, number> = { legere: 0, moyenne: 0, grave: 0, catastrophique: 0 }
  let proSeasons = 0
  let starterSeasons = 0
  let backupSeasons = 0
  let retirementType = 'active'
  let retireAge = entryAge

  let guard = 0
  while (guard < 40) {
    guard++
    player = playSeasonEvents(player, seenIds)
    const result = resolveProSeason(player)
    player = result.player

    if (result.destinBrisee) {
      retirementType = 'destin-brisee'
      retireAge = player.age
      break
    }

    if (result.madePlayoffs && player.nflTeam) {
      const bracket = buildPlayoffBracket(player, player.nflTeam)
      for (const game of bracket) {
        if (!resolvePlayoffRound(game.winProbability)) break
        if (game.round === 'superbowl') player = applySuperBowlWin(player).player
      }
    }

    proSeasons++
    if (player.depthChartStatus === 'starter') starterSeasons++
    else backupSeasons++
    const ovr = overallOf(player)
    if (ovr > peakOvr) {
      peakOvr = ovr
      peakAge = player.age
    }

    const lastInjury = player.injuryHistory[player.injuryHistory.length - 1]
    if (lastInjury && lastInjury.season === player.season && lastInjury.age === player.age) {
      injuries[lastInjury.severity]++
    }

    player = { ...player, contractYearsRemaining: Math.max(0, (player.contractYearsRemaining ?? 1) - 1) }

    if ((player.contractYearsRemaining ?? 0) <= 0) {
      // Un joueur raisonnable retire davantage une fois nettement décliné par rapport à son
      // pic, et davantage encore au-delà de l'âge de retraite type de son poste — plutôt
      // qu'une chance fixe qui laisse tout le monde jouer jusqu'au plafond d'âge codé en dur.
      // Un joueur relégué sur le banc envisage sérieusement la retraite, surtout combiné à
      // un déclin déjà entamé — un vétéran qui vient de perdre sa place de titulaire ne
      // repart pas indéfiniment en pré-saison en espérant la reconquérir.
      const declineFromPeak = Math.max(0, peakOvr - ovr)
      const pastNaturalAge = Math.max(0, player.age - AGE_CURVES[player.position].typicalRetirementAge)
      const benchedPenalty = player.depthChartStatus === 'backup' ? 0.25 : 0
      const voluntaryRetireProb = Math.min(0.85, 0.05 + declineFromPeak * 0.03 + pastNaturalAge * 0.06 + benchedPenalty)

      const roll = Math.random()
      if (roll < voluntaryRetireProb) {
        retirementType = 'voluntaire'
        retireAge = player.age
        break
      } else if (roll < voluntaryRetireProb + 0.5) {
        player = applyExtension(player)
      } else if (roll < voluntaryRetireProb + 0.6) {
        player = applyFranchiseTag(player)
      } else if (hasNoFreeAgencyOffers(player)) {
        player = forcedRetirement(player)
        retirementType = 'forcee'
        retireAge = player.age
        break
      } else {
        const faOffers = generateFreeAgencyOffers(player)
        if (faOffers.length === 0) {
          retirementType = 'forcee'
          retireAge = player.age
          break
        }
        player = signFreeAgencyOffer(player, pick(faOffers))
      }
    } else {
      const curve = AGE_CURVES[player.position]
      if (player.age >= curve.typicalRetirementAge + 8) {
        retirementType = 'forcee'
        retireAge = player.age
        break
      }
    }

    player = { ...player, season: player.season + 1, age: player.age + 1 }
  }

  const headline = headlineStatDef(player.position)
  const breakdown = computeFinalScore(player)
  return {
    position: player.position,
    entryAge,
    entryOvr,
    peakOvr,
    peakAge,
    retireAge,
    proSeasons,
    retirementType,
    injuries,
    finalOvr: overallOf(player),
    finalScore: retirementType === 'destin-brisee' ? 0 : breakdown.finalScore,
    tier: breakdown.tier,
    starterSeasons,
    backupSeasons,
    careerHeadlineTotal: player.careerStats?.stats[headline.key] ?? 0,
    awardsCareer: player.awardsCareer,
  }
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

function pct(count: number, total: number): string {
  return `${((count / total) * 100).toFixed(1)}%`
}

function bucketCareerLength(seasons: number): string {
  if (seasons <= 4) return '0-4 (bust précoce)'
  if (seasons <= 7) return '5-7 (courte)'
  if (seasons <= 11) return '8-11 (normale)'
  if (seasons <= 14) return '12-14 (longue)'
  return '15+ (exceptionnelle)'
}

// Classification heuristique uniquement, pour donner une intuition de la distribution
// d'archétypes émergents — ce n'est pas une donnée stockée sur le joueur.
function classifyArchetype(r: CareerRecord): string {
  const totalSeriousInjuries = r.injuries.grave + r.injuries.catastrophique
  if (r.retirementType === 'destin-brisee') return 'Carrière brisée'
  if (r.peakOvr >= 90 && r.proSeasons >= 10) return 'Superstar'
  if (r.entryOvr < 75 && r.peakOvr >= 85) return 'Late Bloomer'
  if (r.proSeasons <= 6 && r.peakOvr - r.entryOvr <= 3) return 'Bust'
  if (totalSeriousInjuries >= 3) return 'Injury-prone'
  if (r.proSeasons >= 12 && r.peakOvr - r.finalOvr <= 5) return 'Veteran leader'
  if (r.proSeasons <= 5) return 'One-season wonder / Journeyman précoce'
  return 'Steady player'
}

function runSimulations(n: number) {
  const records: CareerRecord[] = []
  for (let i = 0; i < n; i++) records.push(simulateOneCareer())

  console.log(`\n=== ${n} carrières simulées ===\n`)

  const entryOvrs = records.map((r) => r.entryOvr)
  console.log(`OVR d'entrée NFL — médiane : ${median(entryOvrs)}`)
  console.log(`  sous 75 OVR : ${pct(records.filter((r) => r.entryOvr < 75).length, n)}`)
  console.log(`  >= 75 OVR   : ${pct(records.filter((r) => r.entryOvr >= 75).length, n)}`)

  console.log(`\nOVR de pic — médiane : ${median(records.map((r) => r.peakOvr))}`)
  console.log(`Âge de pic — médian  : ${median(records.map((r) => r.peakAge))}`)

  console.log('\nDurée de carrière (buckets) :')
  const buckets: Record<string, number> = {}
  for (const r of records) buckets[bucketCareerLength(r.proSeasons)] = (buckets[bucketCareerLength(r.proSeasons)] ?? 0) + 1
  for (const [b, count] of Object.entries(buckets)) console.log(`  ${b}: ${pct(count, n)}`)

  console.log('\nDurée de carrière par poste (médiane saisons pro) :')
  for (const pos of [...new Set(records.map((r) => r.position))]) {
    const subset = records.filter((r) => r.position === pos)
    console.log(`  ${pos}: ${median(subset.map((r) => r.proSeasons))} saisons (n=${subset.length})`)
  }

  const starterRatio = records.map((r) => (r.starterSeasons + r.backupSeasons > 0 ? r.starterSeasons / (r.starterSeasons + r.backupSeasons) : 1))
  console.log(`\nPart de saisons en titulaire — médiane : ${pct(Math.round(median(starterRatio) * 100), 100)}`)
  console.log(`  carrières 100% titulaire : ${pct(records.filter((r) => r.backupSeasons === 0).length, n)}`)

  console.log(`\nStat phare de carrière (total, tous postes confondus) — médiane : ${Math.round(median(records.map((r) => r.careerHeadlineTotal)))}`)
  console.log(`  90e percentile : ${Math.round([...records.map((r) => r.careerHeadlineTotal)].sort((a, b) => a - b)[Math.floor(n * 0.9)])}`)
  const qbRecords = records.filter((r) => r.position === 'QB')
  if (qbRecords.length > 0) {
    console.log(`  QB uniquement (yards de passe carrière) — médiane : ${Math.round(median(qbRecords.map((r) => r.careerHeadlineTotal)))}`)
  }

  console.log('\nArchétypes (heuristique) :')
  const archetypes: Record<string, number> = {}
  for (const r of records) {
    const a = classifyArchetype(r)
    archetypes[a] = (archetypes[a] ?? 0) + 1
  }
  for (const [a, count] of Object.entries(archetypes).sort((x, y) => y[1] - x[1])) console.log(`  ${a}: ${pct(count, n)}`)

  console.log('\nBlessures cumulées (moyenne par carrière) :')
  const sum = (fn: (r: CareerRecord) => number) => records.reduce((s, r) => s + fn(r), 0) / n
  console.log(
    `  légère: ${sum((r) => r.injuries.legere).toFixed(2)}  moyenne: ${sum((r) => r.injuries.moyenne).toFixed(2)}  grave: ${sum((r) => r.injuries.grave).toFixed(2)}  catastrophique: ${sum((r) => r.injuries.catastrophique).toFixed(2)}`,
  )

  const destinBriseeCount = records.filter((r) => r.retirementType === 'destin-brisee').length
  const scored = records.filter((r) => r.retirementType !== 'destin-brisee')
  console.log('\n=== Distribution du score final (paliers de carte : Argent/Or/Diamant/Saphir/Arc-en-ciel) ===')
  console.log(`  DESTIN BRISÉE             : ${pct(destinBriseeCount, n)}`)
  console.log(`  70-74 (Argent)            : ${pct(scored.filter((r) => r.finalScore <= 74).length, n)}`)
  console.log(`  75-85 (Or)                : ${pct(scored.filter((r) => r.finalScore >= 75 && r.finalScore <= 85).length, n)}`)
  console.log(`  86-89 (Diamant)           : ${pct(scored.filter((r) => r.finalScore >= 86 && r.finalScore <= 89).length, n)}`)
  console.log(`  90-94 (Saphir)            : ${pct(scored.filter((r) => r.finalScore >= 90 && r.finalScore <= 94).length, n)}`)
  console.log(`  95-99 (Arc-en-ciel)       : ${pct(scored.filter((r) => r.finalScore >= 95).length, n)}`)
  console.log(`  Score final — médiane : ${median(scored.map((r) => r.finalScore))}\n`)

  console.log('=== Fréquence des awards (% de carrières en ayant gagné au moins 1) ===')
  for (const act of ['HS', 'COLLEGE', 'PRO'] as const) {
    console.log(`\n  ${act} :`)
    for (const def of AWARDS_LIST.filter((a) => a.act === act)) {
      const winners = records.filter((r) => (r.awardsCareer[def.id] ?? 0) > 0).length
      if (winners > 0) console.log(`    ${def.name.padEnd(38)} ${pct(winners, n)}`)
    }
  }
  console.log('')
}

const N = Number(process.argv[2]) || 500
runSimulations(N)
