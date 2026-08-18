import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { COMBINE_STEPS } from '../engine/draftEngine'
import type { Player } from '../types/player'
import type { CombineChoiceId, CombineStep } from '../engine/draftEngine'

export function CombineDecision({
  player,
  step,
  onDecide,
}: {
  player: Player
  step: CombineStep
  onDecide: (choice: CombineChoiceId) => void
}) {
  const def = COMBINE_STEPS[step - 1]

  return (
    <GameShell player={player}>
      <Card className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          {def.emoji} {def.title} · {step}/3
        </span>
        <p className="text-[var(--text)]">{def.context}</p>
        <div className="mt-1 flex flex-col gap-2">
          {def.choices.map((choice) => (
            <button
              key={choice.id}
              type="button"
              onClick={() => onDecide(choice.id)}
              className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
            >
              {choice.label}
              <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">{choice.description}</div>
            </button>
          ))}
        </div>
      </Card>
    </GameShell>
  )
}
