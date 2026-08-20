import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { PillButton } from '../components/PillButton'
import { EffectPill } from '../components/EffectPill'
import type { PlayoffRoundDef } from '../engine/playoffEngine'
import type { Player } from '../types/player'

const WON_ROUND_FLAVOR: Record<string, string> = {
  wildcard: 'A season that could have ended right there goes on.',
  divisional: 'One step closer to the top.',
  conference: 'Just one game stands between them and the Final Trophy.',
}

const LOST_ROUND_FLAVOR = 'A good run, but not one more minute of action this season.'

export function PlayoffResult({
  player,
  game,
  outcome,
  nextRoundLabel,
  wonMVP,
  onContinue,
}: {
  player: Player
  game: PlayoffRoundDef
  outcome: 'won' | 'lost'
  nextRoundLabel?: string
  wonMVP: boolean
  onContinue: () => void
}) {
  const isSuperBowlWin = outcome === 'won' && game.round === 'superbowl'

  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col items-center gap-3 text-center">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          🏆 BFL Playoffs · {game.roundLabel}
        </span>

        {outcome === 'lost' && (
          <>
            <p className="text-2xl font-black text-red-500">❌ Eliminated in the {game.roundLabel}</p>
            <p className="text-sm italic text-[var(--text-dim)]">{LOST_ROUND_FLAVOR}</p>
          </>
        )}

        {outcome === 'won' && isSuperBowlWin && (
          <>
            <p className="text-2xl font-black text-[var(--de-gold-dark)]">🏆 Ring Bowl Champion!</p>
            <p className="text-sm italic text-[var(--text-dim)]">
              {player.name} lifts the Final Trophy with the {player.nflTeam}.
            </p>
          </>
        )}

        {outcome === 'won' && !isSuperBowlWin && (
          <>
            <p className="text-2xl font-black text-[var(--de-success-text)]">✅ Qualified for {nextRoundLabel}</p>
            <p className="text-sm italic text-[var(--text-dim)]">{WON_ROUND_FLAVOR[game.round]}</p>
          </>
        )}

        {wonMVP && (
          <EffectPill label={isSuperBowlWin ? '🎖️ Ring Bowl MVP' : '🎖️ Conference Championship MVP'} />
        )}

        <PillButton variant="dark" onClick={onContinue} className="mt-1 self-stretch">
          Continue
        </PillButton>
      </Card>
    </GameShell>
  )
}
