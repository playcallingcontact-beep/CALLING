import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import type { Player } from '../types/player'

export function RedshirtDecision({ player, onDecide }: { player: Player; onDecide: (redshirt: boolean) => void }) {
  return (
    <GameShell player={player}>
      <Card className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          ⏳ Année 1 · {player.collegeName}
        </span>
        <p className="text-[var(--text)]">
          Avant la première saison, le coordinateur propose une décision qui pèsera sur toute la carrière college :
          prendre une année de <strong>redshirt</strong> (ne pas jouer, préserver une année d’éligibilité et
          progresser sans pression) ou se lancer immédiatement dans la compétition pour une place de titulaire.
        </p>
        <div className="mt-1 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onDecide(true)}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Prendre le redshirt
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Une année de développement à l’abri des projecteurs, sans risque de blessure en match.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide(false)}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Jouer dès la première année
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Exposition immédiate et chance de percer le depth chart, mais aucune sécurité.
            </div>
          </button>
        </div>
      </Card>
    </GameShell>
  )
}
