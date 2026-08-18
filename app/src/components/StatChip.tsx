import type { ReactNode } from 'react'

export function StatChip({
  children,
  variant = 'white',
}: {
  children: ReactNode
  variant?: 'white' | 'gold'
}) {
  const variantClass = variant === 'gold' ? 'bg-[var(--de-gold)] text-[#3a2a05]' : 'bg-white text-[var(--text)]'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-extrabold shadow-md shadow-black/10 ${variantClass}`}
    >
      {children}
    </span>
  )
}

export function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="text-[var(--de-gold-dark)]">
      {'★'.repeat(value)}
      <span className="text-black/20">{'★'.repeat(Math.max(0, max - value))}</span>
    </span>
  )
}
