import { GameShell } from '../components/GameShell'
import { TeamDots } from '../components/TeamDots'
import { getCollegeColors } from '../data/colleges'
import type { TransferOffer } from '../engine/transferPortal'
import type { Player } from '../types/player'

export function TransferPortal({
  player,
  offers,
  onStay,
  onTransfer,
}: {
  player: Player
  offers: TransferOffer[]
  onStay: () => void
  onTransfer: (offer: TransferOffer) => void
}) {
  return (
    <GameShell player={player}>
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-white">
          Portail des transferts
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base">🔄</span>
        </h2>
        <p className="text-sm font-bold text-white/85">
          {offers.length > 0
            ? `${player.collegeName} reste une option, mais d’autres programmes s’intéressent à ${player.name}.`
            : `Aucune offre extérieure sérieuse pour l’instant — ${player.collegeName} reste la meilleure option.`}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={onStay}
          className="w-full rounded-2xl bg-white p-4 text-left shadow-md shadow-black/10 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[var(--de-success-bg)] px-2 py-0.5 text-[11px] font-bold uppercase text-[var(--de-success-text)]">
              🏈 Rester
            </span>
            <TeamDots colors={getCollegeColors(player.collegeName ?? '')} />
            <span className="font-extrabold text-[var(--text)]">{player.collegeName}</span>
          </div>
          <p className="mt-1 text-sm text-[var(--text-dim)]">
            {player.depthChartStatus === 'starter' ? 'Titulaire en place' : 'Continuer à faire ses preuves'}
          </p>
        </button>

        {offers.map((offer) => (
          <button
            key={offer.schoolName}
            type="button"
            onClick={() => onTransfer(offer)}
            className="w-full rounded-2xl bg-white p-4 text-left shadow-md shadow-black/10 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-bold uppercase ${
                  offer.role === 'starter'
                    ? 'bg-[var(--de-success-bg)] text-[var(--de-success-text)]'
                    : 'bg-black/5 text-[var(--text-dim)]'
                }`}
              >
                {offer.role === 'starter' ? '🏈 Titulaire' : '🪑 Rotation'}
              </span>
              <TeamDots colors={getCollegeColors(offer.schoolName)} />
              <span className="font-extrabold text-[var(--text)]">{offer.schoolName}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-dim)]">Programme tier {offer.programTier}</p>
          </button>
        ))}
      </div>
    </GameShell>
  )
}
