const CONSENT_KEY = 'calling:cookie-consent:v1'

export function hasCookieConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

export function setCookieConsent(): void {
  try {
    localStorage.setItem(CONSENT_KEY, 'accepted')
  } catch {
    // Storage full/unavailable (private browsing...) — consent still applies for this session,
    // it just won't be remembered on the next visit.
  }
}
