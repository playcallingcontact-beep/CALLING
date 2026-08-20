import { forwardRef, type CSSProperties } from 'react'
import { Avatar } from './Avatar'
import { getAvatar } from '../data/avatars'
import { getPosition } from '../data/positions'
import { POSITION_STATS } from '../data/proStats'
import { TIER_ACCENT, TIER_BADGE, TIER_TITLE } from '../data/careerFlavor'
import { buildAwardEntriesByAct } from '../data/awards'
import type { CareerTier } from '../engine/scoreEngine'
import type { Player } from '../types/player'

const CARD_WIDTH = 640

const TIER_ORDER: CareerTier[] = ['Silver', 'Gold', 'Diamond', 'Sapphire', 'Rainbow']

// Couleur pleine (non-dégradée) représentative de chaque palier, utilisée pour le texte/les
// bordures fines où un dégradé ne s'applique pas (contrairement à TIER_ACCENT.borderGradient,
// pensé pour les bordures épaisses de la carte visible en jeu sur fond vert).
const TIER_SOLID: Record<CareerTier, string> = {
  Silver: '#78838f',
  Gold: '#d69a1f',
  Diamond: '#1f9fc2',
  Sapphire: '#3b5fd6',
  Rainbow: '#9d3fd6',
}

// Fond de carte très légèrement teinté selon le palier — reste dans la même famille crème que
// notre thème, juste une nuance plus froide/chaude selon la rareté (jamais saturé).
const TIER_BACKGROUND: Record<CareerTier, string> = {
  Silver: 'linear-gradient(165deg, #fcfcfd 0%, #e7e9ec 100%)',
  Gold: 'linear-gradient(165deg, #fffdf6 0%, #f7f1de 100%)',
  Diamond: 'linear-gradient(165deg, #f6fdff 0%, #e2f3f8 100%)',
  Sapphire: 'linear-gradient(165deg, #f5f7ff 0%, #e1e7fb 100%)',
  Rainbow: 'linear-gradient(165deg, #fffaf6 0%, #f6eef8 100%)',
}

const TIER_BORDER_WIDTH: Record<CareerTier, number> = {
  Silver: 2,
  Gold: 3,
  Diamond: 3,
  Sapphire: 4,
  Rainbow: 5,
}

// Texte en dégradé (repris de la même palette que la bordure) pour les éléments les plus
// "showy" de la carte (nom du palier, note, citation) — sur les paliers à couleur unie le
// dégradé est quasi plat et se lit comme une couleur pleine, sur Arc-en-ciel il rend l'irisé.
function gradientTextStyle(gradient: string): CSSProperties {
  return {
    backgroundImage: gradient,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }
}

function StarRow({ tier }: { tier: CareerTier }) {
  const filled = TIER_ORDER.indexOf(tier) + 1
  return (
    <span className="text-sm tracking-wider" style={{ color: TIER_SOLID[tier] }}>
      {'★'.repeat(filled)}
      <span className="text-black/15">{'★'.repeat(5 - filled)}</span>
    </span>
  )
}

// Carte exportable (PNG téléchargé) : format "carte à collectionner" — fond crème/or (déjà dans
// notre thème, cf. --de-cream/--de-gold), teinté et bordé différemment selon le palier de
// rareté (couleur, épaisseur de bordure, texte en dégradé), avatar + note dans un encart,
// statistiques et palmarès en encarts. Toutes les récompenses obtenues sont listées.
export const ExportCareerCard = forwardRef<
  HTMLDivElement,
  { player: Player; tier: CareerTier; finalScore: number; nickname: string }
>(function ExportCareerCard({ player, tier, finalScore, nickname }, ref) {
  const position = getPosition(player.position)
  const stats = player.careerStats
  const positionStats = POSITION_STATS[player.position]
  const awardGroups = buildAwardEntriesByAct(player.awardsCareer)
  const totalDistinctions = Object.values(player.awardsCareer).reduce((sum, n) => sum + n, 0)
  const accent = TIER_ACCENT[tier]
  const solid = TIER_SOLID[tier]

  const statRows: { icon: string; label: string; value: number | string }[] = [
    { icon: '🏈', label: 'Games Played', value: stats?.gamesPlayed ?? 0 },
    ...positionStats.map((def) => ({ icon: '📊', label: def.label, value: stats?.stats[def.key] ?? 0 })),
    { icon: '📅', label: 'Pro Seasons', value: player.season },
    { icon: '🏅', label: 'Awards', value: totalDistinctions },
    { icon: '🏆', label: 'Championship Rings', value: stats?.superBowlWins ?? 0 },
    { icon: '💰', label: 'Career Earnings', value: `$${player.careerEarningsM}M` },
  ]

  return (
    <div
      ref={ref}
      style={{
        width: CARD_WIDTH,
        background: accent.borderGradient,
        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.45), 0 0 50px ${accent.glow}`,
        padding: TIER_BORDER_WIDTH[tier],
      }}
      className="rounded-[32px]"
    >
      <div className="flex flex-col gap-4 rounded-[28px] px-7 py-7" style={{ background: TIER_BACKGROUND[tier] }}>
        {player.retirementType === 'destin-brisee' && (
          <span className="self-center rounded-full bg-red-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
            Shattered Destiny
          </span>
        )}

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--text-dim)]">
            {TIER_BADGE[tier]} <StarRow tier={tier} />
          </span>
          <h3 className="text-2xl font-black italic" style={gradientTextStyle(accent.borderGradient)}>
            {TIER_TITLE[tier]}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex h-28 w-28 flex-none items-center justify-center rounded-2xl p-[2px]"
            style={{ background: accent.borderGradient }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-[14px] bg-white">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[#ECECE9]">
                <Avatar {...getAvatar(player.avatarId)} size={40} />
              </div>
              <span className="text-2xl font-black" style={gradientTextStyle(accent.borderGradient)}>
                {finalScore}
              </span>
              <span className="text-[10px] font-black uppercase tracking-wide text-[var(--text)]">{position.id}</span>
            </div>
          </div>

          <div className="min-w-0 flex-1 text-left">
            <h2 className="truncate text-2xl font-black text-[var(--text)]">{player.name}</h2>
            <p className="text-sm font-semibold text-[var(--text-dim)]">Retired at age {player.age}</p>
            <div className="my-1.5 h-px w-full" style={{ background: solid, opacity: 0.35 }} />
            <p className="truncate text-sm italic text-[var(--text-dim)]">
              Last team: {player.nflTeam} · {position.emoji} {position.name}
            </p>
          </div>
        </div>

        <p className="text-center text-lg font-black italic" style={gradientTextStyle(accent.borderGradient)}>
          "{player.name}, {nickname}"
        </p>

        <div>
          <h3 className="mb-2 text-center text-lg font-black italic text-[var(--text)]">Statistics</h3>
          <div className="flex flex-col gap-1 rounded-2xl border-2 bg-white/70 px-4 py-3" style={{ borderColor: solid }}>
            {statRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between border-b border-black/5 py-1.5 text-sm last:border-0">
                <span className="text-[var(--text-dim)]">
                  {row.icon} {row.label}
                </span>
                <span className="font-black text-[var(--text)]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-center text-lg font-black italic text-[var(--text)]">Achievements</h3>
          <div className="flex flex-col gap-2 rounded-2xl border-2 bg-white/70 px-4 py-3" style={{ borderColor: solid }}>
            {awardGroups.length === 0 ? (
              <p className="py-2 text-center text-sm italic text-[var(--text-dim)]">
                No titles or awards this career.
              </p>
            ) : (
              awardGroups.map((group) => (
                <div key={group.act} className="flex flex-col gap-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wide" style={{ color: solid }}>
                    {group.emoji} {group.label}
                  </div>
                  {group.entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between border-b border-black/5 py-1.5 text-sm last:border-0"
                    >
                      <span className="text-[var(--text)]">
                        {entry.icon} {entry.label}
                      </span>
                      <span
                        className="rounded-full border-2 px-2.5 py-0.5 text-xs font-black"
                        style={{ borderColor: solid, color: solid }}
                      >
                        {entry.count}
                      </span>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-1 flex items-center gap-3">
          <span className="h-px flex-1" style={{ background: solid, opacity: 0.35 }} />
          <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: solid }}>
            Calling
          </span>
          <span className="h-px flex-1" style={{ background: solid, opacity: 0.35 }} />
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[var(--text-dim)]">
          <span className="text-sm font-black">𝕏</span>@CHOOSECALLING
        </div>
      </div>
    </div>
  )
})
