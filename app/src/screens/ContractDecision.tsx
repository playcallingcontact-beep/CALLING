import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import type { Player } from '../types/player'

export type ContractChoice = 'extension' | 'tag' | 'free-agency' | 'retire'

export function ContractDecision({ player, onDecide }: { player: Player; onDecide: (choice: ContractChoice) => void }) {
  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          📄 Contract expiring · {player.nflTeam}
        </span>
        <p className="text-[var(--text)]">
          {player.name}'s contract is up. Time for the decision that will shape the rest of the career.
        </p>

        <div className="mt-1 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onDecide('extension')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Negotiate an extension
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Stay with the {player.nflTeam} for multiple seasons — security and continuity.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide('tag')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Accept the franchise tag
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              One more season imposed by the team — big paycheck, zero control over the future.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide('free-agency')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Test free agency
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              A possible fresh start with another franchise — no guarantee of an offer.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide('retire')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Retire
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Choose the moment rather than have it chosen for you.
            </div>
          </button>
        </div>
      </Card>
    </GameShell>
  )
}
