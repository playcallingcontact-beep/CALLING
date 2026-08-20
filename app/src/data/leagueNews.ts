export const LEAGUE_NEWS = [
  'A rookie is already turning heads at practice, being talked up as his franchise\'s next star.',
  'Trade rumors swirl around a veteran quarterback entering the final year of his contract.',
  'An All-Pro veteran announces a sabbatical season for personal reasons.',
  'Officiating controversy after a tight game over the weekend.',
  'A respected offensive coordinator is reportedly closing in on his first head coaching job.',
  'A storied franchise changes ownership for a record sum.',
  'A former first-round pick gets cut after a disappointing season.',
  'The league announces a new international market for a regular-season game.',
  'A veteran nearing the end of his career publicly hints at retiring after this season.',
  'A rebuilding franchise is going all-in on its young core for next season.',
]

export function pickLeagueNews(): string {
  return LEAGUE_NEWS[Math.floor(Math.random() * LEAGUE_NEWS.length)]
}
