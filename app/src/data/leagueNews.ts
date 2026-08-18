export const LEAGUE_NEWS = [
  'Un rookie fait déjà sensation à l’entraînement, présenté comme la future star de sa franchise.',
  'Rumeurs de trade autour d’un quarterback historique en fin de contrat.',
  'Un vétéran All-Pro annonce une saison sabbatique pour raisons personnelles.',
  'Polémique arbitrale après un match serré en fin de semaine.',
  'Un coordinateur offensif réputé s’apprête à décrocher son premier poste de head coach.',
  'Une franchise historique change de propriétaire pour un montant record.',
  'Un ancien premier choix de draft est coupé après une saison décevante.',
  'La ligue annonce l’ouverture d’un nouveau marché international pour un match de saison régulière.',
  'Un joueur en fin de carrière évoque publiquement sa possible retraite en fin de saison.',
  'Une franchise en reconstruction mise tout sur son jeune noyau pour la saison prochaine.',
]

export function pickLeagueNews(): string {
  return LEAGUE_NEWS[Math.floor(Math.random() * LEAGUE_NEWS.length)]
}
