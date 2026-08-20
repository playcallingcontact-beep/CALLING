import { useEffect, useState } from 'react'
import { Card } from './Card'
import { PillButton } from './PillButton'

const AD_DURATION_SECONDS = 5

// Simulateur de pub récompensée (placeholder — même logique que AdBannerPlaceholder dans
// App.tsx). À remplacer par un vrai SDK de pub vidéo (rewarded ad) le moment venu : il suffira
// de remplacer le décompte ci-dessous par le callback "ad completed" du SDK.
export function RewardedAdOverlay({
  onFinished,
  onCancel,
}: {
  onFinished: () => void
  onCancel: () => void
}) {
  const [secondsLeft, setSecondsLeft] = useState(AD_DURATION_SECONDS)

  useEffect(() => {
    if (secondsLeft <= 0) {
      onFinished()
      return
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft, onFinished])

  const progress = ((AD_DURATION_SECONDS - secondsLeft) / AD_DURATION_SECONDS) * 100

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/80 px-4">
      <Card variant="white" className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          Sponsored Ad
        </span>
        <div className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/10 bg-black/5">
          <span className="text-3xl">📺</span>
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-dim)]">
            Ad Space
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-[var(--de-gold)] transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm font-semibold text-[var(--text)]">
          Your card will be ready in {secondsLeft}s
        </p>
        <button
          type="button"
          onClick={onCancel}
          className="text-xs font-bold uppercase tracking-wide text-[var(--text-dim)] underline underline-offset-2"
        >
          Cancel
        </button>
      </Card>
    </div>
  )
}

export function AdRewardReadyOverlay({
  onDownload,
  onClose,
}: {
  onDownload: () => void
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/80 px-4">
      <Card variant="gold" className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
        <span className="text-3xl">✅</span>
        <h3 className="text-lg font-black text-[var(--text)]">Ad Complete</h3>
        <p className="text-sm text-[var(--text-dim)]">Your career card is ready to download.</p>
        <PillButton variant="gold" onClick={onDownload} fullWidth>
          Download My Card
        </PillButton>
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-bold uppercase tracking-wide text-[var(--text-dim)] underline underline-offset-2"
        >
          Close
        </button>
      </Card>
    </div>
  )
}
