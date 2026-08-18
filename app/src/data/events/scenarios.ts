import type { GameEvent } from '../../types/events'

export const SCENARIO_EVENTS: GameEvent[] = [
  {
    id: 'scn-1',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🧠',
    title: 'Le blitz est évident',
    context: '3rd & 6. Deux linebackers avancent vers la ligne et le safety descend dans la box. Tu identifies une forte probabilité de blitz.',
    choices: [
      {
        id: 'c1',
        label: 'Audibiliser',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'L\'audible exploite parfaitement le blitz.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'La défense avait anticipé le changement.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Faire confiance au play-call',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'Le play fonctionne comme prévu.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1, log: 'Le blitz arrive immédiatement.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder le RB en protection',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'La protection fonctionne.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -1, log: 'Tu perds une solution de passe.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-2',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🔥',
    title: 'Aucun safety derrière',
    context: 'La défense montre une Cover 0. Aucun safety ne protège le fond du terrain et les receveurs sont presque tous en man coverage.',
    choices: [
      {
        id: 'c1',
        label: 'Tenter le deep shot',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 4, log: 'Le receveur gagne son duel.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'La passe est incomplète.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Tu forces le lancer.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attaquer immédiatement en dessous',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'La passe rapide gagne quelques yards.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Le blitz arrive avant la réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Audibiliser en run',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'La box favorable est exploitée.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Un défenseur non identifié provoque une perte.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-3',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🎯',
    title: 'Les deux safeties reculent',
    context: 'Les deux safeties restent très profonds. La défense semble vouloir empêcher le big play.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer entre les safeties',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'La fenêtre est parfaite.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'La passe est incomplète.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Tu ne lis pas correctement la couverture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre les yards courts',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'La série avance.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'L\'attaque devient prévisible.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Audibiliser en run',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'La box légère est exploitée.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le linebacker lit rapidement le changement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-4',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '⚡',
    title: 'La poche se referme',
    context: 'Le pass rush arrive plus vite que prévu. Tu dois prendre une décision avant que la poche ne s\'effondre.',
    choices: [
      {
        id: 'c1',
        label: 'Scrambler',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Tu gagnes plusieurs yards.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu es stoppé immédiatement.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'Tu prends un gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lancer rapidement',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'La passe est complétée.' }],
          },
          {
            weight: 20,
            effects: [{ log: 'Elle est trop précipitée.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: -1, log: 'Elle est interceptée.' }, { attribute: 'mental', delta: -2 }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre la route profonde',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'Le big play fonctionne.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'Tu prends le sack.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-5',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '👀',
    title: 'Le WR1 est verrouillé',
    context: 'Le meilleur receveur de l\'équipe attire systématiquement une double couverture.',
    choices: [
      {
        id: 'c1',
        label: 'Forcer le ballon au WR1',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 5, log: 'Le WR1 réalise une action exceptionnelle.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'La passe est incomplète.' }, { exposureDelta: 2 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2 }, { attribute: 'technique', delta: -2, log: 'Tu es intercepté.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire les autres options',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Une autre cible est trouvée.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu tardes trop.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser le WR1 comme leurre',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'La défense est déplacée et une cible secondaire se libère.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'La défense ne mord pas.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-6',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🏈',
    title: 'Il faut gagner douze yards',
    context: 'La défense protège les sticks et le premier down est loin.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher le big play',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 4, log: 'Tu trouves une grosse fenêtre.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'La passe est incomplète.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Tu forces le lancer.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre ce que la défense donne',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu gagnes des yards utiles.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Le checkdown est trop court.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Scrambler',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'Tu convertis grâce à tes jambes.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu es stoppé.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'Tu prends un gros contact.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-7',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🎯',
    title: 'Tout le monde est pris',
    context: 'La défense joue une couverture homme à homme. Aucun receveur ne semble avoir un avantage évident avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Identifier le meilleur matchup',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'Tu trouves le bon duel.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu te trompes de matchup.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attaquer le milieu',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'La fenêtre s\'ouvre.' }, { exposureDelta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'La passe est incomplète.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'Interception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder le jeu simple',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu évites l\'erreur.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Le drive se termine rapidement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-8',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🕵️',
    title: 'Le linebacker te surveille',
    context: 'La défense a assigné un linebacker en QB spy.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le spy',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Tu le bats.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu es stoppé.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'Tu prends un gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester dans la poche',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu trouves une fenêtre.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'La pression arrive.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Feinter le scramble',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Le spy mord.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'Il reste discipliné.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-9',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🚨',
    title: 'Terrain réduit',
    context: 'La défense compacte la formation et réduit considérablement les espaces disponibles.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer rapidement',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'Tu trouves une fenêtre.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 1, log: 'La défense ferme immédiatement la fenêtre.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play-action',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Un défenseur mord.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'La défense reste parfaitement disciplinée.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder le ballon',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Tu trouves une ouverture.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -1, log: 'Tu prends un gros contact.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-10',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '⏱️',
    title: 'Deux minutes au chrono',
    context: 'L\'équipe doit remonter le terrain rapidement.',
    choices: [
      {
        id: 'c1',
        label: 'Attaque ultra-rapide',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'Le rythme désorganise la défense.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'Tu précipites une décision.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer méthodiquement',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu maîtrises parfaitement le drive.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Le chrono devient un problème.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher immédiatement le big play',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 6, log: 'Le big play fonctionne.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'La passe est incomplète.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'Interception.' }, { attribute: 'mental', delta: -3 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-11',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '4️⃣',
    title: 'Quatrième tentative',
    context: '4th & 3. L\'équipe doit décider si elle tente de conserver la possession.',
    choices: [
      {
        id: 'c1',
        label: 'Demander à jouer',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Conversion.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Échec.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Faire confiance au coach',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 1, log: 'La décision du coach est payante.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'L\'équipe abandonne la possession.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Proposer une lecture précise',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'La lecture fonctionne.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le défenseur anticipe.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-12',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🧠',
    title: 'Après l\'interception',
    context: 'Tu reviens sur le terrain après une interception. Toute l\'équipe attend de voir comment tu vas réagir.',
    choices: [
      {
        id: 'c1',
        label: 'Repartir agressivement',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 5, log: 'Tu réponds avec un big play.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Passe incomplète.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Nouvelle erreur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sécuriser les premières passes',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu reprends confiance.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Tu deviens trop prévisible.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'S\'appuyer sur le jeu au sol',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 1, log: 'L\'attaque reprend son rythme.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Le run game ne fonctionne pas.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-13',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🛡️',
    title: 'La protection ne tient plus',
    context: 'La ligne offensive a déjà concédé plusieurs pressions. Tu dois adapter ton approche.',
    choices: [
      {
        id: 'c1',
        label: 'Garder un RB en protection',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'La protection tient.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le pass rush gagne encore.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sortir le ballon très vite',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu neutralises la pression.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu lances trop tôt.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Continuer à chercher en profondeur',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'Le big play fonctionne.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -1, log: 'Sack.' }, { attribute: 'technique', delta: -1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'physique', delta: -1, log: 'Fumble sous pression.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-14',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '⏰',
    title: 'Cinq secondes au compteur',
    context: 'Le play-call semble mauvais face à la défense affichée. Il reste cinq secondes avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Audibiliser',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le changement est parfait.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'La communication est ratée.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder le play',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le play fonctionne suffisamment.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'La défense exploite immédiatement le mauvais matchup.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Snap immédiatement',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'La défense n\'a pas le temps de s\'ajuster.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Tu te retrouves enfermé dans un mauvais play.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-15',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🏆',
    title: 'Le drive qui décide du match',
    context: 'Il reste moins de deux minutes. Tu dois mener ton équipe sur un drive potentiellement décisif.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre les commandes',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }, { exposureDelta: 4, log: 'Tu réalises un drive exceptionnel.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Le drive avance mais échoue dans la red zone.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Tu craques sous la pression.' }, { attribute: 'technique', delta: -2 }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Suivre strictement le plan',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le plan fonctionne.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'La défense s\'adapte et le drive échoue.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer très agressif',
        effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'Tu réalises le big play nécessaire.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'Les passes sont incomplètes.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2 }, { attribute: 'technique', delta: -2, log: 'Interception.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-16',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '👀',
    title: 'Le safety triche',
    context: 'Tu remarques avant le snap que le safety se positionne légèrement du côté du WR1. La défense semble anticiper le jeu destiné au meilleur receveur.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer l\'autre côté',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Tu exploites parfaitement le déséquilibre.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'La défense se réajuste.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder le plan initial',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le WR1 gagne malgré l\'aide du safety.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'Passe incomplète.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Interception.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser le WR1 comme leurre',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'La défense suit le WR1 et libère une autre cible.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'La défense ne mord pas.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-17',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '😬',
    title: 'Le mauvais snap',
    context: 'Le snap arrive légèrement trop haut. Tu dois réagir immédiatement alors que la défense attaque déjà la ligne.',
    choices: [
      {
        id: 'c1',
        label: 'Se jeter sur le ballon',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu récupères le ballon.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'La défense récupère le fumble.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Tenter de jouer malgré tout',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'Tu transformes la catastrophe en action positive.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Perte de yards.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -1 }, { attribute: 'physique', delta: -1, log: 'Fumble.' }, { attribute: 'mental', delta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jeter le ballon hors zone',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu évites le pire.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'Le ballon est lancé dangereusement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-18',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '⚡',
    title: 'Le côté aveugle',
    context: 'Un edge rusher arrive rapidement de ton côté aveugle. Tu ne l\'as pas identifié avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Se retourner et s\'échapper',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Tu t\'échappes.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Sack.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'Gros contact.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lancer immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu trouves une cible courte.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe incomplète.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: -2, log: 'Interception.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Encaisser le sack',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges le ballon.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'Fumble.' }, { exposureDelta: -2 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-19',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🔀',
    title: 'Le receveur improvise',
    context: 'Le WR ne réalise pas exactement la route prévue et change brusquement de direction. Tu dois décider si tu adaptes immédiatement ton lancer.',
    choices: [
      {
        id: 'c1',
        label: 'Suivre son improvisation',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Les deux joueurs se comprennent.' }],
          },
          {
            weight: 40,
            effects: [{ log: 'Mauvaise communication.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder le lancer prévu',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le WR revient sur la trajectoire.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe incomplète.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher une autre cible',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Une autre cible est disponible.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu hésites.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-20',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🧩',
    title: 'Le blitz retardé',
    context: 'Le linebacker reste initialement en couverture avant de déclencher son blitz quelques secondes après le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Identifier immédiatement le blitz',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Tu trouves rapidement la solution.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu réagis trop tard.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attaquer le milieu',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'La fenêtre est ouverte.' }, { exposureDelta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe incomplète.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'Interception.' }, { exposureDelta: 1 }, { attribute: 'mental', delta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir de la poche',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu gagnes du temps.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Tu es contenu.' }, { exposureDelta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-21',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '⏱️',
    title: 'Changer le rythme',
    context: 'La défense commence à anticiper le rythme de l\'attaque. Tu peux modifier la cadence des snaps.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer brutalement',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'La défense est désorganisée.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: -1, log: 'L\'attaque commet une erreur de communication.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ralentir le tempo',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu reprends le contrôle du rythme.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'La défense profite du temps supplémentaire pour ajuster sa couverture.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder le rythme habituel',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'Aucun problème.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'La défense continue à anticiper.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-22',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🥊',
    title: 'Le corner est en press',
    context: 'Le CB se place directement devant le WR et cherche à perturber sa release.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer immédiatement',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Le WR gagne son duel.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le CB gagne le duel.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'Pression et passe forcée.' }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser une motion',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'La motion révèle la couverture.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'La défense ne bouge pas comme prévu.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Changer de cible',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Une cible secondaire est ouverte.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu perds du temps.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-23',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🔀',
    title: 'Lire la RPO',
    context: 'Sur une RPO, tu dois rapidement lire le défenseur conflictuel et décider de donner le ballon ou de lancer.',
    choices: [
      {
        id: 'c1',
        label: 'Garder et passer',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'La lecture est parfaite.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le défenseur ne mord pas.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Donner au RB',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le run gagne correctement.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Tu manques une opportunité de passe.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder et courir',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Tu trouves un espace.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gain minimal.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'Gros contact.' }, { exposureDelta: 1 }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-24',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🧱',
    title: 'Deux sacks consécutifs',
    context: 'La défense vient de te sacker deux fois sur les deux derniers drives. La pression commence à influencer ton jeu.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer à attaquer',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 5, log: 'Tu réponds avec un big play.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'Nouvelle pression.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Interception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sortir rapidement le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu stabilises le drive.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'L\'attaque devient trop prévisible.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser davantage le jeu au sol',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Le rythme de l\'attaque revient.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'leadership', delta: 1, log: 'La défense continue à dominer.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-25',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🚨',
    title: 'Le safety anticipe',
    context: 'Tu remarques que le safety anticipe systématiquement une route courte destinée au slot receiver.',
    choices: [
      {
        id: 'c1',
        label: 'Le piéger avec une double move',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Le safety mord complètement.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'Il reste patient.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer à jouer normalement',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'La défense ne change rien.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Le safety provoque une passe incomplète.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer ailleurs',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Une autre zone est ouverte.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'La défense ferme également cette option.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-26',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🌧️',
    title: 'Le ballon devient glissant',
    context: 'Une forte pluie commence pendant le match. Le ballon devient plus difficile à contrôler et les passes profondes deviennent plus risquées.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer à lancer profondément',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'Big play.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'Passe incomplète.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'Mauvaise passe.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Raccourcir les passes',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu sécurises ton jeu.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 1, log: 'Fumble ou passe mal contrôlée.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'S\'appuyer sur le jeu au sol',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'leadership', delta: 1, log: 'L\'équipe contrôle le rythme.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'leadership', delta: 1, log: 'La défense s\'adapte.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-27',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '👁️',
    title: 'Faire regarder le mauvais côté',
    context: 'Un linebacker protège le milieu du terrain. Tu peux tenter de manipuler son regard avec tes yeux et ton mouvement de bras.',
    choices: [
      {
        id: 'c1',
        label: 'Regarder à gauche, lancer à droite',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le linebacker mord.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Il reste discipliné.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Regarder directement la cible',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'La passe fonctionne.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Le linebacker lit immédiatement le lancer.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser le play-action',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Le linebacker descend.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'Il ne mord pas.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-28',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '💥',
    title: 'Le coup après le lancer',
    context: 'Tu vois ton receveur ouvert mais sais que tu vas prendre un gros contact immédiatement après avoir lancé.',
    choices: [
      {
        id: 'c1',
        label: 'Lancer malgré le contact',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'La passe est complétée malgré le hit.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2, log: 'Passe incomplète.' }, { exposureDelta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }, { attribute: 'physique', delta: -2, log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jeter le ballon',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu évites le contact.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Tu perds une opportunité de big play.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir de la poche',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1, log: 'Tu gagnes du temps.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Sack.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'Gros contact.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-29',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '⏳',
    title: 'Faire tourner le chrono',
    context: 'Ton équipe mène de trois points dans les dernières minutes. Tu dois protéger l\'avance et empêcher l\'adversaire de récupérer le ballon trop rapidement.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer ultra-prudent',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'L\'équipe consomme beaucoup de temps.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'L\'attaque devient trop prévisible.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer à attaquer',
        effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'L\'équipe gagne un first down décisif.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 1, log: 'Passe incomplète.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -2 }, { attribute: 'mental', delta: -2 }, { attribute: 'technique', delta: -2, log: 'Interception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher à courir toi-même',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu gagnes suffisamment de yards.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gain minimal.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'Gros contact.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-30',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🎯',
    title: 'Le safety est trop profond',
    context: 'Après le snap, tu remarques que le safety a reculé trop profondément et laisse une zone intermédiaire complètement ouverte.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer immédiatement la fenêtre',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Le lancer est parfait.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe incomplète.' }, { exposureDelta: 2 }],
          },
          {
            weight: 15,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -1, log: 'Mauvaise lecture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre la route profonde',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'Le big play arrive.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'Le safety se replace.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Sack.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Checkdown',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu sécurises le drive.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Tu laisses passer une grosse opportunité.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-31',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🥊',
    title: 'Le corner est en press',
    context: 'Le CB est directement aligné devant toi et cherche à t\'empêcher de sortir proprement de ta release.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer immédiatement son épaule extérieure',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'Tu gagnes rapidement l\'extérieur.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le CB réussit à te contenir.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser un release intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu crées immédiatement de la séparation.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le CB te bloque dans ta trajectoire.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer physique contre le CB',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Tu imposes ton contact.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Duel sans avantage.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Tu es pénalisé.' }, { exposureDelta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-32',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🎯',
    title: 'Dix yards de cushion',
    context: 'Le corner recule de presque dix yards avant le snap afin d\'empêcher toute réception profonde.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer immédiatement en dessous',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu gagnes rapidement quelques yards après réception.' }, { exposureDelta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le CB ferme rapidement l\'espace.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Accélérer vers le fond du terrain',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 4, log: 'Tu forces le CB à reculer davantage.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le CB garde sa profondeur.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }, { attribute: 'technique', delta: -1, log: 'Tu ne crées aucune séparation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser un comeback',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu reviens parfaitement vers le ballon.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais timing avec le QB.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-33',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '👥',
    title: 'Ils sont deux sur toi',
    context: 'La défense te double systématiquement depuis plusieurs drives.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer à attaquer verticalement',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 5, log: 'Tu trouves quand même une fenêtre énorme.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Tu ne reçois aucun ballon.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2, log: 'Tu forces ton QB à tenter une passe dangereuse.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Servir de leurre',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Ton déplacement libère une autre cible.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'La défense ne réagit pas.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Demander une motion',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'La motion révèle la couverture.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'La défense communique parfaitement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-34',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '⚡',
    title: 'Le lancer est en avance',
    context: 'Le QB lance alors que tu n\'as pas encore complètement terminé ta route.',
    choices: [
      {
        id: 'c1',
        label: 'Plonger pour le ballon',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Réception spectaculaire.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Incomplet.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Réception ratée.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ralentir pour sécuriser',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu ajustes correctement ta vitesse.' }],
          },
          {
            weight: 35,
            effects: [{ log: 'Le ballon arrive derrière toi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Continuer la route prévue',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le QB et toi vous comprenez parfaitement.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe incomplète.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-35',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '👐',
    title: 'Le ballon est en l\'air',
    context: 'Tu es couvert mais le QB place le ballon suffisamment haut pour permettre un duel aérien.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le ballon au point le plus haut',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Réception.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1, log: 'Incomplet.' }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'Contact violent.' }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser ton corps pour protéger le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Réception sécurisée.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le défenseur joue parfaitement le ballon.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Tenter la réception à une main',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 7, log: 'Réception spectaculaire.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 3, log: 'Incomplet.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -1, log: 'Ballon dévié.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-36',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '😬',
    title: 'Le ballon tombe',
    context: 'Tu viens de manquer une réception parfaitement accessible.',
    choices: [
      {
        id: 'c1',
        label: 'Demander immédiatement une nouvelle cible',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'Tu te rattrapes sur l\'action suivante.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'La pression augmente.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Se concentrer sur le prochain snap',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu repars proprement.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu hésites encore sur ta prochaine réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Prendre des risques pour se rattraper',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 5, log: 'Grosse réception.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Nouvelle erreur.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-37',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '💪',
    title: 'Le block qui ouvre la voie',
    context: 'Une screen pass est appelée et tu dois bloquer le défenseur qui arrive sur le RB.',
    choices: [
      {
        id: 'c1',
        label: 'Aller chercher le contact',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'Le block ouvre un gros espace.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le block est neutre.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Holding.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bloquer avec patience',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Excellent block.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le défenseur t\'échappe.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Se concentrer uniquement sur sa route',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu reçois le ballon sur l\'action suivante.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le RB est stoppé rapidement.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-38',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🔄',
    title: 'Bouge avant le snap',
    context: 'Tu es placé en motion afin de déterminer si la défense joue homme ou zone.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer la motion',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'La défense révèle sa couverture.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'Mauvaise coordination.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ralentir pour observer la défense',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu identifies la couverture.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Tu ralentis trop l\'exécution.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder une vitesse constante',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'La motion est parfaitement exécutée.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le défenseur anticipe.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-39',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🎯',
    title: 'La fenêtre s\'ouvre',
    context: 'Tu dois attaquer une zone intérieure entre deux défenseurs.',
    choices: [
      {
        id: 'c1',
        label: 'Couper immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Fenêtre parfaite.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le linebacker ferme la fenêtre.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre une seconde de plus',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le défenseur est attiré ailleurs.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'La fenêtre disparaît.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Continuer verticalement',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 4, log: 'Tu trouves un espace profond.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le safety ferme la route.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-40',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '👁️',
    title: 'Le défenseur ne te voit plus',
    context: 'Le CB tourne les hanches et se retrouve dos à toi.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer verticalement',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 5, log: 'Séparation.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le safety vient aider.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Casser immédiatement vers l\'intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Réception facile.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais timing avec le QB.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Continuer à vendre la route profonde',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le CB recule encore.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'Aucune séparation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-41',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '📍',
    title: 'Deux pieds dedans',
    context: 'Le QB lance vers la ligne de touche. Tu dois contrôler ton corps et sécuriser la réception.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Réception parfaite.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu sors du terrain.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre le dernier moment',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Réception spectaculaire.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'Réception ratée.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sécuriser avant tout',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1, log: 'Réception contrôlée.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu perds quelques yards.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-42',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🏃',
    title: 'Le ballon dans les mains',
    context: 'Tu viens de réceptionner une passe courte avec plusieurs défenseurs devant toi.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer plein axe',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'Gros gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Gain moyen.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1, log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher l\'extérieur',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu gagnes quelques yards supplémentaires.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu es poussé vers la touche.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Se mettre immédiatement au sol',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges le ballon.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Tu rates une possibilité importante.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-43',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🚨',
    title: 'Fade dans la end zone',
    context: 'Le QB te regarde isolé près de la ligne de touche dans la red zone.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le point haut',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 6, log: 'Touchdown.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Incomplet.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le CB dévie le ballon.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Créer de l\'espace avec le corps',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Séparation suffisante.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Contact trop important.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer l\'intérieur',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Tu surprends le CB.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'La défense ferme l\'espace.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-44',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🔥',
    title: 'Third down, press coverage',
    context: '3rd & 7. Le corner est en press et tu dois gagner rapidement ta release.',
    choices: [
      {
        id: 'c1',
        label: 'Release agressive',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Séparation immédiate.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1, log: 'Le CB gagne le duel.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Double move',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'Le CB mord.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'La route ne se développe pas.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Route courte',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Conversion possible après réception.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu ne gagnes pas assez de séparation.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-45',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🛡️',
    title: 'Le safety arrive',
    context: 'Tu bats ton corner mais un safety se rapproche rapidement.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer verticalement',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Tu restes ouvert.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le safety ferme la fenêtre.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'Gros contact.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper vers l\'intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Le changement de direction bat l\'aide.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le safety lit le changement.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ralentir la route',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le QB ajuste son lancer.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'Mauvais timing.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-46',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '💪',
    title: 'Ton block décide du run',
    context: 'Le RB part vers l\'extérieur et tu dois empêcher le corner de fermer le couloir.',
    choices: [
      {
        id: 'c1',
        label: 'Bloquer frontalement',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'Gros block.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'Block neutre.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Holding.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bloquer avec l\'angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Excellent block.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais angle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Se détacher pour recevoir une screen',
        effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'Tu reçois le ballon.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'La défense lit la screen.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-47',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '👀',
    title: 'Le QB ne te regarde pas',
    context: 'Tu gagnes ton duel mais le QB regarde une autre partie du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer la route',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le QB revient vers toi.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Aucune cible.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Improviser pour entrer dans son champ de vision',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le QB comprend l\'ajustement.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Mauvaise communication.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Faire signe au QB',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Le QB réagit.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Le geste perturbe la synchronisation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-48',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🚀',
    title: 'Le ballon part loin',
    context: 'Le QB lance une passe profonde. Tu dois suivre la trajectoire tout en gardant ton avantage sur le CB.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer au maximum',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'Séparation.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le ballon est trop long.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le CB revient dans le jeu.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Se retourner tôt pour suivre le ballon',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Bonne réception potentielle.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu ralentis trop et perds ta séparation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Continuer sans regarder le ballon',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Tu reçois en stride.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu ne localises pas le ballon à temps.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-49',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🥊',
    title: 'Le jam',
    context: 'Le corner réussit à mettre un contact légal au début de la route.',
    choices: [
      {
        id: 'c1',
        label: 'Utiliser les mains pour se libérer',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu te libères.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Contact illégal.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre l\'extérieur',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu gagnes la course.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le CB te repousse vers la touche.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Accepter le contact et continuer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu maintiens ta route.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Tu perds ton timing avec le QB.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-50',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🏃‍♂️',
    title: 'Il est derrière toi',
    context: 'Tu as complètement battu ton défenseur et disposes d\'une séparation importante.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer encore',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Énorme séparation.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le ballon est trop profond.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ralentir pour aider le QB',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB te trouve parfaitement.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'Mauvais timing.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Regarder immédiatement le ballon',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Réception possible.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu ralentis et laisses revenir le CB.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-51',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '👐',
    title: 'Ajustement difficile',
    context: 'La passe arrive légèrement derrière toi alors qu\'un défenseur est proche.',
    choices: [
      {
        id: 'c1',
        label: 'Tourner le corps pour absorber le contact',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'Réception.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Incomplet.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 1, log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Tenter la réception à une main',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 5, log: 'Réception spectaculaire.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: 2, log: 'Incomplet.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Abandonner la réception et éviter le contact',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'Aucun problème.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Occasion manquée.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-52',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🔀',
    title: 'Broken play',
    context: 'Le QB sort de sa poche et le play initial est détruit. Tu dois comprendre où aller pour créer une solution.',
    choices: [
      {
        id: 'c1',
        label: 'Revenir vers le QB',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le QB te trouve.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Mauvaise lecture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer vers le fond',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Big play.' }, { exposureDelta: 2 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le QB ne peut pas lancer.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Couper vers la sideline',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu deviens une cible sûre.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvaise synchronisation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-53',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🔥',
    title: 'Il faut convertir',
    context: '3rd & 7. Tu dois gagner ton duel pour prolonger le drive.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer les sticks',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Conversion.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le CB ferme la fenêtre.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le big play',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 6, log: 'Énorme gain.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'Incomplet.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'Interception ou turnover provoqué.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Route courte pour assurer la réception',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Réception.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Gain insuffisant.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-54',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🌟',
    title: 'Ton moment arrive',
    context: 'Le WR1 est fortement couvert et le QB commence à te chercher davantage.',
    choices: [
      {
        id: 'c1',
        label: 'Se rendre disponible',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Tu gagnes plusieurs réceptions.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu ne crées pas suffisamment de séparation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre plus de risques sur ses routes',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 5, log: 'Grosse action.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'Incomplet.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'Mauvaise lecture.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer le rôle de leurre',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Tu libères un coéquipier.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Tu disparais complètement de l\'action.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-55',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🗣️',
    title: 'Le trash talk',
    context: 'Le corner commence à te provoquer verbalement après plusieurs duels.',
    choices: [
      {
        id: 'c1',
        label: 'Ne rien répondre',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu restes concentré.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1, log: 'La provocation continue à peser.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lui répondre sur le terrain',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Tu gagnes le duel suivant.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Le CB gagne.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher immédiatement le duel',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'Grosse réception.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'Incomplet.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Pénalité ou erreur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-56',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🏈',
    title: '« Go get it »',
    context: 'Le QB lance le ballon dans une zone contestée en te faisant confiance pour gagner ton duel.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le ballon',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 5, log: 'Réception.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Incomplet.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Interception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser ton corps',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Réception sécurisée.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le défenseur dévie le ballon.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer uniquement le ballon',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'Grosse réception.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le défenseur intervient au dernier moment.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-57',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '💥',
    title: 'Il faut se relever',
    context: 'Tu viens de prendre un gros contact après une réception et dois repartir sur le snap suivant.',
    choices: [
      {
        id: 'c1',
        label: 'Repartir immédiatement',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'Tu montres ta solidité.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'physique', delta: -1, log: 'Fatigue.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer plus intelligemment',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu évites les contacts inutiles.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu perds de l\'agressivité.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer encore plus physiquement',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2, log: 'Nouveau gros play.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Aucun avantage.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Nouveau gros contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-58',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🧠',
    title: 'Man ou zone ?',
    context: 'Tu dois identifier la couverture avant le snap afin d\'ajuster ta route.',
    choices: [
      {
        id: 'c1',
        label: 'Lire les mouvements des défenseurs',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Lecture correcte.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvaise interprétation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Se fier au play-call',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'La lecture du coordinateur est correcte.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'La défense change sa couverture.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ajuster ta route selon le corner',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'Excellent ajustement.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -2, log: 'Le QB n\'attendait pas cette modification.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-59',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🏆',
    title: 'Le drive décisif',
    context: 'Il reste moins de deux minutes. Tu sais que tu seras probablement ciblé sur les dernières possessions.',
    choices: [
      {
        id: 'c1',
        label: 'Demander le ballon',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 6, log: 'Grosse réception décisive.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Incomplet.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Mauvaise action.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer simplement et rester disponible',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Tu contribues au drive.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Tu restes peu ciblé.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le big play à chaque snap',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'Réception spectaculaire.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'Aucune réception.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'Erreur de route.' }, { attribute: 'mental', delta: -2 }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Se sacrifier pour libérer un coéquipier',
        effects: [{ attribute: 'leadership', delta: 3 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Le coéquipier gagne un gros gain.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Le block ou la route échoue.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-60',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['WR'],
    emoji: '🚨',
    title: 'Dernière chance',
    context: 'Dernière action du match. Le QB envoie une passe dans la end zone. Plusieurs joueurs se battent pour le ballon.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le point le plus haut',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 8, log: 'Touchdown spectaculaire.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Passe incomplète.' }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3 }, { attribute: 'mental', delta: -1, log: 'Le défenseur gagne le duel.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le rebond',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Tu récupères un ballon dévié.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le ballon tombe au sol.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser son corps pour empêcher le défenseur',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Réception.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Incomplet.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -2, log: 'Pénalité offensive.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Se placer pour le rebond plutôt que jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Le ballon revient vers toi.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Aucun rebond exploitable.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-61',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🧱',
    title: 'Le trou disparaît',
    context: 'Tu reçois le ballon mais le gap prévu est immédiatement bouché par le defensive tackle.',
    choices: [
      {
        id: 'c1',
        label: 'Forcer le passage',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1, log: 'Tu gagnes quelques yards malgré tout.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu es stoppé.' }],
          },
          {
            weight: 15,
            effects: [{ log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper vers l\'extérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'Tu trouves un nouveau couloir.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le linebacker ferme également l\'extérieur.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Patienter derrière la ligne',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'Tu attends que le bloc se développe.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Tu attends trop longtemps.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-62',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '💥',
    title: 'Collision imminente',
    context: 'Tu viens de franchir la ligne mais un linebacker arrive directement sur toi.',
    choices: [
      {
        id: 'c1',
        label: 'Baisser l\'épaule',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Tu gagnes le contact.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Arrêt immédiat.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'Gros choc.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Tenter un juke',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Le linebacker mord.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Il reste patient.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: -2, log: 'Perte de balle.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir en touche',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges le ballon.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu perds quelques yards.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-63',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🛣️',
    title: 'Le boulevard',
    context: 'La ligne offensive crée un trou énorme au milieu.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer plein axe',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Gros gain.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gain moyen.' }, { exposureDelta: 2 }],
          },
          {
            weight: 10,
            effects: [{ exposureDelta: 2, log: 'Le safety intervient brutalement.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher un second trou',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Encore plus gros gain.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Tu ralentis trop.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Suivre exactement le bloc',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1, log: 'Gain propre.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu rates une opportunité plus importante.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-64',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🏃',
    title: 'Lire le bord',
    context: 'Tu reçois sur une outside zone et dois décider quand couper vers l\'intérieur.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer extérieur',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Tu atteins le edge.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le linebacker ferme l\'extérieur.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper derrière le bloc',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Grosse ouverture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu coupes trop tôt.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le dernier moment',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'Énorme lecture.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Tu es rattrapé derrière la ligne.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-65',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🎯',
    title: 'Screen pass',
    context: 'La défense blitz. Le QB laisse volontairement les pass rushers avancer avant de te lancer une screen.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer immédiatement l\'extérieur',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Gros gain.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le défenseur lit la screen.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Suivre les blocks',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Excellent gain.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu choisis le mauvais angle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le cutback',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Énorme espace.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'La défense ferme rapidement.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-66',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🛡️',
    title: 'Le blitz arrive',
    context: 'Tu dois rester en protection pour empêcher un linebacker de toucher le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le linebacker de face',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'Excellente protection.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu es repoussé.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -2, log: 'Sack.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attaquer avec l\'angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Protection réussie.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais angle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir en route',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 3, log: 'Le QB te trouve.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Le blitz arrive trop vite.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-67',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '😱',
    title: 'Le ballon échappe',
    context: 'Tu viens de perdre le contrôle du ballon après un gros contact.',
    choices: [
      {
        id: 'c1',
        label: 'Se jeter immédiatement dessus',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu récupères le ballon.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'Turnover.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Essayer de le récupérer en pleine course',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Récupération.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -3, log: 'La défense récupère.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sécuriser davantage le ballon à l\'avenir',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
        ],
      },
    ],
  },
  {
    id: 'scn-68',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🚨',
    title: 'Un yard pour le touchdown',
    context: 'Tu es à un yard de la end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Plonger au-dessus de la ligne',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Touchdown.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Stoppé.' }, { exposureDelta: 2 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'Gros contact.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Suivre le block intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Touchdown.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'La ligne défensive gagne le duel.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher l\'extérieur',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'Touchdown.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Stoppé.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Perte de yards.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-69',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🏈',
    title: '4th & 1',
    context: 'Toute la possession repose sur cette course.',
    choices: [
      {
        id: 'c1',
        label: 'Plonger plein centre',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1, log: 'First down.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Stoppé.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le gap extérieur',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'First down.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Défense trop rapide.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre derrière le fullback',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'First down.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Perte de temps.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-70',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '⚔️',
    title: 'One-on-one avec le safety',
    context: 'Tu traverses la deuxième ligne et te retrouves seul face au safety.',
    choices: [
      {
        id: 'c1',
        label: 'Juke',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Le safety mord.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -2, log: 'Fumble.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Aller au contact',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu gagnes quelques yards supplémentaires.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Arrêt.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir vers la touche',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges le ballon.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu laisses passer quelques yards.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-71',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🎭',
    title: 'La défense mord au blitz',
    context: 'La défense blitz lourdement. L\'attaque appelle une draw pour profiter de l\'agressivité des pass rushers.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer dès que possible',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Gros gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le trou n\'existe pas.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Patienter',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'Excellent gain.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2, log: 'La défense revient.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le cutback',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Gros gain.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle derrière la ligne.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-72',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🔀',
    title: 'Keep ou give ?',
    context: 'Sur une option, tu dois exécuter parfaitement ta trajectoire pour laisser au QB le choix de garder ou donner.',
    choices: [
      {
        id: 'c1',
        label: 'Maintenir la trajectoire prévue',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Excellente exécution.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Mauvaise lecture collective.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Accélérer vers le gap',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gain positif.' }, { exposureDelta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le défenseur lit l\'action.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ralentir pour laisser le QB décider',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'Bonne lecture.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Mauvaise synchronisation.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-73',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🚨',
    title: 'Le edge est ouvert',
    context: 'Tu vois un espace sur l\'extérieur dans la red zone.',
    choices: [
      {
        id: 'c1',
        label: 'Aller chercher le corner',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Touchdown.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le défenseur ferme.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper à l\'intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Gain important.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle immédiat.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Patienter derrière le block',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2, log: 'Ouverture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu es stoppé.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-74',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🛡️',
    title: 'Protéger le QB',
    context: 'Un linebacker vient directement vers le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le contact',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le QB a le temps de lancer.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Tu perds ton duel.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bloquer avec le bon angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Protection réussie.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'Sack.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir en route',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 1, log: 'Réception.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Le QB prend la pression.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-75',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🚀',
    title: '40 yards devant toi',
    context: 'Tu viens de franchir la ligne et disposes d\'un énorme espace devant toi.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer plein axe',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'Touchdown.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Gros gain.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le safety arrive.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le meilleur angle',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Énorme gain.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu ralentis trop.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Protéger le ballon avant tout',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'mental', delta: 1, log: 'Gros gain sécurisé.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Opportunité manquée.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-76',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🚨',
    title: 'Personne ne couvre',
    context: 'La défense envoie pratiquement tout le monde. Tu dois identifier ta priorité.',
    choices: [
      {
        id: 'c1',
        label: 'Bloquer le linebacker',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Le QB peut lancer.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Tu es dépassé.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sortir immédiatement en route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Réception énorme.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Le QB est sacké avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre puis sortir',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB gagne du temps.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Trop tard.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-77',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🥵',
    title: 'Les jambes brûlent',
    context: 'Après une longue série offensive, tu commences à ressentir la fatigue.',
    choices: [
      {
        id: 'c1',
        label: 'Demander quand même le ballon',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'Gros gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Gain moyen.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'physique', delta: -1, log: 'Grosse perte.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer plus intelligemment',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu optimises tes courses.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Baisse de rythme.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Demander une rotation',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'Récupération efficace.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Le coach estime que tu aurais dû rester.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-78',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🛡️',
    title: 'Derrière le FB',
    context: 'Le fullback ouvre un chemin devant toi.',
    choices: [
      {
        id: 'c1',
        label: 'Suivre parfaitement son block',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Gros gain.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu rates l\'ouverture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper derrière lui',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Énorme gain.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le cutback n\'existe pas.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Passer devant lui',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu surprends la défense.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tackle immédiat.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-79',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🧱',
    title: 'Tout le monde sait que tu vas courir',
    context: 'L\'équipe est sur la goal line. Toute la défense anticipe une course intérieure.',
    choices: [
      {
        id: 'c1',
        label: 'Frapper plein centre',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 3, log: 'Touchdown.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2, log: 'Stoppé.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bounce extérieur',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Touchdown.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Défense trop rapide.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sauter par-dessus la pile',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 5, log: 'Touchdown spectaculaire.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Stoppé.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2, log: 'Gros contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-80',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '⏱️',
    title: 'Il faut gagner du temps',
    context: 'Il reste moins de deux minutes et chaque yard compte.',
    choices: [
      {
        id: 'c1',
        label: 'Sortir rapidement en touche',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges le chrono.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Mauvaise lecture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le maximum de yards',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 4, log: 'Gros gain.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2, log: 'Gain moyen.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1 }, { attribute: 'mental', delta: -2, log: 'Fumble.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Se coucher après le first down',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Excellente gestion.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le coach voulait davantage de yards.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-81',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🧠',
    title: 'Il ne mord pas',
    context: 'Tu arrives face à un linebacker qui reste parfaitement équilibré et n\'anticipe aucun mouvement.',
    choices: [
      {
        id: 'c1',
        label: 'Faire quand même le juke',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'Le défenseur mord finalement.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tackle.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Aller au contact',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'Gain après contact.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Arrêt.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Changer de direction progressivement',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu gagnes l\'angle.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le défenseur reste avec toi.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-82',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🎯',
    title: 'Aligné dans le slot',
    context: 'Tu es exceptionnellement aligné comme receveur.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer verticalement',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Grosse séparation.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le CB gagne le duel.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Route courte',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Réception.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Défenseur ferme rapidement.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Utiliser un double move',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'Gros play.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Aucune séparation.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-83',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🔒',
    title: 'Deux défenseurs arrivent',
    context: 'Tu viens de recevoir le ballon et deux défenseurs arrivent de côtés opposés.',
    choices: [
      {
        id: 'c1',
        label: 'Couvrir le ballon à deux mains',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'technique', delta: 2, log: 'Ballon sécurisé.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 2, log: 'Perte de quelques yards.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer à chercher des yards',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gain supplémentaire.' }, { exposureDelta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Arrêt.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2 }, { attribute: 'mental', delta: -2, log: 'Fumble.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir en touche',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 90,
            effects: [{ attribute: 'mental', delta: 1, log: 'Ballon sécurisé.' }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu perds un yard.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-84',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '↩️',
    title: 'Le cutback est là',
    context: 'Tous les défenseurs ont suivi le mouvement initial. Un espace s\'ouvre derrière eux.',
    choices: [
      {
        id: 'c1',
        label: 'Couper immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Énorme gain.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu coupes trop tôt.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre encore',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'Touchdown potentiel.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le safety revient.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Rester sur le chemin initial',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Gain correct.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Perte de yards.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-85',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🧱',
    title: 'Personne ne l\'avait vu',
    context: 'Sur une passe, un defensive end se libère et se dirige directement vers le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Aller au contact',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'Block réussi.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Tu es dominé.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser son angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Block efficace.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le DE atteint quand même le QB.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sortir chercher le ballon',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'Réception.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Sack.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-86',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🔥',
    title: 'Oublier le fumble',
    context: 'Après une grosse erreur, le coach décide de te redonner immédiatement le ballon.',
    choices: [
      {
        id: 'c1',
        label: 'Demander le ballon',
        effects: [{ attribute: 'mental', delta: 3 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 3 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'Grosse réponse.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2, log: 'La pression reste présente.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer très prudemment',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Course sécurisée.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Manque d\'agressivité.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher immédiatement un gros play',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 5, log: 'Big play.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'Gain faible.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -3, log: 'Nouvelle erreur.' }, { attribute: 'technique', delta: -2 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-87',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '👊',
    title: 'Blindside',
    context: 'Tu ne vois pas immédiatement un défenseur arriver par derrière.',
    choices: [
      {
        id: 'c1',
        label: 'Protéger le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu évites le fumble.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1, log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer à courir',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gain supplémentaire.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'Gros contact.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2 }, { attribute: 'mental', delta: -2, log: 'Fumble.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Se coucher',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 90,
            effects: [{ attribute: 'mental', delta: 1, log: 'Ballon sécurisé.' }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'mental', delta: 1, log: 'Perte de yards.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-88',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🏆',
    title: 'Tu dois porter l\'attaque',
    context: 'Le QB connaît une mauvaise période. Le coach décide de te donner davantage de responsabilités.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre la responsabilité',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'Tu portes l\'attaque.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Production moyenne.' }, { attribute: 'mental', delta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Grosse erreur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester discipliné',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Efficacité régulière.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'L\'équipe manque de big plays.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le big play',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'Touchdown ou énorme gain.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'Gain faible.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -3, log: 'Perte de balle.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-89',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '⏱️',
    title: 'Il reste 30 secondes',
    context: 'L\'équipe est menée de quelques points. Tu reçois une passe courte avec beaucoup d\'espace.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher le maximum de yards',
        effects: [{ exposureDelta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 5, log: 'Énorme gain.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2, log: 'Gain moyen.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1 }, { attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -3, log: 'Fumble.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sortir en touche',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Excellente gestion du chrono.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu aurais pu gagner davantage.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le défenseur le plus proche pour gagner des yards',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'Gros gain après contact.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Stoppé.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Gros contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-90',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '⚔️',
    title: 'Le dernier défenseur',
    context: 'Tu arrives dans l\'espace face à un seul défenseur. C\'est toi qui décideras comment terminer l\'action.',
    choices: [
      {
        id: 'c1',
        label: 'Juke',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'Défenseur battu.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle.' }, { exposureDelta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1 }, { attribute: 'mental', delta: -2, log: 'Fumble.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Spin move',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Action spectaculaire.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Perte de contrôle.' }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Truck',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu gagnes le contact.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Arrêt.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'Gros contact.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Sortir en touche',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 90,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges le ballon.' }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu laisses quelques yards sur le terrain.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-91',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🧱',
    title: 'Le tackle recule',
    context: 'Dès le snap, tu remarques que le tackle offensif recule très rapidement en pass protection.',
    choices: [
      {
        id: 'c1',
        label: 'Speed rush extérieur',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'Tu prends l\'avantage.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le tackle ferme l\'angle.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Power rush intérieur',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'Tu gagnes le duel.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu es contenu.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Observer avant d\'attaquer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu identifies correctement le concept.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu laisses passer une opportunité.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-92',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '👥',
    title: 'Double team',
    context: 'Le tackle et le tight end se dirigent tous les deux vers toi.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer malgré le double block',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu crées quand même de la pression.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu es neutralisé.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Se désengager rapidement',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1, log: 'Tu libères le couloir.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu es bloqué.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Occuper les deux bloqueurs',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 1, log: 'Un coéquipier profite de l\'espace.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Tu es toi-même éliminé.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-93',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏃',
    title: 'Le RB attaque ton côté',
    context: 'Le RB se dirige vers l\'extérieur. Tu dois empêcher le coureur de gagner le edge.',
    choices: [
      {
        id: 'c1',
        label: 'Fermer immédiatement l\'extérieur',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Le RB est forcé à couper.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu es trop agressif.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attaquer le RB',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'Tackle réussi.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -2, log: 'Le RB passe derrière toi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Rester patient',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le RB gagne quelques yards.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-94',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '⚡',
    title: 'Le virage parfait',
    context: 'Tu tentes de contourner le tackle avec ta vitesse.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le coin',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Sack.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle fermé.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser un dip & rip',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'Excellent rush.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 3, log: 'Le tackle absorbe le mouvement.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Changer de plan au dernier moment',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'Sack ou pression.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2, log: 'Trop tard.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-95',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '💪',
    title: 'Le mur avance',
    context: 'Le tackle se positionne pour absorber un speed rush. Tu décides de changer complètement de plan.',
    choices: [
      {
        id: 'c1',
        label: 'Power rush',
        effects: [{ attribute: 'physique', delta: 3 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 3 }, { exposureDelta: 2, log: 'Pocket compressée.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 3, log: 'Le tackle tient.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Speed-to-power',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Avantage obtenu.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu perds ton équilibre.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Revenir au speed rush',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Le tackle est désormais déséquilibré.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'Il s\'adapte.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-96',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🎯',
    title: 'Le QB monte dans la poche',
    context: 'Tu contournes ton tackle mais le QB avance dans la poche.',
    choices: [
      {
        id: 'c1',
        label: 'Plonger vers le QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Sack.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le QB échappe au contact.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Fermer progressivement l\'espace',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Pression ou sack.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB lance avant.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Maintenir le contain',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB est forcé à rester dans la poche.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-97',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🔀',
    title: 'Keep ou give',
    context: 'Le QB peut conserver le ballon ou le donner au RB.',
    choices: [
      {
        id: 'c1',
        label: 'Crash sur le RB',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'RB stoppé.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'QB garde le ballon.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'Bonne lecture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB exploite l\'hésitation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Forcer le QB vers l\'extérieur',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Contain respecté.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Mauvais angle.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-98',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏈',
    title: 'Le ballon est là',
    context: 'Tu atteins le QB mais dois maintenant choisir comment terminer ton rush.',
    choices: [
      {
        id: 'c1',
        label: 'Frapper le bras',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'Fumble.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB protège le ballon.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sécuriser le sack',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'Sack.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB lâche le ballon avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Frapper le plus fort possible',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'Sack spectaculaire.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2, log: 'Sack normal.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le QB échappe au contact.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-99',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🎭',
    title: 'La screen',
    context: 'Tu rush vers le QB avant de comprendre qu\'une screen est en préparation.',
    choices: [
      {
        id: 'c1',
        label: 'Freiner immédiatement',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1, log: 'Tu lis correctement l\'action.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu es déjà trop loin.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer vers le QB',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Sack avant la screen.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2, log: 'Le RB reçoit le ballon.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Revenir vers le RB',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Tackle immédiat.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le RB échappe au contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-100',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🧱',
    title: 'Le TE arrive',
    context: 'Un tight end vient aider le tackle sur ton côté.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer les deux bloqueurs',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Pression créée.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'Neutralisé.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Passer sous le TE',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Tu te libères.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu perds ton équilibre.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Occuper le TE pour libérer le linebacker',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Un coéquipier réalise le play.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-101',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🔄',
    title: 'TEX stunt',
    context: 'Toi et le defensive tackle devez échanger vos trajectoires pour perturber la ligne offensive.',
    choices: [
      {
        id: 'c1',
        label: 'Exécuter exactement le timing',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 3, log: 'La ligne lit le stunt.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Accélérer son mouvement',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Énorme avantage.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Le stunt se désynchronise.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ralentir pour laisser passer le DT',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'Le DT profite du stunt.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-102',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏃‍♂️',
    title: 'Bootleg',
    context: 'Le QB sort de la poche vers ton côté.',
    choices: [
      {
        id: 'c1',
        label: 'Poursuivre le QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Sack.' }, { exposureDelta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le QB lance en mouvement.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Maintenir le contain',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB est forcé à lancer rapidement.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer le point de lancer',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB trouve son receveur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-103',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏃',
    title: 'Le QB s\'échappe',
    context: 'Le QB quitte la poche et court vers l\'extérieur.',
    choices: [
      {
        id: 'c1',
        label: 'Poursuivre à pleine vitesse',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'Tackle.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le QB gagne l\'angle.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper son angle',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB accélère.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Forcer le QB à revenir intérieur',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Un coéquipier termine le tackle.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-104',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🔥',
    title: 'Third & long',
    context: '3rd & 10. La défense a besoin d\'une pression.',
    choices: [
      {
        id: 'c1',
        label: 'Tout donner en speed rush',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Sack.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'Pression.' }, { attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le tackle tient.' }, { attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser un counter move',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 3, log: 'Le QB lance avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Rester discipliné sur le contain',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB ne peut pas sortir de la poche.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-105',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '💥',
    title: 'Le RB vient droit sur toi',
    context: 'Le RB attaque directement ton gap intérieur.',
    choices: [
      {
        id: 'c1',
        label: 'Frapper le RB',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'Tackle réussi.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le RB gagne après contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire les blocks',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'Bonne lecture.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'Hésitation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer le backfield',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Tackle derrière la ligne.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le RB passe.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-106',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '👀',
    title: 'Le faux départ du QB',
    context: 'Le QB utilise des hard counts pour essayer de faire réagir la ligne défensive.',
    choices: [
      {
        id: 'c1',
        label: 'Partir sur le mouvement',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le tackle fait un faux départ aussi.' }],
          },
          {
            weight: 80,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'Pénalité.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester parfaitement immobile',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le snap arrive ensuite : aucun malus.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2, log: 'L\'attaque change son rythme.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lire les habitudes du QB',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Meilleure anticipation au snap suivant.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-107',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '⚡',
    title: 'Il est déséquilibré',
    context: 'Après deux rushs consécutifs, le tackle semble avoir du mal à suivre ta vitesse.',
    choices: [
      {
        id: 'c1',
        label: 'Refaire le speed rush',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'Pression.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le tackle s\'est adapté.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Counter intérieur',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 3, log: 'Énorme avantage.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 3, log: 'Le tackle ferme le gap.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Power rush',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'Succès.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le tackle absorbe.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-108',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏆',
    title: 'Le moment décisif',
    context: 'Dernière possession adverse. Un sack pourrait pratiquement assurer la victoire.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher le sack',
        effects: [{ exposureDelta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 7, log: 'Sack.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'Pression.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le QB s\'échappe.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester discipliné',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 2, log: 'Le QB est contenu.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2, log: 'Il trouve une solution.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le bon moment',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'Sack ou pression.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le ballon part avant.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-109',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '👊',
    title: 'Punch out',
    context: 'Tu arrives sur le RB après une course et vois le ballon exposé.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher le fumble',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'Fumble.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le RB protège le ballon.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Sécuriser le tackle',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'Tackle réussi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Frapper très fort',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'Fumble.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tackle.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le RB casse le contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-110',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🔀',
    title: 'Le RB traverse ton côté',
    context: 'Sur une zone read, tu dois choisir entre fermer le RB ou respecter le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Crasher le RB',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'RB stoppé.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'QB conserve et gagne l\'extérieur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire le mesh',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2, log: 'Bonne décision.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Hésitation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Forcer le QB intérieur',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Le QB est contenu.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-111',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '👊',
    title: 'Ses mains sont trop hautes',
    context: 'Tu remarques que le tackle attaque systématiquement avec ses mains très hautes.',
    choices: [
      {
        id: 'c1',
        label: 'Swipe ses mains',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'Tu te libères.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 3, log: 'Le tackle corrige.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rip move',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Avantage.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le tackle absorbe.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Power through',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2, log: 'Succès.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2, log: 'Neutralisé.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-112',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🚧',
    title: 'Ne laisse pas sortir le QB',
    context: 'Le coordinateur défensif insiste : tu ne dois surtout pas perdre le contain.',
    choices: [
      {
        id: 'c1',
        label: 'Rester large',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'QB contenu.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu es trop large pour participer au play.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attaquer le QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Pression.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'QB sort de la poche.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le QB',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Tackle.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'QB trouve une passe.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-113',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🌀',
    title: 'Le gap s\'ouvre',
    context: 'Tu vois un espace intérieur apparaître entre le guard et le tackle.',
    choices: [
      {
        id: 'c1',
        label: 'Plonger intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le guard ferme.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer extérieur',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1, log: 'Tu conserves ton rush.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le stunt',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Excellente coordination avec le DT.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-114',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '⏳',
    title: 'Le ballon ne part pas',
    context: 'Le QB attend longtemps avant de lancer.',
    choices: [
      {
        id: 'c1',
        label: 'Accélérer le rush',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 4, log: 'Sack.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le tackle tient.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Changer de move',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le QB lance avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Maintenir le contain',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'Le QB reste enfermé.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-115',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🛡️',
    title: 'Petit joueur, gros impact',
    context: 'Le RB reste en protection et vient te bloquer directement.',
    choices: [
      {
        id: 'c1',
        label: 'L\'écraser',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1, log: 'Tu le repousses.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu perds du temps.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser les mains',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'Tu te libères rapidement.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Contourner le RB',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Pression.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Perte de temps.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-116',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🎯',
    title: 'Passe forcée',
    context: 'Tu ne touches pas le QB mais ta pression l\'oblige à lancer précipitamment.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer à poursuivre',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Sack potentiel.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le QB lance.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lever les bras',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'Passe déviée.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Le ballon passe.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'Gros impact.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le QB lance avant le contact.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-117',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🎭',
    title: 'Le faux handoff',
    context: 'Le QB simule une remise au RB avant de reculer pour lancer.',
    choices: [
      {
        id: 'c1',
        label: 'Mordre sur le run',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le RB est réellement porteur.' }],
          },
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Play-action.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'Bonne lecture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'Légère hésitation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer immédiatement le QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Pression.' }, { exposureDelta: 1 }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le QB lance derrière toi.' }, { exposureDelta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-118',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏈',
    title: 'Le QB est à portée',
    context: 'Tu as enfin battu ton bloqueur et n\'as plus qu\'un pas à faire pour atteindre le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Sécuriser le sack',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'Sack.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le QB échappe au contact.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le strip',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Fumble.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'Sack.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 2, log: 'QB échappe au rush.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Frapper violemment',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'Sack spectaculaire.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Sack normal.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 2, log: 'QB s\'échappe.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-119',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🥵',
    title: 'Les jambes sont lourdes',
    context: 'Après avoir joué presque tout le match, tu commences à ressentir la fatigue.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer à mettre la pression',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'Gros play.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Rendement normal.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1, log: 'Fatigue.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer plus intelligemment',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu compenses ta fatigue par ton placement.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Demander une rotation',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'Récupération utile.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Le coach considère que l\'équipe a besoin de toi.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-120',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['EDGE'],
    emoji: '🏆',
    title: 'Win the game',
    context: 'Dernier drive adverse. Un stop défensif mettrait quasiment fin au match. Tu sais que ton duel avec le tackle peut décider de la rencontre.',
    choices: [
      {
        id: 'c1',
        label: 'Tout donner sur le speed rush',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 7, log: 'Sack.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Pression.' }, { exposureDelta: 2 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'Le tackle tient.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Utiliser son meilleur counter',
        effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 4, log: 'Pression ou sack.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 3, log: 'Le tackle anticipe le mouvement.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer contain et faire confiance à la défense',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 3 }, { exposureDelta: 2, log: 'Le QB reste contenu et la défense obtient le stop.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 2 }, { exposureDelta: -2, log: 'Le QB trouve une solution.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Chercher le strip-sack',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'Fumble.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Sack.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'Le QB échappe au rush.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-121',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '💥',
    title: 'Attaque du gap',
    context: 'Le RB attaque un gap intérieur et tu dois décider à quel moment descendre.',
    choices: [
      {
        id: 'c1',
        label: 'Descendre immédiatement',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'Stop rapide.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Le RB coupe derrière toi.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire le RB avant de fermer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1, log: 'Bonne lecture.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Hésitation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer directement le backfield',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'TFL.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'Mauvais angle.' }, { exposureDelta: -2 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-122',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🎯',
    title: 'Release du Tight End',
    context: 'Le TE commence par bloquer avant de partir soudainement en route.',
    choices: [
      {
        id: 'c1',
        label: 'Le suivre immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture réussie.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Le QB avait prévu une autre cible.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre pour confirmer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Le TE gagne trop de terrain.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe déviée.' }, { exposureDelta: 2 }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -1, log: 'Réception.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-123',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🎭',
    title: 'Ne mords pas',
    context: 'Le QB simule une course pour te faire descendre.',
    choices: [
      {
        id: 'c1',
        label: 'Mordre sur le run',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1, log: 'Course réelle.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Play-action.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder les yeux sur le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Retard sur la course.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre une seconde puis descendre',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Lecture parfaite.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Tu arrives trop tard.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-124',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🏃',
    title: 'Crossing Route',
    context: 'Un WR traverse tout le terrain derrière les linebackers.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture parfaite.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'Séparation.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Le passer au linebacker',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Bonne communication.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -3, log: 'Le linebacker ne comprend pas.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 5, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -4, log: 'Le QB trouve le WR.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-125',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '⚡',
    title: 'Blitz du Strong Safety',
    context: 'Le coordinateur défensif décide de t\'envoyer sur le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Partir immédiatement',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Sack.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -1, log: 'Le RB absorbe le blitz.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre le mouvement du RB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'Meilleur timing.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Le QB lance avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Feinter le blitz',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2, log: 'QB perturbé.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Le QB identifie la couverture.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-126',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '👀',
    title: 'Le regard du QB',
    context: 'Le QB semble volontairement te regarder avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Ne rien montrer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB hésite.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2, log: 'Il identifie quand même la couverture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Montrer une couverture puis changer',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'QB trompé.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: -1, log: 'Mauvaise rotation.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Descendre dans la box',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Le QB change son play.' }, { exposureDelta: 1 }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'Play-action.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-127',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🚀',
    title: 'La bombe',
    context: 'Une longue passe est lancée vers ton côté du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le receveur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture réussie.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe déviée.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: -2, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sécuriser le tackle',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'Gain limité.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Grosse réception après contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-128',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🧱',
    title: 'Dernier défenseur',
    context: 'Le RB a dépassé toute la défense. Tu es le dernier homme.',
    choices: [
      {
        id: 'c1',
        label: 'Frapper fort',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'Gros tackle.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le RB te contourne.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre l\'angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle réussi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le strip',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 6, log: 'Fumble.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tackle.' }, { exposureDelta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'RB échappe au tackle.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-129',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🕵️',
    title: 'Robber Safety',
    context: 'Tu joues derrière les linebackers et peux couper une route intermédiaire.',
    choices: [
      {
        id: 'c1',
        label: 'Lire les yeux du QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'Interception ou déviation.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le QB te manipule.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre la route',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture réussie.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'Route trop rapide.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sauter la route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2 }, { attribute: 'technique', delta: -2, log: 'Mauvaise lecture.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-130',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🏃‍♂️',
    title: 'Le slot part profond',
    context: 'Le receveur intérieur attaque verticalement.',
    choices: [
      {
        id: 'c1',
        label: 'Coller au WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Bonne couverture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Le WR gagne la profondeur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer par-dessus',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Passe difficile.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Passe sous ta zone.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer le ballon',
        effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'Interception.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2, log: 'Réception.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-131',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🎯',
    title: 'Le RB s\'échappe',
    context: 'Le RB sort du backfield puis attaque la profondeur.',
    choices: [
      {
        id: 'c1',
        label: 'Le prendre immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture réussie.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre pour lire le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'RB prend trop de profondeur.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer le ballon',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 6, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2 }, { attribute: 'technique', delta: -1, log: 'Réception.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-132',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '📢',
    title: 'Check défensif',
    context: 'L\'attaque change de formation juste avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Réorganiser toute la défense',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Tout le monde est correctement placé.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Se concentrer sur son assignment',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tout va bien.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'Un coéquipier est mal placé.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ne rien changer',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1 }, { exposureDelta: -3, log: 'L\'attaque exploite l\'ajustement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-133',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🚨',
    title: 'Dos à l\'end zone',
    context: 'L\'attaque est à deux yards de l\'end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Descendre dans la box',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'Stop.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -4, log: 'Play-action.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester en couverture',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Passe incomplète.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -5, log: 'Touchdown.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer ultra-agressif',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 6, log: 'Gros stop.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -3 }, { attribute: 'technique', delta: -2, log: 'Mauvais angle.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-134',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🏃',
    title: 'Le QB décolle',
    context: 'Le QB abandonne sa lecture et attaque le terrain au sol.',
    choices: [
      {
        id: 'c1',
        label: 'Monter immédiatement',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tackle.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'QB te contourne.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder son angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'QB contenu.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'Gain moyen.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le gros hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'Gros hit.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -1, log: 'QB échappe au contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-135',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '⏱️',
    title: 'Blitz retardé',
    context: 'Tu dois rester en couverture avant de déclencher ton blitz.',
    choices: [
      {
        id: 'c1',
        label: 'Blitz immédiatement',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'Pression.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Protection parfaitement préparée.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre le RB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'Excellent timing.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'QB lance avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Finalement rester en couverture',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu évites une mauvaise situation.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Le coordinateur te reproche ton hésitation.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-136',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🏃‍♂️',
    title: 'Course extérieure',
    context: 'Le RB part vers la sideline avec plusieurs bloqueurs.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le premier block',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu tiens ton gap.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Block réussi.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Contourner les bloqueurs',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Angle parfait.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Tu perds ton angle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le RB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'RB forcé vers l\'intérieur.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Il gagne l\'extérieur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-137',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🔄',
    title: 'Motion pré-snap',
    context: 'Un WR traverse la formation avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Le suivre',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Bonne décision.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'La motion révèle ta couverture.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Le laisser passer',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Rotation réussie.' }],
          },
          {
            weight: 30,
            effects: [{ log: 'Mauvaise communication.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Changer totalement de couverture',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'Attaque perturbée.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: -4, log: 'Défense désorganisée.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-138',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🦅',
    title: 'Sauter la route',
    context: 'Tu penses avoir compris exactement où le QB veut lancer.',
    choices: [
      {
        id: 'c1',
        label: 'Sauter la route',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -1, log: 'Mauvais diagnostic.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester discipliné',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'Couverture parfaite.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Réception devant toi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre une confirmation',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Bonne décision.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'Fenêtre d\'interception disparue.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-139',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🏈',
    title: 'Ballon libre',
    context: 'Le RB vient de perdre le ballon au milieu du trafic.',
    choices: [
      {
        id: 'c1',
        label: 'Se jeter dessus',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Récupération.' }],
          },
          {
            weight: 15,
            effects: [{ log: 'Collision.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher à retourner le ballon',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 7, log: 'Gros retour.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Récupération simple.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -3, log: 'Tu perds le ballon à ton tour.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sécuriser la zone',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Un coéquipier récupère.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-140',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🧱',
    title: 'Le bloqueur inattendu',
    context: 'Le WR vient directement te chercher sur une course extérieure.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le choc',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu gagnes le duel.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Tu es repoussé.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Éviter le block',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Bon angle.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Tu contournes trop largement.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le RB derrière lui',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu fermes l\'espace.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le RB accélère avant ton contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-141',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🛡️',
    title: 'Moitié profonde',
    context: 'Tu es responsable d\'une moitié profonde du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Rester profond',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Aucune grosse menace.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -1, log: 'Passe courte réussie.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Descendre sur le slot',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe courte stoppée.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -5, log: 'Attaque profonde derrière toi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lire le QB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Interception ou passe déviée.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Le QB t\'attire hors position.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-142',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🚨',
    title: 'Fenêtre réduite',
    context: 'L\'attaque entre dans la red zone.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer très agressif',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 6, log: 'Gros stop.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2, log: 'Tu te fais manipuler.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -5, log: 'Touchdown dans ta zone.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Protéger l\'end zone',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe contestée.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Petite réception mais gain contrôlé.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-143',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '📢',
    title: 'Qui prend qui ?',
    context: 'Deux receveurs croisent leurs routes et la couverture nécessite un switch.',
    choices: [
      {
        id: 'c1',
        label: 'Annoncer le switch',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Couverture parfaite.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Mauvaise compréhension.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder son assignment',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Réussite.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'Les deux défenseurs couvrent le même joueur.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Improviser',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'Excellente adaptation.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: -3, log: 'Confusion.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-144',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🎭',
    title: 'Screen immédiat',
    context: 'Le WR reçoit immédiatement derrière la ligne avec des bloqueurs devant lui.',
    choices: [
      {
        id: 'c1',
        label: 'Descendre immédiatement',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tackle pour faible gain.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Mauvais angle.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire les blocks',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Le WR gagne beaucoup de terrain.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le gros hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'Gros hit.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le WR l\'évite.' }, { exposureDelta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-145',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🎭',
    title: 'Le faux lancer',
    context: 'Le QB simule un lancer profond pour te faire avancer.',
    choices: [
      {
        id: 'c1',
        label: 'Mordre',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Le lancer était réel.' }],
          },
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Tu quittes ta zone.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester patient',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le QB ne gagne rien.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Tu es trop prudent.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Feinter à ton tour',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le QB hésite.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'Il profite de ton mouvement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-146',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🔥',
    title: 'Quatrième tentative',
    context: '4th down. L\'attaque doit absolument gagner les yards nécessaires.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer la ligne',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'Stop.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'L\'attaque trouve le trou.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire le QB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'Turnover on downs.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'Passe complétée.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticiper la route courte',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'Stop immédiat.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais diagnostic.' }, { exposureDelta: -3 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-147',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '⏱️',
    title: 'Tempo maximal',
    context: 'L\'attaque enchaîne les snaps et cherche à remonter rapidement le terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer conservateur',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Attaque ralentie.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Elle exploite l\'espace.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre des risques',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'Passe défendue.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -3, log: 'Gros gain offensif.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Organiser la défense',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Défense organisée.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Mauvaise communication.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-148',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🙏',
    title: 'Dernière prière',
    context: 'Dernier snap du match. Plusieurs receveurs vont attaquer la end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 8, log: 'Interception.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'Déviation.' }, { exposureDelta: 2 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le receveur',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'Passe incomplète.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -5, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Organiser le tip',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Défense récupère le ballon.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Cafouillage.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-149',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '💥',
    title: 'Collision',
    context: 'Un WR vient de réceptionner et traverse le milieu du terrain. Tu arrives lancé.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher le gros hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'Énorme impact.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'Le WR absorbe le contact.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Tackle propre',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle réussi.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais angle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le fumble',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'Fumble.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tackle.' }, { exposureDelta: 2 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Le WR échappe au contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-150',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['SS'],
    emoji: '🏆',
    title: 'Make the Play',
    context: 'Dernier drive. Le match se joue sur cette action. Tu dois décider si tu prends le risque de faire la différence ou si tu fais confiance au système.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le héros',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 8, log: 'Interception.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'Gros play défensif.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -4 }, { attribute: 'mental', delta: -2, log: 'Mauvais choix.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Faire confiance au système',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'Stop défensif.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: -3, log: 'L\'attaque trouve une faille.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lire le QB jusqu\'au bout',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'Passe déviée/interception.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1, log: 'Le QB te manipule.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Descendre pour stopper la course',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'Gros stop.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -5, log: 'Play-action.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-151',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🥊',
    title: 'Press dès le snap',
    context: 'Le WR est aligné juste devant toi. Le coordinateur te demande de le presser à la ligne.',
    choices: [
      {
        id: 'c1',
        label: 'Frapper immédiatement',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1, log: 'Le WR est perturbé.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'Il esquive ton contact.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre son premier mouvement',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu contrôles son release.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Il gagne rapidement l\'extérieur.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer très agressif',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'Gros stop.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -1 }, { attribute: 'technique', delta: -2, log: 'Faute ou mauvais placement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-152',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🏃',
    title: 'Le WR attaque l\'extérieur',
    context: 'Le WR utilise un release extérieur très rapide.',
    choices: [
      {
        id: 'c1',
        label: 'Lui fermer la porte',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu gardes l\'extérieur.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Il casse à l\'intérieur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Le laisser partir',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu récupères ta position.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Il crée trop de séparation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Accrocher le WR',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Contact non signalé.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Penalty défensif.' }, { exposureDelta: -3 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-153',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '↪️',
    title: 'Il coupe dedans',
    context: 'Le WR attaque immédiatement l\'intérieur après le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Fermer l\'intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Bonne couverture.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'Il casse à l\'extérieur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lui donner l\'intérieur',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu récupères.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Le WR gagne immédiatement la séparation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticiper le cut',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 6, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -1, log: 'Mauvais diagnostic.' }, { exposureDelta: -3 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-154',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🎯',
    title: 'Back Shoulder Fade',
    context: 'Le WR part en profondeur et le QB peut lancer derrière son épaule.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe incomplète.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Passe déviée.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticiper le retour',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'Excellente lecture.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -4, log: 'Le WR gagne le duel.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-155',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🎭',
    title: 'Double Move',
    context: 'Le WR montre une route courte avant d\'exploser en profondeur.',
    choices: [
      {
        id: 'c1',
        label: 'Mordre sur la première route',
        effects: [{ attribute: 'technique', delta: -1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: -1 }, { exposureDelta: -5, log: 'Le WR te dépasse.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'Tu récupères.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester patient',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'Couverture réussie.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Le WR trouve une fenêtre courte.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer agressif sur le break',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -3, log: 'Tu es battu.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-156',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🚀',
    title: 'Bataille dans les airs',
    context: 'Le QB lance une bombe vers ton côté du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe incomplète.' }, { exposureDelta: 2 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le WR',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu empêches la réception.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Catch contesté.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sécuriser le tackle',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'Réception limitée.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Grosse réception.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-157',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🔄',
    title: 'Press puis recul',
    context: 'Tu dois donner l\'impression d\'être en press avant de reculer immédiatement après le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Reculer très vite',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture parfaite.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'Route courte dans ton dos.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre le release',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'Lecture réussie.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Retard.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Feinter un blitz',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1, log: 'QB perturbé.' }, { exposureDelta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'Mauvais timing.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-158',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '⚡',
    title: 'Slant rapide',
    context: 'Le WR attaque immédiatement l\'intérieur sur une slant.',
    choices: [
      {
        id: 'c1',
        label: 'Couper la trajectoire',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe déviée.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'Le WR te bat.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer derrière lui',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Réception courte.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Grosse séparation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sauter la route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -3 }, { attribute: 'technique', delta: -2, log: 'Mauvais diagnostic.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-159',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🧱',
    title: 'Screen au WR',
    context: 'Le WR reçoit immédiatement derrière la ligne.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer immédiatement',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tackle rapide.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'Mauvais angle.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lire les blocks',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne lecture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Le WR trouve un trou.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher le fumble',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 7, log: 'Fumble.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Tackle.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -2, log: 'WR échappe au contact.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-160',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🛡️',
    title: 'Cover 3',
    context: 'Tu dois protéger une profonde portion extérieure du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Rester profond',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Bonne couverture.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -1, log: 'Réception courte.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Descendre sur le WR court',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'Stop.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -5, log: 'Route profonde derrière toi.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lire le QB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'Passe déviée/interception.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Mauvaise lecture.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-161',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🧩',
    title: 'Pick légal ?',
    context: 'Deux WR croisent leurs routes pour créer une séparation.',
    choices: [
      {
        id: 'c1',
        label: 'Passer au-dessus',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Couverture conservée.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'Collision.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Passer dessous',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu récupères.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'WR libre.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Forcer le contact',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'WR perturbé.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Penalty défensif.' }, { exposureDelta: -3 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-162',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '📢',
    title: 'Le Safety te couvre',
    context: 'Le WR part en profondeur et tu dois savoir jusqu\'où le suivre avant de passer la responsabilité au safety.',
    choices: [
      {
        id: 'c1',
        label: 'Communiquer clairement',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Couverture parfaite.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Mauvaise compréhension.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder le WR',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Réussite.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'Autre WR libre.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Faire confiance au Safety',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Switch réussi.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'Mauvaise coordination.' }, { exposureDelta: -4 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-163',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🚨',
    title: 'Fade vers la end zone',
    context: 'Le WR attaque le coin de la end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Incompletion.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'Touchdown.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le WR',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1, log: 'Incompletion.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -5, log: 'Touchdown.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Prendre l\'intérieur',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Couverture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Passe vers l\'extérieur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-164',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '💥',
    title: 'Open Field Tackle',
    context: 'Le RB vient de franchir la ligne et arrive lancé vers toi.',
    choices: [
      {
        id: 'c1',
        label: 'Gros hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'Gros stop.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'RB te contourne.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Tackle technique',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tackle réussi.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvais angle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le support',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'RB contenu.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Gros gain.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-165',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '⚡',
    title: 'Corner Blitz',
    context: 'Le coordinateur te demande de blitzer depuis l\'extérieur.',
    choices: [
      {
        id: 'c1',
        label: 'Partir plein gaz',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 5, log: 'Sack.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -1, log: 'RB te bloque.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre le snap parfait',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Pression.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'QB lance avant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Feinter le blitz',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2, log: 'Protection désorganisée.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'QB identifie le piège.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-166',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '↗️',
    title: 'Out Route',
    context: 'Le WR attaque une route extérieure vers la sideline.',
    choices: [
      {
        id: 'c1',
        label: 'Anticiper le break',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Mauvais timing.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Suivre jusqu\'au break',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'Couverture correcte.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jouer au-dessus',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu empêches la profondeur.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Réception courte.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-167',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '↩️',
    title: 'Il revient vers le ballon',
    context: 'Le WR attaque verticalement puis revient brutalement vers le QB.',
    choices: [
      {
        id: 'c1',
        label: 'Anticiper le retour',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'WR te surprend.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester derrière',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Couverture correcte.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Passe complétée.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Presser le WR',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'WR perturbé.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2, log: 'Faute.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-168',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🧠',
    title: 'Route option',
    context: 'Le WR choisit sa route selon ton placement.',
    choices: [
      {
        id: 'c1',
        label: 'Lui donner l\'extérieur',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu contrôles la situation.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Il coupe intérieur.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Lui fermer l\'intérieur',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Route forcée vers la sideline.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'WR gagne l\'extérieur.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticiper son choix',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Mauvaise lecture.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-169',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🏃‍♂️',
    title: 'Le QB sort de la poche',
    context: 'Le QB commence à courir vers ton côté.',
    choices: [
      {
        id: 'c1',
        label: 'Continuer à couvrir',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu forces le QB à courir.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'Il gagne beaucoup de terrain.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Abandonner le WR et attaquer',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tackle.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -4, log: 'QB te contourne.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Contenir le QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'QB contenu.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Grosse course.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-170',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🥊',
    title: 'Le duel physique',
    context: 'Le WR est beaucoup plus puissant physiquement et cherche le contact à chaque route.',
    choices: [
      {
        id: 'c1',
        label: 'Répondre au contact',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu imposes ton duel.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'Il te repousse.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer avec les pieds',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Tu évites le duel physique.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Le provoquer verbalement',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 1, log: 'Il perd son calme.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: -2 }, { attribute: 'mental', delta: -1, log: 'Tu prends une pénalité.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-171',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '⏱️',
    title: 'No Huddle',
    context: 'L\'attaque joue sans huddle et enchaîne les snaps.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer conservateur',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Défense stable.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Gros gain offensif.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre des risques',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -3, log: 'Erreur de couverture.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Organiser les DB',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Communication parfaite.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Confusion.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-172',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🔄',
    title: 'Switch intérieur',
    context: 'Deux receveurs intérieurs croisent leurs routes.',
    choices: [
      {
        id: 'c1',
        label: 'Communiquer avec le Safety',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Couverture réussie.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: -3, log: 'Mauvaise compréhension.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Suivre ton WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Bonne couverture.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: -1, log: 'Collision avec un autre défenseur.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticiper le switch',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 4, log: 'Interception.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Mauvais timing.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-173',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🚨',
    title: 'Dernière fenêtre',
    context: '3rd & Goal. Le WR est isolé contre toi.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 8, log: 'Interception.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Incompletion.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'Touchdown.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le corps',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'Réception empêchée.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Pénalité.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Forcer le WR vers la sideline',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Zone réduite.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -5, log: 'WR gagne l\'intérieur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-174',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🏃',
    title: 'Le retourneur s\'échappe',
    context: 'Sur un punt, le retourneur trouve un trou et commence à accélérer.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre l\'angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Retour contenu.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Chercher le gros hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'Gros tackle.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'Retourneur te contourne.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attendre le support',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'Retour contenu.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -4, log: 'Gros retour.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-175',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🦅',
    title: 'La balle flottante',
    context: 'Le QB lance une passe flottante vers ton côté.',
    choices: [
      {
        id: 'c1',
        label: 'Attaquer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 8, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe incomplète ou réception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le WR',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Incompletion.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Sécuriser le tackle',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1, log: 'Gain limité.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Grosse réception.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-176',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🔥',
    title: 'Un contre un',
    context: 'Dernier drive. Tu es isolé en man coverage contre le meilleur WR adverse.',
    choices: [
      {
        id: 'c1',
        label: 'Press agressif',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'WR totalement neutralisé.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'WR gagne son release.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Off coverage',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu gardes la profondeur.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Réception facile.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Tenter de lire le QB',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 6, log: 'Interception.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'Tu quittes légèrement ton assignment.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-177',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🟨',
    title: 'Le drapeau jaune',
    context: 'Tu viens de faire un gros contact sur un WR. L\'arbitre hésite à sortir le flag.',
    choices: [
      {
        id: 'c1',
        label: 'Contester calmement',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Aucune conséquence.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'L\'arbitre maintient sa décision.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Continuer à argumenter',
        effects: [{ attribute: 'leadership', delta: -1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Tu obtiens une explication.' }, { exposureDelta: 1 }],
          },
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: -1 }, { exposureDelta: -1, log: 'Tu agaces l\'arbitre.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Passer à l\'action suivante',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu récupères immédiatement mentalement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-178',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '⭐',
    title: 'Face au meilleur',
    context: 'Le meilleur receveur adverse est aligné face à toi depuis plusieurs drives.',
    choices: [
      {
        id: 'c1',
        label: 'Le jouer physiquement',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2, log: 'Tu prends l\'ascendant.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Il gagne le duel.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Étudier ses habitudes',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu anticipes mieux ses routes.' }, { attribute: 'technique', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher l\'interception',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 8, log: 'Interception.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -3, log: 'Il exploite ton agressivité.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-179',
    theme: 'FOOTBALL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🚨',
    title: 'Broken Coverage',
    context: 'Après une motion, la défense semble désorganisée juste avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Replacer tout le monde',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'Défense parfaitement replacée.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Trop de changements.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Se concentrer uniquement sur son assignment',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'Ton duel est gagné.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Un autre défenseur est perdu.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Improviser',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'Excellente adaptation.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'Grosse erreur collective.' }, { exposureDelta: -4 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-180',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['CB'],
    emoji: '🏆',
    title: 'One-on-One',
    context: 'Dernière action du match. Un seul duel entre toi et le WR peut décider de l\'issue.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer le ballon',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 9, log: 'Interception.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'Passe incomplète.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -5, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jouer le WR',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'Couverture réussie.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -5, log: 'Réception.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Faire confiance au Safety',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Couverture coordonnée.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -5, log: 'Mauvaise communication.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Prendre le risque sur la route',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 10, log: 'Interception.' }],
          },
          {
            weight: 75,
            effects: [{ exposureDelta: -3 }, { attribute: 'technique', delta: -2, log: 'Mauvais diagnostic.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-181',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    emoji: '🎉',
    title: 'La fête du vendredi soir',
    context: 'Après un gros match, tes amis organisent une soirée. Tu as entraînement tôt demain.',
    choices: [
      {
        id: 'c1',
        label: 'Y aller quand même',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1, log: 'Bonne soirée.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2 }, { attribute: 'physique', delta: -2, log: 'Tu arrives épuisé à l\'entraînement.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester chez toi',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: -1, log: 'Tes amis te reprochent ton absence.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Passer rapidement',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 1, log: 'Tu profites de la soirée sans conséquence.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-182',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    emoji: '👥',
    title: 'Invitation dans le groupe',
    context: 'Les élèves les plus populaires commencent à t\'intégrer à leur groupe.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 65,
            effects: [{ exposureDelta: 3, log: 'Ta popularité augmente.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'Tu te retrouves entraîné dans des histoires.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester avec tes amis',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tes relations restent solides.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Tu rates une opportunité sociale.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-183',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '❤️',
    title: 'Ton premier vrai couple',
    context: 'Quelqu\'un commence à prendre une place importante dans ta vie.',
    choices: [
      {
        id: 'c1',
        label: 'T\'investir complètement',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2, log: 'Relation très stable.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -1, log: 'Séparation difficile.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder un équilibre',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'Relation saine.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Prioriser le football',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'La relation tient.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'Rupture.' }, { exposureDelta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-184',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '📱',
    title: 'Ta première vidéo devient virale',
    context: 'Une vidéo de toi circule énormément sur les réseaux.',
    choices: [
      {
        id: 'c1',
        label: 'Profiter du buzz',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 4, log: 'Image positive.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Controverse.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ne rien faire',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le buzz disparaît rapidement.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Publier davantage',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 3, log: 'Énorme progression.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'Tu commences à être critiqué.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-185',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    emoji: '😤',
    title: 'Le rival',
    context: 'Un autre joueur de ton lycée devient ton rival sur et en dehors du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Entrer dans le jeu',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Rivalité saine.' }, { exposureDelta: 2 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Conflit.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'L\'ignorer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Le conflit disparaît.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Le confronter',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Respect mutuel.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'Conflit aggravé.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-186',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    emoji: '🕺',
    title: 'Prom Night',
    context: 'Le grand bal du lycée approche.',
    choices: [
      {
        id: 'c1',
        label: 'Y aller avec tes amis',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Y aller avec ton/ta partenaire',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'Soirée mémorable.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'Petite tension.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ne pas y aller',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Tu regrettes.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-187',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '💔',
    title: 'Ton meilleur ami te tourne le dos',
    context: 'Une dispute sérieuse éclate avec ton meilleur ami.',
    choices: [
      {
        id: 'c1',
        label: 'Faire le premier pas',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Réconciliation.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attendre qu\'il revienne',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Réconciliation,.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -3, log: 'Rupture durable.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Couper les ponts',
        effects: [{ attribute: 'mental', delta: -2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -2, log: 'Tu assumes.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -4, log: 'Tu regrettes.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-188',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '📚',
    title: 'Le dossier scolaire',
    context: 'Entre le football et ta vie sociale, tes résultats scolaires commencent à baisser.',
    choices: [
      {
        id: 'c1',
        label: 'Travailler davantage',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Demander de l\'aide',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Laisser couler',
        effects: [{ attribute: 'mental', delta: -2 }, { exposureDelta: -1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'Tu rattrapes in extremis.' }, { exposureDelta: -1 }],
          },
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: -2, log: 'Tes problèmes scolaires s\'aggravent.' }, { exposureDelta: -1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-189',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🗣️',
    title: 'Une rumeur circule',
    context: 'Une rumeur sur toi commence à circuler.',
    choices: [
      {
        id: 'c1',
        label: 'Répondre publiquement',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Tu contrôles le récit.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'La polémique grossit.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ignorer',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Elle disparaît.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Confronter celui qui l\'a lancée',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Résolution.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'Conflit.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-190',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '🏆',
    title: 'Le joueur modèle',
    context: 'Le coach te présente comme un exemple pour les autres élèves.',
    choices: [
      {
        id: 'c1',
        label: 'Profiter de ton statut',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Certains pensent que tu prends la grosse tête.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester discret',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Motiver les autres',
        effects: [{ attribute: 'leadership', delta: 3 }],
      },
    ],
  },
  {
    id: 'scn-191',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '💰',
    title: 'Ton premier sponsor',
    context: 'Une entreprise locale veut associer son image à la tienne.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 3, log: 'Bonne opération.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 1, log: 'Image de sportif trop commercial.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Refuser',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Négocier',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Meilleur accord.' }, { exposureDelta: 2 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2, log: 'L\'entreprise se retire.' }, { exposureDelta: 2 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-192',
    theme: 'VIE_SOCIALE',
    acts: ['HS'],
    emoji: '🎓',
    title: 'Le dernier jour',
    context: 'Ton aventure au lycée touche à sa fin.',
    choices: [
      {
        id: 'c1',
        label: 'Faire un discours',
        effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1, log: 'Discours maladroit.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Profiter avec tes proches',
        effects: [{ attribute: 'mental', delta: 3 }],
      },
      {
        id: 'c3',
        label: 'Déjà penser à l\'université',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-193',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 1,
    emoji: '🎒',
    title: 'Nouveau départ',
    context: 'Tu arrives sur un campus où personne ne te connaît.',
    choices: [
      {
        id: 'c1',
        label: 'Faire connaissance avec tout le monde',
        effects: [{ exposureDelta: 3 }],
      },
      {
        id: 'c2',
        label: 'Rester avec les joueurs',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Rester très discret',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu t\'adaptes bien.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Tu te sens isolé.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-194',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🏠',
    title: 'Nouveau coloc',
    context: 'Tu dois partager ton logement avec un autre étudiant.',
    choices: [
      {
        id: 'c1',
        label: 'Devenir proche',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 20,
            effects: [{ log: 'Gros conflit.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder tes distances',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Poser les règles dès le départ',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Il trouve ça trop autoritaire.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-195',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🎊',
    title: 'College Party',
    context: 'Une énorme soirée étudiante est organisée.',
    choices: [
      {
        id: 'c1',
        label: 'Y aller',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 3, log: 'Bonne soirée.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'Problème le lendemain.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Passer rapidement',
        effects: [{ exposureDelta: 1 }],
      },
      {
        id: 'c3',
        label: 'Ne pas y aller',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-196',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📞',
    title: 'Relation à distance',
    context: 'Ta relation devient sérieuse alors que ton calendrier devient de plus en plus chargé.',
    choices: [
      {
        id: 'c1',
        label: 'Faire passer la relation en priorité',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Équilibre difficile.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Trouver un équilibre',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Prioriser ta carrière',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'Relation maintenue.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -3, log: 'Rupture.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-197',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    emoji: '⭐',
    title: 'Tout le monde te connaît',
    context: 'Ton visage commence à être connu sur le campus.',
    choices: [
      {
        id: 'c1',
        label: 'Profiter de la célébrité',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 4 }, { attribute: 'mental', delta: -2, log: 'Ego qui monte.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder la tête froide',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Utiliser ton influence',
        effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 2 }],
      },
    ],
  },
  {
    id: 'scn-198',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    emoji: '🤝',
    title: 'Coup de main',
    context: 'Un étudiant te demande de l\'aider alors que tu as déjà énormément de travail.',
    choices: [
      {
        id: 'c1',
        label: 'L\'aider',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Refuser poliment',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Promettre puis oublier',
        effects: [{ attribute: 'leadership', delta: -2 }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-199',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    emoji: '🎙️',
    title: 'Le journal du campus',
    context: 'Le journal étudiant veut t\'interviewer.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 3, log: 'Interview réussie.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 1, log: 'Une phrase est mal interprétée.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Refuser',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Parler uniquement du football',
        effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-200',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔀',
    title: 'Nouvelles fréquentations',
    context: 'Ton entourage commence à changer avec ta réussite.',
    choices: [
      {
        id: 'c1',
        label: 'Suivre le nouveau groupe',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'Nouvelles opportunités.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Mauvaises influences.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Garder tes anciens amis',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Garder les deux cercles',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Équilibre réussi.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Tensions.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-201',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🗣️',
    title: 'Représenter l\'équipe',
    context: 'Le programme te demande de représenter l\'équipe lors d\'un événement universitaire.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2 }],
      },
      {
        id: 'c2',
        label: 'Refuser pour te reposer',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Le staff considère que tu manques d\'implication.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-202',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📺',
    title: 'Les médias nationaux',
    context: 'Pour la première fois, une chaîne nationale te demande une interview.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer la carte humble',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
      },
      {
        id: 'c2',
        label: 'Assumer tes ambitions',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 4, log: 'Image forte.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'Certains te trouvent arrogant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Répondre très prudemment',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -1, log: 'Interview fade.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-203',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📲',
    title: 'Trop de notifications',
    context: 'Tu reçois des centaines de messages après tes performances.',
    choices: [
      {
        id: 'c1',
        label: 'Tout lire',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'Motivation.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Critiques qui te touchent.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Couper les notifications',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Confier tes réseaux à quelqu\'un',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-204',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧓',
    title: 'Un ancien joueur te conseille',
    context: 'Un ancien joueur du programme te propose de te guider.',
    choices: [
      {
        id: 'c1',
        label: 'Écouter ses conseils',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Faire ton propre chemin',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Tu regrettes de ne pas l\'avoir écouté.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Construire une vraie relation',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 1 }],
      },
    ],
  },
  {
    id: 'scn-205',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '⚠️',
    title: 'Mauvaise compagnie',
    context: 'Un de tes proches est impliqué dans une histoire embarrassante.',
    choices: [
      {
        id: 'c1',
        label: 'Le défendre',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Il apprécie ton soutien.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: -3, log: 'Ton image est associée à l\'affaire.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Prendre tes distances',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu protèges ton image.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Rupture amicale.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'L\'aider en privé',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-206',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '❤️',
    title: 'Action caritative',
    context: 'Une association te propose de participer à une action auprès d\'enfants.',
    choices: [
      {
        id: 'c1',
        label: 'Participer',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2 }],
      },
      {
        id: 'c2',
        label: 'Participer sans communication',
        effects: [{ attribute: 'leadership', delta: 3 }],
      },
      {
        id: 'c3',
        label: 'Refuser',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'L\'occasion était importante.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-207',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    emoji: '📸',
    title: 'Ils veulent tous une photo',
    context: 'Tu es entouré de fans alors que tu essaies simplement de sortir du campus.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le temps',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 3 }, { attribute: 'mental', delta: -1, log: 'La foule devient trop importante.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Refuser poliment',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Partir immédiatement',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Certains fans se vexent.' }],
          },
        ],
      },
    ],
  },
  // Le vrai changement d'université se joue désormais via le Transfer Portal (écran dédié en
  // fin de saison, engine/transferPortal.ts) — cet événement reste volontairement un simple
  // épisode narratif de sollicitation, sans toucher à collegeName/collegeTier, pour ne pas
  // dupliquer ni contredire ce mécanisme.
  {
    id: 'scn-208',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    seasonMin: 1,
    seasonMax: 4,
    emoji: '🔄',
    title: 'Rumeurs de transfert',
    context: 'Des recruteurs d\'autres programmes tâtent le terrain avant même l\'ouverture officielle du portail des transferts.',
    choices: [
      {
        id: 'c1',
        label: 'Écouter les approches',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 2, log: 'Le bouche-à-oreille joue en sa faveur.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Le vestiaire prend mal ces discussions.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Réaffirmer sa loyauté au programme',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Certains observateurs y voient un manque d\'ambition.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Laisser planer le doute',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'La situation s\'améliore.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Elle se dégrade.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-209',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '💼',
    title: 'Un représentant te contacte',
    context: 'Une personne affirme pouvoir t\'aider à gérer ton image et tes opportunités.',
    choices: [
      {
        id: 'c1',
        label: 'Lui faire confiance',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 3, log: 'Bonne relation.' }],
          },
          {
            weight: 40,
            effects: [{ log: 'Mauvaise gestion.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Vérifier tout avant',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'Tu évites un mauvais choix.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Refuser',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Tu rates une opportunité.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-210',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🍽️',
    title: 'Dîner important',
    context: 'Des personnes importantes pour ton avenir sont présentes à un dîner.',
    choices: [
      {
        id: 'c1',
        label: 'Être très sociable',
        effects: [{ exposureDelta: 3 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Rester professionnel',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Montrer ta personnalité',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ exposureDelta: 2, log: 'Ils apprécient.' }],
          },
          {
            weight: 35,
            effects: [{ log: 'Ils te trouvent trop confiant.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-211',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    seasonMin: 1,
    seasonMax: 1,
    emoji: '🌆',
    title: 'Bienvenue chez les pros',
    context: 'Tu arrives dans une nouvelle ville et personne ne sait encore qui tu es.',
    choices: [
      {
        id: 'c1',
        label: 'Explorer la ville',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Rester avec l\'équipe',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Rester chez toi',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Isolement.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-212',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💵',
    title: 'Le premier gros chèque',
    context: 'Tu signes enfin un contrat qui change complètement ton niveau de vie.',
    choices: [
      {
        id: 'c1',
        label: 'Acheter immédiatement',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Achats mal gérés.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Investir',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Faire plaisir à ta famille',
        effects: [{ attribute: 'mental', delta: 3 }],
      },
    ],
  },
  {
    id: 'scn-213',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🏡',
    title: 'La nouvelle maison',
    context: 'Tu peux enfin acheter la maison dont tu rêvais.',
    choices: [
      {
        id: 'c1',
        label: 'Acheter très grand',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Charges trop importantes.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Acheter raisonnable',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Investir plutôt que consommer',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-214',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💸',
    title: 'Tout le monde veut quelque chose',
    context: 'Depuis que tu gagnes beaucoup d\'argent, les demandes financières se multiplient.',
    choices: [
      {
        id: 'c1',
        label: 'Dire oui',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Satisfaction.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -2, log: 'Abus.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Fixer des limites',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Couper avec tout le monde',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Soulagement.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -3, log: 'Solitude.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-215',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🌟',
    title: 'Reconnu partout',
    context: 'Tu ne peux plus sortir sans être reconnu.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter la célébrité',
        effects: [{ exposureDelta: 4 }],
      },
      {
        id: 'c2',
        label: 'Protéger ta vie privée',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Utiliser ta notoriété',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'Surexposition.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-216',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🚨',
    title: 'La polémique',
    context: 'Une histoire concernant ta vie privée fait la une.',
    choices: [
      {
        id: 'c1',
        label: 'Faire une déclaration',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 2, log: 'Tu contrôles la situation.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -3, log: 'Nouvelle polémique.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ne rien dire',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'La polémique disparaît.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -4, log: 'Elle s\'amplifie.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attaquer les médias',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 2, log: 'Tes fans adorent.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -1 }, { attribute: 'mental', delta: -2, log: 'Tu aggravres la situation.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-217',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '📣',
    title: 'Chouchou du public',
    context: 'Les supporters commencent à te considérer comme l\'un des visages de la franchise.',
    choices: [
      {
        id: 'c1',
        label: 'Communiquer avec eux',
        effects: [{ exposureDelta: 3 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Rester discret',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Devenir très présent sur les réseaux',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 4 }, { attribute: 'mental', delta: -2, log: 'Critiques.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-218',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🤝',
    title: 'Frères d\'armes',
    context: 'Une relation très forte se crée avec un coéquipier.',
    choices: [
      {
        id: 'c1',
        label: 'Tout partager',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Garder une certaine distance',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Devenir inséparables',
        effects: [{ attribute: 'mental', delta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ log: 'Conflit futur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-219',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💢',
    title: 'Les tensions explosent',
    context: 'Une dispute personnelle éclate avec un autre joueur.',
    choices: [
      {
        id: 'c1',
        label: 'Régler ça en privé',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Réconciliation.' }, { attribute: 'leadership', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Répondre publiquement',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Conflit aggravé.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ignorer',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Ça passe,.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Tensions persistantes.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-220',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💼',
    title: 'Ton entourage professionnel',
    context: 'Ton agent veut gérer une grande partie de ton image publique.',
    choices: [
      {
        id: 'c1',
        label: 'Le laisser gérer',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Très efficace.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Ton image devient trop contrôlée.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Tout contrôler toi-même',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -2, log: 'Surcharge.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Trouver un équilibre',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-221',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '📺',
    title: 'Ton visage sur les écrans',
    context: 'Une grande marque te propose une campagne nationale.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ exposureDelta: 5 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 5, log: 'Énorme succès.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2, log: 'Campagne mal reçue.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Refuser',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Tu regrettes.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Négocier pour garder ton image',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 3 }],
      },
    ],
  },
  {
    id: 'scn-222',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '📷',
    title: 'Plus aucune intimité',
    context: 'Des photographes commencent à suivre tes déplacements.',
    choices: [
      {
        id: 'c1',
        label: 'Les ignorer',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Leur parler',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 2, log: 'Relation correcte.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -1, log: 'Tes propos sont déformés.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Réagir agressivement',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'Ils partent.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: -1 }, { exposureDelta: -4, log: 'La vidéo fait le tour des réseaux.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-223',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '❤️',
    title: 'Donner en retour',
    context: 'Tu veux utiliser ta réussite pour aider ta communauté.',
    choices: [
      {
        id: 'c1',
        label: 'Créer une fondation',
        effects: [{ attribute: 'leadership', delta: 4 }, { exposureDelta: 2 }],
      },
      {
        id: 'c2',
        label: 'Donner anonymement',
        effects: [{ attribute: 'mental', delta: 3 }],
      },
      {
        id: 'c3',
        label: 'Organiser des événements',
        effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Organisation ratée.' }, { exposureDelta: 3 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-224',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '📰',
    title: 'Les journalistes te connaissent',
    context: 'Certains journalistes commencent à te suivre régulièrement.',
    choices: [
      {
        id: 'c1',
        label: 'Leur parler régulièrement',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ log: 'Une relation se retourne contre toi.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ne parler qu\'en conférence',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Ne rien leur donner',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Ils deviennent plus critiques.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-225',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💍',
    title: 'Une nouvelle étape',
    context: 'Ta vie personnelle prend une nouvelle direction.',
    choices: [
      {
        id: 'c1',
        label: 'Organiser une grande cérémonie',
        effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 3, log: 'Pression médiatique.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester très privé',
        effects: [{ attribute: 'mental', delta: 3 }],
      },
      {
        id: 'c3',
        label: 'Faire participer les fans',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 4 }, { attribute: 'mental', delta: -2, log: 'Surexposition.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-226',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '👶',
    title: 'Une nouvelle responsabilité',
    context: 'Ta vie personnelle change complètement.',
    choices: [
      {
        id: 'c1',
        label: 'Tout réorganiser autour de la famille',
        effects: [{ attribute: 'mental', delta: 3 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 3 }, { attribute: 'physique', delta: -2, log: 'Fatigue importante.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Maintenir ton rythme professionnel',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'Équilibre réussi.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'Fatigue.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Trouver un équilibre',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }],
      },
    ],
  },
  {
    id: 'scn-227',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💰',
    title: 'Tout le monde compte sur toi',
    context: 'Ton entourage dépend désormais en partie de tes revenus.',
    choices: [
      {
        id: 'c1',
        label: 'Tout prendre en charge',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Satisfaction.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -3, log: 'Pression énorme.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Poser des limites',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Déléguer la gestion',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Mauvaise gestion.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-228',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💔',
    title: 'Une famille sous tension',
    context: 'Un proche traverse une période familiale difficile et compte sur toi.',
    choices: [
      {
        id: 'c1',
        label: 'Être très présent',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Tu t\'épuises.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Aider financièrement',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Cela crée une dépendance.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Garder tes distances',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Tu protèges ton équilibre.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -3, log: 'Tu regrettes.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-229',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🕰️',
    title: 'Et après le football ?',
    context: 'Tu commences à réfléchir sérieusement à ta vie après le football.',
    choices: [
      {
        id: 'c1',
        label: 'Préparer une reconversion',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Profiter encore du présent',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Tu regrettes de ne rien avoir préparé.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Commencer à devenir mentor',
        effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 1 }],
      },
    ],
  },
  {
    id: 'scn-230',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🏁',
    title: 'La vie après la NFL',
    context: 'Après des années de football professionnel, tu dois décider quelle personne tu veux devenir en dehors du terrain.',
    choices: [
      {
        id: 'c1',
        label: 'Devenir coach',
        effects: [{ attribute: 'leadership', delta: 4 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Devenir entrepreneur',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 3 }, { attribute: 'mental', delta: -2, log: 'Premier projet difficile.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Devenir personnalité médiatique',
        effects: [{ exposureDelta: 5 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5 }, { attribute: 'mental', delta: -2, log: 'Surexposition.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Disparaître des projecteurs',
        effects: [{ attribute: 'mental', delta: 4 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2, log: 'Sentiment de vide.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-231',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '📖',
    title: 'Le playbook s\'épaissit',
    context: 'Le coach installe plusieurs nouvelles formations et tu dois rapidement comprendre ton rôle.',
    choices: [
      {
        id: 'c1',
        label: 'Tout apprendre immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Maîtriser d\'abord les concepts principaux',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Apprendre uniquement tes responsabilités',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Tu gagnes du temps.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'Une mauvaise compréhension collective te pénalise.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-232',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🔁',
    title: 'Encore dix répétitions',
    context: 'Après l\'entraînement, le coach propose quelques répétitions supplémentaires.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'Mauvaise exécution.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Faire seulement quelques reps',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Rentrer récupérer',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-233',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🚶',
    title: 'Walkthrough du vendredi',
    context: 'Le coach organise une répétition sans contact où chacun doit être parfaitement aligné.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre ça très au sérieux',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Faire le minimum',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Aucune conséquence.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Erreur mémorisée.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-234',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🧩',
    title: 'Jouer le rôle du titulaire',
    context: 'Le coach te demande d\'imiter le style d\'un adversaire pendant une séance.',
    choices: [
      {
        id: 'c1',
        label: 'Copier chaque détail',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Jouer naturellement',
        effects: [{ attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Faire seulement ce qu\'on te demande',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Tu manques de sérieux.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-235',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '⏱️',
    title: 'Change ton tempo',
    context: 'Le coach veut travailler différentes cadences et réactions au snap.',
    choices: [
      {
        id: 'c1',
        label: 'Répéter jusqu\'à automatisation',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Expérimenter toi-même',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'Mauvaise synchronisation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Rester sur tes habitudes',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-236',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🧪',
    title: 'Une nouvelle méthode',
    context: 'Le coach introduit un exercice que tu n\'as jamais pratiqué.',
    choices: [
      {
        id: 'c1',
        label: 'Plonger dedans',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Difficulté.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Observer avant d\'essayer',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Faire comme d\'habitude',
        effects: [{ attribute: 'technique', delta: -1 }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-237',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '⚔️',
    title: 'Qui gagnera les reps ?',
    context: 'Deux joueurs doivent se départager lors d\'une série de répétitions.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer à fond',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Erreur sous pression.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester méthodique',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Chercher à impressionner',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'Réussite spectaculaire.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'Erreur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-238',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🛑',
    title: 'Tout le monde s\'arrête',
    context: 'Le coach interrompt tout pour corriger un problème collectif.',
    choices: [
      {
        id: 'c1',
        label: 'Écouter attentivement',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Poser une question',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Profiter de la pause',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Tu rates une correction importante.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-239',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE'],
    emoji: '📝',
    title: 'Contrôle du playbook',
    context: 'Le coach teste individuellement votre connaissance des concepts.',
    choices: [
      {
        id: 'c1',
        label: 'Réviser sérieusement',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Compter sur ta mémoire',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Réussite.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'Erreur.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Réviser uniquement les plays principaux',
        effects: [{ attribute: 'technique', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-240',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🔄',
    title: 'Apprendre un autre rôle',
    context: 'Le coach te demande d\'apprendre quelques responsabilités d\'un autre poste.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Te concentrer sur ton poste',
        effects: [{ attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Prendre ça comme une contrainte',
        effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-241',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '👀',
    title: 'Tout le monde te regarde',
    context: 'Plusieurs coaches observent spécifiquement ta séance.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer normalement',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Montrer ce que tu sais faire',
        effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -1, log: 'Tu forces.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Chercher à ne faire aucune erreur',
        effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-242',
    theme: 'PERSONNEL',
    acts: ['HS'],
    emoji: '🔥',
    title: '« Montre-moi ce que tu as »',
    context: 'Le coach te met volontairement au défi devant le groupe.',
    choices: [
      {
        id: 'c1',
        label: 'Répondre par le travail',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Chercher le geste spectaculaire',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 2, log: 'Réussite.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Échec.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ne rien montrer',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-243',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧠',
    title: 'Nouveau système offensif',
    context: 'Le staff modifie une partie du système.',
    choices: [
      {
        id: 'c1',
        label: 'Tout reprendre depuis zéro',
        effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Identifier uniquement les différences',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Attendre que ça devienne automatique',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Adaptation.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'Retard.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-244',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧑‍🏫',
    title: 'Une heure au tableau',
    context: 'Ton coach de position passe une heure à détailler les responsabilités.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre des notes',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Participer activement',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Écouter sans intervenir',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-245',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['QB', 'RB-FB'],
    emoji: '🛡️',
    title: 'Nouvelle protection',
    context: 'Une nouvelle protection comporte plusieurs ajustements selon la défense.',
    choices: [
      {
        id: 'c1',
        label: 'La mémoriser parfaitement',
        effects: [{ attribute: 'technique', delta: 3 }],
      },
      {
        id: 'c2',
        label: 'Comprendre le principe plutôt que le texte',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Faire confiance aux autres',
        effects: [{ attribute: 'leadership', delta: -1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Aucun problème.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Confusion.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-246',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📣',
    title: 'Modifier le play',
    context: 'Le système permet de changer certains éléments juste avant le snap.',
    choices: [
      {
        id: 'c1',
        label: 'Apprendre tous les checks',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'N\'utiliser que les checks simples',
        effects: [{ attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Expérimenter beaucoup',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1, log: 'Excellent changement.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'Mauvais check.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-247',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📚',
    title: 'Devenir une référence',
    context: 'Tes coéquipiers commencent à venir te demander des explications.',
    choices: [
      {
        id: 'c1',
        label: 'Les aider',
        effects: [{ attribute: 'leadership', delta: 3 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Leur dire de demander au coach',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Les aider sans être sûr',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Tu aides correctement.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Tu transmets une erreur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-248',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📋',
    title: 'Les premières séries',
    context: 'Le staff prépare précisément les premières actions.',
    choices: [
      {
        id: 'c1',
        label: 'Mémoriser chaque détail',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Comprendre l\'intention globale',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Improviser selon la situation',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'Réussite.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'Erreur de communication.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-249',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🎯',
    title: 'Une seule situation pendant deux heures',
    context: 'Le staff consacre toute la séance à une situation précise.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher la perfection',
        effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Rester régulier',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Économiser tes efforts',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Aucune conséquence.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Tu rates des corrections.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-250',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🗣️',
    title: 'Organiser les autres',
    context: 'Le coach te demande de diriger une partie des répétitions.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le rôle',
        effects: [{ attribute: 'leadership', delta: 3 }],
      },
      {
        id: 'c2',
        label: 'Partager le rôle',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Refuser',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le coach respecte ton choix.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Leadership -2.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-251',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔍',
    title: 'Un détail technique te trahit',
    context: 'Le coach repère une petite habitude répétitive dans ton exécution.',
    choices: [
      {
        id: 'c1',
        label: 'La corriger immédiatement',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Travailler progressivement dessus',
        effects: [{ attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Considérer que ce n\'est pas important',
        effects: [{ attribute: 'technique', delta: -2 }],
      },
    ],
  },
  {
    id: 'scn-252',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧱',
    title: 'Retour aux bases',
    context: 'Le coach retire les schémas complexes pour retravailler les fondamentaux.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre ça au sérieux',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Chercher à accélérer',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Bonne intensité.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Mauvaise exécution.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Trouver ça inutile',
        effects: [{ attribute: 'technique', delta: -1 }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-253',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔎',
    title: 'Comprendre leurs tendances',
    context: 'Le staff veut que chacun identifie des tendances précises chez l\'adversaire.',
    choices: [
      {
        id: 'c1',
        label: 'Étudier les détails',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Étudier seulement les situations principales',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Te fier au plan du coach',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'Suffisant.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Mauvaise lecture.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-254',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧹',
    title: 'Corriger plutôt que célébrer',
    context: 'Après une victoire, le staff revient immédiatement sur les erreurs.',
    choices: [
      {
        id: 'c1',
        label: 'Te concentrer sur tes erreurs',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Profiter de la victoire',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Ne regarder que tes highlights',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'Confiance.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'Excès de confiance.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-255',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔄',
    title: 'Encore une fois',
    context: 'Une séquence est répétée jusqu\'à ce que tout le groupe réussisse.',
    choices: [
      {
        id: 'c1',
        label: 'Demander une nouvelle rep',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Laisser les autres passer devant',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Forcer malgré les erreurs',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Déclic.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'Frustration.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-256',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔀',
    title: 'Aujourd\'hui tu dépannes',
    context: 'Une absence oblige le staff à te faire travailler temporairement ailleurs.',
    choices: [
      {
        id: 'c1',
        label: 'Apprendre sérieusement',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Faire juste le nécessaire',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Montrer que tu peux faire plus',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'Tu impressionnes.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'Mauvaise exécution.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-257',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔧',
    title: 'Ton rituel',
    context: 'Tu réalises que tu n\'as pas de routine fixe avant les séances.',
    choices: [
      {
        id: 'c1',
        label: 'Construire une routine stricte',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Garder de la flexibilité',
        effects: [{ attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Ne rien changer',
        effects: [{ attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-258',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🎯',
    title: 'Le drill que personne ne réussit',
    context: 'Le staff met en place un exercice particulièrement difficile.',
    choices: [
      {
        id: 'c1',
        label: 'Le refaire jusqu\'à réussir',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: -1, log: 'Frustration.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Demander une explication',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Passer à autre chose',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Aucun impact.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Technique -1.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-259',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📢',
    title: 'Parler avant de jouer',
    context: 'Le staff insiste sur la communication entre joueurs.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le commandement',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Être plus vocal',
        effects: [{ attribute: 'leadership', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Rester concentré sur ton rôle',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Manque de communication.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-260',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🏃',
    title: 'Travail à sec',
    context: 'Le staff organise une séance centrée sur les déplacements et la technique sans contact.',
    choices: [
      {
        id: 'c1',
        label: 'Maximiser chaque rep',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Travailler la fluidité',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Faire le minimum',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Aucun problème.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Technique -1.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-261',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧠',
    title: 'Nouveau coordinateur',
    context: 'Un nouveau coordinateur arrive et installe son système.',
    choices: [
      {
        id: 'c1',
        label: 'Tout apprendre avant le camp',
        effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Apprendre progressivement',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Compter sur ton expérience',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'Ton expérience suffit.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -3, log: 'Retard d\'adaptation.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-262',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '📚',
    title: 'La montagne de plays',
    context: 'Le volume de concepts à maîtriser est énorme.',
    choices: [
      {
        id: 'c1',
        label: 'Tout mémoriser',
        effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Comprendre les familles de concepts',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Apprendre uniquement tes packages',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Suffisant.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'Manque de polyvalence.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-263',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🎯',
    title: 'Tout se joue dans les détails',
    context: 'Le staff profite d\'une séance sans contact pour observer chaque détail technique.',
    choices: [
      {
        id: 'c1',
        label: 'Être obsédé par les détails',
        effects: [{ attribute: 'technique', delta: 3 }],
      },
      {
        id: 'c2',
        label: 'Travailler à haute intensité',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Économiser ton énergie',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Aucune conséquence.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Manque de précision.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-264',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧑‍💼',
    title: 'Une heure face au coordinateur',
    context: 'Le coordinateur veut comprendre comment tu lis le jeu.',
    choices: [
      {
        id: 'c1',
        label: 'Montrer tout ce que tu sais',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Poser beaucoup de questions',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Rester très discret',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'Bonne impression.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Il doute de ta compréhension.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-265',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🔀',
    title: '« Tu peux jouer ça ? »',
    context: 'Le staff teste ta capacité à remplir plusieurs rôles.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter tous les rôles',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Te spécialiser',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: -1, log: 'Manque de polyvalence.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Tenter de tout maîtriser',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: -2, log: 'Surcharge.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-266',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '⏳',
    title: 'Deux minutes au chrono',
    context: 'Le coach termine la séance par une simulation de fin de match.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le commandement',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Exécuter strictement le script',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Chercher le gros play',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 2, log: 'Play spectaculaire.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Erreur.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-267',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧑‍🏫',
    title: 'Transmettre ton expérience',
    context: 'Un rookie vient te demander comment gérer une situation précise du système.',
    choices: [
      {
        id: 'c1',
        label: 'Prendre le temps de lui expliquer',
        effects: [{ attribute: 'leadership', delta: 3 }],
      },
      {
        id: 'c2',
        label: 'Lui donner une réponse rapide',
        effects: [{ attribute: 'leadership', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Lui dire d\'apprendre seul',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1, log: 'Il se débrouille.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'Leadership -2.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-268',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🛡️',
    title: 'Nouvelle règle de protection',
    context: 'Une mauvaise séquence oblige le staff à modifier certaines responsabilités.',
    choices: [
      {
        id: 'c1',
        label: 'Répéter jusqu\'à automatisation',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Comprendre pourquoi le changement existe',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Continuer comme avant',
        effects: [{ attribute: 'technique', delta: -2 }],
      },
    ],
  },
  {
    id: 'scn-269',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧓',
    title: 'Une autre manière de faire',
    context: 'Un vétéran te montre une méthode différente de la tienne.',
    choices: [
      {
        id: 'c1',
        label: 'Tester sa méthode',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Comparer les deux',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Défendre ta méthode',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Tu avais raison.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Technique -1.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-270',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '👣',
    title: 'Un centimètre de trop',
    context: 'Ton coach identifie un défaut minuscule dans ton footwork.',
    choices: [
      {
        id: 'c1',
        label: 'Le corriger immédiatement',
        effects: [{ attribute: 'technique', delta: 3 }],
      },
      {
        id: 'c2',
        label: 'Le travailler progressivement',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Considérer que ça ne change rien',
        effects: [{ attribute: 'technique', delta: -2 }],
      },
    ],
  },
  {
    id: 'scn-271',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🏋️',
    title: 'Une heure rien que pour toi',
    context: 'Le staff te propose une heure supplémentaire centrée exclusivement sur ton développement.',
    choices: [
      {
        id: 'c1',
        label: 'Travailler ton plus gros défaut',
        effects: [{ attribute: 'technique', delta: 3 }],
      },
      {
        id: 'c2',
        label: 'Perfectionner ton meilleur atout',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
      },
      {
        id: 'c3',
        label: 'Travailler un nouveau domaine',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 3, log: 'Découverte majeure.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'Progrès limité.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-272',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧱',
    title: 'Rien ne vient facilement',
    context: 'Un joueur du practice squad te domine régulièrement pendant une situation précise.',
    choices: [
      {
        id: 'c1',
        label: 'Demander à refaire la séquence',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Analyser pourquoi tu perds',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Éviter cette situation',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Le problème revient.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-273',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '📈',
    title: 'Plus de responsabilités',
    context: 'Le staff te donne davantage de responsabilités dans l\'installation.',
    choices: [
      {
        id: 'c1',
        label: 'Accepter immédiatement',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Demander du temps',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'Le coach apprécie ta prudence.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Dire que tu es prêt à tout',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2, log: 'Tu assures.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -2, log: 'Surcharge.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-274',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '⚡',
    title: 'Tempo professionnel',
    context: 'Le staff accélère fortement le rythme des répétitions.',
    choices: [
      {
        id: 'c1',
        label: 'T\'adapter immédiatement',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Prioriser la précision',
        effects: [{ attribute: 'technique', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Chercher à suivre à tout prix',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'Réussite.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -2, log: 'Perte de qualité.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-275',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🌱',
    title: 'Repartir de zéro',
    context: 'L\'équipe reprend après plusieurs semaines d\'arrêt.',
    choices: [
      {
        id: 'c1',
        label: 'Reprendre progressivement',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Revenir déjà à pleine intensité',
        effects: [{ attribute: 'physique', delta: 3 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'Mauvaise adaptation.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Profiter pour retravailler ta technique',
        effects: [{ attribute: 'technique', delta: 3 }],
      },
    ],
  },
  {
    id: 'scn-276',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🎓',
    title: 'Une autre voix',
    context: 'Un ancien coach reconnu te propose quelques séances privées.',
    choices: [
      {
        id: 'c1',
        label: 'Suivre ses conseils',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Lui demander de cibler un point précis',
        effects: [{ attribute: 'technique', delta: 3 }],
      },
      {
        id: 'c3',
        label: 'Ne pas changer tes habitudes',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'Tu avais raison.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Occasion manquée.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-277',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧘',
    title: 'Nouvelle routine de récupération',
    context: 'Le staff performance propose une nouvelle organisation entre les séances.',
    choices: [
      {
        id: 'c1',
        label: 'Suivre strictement le protocole',
        effects: [{ attribute: 'physique', delta: 2 }],
      },
      {
        id: 'c2',
        label: 'Adapter selon tes sensations',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Continuer tes habitudes',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Aucune conséquence.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -2, log: 'Récupération insuffisante.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-278',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '⚡',
    title: 'Quelques millisecondes',
    context: 'Le staff te fait passer une série de tests de réaction et de prise de décision.',
    choices: [
      {
        id: 'c1',
        label: 'Chercher la performance maximale',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 3, log: 'Très bon résultat.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Rester régulier',
        effects: [{ attribute: 'mental', delta: 2 }],
      },
      {
        id: 'c3',
        label: 'Te comparer aux autres',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: 1, log: 'Motivation.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'Frustration.' }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-279',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '⏱️',
    title: 'Quelques secondes pour convaincre',
    context: 'Tu dois préparer des tests standardisés qui seront observés par des équipes.',
    choices: [
      {
        id: 'c1',
        label: 'Optimiser tes points forts',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
      },
      {
        id: 'c2',
        label: 'Corriger tes faiblesses',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
      },
      {
        id: 'c3',
        label: 'Préparer chaque épreuve séparément',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Excellente performance.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'Résultat correct.' }, { attribute: 'physique', delta: 1 }],
          },
        ],
      },
    ],
  },
  {
    id: 'scn-280',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🏟️',
    title: 'Une dernière démonstration',
    context: 'Tu dois réaliser une série d\'exercices spécifiques devant des scouts et des coaches. Les workouts de football peuvent notamment mettre l\'accent sur des exercices propres au poste et sur la qualité technique de l\'exécution.',
    choices: [
      {
        id: 'c1',
        label: 'Jouer la sécurité',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
      },
      {
        id: 'c2',
        label: 'Montrer ton potentiel maximal',
        effects: [{ exposureDelta: 4 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 7, log: 'Performance exceptionnelle.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 4 }, { attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -2, log: 'Tu forces.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Modifier certains exercices pour mettre tes qualités en avant',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Les scouts apprécient.' }, { exposureDelta: 2 }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'leadership', delta: 1, log: 'Ils trouvent ton approche risquée.' }],
          },
        ],
      },
    ],
  },
]
