import type { GameEvent } from '../../types/events'

export const COLLEGE_EVENTS: GameEvent[] = [
  {
    id: 'college-fall-camp',
    theme: 'PERSONNEL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🏋️',
    title: 'Fall Camp',
    context: 'NC2A preseason camp is a different animal from high school. The coordinators test everyone’s limits.',
    choices: [
      {
        id: 'grind',
        label: 'Grind through reps without letting up',
        effects: [
          { attribute: 'physique', delta: 4, log: 'The body absorbs the college workload.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'technical',
        label: 'Polish the technical details',
        effects: [
          { attribute: 'technique', delta: 3, log: 'The small technical adjustments start to pay off.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'college-film-room',
    theme: 'PERSONNEL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🎥',
    title: 'Film Room',
    context: 'The college staff runs a far more advanced film setup than high school ever did to break down every opponent.',
    choices: [
      {
        id: 'opponents',
        label: 'Break down the opponent’s schemes',
        effects: [
          { attribute: 'technique', delta: 3, log: 'A sharper read of the game, snap after snap.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'self',
        label: 'Fix your own flaws',
        effects: [
          { attribute: 'mental', delta: 3, log: 'Self-work that pays off over time.' },
          { attribute: 'technique', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'college-spring-game',
    theme: 'FOOTBALL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '📢',
    title: 'Spring Game',
    context: 'The public spring finale already draws a handful of BFL scouts on the lookout.',
    choices: [
      {
        id: 'go-big',
        label: 'Go big in front of the scouts',
        effects: [
          { exposureDelta: 6, log: 'A performance that gets names buzzing in BFL front offices.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'safe',
        label: 'Play it safe, no risks',
        effects: [
          { attribute: 'technique', delta: 2, log: 'A clean performance that reassures the staff.' },
          { exposureDelta: 2 },
        ],
        variants: [
          {
            weight: 1,
            effects: [
              { attribute: 'technique', delta: 2, log: 'A clean performance that reassures the staff.' },
              { exposureDelta: 2 },
            ],
          },
          {
            weight: 1,
            effects: [{ exposureDelta: -3, log: 'A performance too cautious — scouts wanted a spark, not a clean copy.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'college-depth-chart-battle',
    theme: 'FOOTBALL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🥊',
    title: 'Depth Chart War',
    context: 'The depth chart is never set in stone. A challenger is pushing hard for the starting spot.',
    choices: [
      {
        id: 'raise-level',
        label: 'Raise your level at practice',
        effects: [
          { attribute: 'mental', delta: 2, log: 'The pressure of competition pulls the level up.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'stay-pro',
        label: 'Stay professional and take it in stride',
        effects: [{ attribute: 'mental', delta: 3, log: 'A maturity that impresses the staff.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'mental', delta: 3, log: 'A maturity that impresses the staff.' }] },
          {
            weight: 1,
            effects: [{ attribute: 'leadership', delta: -2, log: 'Taking it too quietly makes the locker room doubt the fight in him.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'college-bowl-game',
    theme: 'FOOTBALL',
    acts: ['COLLEGE'],
    seasonMin: 2,
    seasonMax: 4,
    emoji: '🏆',
    title: 'Bowl Game',
    context: 'The season wraps up with a nationally televised bowl game. The biggest audience of the year.',
    choices: [
      {
        id: 'hero',
        label: 'Become the hero of the game',
        effects: [
          { exposureDelta: 8, log: 'A bowl-game moment that keeps replaying across social media.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'team-effort',
        label: 'Carry the team collectively',
        effects: [{ attribute: 'technique', delta: 3, log: 'A team win, with no individual spotlight.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'technique', delta: 3, log: 'A team win, with no individual spotlight.' }] },
          { weight: 1, effects: [{ exposureDelta: -3, log: 'A performance too quiet on the night the whole country was watching.' }] },
        ],
      },
    ],
  },
  {
    id: 'college-academics',
    theme: 'PERSONNEL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '📚',
    title: 'Academic Life',
    context: 'Between classes and practice, the balance is getting hard to hold.',
    choices: [
      {
        id: 'study',
        label: 'Prioritize academics',
        effects: [
          { attribute: 'mental', delta: 3, log: 'Academic discipline that strengthens the competitor’s mindset too.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'football-first',
        label: 'Put football first, above everything',
        effects: [
          { attribute: 'physique', delta: 2, log: 'Every free hour gets poured into the field.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'college-nil-deal',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    requiresFlag: { key: 'entourage', value: 'mentor-prive' },
    emoji: '💰',
    title: 'NIL Deal',
    context: 'The private mentor negotiates an NIL (Name, Image, Likeness) contract that would raise the player’s profile significantly.',
    choices: [
      {
        id: 'sign',
        label: 'Sign the big NIL deal',
        effects: [
          { exposureDelta: 6, log: 'The name starts circulating well beyond campus.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'decline',
        label: 'Stay low-key, focus on the game',
        effects: [
          { attribute: 'mental', delta: 2, log: 'No distractions, just the field.' },
          { exposureDelta: -2, log: 'Visibility stays limited, with no deal to boost it.' },
        ],
      },
    ],
  },
  {
    id: 'college-campus-life',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    requiresFlag: { key: 'lifestyle', value: 'popularite' },
    emoji: '🎊',
    title: 'Campus Life',
    context: 'On a campus with tens of thousands of students, popularity operates on a whole different scale.',
    choices: [
      {
        id: 'enjoy',
        label: 'Enjoy the campus spotlight',
        effects: [
          { exposureDelta: 3, log: 'A local buzz that now spreads well beyond the field.' },
          { attribute: 'physique', delta: -2 },
        ],
      },
      {
        id: 'focus',
        label: 'Stay focused on the season',
        effects: [
          { attribute: 'mental', delta: 2, log: 'The distraction is real, but discipline keeps it at bay.' },
          { exposureDelta: -1, log: 'Campus buzz that stays underused.' },
        ],
      },
    ],
  },
  {
    id: 'college-injury-scare',
    theme: 'FOOTBALL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🩹',
    title: 'Injury Scare',
    context: 'A nagging issue has lingered for a few sessions. The medical staff wants a clear answer.',
    choices: [
      {
        id: 'play-through',
        label: 'Play through the pain',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'A gesture that leaves a mark in the locker room.' },
          { attribute: 'physique', delta: -3 },
        ],
      },
      {
        id: 'rest',
        label: 'Raise your hand and protect yourself',
        effects: [
          { attribute: 'mental', delta: 2, log: 'A sensible call, even if it costs some reps.' },
          { exposureDelta: -2 },
        ],
      },
    ],
  },
  {
    id: 'college-rival-rematch',
    theme: 'FOOTBALL',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 2,
    arcId: 'rival-gen',
    requiresFlag: { key: 'arc-rival-intro', value: true },
    forbidsFlag: 'arc-rival-college-done',
    emoji: '🚩',
    title: 'Rematch',
    context:
      'The high school rival made it to college too. The two programs cross paths in conference — a long-awaited score to settle.',
    choices: [
      {
        id: 'dominate',
        label: 'Take a statement revenge',
        effects: [
          { flag: 'arc-rival-college-done', flagValue: true },
          { exposureDelta: 6, log: 'The long-awaited duel swings decisively in his favor.' },
          { attribute: 'leadership', delta: 2 },
        ],
        variants: [
          {
            weight: 1,
            effects: [
              { flag: 'arc-rival-college-done', flagValue: true },
              { exposureDelta: 6, log: 'The long-awaited duel swings decisively in his favor.' },
              { attribute: 'leadership', delta: 2 },
            ],
          },
          {
            weight: 1,
            effects: [
              { flag: 'arc-rival-college-done', flagValue: true },
              { attribute: 'mental', delta: -2, log: 'The rival gets the better of the long-awaited duel — a public humbling.' },
            ],
          },
        ],
      },
      {
        id: 'team-first',
        label: 'Focus on the team, not the duel',
        effects: [
          { flag: 'arc-rival-college-done', flagValue: true },
          { attribute: 'technique', delta: 3, log: 'The individual duel takes a back seat to the team win.' },
        ],
      },
    ],
  },
]
