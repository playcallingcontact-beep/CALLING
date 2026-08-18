import { Card } from '../components/Card'
import { EffectPill } from '../components/EffectPill'
import { GameShell } from '../components/GameShell'
import { PillButton } from '../components/PillButton'
import { StarRating } from '../components/StatChip'
import { POSITION_STATS } from '../data/proStats'
import type { Attributes, Player } from '../types/player'

const ATTRIBUTE_LABELS: Record<keyof Attributes, string> = {
  physique: 'Physique',
  technique: 'Technique',
  mental: 'Mental',
  leadership: 'Leadership',
  exposition: 'Exposition',
}

function buildHeadline(player: Player, attributesBefore: Attributes, schoolName: string): string {
  const gains = (Object.keys(player.attributes) as (keyof Attributes)[]).map((key) => ({
    key,
    delta: player.attributes[key] - attributesBefore[key],
  }))
  const best = gains.sort((a, b) => b.delta - a.delta)[0]
  if (!best || best.delta <= 0) return `« ${player.name}, une saison de transition à ${schoolName} »`
  return `« ${player.name} explose en ${ATTRIBUTE_LABELS[best.key].toLowerCase()} à ${schoolName} »`
}

export function SeasonRecap({
  player,
  attributesBefore,
  starRatingBefore,
  logsThisSeason,
  statsThisSeason,
  awardsWon,
  nextLabel,
  onContinue,
}: {
  player: Player
  attributesBefore: Attributes
  starRatingBefore: number
  logsThisSeason: string[]
  statsThisSeason: Record<string, number>
  awardsWon: string[]
  nextLabel: string
  onContinue: () => void
}) {
  const isCollege = player.act === 'COLLEGE'
  const schoolName = (isCollege ? player.collegeName : player.highSchoolName) ?? ''
  const positionStats = POSITION_STATS[player.position]
  const gamesThisSeason = isCollege ? 13 : 10

  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          📊 Saison {player.season} · {schoolName}
        </span>

        <p className="rounded-xl bg-[var(--de-success-bg)] px-4 py-3 text-sm font-semibold italic text-[var(--de-success-text)]">
          {buildHeadline(player, attributesBefore, schoolName)}
        </p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-black/5 py-3">
            <span className="text-lg font-black text-[var(--de-green)]">{gamesThisSeason}</span>
            <span className="text-[10px] font-bold uppercase text-[var(--text-dim)]">Matchs</span>
          </div>
          {positionStats.map((def) => (
            <div key={def.key} className="flex flex-col items-center gap-0.5 rounded-xl bg-black/5 py-3">
              <span className="text-lg font-black text-[var(--de-green)]">{statsThisSeason[def.key] ?? 0}</span>
              <span className="text-[10px] font-bold uppercase text-[var(--text-dim)]">{def.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {(Object.keys(player.attributes) as (keyof Attributes)[]).map((key) => {
            const current = Math.round(player.attributes[key])
            const before = Math.round(attributesBefore[key])
            const delta = current - before
            return (
              <div key={key} className="flex flex-col items-center gap-0.5 rounded-xl bg-black/5 py-3">
                <span className="text-lg font-black text-[var(--de-green)]">{current}</span>
                <span className="text-[10px] font-bold uppercase text-[var(--text-dim)]">{ATTRIBUTE_LABELS[key]}</span>
                {delta !== 0 && (
                  <span className={`text-[11px] font-bold ${delta > 0 ? 'text-[var(--de-success-text)]' : 'text-red-500'}`}>
                    {delta > 0 ? `+${delta}` : delta}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-between rounded-xl bg-black/5 px-4 py-3">
          <div>
            <div className="text-[11px] font-bold uppercase text-[var(--text-dim)]">
              {isCollege ? 'Draft Stock' : 'Classement recrutement'}
            </div>
            <div className="text-lg">
              <StarRating value={player.starRating} />
            </div>
          </div>
          {player.starRating !== starRatingBefore && (
            <span className={`text-sm font-extrabold ${player.starRating > starRatingBefore ? 'text-[var(--de-success-text)]' : 'text-red-500'}`}>
              {player.starRating > starRatingBefore ? '▲ progression' : '▼ recul'}
            </span>
          )}
        </div>

        {isCollege && (
          <div className="flex items-center justify-between rounded-xl bg-black/5 px-4 py-3">
            <div className="text-[11px] font-bold uppercase text-[var(--text-dim)]">Depth Chart</div>
            <span className="text-sm font-extrabold text-[var(--text)]">
              {player.depthChartStatus === 'starter' ? '🏈 Titulaire' : '🪑 Remplaçant'}
            </span>
          </div>
        )}

        {awardsWon.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {awardsWon.map((a, i) => (
              <EffectPill key={i} label={`🏅 ${a}`} />
            ))}
          </div>
        )}

        {logsThisSeason.length > 0 && (
          <div className="flex flex-col gap-1 border-t border-black/10 pt-3 text-sm italic text-[var(--text-dim)]">
            {logsThisSeason.map((l, i) => (
              <p key={i}>📰 {l}</p>
            ))}
          </div>
        )}

        <PillButton variant="dark" onClick={onContinue} className="mt-1 self-stretch">
          {nextLabel}
        </PillButton>
      </Card>
    </GameShell>
  )
}
