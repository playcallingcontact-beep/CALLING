import type { GameEvent } from '../../types/events'

export const PRO_EVENTS: GameEvent[] = [
  {
    id: 'pro-training-camp',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '🏋️',
    title: 'BFL Training Camp',
    context: 'The professional pace has nothing to do with college. Every snap is timed, every detail matters.',
    choices: [
      {
        id: 'grind',
        label: 'Push the body to the max',
        effects: [
          { attribute: 'physique', delta: 3, log: 'The body still holds up under the load, season after season.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'smart',
        label: 'Train smart, manage the fatigue',
        effects: [
          { attribute: 'mental', delta: 2, log: 'A calmer approach to preparation, built to last.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'pro-playbook',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '📋',
    title: 'BFL Playbook',
    context: 'The pro playbook is far denser than the one in college. Mastering it makes all the difference on Sundays.',
    choices: [
      {
        id: 'master',
        label: 'Absorb the entire playbook',
        effects: [
          { attribute: 'technique', delta: 3, log: 'A read of the game that keeps getting sharper.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'basics',
        label: 'Focus on the basics, no mistakes',
        effects: [
          { attribute: 'mental', delta: 2, log: 'A simple execution, but a solid one.' },
          { attribute: 'technique', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'pro-locker-room',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '🗣️',
    title: 'Locker Room',
    context: 'A locker-room veteran tests the new arrival — or challenges the authority of a player already established.',
    choices: [
      {
        id: 'lead',
        label: 'Speak up and assert yourself',
        effects: [{ attribute: 'leadership', delta: 3, log: 'Speaking up leaves a lasting mark on the locker room.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'leadership', delta: 3, log: 'Speaking up leaves a lasting mark on the locker room.' }] },
          {
            weight: 1,
            effects: [{ attribute: 'leadership', delta: -2, log: 'The speech falls flat — the locker room wasn’t ready to hear it from him.' }],
          },
        ],
      },
      {
        id: 'earn',
        label: 'Let the play on the field speak',
        effects: [{ attribute: 'mental', delta: 2, log: 'Respect gets earned in silence, game after game.' }],
      },
    ],
  },
  {
    id: 'pro-community',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '❤️',
    title: 'Community Outreach',
    context: 'The franchise sets up a visit to a children’s hospital near the stadium — good for the image, but mostly for real people.',
    choices: [
      {
        id: 'engage',
        label: 'Commit fully to the visit',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'A sincere commitment that goes well beyond the field.' },
          { exposureDelta: 3 },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'skip',
        label: 'Stay focused on the season',
        effects: [{ attribute: 'mental', delta: 1, log: 'All the energy stays pointed at the next game.' }],
      },
    ],
  },
  {
    id: 'pro-endorsement',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    requiresFlag: { key: 'entourage', value: 'mentor-prive' },
    emoji: '💼',
    title: 'Endorsement Deal',
    context: 'The agent negotiates a big national ad contract, on top of the BFL salary.',
    choices: [
      {
        id: 'sign',
        label: 'Sign the contract',
        effects: [
          { exposureDelta: 6, log: 'The player’s face now shows up on billboards.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'decline',
        label: 'Stay focused on the game',
        effects: [
          { attribute: 'mental', delta: 2, log: 'No distractions, just the next opponent.' },
          { exposureDelta: -2, log: 'A good contract goes to someone else.' },
        ],
      },
    ],
  },
  {
    id: 'pro-hometown-hero',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    requiresFlag: { key: 'lifestyle', value: 'popularite' },
    emoji: '🎤',
    title: 'Hometown Hero',
    context: 'Local media wants to tell the story of the hometown kid turned BFL player.',
    choices: [
      {
        id: 'embrace',
        label: 'Embrace the hometown hero role',
        effects: [
          { exposureDelta: 4, log: 'A story that inspires an entire region.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'humble',
        label: 'Stay quiet about it',
        effects: [
          { attribute: 'mental', delta: 2, log: 'A low profile that protects the focus.' },
          { exposureDelta: -1, log: 'A great story that never really leaves the neighborhood.' },
        ],
      },
    ],
  },
  {
    id: 'pro-injury-scare',
    theme: 'FOOTBALL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '🩹',
    title: 'Injury Scare',
    context: 'A pain has lingered for several weeks. The medical staff hesitates ahead of a big game.',
    choices: [
      {
        id: 'play-through',
        label: 'Play through the pain',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'A gesture the locker room won’t forget.' },
          { attribute: 'physique', delta: -3 },
        ],
      },
      {
        id: 'rest',
        label: 'Rest up for the rest of the season',
        effects: [{ attribute: 'mental', delta: 2, log: 'A sensible decision to protect the future.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'mental', delta: 2, log: 'A sensible decision to protect the future.' }] },
          {
            weight: 1,
            effects: [{ exposureDelta: -3, log: 'The backup makes the most of the chance and doesn’t give the job back easily.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'pro-coach-conflict',
    theme: 'FOOTBALL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '📐',
    title: 'Scheme Disagreement',
    context: 'The coordinator installs a system that doesn’t fully fit the player’s profile.',
    choices: [
      {
        id: 'adapt',
        label: 'Adapt without making waves',
        effects: [{ attribute: 'mental', delta: 2, log: 'A flexibility that reassures the staff.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'mental', delta: 2, log: 'A flexibility that reassures the staff.' }] },
          {
            weight: 1,
            effects: [{ attribute: 'leadership', delta: -2, log: 'Adapting without pushing back reads as a lack of backbone to the locker room.' }],
          },
        ],
      },
      {
        id: 'push-back',
        label: 'Defend your own style',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'Speaking up forces the system to evolve.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'pro-offseason-grind',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '💪',
    title: 'Offseason',
    context: 'The offseason is short. Some head off on vacation, others go straight back to the weight room.',
    choices: [
      {
        id: 'train',
        label: 'Stay and train all summer',
        effects: [
          { attribute: 'physique', delta: 3, log: 'A summer of work that shows from the first day of training camp.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'recover',
        label: 'Take real time to rest',
        effects: [
          { attribute: 'mental', delta: 3, log: 'A rested mind, ready for a new season.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
    ],
  },
  {
    id: 'pro-rival-nfl',
    theme: 'FOOTBALL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 3,
    arcId: 'rival-gen',
    requiresFlag: { key: 'arc-rival-intro', value: true },
    forbidsFlag: 'arc-rival-nfl-done',
    emoji: '🚩',
    title: 'The Rival, in BFL',
    context:
      'The longtime rival has also broken through in BFL. The schedule pits them against each other for the first time at the highest level.',
    choices: [
      {
        id: 'dominate',
        label: 'Make a statement in this duel',
        effects: [
          { flag: 'arc-rival-nfl-done', flagValue: true },
          { exposureDelta: 5, log: 'The lifelong duel reaches a new level under the BFL lights.' },
          { attribute: 'leadership', delta: 2 },
        ],
        variants: [
          {
            weight: 1,
            effects: [
              { flag: 'arc-rival-nfl-done', flagValue: true },
              { exposureDelta: 5, log: 'The lifelong duel reaches a new level under the BFL lights.' },
              { attribute: 'leadership', delta: 2 },
            ],
          },
          {
            weight: 1,
            effects: [
              { flag: 'arc-rival-nfl-done', flagValue: true },
              { attribute: 'mental', delta: -2, log: 'The rival comes out on top at the summit — the lifelong rivalry tips against him.' },
            ],
          },
        ],
      },
      {
        id: 'respect',
        label: 'Play the game, not the history',
        effects: [
          { flag: 'arc-rival-nfl-done', flagValue: true },
          { attribute: 'mental', delta: 2, log: 'A rivalry that has matured, far from the grudges of high school.' },
        ],
      },
    ],
  },
]
