import type { Player } from '../types/player'
import { clamp } from './eventEngine'
import { AGE_CURVES, destinBriseeProbability } from './ageCurves'
import { generateStatsForSeason, mergeStats } from './statGeneration'
import { overallOf } from './overall'
import { applyProDevelopment, evaluateProRole } from './developmentEngine'
import { rollInjury, recordInjury } from './injuryEngine'
import { classifySeasonPerformance, performanceFeedback } from './performanceEngine'
import { potentialFlavorLine } from './potentialEngine'
import { NFL_TEAMS } from '../data/nflTeams'
import { AWARDS } from '../data/awards'
import { headlineStatDef, POSITION_STATS } from '../data/proStats'
import { pickLeagueNews } from '../data/leagueNews'
import { grantAward } from './awardsEngine'

export interface ProSeasonResult {
  player: Player
  logs: string[]
  awardsWon: string[]
  destinBrisee: boolean
  gamesPlayed: number
  statsThisSeason: Record<string, number>
  madePlayoffs: boolean
  wonSuperBowl: boolean
  note: number
  objectiveLabel: string
  objectiveMet: boolean
  seasonEarningsM: number
  objectiveBonusM: number
  leagueNews: string
}

function teamTier(teamName: string): number {
  return NFL_TEAMS.find((t) => t.name === teamName)?.tier ?? 3
}

const INJURY_HEADLINE: Record<string, string> = {
  legere: '🟡 Minor injury',
  moyenne: '🟠 Moderate injury',
  grave: '🔴 Severe injury',
  catastrophique: '🔴 Career-threatening injury',
}

export function resolveProSeason(player: Player): ProSeasonResult {
  const logs: string[] = []
  let next: Player = {
    ...player,
    attributes: { ...player.attributes },
    careerStats: { ...player.careerStats!, stats: { ...player.careerStats!.stats } },
  }

  const dbProb = destinBriseeProbability(player.position, player.age)
  if (Math.random() < dbProb) {
    logs.push(
      `SHATTERED DESTINY — a catastrophic injury ends ${player.name}'s career immediately and for good. The unfinished potential will forever be the mark of this story.`,
    )
    return {
      player: next,
      logs,
      awardsWon: [],
      destinBrisee: true,
      gamesPlayed: 0,
      statsThisSeason: {},
      madePlayoffs: false,
      wonSuperBowl: false,
      note: 0,
      objectiveLabel: '',
      objectiveMet: false,
      seasonEarningsM: 0,
      objectiveBonusM: 0,
      leagueNews: pickLeagueNews(),
    }
  }

  const development = applyProDevelopment(player)
  next.attributes = development.attributes
  logs.push(...development.logs)

  let gamesPlayed = 17
  const injuryRoll = rollInjury(next)
  if (injuryRoll) {
    gamesPlayed = Math.max(0, 17 - injuryRoll.gamesOut)
    if (injuryRoll.attributeImpact > 0) {
      next.attributes.physique = clamp(next.attributes.physique - injuryRoll.attributeImpact)
    }
    next.injuryHistory = [...player.injuryHistory, recordInjury(next, injuryRoll)]
    logs.push(
      `${INJURY_HEADLINE[injuryRoll.severity]} — out ${injuryRoll.gamesOut} game${injuryRoll.gamesOut > 1 ? 's' : ''}. ${injuryRoll.description}`,
    )
  }

  const overall = overallOf(next)
  const tier = teamTier(player.nflTeam ?? '')
  // Le rôle se réévalue chaque saison : un titulaire qui décline peut redevenir remplaçant,
  // un remplaçant qui progresse peut gagner sa place — la titularisation à vie n'existe pas.
  next.depthChartStatus = evaluateProRole(next, overall, tier, AGE_CURVES[player.position].peakEnd)
  const roleMultiplier = next.depthChartStatus === 'starter' ? 1 : 0.4

  const statsThisSeason = generateStatsForSeason(next, gamesPlayed, 17, roleMultiplier)
  next.careerStats!.stats = mergeStats(next.careerStats!.stats, statsThisSeason)
  next.careerStats!.gamesPlayed += gamesPlayed

  // Un joueur blessé une bonne partie de la saison ne peut pas prétendre aux récompenses
  // individuelles, même s'il reste un excellent talent sur le papier. Les distinctions du haut
  // du tableau doivent rester rares même sur une très longue carrière — sinon accumuler des
  // saisons finit par tout débloquer mécaniquement.
  const awardsWon: string[] = []
  const offensive = player.position === 'QB' || player.position === 'WR' || player.position === 'RB-FB'
  const eligibleForAwards = next.depthChartStatus === 'starter' && gamesPlayed >= 10
  if (eligibleForAwards) {
    // Cascade unique : un seul niveau de reconnaissance "meilleur joueur" par saison, du plus
    // rare (MVP) au plus courant (All-Pro 2e équipe). Le Pro Bowl est géré séparément
    // juste après car il n'est pas exclusif avec le Comeback Player of the Year par exemple.
    if (overall >= 90 && Math.random() < 0.12) {
      next.careerStats!.mvpSterling += 1
      next = grantAward(next, 'nfl-mvp')
      awardsWon.push(AWARDS['nfl-mvp'].name)
    } else if (overall >= 87 && Math.random() < 0.1) {
      const id = offensive ? 'nfl-opoy' : 'nfl-dpoy'
      next = grantAward(next, id)
      awardsWon.push(AWARDS[id].name)
    } else if (overall >= 83 && Math.random() < 0.18) {
      next.careerStats!.allProFirstTeam += 1
      next = grantAward(next, 'nfl-all-pro-first')
      awardsWon.push(AWARDS['nfl-all-pro-first'].name)
    } else if (overall >= 79 && Math.random() < 0.1) {
      next = grantAward(next, 'nfl-all-pro-second')
      awardsWon.push(AWARDS['nfl-all-pro-second'].name)
    } else if (overall >= 75 && Math.random() < 0.3) {
      next.careerStats!.proBowls += 1
      next = grantAward(next, 'nfl-pro-bowl')
      awardsWon.push(AWARDS['nfl-pro-bowl'].name)
    }

    if (player.season === 1 && overall >= 68 && Math.random() < 0.3) {
      const id = offensive ? 'nfl-off-roy' : 'nfl-def-roy'
      if (offensive) next.careerStats!.offRookieOfYear = true
      else next.careerStats!.defRookieOfYear = true
      next = grantAward(next, id)
      awardsWon.push(AWARDS[id].name)
    }

    // Retour marquant après une blessure sérieuse la saison précédente.
    const hadSeriousInjuryLastSeason = player.injuryHistory.some(
      (inj) => inj.season === player.season - 1 && (inj.severity === 'grave' || inj.severity === 'catastrophique'),
    )
    if (hadSeriousInjuryLastSeason && overall >= 78 && Math.random() < 0.25) {
      next = grantAward(next, 'nfl-comeback-poy')
      awardsWon.push(AWARDS['nfl-comeback-poy'].name)
    }

    // Leaders statistiques : approximation d'une saison "au sommet de la ligue" à ce poste
    // plutôt qu'une vraie simulation des 31 autres franchises.
    const statLeaderChecks: { key: string; awardId: string; multiplier?: number }[] =
      player.position === 'QB'
        ? [
            { key: 'passYards', awardId: 'nfl-passing-yards-leader' },
            { key: 'touchdowns', awardId: 'nfl-passing-td-leader' },
          ]
        : player.position === 'RB-FB'
          ? [
              { key: 'rushYards', awardId: 'nfl-rushing-yards-leader' },
              { key: 'touchdowns', awardId: 'nfl-rushing-td-leader' },
            ]
          : player.position === 'WR'
            ? [
                { key: 'receptions', awardId: 'nfl-receptions-leader' },
                { key: 'recYards', awardId: 'nfl-receiving-yards-leader' },
                { key: 'touchdowns', awardId: 'nfl-receiving-td-leader' },
              ]
            : player.position === 'EDGE'
              ? [
                  { key: 'sacks', awardId: 'nfl-sack-leader' },
                  { key: 'forcedFumbles', awardId: 'nfl-forced-fumble-leader' },
                ]
              : [
                  { key: 'interceptions', awardId: 'nfl-interception-leader' },
                  ...(player.position === 'CB' ? [{ key: 'passesDefended', awardId: 'nfl-pass-breakups-leader' }] : []),
                ]

    const positionStatDefs = POSITION_STATS[player.position]
    for (const check of statLeaderChecks) {
      const target = positionStatDefs.find((d) => d.key === check.key)?.seasonTarget ?? 0
      const value = statsThisSeason[check.key] ?? 0
      if (target > 0 && value >= target * (check.multiplier ?? 1.4) && Math.random() < 0.25) {
        next = grantAward(next, check.awardId)
        awardsWon.push(AWARDS[check.awardId].name)
      }
    }
    if (player.position === 'RB-FB') {
      const totalTarget =
        (positionStatDefs.find((d) => d.key === 'rushYards')?.seasonTarget ?? 0) +
        (positionStatDefs.find((d) => d.key === 'recYards')?.seasonTarget ?? 0)
      const totalValue = (statsThisSeason.rushYards ?? 0) + (statsThisSeason.recYards ?? 0)
      if (totalTarget > 0 && totalValue >= totalTarget * 1.4 && Math.random() < 0.25) {
        next = grantAward(next, 'nfl-total-yards-leader')
        awardsWon.push(AWARDS['nfl-total-yards-leader'].name)
      }
    }
  }

  // Un titulaire réellement dominant tire son équipe vers le haut, indépendamment
  // du seul niveau de la franchise — comme un grand QB porte un roster moyen.
  const eliteCarryBonus = next.depthChartStatus === 'starter' ? Math.min(0.2, Math.max(0, (overall - 74) * 0.01)) : 0
  const playoffProb = Math.min(0.85, [0.12, 0.25, 0.4, 0.55, 0.7][tier - 1] + eliteCarryBonus)
  const madePlayoffs = Math.random() < playoffProb
  // Le parcours en playoffs (Wild Card → ... → Super Bowl) se joue désormais match par match,
  // écran par écran, via engine/playoffEngine.ts — wonSuperBowl/superBowlMVP se décident donc
  // là-bas, pas ici par un jet unique caché. Ici on se contente d'acter la qualification.
  const wonSuperBowl = false
  if (madePlayoffs) {
    next.careerStats!.playoffAppearances += 1
    logs.push(`Les ${player.nflTeam} accrochent une place en playoffs.`)

    if (Math.random() < 0.15) {
      next = grantAward(next, 'nfl-division-champion')
      awardsWon.push(AWARDS['nfl-division-champion'].name)
    }
    if (overall >= 90 && tier === 5 && Math.random() < 0.02) {
      next = grantAward(next, 'nfl-perfect-season')
      awardsWon.push(AWARDS['nfl-perfect-season'].name)
    }
  }

  if (awardsWon.length > 0) {
    logs.push(`Season honors: ${awardsWon.join(', ')}.`)
  }

  const headline = headlineStatDef(next.position)
  const headlineRatio = (statsThisSeason[headline.key] ?? 0) / headline.seasonTarget
  const { note, tier: perfTier } = classifySeasonPerformance({
    overall,
    headlineRatio,
    gamesPlayed,
    totalGames: 17,
    role: next.depthChartStatus === 'starter' ? 'starter' : 'backup',
    madePlayoffs,
    awardsCount: awardsWon.length,
  })
  const feedback = performanceFeedback(perfTier)
  if (feedback) {
    next.attributes = {
      ...next.attributes,
      [feedback.attribute]: clamp(next.attributes[feedback.attribute] + feedback.delta),
    }
  }

  const flavor = potentialFlavorLine(next.potential)
  if (flavor) logs.push(flavor)

  const objectiveLabel = 'Make the playoffs'
  const objectiveMet = madePlayoffs
  const baseSalaryM = player.contractValueM ?? 3
  const objectiveBonusM = objectiveMet ? Math.round(baseSalaryM * 0.08 * 10) / 10 : 0
  const seasonEarningsM = Math.round((baseSalaryM + objectiveBonusM) * 10) / 10

  next.careerEarningsM = Math.round((player.careerEarningsM + seasonEarningsM) * 10) / 10

  return {
    player: next,
    logs,
    awardsWon,
    destinBrisee: false,
    gamesPlayed,
    statsThisSeason,
    madePlayoffs,
    wonSuperBowl,
    note,
    objectiveLabel,
    objectiveMet,
    seasonEarningsM,
    objectiveBonusM,
    leagueNews: pickLeagueNews(),
  }
}
