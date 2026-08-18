export function EffectPill({ label, variant = 'positive' }: { label: string; variant?: 'positive' | 'negative' }) {
  const colors =
    variant === 'negative'
      ? 'bg-[var(--de-danger-bg)] text-[var(--de-danger-text)]'
      : 'bg-[var(--de-success-bg)] text-[var(--de-success-text)]'
  return <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-bold ${colors}`}>{label}</span>
}
