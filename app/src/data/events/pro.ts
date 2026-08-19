import type { GameEvent } from '../../types/events'

export const PRO_EVENTS: GameEvent[] = [
  {
    id: 'pro-training-camp',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 20,
    emoji: '🏋️',
    title: 'Training Camp BFL',
    context: 'Le rythme professionnel n’a rien à voir avec le college. Chaque snap est chronométré, chaque détail compte.',
    choices: [
      {
        id: 'grind',
        label: 'Pousser le corps au maximum',
        effects: [
          { attribute: 'physique', delta: 3, log: 'Le corps encaisse encore la charge, saison après saison.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'smart',
        label: 'Travailler intelligemment, gérer la fatigue',
        effects: [
          { attribute: 'mental', delta: 2, log: 'Une préparation plus posée, pensée pour durer.' },
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
    title: 'Playbook BFL',
    context: 'Le playbook professionnel est bien plus dense que celui du college. La maîtriser fait toute la différence le dimanche.',
    choices: [
      {
        id: 'master',
        label: 'Ingurgiter tout le playbook',
        effects: [
          { attribute: 'technique', delta: 3, log: 'Une lecture du jeu de plus en plus fine.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'basics',
        label: 'Se concentrer sur les bases, sans faute',
        effects: [
          { attribute: 'mental', delta: 2, log: 'Une exécution simple, mais solide.' },
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
    title: 'Vestiaire',
    context: 'Un vétéran du vestiaire teste la nouvelle recrue — ou remet en question l’autorité d’un joueur déjà installé.',
    choices: [
      {
        id: 'lead',
        label: 'Prendre la parole, s’imposer',
        effects: [{ attribute: 'leadership', delta: 3, log: 'Une prise de parole qui marque durablement le vestiaire.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'leadership', delta: 3, log: 'Une prise de parole qui marque durablement le vestiaire.' }] },
          {
            weight: 1,
            effects: [{ attribute: 'leadership', delta: -2, log: 'La prise de parole tombe à plat — le vestiaire n’était pas prêt à l’entendre de sa part.' }],
          },
        ],
      },
      {
        id: 'earn',
        label: 'Laisser le terrain parler',
        effects: [{ attribute: 'mental', delta: 2, log: 'Le respect se gagne en silence, match après match.' }],
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
    title: 'Engagement communautaire',
    context: 'La franchise propose une visite dans un hôpital pour enfants près du stade — bon pour l’image, mais surtout pour de vraies personnes.',
    choices: [
      {
        id: 'engage',
        label: 'S’investir pleinement dans le projet',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'Un engagement sincère qui dépasse largement le terrain.' },
          { exposureDelta: 3 },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'skip',
        label: 'Rester concentré sur la saison',
        effects: [{ attribute: 'mental', delta: 1, log: 'Toute l’énergie reste dirigée vers le prochain match.' }],
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
    title: 'Contrat de sponsoring',
    context: 'L’agent négocie un gros contrat publicitaire national, en plus du salaire BFL.',
    choices: [
      {
        id: 'sign',
        label: 'Signer le contrat',
        effects: [
          { exposureDelta: 6, log: 'Le visage du joueur apparaît maintenant sur les panneaux publicitaires.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'decline',
        label: 'Rester concentré sur le jeu',
        effects: [
          { attribute: 'mental', delta: 2, log: 'Aucune distraction, seulement le prochain adversaire.' },
          { exposureDelta: -2, log: 'Un beau contrat qui passe à quelqu’un d’autre.' },
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
    title: 'Enfant du pays',
    context: 'Les médias locaux veulent absolument raconter l’histoire de l’enfant du pays devenu joueur BFL.',
    choices: [
      {
        id: 'embrace',
        label: 'Embrasser le statut de héros local',
        effects: [
          { exposureDelta: 4, log: 'Une histoire qui inspire toute une région.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'humble',
        label: 'Rester discret sur le sujet',
        effects: [
          { attribute: 'mental', delta: 2, log: 'Une discrétion qui protège la concentration.' },
          { exposureDelta: -1, log: 'Une belle histoire qui ne sortira jamais vraiment du quartier.' },
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
    title: 'Gêne physique',
    context: 'Une douleur traîne depuis plusieurs semaines. Le staff médical hésite avant un match important.',
    choices: [
      {
        id: 'play-through',
        label: 'Jouer à travers la douleur',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'Un geste que le vestiaire n’oubliera pas.' },
          { attribute: 'physique', delta: -3 },
        ],
      },
      {
        id: 'rest',
        label: 'Se préserver pour la suite de la saison',
        effects: [{ attribute: 'mental', delta: 2, log: 'Une décision raisonnable pour préserver l’avenir.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'mental', delta: 2, log: 'Une décision raisonnable pour préserver l’avenir.' }] },
          {
            weight: 1,
            effects: [{ exposureDelta: -3, log: 'Le remplaçant profite de l’occasion et ne relâche plus le poste aussi facilement.' }],
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
    title: 'Désaccord tactique',
    context: 'Le coordinateur impose un système qui ne colle pas totalement au profil du joueur.',
    choices: [
      {
        id: 'adapt',
        label: 'S’adapter sans faire de vagues',
        effects: [{ attribute: 'mental', delta: 2, log: 'Une flexibilité qui rassure le staff.' }],
        variants: [
          { weight: 1, effects: [{ attribute: 'mental', delta: 2, log: 'Une flexibilité qui rassure le staff.' }] },
          {
            weight: 1,
            effects: [{ attribute: 'leadership', delta: -2, log: 'S’adapter sans broncher passe pour un manque de caractère aux yeux du vestiaire.' }],
          },
        ],
      },
      {
        id: 'push-back',
        label: 'Défendre son propre style',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'Un coup de gueule qui fait évoluer le système.' },
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
    title: 'Intersaison',
    context: 'L’intersaison est courte. Certains partent en vacances, d’autres retournent directement à la salle.',
    choices: [
      {
        id: 'train',
        label: 'Rester s’entraîner tout l’été',
        effects: [
          { attribute: 'physique', delta: 3, log: 'Un été de travail qui se voit dès le premier training camp.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'recover',
        label: 'Prendre un vrai temps de repos',
        effects: [
          { attribute: 'mental', delta: 3, log: 'Un esprit reposé, prêt pour une nouvelle saison.' },
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
    title: 'Le Rival, en BFL',
    context:
      'Le rival de toujours a lui aussi percé en BFL. Le calendrier les met face à face pour la première fois au plus haut niveau.',
    choices: [
      {
        id: 'dominate',
        label: 'Marquer les esprits dans ce duel',
        effects: [
          { flag: 'arc-rival-nfl-done', flagValue: true },
          { exposureDelta: 5, log: 'Le duel de toujours franchit un nouveau cap sous les projecteurs BFL.' },
          { attribute: 'leadership', delta: 2 },
        ],
        variants: [
          {
            weight: 1,
            effects: [
              { flag: 'arc-rival-nfl-done', flagValue: true },
              { exposureDelta: 5, log: 'Le duel de toujours franchit un nouveau cap sous les projecteurs BFL.' },
              { attribute: 'leadership', delta: 2 },
            ],
          },
          {
            weight: 1,
            effects: [
              { flag: 'arc-rival-nfl-done', flagValue: true },
              { attribute: 'mental', delta: -2, log: 'Le rival prend le dessus au sommet — la rivalité de toujours tourne à son désavantage.' },
            ],
          },
        ],
      },
      {
        id: 'respect',
        label: 'Jouer le match, pas l’histoire',
        effects: [
          { flag: 'arc-rival-nfl-done', flagValue: true },
          { attribute: 'mental', delta: 2, log: 'Une rivalité qui a mûri, loin de la rancune du lycée.' },
        ],
      },
    ],
  },
]
