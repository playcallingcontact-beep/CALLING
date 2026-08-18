export function GradientBar({ label, value, kind }: { label: string; value: number; kind: 'warm' | 'cool' }) {
  const gradient =
    kind === 'warm'
      ? 'linear-gradient(90deg, #ef4444, #f2c14e, #3ecf8e)'
      : 'linear-gradient(90deg, #ef4444, #a78bfa, #4f9df7)'

  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-extrabold uppercase tracking-wide text-[var(--text-dim)]">{label}</span>
      <div className="h-2 w-full overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full rounded-full"
          style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: gradient }}
        />
      </div>
    </div>
  )
}
