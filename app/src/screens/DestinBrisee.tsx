import { PillButton } from '../components/PillButton'
import type { Player } from '../types/player'

export function DestinBrisee({ player, onContinue }: { player: Player; onContinue: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-red-600 px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
        Destin Brisée
      </span>

      <div className="flex flex-col gap-4 rounded-3xl border-2 border-red-500 bg-white p-6 text-center shadow-xl shadow-black/20">
        <h2 className="text-2xl font-black text-[var(--text)]">{player.name}</h2>
        <p className="text-[var(--text)]">
          Une blessure catastrophique, survenue sans prévenir, met fin — immédiatement et définitivement — à la
          carrière de {player.name} à seulement {player.age} ans.
        </p>
        <p className="text-sm italic text-[var(--text-dim)]">
          Un des rares moments du jeu où le hasard frappe fort. Le potentiel inachevé restera à jamais la marque de
          cette carrière.
        </p>
      </div>

      <PillButton variant="outline" onClick={onContinue} className="self-center">
        Voir la carte de fin de carrière
      </PillButton>
    </div>
  )
}
