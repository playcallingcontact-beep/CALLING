import { Card } from '../components/Card'
import { GameShell } from '../components/GameShell'
import { EffectPill } from '../components/EffectPill'
import { PillButton } from '../components/PillButton'
import type { Player } from '../types/player'
import type { EventEffect, GameEvent } from '../types/events'

const ATTRIBUTE_LABELS: Record<string, string> = {
  physique: 'Physique',
  technique: 'Technique',
  mental: 'Mental',
  leadership: 'Leadership',
  exposition: 'Exposition',
}

export function EventResult({
  event,
  resolvedEffects,
  player,
  onContinue,
}: {
  event: GameEvent
  resolvedEffects: EventEffect[]
  player: Player
  onContinue: () => void
}) {
  const outcomeText = resolvedEffects.map((e) => e.log).filter(Boolean).join(' ')

  const pills: { label: string; negative: boolean }[] = []
  for (const effect of resolvedEffects) {
    if (effect.attribute && effect.delta) {
      pills.push({
        label: `${effect.delta > 0 ? '+' : ''}${effect.delta} ${ATTRIBUTE_LABELS[effect.attribute]}`,
        negative: effect.delta < 0,
      })
    }
    if (effect.exposureDelta) {
      pills.push({
        label: `${effect.exposureDelta > 0 ? '+' : ''}${effect.exposureDelta} Exposition`,
        negative: effect.exposureDelta < 0,
      })
    }
  }

  return (
    <GameShell player={player}>
      <Card variant="gold" className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[var(--de-arc)]">
          {event.emoji} {event.title}
        </span>
        <p className="text-[var(--text)]">{outcomeText || 'La saison suit son cours.'}</p>
        {pills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <EffectPill key={i} label={p.label} variant={p.negative ? 'negative' : 'positive'} />
            ))}
          </div>
        )}
        <PillButton variant="dark" onClick={onContinue} className="mt-1 self-stretch">
          Continuer
        </PillButton>
      </Card>
    </GameShell>
  )
}
