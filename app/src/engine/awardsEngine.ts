import type { Player } from '../types/player'

export function grantAward(player: Player, id: string, count = 1): Player {
  return { ...player, awardsCareer: { ...player.awardsCareer, [id]: (player.awardsCareer[id] ?? 0) + count } }
}
