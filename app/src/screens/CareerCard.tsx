import { useEffect, useMemo, useRef, useState } from 'react'
import html2canvas from 'html2canvas-pro'
import { PillButton } from '../components/PillButton'
import { AdRewardReadyOverlay, RewardedAdOverlay } from '../components/RewardedAdOverlay'
import { ExportCareerCard } from '../components/ExportCareerCard'
import { getPosition } from '../data/positions'
import { POSITION_STATS } from '../data/proStats'
import { TIER_ACCENT, TIER_BADGE, TIER_TITLE, pickNickname } from '../data/careerFlavor'
import { computeFinalScore } from '../engine/scoreEngine'
import { buildAwardEntriesByAct } from '../data/awards'
import {
  trackCardDownloaded,
  trackCareerCompleted,
  trackRewardedAdCancelled,
  trackRewardedAdCompleted,
  trackRewardedAdStarted,
} from '../lib/analytics'
import type { Player } from '../types/player'

type DownloadPhase = 'idle' | 'watching-ad' | 'ready' | 'saving'

export function CareerCard({ player, onRestart }: { player: Player; onRestart: () => void }) {
  const position = getPosition(player.position)
  const breakdown = useMemo(() => computeFinalScore(player), [player])
  const nickname = useMemo(() => pickNickname(player.position), [player.position])
  const stats = player.careerStats
  const positionStats = POSITION_STATS[player.position]
  const awardGroups = useMemo(() => buildAwardEntriesByAct(player.awardsCareer), [player.awardsCareer])
  const exportCardRef = useRef<HTMLDivElement>(null)
  const [downloadPhase, setDownloadPhase] = useState<DownloadPhase>('idle')

  const destinBrisee = player.retirementType === 'destin-brisee'
  const accent = TIER_ACCENT[breakdown.tier]

  useEffect(() => {
    trackCareerCompleted(breakdown.tier, player.retirementType ?? 'inconnu')
  }, [breakdown.tier, player.retirementType])

  async function handleDownload() {
    if (!exportCardRef.current) return
    setDownloadPhase('saving')
    const canvas = await html2canvas(exportCardRef.current, { backgroundColor: null, scale: 2 })
    const slug = player.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    const filename = `carte-carriere-${slug || 'joueur'}.png`
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'))

    // Safari iOS ignore silencieusement <a download> sur un lien data:/blob: — aucun moyen fiable
    // d'y déclencher un vrai téléchargement par ce biais. Web Share (avec fichier) y ouvre la
    // vraie feuille de partage native, qui propose "Enregistrer l'image" et fonctionne
    // réellement ; on ne l'utilise que si le navigateur sait partager CE fichier précis.
    const file = blob ? new File([blob], filename, { type: 'image/png' }) : null
    if (file && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file] })
        trackCardDownloaded(breakdown.tier)
      } catch {
        // Feuille de partage annulée par le joueur — pas une erreur, rien à faire.
      }
      setDownloadPhase('idle')
      return
    }

    const link = document.createElement('a')
    link.download = filename
    link.href = blob ? URL.createObjectURL(blob) : canvas.toDataURL('image/png')
    link.click()
    if (blob) URL.revokeObjectURL(link.href)
    trackCardDownloaded(breakdown.tier)
    setDownloadPhase('idle')
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-[var(--de-gold)] px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#3a2a05]">
        End of career
      </span>

      <div
        className="rounded-3xl p-[3px] shadow-2xl shadow-black/30"
        style={{ background: accent.borderGradient, boxShadow: `0 25px 50px -12px rgba(0,0,0,0.4), 0 0 45px ${accent.glow}` }}
      >
        <div
          className="flex flex-col gap-5 rounded-[calc(1.5rem-3px)] p-6 text-center"
          style={{ background: 'linear-gradient(160deg, #0f6b41 0%, #0a4d2f 100%)' }}
        >
          {destinBrisee && (
            <span className="self-center rounded-full bg-red-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
              Shattered Destiny
            </span>
          )}

          <span
            className="self-center rounded-full px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide"
            style={{ background: accent.badgeBg, color: accent.badgeText }}
          >
            {TIER_BADGE[breakdown.tier]}
          </span>

          <div className="mx-auto rounded-full p-1" style={{ background: accent.borderGradient }}>
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#0a4d2f]">
              <span className="text-4xl font-black text-white">{breakdown.finalScore}</span>
              <span className="text-[9px] font-bold uppercase tracking-wide text-white/70">Career score</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-white">
              {position.emoji} {player.name}
            </h2>
            <p className="text-sm font-semibold text-white/70">
              {position.name} · {player.nflTeam} · retired at {player.age}
            </p>
          </div>

          <h3 className="text-2xl font-black uppercase text-white">{TIER_TITLE[breakdown.tier]}</h3>
          <p className="text-sm italic text-white/80">
            "{player.name}, {nickname}"
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
              <span className="text-lg font-black text-[var(--de-gold)]">{stats?.gamesPlayed ?? 0}</span>
              <span className="text-[9px] font-bold uppercase text-white/70">Games</span>
            </div>
            {positionStats.map((def) => (
              <div key={def.key} className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
                <span className="text-lg font-black text-[var(--de-gold)]">{stats?.stats[def.key] ?? 0}</span>
                <span className="text-[9px] font-bold uppercase text-white/70">{def.label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
              <span className="text-lg font-black text-[var(--de-gold)]">{player.season}</span>
              <span className="text-[9px] font-bold uppercase text-white/70">Pro seasons</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
              <span className="text-lg font-black text-[var(--de-gold)]">${player.careerEarningsM}M</span>
              <span className="text-[9px] font-bold uppercase text-white/70">Career earnings</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-white/10 p-4 text-left">
            <div className="mb-1 text-[11px] font-extrabold uppercase tracking-wide text-white/60">Career Legacy</div>
            {stats && stats.playoffAppearances > 0 && (
              <div className="flex items-center justify-between border-b border-white/10 py-1 text-sm text-white/90">
                <span>🏟️ Playoffs</span>
                <span className="font-extrabold text-[var(--de-gold)]">×{stats.playoffAppearances}</span>
              </div>
            )}
            {awardGroups.length === 0 && (!stats || stats.playoffAppearances === 0) ? (
              <p className="text-sm italic text-white/70">No titles or honors in this career.</p>
            ) : (
              awardGroups.map((group) => (
                <div key={group.act} className="flex flex-col gap-1">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-[var(--de-gold)]">
                    {group.emoji} {group.label}
                  </div>
                  {group.entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between border-b border-white/10 py-1 text-sm text-white/90 last:border-0"
                    >
                      <span>
                        {entry.icon} {entry.label}
                      </span>
                      <span className="font-extrabold text-[var(--de-gold)]">×{entry.count}</span>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

          <div className="flex flex-col gap-1.5 rounded-2xl bg-white/10 p-4 text-left">
            <div className="mb-1 text-[11px] font-extrabold uppercase tracking-wide text-white/60">Career path</div>
            {player.careerPath.map((step, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                <span className="text-[var(--de-gold)]">●</span>
                <span className="font-semibold">{step.age} yo</span>
                <span>{step.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://x.com/choosecalling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
          >
            <span className="text-sm font-black">𝕏</span>@CHOOSECALLING
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 self-center sm:flex-row">
        <PillButton variant="outline" onClick={onRestart}>
          New career
        </PillButton>
        <PillButton
          variant="gold"
          onClick={() => {
            trackRewardedAdStarted()
            setDownloadPhase('watching-ad')
          }}
          disabled={downloadPhase === 'saving'}
        >
          📥 {downloadPhase === 'saving' ? 'Generating...' : 'Save my card'}
        </PillButton>
      </div>

      {downloadPhase === 'watching-ad' && (
        <RewardedAdOverlay
          onFinished={() => {
            trackRewardedAdCompleted()
            setDownloadPhase('ready')
          }}
          onCancel={() => {
            trackRewardedAdCancelled()
            setDownloadPhase('idle')
          }}
        />
      )}
      {downloadPhase === 'ready' && (
        <AdRewardReadyOverlay onDownload={handleDownload} onClose={() => setDownloadPhase('idle')} />
      )}

      {/* Carte exportable : rendue hors-écran, capturée par handleDownload — même habillage que
          la carte visible ci-dessus, juste sans la section Parcours (voir ExportCareerCard.tsx). */}
      <div style={{ position: 'fixed', top: 0, left: -99999 }} aria-hidden="true">
        <ExportCareerCard
          ref={exportCardRef}
          player={player}
          tier={breakdown.tier}
          finalScore={breakdown.finalScore}
          nickname={nickname}
        />
      </div>
    </div>
  )
}
