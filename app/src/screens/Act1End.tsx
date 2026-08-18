import { Card } from '../components/Card'
import { StarRating } from '../components/StatChip'
import { PillButton } from '../components/PillButton'
import type { Player, RecruitingOffer } from '../types/player'
import { getPosition } from '../data/positions'
import { getRegion } from '../data/regions'

export function Act1End({
  player,
  signedWith,
  onContinue,
  onRestart,
}: {
  player: Player
  signedWith: RecruitingOffer | null
  onContinue: () => void
  onRestart: () => void
}) {
  const position = getPosition(player.position)
  const region = getRegion(player.regionId)

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-[var(--de-gold)] px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#3a2a05]">
        Fin de l’Acte 1
      </span>

      <Card variant="cream" className="flex flex-col gap-4 text-center">
        <div>
          <h2 className="text-2xl font-black text-[var(--text)]">
            {position.emoji} {player.name}
          </h2>
          <p className="text-sm font-semibold text-[var(--text-dim)]">
            {position.name} · {region.name} · formé à {player.highSchoolName}
          </p>
        </div>

        <div className="mx-auto flex flex-col items-center gap-1 rounded-2xl bg-black/5 px-6 py-4">
          <span className="text-[11px] font-bold uppercase text-[var(--text-dim)]">Classement final de recrutement</span>
          <span className="text-2xl">
            <StarRating value={player.starRating} />
          </span>
        </div>

        {signedWith ? (
          <p className="text-[var(--text)]">
            Direction <span className="font-extrabold text-[var(--de-green)]">{signedWith.schoolName}</span> pour
            l’Acte 2 — College.
          </p>
        ) : (
          <p className="text-[var(--text)]">
            Sans offre, {player.name} tentera sa chance en walk-on pour l’Acte 2 — College.
          </p>
        )}
      </Card>

      <PillButton variant="white" onClick={onContinue} className="self-stretch">
        Rejoindre le programme
      </PillButton>
      <PillButton variant="outline" onClick={onRestart} className="self-center">
        Nouvelle carrière
      </PillButton>
    </div>
  )
}
