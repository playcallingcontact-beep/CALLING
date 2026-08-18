import type { ReactNode } from 'react'

interface PillButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'outline' | 'gold' | 'white' | 'dark'
  className?: string
  fullWidth?: boolean
}

export function PillButton({
  children,
  onClick,
  disabled,
  variant = 'outline',
  className = '',
  fullWidth,
}: PillButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-wide transition-transform active:scale-95 disabled:opacity-40 disabled:pointer-events-none'

  const variantClass =
    variant === 'gold'
      ? 'bg-[var(--de-gold)] text-[#3a2a05] hover:bg-[var(--de-gold-dark)]'
      : variant === 'white'
        ? 'bg-white text-[var(--text)] shadow-md shadow-black/15 hover:bg-white/90'
        : variant === 'dark'
          ? 'bg-[var(--de-green)] text-white shadow-md shadow-black/15 hover:bg-[var(--de-green-dark)]'
          : 'border-2 border-white text-white bg-white/0 hover:bg-white/10'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variantClass} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  )
}
