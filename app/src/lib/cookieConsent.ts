const CONSENT_KEY = 'calling:cookie-consent:v1'

export type CookieConsentStatus = 'accepted' | 'declined'

// null = no choice recorded yet (banner should show).
export function getCookieConsent(): CookieConsentStatus | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw === 'accepted' || raw === 'declined' ? raw : null
  } catch {
    return null
  }
}

export function setCookieConsent(status: CookieConsentStatus): void {
  try {
    localStorage.setItem(CONSENT_KEY, status)
  } catch {
    // Storage full/unavailable (private browsing...) — the choice still applies for this
    // session, it just won't be remembered on the next visit.
  }
}
