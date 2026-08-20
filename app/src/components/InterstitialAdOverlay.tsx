import { useEffect, useState } from 'react'
import { Card } from './Card'

const AD_DURATION_SECONDS = 3

// Simulateur de pub interstitielle (placeholder — même logique que AdBannerPlaceholder dans
// App.tsx et RewardedAdOverlay.tsx). Affichée entre deux carrières, avant de repartir sur
// l'écran d'accueil. À remplacer par un vrai SDK de pub le moment venu.
export function InterstitialAdOverlay({ onFinished }: { onFinished: () => void }) {
  const [secondsLeft, setSecondsLeft] = useState(AD_DURATION_SECONDS)

  useEffect(() => {
    if (secondsLeft <= 0) {
      onFinished()
      return
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft, onFinished])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/90 px-4">
      <Card variant="white" className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          Sponsored Ad
        </span>
        <div className="flex h-48 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/10 bg-black/5">
          <span className="text-3xl">📺</span>
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-dim)]">
            Ad Space
          </span>
        </div>
        <p className="text-sm font-semibold text-[var(--text)]">
          {secondsLeft > 0 ? `Resuming in ${secondsLeft}s` : 'One moment…'}
        </p>
      </Card>
    </div>
  )
}
