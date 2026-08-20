import { GameShell } from '../components/GameShell'
import { TeamDots } from '../components/TeamDots'
import { getTeamColors } from '../data/nflTeams'
import type { FreeAgencyOffer } from '../engine/contractEngine'
import type { Player } from '../types/player'

export function FreeAgencyOffers({
  player,
  offers,
  onSign,
}: {
  player: Player
  offers: FreeAgencyOffer[]
  onSign: (offer: FreeAgencyOffer) => void
}) {
  return (
    <GameShell player={player}>
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-white">
          Free Agency
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base">🏈</span>
        </h2>
        <p className="text-sm font-bold text-white/85">
          The {player.nflTeam} didn't re-sign {player.name}. Several franchises are circling.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {offers.map((offer) => (
          <button
            key={offer.team}
            type="button"
            onClick={() => onSign(offer)}
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
                {offer.role === 'starter' ? '🏈 Starter' : '🪑 Rotation'}
              </span>
              <TeamDots colors={getTeamColors(offer.team)} />
              <span className="font-extrabold text-[var(--text)]">{offer.team}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-dim)]">
              ${offer.valueM}M/yr · {offer.years}-year contract
            </p>
          </button>
        ))}
      </div>
    </GameShell>
  )
}
