import { Card } from '../components/Card'
import { PillButton } from '../components/PillButton'
import { TeamDots } from '../components/TeamDots'
import { getTeamColors } from '../data/nflTeams'
import type { Player } from '../types/player'

export function DraftResult({ player, onContinue }: { player: Player; onContinue: () => void }) {
  const undrafted = !player.draftRound || player.draftRound === 0

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-[var(--de-gold)] px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#3a2a05]">
        BFL Draft
      </span>

      <Card variant="gold" className="flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-black text-[var(--text)]">{player.name}</h2>

        {undrafted ? (
          <p className="text-[var(--text)]">
            Not selected across the 7 rounds — {player.name} signs as an{' '}
            <span className="font-extrabold">undrafted free agent</span> with the{' '}
            <span className="inline-flex items-center gap-1.5 font-extrabold text-[var(--de-green)]">
              <TeamDots colors={getTeamColors(player.nflTeam ?? '')} />
              {player.nflTeam}
            </span>
            . No guarantees, everything still to prove.
          </p>
        ) : (
          <p className="text-[var(--text)]">
            Selected in <span className="font-extrabold">round {player.draftRound}</span> by the{' '}
            <span className="inline-flex items-center gap-1.5 font-extrabold text-[var(--de-green)]">
              <TeamDots colors={getTeamColors(player.nflTeam ?? '')} />
              {player.nflTeam}
            </span>
          </p>
        )}

        <div className="mx-auto flex flex-col items-center gap-1 rounded-2xl bg-black/5 px-6 py-4">
          <span className="text-[11px] font-bold uppercase text-[var(--text-dim)]">Rookie contract</span>
          <span className="text-lg font-extrabold text-[var(--text)]">
            {player.contractYearsRemaining} year{(player.contractYearsRemaining ?? 0) > 1 ? 's' : ''} — ${player.contractValueM}M
          </span>
        </div>
      </Card>

      <PillButton variant="white" onClick={onContinue} className="self-stretch">
        Join training camp
      </PillButton>
    </div>
  )
}
