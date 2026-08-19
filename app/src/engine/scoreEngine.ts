import type { CareerStats, Player } from '../types/player'
import { headlineStatDef } from '../data/proStats'

// Courbe volontairement back-loaded (exposant > 1, pas une racine carrée) : 1-2 récompenses
// sur une longue carrière ne doivent presque rien rapporter, seule une accumulation proche du
// plafond doit vraiment compter — sinon la moindre distinction ponctuelle gonfle le score
// d'une carrière par ailleurs quelconque.
function diminishing(count: number, capCount: number): number {
  return Math.min(1, Math.pow(count / capCount, 1.85))
}

function strongFirst(count: number, extraCap = 2): number {
  if (count <= 0) return 0
  return Math.min(1, 0.7 + 0.3 * Math.min(1, (count - 1) / extraCap))
}

export type CareerTier = 'Argent' | 'Or' | 'Diamant' | 'Saphir' | 'Arc-en-ciel'

export interface ScoreBreakdown {
  finalScore: number
  individualBlock: number
  collectiveBlock: number
  tier: CareerTier
}

const EMPTY_STATS: CareerStats = {
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
}

export function computeFinalScore(player: Player): ScoreBreakdown {
  const stats = player.careerStats ?? EMPTY_STATS
  const seasonsPlayed = Math.max(1, player.season)

  const headline = headlineStatDef(player.position)
  const headlineTotal = stats.stats[headline.key] ?? 0
  const statsPerSeason = headlineTotal / seasonsPlayed
  // Une production soutenue, digne des meilleures références réelles à ce poste, doit à elle
  // seule pouvoir porter une carrière vers l'exceptionnel — pas seulement les trophées MVP,
  // qui restent rares et dépendants de la chance d'une seule saison.
  const statsNorm = Math.min(1, statsPerSeason / (headline.seasonTarget * 1.5))
  const rookieNorm = stats.offRookieOfYear || stats.defRookieOfYear ? 1 : 0
  const allStarNorm = diminishing(stats.proBowls, 7)
  const allProNorm = diminishing(stats.allProFirstTeam, 4)
  const sterlingNorm = strongFirst(stats.mvpSterling, 2)

  const individualRaw = statsNorm * 0.22 + rookieNorm * 0.05 + allStarNorm * 0.13 + allProNorm * 0.3 + sterlingNorm * 0.3

  const superBowlNorm = diminishing(stats.superBowlWins, 2)
  const superBowlMvpNorm = strongFirst(stats.superBowlMVP, 2)
  const playoffNorm = diminishing(stats.playoffAppearances, 7)

  const collectiveRaw = superBowlNorm * 0.45 + superBowlMvpNorm * 0.15 + playoffNorm * 0.4

  const individualBlock = Math.round(individualRaw * 17 * 10) / 10
  const collectiveBlock = Math.round(collectiveRaw * 17 * 10) / 10

  const finalScore = Math.min(99, Math.ceil(70 + individualBlock + collectiveBlock))

  const tier: CareerTier =
    finalScore >= 95
      ? 'Arc-en-ciel'
      : finalScore >= 90
        ? 'Saphir'
        : finalScore >= 86
          ? 'Diamant'
          : finalScore >= 75
            ? 'Or'
            : 'Argent'

  return { finalScore, individualBlock, collectiveBlock, tier }
}
