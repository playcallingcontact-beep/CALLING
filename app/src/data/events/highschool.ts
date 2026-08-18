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
      'La pré-saison démarre avec les entraînements bi-quotidiens sous la chaleur. Le coach observe qui tient le rythme.',
    choices: [
      {
        id: 'push',
        label: 'Pousser à fond, quitte à s’épuiser',
        effects: [
          { attribute: 'physique', delta: 4, log: 'Un été de travail acharné a payé physiquement.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'measured',
        label: 'Gérer son effort intelligemment',
        effects: [
          { attribute: 'mental', delta: 3, log: 'Une préparation maîtrisée, sans excès.' },
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
    title: 'Séances vidéo',
    context: 'Le coordinateur propose des heures supplémentaires d’étude vidéo après l’entraînement.',
    choices: [
      {
        id: 'accept',
        label: 'Rester étudier les schémas',
        effects: [{ attribute: 'technique', delta: 3, log: 'Les heures de vidéo commencent à payer sur le terrain.' }],
      },
      {
        id: 'skip',
        label: 'Rentrer se reposer',
        effects: [{ attribute: 'physique', delta: 1, log: 'Une soirée de récupération bienvenue.' }],
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
    title: 'Camp de recrutement régional',
    context: 'Un camp rassemble des recruteurs de plusieurs programmes college. Chaque prestation compte.',
    choices: [
      {
        id: 'go-all-in',
        label: 'Tout donner devant les recruteurs',
        effects: [
          { exposureDelta: 6, log: 'Une prestation remarquée par plusieurs recruteurs.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'stay-focused',
        label: 'Jouer simple et sans erreur',
        effects: [
          { attribute: 'technique', delta: 2, log: 'Une prestation propre, sans éclat mais sans faute.' },
          { exposureDelta: 2 },
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
    title: 'Concurrence au poste',
    context: 'Un autre joueur du lycée vise la même place de titulaire. Le coach doit trancher.',
    choices: [
      {
        id: 'confront',
        label: 'Le défier frontalement à l’entraînement',
        effects: [
          { attribute: 'mental', delta: 2, log: 'La confrontation directe forge le mental.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'collaborate',
        label: 'Progresser ensemble, sans rivalité ouverte',
        effects: [
          { attribute: 'technique', delta: 2, log: 'Une émulation saine profite aux deux joueurs.' },
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
    title: 'Rivalité',
    context:
      'Lors d’un match de conférence, un joueur adverse impressionne tout le monde. Les recruteurs commencent déjà à comparer les deux profils.',
    choices: [
      {
        id: 'respect',
        label: 'Le saluer après le match',
        effects: [
          { flag: 'arc-rival-intro', flagValue: true },
          { flag: 'rival-tone', flagValue: 'respect' },
          { attribute: 'leadership', delta: 1, log: 'Une rivalité respectueuse commence à se dessiner.' },
        ],
      },
      {
        id: 'ignore',
        label: 'L’ignorer, se concentrer sur soi',
        effects: [
          { flag: 'arc-rival-intro', flagValue: true },
          { flag: 'rival-tone', flagValue: 'froid' },
          { attribute: 'mental', delta: 1, log: 'Une rivalité silencieuse commence à couver.' },
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
    title: 'Facture du mentor',
    context: 'Le recruteur privé demande davantage de séances individuelles, mais le coût devient conséquent pour la famille.',
    choices: [
      {
        id: 'continue',
        label: 'Continuer, quitte à faire des sacrifices',
        effects: [{ exposureDelta: 5, log: 'Le réseau du mentor ouvre des portes.' }],
      },
      {
        id: 'stop',
        label: 'Arrêter les séances privées',
        effects: [{ attribute: 'mental', delta: 2, log: 'Un poids financier en moins, l’esprit plus libre.' }],
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
    title: 'Soirée avant match',
    context: 'Le cercle d’amis insiste pour une soirée la veille d’un match décisif.',
    choices: [
      {
        id: 'go',
        label: 'Y aller un peu',
        effects: [
          { exposureDelta: 2, log: 'Une soirée qui renforce encore la popularité locale.' },
          { attribute: 'physique', delta: -2 },
        ],
      },
      {
        id: 'refuse',
        label: 'Rester concentré sur le match',
        effects: [{ attribute: 'mental', delta: 2, log: 'La discipline paie, même quand c’est difficile à assumer.' }],
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
    title: 'Match décisif',
    context: 'Le match qui peut faire basculer la saison. Toute la région regarde.',
    choices: [
      {
        id: 'take-over',
        label: 'Prendre le match à son compte',
        effects: [
          { exposureDelta: 5, log: 'Une performance qui marque durablement le programme.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'team-play',
        label: 'Jouer collectif, laisser l’équipe porter le jeu',
        effects: [{ attribute: 'technique', delta: 2, log: 'Une victoire collective, discrète mais solide.' }],
      },
    ],
  },
]
