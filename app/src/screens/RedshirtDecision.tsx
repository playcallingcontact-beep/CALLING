import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import type { Player } from '../types/player'

export function RedshirtDecision({ player, onDecide }: { player: Player; onDecide: (redshirt: boolean) => void }) {
  return (
    <GameShell player={player}>
      <Card className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          ⏳ Year 1 · {player.collegeName}
        </span>
        <p className="text-[var(--text)]">
          Before the first season, the coordinator lays out a decision that will weigh on the whole college career:
          take a <strong>redshirt</strong> year (sit out, preserve a year of eligibility, and develop without
          pressure) or jump straight into the competition for a starting spot.
        </p>
        <div className="mt-1 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onDecide(true)}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Take the redshirt
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              A year of development away from the spotlight, with no risk of injury in games.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide(false)}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Play from year one
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Immediate exposure and a shot at cracking the depth chart, but no safety net.
            </div>
          </button>
        </div>
      </Card>
    </GameShell>
  )
}
