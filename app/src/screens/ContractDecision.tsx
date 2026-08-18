import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import type { Player } from '../types/player'

export type ContractChoice = 'extension' | 'tag' | 'free-agency' | 'retire'

export function ContractDecision({ player, onDecide }: { player: Player; onDecide: (choice: ContractChoice) => void }) {
  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          📄 Fin de contrat · {player.nflTeam}
        </span>
        <p className="text-[var(--text)]">
          Le contrat de {player.name} arrive à échéance. L’heure du choix qui façonne la suite de la carrière.
        </p>

        <div className="mt-1 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onDecide('extension')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Négocier une extension
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Reste chez les {player.nflTeam} sur plusieurs saisons, sécurité et continuité.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide('tag')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Accepter le franchise tag
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Une saison de plus imposée par l’équipe, gros salaire, aucun contrôle sur l’avenir.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide('free-agency')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Tenter la free agency
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Nouveau départ possible dans une autre franchise — sans garantie d’offre.
            </div>
          </button>
          <button
            type="button"
            onClick={() => onDecide('retire')}
            className="w-full rounded-xl bg-black/5 px-4 py-3.5 text-left font-bold text-[var(--text)] transition-colors hover:bg-[var(--de-success-bg)]"
          >
            Prendre sa retraite
            <div className="mt-1 text-sm font-normal text-[var(--text-dim)]">
              Choisir son moment plutôt que de le subir.
            </div>
          </button>
        </div>
      </Card>
    </GameShell>
  )
}
