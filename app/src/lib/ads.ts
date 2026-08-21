// Wrapper Google AdSense H5 Games Ads (Ad Placement API) — même esprit que analytics.ts : le
// reste du jeu n'appelle que showInterstitialAd()/showRewardedAd() ci-dessous. Avant
// l'approbation du compte AdSense (ou si initAds() n'a pas encore tourné), les deux deviennent
// des no-op qui rendent immédiatement la main au jeu, comme si l'annonce n'était pas disponible.
//
// Contrairement à analytics.ts, le <script> adsbygoogle.js est chargé statiquement depuis
// index.html (pas créé dynamiquement ici) : le robot de vérification AdSense doit pouvoir le
// voir sans interagir avec la bannière cookies, ce qui est impossible s'il n'apparaît qu'après
// un clic sur "Accepter". Charger la librairie ne dépose pas de cookie de tracking à elle
// seule — ce sont les appels adsbygoogle.push() ci-dessous (bannière, interstitielle, rewarded)
// qui en déposent, et ceux-là restent conditionnés à l'acceptation via le flag initialized.
declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

// L'identifiant client AdSense n'est pas sensible (il apparaît en clair dans le HTML de toute
// page qui diffuse des pubs Google) : le coder en dur évite de reproduire la galère des
// variables d'environnement Vercel rencontrée avec VITE_GA_MEASUREMENT_ID, pour un identifiant
// qui de toute façon ne change jamais selon l'environnement.
export const AD_CLIENT = 'ca-pub-4527298741959726'
// Emplacement "Responsive" créé dans AdSense pour la bannière fixe en bas d'écran (voir
// AdBannerPlaceholder dans App.tsx) — un seul emplacement gère mobile et desktop, le format
// responsive de Google choisit lui-même la taille selon la largeur disponible.
export const BANNER_AD_SLOT = '9258067559'

let initialized = false

export function initAds(): void {
  if (initialized) return
  initialized = true
  window.adsbygoogle = window.adsbygoogle || []
}

// Déclenche le rendu d'un <ins class="adsbygoogle"> déjà présent dans le DOM (la bannière) — à
// appeler une fois par élément après son montage, jamais deux fois sur le même élément (Google
// lève une erreur "already have ads in it" sinon, d'où le pushedRef côté composant appelant).
export function requestBannerAd(): void {
  window.adsbygoogle = window.adsbygoogle || []
  window.adsbygoogle.push({})
}

interface AdBreakDoneInfo {
  breakStatus: 'viewed' | 'dismissed' | 'notReady' | 'ignored' | 'timeout' | 'error' | 'other'
}

interface AdBreakParams {
  type: 'next' | 'reward'
  name: string
  beforeAd?: () => void
  afterAd?: () => void
  beforeReward?: (showAdFn: () => void) => void
  adDismissed?: () => void
  adViewed?: () => void
  adBreakDone?: (info: AdBreakDoneInfo) => void
}

function adBreak(params: AdBreakParams): void {
  window.adsbygoogle!.push(params as unknown)
}

// Pub interstitielle (entre deux carrières) : Google affiche lui-même son propre overlay plein
// écran pendant l'annonce, il n'y a rien à rendre côté jeu en attendant. adBreakDone est
// systématiquement appelé en tout dernier quel que soit le résultat (vue, indisponible,
// ignorée) : c'est le seul callback dont le jeu a besoin pour reprendre la main dans tous les
// cas, afterAd sert juste à reprendre plus tôt si l'annonce se termine normalement.
export function showInterstitialAd(onDone: () => void): void {
  if (!initialized) {
    onDone()
    return
  }
  let done = false
  const finish = () => {
    if (done) return
    done = true
    onDone()
  }
  adBreak({ type: 'next', name: 'career-restart', afterAd: finish, adBreakDone: finish })
}

// Pub récompensée (débloque le téléchargement de la carte) : onReward n'est appelé que si
// l'annonce a réellement été visionnée jusqu'au bout (adViewed) ; onSkipped couvre tous les
// autres cas (fermée en cours de visionnage, indisponible, ignorée) pour laisser le joueur
// annuler proprement sans débloquer le téléchargement.
export function showRewardedAd(onReward: () => void, onSkipped: () => void): void {
  if (!initialized) {
    onSkipped()
    return
  }
  let settled = false
  const skip = () => {
    if (settled) return
    settled = true
    onSkipped()
  }
  adBreak({
    type: 'reward',
    name: 'career-card-download',
    beforeReward: (showAdFn) => showAdFn(),
    adViewed: () => {
      settled = true
      onReward()
    },
    adDismissed: skip,
    adBreakDone: skip,
  })
}
