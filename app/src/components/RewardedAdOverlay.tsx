import { useEffect, useRef } from 'react'
import { Card } from './Card'
import { PillButton } from './PillButton'
import { showRewardedAd } from '../lib/ads'

// Délai de sécurité si jamais le SDK Google ne rappelle aucun callback (annonceur externe hors
// de notre contrôle) — évite de bloquer le joueur indéfiniment sur cet écran ; traité comme une
// annulation (pas de récompense) plutôt qu'un déblocage silencieux.
const FALLBACK_TIMEOUT_MS = 10000

// Déclenche une vraie pub récompensée pour débloquer le téléchargement de la carte. Google gère
// lui-même l'affichage plein écran de l'annonce ; onFinished n'est appelé que si elle a
// réellement été visionnée jusqu'au bout (showRewardedAd ne l'appelle que sur adViewed).
export function RewardedAdOverlay({
  onFinished,
  onCancel,
}: {
  onFinished: () => void
  onCancel: () => void
}) {
  const settledRef = useRef(false)

  useEffect(() => {
    const finish = () => {
      if (settledRef.current) return
      settledRef.current = true
      onFinished()
    }
    const cancel = () => {
      if (settledRef.current) return
      settledRef.current = true
      onCancel()
    }
    showRewardedAd(finish, cancel)
    const fallback = setTimeout(cancel, FALLBACK_TIMEOUT_MS)
    return () => clearTimeout(fallback)
  }, [onFinished, onCancel])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/80 px-4">
      <Card variant="white" className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          Sponsored Ad
        </span>
        <div className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/10 bg-black/5">
          <span className="text-3xl">📺</span>
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-dim)]">
            Loading ad…
          </span>
        </div>
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
