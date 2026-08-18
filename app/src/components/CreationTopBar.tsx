import { PillButton } from './PillButton'

export function CreationTopBar({
  onBack,
  onRandom,
  backDisabled,
}: {
  onBack: () => void
  onRandom: () => void
  backDisabled?: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <PillButton variant="outline" onClick={onBack} disabled={backDisabled} className="px-4 py-2 text-xs normal-case">
        ← Retour
      </PillButton>
      <PillButton variant="gold" onClick={onRandom} className="px-4 py-2 text-xs normal-case">
        🎲 Tout aléatoire
      </PillButton>
    </div>
  )
}
