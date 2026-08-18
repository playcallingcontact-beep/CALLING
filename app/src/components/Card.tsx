import type { ReactNode } from 'react'

export function Card({
  children,
  className = '',
  variant = 'white',
}: {
  children: ReactNode
  className?: string
  variant?: 'white' | 'gold' | 'cream'
}) {
  const variantClass =
    variant === 'gold'
      ? 'bg-white border-2 border-[var(--de-gold)]'
      : variant === 'cream'
        ? 'border-2 border-[var(--de-green-darker)]'
        : 'bg-white border border-black/5'

  const style =
    variant === 'cream'
      ? { background: 'linear-gradient(160deg, #fbf7ea 0%, #ffffff 60%)' }
      : undefined

  return (
    <div
      className={`rounded-3xl p-6 shadow-xl shadow-black/20 ${variantClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
