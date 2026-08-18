import type { Player } from '../types/player'
import type { EventChoice, EventEffect, EventTheme, GameEvent } from '../types/events'

const THEME_ORDER: EventTheme[] = ['FOOTBALL', 'VIE_SOCIALE', 'PERSONNEL']

export function clamp(value: number, min = 1, max = 99): number {
  return Math.max(min, Math.min(max, value))
}

export function computeStarRating(exposureScore: number): 1 | 2 | 3 | 4 | 5 {
  return exposureScore >= 80 ? 5 : exposureScore >= 65 ? 4 : exposureScore >= 45 ? 3 : exposureScore >= 25 ? 2 : 1
}

export function isEligible(player: Player, event: GameEvent, seenIds: Set<string>): boolean {
  if (seenIds.has(event.id)) return false
  if (!event.acts.includes(player.act)) return false
  if (event.seasonMin !== undefined && player.season < event.seasonMin) return false
  if (event.seasonMax !== undefined && player.season > event.seasonMax) return false
  if (event.positions && !event.positions.includes(player.position)) return false

  const requiredFlags = event.requiresFlags ?? (event.requiresFlag ? [event.requiresFlag] : [])
  for (const req of requiredFlags) {
    const current = player.flags[req.key]
    if (req.value !== undefined ? current !== req.value : !current) return false
  }

  const forbiddenFlags = event.forbidsFlags ?? (event.forbidsFlag ? [event.forbidsFlag] : [])
  for (const key of forbiddenFlags) {
    if (player.flags[key]) return false
  }

  return true
}

// Une saison pioche un événement de chaque thème (FOOTBALL / VIE_SOCIALE / PERSONNEL), pas
// 3 au hasard dans le pool combiné — chaque saison couvre donc toujours les trois volets de la
// vie du joueur. Si un thème est à sec (carrière très longue), le reste de la saison se
// complète avec n'importe quel événement éligible plutôt que de raccourcir la saison.
export function pickSeasonEvents(player: Player, pool: GameEvent[], seenIds: Set<string>, count: number): GameEvent[] {
  const eligible = pool.filter((e) => isEligible(player, e, seenIds))
  const picked: GameEvent[] = []
  const usedIds = new Set<string>()

  for (const theme of THEME_ORDER) {
    const themePool = eligible.filter((e) => e.theme === theme && !usedIds.has(e.id))
    if (themePool.length === 0) continue
    const chosen = themePool[Math.floor(Math.random() * themePool.length)]
    picked.push(chosen)
    usedIds.add(chosen.id)
  }

  if (picked.length < count) {
    const remaining = [...eligible.filter((e) => !usedIds.has(e.id))].sort(() => Math.random() - 0.5)
    for (const e of remaining) {
      if (picked.length >= count) break
      picked.push(e)
      usedIds.add(e.id)
    }
  }

  return picked.sort(() => Math.random() - 0.5)
}

function pickWeightedVariant<T extends { weight: number }>(items: T[]): T {
  const total = items.reduce((sum, item) => sum + item.weight, 0)
  let roll = Math.random() * total
  for (const item of items) {
    roll -= item.weight
    if (roll <= 0) return item
  }
  return items[items.length - 1]
}

// Un choix à variants ne donne pas toujours le même résultat : le tirage se fait ici, une
// seule fois, et le même jeu d'effets sert ensuite à la fois pour appliquer les changements
// et pour afficher fidèlement à l'écran de résultat ce qui s'est réellement passé.
export function resolveChoiceEffects(choice: EventChoice): EventEffect[] {
  if (choice.variants && choice.variants.length > 0) {
    return pickWeightedVariant(choice.variants).effects
  }
  return choice.effects
}

// Levier de calibration Pro uniquement : avec ~300 événements, une carrière Pro (15-20
// saisons) ne tarit plus jamais le pool (l'ancien fonds de 28 événements s'épuisait après
// 3-4 saisons Pro, plafonnant de fait la contribution des choix à la progression sur une
// longue carrière). HS/College restent inchangés (déjà calibrés, et intrinsèquement courts —
// 6 saisons max — donc jamais concernés par l'épuisement du pool). Chaque delta Pro est mis à
// l'échelle ici, au point d'entrée unique où les effets sont appliqués — proportions entre
// choix préservées.
const PRO_EVENT_IMPACT_SCALE = 0.55

function scaleDelta(value: number, scale: number): number {
  const scaled = Math.round(value * scale)
  if (scaled !== 0) return scaled
  return value > 0 ? 1 : value < 0 ? -1 : 0
}

export function applyChoice(player: Player, choice: EventChoice): { player: Player; resolvedEffects: EventEffect[] } {
  const next: Player = {
    ...player,
    attributes: { ...player.attributes },
    flags: { ...player.flags },
    log: [...player.log],
  }

  const scale = player.act === 'PRO' ? PRO_EVENT_IMPACT_SCALE : 1
  const resolvedEffects = resolveChoiceEffects(choice).map((effect) => ({
    ...effect,
    delta: effect.delta !== undefined ? scaleDelta(effect.delta, scale) : undefined,
    exposureDelta: effect.exposureDelta !== undefined ? scaleDelta(effect.exposureDelta, scale) : undefined,
  }))

  for (const effect of resolvedEffects) {
    if (effect.attribute && effect.delta !== undefined) {
      next.attributes[effect.attribute] = clamp(next.attributes[effect.attribute] + effect.delta)
    }
    if (effect.exposureDelta !== undefined) {
      next.exposureScore = clamp(next.exposureScore + effect.exposureDelta)
    }
    if (effect.flag) {
      next.flags[effect.flag] = effect.flagValue ?? true
    }
    if (effect.log) {
      next.log.push(effect.log)
    }
  }

  next.starRating = computeStarRating(next.exposureScore)

  return { player: next, resolvedEffects }
}
