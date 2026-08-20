import { Card } from '../components/Card'
import { StarRating } from '../components/StatChip'
import { PillButton } from '../components/PillButton'
import type { Player } from '../types/player'
import { getPosition } from '../data/positions'

interface CollegeStint {
  school: string
  years: number
}

// Reconstruit la répartition des années par école à partir de careerPath (une entrée à
// l'inscription initiale, une par transfert) — nécessaire car un joueur qui a transféré n'a
// pas passé toutes ses saisons NCAA dans son école finale (player.collegeName).
function computeCollegeStints(player: Player): CollegeStint[] {
  const entries = player.careerPath.filter(
    (step) => step.label.endsWith('(NC2A)') || step.label.endsWith('(NC2A transfer)'),
  )
  if (entries.length === 0) return [{ school: player.collegeName ?? '', years: player.season }]

  return entries.map((entry, i) => {
    const school = entry.label.replace(/ \((NC2A|NC2A transfer)\)$/, '')
    const nextAge = i + 1 < entries.length ? entries[i + 1].age : player.age + 1
    return { school, years: Math.max(1, nextAge - entry.age) }
  })
}

export function Act2End({
  player,
  onContinue,
  onRestart,
}: {
  player: Player
  onContinue: () => void
  onRestart: () => void
}) {
  const position = getPosition(player.position)
  const stints = computeCollegeStints(player)
  const totalYears = stints.reduce((sum, s) => sum + s.years, 0)

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-[var(--de-gold)] px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#3a2a05]">
        End of Act 2
      </span>

      <Card variant="cream" className="flex flex-col gap-4 text-center">
        <div>
          <h2 className="text-2xl font-black text-[var(--text)]">
            {position.emoji} {player.name}
          </h2>
          <p className="text-sm font-semibold text-[var(--text-dim)]">
            {position.name} · {totalYears} year{totalYears > 1 ? 's' : ''} in NC2A
            {player.redshirted ? ' (including 1 redshirt season)' : ''}
          </p>
          <p className="text-sm text-[var(--text-dim)]">
            {stints.map((s) => `${s.years} year${s.years > 1 ? 's' : ''} at ${s.school}`).join(' · ')}
          </p>
        </div>

        <div className="mx-auto flex flex-col items-center gap-1 rounded-2xl bg-black/5 px-6 py-4">
          <span className="text-[11px] font-bold uppercase text-[var(--text-dim)]">Final Draft Stock</span>
          <span className="text-2xl">
            <StarRating value={player.starRating} />
          </span>
        </div>

        <div className="mx-auto flex flex-col items-center gap-1 rounded-2xl bg-black/5 px-6 py-4">
          <span className="text-[11px] font-bold uppercase text-[var(--text-dim)]">Depth chart status</span>
          <span className="text-lg font-extrabold text-[var(--text)]">
            {player.depthChartStatus === 'starter' ? '🏈 Starter' : '🪑 Backup'}
          </span>
        </div>

        <p className="text-[var(--text)]">
          {player.name} officially declares for the <span className="font-extrabold text-[var(--de-green)]">BFL Draft</span>.
        </p>
      </Card>

      <PillButton variant="white" onClick={onContinue} className="self-stretch">
        Head to the Combine
      </PillButton>
      <PillButton variant="outline" onClick={onRestart} className="self-center">
        New career
      </PillButton>
    </div>
  )
}
