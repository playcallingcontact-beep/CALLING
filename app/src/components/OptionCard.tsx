interface OptionCardProps {
  emoji?: string
  title: string
  subtitle?: string
  description: string
  statLine?: string
  selected: boolean
  onClick: () => void
}

export function OptionCard({ emoji, title, subtitle, description, statLine, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl bg-white p-4 text-left shadow-md shadow-black/10 transition-all ${
        selected ? 'ring-4 ring-[var(--de-gold)]' : 'ring-0 hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-extrabold text-[var(--text)]">
          {emoji && <span className="mr-1.5">{emoji}</span>}
          {title}
        </span>
        {subtitle && (
          <span className="rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-bold uppercase text-[var(--text-dim)]">
            {subtitle}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-[var(--text-dim)]">{description}</p>
      {statLine && <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-dim)]">{statLine}</p>}
    </button>
  )
}
