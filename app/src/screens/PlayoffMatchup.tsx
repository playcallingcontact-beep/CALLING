import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { PillButton } from '../components/PillButton'
import { TeamDots } from '../components/TeamDots'
import { getTeamColors } from '../data/nflTeams'
import type { PlayoffRoundDef } from '../engine/playoffEngine'
import type { Player } from '../types/player'

export function PlayoffMatchup({
  player,
  game,
  onPlay,
}: {
  player: Player
  game: PlayoffRoundDef
  onPlay: () => void
}) {
  const ownColors = getTeamColors(player.nflTeam ?? '')
  const chance = Math.round(game.winProbability * 100)

  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col items-center gap-4 text-center">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          🏆 Playoffs BFL · {game.roundLabel}
        </span>

        <div className="flex w-full items-center justify-center gap-6">
          <div className="flex flex-1 flex-col items-center gap-1">
            <TeamDots colors={ownColors} />
            <span className="text-sm font-extrabold text-[var(--text)]">{player.nflTeam}</span>
          </div>
          <span className="text-xs font-bold uppercase text-[var(--text-dim)]">Contre</span>
          <div className="flex flex-1 flex-col items-center gap-1">
            <TeamDots colors={game.opponentColors} />
            <span className="text-sm font-extrabold text-[var(--text)]">{game.opponentName}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--text-dim)]">Vos chances de passer</p>
          <p className="text-4xl font-black text-[var(--de-green)]">{chance}%</p>
        </div>
        <p className="text-xs italic text-[var(--text-dim)]">
          Le résultat ne dépend pas que de toi, mais chaque snap peut tout changer.
        </p>

        <PillButton variant="dark" onClick={onPlay} className="self-stretch">
          Jouer le match
        </PillButton>
      </Card>
    </GameShell>
  )
}
