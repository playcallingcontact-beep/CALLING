// Analyse statique bonus/malus de la banque d'événements — répond à "les malus tombent
// rarement ?" avec des chiffres plutôt qu'une impression. Compte les effets à delta (attribut
// ou exposition) au niveau effet/choix/événement, en pondérant les variants probabilistes par
// leur poids réel plutôt que de les compter comme un simple "oui/non".
// Usage : npx tsx scripts/analyzeEventBalance.ts

import { HIGHSCHOOL_EVENTS } from '../src/data/events/highschool'
import { COLLEGE_EVENTS } from '../src/data/events/college'
import { PRO_EVENTS } from '../src/data/events/pro'
import { SCENARIO_EVENTS } from '../src/data/events/scenarios'
import type { EventChoice, EventEffect, GameEvent } from '../src/types/events'

const ALL_EVENTS: GameEvent[] = [...HIGHSCHOOL_EVENTS, ...COLLEGE_EVENTS, ...PRO_EVENTS, ...SCENARIO_EVENTS]

function pct(n: number, total: number): string {
  return total === 0 ? '—' : `${((n / total) * 100).toFixed(1)}%`
}

// --- 1) Niveau effet : chaque delta individuel (attribut ou exposition), pondéré par le poids
//     du variant qui le porte (un variant à weight=1 sur un total de 10 ne compte que pour 10%).
interface EffectTally {
  posCount: number
  negCount: number
  zeroCount: number
  posSum: number
  negSum: number
}

function deltasOf(effect: EventEffect): number[] {
  const out: number[] = []
  if (effect.delta !== undefined) out.push(effect.delta)
  if (effect.exposureDelta !== undefined) out.push(effect.exposureDelta)
  return out
}

function tallyEffects(choice: EventChoice, tally: EffectTally) {
  if (choice.variants && choice.variants.length > 0) {
    const totalWeight = choice.variants.reduce((s, v) => s + v.weight, 0)
    for (const variant of choice.variants) {
      const share = variant.weight / totalWeight
      for (const effect of variant.effects) {
        for (const d of deltasOf(effect)) {
          if (d > 0) {
            tally.posCount += share
            tally.posSum += d * share
          } else if (d < 0) {
            tally.negCount += share
            tally.negSum += d * share
          } else {
            tally.zeroCount += share
          }
        }
      }
    }
    return
  }
  for (const effect of choice.effects) {
    for (const d of deltasOf(effect)) {
      if (d > 0) {
        tally.posCount++
        tally.posSum += d
      } else if (d < 0) {
        tally.negCount++
        tally.negSum += d
      } else {
        tally.zeroCount++
      }
    }
  }
}

const effectTally: EffectTally = { posCount: 0, negCount: 0, zeroCount: 0, posSum: 0, negSum: 0 }

// --- 2) Niveau choix : un choix est "bonus pur" (aucun delta négatif), "malus pur" (aucun
//     delta positif, au moins un négatif), "mixte" (les deux), ou "neutre" (ni l'un ni l'autre —
//     flag/log seulement). Pour les variants, on regarde l'ensemble des issues possibles.
type ChoiceProfile = 'bonus-pur' | 'malus-pur' | 'mixte' | 'neutre'

function classifyChoice(choice: EventChoice): ChoiceProfile {
  const effectSets = choice.variants && choice.variants.length > 0 ? choice.variants.map((v) => v.effects) : [choice.effects]
  let hasPos = false
  let hasNeg = false
  for (const effects of effectSets) {
    for (const effect of effects) {
      for (const d of deltasOf(effect)) {
        if (d > 0) hasPos = true
        if (d < 0) hasNeg = true
      }
    }
  }
  if (hasPos && hasNeg) return 'mixte'
  if (hasNeg) return 'malus-pur'
  if (hasPos) return 'bonus-pur'
  return 'neutre'
}

const choiceProfiles: Record<ChoiceProfile, number> = { 'bonus-pur': 0, 'malus-pur': 0, mixte: 0, neutre: 0 }

// --- 3) Niveau événement : le joueur a-t-il toujours une option "sans risque" (au moins un
//     choix bonus-pur ou neutre), ou est-il parfois coincé entre plusieurs choix comportant
//     chacun un malus ?
let eventsWithSafeOption = 0
let eventsAlwaysRisky = 0

for (const event of ALL_EVENTS) {
  const profiles = event.choices.map(classifyChoice)
  for (const [i, choice] of event.choices.entries()) {
    tallyEffects(choice, effectTally)
    choiceProfiles[profiles[i]]++
  }
  const hasSafe = profiles.some((p) => p === 'bonus-pur' || p === 'neutre')
  if (hasSafe) eventsWithSafeOption++
  else eventsAlwaysRisky++
}

const totalEvents = ALL_EVENTS.length
const totalChoices = ALL_EVENTS.reduce((s, e) => s + e.choices.length, 0)
const totalDeltaEffects = effectTally.posCount + effectTally.negCount + effectTally.zeroCount

console.log(`=== Analyse bonus/malus — ${totalEvents} événements, ${totalChoices} choix ===\n`)

console.log('--- Niveau effet (delta attribut/exposition, variants pondérés par leur poids) ---')
console.log(`  Effets positifs : ${effectTally.posCount.toFixed(1)}  (${pct(effectTally.posCount, totalDeltaEffects)})`)
console.log(`  Effets négatifs : ${effectTally.negCount.toFixed(1)}  (${pct(effectTally.negCount, totalDeltaEffects)})`)
console.log(`  Effets neutres (delta=0) : ${effectTally.zeroCount.toFixed(1)}  (${pct(effectTally.zeroCount, totalDeltaEffects)})`)
console.log(
  `  Amplitude moyenne — bonus : +${(effectTally.posSum / effectTally.posCount).toFixed(2)}   malus : ${(effectTally.negSum / effectTally.negCount).toFixed(2)}`,
)

console.log('\n--- Niveau choix (un choix peut être bonus pur, malus pur, mixte, ou neutre) ---')
for (const [profile, count] of Object.entries(choiceProfiles)) {
  console.log(`  ${profile.padEnd(10)} : ${count}  (${pct(count, totalChoices)})`)
}

console.log('\n--- Niveau événement (le joueur a-t-il une porte de sortie sans malus ?) ---')
console.log(`  Au moins un choix sans malus : ${eventsWithSafeOption}  (${pct(eventsWithSafeOption, totalEvents)})`)
console.log(`  Tous les choix comportent un malus : ${eventsAlwaysRisky}  (${pct(eventsAlwaysRisky, totalEvents)})`)
