import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { PillButton } from '../components/PillButton'
import { EffectPill } from '../components/EffectPill'
import type { PlayoffRoundDef } from '../engine/playoffEngine'
import type { Player } from '../types/player'

const WON_ROUND_FLAVOR: Record<string, string> = {
  wildcard: 'Une saison qui aurait pu s’arrêter là continue.',
  divisional: 'Encore un pas de plus vers le sommet.',
  conference: 'Plus qu’un seul match les sépare du Trophée Final.',
}

const LOST_ROUND_FLAVOR = 'Du voyage, mais pas une minute de jeu de plus cette saison.'

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
          🏆 Playoffs BFL · {game.roundLabel}
        </span>

        {outcome === 'lost' && (
          <>
            <p className="text-2xl font-black text-red-500">❌ Éliminé en {game.roundLabel}</p>
            <p className="text-sm italic text-[var(--text-dim)]">{LOST_ROUND_FLAVOR}</p>
          </>
        )}

        {outcome === 'won' && isSuperBowlWin && (
          <>
            <p className="text-2xl font-black text-[var(--de-gold-dark)]">🏆 Champion du Ring Bowl !</p>
            <p className="text-sm italic text-[var(--text-dim)]">
              {player.name} soulève le Trophée Final avec les {player.nflTeam}.
            </p>
          </>
        )}

        {outcome === 'won' && !isSuperBowlWin && (
          <>
            <p className="text-2xl font-black text-[var(--de-success-text)]">✅ Qualifié pour {nextRoundLabel}</p>
            <p className="text-sm italic text-[var(--text-dim)]">{WON_ROUND_FLAVOR[game.round]}</p>
          </>
        )}

        {wonMVP && (
          <EffectPill label={isSuperBowlWin ? '🎖️ MVP du Ring Bowl' : '🎖️ MVP de la finale de conférence'} />
        )}

        <PillButton variant="dark" onClick={onContinue} className="mt-1 self-stretch">
          Continuer
        </PillButton>
      </Card>
    </GameShell>
  )
}
