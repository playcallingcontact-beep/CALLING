import type { Act, Position } from '../types/player'

export type AwardCategory = 'individual' | 'statLeader' | 'collective'

export interface AwardDef {
  id: string
  name: string
  emoji: string
  act: Act
  category: AwardCategory
  // Non précisé = ouvert à tous les postes.
  eligible?: Position[]
}

const OFFENSE: Position[] = ['QB', 'WR', 'RB-FB']
const DEFENSE: Position[] = ['CB', 'SS', 'EDGE']

export const AWARDS_LIST: AwardDef[] = [
  // ───────────────────────── HIGH SCHOOL ─────────────────────────
  { id: 'hs-state-poy', name: 'State Player of the Year', emoji: '🏅', act: 'HS', category: 'individual' },
  { id: 'hs-state-off-poy', name: 'State Offensive Player of the Year', emoji: '🏅', act: 'HS', category: 'individual', eligible: OFFENSE },
  { id: 'hs-state-def-poy', name: 'State Defensive Player of the Year', emoji: '🏅', act: 'HS', category: 'individual', eligible: DEFENSE },
  { id: 'hs-national-poy', name: 'National Player of the Year', emoji: '🌟', act: 'HS', category: 'individual' },
  { id: 'hs-national-off-poy', name: 'National Offensive Player of the Year', emoji: '🌟', act: 'HS', category: 'individual', eligible: OFFENSE },
  { id: 'hs-national-def-poy', name: 'National Defensive Player of the Year', emoji: '🌟', act: 'HS', category: 'individual', eligible: DEFENSE },
  { id: 'hs-all-us', name: 'All-US', emoji: '🇺🇸', act: 'HS', category: 'individual' },

  { id: 'hs-state-champion', name: 'State Champion', emoji: '🏆', act: 'HS', category: 'collective' },
  { id: 'hs-state-championship-mvp', name: 'State Championship MVP', emoji: '🎖️', act: 'HS', category: 'collective' },
  { id: 'hs-national-champion', name: 'National Champion', emoji: '👑', act: 'HS', category: 'collective' },
  { id: 'hs-perfect-season', name: 'Perfect Season', emoji: '💯', act: 'HS', category: 'collective' },

  // ───────────────────────────── NCAA ─────────────────────────────
  { id: 'ncaa-kaheisman', name: 'Kaheisman Trophy', emoji: '🏆', act: 'COLLEGE', category: 'individual' },
  { id: 'ncaa-isswell', name: 'Isswell Award', emoji: '🥇', act: 'COLLEGE', category: 'individual', eligible: OFFENSE },
  { id: 'ncaa-liyamrik', name: 'Liyamrik Award', emoji: '🥇', act: 'COLLEGE', category: 'individual', eligible: DEFENSE },
  { id: 'ncaa-walter-camp', name: 'Walter Camp Player of the Year', emoji: '🏅', act: 'COLLEGE', category: 'individual' },
  { id: 'ncaa-all-us-first', name: 'First-Team All-US', emoji: '🇺🇸', act: 'COLLEGE', category: 'individual' },
  { id: 'ncaa-all-us-second', name: 'Second-Team All-US', emoji: '🇺🇸', act: 'COLLEGE', category: 'individual' },

  { id: 'ncaa-pos-qb', name: "Jacob O'QUBEE Award", emoji: '🎯', act: 'COLLEGE', category: 'individual', eligible: ['QB'] },
  { id: 'ncaa-pos-rb', name: 'Reece BULL Award', emoji: '🏃', act: 'COLLEGE', category: 'individual', eligible: ['RB-FB'] },
  { id: 'ncaa-pos-wr', name: 'Wilson RATCHOFF Award', emoji: '🙌', act: 'COLLEGE', category: 'individual', eligible: ['WR'] },
  { id: 'ncaa-pos-edge', name: 'Edgard GEMBARDI Award', emoji: '⚡', act: 'COLLEGE', category: 'individual', eligible: ['EDGE'] },
  { id: 'ncaa-pos-db', name: 'Chris Shorpe Award', emoji: '🔒', act: 'COLLEGE', category: 'individual', eligible: ['CB', 'SS'] },

  { id: 'ncaa-conference-champion', name: 'Conference Champion', emoji: '🏆', act: 'COLLEGE', category: 'collective' },
  { id: 'ncaa-conference-championship-mvp', name: 'Conference Championship MVP', emoji: '🎖️', act: 'COLLEGE', category: 'collective' },
  { id: 'ncaa-cfp', name: 'College Football Playoff', emoji: '🏟️', act: 'COLLEGE', category: 'collective' },
  { id: 'ncaa-national-champion', name: 'National Champion', emoji: '👑', act: 'COLLEGE', category: 'collective' },
  { id: 'ncaa-national-championship-mvp', name: 'National Championship MVP', emoji: '🎖️', act: 'COLLEGE', category: 'collective' },
  { id: 'ncaa-undefeated', name: 'Undefeated Season', emoji: '💯', act: 'COLLEGE', category: 'collective' },

  // ──────────────────────────── NFL / PRO ────────────────────────────
  { id: 'nfl-off-roy', name: 'Offensive Rookie of the Year', emoji: '🌟', act: 'PRO', category: 'individual', eligible: OFFENSE },
  { id: 'nfl-def-roy', name: 'Defensive Rookie of the Year', emoji: '🌟', act: 'PRO', category: 'individual', eligible: DEFENSE },
  { id: 'nfl-opoy', name: 'Offensive Player of the Year', emoji: '🥇', act: 'PRO', category: 'individual', eligible: OFFENSE },
  { id: 'nfl-dpoy', name: 'Defensive Player of the Year', emoji: '🥇', act: 'PRO', category: 'individual', eligible: DEFENSE },
  { id: 'nfl-comeback-poy', name: 'Comeback Player of the Year', emoji: '💪', act: 'PRO', category: 'individual' },
  { id: 'nfl-mvp', name: 'MVP', emoji: '🏅', act: 'PRO', category: 'individual' },
  { id: 'nfl-pro-bowl', name: 'Pro Bowl', emoji: '⭐', act: 'PRO', category: 'individual' },
  { id: 'nfl-all-pro-second', name: 'Second-Team All-Pro', emoji: '🥈', act: 'PRO', category: 'individual' },
  { id: 'nfl-all-pro-first', name: 'First-Team All-Pro', emoji: '🥇', act: 'PRO', category: 'individual' },

  { id: 'nfl-passing-yards-leader', name: 'Passing Yards Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['QB'] },
  { id: 'nfl-passing-td-leader', name: 'Passing TD Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['QB'] },
  { id: 'nfl-rushing-yards-leader', name: 'Rushing Yards Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['RB-FB'] },
  { id: 'nfl-rushing-td-leader', name: 'Rushing TD Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['RB-FB'] },
  { id: 'nfl-total-yards-leader', name: 'Total Yards Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['RB-FB'] },
  { id: 'nfl-receptions-leader', name: 'Receptions Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['WR'] },
  { id: 'nfl-receiving-yards-leader', name: 'Receiving Yards Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['WR'] },
  { id: 'nfl-receiving-td-leader', name: 'Receiving TD Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['WR'] },
  { id: 'nfl-sack-leader', name: 'Sack Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['EDGE'] },
  { id: 'nfl-forced-fumble-leader', name: 'Forced Fumble Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['EDGE'] },
  { id: 'nfl-interception-leader', name: 'Interception Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['CB', 'SS'] },
  { id: 'nfl-pass-breakups-leader', name: 'Pass Breakups Leader', emoji: '📊', act: 'PRO', category: 'statLeader', eligible: ['CB', 'SS'] },

  { id: 'nfl-division-champion', name: 'Division Champion', emoji: '🏆', act: 'PRO', category: 'collective' },
  { id: 'nfl-conference-champion', name: 'Conference Champion', emoji: '🏆', act: 'PRO', category: 'collective' },
  { id: 'nfl-super-bowl-champion', name: 'Super Bowl Champion', emoji: '🏆', act: 'PRO', category: 'collective' },
  { id: 'nfl-conference-championship-mvp', name: 'Conference Championship MVP', emoji: '🎖️', act: 'PRO', category: 'collective' },
  { id: 'nfl-super-bowl-mvp', name: 'Super Bowl MVP', emoji: '🎖️', act: 'PRO', category: 'collective' },
  { id: 'nfl-perfect-season', name: 'Perfect Season', emoji: '💯', act: 'PRO', category: 'collective' },
]

export const AWARDS: Record<string, AwardDef> = Object.fromEntries(AWARDS_LIST.map((a) => [a.id, a]))

export function isEligibleForAward(position: Position, awardId: string): boolean {
  const def = AWARDS[awardId]
  if (!def) return false
  return !def.eligible || def.eligible.includes(position)
}

export function awardsForAct(act: Act): AwardDef[] {
  return AWARDS_LIST.filter((a) => a.act === act)
}

export interface AwardEntry {
  id: string
  icon: string
  label: string
  count: number
}

export function buildAwardEntries(awardsCareer: Record<string, number>): AwardEntry[] {
  return AWARDS_LIST.filter((def) => (awardsCareer[def.id] ?? 0) > 0).map((def) => ({
    id: def.id,
    icon: def.emoji,
    label: def.name,
    count: awardsCareer[def.id] ?? 0,
  }))
}

const ACT_META: { act: Act; label: string; emoji: string }[] = [
  { act: 'HS', label: 'High School', emoji: '🏫' },
  { act: 'COLLEGE', label: 'NCAA', emoji: '🎓' },
  { act: 'PRO', label: 'NFL', emoji: '🏈' },
]

export function buildAwardEntriesByAct(
  awardsCareer: Record<string, number>,
): { act: Act; label: string; emoji: string; entries: AwardEntry[] }[] {
  return ACT_META.map(({ act, label, emoji }) => ({
    act,
    label,
    emoji,
    entries: AWARDS_LIST.filter((def) => def.act === act && (awardsCareer[def.id] ?? 0) > 0).map((def) => ({
      id: def.id,
      icon: def.emoji,
      label: def.name,
      count: awardsCareer[def.id] ?? 0,
    })),
  })).filter((group) => group.entries.length > 0)
}
