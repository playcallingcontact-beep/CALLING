import { useState } from 'react'
import { REGIONS } from '../data/regions'
import { POSITIONS } from '../data/positions'
import { ORIGINS } from '../data/origins'
import { LIFESTYLES } from '../data/lifestyles'
import { ENTOURAGE } from '../data/entourage'
import { AVATARS } from '../data/avatars'
import { Avatar } from '../components/Avatar'
import { OptionCard } from '../components/OptionCard'
import { CreationTopBar } from '../components/CreationTopBar'
import { ProgressDots } from '../components/ProgressDots'
import { PillButton } from '../components/PillButton'
import type { CharacterChoices } from '../engine/characterFactory'
import type { EntourageId, LifestyleId, OriginId, Position, RegionId } from '../types/player'

const STEP_META = [
  { key: 'nom', title: 'Your name', subtitle: 'How will the world know you?' },
  { key: 'avatar', title: 'Your look', subtitle: 'Choose the appearance that will represent you your whole career.' },
  { key: 'region', title: 'Your region', subtitle: 'It shapes your exposure to recruiters.' },
  {
    key: 'poste',
    title: 'Your position',
    subtitle: 'It will shape your stats, your events, and your legend.',
  },
  { key: 'origine', title: 'Your background', subtitle: 'Where do you come from, before the spotlight?' },
  {
    key: 'adolescence',
    title: 'Your teenage years',
    subtitle: 'The lifestyle that will forge your discipline… and your reputation.',
  },
  { key: 'entourage', title: 'Your circle', subtitle: 'Who has your back before the college recruiters come calling?' },
] as const

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const RANDOM_NAMES = ['Jalen Rivers', 'Marcus Deloye', 'Trey Whitfield', 'Cole Bannister', 'DeShawn Muir', 'Wyatt Colson']

const statLine = (a: { physique: number; technique: number; mental: number; leadership: number; exposition: number }) =>
  `PHY ${a.physique} · TEC ${a.technique} · MEN ${a.mental} · LEA ${a.leadership} · EXP ${a.exposition}`

export function CharacterCreation({ onComplete }: { onComplete: (choices: CharacterChoices) => void }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [avatarId, setAvatarId] = useState<string | null>(null)
  const [regionId, setRegionId] = useState<RegionId | null>(null)
  const [position, setPosition] = useState<Position | null>(null)
  const [originId, setOriginId] = useState<OriginId | null>(null)
  const [lifestyleId, setLifestyleId] = useState<LifestyleId | null>(null)
  const [entourageId, setEntourageId] = useState<EntourageId | null>(null)

  const canAdvance = [
    name.trim().length > 0,
    avatarId !== null,
    regionId !== null,
    position !== null,
    originId !== null,
    lifestyleId !== null,
    entourageId !== null,
  ][step]

  function randomizeStep() {
    switch (step) {
      case 0:
        setName(pick(RANDOM_NAMES))
        break
      case 1:
        setAvatarId(pick(AVATARS).id)
        break
      case 2:
        setRegionId(pick(REGIONS).id)
        break
      case 3:
        setPosition(pick(POSITIONS).id)
        break
      case 4:
        setOriginId(pick(ORIGINS).id)
        break
      case 5:
        setLifestyleId(pick(LIFESTYLES).id)
        break
      case 6:
        setEntourageId(pick(ENTOURAGE).id)
        break
    }
  }

  function next() {
    if (step < STEP_META.length - 1) {
      setStep(step + 1)
      return
    }
    if (avatarId && regionId && position && originId && lifestyleId && entourageId) {
      onComplete({ name: name.trim(), avatarId, regionId, position, originId, lifestyleId, entourageId })
    }
  }

  const meta = STEP_META[step]

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-8">
      <CreationTopBar onBack={() => setStep(Math.max(0, step - 1))} onRandom={randomizeStep} backDisabled={step === 0} />

      <ProgressDots total={STEP_META.length} current={step} />

      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-white">
          {meta.title}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-base">🎲</span>
        </h2>
        <p className="text-sm font-bold text-white/85">{meta.subtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        {step === 0 && (
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Player name"
            className="rounded-2xl bg-white px-5 py-4 text-center text-lg font-extrabold text-[var(--text)] shadow-md shadow-black/10 outline-none placeholder:text-[var(--text-dim)]"
          />
        )}

        {step === 1 && (
          <div className="grid grid-cols-3 gap-3">
            {AVATARS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setAvatarId(a.id)}
                className={`flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-md shadow-black/10 transition-all ${
                  avatarId === a.id ? 'ring-4 ring-[var(--de-gold)]' : 'ring-0 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-[#ECECE9]">
                  <Avatar image={a.image} size={80} />
                </div>
                <span className="text-center text-xs font-bold text-[var(--text-dim)]">{a.name}</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 &&
          REGIONS.map((r) => (
            <OptionCard
              key={r.id}
              title={r.name}
              description={r.description}
              selected={regionId === r.id}
              onClick={() => setRegionId(r.id)}
            />
          ))}

        {step === 3 &&
          POSITIONS.map((p) => (
            <OptionCard
              key={p.id}
              emoji={p.emoji}
              title={p.name}
              subtitle={p.side}
              description={p.description}
              selected={position === p.id}
              onClick={() => setPosition(p.id)}
            />
          ))}

        {step === 4 &&
          ORIGINS.map((o) => (
            <OptionCard
              key={o.id}
              emoji={o.emoji}
              title={o.name}
              description={o.description}
              statLine={statLine(o.attributes)}
              selected={originId === o.id}
              onClick={() => setOriginId(o.id)}
            />
          ))}

        {step === 5 &&
          LIFESTYLES.map((l) => (
            <OptionCard
              key={l.id}
              emoji={l.emoji}
              title={l.name}
              description={l.description}
              selected={lifestyleId === l.id}
              onClick={() => setLifestyleId(l.id)}
            />
          ))}

        {step === 6 &&
          ENTOURAGE.map((e) => (
            <OptionCard
              key={e.id}
              emoji={e.emoji}
              title={e.name}
              description={e.description}
              selected={entourageId === e.id}
              onClick={() => setEntourageId(e.id)}
            />
          ))}
      </div>

      <PillButton variant="white" onClick={next} disabled={!canAdvance} className="mt-2 self-center px-10">
        {step === STEP_META.length - 1 ? 'Start career' : 'Next'}
      </PillButton>
    </div>
  )
}
