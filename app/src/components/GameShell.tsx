import type { ReactNode } from 'react'
import { PlayerProfileCard } from './PlayerProfileCard'
import type { Player } from '../types/player'

export function GameShell({ player, children }: { player: Player; children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-4 py-8 lg:flex-row lg:items-start lg:justify-center">
      <PlayerProfileCard player={player} />
      <div className="flex w-full max-w-2xl flex-1 flex-col justify-center gap-4">{children}</div>
    </div>
  )
}
