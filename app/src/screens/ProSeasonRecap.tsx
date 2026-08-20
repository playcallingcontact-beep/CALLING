import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { PillButton } from '../components/PillButton'
import { EffectPill } from '../components/EffectPill'
import type { Player } from '../types/player'
import type { ProSeasonResult } from '../engine/proSeasonEngine'
import { POSITION_STATS } from '../data/proStats'

export function ProSeasonRecap({
  player,
  result,
  nextLabel,
  onContinue,
}: {
  player: Player
  result: ProSeasonResult
  nextLabel: string
  onContinue: () => void
}) {
  const positionStats = POSITION_STATS[player.position]

  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          📊 Season {player.season} · {player.nflTeam}
        </span>

        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-black/5 py-3">
            <span className="text-lg font-black text-[var(--de-green)]">{result.gamesPlayed}</span>
            <span className="text-[10px] font-bold uppercase text-[var(--text-dim)]">Games</span>
          </div>
          {positionStats.map((def) => (
            <div key={def.key} className="flex flex-col items-center gap-0.5 rounded-xl bg-black/5 py-3">
              <span className="text-lg font-black text-[var(--de-green)]">{result.statsThisSeason[def.key] ?? 0}</span>
              <span className="text-[10px] font-bold uppercase text-[var(--text-dim)]">{def.label}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-black/5 py-3">
            <span className="text-lg font-black text-[var(--de-gold-dark)]">{result.note || '—'}</span>
            <span className="text-[10px] font-bold uppercase text-[var(--text-dim)]">Grade</span>
          </div>
        </div>

        <p className="flex items-center gap-2 text-sm text-[var(--text)]">
          {result.objectiveMet ? '✅' : '❌'} Club objective: {result.objectiveLabel}
          {result.objectiveMet && result.objectiveBonusM > 0 && (
            <span className="font-extrabold text-[var(--de-success-text)]">(bonus +${result.objectiveBonusM}M)</span>
          )}
        </p>

        {result.seasonEarningsM > 0 && (
          <p className="text-sm font-semibold text-[var(--text)]">
            💰 +${result.seasonEarningsM}M <span className="text-[var(--text-dim)]">(salary &amp; sponsors)</span>
          </p>
        )}

        {(result.madePlayoffs || result.wonSuperBowl) && (
          <div className="flex flex-wrap gap-2">
            {result.madePlayoffs && <EffectPill label="🏟️ Playoffs" />}
            {result.wonSuperBowl && <EffectPill label="🏆 Final Trophy" />}
          </div>
        )}

        {result.awardsWon.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {result.awardsWon.map((a, i) => (
              <EffectPill key={i} label={`🏅 ${a}`} />
            ))}
          </div>
        )}

        {result.logs.length > 0 && (
          <div className="flex flex-col gap-1 border-t border-black/10 pt-3 text-sm italic text-[var(--text-dim)]">
            {result.logs.map((l, i) => (
              <p key={i}>📰 {l}</p>
            ))}
          </div>
        )}

        {result.leagueNews && (
          <p className="border-t border-dashed border-black/10 pt-3 text-xs italic text-[var(--text-dim)]">
            🗞️ Elsewhere in the league: {result.leagueNews}
          </p>
        )}

        <PillButton variant="dark" onClick={onContinue} className="mt-1 self-stretch">
          {nextLabel}
        </PillButton>
      </Card>
    </GameShell>
  )
}
