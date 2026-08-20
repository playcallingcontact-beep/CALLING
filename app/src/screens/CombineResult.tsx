import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { EffectPill } from '../components/EffectPill'
import { PillButton } from '../components/PillButton'
import type { Player, AttributeKey } from '../types/player'
import type { CombineStepDef } from '../engine/draftEngine'

const ATTRIBUTE_LABELS: Partial<Record<AttributeKey, string>> = {
  physique: 'Physical',
  technique: 'Technique',
  mental: 'Mental',
  leadership: 'Leadership',
}

export function CombineResult({
  stepDef,
  before,
  after,
  onContinue,
}: {
  stepDef: CombineStepDef
  before: Player
  after: Player
  onContinue: () => void
}) {
  const outcomeText = after.log[after.log.length - 1] ?? ''

  const pills: { label: string; negative: boolean }[] = []
  for (const key of ['physique', 'technique', 'mental', 'leadership'] as const) {
    const delta = after.attributes[key] - before.attributes[key]
    if (delta !== 0) {
      pills.push({ label: `${delta > 0 ? '+' : ''}${delta} ${ATTRIBUTE_LABELS[key]}`, negative: delta < 0 })
    }
  }
  const exposureDelta = after.exposureScore - before.exposureScore
  if (exposureDelta !== 0) {
    pills.push({ label: `${exposureDelta > 0 ? '+' : ''}${exposureDelta} Exposure`, negative: exposureDelta < 0 })
  }

  return (
    <GameShell player={after}>
      <Card variant="gold" className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          {stepDef.emoji} {stepDef.title}
        </span>
        <p className="text-[var(--text)]">{outcomeText}</p>
        {pills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <EffectPill key={i} label={p.label} variant={p.negative ? 'negative' : 'positive'} />
            ))}
          </div>
        )}
        <PillButton variant="dark" onClick={onContinue} className="mt-1 self-stretch">
          Continue
        </PillButton>
      </Card>
    </GameShell>
  )
}
