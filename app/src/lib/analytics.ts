// Wrapper Google Analytics (GA4) — toute la logique spécifique au fournisseur reste ici, le
// reste du jeu n'appelle que les fonctions trackXxx() ci-dessous. Sans VITE_GA_MEASUREMENT_ID
// configuré (voir .env.example), initAnalytics() ne fait rien et tous les trackXxx() deviennent
// des no-op silencieux : le jeu fonctionne normalement en dev sans compte GA.
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const MEASUREMENT_ID: string | undefined = import.meta.env.VITE_GA_MEASUREMENT_ID
let initialized = false

export function initAnalytics(): void {
  if (initialized || !MEASUREMENT_ID) return
  initialized = true

  // Reprend le squelette officiel Google au caractère près (dataLayer.push(arguments), pas un
  // wrapper à spread args) : Tag Assistant signalait le consentement comme "non configuré" au
  // moment de l'initialisation de la collecte malgré un appel consent/default présent dans le
  // code — la commande consent doit être la toute première poussée dans dataLayer, avant même
  // que window.gtag existe sous une autre forme, pour être lue à temps par le script Google.
  const w = window as unknown as { dataLayer: unknown[] }
  w.dataLayer = w.dataLayer || []
  function gtag(..._args: unknown[]) {
    // Pousse le vrai objet `arguments` (pas `_args`) : c'est le modèle officiel Google, et
    // Tag Assistant ne reconnaissait pas notre commande consent avec la version à spread args.
    w.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied' })
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  if (!MEASUREMENT_ID || !window.gtag) return
  window.gtag('event', name, params)
}

// ── Cycle de vie d'une carrière ─────────────────────────────────────────────
export function trackCareerCreated(position: string): void {
  trackEvent('career_created', { position })
}

export function trackCareerCompleted(tier: string, retirementType: string): void {
  trackEvent('career_completed', { tier, retirement_type: retirementType })
}

export function trackCardDownloaded(tier: string): void {
  trackEvent('card_downloaded', { tier })
}

// ── Publicités ───────────────────────────────────────────────────────────
// La bannière et la pub reward sont aujourd'hui de simples emplacements simulés (voir
// AdBannerPlaceholder dans App.tsx et RewardedAdOverlay.tsx) — ces événements se déclenchent
// donc déjà, mais ne représentent pas encore de vrais impressions/vues servies par un SDK de
// pub. Le taux de complétion des rewarded se lit dans GA4 en comparant rewarded_ad_started et
// rewarded_ad_completed (pas besoin de le calculer côté client).
export function trackAdBannerImpression(): void {
  trackEvent('ad_banner_impression')
}

export function trackInterstitialAdShown(): void {
  trackEvent('interstitial_ad_shown')
}

export function trackRewardedAdStarted(): void {
  trackEvent('rewarded_ad_started')
}

export function trackRewardedAdCompleted(): void {
  trackEvent('rewarded_ad_completed')
}

export function trackRewardedAdCancelled(): void {
  trackEvent('rewarded_ad_cancelled')
}

// À appeler depuis le callback de revenu du futur vrai SDK de pub (ex. AdMob "paid event",
// rapport AdSense) une fois branché — aucun appelant pour l'instant, il n'y a pas de revenu réel
// à remonter tant que les emplacements pub restent simulés.
export function trackAdRevenue(valueUsd: number, adUnit: 'banner' | 'rewarded'): void {
  trackEvent('ad_revenue', { value: valueUsd, currency: 'USD', ad_unit: adUnit })
}
