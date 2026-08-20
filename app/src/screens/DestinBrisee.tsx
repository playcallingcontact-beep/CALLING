import { PillButton } from '../components/PillButton'
import type { Player } from '../types/player'

export function DestinBrisee({ player, onContinue }: { player: Player; onContinue: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-red-600 px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
        Shattered Destiny
      </span>

      <div className="flex flex-col gap-4 rounded-3xl border-2 border-red-500 bg-white p-6 text-center shadow-xl shadow-black/20">
        <h2 className="text-2xl font-black text-[var(--text)]">{player.name}</h2>
        <p className="text-[var(--text)]">
          A catastrophic injury, striking without warning, ends {player.name}'s career — immediately and for good —
          at just {player.age} years old.
        </p>
        <p className="text-sm italic text-[var(--text-dim)]">
          One of the rare moments in the game where luck hits hard. The unfinished potential will forever be the
          mark of this career.
        </p>
      </div>

      <PillButton variant="outline" onClick={onContinue} className="self-center">
        View the career card
      </PillButton>
    </div>
  )
}
