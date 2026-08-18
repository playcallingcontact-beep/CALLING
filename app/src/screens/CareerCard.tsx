import { useMemo } from 'react'
import { PillButton } from '../components/PillButton'
import { getPosition } from '../data/positions'
import { POSITION_STATS } from '../data/proStats'
import { TIER_BADGE, TIER_TITLE, pickNickname } from '../data/careerFlavor'
import { computeFinalScore } from '../engine/scoreEngine'
import { buildAwardEntriesByAct } from '../data/awards'
import type { Player } from '../types/player'

export function CareerCard({ player, onRestart }: { player: Player; onRestart: () => void }) {
  const position = getPosition(player.position)
  const breakdown = useMemo(() => computeFinalScore(player), [player])
  const nickname = useMemo(() => pickNickname(player.position), [player.position])
  const stats = player.careerStats
  const positionStats = POSITION_STATS[player.position]
  const awardGroups = useMemo(() => buildAwardEntriesByAct(player.awardsCareer), [player.awardsCareer])

  const destinBrisee = player.retirementType === 'destin-brisee'

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-4 py-8">
      <span className="self-center rounded-full bg-[var(--de-gold)] px-5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#3a2a05]">
        Fin de carrière
      </span>

      <div
        className="flex flex-col gap-5 rounded-3xl border-2 border-[var(--de-gold)] p-6 text-center shadow-2xl shadow-black/30"
        style={{ background: 'linear-gradient(160deg, #0f6b41 0%, #0a4d2f 100%)' }}
      >
        {destinBrisee && (
          <span className="self-center rounded-full bg-red-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white">
            Destin Brisée
          </span>
        )}

        <span className="self-center rounded-full bg-[var(--de-gold)] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#3a2a05]">
          {TIER_BADGE[breakdown.tier]}
        </span>

        <div className="mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-[var(--de-gold)]">
          <span className="text-4xl font-black text-white">{breakdown.finalScore}</span>
          <span className="text-[9px] font-bold uppercase tracking-wide text-white/70">Note de carrière</span>
        </div>

        <div>
          <h2 className="text-xl font-black text-white">
            {position.emoji} {player.name}
          </h2>
          <p className="text-sm font-semibold text-white/70">
            {position.name} · {player.nflTeam} · retraite à {player.age} ans
          </p>
        </div>

        <h3 className="text-2xl font-black uppercase text-white">{TIER_TITLE[breakdown.tier]}</h3>
        <p className="text-sm italic text-white/80">« {player.name}, {nickname} »</p>

        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
            <span className="text-lg font-black text-[var(--de-gold)]">{stats?.gamesPlayed ?? 0}</span>
            <span className="text-[9px] font-bold uppercase text-white/70">Matchs</span>
          </div>
          {positionStats.map((def) => (
            <div key={def.key} className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
              <span className="text-lg font-black text-[var(--de-gold)]">{stats?.stats[def.key] ?? 0}</span>
              <span className="text-[9px] font-bold uppercase text-white/70">{def.label}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
            <span className="text-lg font-black text-[var(--de-gold)]">{player.season}</span>
            <span className="text-[9px] font-bold uppercase text-white/70">Saisons pro</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/10 py-3">
            <span className="text-lg font-black text-[var(--de-gold)]">{player.careerEarningsM} M$</span>
            <span className="text-[9px] font-bold uppercase text-white/70">Gains de carrière</span>
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
            <p className="text-sm italic text-white/70">Aucun titre ni distinction sur cette carrière.</p>
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
          <div className="mb-1 text-[11px] font-extrabold uppercase tracking-wide text-white/60">Parcours</div>
          {player.careerPath.map((step, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/90">
              <span className="text-[var(--de-gold)]">●</span>
              <span className="font-semibold">{step.age} ans</span>
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      <PillButton variant="outline" onClick={onRestart} className="self-center">
        Nouvelle carrière
      </PillButton>
    </div>
  )
}
