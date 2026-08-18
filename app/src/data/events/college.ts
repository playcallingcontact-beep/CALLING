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
    context: 'Le camp d’avant-saison NCAA est autrement plus dur que le lycée. Les coordinateurs testent les limites de chacun.',
    choices: [
      {
        id: 'grind',
        label: 'Enchaîner les répétitions sans relâche',
        effects: [
          { attribute: 'physique', delta: 4, log: 'Le corps encaisse la charge de travail college.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'technical',
        label: 'Peaufiner les détails techniques',
        effects: [{ attribute: 'technique', delta: 3, log: 'Les petits ajustements techniques commencent à payer.' }],
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
    title: 'Salle vidéo',
    context: 'Le staff college dispose d’un arsenal vidéo bien plus poussé qu’au lycée pour décortiquer chaque adversaire.',
    choices: [
      {
        id: 'opponents',
        label: 'Décortiquer les schémas adverses',
        effects: [{ attribute: 'technique', delta: 3, log: 'Une lecture du jeu affûtée, snap après snap.' }],
      },
      {
        id: 'self',
        label: 'Corriger ses propres défauts',
        effects: [{ attribute: 'mental', delta: 3, log: 'Un travail sur soi qui paie sur la durée.' }],
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
    context: 'Le match public de fin de printemps attire déjà quelques recruteurs NFL en repérage.',
    choices: [
      {
        id: 'go-big',
        label: 'Frapper fort devant les recruteurs',
        effects: [
          { exposureDelta: 6, log: 'Une prestation qui fait remonter des noms dans les bureaux NFL.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'safe',
        label: 'Jouer sûr, sans prise de risque',
        effects: [
          { attribute: 'technique', delta: 2, log: 'Une prestation propre qui rassure le staff.' },
          { exposureDelta: 2 },
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
    title: 'Guerre de postes',
    context: 'Le depth chart n’est jamais figé. Un concurrent pousse fort pour la place de titulaire.',
    choices: [
      {
        id: 'raise-level',
        label: 'Hausser le niveau à l’entraînement',
        effects: [
          { attribute: 'mental', delta: 2, log: 'La pression de la concurrence tire le niveau vers le haut.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'stay-pro',
        label: 'Rester professionnel et encaisser',
        effects: [{ attribute: 'mental', delta: 3, log: 'Une maturité qui impressionne le staff.' }],
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
    context: 'La saison se termine sur un bowl télévisé nationalement. La plus grosse audience de l’année.',
    choices: [
      {
        id: 'hero',
        label: 'Devenir le héros du match',
        effects: [
          { exposureDelta: 8, log: 'Un moment de bowl qui tourne en boucle sur les réseaux.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'team-effort',
        label: 'Porter l’équipe collectivement',
        effects: [{ attribute: 'technique', delta: 3, log: 'Une victoire d’équipe, sans éclat individuel.' }],
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
    title: 'Vie académique',
    context: 'Entre les cours et les entraînements, l’équilibre devient difficile à tenir.',
    choices: [
      {
        id: 'study',
        label: 'Prioriser les études',
        effects: [
          { attribute: 'mental', delta: 3, log: 'Une discipline académique qui renforce aussi le mental de compétiteur.' },
          { attribute: 'physique', delta: -1 },
        ],
      },
      {
        id: 'football-first',
        label: 'Miser sur le football avant tout',
        effects: [
          { attribute: 'physique', delta: 2, log: 'Chaque heure libre est investie sur le terrain.' },
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
    title: 'Deal NIL',
    context: 'Le mentor privé négocie un contrat NIL (Name, Image, Likeness) qui ferait grimper la visibilité du joueur.',
    choices: [
      {
        id: 'sign',
        label: 'Signer le gros deal NIL',
        effects: [
          { exposureDelta: 6, log: 'Le nom circule bien au-delà du campus.' },
          { attribute: 'mental', delta: -1 },
        ],
      },
      {
        id: 'decline',
        label: 'Rester discret, privilégier le jeu',
        effects: [{ attribute: 'mental', delta: 2, log: 'Aucune distraction, seulement le terrain.' }],
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
    title: 'Vie de campus',
    context: 'Sur un campus de plusieurs dizaines de milliers d’étudiants, la popularité prend une toute autre échelle.',
    choices: [
      {
        id: 'enjoy',
        label: 'Profiter de la popularité du campus',
        effects: [
          { exposureDelta: 3, log: 'Une notoriété locale qui dépasse maintenant le seul terrain.' },
          { attribute: 'physique', delta: -2 },
        ],
      },
      {
        id: 'focus',
        label: 'Rester concentré sur la saison',
        effects: [{ attribute: 'mental', delta: 2, log: 'La distraction est réelle, mais évitée avec discipline.' }],
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
    title: 'Alerte physique',
    context: 'Une gêne physique traîne depuis quelques séances. Le staff médical veut un avis clair.',
    choices: [
      {
        id: 'play-through',
        label: 'Jouer à travers la douleur',
        effects: [
          { attribute: 'leadership', delta: 2, log: 'Un geste qui marque les esprits dans le vestiaire.' },
          { attribute: 'physique', delta: -3 },
        ],
      },
      {
        id: 'rest',
        label: 'Lever la main et se préserver',
        effects: [
          { attribute: 'mental', delta: 2, log: 'Une décision raisonnable, même si elle coûte des reps.' },
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
    title: 'Revanche',
    context:
      'Le rival du lycée s’est lui aussi imposé en college. Les deux programmes se croisent en conférence — l’occasion d’un règlement de comptes très attendu.',
    choices: [
      {
        id: 'dominate',
        label: 'Prendre une revanche éclatante',
        effects: [
          { flag: 'arc-rival-college-done', flagValue: true },
          { exposureDelta: 6, log: 'Le duel tant attendu tourne largement en sa faveur.' },
          { attribute: 'leadership', delta: 2 },
        ],
      },
      {
        id: 'team-first',
        label: 'Se concentrer sur le collectif, pas le duel',
        effects: [
          { flag: 'arc-rival-college-done', flagValue: true },
          { attribute: 'technique', delta: 3, log: 'Le duel individuel passe au second plan derrière la victoire d’équipe.' },
        ],
      },
    ],
  },
]
