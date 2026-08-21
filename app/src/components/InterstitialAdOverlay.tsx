import { useEffect, useRef } from 'react'
import { Card } from './Card'
import { showInterstitialAd } from '../lib/ads'

// Délai de sécurité si jamais le SDK Google ne rappelle aucun callback (annonceur externe hors
// de notre contrôle) — évite de bloquer le joueur indéfiniment sur cet écran.
const FALLBACK_TIMEOUT_MS = 8000

// Déclenche une vraie pub interstitielle entre deux carrières. Google gère lui-même l'affichage
// plein écran de l'annonce le temps qu'elle dure ; cet écran ne sert qu'à occuper l'espace
// pendant le court instant avant que Google prenne la main (ou constate qu'aucune annonce n'est
// disponible et rende la main tout de suite).
export function InterstitialAdOverlay({ onFinished }: { onFinished: () => void }) {
  const finishedRef = useRef(false)

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      onFinished()
    }
    showInterstitialAd(finish)
    const fallback = setTimeout(finish, FALLBACK_TIMEOUT_MS)
    return () => clearTimeout(fallback)
  }, [onFinished])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/90 px-4">
      <Card variant="white" className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
        <span className="text-xs font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          Sponsored Ad
        </span>
        <div className="flex h-48 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/10 bg-black/5">
          <span className="text-3xl">📺</span>
          <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-dim)]">
            Loading ad…
          </span>
        </div>
      </Card>
    </div>
  )
}
