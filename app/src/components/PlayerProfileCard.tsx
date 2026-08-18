import { getPosition } from '../data/positions'
import { StarRating } from './StatChip'
import { GradientBar } from './GradientBar'
import { TeamDots } from './TeamDots'
import { Avatar } from './Avatar'
import { POSITION_STATS } from '../data/proStats'
import { getTeamColors } from '../data/nflTeams'
import { getCollegeColors } from '../data/colleges'
import { getAvatar } from '../data/avatars'
import { overallOf } from '../engine/overall'
import { AWARDS, buildAwardEntries, type AwardEntry } from '../data/awards'
import type { AttributeKey, Player, ValuePoint } from '../types/player'

// L'exposition n'entre pas dans le calcul du général (voir engine/overall.ts) : c'est une
// mécanique de recrutement/cote à part, déjà représentée dynamiquement dans la section "Cote".
// On ne l'affiche pas ici pour ne pas laisser croire qu'elle tire la note vers le bas.
const CORE_ATTRIBUTE_KEYS: AttributeKey[] = ['physique', 'technique', 'mental', 'leadership']
const ATTRIBUTE_LABELS: Record<AttributeKey, string> = {
  physique: 'Physique',
  technique: 'Technique',
  mental: 'Mental',
  leadership: 'Leadership',
  exposition: 'Exposition',
}

// Dégradé du plus faible (rouge) au plus fort (vert foncé) — mêmes seuils que le classement
// recrutement (StarRating) pour rester cohérent avec le reste de l'UI.
function attributeColor(value: number): string {
  if (value >= 90) return '#0a4d2f'
  if (value >= 80) return '#0f6b41'
  if (value >= 70) return '#1a8f5a'
  if (value >= 60) return '#5fa832'
  if (value >= 50) return '#d6a017'
  if (value >= 40) return '#e08a2c'
  return '#c94f3d'
}

// Le nombre de participations aux playoffs n'est pas un "award" nommé dans data/awards.ts
// (c'est un compteur structurel déjà consommé par scoreEngine.ts) — on le garde visible en
// tête du palmarès collectif pour ne pas perdre cette information déjà affichée auparavant.
function buildTrophies(player: Player): AwardEntry[] {
  const list = buildAwardEntries(player.awardsCareer).filter((e) => AWARDS[e.id]?.category === 'collective')
  const playoffApps = player.careerStats?.playoffAppearances ?? 0
  if (playoffApps > 0) list.unshift({ id: 'playoff-appearances', icon: '🏟️', label: 'Playoffs', count: playoffApps })
  return list
}

function buildIndividualAwards(player: Player): AwardEntry[] {
  return buildAwardEntries(player.awardsCareer).filter((e) => AWARDS[e.id]?.category !== 'collective')
}

function AwardBadge({ icon, label, count }: AwardEntry) {
  return (
    <div className="flex items-center gap-1.5 rounded-xl border-2 border-[var(--de-gold)] bg-[var(--de-gold)]/15 px-2.5 py-1.5 shadow-sm shadow-[var(--de-gold)]/20">
      <span className="text-base leading-none">{icon}</span>
      <span className="text-xs font-extrabold text-[var(--text)]">{label}</span>
      {count > 1 && (
        <span className="rounded-full bg-[var(--de-gold)] px-1.5 py-0.5 text-[10px] font-black leading-none text-[#3a2a05]">
          ×{count}
        </span>
      )}
    </div>
  )
}

function ValueSparkline({ points }: { points: ValuePoint[] }) {
  if (points.length < 2) return null
  const width = 280
  const height = 64
  const pad = 6
  const values = points.map((p) => p.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const usable = height - pad * 2

  const coords = points.map((p, i) => ({
    x: (i / (points.length - 1)) * width,
    y: pad + usable - ((p.value - min) / range) * usable,
  }))

  let linePath = `M ${coords[0].x} ${coords[0].y}`
  for (let i = 0; i < coords.length - 1; i++) {
    const p0 = coords[i]
    const p1 = coords[i + 1]
    const cx = (p0.x + p1.x) / 2
    linePath += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`
  }
  const last = coords[coords.length - 1]
  const areaPath = `${linePath} L ${last.x} ${height} L ${coords[0].x} ${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-2 w-full overflow-visible" preserveAspectRatio="none">
      <defs>
        <linearGradient id="cote-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#cote-fill)" stroke="none" />
      <path d={linePath} fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r="4" fill="#6d28d9" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

export function PlayerProfileCard({ player }: { player: Player }) {
  const position = getPosition(player.position)
  const overall = overallOf(player)
  const isPro = player.act === 'PRO'
  const isCollege = player.act === 'COLLEGE'
  const teamName = isPro ? player.nflTeam : isCollege ? player.collegeName : player.highSchoolName
  const badge = isPro ? 'NFL' : isCollege ? 'NCAA' : 'HS'
  const teamColors = isPro
    ? getTeamColors(player.nflTeam ?? '')
    : isCollege
      ? getCollegeColors(player.collegeName ?? '')
      : null
  const positionStats = POSITION_STATS[player.position]

  const trophies = buildTrophies(player)
  const individualAwards = buildIndividualAwards(player)
  const actStats = isPro ? player.careerStats : isCollege ? player.collegeStats : player.hsStats

  const currentValue = player.exposureScore
  const livePoint: ValuePoint = { age: player.age, value: currentValue }
  const chartPoints = [...player.valueHistory, livePoint]
  const peakPoint = chartPoints.reduce((best, p) => (p.value > best.value ? p : best), chartPoints[0])

  return (
    <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5 shadow-xl shadow-black/20 lg:w-[320px] lg:shrink-0">
      <div className="flex items-start gap-3">
        <div className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-2xl bg-[#ECECE9]">
          <Avatar {...getAvatar(player.avatarId)} size={64} />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-black leading-tight text-[var(--text)]">{player.name}</h2>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-[var(--de-success-bg)] px-2 py-0.5 text-[11px] font-bold text-[var(--de-success-text)]">
              {position.name}
            </span>
            <span className="text-xs font-semibold text-[var(--text-dim)]">{player.age} ans</span>
          </div>
        </div>
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--de-gold)] text-lg font-black text-[#3a2a05]">
          {overall}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="font-bold uppercase text-[var(--text-dim)]">Classement</span>
        <StarRating value={player.starRating} />
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-black/5 px-3 py-2">
        <span className="flex-none rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-bold uppercase text-[var(--text-dim)]">
          {badge}
        </span>
        {teamColors && <TeamDots colors={teamColors} />}
        <span className="min-w-0 flex-1 truncate text-sm font-bold text-[var(--text)]">{teamName}</span>
        {(isPro || isCollege) && player.depthChartStatus && (
          <span className="flex-none text-sm">{player.depthChartStatus === 'starter' ? '🏈' : '🪑'}</span>
        )}
      </div>

      {isPro && player.contractValueM !== undefined && (
        <p className="text-center text-xs font-semibold text-[var(--text-dim)]">
          {player.contractValueM} M$/an · {player.contractYearsRemaining} an
          {(player.contractYearsRemaining ?? 0) > 1 ? 's' : ''} de contrat restants
        </p>
      )}

      {actStats && (
        <div className="border-t border-black/10 pt-3">
          <div className="mb-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[var(--text-dim)]">Statistiques</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[var(--text-dim)]">Matchs joués</span>
              <span className="font-bold text-[var(--text)]">{actStats.gamesPlayed}</span>
            </div>
            {positionStats.map((def) => (
              <div key={def.key} className="flex items-center justify-between">
                <span className="text-[var(--text-dim)]">{def.label}</span>
                <span className="font-bold text-[var(--text)]">{actStats.stats[def.key] ?? 0}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-black/10 pt-3">
        <div className="mb-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[var(--text-dim)]">Profil</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
          {CORE_ATTRIBUTE_KEYS.map((key) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-[var(--text-dim)]">{ATTRIBUTE_LABELS[key]}</span>
              <span className="font-black" style={{ color: attributeColor(player.attributes[key]) }}>
                {Math.round(player.attributes[key])}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-black/10 pt-3">
        <GradientBar label="Forme" value={player.attributes.physique} kind="warm" />
        <GradientBar label="Mental" value={player.attributes.mental} kind="cool" />
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="mb-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[var(--text-dim)]">Palmarès</div>
        {trophies.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {trophies.map((t, i) => (
              <AwardBadge key={i} {...t} />
            ))}
          </div>
        ) : (
          <p className="text-xs italic text-[var(--text-dim)]">Aucun titre pour l’instant. Ils viennent avec les grandes saisons.</p>
        )}
      </div>

      <div>
        <div className="mb-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          Distinctions individuelles
        </div>
        {individualAwards.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {individualAwards.map((t, i) => (
              <AwardBadge key={i} {...t} />
            ))}
          </div>
        ) : (
          <p className="text-xs italic text-[var(--text-dim)]">Aucune récompense individuelle. Elles viennent avec les grandes saisons.</p>
        )}
      </div>

      <div className="border-t border-black/10 pt-3">
        <div className="mb-1 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          <span>Cote</span>
          <span>
            Sommet : {peakPoint.value} ({peakPoint.age} ans)
          </span>
        </div>
        <div className="text-2xl font-black text-[var(--de-green)]">{currentValue}</div>
        <ValueSparkline points={chartPoints} />
      </div>
    </div>
  )
}
