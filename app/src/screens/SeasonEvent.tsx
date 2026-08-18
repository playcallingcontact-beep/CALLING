import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import type { Player } from '../types/player'
import type { GameEvent, EventChoice } from '../types/events'

export function SeasonEvent({
  event,
  player,
  onChoose,
}: {
  event: GameEvent
  player: Player
  onChoose: (choice: EventChoice) => void
}) {
  return (
    <GameShell player={player}>
      <Card className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          {event.emoji} {event.title} · {player.age} ans
        </span>
        <p className="text-[var(--text)]">{event.context}</p>
        <div className="mt-1 flex flex-col gap-2">
          {event.choices.map((choice) => (
            <button
              key={choice.id}
              type="button"
              onClick={() => onChoose(choice)}
              className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
            >
              {choice.label}
            </button>
          ))}
        </div>
      </Card>
    </GameShell>
  )
}
