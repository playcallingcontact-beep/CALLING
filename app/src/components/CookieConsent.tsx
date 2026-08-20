import { PillButton } from './PillButton'

export function CookieConsent({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] flex justify-center border-t border-black/10 bg-white px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="flex w-full max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="text-2xl">🍪</span>
          <p className="text-sm font-semibold text-[var(--text)]">
            We use cookies to measure site usage and improve the game.
          </p>
        </div>
        <div className="flex flex-none items-center gap-2">
          <PillButton
            variant="outline"
            onClick={onDecline}
            className="!border-black/20 !text-[var(--text)] hover:!bg-black/5"
          >
            Decline
          </PillButton>
          <PillButton variant="dark" onClick={onAccept} className="px-8">
            Accept
          </PillButton>
        </div>
      </div>
    </div>
  )
}
