import { PillButton } from '../components/PillButton'

export function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <span className="self-start rounded-full border-2 border-white/70 px-4 py-1.5 text-xs font-extrabold text-white">
        ⚙ FR
      </span>
      <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
        Gridiron <span className="text-[var(--de-gold)]">Legacy</span>
      </h1>
      <p className="max-w-md text-lg font-bold text-white/90">
        De 15 ans au lycée à la retraite en NFL, écrivez une carrière de football américain, saison après saison.
        <br />
        Chaque choix compte. Personne ne connaît son destin à l’avance.
      </p>
      <PillButton variant="outline" onClick={onStart} className="mt-2 px-10 py-4 text-base">
        Commencer ma carrière
      </PillButton>
    </div>
  )
}
