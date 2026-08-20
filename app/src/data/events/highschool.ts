import type { GameEvent } from '../../types/events'

export const HIGHSCHOOL_EVENTS: GameEvent[] = [
  {
    id: 'hs-two-a-days',
    theme: 'PERSONNEL',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    emoji: '🥵',
    title: 'Two-a-days',
    context:
      'Preseason opens with two-a-day practices in the heat. The coach is watching to see who can hold the pace.',
    choices: [
      {
        id: 'push',
        label: 'Push all the way, even if it means burning out',
        effects: [
          { attribute: 'physique', delta: 4, log: 'A summer of grinding pays off physically.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'measured',
        label: 'Manage your effort wisely',
        effects: [
          { attribute: 'mental', delta: 3, log: 'A controlled approach, no wasted energy.' },
          { attribute: 'physique', delta: 1 },
        ],
      },
    ],
  },
  {
    id: 'hs-film-study',
    theme: 'PERSONNEL',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    emoji: '🎞️',
    title: 'Film Study',
    context: 'The coordinator offers extra film study sessions after practice.',
    choices: [
      {
        id: 'accept',
        label: 'Stay and study the schemes',
        effects: [
          { attribute: 'technique', delta: 3, log: 'The film hours start paying off on the field.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'skip',
        label: 'Go home and rest',
        effects: [
          { attribute: 'physique', delta: 2, log: 'A welcome night of recovery.' },
          { attribute: 'technique', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'hs-recruiting-camp',
    theme: 'FOOTBALL',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    emoji: '📣',
    title: 'Regional Recruiting Camp',
    context: 'A camp draws recruiters from several college programs. Every rep counts.',
    choices: [
      {
        id: 'go-all-in',
        label: 'Give it everything in front of the recruiters',
        effects: [
          { exposureDelta: 6, log: 'A performance that turns heads among several recruiters.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'stay-focused',
        label: 'Play it simple, no mistakes',
        effects: [
          { attribute: 'technique', delta: 2, log: 'A clean performance, no flash but no errors.' },
          { exposureDelta: 2 },
        ],
        variants: [
          {
            weight: 1,
            effects: [
              { attribute: 'technique', delta: 2, log: 'A clean performance, no flash but no errors.' },
              { exposureDelta: 2 },
            ],
          },
          {
            weight: 1,
            effects: [
              { attribute: 'technique', delta: 1 },
              { exposureDelta: -2, log: 'A performance too quiet to notice — recruiters remember other names from today.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'hs-position-battle',
    theme: 'FOOTBALL',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    emoji: '🥊',
    title: 'Position Battle',
    context: 'Another player at the school is chasing the same starting spot. The coach has to make a call.',
    choices: [
      {
        id: 'confront',
        label: 'Challenge him head-on at practice',
        effects: [
          { attribute: 'mental', delta: 2, log: 'The direct confrontation toughens the mind.' },
          { attribute: 'leadership', delta: 2 },
        ],
        variants: [
          {
            weight: 1,
            effects: [
              { attribute: 'mental', delta: 2, log: 'The direct confrontation toughens the mind.' },
              { attribute: 'leadership', delta: 2 },
            ],
          },
          {
            weight: 1,
            effects: [
              { attribute: 'leadership', delta: -1, log: 'The confrontation boils over into open tension, and the locker room feels it.' },
              { attribute: 'mental', delta: -1 },
            ],
          },
        ],
      },
      {
        id: 'collaborate',
        label: 'Push each other forward, no open rivalry',
        effects: [
          { attribute: 'technique', delta: 2, log: 'A healthy push benefits both players.' },
          { attribute: 'leadership', delta: 1 },
        ],
      },
    ],
  },
  {
    id: 'hs-rival-intro',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 1,
    arcId: 'rival-gen',
    forbidsFlag: 'arc-rival-intro',
    emoji: '🚩',
    title: 'Rivalry',
    context:
      'During a conference game, an opposing player impresses everyone. Recruiters are already starting to compare the two.',
    choices: [
      {
        id: 'respect',
        label: 'Shake his hand after the game',
        effects: [
          { flag: 'arc-rival-intro', flagValue: true },
          { flag: 'rival-tone', flagValue: 'respect' },
          { attribute: 'leadership', delta: 1, log: 'A respectful rivalry starts to take shape.' },
        ],
      },
      {
        id: 'ignore',
        label: 'Ignore him, focus on yourself',
        effects: [
          { flag: 'arc-rival-intro', flagValue: true },
          { flag: 'rival-tone', flagValue: 'froid' },
          { attribute: 'mental', delta: 1, log: 'A quiet rivalry starts to simmer.' },
        ],
      },
    ],
  },
  {
    id: 'hs-mentor-cost',
    theme: 'PERSONNEL',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    requiresFlag: { key: 'entourage', value: 'mentor-prive' },
    emoji: '💸',
    title: 'Mentor’s Bill',
    context: 'The private recruiter is asking for more one-on-one sessions, but the cost is starting to strain the family budget.',
    choices: [
      {
        id: 'continue',
        label: 'Keep going, even if it means sacrifices',
        effects: [
          { exposureDelta: 5, log: 'The mentor’s network keeps opening doors.' },
          { attribute: 'mental', delta: -1, log: 'The financial strain weighs on the whole family.' },
        ],
      },
      {
        id: 'stop',
        label: 'Stop the private sessions',
        effects: [
          { attribute: 'mental', delta: 2, log: 'One less financial burden, a lighter mind.' },
          { exposureDelta: -2, log: 'The mentor’s network fades little by little.' },
        ],
      },
    ],
  },
  {
    id: 'hs-friends-party',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    requiresFlag: { key: 'lifestyle', value: 'popularite' },
    emoji: '🎉',
    title: 'Pre-Game Party',
    context: 'The friend group is pushing hard for a party the night before a big game.',
    choices: [
      {
        id: 'go',
        label: 'Go for a bit',
        effects: [
          { exposureDelta: 2, log: 'A night out that boosts the local popularity even more.' },
          { attribute: 'physique', delta: -2 },
        ],
      },
      {
        id: 'refuse',
        label: 'Stay focused on the game',
        effects: [{ attribute: 'mental', delta: 2, log: 'Discipline pays off, even when it’s hard to own.' }],
      },
    ],
  },
  {
    id: 'hs-big-game',
    theme: 'FOOTBALL',
    acts: ['HS'],
    seasonMin: 1,
    seasonMax: 3,
    emoji: '🏟️',
    title: 'The Big Game',
    context: 'The game that could swing the whole season. The entire region is watching.',
    choices: [
      {
        id: 'take-over',
        label: 'Take the game over',
        effects: [
          { exposureDelta: 5, log: 'A performance that leaves a lasting mark on the program.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'team-play',
        label: 'Play team ball, let the offense carry itself',
        effects: [{ attribute: 'technique', delta: 2, log: 'A team win, quiet but solid.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'technique', delta: 2, log: 'A team win, quiet but solid.' }] },
          {
            weight: 1,
            effects: [{ attribute: 'mental', delta: -1, log: 'With no one stepping up, the team collapses in crunch time.' }],
          },
        ],
      },
    ],
  },
]
