export function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2.5 w-2.5 rounded-full transition-colors ${
            i === current ? 'bg-[var(--de-gold)]' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  )
}
