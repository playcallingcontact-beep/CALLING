import type { Attributes, Player, RecruitingOffer } from '../types/player'
import type { EventChoice, EventEffect, GameEvent } from '../types/events'
import type { ProSeasonResult } from '../engine/proSeasonEngine'
import type { FreeAgencyOffer } from '../engine/contractEngine'
import type { TransferOffer } from '../engine/transferPortal'
import type { CombineStep } from '../engine/draftEngine'
import type { PlayoffRoundDef } from '../engine/playoffEngine'
import type { Screen } from '../App'

const SAVE_KEY = 'calling:save:v1'

// Instantané complet de tout ce qu'il faut pour reprendre une carrière exactement là où le
// joueur l'a laissée — un miroir de l'état de App.tsx, sérialisable tel quel en JSON (aucune
// fonction/Set/Map dedans : seenIds est converti en tableau à la sauvegarde et reconverti en
// Set au chargement).
export interface SavedGameState {
  screen: Screen
  player: Player
  seenIds: string[]
  queue: GameEvent[]
  activeChoice: { event: GameEvent; choice: EventChoice; resolvedEffects: EventEffect[]; player: Player } | null
  attributesBefore: Attributes | null
  starRatingBefore: number
  logsThisSeason: string[]
  seasonStatsForRecap: Record<string, number>
  seasonAwardsForRecap: string[]
  offers: RecruitingOffer[]
  signedWith: RecruitingOffer | null
  proResult: ProSeasonResult | null
  faOffers: FreeAgencyOffer[]
  transferOffers: TransferOffer[]
  combineStep: CombineStep
  playoffBracket: PlayoffRoundDef[]
  playoffRoundIndex: number
  playoffOutcome: 'won' | 'lost'
  playoffMVP: boolean
}

export function saveGame(state: SavedGameState): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state))
  } catch {
    // Stockage plein/indisponible (navigation privée, quota dépassé...) — on continue sans
    // sauvegarde, ça ne doit jamais empêcher de jouer.
  }
}

export function loadSavedGame(): SavedGameState | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as SavedGameState
  } catch {
    return null
  }
}

export function clearSavedGame(): void {
  try {
    localStorage.removeItem(SAVE_KEY)
  } catch {
    // ignore
  }
}
