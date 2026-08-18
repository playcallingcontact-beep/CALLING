import { PillButton } from '../components/PillButton'

const X_HANDLE = 'CHOOSECALLING'

export function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-3 px-6 pb-8 pt-1 text-center lg:max-w-lg lg:justify-center lg:py-10">
      <h1 className="sr-only">Calling</h1>

      <img
        src="/branding/logo.jpeg"
        alt="Calling"
        className="-mb-6 w-56 mix-blend-screen sm:w-72 [filter:invert(1)]"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
        <img
          src="/branding/hero-clean.jpg"
          alt=""
          className="block h-auto w-full"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />

        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 p-6 text-center">
          <p className="max-w-sm text-base font-bold text-white/95">
            Write your career from high school to the professional ranks.
          </p>
          <p className="text-lg font-black text-white">Every choice counts…</p>

          <PillButton variant="white" onClick={onStart} className="w-full max-w-xs px-8 py-3.5 text-sm">
            Start my career
          </PillButton>
        </div>
      </div>

      <a
        href={`https://x.com/${X_HANDLE.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
      >
        <span className="text-sm font-black">𝕏</span>@{X_HANDLE}
      </a>
    </div>
  )
}
