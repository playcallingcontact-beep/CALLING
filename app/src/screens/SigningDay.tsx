import { GameShell } from '../components/GameShell'
import { StarRating } from '../components/StatChip'
import { PillButton } from '../components/PillButton'
import { TeamDots } from '../components/TeamDots'
import { getCollegeColors } from '../data/colleges'
import type { Player, RecruitingOffer } from '../types/player'

const TIER_LABELS: Record<number, string> = {
  5: 'Programme Elite',
  4: 'Grand Programme',
  3: 'Programme Solide',
  2: 'Petit Programme',
  1: 'Programme Modeste',
}

const TIER_DESCRIPTIONS: Record<number, string> = {
  5: 'Exposition nationale immédiate — la concurrence interne sera féroce.',
  4: 'Beau tremplin vers la draft, bon encadrement.',
  3: 'Du temps de jeu réaliste et de vrais éducateurs.',
  2: 'Une vraie chance de percer, loin des projecteurs.',
  1: 'Peu de visibilité, mais chaque snap compte pour se faire remarquer.',
}

export function SigningDay({
  player,
  offers,
  onSign,
}: {
  player: Player
  offers: RecruitingOffer[]
  onSign: (offer: RecruitingOffer | null) => void
}) {
  return (
    <GameShell player={player}>
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-white">
          Les programmes vous ont repéré
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base">🏈</span>
        </h2>
        <p className="text-sm font-bold text-white/85">
          Les recruteurs ont observé votre profil. Potentiel estimé : <StarRating value={player.starRating} />
        </p>
      </div>

      {offers.length === 0 && (
        <p className="rounded-2xl bg-white p-4 text-center text-sm font-semibold text-[var(--text-dim)] shadow-md">
          Aucune offre de programme college n’est arrivée. La carrière peut continuer en walk-on non sollicité.
        </p>
      )}

      <div className="flex flex-col gap-2">
        {offers.map((offer) => (
          <button
            key={offer.schoolName}
            type="button"
            onClick={() => onSign(offer)}
            className="w-full rounded-2xl bg-white p-4 text-left shadow-md shadow-black/10 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-bold uppercase text-[var(--text-dim)]">
                {TIER_LABELS[offer.programTier]}
              </span>
              <TeamDots colors={getCollegeColors(offer.schoolName)} />
              <span className="font-extrabold text-[var(--text)]">{offer.schoolName}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-dim)]">{TIER_DESCRIPTIONS[offer.programTier]}</p>
          </button>
        ))}
      </div>

      {offers.length === 0 && (
        <PillButton variant="white" onClick={() => onSign(null)} className="self-stretch">
          Tenter sa chance en walk-on
        </PillButton>
      )}
    </GameShell>
  )
}
