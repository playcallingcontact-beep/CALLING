# Événements — Gridiron Legacy

Ce document liste **tous les événements actuellement dans le jeu** (28 au total : 8 en Lycée, 10 en College, 10 en Pro) puis explique le format à respecter pour en ajouter de nouveaux. Complète la section "NOUVEAUX ÉVÉNEMENTS À AJOUTER" en bas du fichier et renvoie-le — je m'occupe ensuite de calibrer les bonus/malus (deltas d'attributs) pour que tout reste cohérent avec le reste du jeu.

**Constat important** : le pool Pro (10 événements) est pioché 3 fois par saison, sur des carrières qui peuvent maintenant durer 15-20+ saisons. Avec seulement 10 événements, un joueur revoit les mêmes histoires en boucle après 3-4 saisons. C'est la priorité n°1 si tu dois choisir où concentrer l'effort — le College (10, sur 4 saisons max) vient juste après, le Lycée (8, sur 2 saisons) est le moins urgent.

**Mise à jour** : le moteur supporte maintenant 3 nouvelles capacités (détaillées plus bas) que tu peux utiliser dès maintenant dans tes nouveaux événements : nombre de choix variable (2 à 4, pas forcément 2), résultats aléatoires (le même choix peut donner un bonus une carrière et un malus la suivante), et conséquences à retardement (un choix en Lycée qui revient te chercher en College ou en NFL).

---

## Comment lire un événement

Chaque événement a :
- **Titre + emoji** — affiché en haut de la carte
- **Contexte** — le texte qui plante la situation
- **2 à 4 choix**, chacun avec :
  - un **libellé** (le texte du bouton)
  - un ou plusieurs **effets** : `+delta` ou `-delta` sur un attribut (Physique / Technique / Mental / Leadership), et/ou un delta d'Exposition (la "cote" qui influence recrutement/draft, séparée des attributs), et/ou un **log** (la phrase qui s'affiche dans le bilan de saison)
- Des **conditions d'apparition** optionnelles : saison min/max, drapeau requis (ex : a un mentor privé), drapeau interdit (pour éviter les répétitions), poste(s) concerné(s)

**Repère d'échelle pour les deltas** (à garder en tête en écrivant de nouveaux choix) : les deltas actuels vont de **-3 à +4** par choix. Un choix "à risque" (ex: jouer blessé) donne souvent un délta plus fort sur un attribut mais un malus ailleurs ; un choix "prudent" donne un delta plus modeste mais sans contrepartie négative. Les deltas d'Exposition vont de **-2 à +8** (les moments à forte visibilité — bowl game, combine — donnent le plus).

### Nouveau : résultats aléatoires (pas de bonne réponse garantie)

Jusqu'ici, un choix donnait toujours exactement le même résultat. Tu peux maintenant écrire des choix dont le résultat varie d'une carrière à l'autre — par exemple "Défier le titulaire à l'entraînement" pourrait avoir 60% de chances de bien se passer (Leadership +3) et 40% de mal tourner (Leadership -1, Mental -2, et une brouille qui pourrait revenir plus tard). Décris juste les issues possibles et leurs probabilités approximatives en langage courant dans ton événement — je m'occupe du câblage technique. Précise clairement si un événement doit rester **volontairement fixe/prévisible** (pas de hasard), sinon je considère que le hasard est bienvenu dès qu'il y a un vrai risque en jeu (ex: jouer blessé, confrontation, pari sur soi).

### Nouveau : conséquences à retardement

Un choix peut maintenant poser une "graine" qui refait surface plus tard — dans la même saison, l'acte suivant, voire en NFL. C'est déjà le cas pour l'unique arc du jeu aujourd'hui ("Rivalité" en Lycée → "Revanche" en College → "Le Rival, en NFL"). Tu peux en créer d'autres sur le même principe : décris la situation de départ, ce qu'elle doit "retenir" (ex: "il/elle se souvient que tu l'as snobé"), et où/quand la conséquence doit réapparaître. Le moteur peut maintenant combiner plusieurs conditions à la fois (ex: "seulement si tu as pris le titulariat de force ET que tu es maintenant chez une équipe qui affronte son ancienne équipe").

**Sur les postes** : actuellement, **aucun événement n'est filtré par poste** — tous les joueurs, quel que soit leur poste (QB/RB/WR/CB/SS/EDGE), voient exactement les mêmes événements. C'est une vraie opportunité : si tu écris un événement spécifique à un poste (ex : un QB qui doit gérer une audible, un CB qui se fait dominer sur un double-move), indique-le clairement, je m'occuperai du câblage technique.

---

## ÉVÉNEMENTS ACTUELS

### 🏫 LYCÉE (HS) — 8 événements

**1. Two-a-days** 🥵 *(saisons 1-3)*
> La pré-saison démarre avec les entraînements bi-quotidiens sous la chaleur. Le coach observe qui tient le rythme.
- **Pousser à fond, quitte à s'épuiser** → Physique +4, Mental -1
- **Gérer son effort intelligemment** → Mental +3, Physique +1

**2. Séances vidéo** 🎞️ *(saisons 1-3)*
> Le coordinateur propose des heures supplémentaires d'étude vidéo après l'entraînement.
- **Rester étudier les schémas** → Technique +3
- **Rentrer se reposer** → Physique +1

**3. Camp de recrutement régional** 📣 *(saisons 1-3)*
> Un camp rassemble des recruteurs de plusieurs programmes college. Chaque prestation compte.
- **Tout donner devant les recruteurs** → Exposition +6, Physique -1
- **Jouer simple et sans erreur** → Technique +2, Exposition +2

**4. Concurrence au poste** 🥊 *(saisons 1-3)*
> Un autre joueur du lycée vise la même place de titulaire. Le coach doit trancher.
- **Le défier frontalement à l'entraînement** → Mental +2, Leadership +2
- **Progresser ensemble, sans rivalité ouverte** → Technique +2, Leadership +1

**5. Rivalité** 🚩 *(saison 1 uniquement — lance un arc narratif "rival" qui reviendra en College puis en Pro)*
> Lors d'un match de conférence, un joueur adverse impressionne tout le monde.
- **Le saluer après le match** → Leadership +1 (ton "respect")
- **L'ignorer, se concentrer sur soi** → Mental +1 (ton "froid")

**6. Facture du mentor** 💸 *(saisons 1-3, uniquement si entourage = mentor privé)*
> Le recruteur privé demande davantage de séances individuelles, mais le coût devient conséquent.
- **Continuer, quitte à faire des sacrifices** → Exposition +5
- **Arrêter les séances privées** → Mental +2

**7. Soirée avant match** 🎉 *(saisons 1-3, uniquement si style de vie = popularité)*
> Le cercle d'amis insiste pour une soirée la veille d'un match décisif.
- **Y aller un peu** → Exposition +2, Physique -2
- **Rester concentré sur le match** → Mental +2

**8. Match décisif** 🏟️ *(saisons 1-3)*
> Le match qui peut faire basculer la saison. Toute la région regarde.
- **Prendre le match à son compte** → Exposition +5, Leadership +2
- **Jouer collectif, laisser l'équipe porter le jeu** → Technique +2

---

### 🎓 COLLEGE (NCAA) — 10 événements

**1. Fall Camp** 🏋️ *(saisons 1-4)*
> Le camp d'avant-saison NCAA est autrement plus dur que le lycée.
- **Enchaîner les répétitions sans relâche** → Physique +4, Mental -1
- **Peaufiner les détails techniques** → Technique +3

**2. Salle vidéo** 🎥 *(saisons 1-4)*
> Le staff college dispose d'un arsenal vidéo bien plus poussé qu'au lycée.
- **Décortiquer les schémas adverses** → Technique +3
- **Corriger ses propres défauts** → Mental +3

**3. Spring Game** 📢 *(saisons 1-4)*
> Le match public de fin de printemps attire déjà quelques recruteurs NFL.
- **Frapper fort devant les recruteurs** → Exposition +6, Physique -1
- **Jouer sûr, sans prise de risque** → Technique +2, Exposition +2

**4. Guerre de postes** 🥊 *(saisons 1-4)*
> Le depth chart n'est jamais figé. Un concurrent pousse fort pour la place de titulaire.
- **Hausser le niveau à l'entraînement** → Mental +2, Leadership +2
- **Rester professionnel et encaisser** → Mental +3

**5. Bowl Game** 🏆 *(saisons 2-4)*
> La saison se termine sur un bowl télévisé nationalement.
- **Devenir le héros du match** → Exposition +8, Leadership +2
- **Porter l'équipe collectivement** → Technique +3

**6. Vie académique** 📚 *(saisons 1-4)*
> Entre les cours et les entraînements, l'équilibre devient difficile à tenir.
- **Prioriser les études** → Mental +3, Physique -1
- **Miser sur le football avant tout** → Physique +2, Mental -1

**7. Deal NIL** 💰 *(saisons 1-4, uniquement si entourage = mentor privé)*
> Le mentor privé négocie un contrat NIL (Name, Image, Likeness).
- **Signer le gros deal NIL** → Exposition +6, Mental -1
- **Rester discret, privilégier le jeu** → Mental +2

**8. Vie de campus** 🎊 *(saisons 1-4, uniquement si style de vie = popularité)*
> Sur un campus de plusieurs dizaines de milliers d'étudiants, la popularité prend une autre échelle.
- **Profiter de la popularité du campus** → Exposition +3, Physique -2
- **Rester concentré sur la saison** → Mental +2

**9. Alerte physique** 🩹 *(saisons 1-4)*
> Une gêne physique traîne depuis quelques séances.
- **Jouer à travers la douleur** → Leadership +2, Physique -3
- **Lever la main et se préserver** → Mental +2, Exposition -2

**10. Revanche** 🚩 *(saisons 1-2, suite de "Rivalité" du lycée)*
> Le rival du lycée s'est lui aussi imposé en college. Les deux programmes se croisent en conférence.
- **Prendre une revanche éclatante** → Exposition +6, Leadership +2
- **Se concentrer sur le collectif, pas le duel** → Technique +3

---

### 🏈 PRO (NFL) — 10 événements

**1. Training Camp NFL** 🏋️ *(chaque saison)*
> Le rythme professionnel n'a rien à voir avec le college.
- **Pousser le corps au maximum** → Physique +3, Mental -1
- **Travailler intelligemment, gérer la fatigue** → Mental +2

**2. Playbook NFL** 📋 *(chaque saison)*
> Le playbook professionnel est bien plus dense que celui du college.
- **Ingurgiter tout le playbook** → Technique +3
- **Se concentrer sur les bases, sans faute** → Mental +2

**3. Vestiaire** 🗣️ *(chaque saison)*
> Un vétéran du vestiaire teste la nouvelle recrue — ou remet en question l'autorité d'un joueur déjà installé.
- **Prendre la parole, s'imposer** → Leadership +3
- **Laisser le terrain parler** → Mental +2

**4. Engagement communautaire** ❤️ *(chaque saison)*
> La franchise propose une visite dans un hôpital pour enfants près du stade.
- **S'investir pleinement dans le projet** → Leadership +2, Exposition +3
- **Rester concentré sur la saison** → Mental +1

**5. Contrat de sponsoring** 💼 *(chaque saison, uniquement si entourage = mentor privé)*
> L'agent négocie un gros contrat publicitaire national.
- **Signer le contrat** → Exposition +6, Mental -1
- **Rester concentré sur le jeu** → Mental +2

**6. Enfant du pays** 🎤 *(chaque saison, uniquement si style de vie = popularité)*
> Les médias locaux veulent raconter l'histoire de l'enfant du pays devenu joueur NFL.
- **Embrasser le statut de héros local** → Exposition +4, Mental -1
- **Rester discret sur le sujet** → Mental +2

**7. Gêne physique** 🩹 *(chaque saison)*
> Une douleur traîne depuis plusieurs semaines.
- **Jouer à travers la douleur** → Leadership +2, Physique -3
- **Se préserver pour la suite de la saison** → Mental +2

**8. Désaccord tactique** 📐 *(chaque saison)*
> Le coordinateur impose un système qui ne colle pas totalement au profil du joueur.
- **S'adapter sans faire de vagues** → Mental +2
- **Défendre son propre style** → Leadership +2, Mental -1

**9. Intersaison** 💪 *(chaque saison)*
> L'intersaison est courte. Certains partent en vacances, d'autres retournent directement à la salle.
- **Rester s'entraîner tout l'été** → Physique +3
- **Prendre un vrai temps de repos** → Mental +3

**10. Le Rival, en NFL** 🚩 *(saisons 1-3, suite finale de l'arc "rival")*
> Le rival de toujours a lui aussi percé en NFL.
- **Marquer les esprits dans ce duel** → Exposition +5, Leadership +2
- **Jouer le match, pas l'histoire** → Mental +2

---

## NOUVEAUX ÉVÉNEMENTS À AJOUTER

Utilise ce gabarit pour chaque nouvel événement (duplique-le autant de fois que nécessaire, 2 à 4 choix). Tu peux laisser les deltas vides ou approximatifs — je calibrerai la version finale pour rester cohérent avec l'échelle ci-dessus. Les lignes "Résultat aléatoire", "Déclenche plus tard" et "Nécessite" sont optionnelles — ne les remplis que si l'événement en a besoin.

```
Titre : 
Emoji :
Acte : HS / College / Pro
Saisons concernées : (ex: 1-4, ou "toutes")
Poste(s) concerné(s) : (laisser vide = tous les postes)
Condition particulière : (ex: uniquement si style de vie = popularité, uniquement si titulaire, etc.)
Nécessite : (ex: "doit s'être disputé avec le titulaire en Lycée" — si l'événement est la suite d'un autre)
Contexte : 

Choix 1 — libellé :
  Effet(s) : (ex: Physique +3, Exposition -2, etc.)
  Résultat aléatoire : (ex: "70% ça se passe bien comme décrit, 30% ça tourne mal : Mental -2 et ça se sait dans le vestiaire")
  Déclenche plus tard : (ex: "pose une brouille avec le coach qui doit ressortir dans un événement College/Pro à enjeu")
Choix 2 — libellé :
  Effet(s) :
Choix 3 — libellé (optionnel) :
  Effet(s) :
Choix 4 — libellé (optionnel) :
  Effet(s) :
```

Titre : Le blitz est évident
Emoji : 🧠
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière : 
Nécessite :
Contexte : 3rd & 6. Deux linebackers avancent vers la ligne et le safety descend dans la box. Le QB identifie une forte probabilité de blitz.

Choix 1 — libellé : Audibiliser
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 60% l'audible exploite parfaitement le blitz : Exposition +2. 40% la défense avait anticipé le changement : Technique -2, Mental -2.
  Déclenche plus tard :

Choix 2 — libellé : Faire confiance au play-call
  Effet(s) : Mental +1
  Résultat aléatoire : 55% le play fonctionne comme prévu : Technique +1. 45% le blitz arrive immédiatement : Mental -2, Exposition -1.

Choix 3 — libellé : Garder le RB en protection
  Effet(s) : Technique +1
  Résultat aléatoire : 70% la protection fonctionne. 30% le QB perd une solution de passe : Exposition -1, Technique -1.

Titre : Aucun safety derrière
Emoji : 🔥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense montre une Cover 0. Aucun safety ne protège le fond du terrain et les receveurs sont presque tous en man coverage.

Choix 1 — libellé : Tenter le deep shot
  Effet(s) : Mental +1, Exposition +2
  Résultat aléatoire : 50% le receveur gagne son duel : Exposition +2. 30% la passe est incomplète. 20% le QB force le lancer : Technique -2, Mental -2, Exposition -2.

Choix 2 — libellé : Attaquer immédiatement en dessous
  Effet(s) : Technique +1
  Résultat aléatoire : 70% la passe rapide gagne quelques yards. 30% le blitz arrive avant la réception : Mental -1.

Choix 3 — libellé : Audibiliser en run
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 65% la box favorable est exploitée : Exposition +1. 35% un défenseur non identifié provoque une perte : Technique -1, Exposition -1.

Titre : Les deux safeties reculent
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Les deux safeties restent très profonds. La défense semble vouloir empêcher le big play.

Choix 1 — libellé : Attaquer entre les safeties
  Effet(s) : Technique +2, Exposition +1
  Résultat aléatoire : 45% la fenêtre est parfaite : Exposition +2. 35% la passe est incomplète. 20% le QB ne lit pas correctement la couverture : Technique -2, Mental -1.

Choix 2 — libellé : Prendre les yards courts
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 75% la série avance. 25% l'attaque devient prévisible : Exposition -1.

Choix 3 — libellé : Audibiliser en run
  Effet(s) : Technique +2
  Résultat aléatoire : 65% la box légère est exploitée. 35% le linebacker lit rapidement le changement : Technique -1.


Titre : La poche se referme
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le pass rush arrive plus vite que prévu. Le QB doit prendre une décision avant que la poche ne s'effondre.

Choix 1 — libellé : Scrambler
  Effet(s) : Physique +1, Mental +1
  Résultat aléatoire : 60% le QB gagne plusieurs yards : Exposition +1. 25% il est stoppé immédiatement. 15% il prend un gros contact : Physique -2, Mental -1.

Choix 2 — libellé : Lancer rapidement
  Effet(s) : Technique +1
  Résultat aléatoire : 65% la passe est complétée. 20% elle est trop précipitée : Technique -1. 15% elle est interceptée : Technique -2, Mental -2, Exposition -2.

Choix 3 — libellé : Attendre la route profonde
  Effet(s) : Exposition +2
  Résultat aléatoire : 35% le big play fonctionne : Exposition +3. 65% le QB prend le sack : Mental -2, Technique -1, Exposition -1.

Titre : Le WR1 est verrouillé
Emoji : 👀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le meilleur receveur de l'équipe attire systématiquement une double couverture.

Choix 1 — libellé : Forcer le ballon au WR1
  Effet(s) : Mental +1, Exposition +2
  Résultat aléatoire : 30% le WR1 réalise une action exceptionnelle : Exposition +3. 45% la passe est incomplète. 25% le QB est intercepté : Technique -2, Mental -3, Exposition -2.

Choix 2 — libellé : Lire les autres options
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 70% une autre cible est trouvée. 30% le QB tarde trop : Mental -1.

Choix 3 — libellé : Utiliser le WR1 comme leurre
  Effet(s) : Technique +2, Leadership +1
  Résultat aléatoire : 65% la défense est déplacée et une cible secondaire se libère : Exposition +1. 35% la défense ne mord pas.

Titre : Il faut gagner douze yards
Emoji : 🏈
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense protège les sticks et le premier down est loin.

Choix 1 — libellé : Chercher le big play
  Effet(s) : Exposition +2, Mental +1
  Résultat aléatoire : 40% le QB trouve une grosse fenêtre : Exposition +2. 35% la passe est incomplète. 25% le QB force le lancer : Technique -2, Mental -2.

Choix 2 — libellé : Prendre ce que la défense donne
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 70% le QB gagne des yards utiles. 30% le checkdown est trop court : Exposition -1.

Choix 3 — libellé : Scrambler
  Effet(s) : Physique +1
  Résultat aléatoire : 50% le QB convertit grâce à ses jambes : Exposition +2. 30% il est stoppé. 20% il prend un gros contact : Physique -2, Mental -1.

Titre : Tout le monde est pris
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense joue une couverture homme à homme. Aucun receveur ne semble avoir un avantage évident avant le snap.

Choix 1 — libellé : Identifier le meilleur matchup
  Effet(s) : Technique +2
  Résultat aléatoire : 65% le QB trouve le bon duel : Exposition +1. 35% il se trompe de matchup : Technique -1.

Choix 2 — libellé : Attaquer le milieu
  Effet(s) : Mental +1, Exposition +1
  Résultat aléatoire : 50% la fenêtre s'ouvre. 30% la passe est incomplète. 20% interception : Technique -2, Mental -2.

Choix 3 — libellé : Garder le jeu simple
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 75% le QB évite l'erreur. 25% le drive se termine rapidement : Exposition -1.

Titre : Le linebacker te surveille
Emoji : 🕵️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense a assigné un linebacker en QB spy.

Choix 1 — libellé : Attaquer le spy
  Effet(s) : Physique +1, Mental +1
  Résultat aléatoire : 50% le QB le bat : Exposition +2. 30% il est stoppé. 20% il prend un gros contact : Physique -2, Mental -1.

Choix 2 — libellé : Rester dans la poche
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 70% le QB trouve une fenêtre. 30% la pression arrive : Mental -1.

Choix 3 — libellé : Feinter le scramble
  Effet(s) : Technique +2
  Résultat aléatoire : 60% le spy mord : Exposition +2. 40% il reste discipliné : Exposition -1.

Titre : Terrain réduit
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense compacte la formation et réduit considérablement les espaces disponibles.

Choix 1 — libellé : Attaquer rapidement
  Effet(s) : Technique +1, Exposition +1
  Résultat aléatoire : 60% le QB trouve une fenêtre : Exposition +2. 40% la défense ferme immédiatement la fenêtre : Technique -1.

Choix 2 — libellé : Play-action
  Effet(s) : Technique +2
  Résultat aléatoire : 55% un défenseur mord : Exposition +2. 45% la défense reste parfaitement disciplinée : Exposition -1.

Choix 3 — libellé : Garder le ballon
  Effet(s) : Physique +1, Mental +1
  Résultat aléatoire : 55% le QB trouve une ouverture : Exposition +1. 45% il prend un gros contact : Physique -2.

Titre : Deux minutes au chrono
Emoji : ⏱️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : L'équipe doit remonter le terrain rapidement.

Choix 1 — libellé : Attaque ultra-rapide
  Effet(s) : Mental +2, Exposition +1
  Résultat aléatoire : 60% le rythme désorganise la défense : Exposition +2. 40% le QB précipite une décision : Technique -2, Mental -1.

Choix 2 — libellé : Jouer méthodiquement
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 75% le QB maîtrise parfaitement le drive. 25% le chrono devient un problème : Exposition -2.

Choix 3 — libellé : Chercher immédiatement le big play
  Effet(s) : Exposition +3
  Résultat aléatoire : 35% le big play fonctionne : Exposition +3. 45% la passe est incomplète. 20% interception : Technique -2, Mental -3, Exposition -2.

Titre : Quatrième tentative
Emoji : 4️⃣
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : 4th & 3. L'équipe doit décider si elle tente de conserver la possession.

Choix 1 — libellé : Demander à jouer
  Effet(s) : Leadership +2, Mental +1
  Résultat aléatoire : 55% conversion : Exposition +2. 45% échec : Mental -2, Exposition -2.

Choix 2 — libellé : Faire confiance au coach
  Effet(s) : Leadership +1, Mental +1
  Résultat aléatoire : 70% la décision du coach est payante. 30% l'équipe abandonne la possession : Exposition -1.

Choix 3 — libellé : Proposer une lecture précise
  Effet(s) : Technique +2
  Résultat aléatoire : 60% la lecture fonctionne : Exposition +2. 40% le défenseur anticipe : Technique -1, Mental -1.

Titre : Après l'interception
Emoji : 🧠
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le QB revient sur le terrain après une interception. Toute l'équipe attend de voir comment il va réagir.

Choix 1 — libellé : Repartir agressivement
  Effet(s) : Mental +2, Exposition +2
  Résultat aléatoire : 45% le QB répond avec un big play : Exposition +3. 35% passe incomplète. 20% nouvelle erreur : Technique -2, Mental -3, Exposition -2.

Choix 2 — libellé : Sécuriser les premières passes
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 75% le QB reprend confiance. 25% il devient trop prévisible : Exposition -1.

Choix 3 — libellé : S'appuyer sur le jeu au sol
  Effet(s) : Leadership +1, Mental +1
  Résultat aléatoire : 70% l'attaque reprend son rythme. 30% le run game ne fonctionne pas : Exposition -1.

Titre : La protection ne tient plus
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La ligne offensive a déjà concédé plusieurs pressions. Le QB doit adapter son approche.

Choix 1 — libellé : Garder un RB en protection
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 75% la protection tient. 25% le pass rush gagne encore : Mental -1.

Choix 2 — libellé : Sortir le ballon très vite
  Effet(s) : Technique +2
  Résultat aléatoire : 70% le QB neutralise la pression. 30% il lance trop tôt : Technique -1, Exposition -1.

Choix 3 — libellé : Continuer à chercher en profondeur
  Effet(s) : Exposition +2, Mental +1
  Résultat aléatoire : 35% le big play fonctionne : Exposition +3. 45% sack : Mental -2, Technique -1. 20% fumble sous pression : Physique -1, Mental -2, Exposition -2.
Titre : Cinq secondes au compteur
Emoji : ⏰
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le play-call semble mauvais face à la défense affichée. Il reste cinq secondes avant le snap.

Choix 1 — libellé : Audibiliser
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 60% le changement est parfait : Exposition +2. 40% la communication est ratée : Technique -2, Mental -2.

Choix 2 — libellé : Garder le play
  Effet(s) : Mental +1
  Résultat aléatoire : 60% le play fonctionne suffisamment. 40% la défense exploite immédiatement le mauvais matchup : Technique -1, Exposition -1.

Choix 3 — libellé : Snap immédiatement
  Effet(s) : Mental +2
  Résultat aléatoire : 55% la défense n'a pas le temps de s'ajuster : Exposition +1. 45% le QB se retrouve enfermé dans un mauvais play : Technique -1.

Titre : Le drive qui décide du match
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Il reste moins de deux minutes. Le QB doit mener son équipe sur un drive potentiellement décisif.

Choix 1 — libellé : Prendre les commandes
  Effet(s) : Leadership +2, Mental +2
  Résultat aléatoire : 50% le QB réalise un drive exceptionnel : Exposition +4. 30% le drive avance mais échoue dans la red zone : Exposition +1, Mental -1. 20% le QB craque sous la pression : Mental -3, Technique -2, Exposition -3.

Choix 2 — libellé : Suivre strictement le plan
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 65% le plan fonctionne : Exposition +2. 35% la défense s'adapte et le drive échoue : Exposition -2.

Choix 3 — libellé : Jouer très agressif
  Effet(s) : Exposition +3, Mental +1
  Résultat aléatoire : 35% le QB réalise le big play nécessaire : Exposition +4. 40% les passes sont incomplètes : Exposition -1. 25% interception : Technique -2, Mental -3, Exposition -3.

Titre : Le safety triche
Emoji : 👀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le QB remarque avant le snap que le safety se positionne légèrement du côté du WR1. La défense semble anticiper le jeu destiné au meilleur receveur.

Choix 1 — libellé : Attaquer l'autre côté
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 65% le QB exploite parfaitement le déséquilibre : Exposition +2. 35% la défense se réajuste : Exposition -1.

Choix 2 — libellé : Garder le plan initial
  Effet(s) : Mental +1
  Résultat aléatoire : 50% le WR1 gagne malgré l'aide du safety : Exposition +2. 30% passe incomplète. 20% interception : Technique -2, Mental -2, Exposition -2.

Choix 3 — libellé : Utiliser le WR1 comme leurre
  Effet(s) : Technique +2, Leadership +1
  Résultat aléatoire : 70% la défense suit le WR1 et libère une autre cible : Exposition +1. 30% la défense ne mord pas.

Titre : Le mauvais snap
Emoji : 😬
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le snap arrive légèrement trop haut. Le QB doit réagir immédiatement alors que la défense attaque déjà la ligne.

Choix 1 — libellé : Se jeter sur le ballon
  Effet(s) : Physique +1, Mental +1
  Résultat aléatoire : 80% le QB récupère le ballon. 20% la défense récupère le fumble : Mental -2, Exposition -2.

Choix 2 — libellé : Tenter de jouer malgré tout
  Effet(s) : Technique +1, Exposition +1
  Résultat aléatoire : 40% le QB transforme la catastrophe en action positive : Exposition +2. 35% perte de yards : Exposition -1. 25% fumble : Physique -1, Mental -2, Exposition -2.

Choix 3 — libellé : Jeter le ballon hors zone
  Effet(s) : Mental +1
  Résultat aléatoire : 75% le QB évite le pire. 25% le ballon est lancé dangereusement : Technique -1, Mental -1.

Titre : Le côté aveugle
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Un edge rusher arrive rapidement du côté aveugle du QB. Le QB ne l'a pas identifié avant le snap.

Choix 1 — libellé : Se retourner et s'échapper
  Effet(s) : Physique +1, Mental +1
  Résultat aléatoire : 55% le QB s'échappe : Exposition +1. 30% sack : Mental -2. 15% gros contact : Physique -2, Mental -2.

Choix 2 — libellé : Lancer immédiatement
  Effet(s) : Technique +2
  Résultat aléatoire : 60% le QB trouve une cible courte. 25% passe incomplète. 15% interception : Technique -2, Mental -2, Exposition -2.

Choix 3 — libellé : Encaisser le sack
  Effet(s) : Mental +1
  Résultat aléatoire : 80% le QB protège le ballon. 20% fumble : Mental -2, Exposition -2.

Titre : Le receveur improvise
Emoji : 🔀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le WR ne réalise pas exactement la route prévue et change brusquement de direction. Le QB doit décider s'il adapte immédiatement son lancer.

Choix 1 — libellé : Suivre son improvisation
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 60% les deux joueurs se comprennent : Exposition +2. 40% mauvaise communication : Technique -2, Mental -1.

Choix 2 — libellé : Garder le lancer prévu
  Effet(s) : Technique +1
  Résultat aléatoire : 50% le WR revient sur la trajectoire. 50% passe incomplète.

Choix 3 — libellé : Chercher une autre cible
  Effet(s) : Mental +1, Technique +1
  Résultat aléatoire : 65% une autre cible est disponible. 35% le QB hésite : Mental -1.

Titre : Le blitz retardé
Emoji : 🧩
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le linebacker reste initialement en couverture avant de déclencher son blitz quelques secondes après le snap.

Choix 1 — libellé : Identifier immédiatement le blitz
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 65% le QB trouve rapidement la solution : Exposition +1. 35% il réagit trop tard : Technique -1, Mental -1.

Choix 2 — libellé : Attaquer le milieu
  Effet(s) : Technique +1, Exposition +1
  Résultat aléatoire : 50% la fenêtre est ouverte. 30% passe incomplète. 20% interception : Technique -2, Mental -2.

Choix 3 — libellé : Sortir de la poche
  Effet(s) : Physique +1
  Résultat aléatoire : 60% le QB gagne du temps. 40% il est contenu : Mental -1, Exposition -1.

Titre : Changer le rythme
Emoji : ⏱️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense commence à anticiper le rythme de l'attaque. Le QB peut modifier la cadence des snaps.

Choix 1 — libellé : Accélérer brutalement
  Effet(s) : Mental +1, Exposition +1
  Résultat aléatoire : 60% la défense est désorganisée : Exposition +2. 40% l'attaque commet une erreur de communication : Technique -1, Mental -1.

Choix 2 — libellé : Ralentir le tempo
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 70% le QB reprend le contrôle du rythme. 30% la défense profite du temps supplémentaire pour ajuster sa couverture.

Choix 3 — libellé : Garder le rythme habituel
  Effet(s) : Mental +1
  Résultat aléatoire : 55% aucun problème. 45% la défense continue à anticiper : Exposition -1.

Titre : Le corner est en press
Emoji : 🥊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le CB se place directement devant le WR et cherche à perturber sa release.

Choix 1 — libellé : Attaquer immédiatement
  Effet(s) : Technique +1, Exposition +2
  Résultat aléatoire : 45% le WR gagne son duel : Exposition +2. 35% le CB gagne le duel. 20% pression et passe forcée : Technique -2, Mental -1.

Choix 2 — libellé : Utiliser une motion
  Effet(s) : Technique +2
  Résultat aléatoire : 70% la motion révèle la couverture : Exposition +1. 30% la défense ne bouge pas comme prévu : Mental -1.

Choix 3 — libellé : Changer de cible
  Effet(s) : Mental +1, Technique +1
  Résultat aléatoire : 70% une cible secondaire est ouverte. 30% le QB perd du temps.

Titre : Lire la RPO
Emoji : 🔀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Sur une RPO, le QB doit rapidement lire le défenseur conflictuel et décider de donner le ballon ou de lancer.

Choix 1 — libellé : Garder et passer
  Effet(s) : Technique +2, Exposition +1
  Résultat aléatoire : 60% la lecture est parfaite : Exposition +2. 40% le défenseur ne mord pas : Technique -1.

Choix 2 — libellé : Donner au RB
  Effet(s) : Mental +1
  Résultat aléatoire : 70% le run gagne correctement. 30% le QB manque une opportunité de passe : Exposition -1.

Choix 3 — libellé : Garder et courir
  Effet(s) : Physique +1, Exposition +1
  Résultat aléatoire : 50% le QB trouve un espace : Exposition +2. 30% gain minimal. 20% gros contact : Physique -2, Mental -1.

Titre : Deux sacks consécutifs
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : La défense vient de sacker le QB deux fois sur les deux derniers drives. La pression commence à influencer son jeu.

Choix 1 — libellé : Continuer à attaquer
  Effet(s) : Mental +2, Exposition +2
  Résultat aléatoire : 45% le QB répond avec un big play : Exposition +3. 35% nouvelle pression : Mental -2. 20% interception : Technique -2, Mental -3, Exposition -2.

Choix 2 — libellé : Sortir rapidement le ballon
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 70% le QB stabilise le drive. 30% l'attaque devient trop prévisible : Exposition -1.

Choix 3 — libellé : Utiliser davantage le jeu au sol
  Effet(s) : Leadership +1, Mental +1
  Résultat aléatoire : 65% le rythme de l'attaque revient. 35% la défense continue à dominer : Mental -1.

Titre : Le safety anticipe
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le QB remarque que le safety anticipe systématiquement une route courte destinée au slot receiver.

Choix 1 — libellé : Le piéger avec une double move
  Effet(s) : Technique +2, Exposition +2
  Résultat aléatoire : 55% le safety mord complètement : Exposition +3. 45% il reste patient : Exposition -1.

Choix 2 — libellé : Continuer à jouer normalement
  Effet(s) : Mental +1
  Résultat aléatoire : 50% la défense ne change rien. 50% le safety provoque une passe incomplète : Technique -1.

Choix 3 — libellé : Attaquer ailleurs
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 70% une autre zone est ouverte : Exposition +1. 30% la défense ferme également cette option.

Titre : Le ballon devient glissant
Emoji : 🌧️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Une forte pluie commence pendant le match. Le ballon devient plus difficile à contrôler et les passes profondes deviennent plus risquées.

Choix 1 — libellé : Continuer à lancer profondément
  Effet(s) : Exposition +2
  Résultat aléatoire : 35% big play : Exposition +3. 40% passe incomplète. 25% mauvaise passe : Technique -2, Mental -1.

Choix 2 — libellé : Raccourcir les passes
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 75% le QB sécurise son jeu. 25% fumble ou passe mal contrôlée : Technique -1.

Choix 3 — libellé : S'appuyer sur le jeu au sol
  Effet(s) : Leadership +1, Mental +1
  Résultat aléatoire : 65% l'équipe contrôle le rythme. 35% la défense s'adapte.

Titre : Faire regarder le mauvais côté
Emoji : 👁️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Un linebacker protège le milieu du terrain. Le QB peut tenter de manipuler son regard avec ses yeux et son mouvement de bras.

Choix 1 — libellé : Regarder à gauche, lancer à droite
  Effet(s) : Technique +2, Mental +1
  Résultat aléatoire : 65% le linebacker mord : Exposition +2. 35% il reste discipliné.

Choix 2 — libellé : Regarder directement la cible
  Effet(s) : Mental +1
  Résultat aléatoire : 55% la passe fonctionne. 45% le linebacker lit immédiatement le lancer : Technique -1.

Choix 3 — libellé : Utiliser le play-action
  Effet(s) : Technique +2
  Résultat aléatoire : 60% le linebacker descend : Exposition +2. 40% il ne mord pas : Exposition -1.

Titre : Le coup après le lancer
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Le QB voit son receveur ouvert mais sait qu'il va prendre un gros contact immédiatement après avoir lancé.

Choix 1 — libellé : Lancer malgré le contact
  Effet(s) : Mental +2, Exposition +1
  Résultat aléatoire : 60% la passe est complétée malgré le hit : Exposition +2. 25% passe incomplète. 15% gros contact : Physique -2, Mental -1.

Choix 2 — libellé : Jeter le ballon
  Effet(s) : Mental +1, Technique +1
  Résultat aléatoire : 80% le QB évite le contact. 20% il perd une opportunité de big play : Exposition -1.

Choix 3 — libellé : Sortir de la poche
  Effet(s) : Physique +1
  Résultat aléatoire : 50% le QB gagne du temps : Exposition +1. 30% sack. 20% gros contact : Physique -2, Mental -1.

Titre : Faire tourner le chrono
Emoji : ⏳
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Son équipe mène de trois points dans les dernières minutes. Le QB doit protéger l'avance et empêcher l'adversaire de récupérer le ballon trop rapidement.

Choix 1 — libellé : Jouer ultra-prudent
  Effet(s) : Mental +1, Technique +1
  Résultat aléatoire : 70% l'équipe consomme beaucoup de temps. 30% l'attaque devient trop prévisible : Exposition -1.

Choix 2 — libellé : Continuer à attaquer
  Effet(s) : Exposition +1, Mental +1
  Résultat aléatoire : 45% l'équipe gagne un first down décisif : Exposition +2. 35% passe incomplète. 20% interception : Technique -2, Mental -3, Exposition -3.

Choix 3 — libellé : Chercher la course du QB
  Effet(s) : Physique +1, Leadership +1
  Résultat aléatoire : 55% le QB gagne suffisamment de yards. 30% gain minimal. 15% gros contact : Physique -2.

Titre : Le safety est trop profond
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : QB
Condition particulière :
Nécessite :
Contexte : Après le snap, le QB remarque que le safety a reculé trop profondément et laisse une zone intermédiaire complètement ouverte.

Choix 1 — libellé : Attaquer immédiatement la fenêtre
  Effet(s) : Technique +2, Exposition +2
  Résultat aléatoire : 65% le lancer est parfait : Exposition +3. 20% passe incomplète. 15% mauvaise lecture : Technique -2, Mental -1.

Choix 2 — libellé : Attendre la route profonde
  Effet(s) : Exposition +2
  Résultat aléatoire : 35% le big play arrive. 45% le safety se replace. 20% sack : Mental -2, Technique -1.

Choix 3 — libellé : Checkdown
  Effet(s) : Technique +1, Mental +1
  Résultat aléatoire : 75% le QB sécurise le drive. 25% il laisse passer une grosse opportunité : Exposition -1.

WR — Événement 1

Titre : Le corner est en press
Emoji : 🥊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Condition particulière :
Nécessite :
Contexte : Le CB est directement aligné devant le WR et cherche à l'empêcher de sortir proprement de sa release.

Choix 1 — libellé : Attaquer immédiatement son épaule extérieure

Effet(s) : Technique +2, Physique +1
Résultat aléatoire : 65% le WR gagne rapidement l'extérieur : Exposition +2. 35% le CB réussit à le contenir : Technique -1.

Choix 2 — libellé : Utiliser un release intérieur

Effet(s) : Technique +2
Résultat aléatoire : 60% le WR crée immédiatement de la séparation. 40% le CB le bloque dans sa trajectoire : Technique -1, Mental -1.

Choix 3 — libellé : Jouer physique contre le CB

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 55% le WR impose son contact : Exposition +1. 30% duel sans avantage. 15% le WR est pénalisé : Mental -2, Exposition -1.
2. Le CB joue très loin

Titre : Dix yards de cushion
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le corner recule de presque dix yards avant le snap afin d'empêcher toute réception profonde.

Choix 1 — libellé : Attaquer immédiatement en dessous

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 75% le WR gagne rapidement quelques yards après réception. 25% le CB ferme rapidement l'espace : Exposition -1.

Choix 2 — libellé : Accélérer vers le fond du terrain

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 45% le WR force le CB à reculer davantage : Exposition +2. 35% le CB garde sa profondeur. 20% le WR ne crée aucune séparation : Technique -1.

Choix 3 — libellé : Utiliser un comeback

Effet(s) : Technique +2
Résultat aléatoire : 70% le WR revient parfaitement vers le ballon. 30% mauvais timing avec le QB : Technique -1, Mental -1.
3. Double coverage

Titre : Ils sont deux sur toi
Emoji : 👥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : La défense double systématiquement le WR depuis plusieurs drives.

Choix 1 — libellé : Continuer à attaquer verticalement

Effet(s) : Exposition +2, Mental +1
Résultat aléatoire : 30% le WR trouve quand même une fenêtre énorme : Exposition +3. 50% il ne reçoit aucun ballon. 20% il force son QB à tenter une passe dangereuse.

Choix 2 — libellé : Servir de leurre

Effet(s) : Leadership +2, Technique +1
Résultat aléatoire : 70% le déplacement du WR libère une autre cible : Leadership +1. 30% la défense ne réagit pas.

Choix 3 — libellé : Demander une motion

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% la motion révèle la couverture. 35% la défense communique parfaitement : Mental -1.
4. Le ballon arrive trop tôt

Titre : Le lancer est en avance
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le QB lance alors que le WR n'a pas encore complètement terminé sa route.

Choix 1 — libellé : Plonger pour le ballon

Effet(s) : Physique +1, Mental +1
Résultat aléatoire : 55% réception spectaculaire : Exposition +3. 30% incomplet. 15% réception ratée : Mental -2.

Choix 2 — libellé : Ralentir pour sécuriser

Effet(s) : Technique +1
Résultat aléatoire : 65% le WR ajuste correctement sa vitesse. 35% le ballon arrive derrière lui : Technique -1.

Choix 3 — libellé : Continuer la route prévue

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 50% le QB et le WR se comprennent. 50% passe incomplète.
5. Le contested catch

Titre : Le ballon est en l'air
Emoji : 👐
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR est couvert mais le QB place le ballon suffisamment haut pour permettre un duel aérien.

Choix 1 — libellé : Attaquer le ballon au point le plus haut

Effet(s) : Physique +1, Technique +1, Exposition +1
Résultat aléatoire : 55% réception : Exposition +3. 25% incomplet. 20% contact violent : Physique -2.

Choix 2 — libellé : Utiliser son corps pour protéger le ballon

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% réception sécurisée. 35% le défenseur joue parfaitement le ballon : Mental -1.

Choix 3 — libellé : Tenter la réception à une main

Effet(s) : Exposition +3
Résultat aléatoire : 25% réception spectaculaire : Exposition +4. 50% incomplet. 25% ballon dévié : Mental -1.
6. Le drop

Titre : Le ballon tombe
Emoji : 😬
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR vient de manquer une réception parfaitement accessible.

Choix 1 — libellé : Demander immédiatement une nouvelle cible

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 60% le WR se rattrape sur l'action suivante : Exposition +1. 40% la pression augmente : Mental -1.

Choix 2 — libellé : Se concentrer sur le prochain snap

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 75% le WR repart proprement. 25% il hésite encore sur sa prochaine réception : Technique -1.

Choix 3 — libellé : Prendre des risques pour se rattraper

Effet(s) : Exposition +2
Résultat aléatoire : 40% grosse réception : Exposition +3. 60% nouvelle erreur : Mental -2, Technique -1.
7. Block sur écran

Titre : Le block qui ouvre la voie
Emoji : 💪
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Une screen pass est appelée et le WR doit bloquer le défenseur qui arrive sur le RB.

Choix 1 — libellé : Aller chercher le contact

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 65% le block ouvre un gros espace : Exposition +1. 25% le block est neutre. 10% holding : Technique -1, Exposition -1.

Choix 2 — libellé : Bloquer avec patience

Effet(s) : Technique +2
Résultat aléatoire : 70% excellent block. 30% le défenseur échappe au WR : Technique -1.

Choix 3 — libellé : Se concentrer uniquement sur sa route

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 40% le WR reçoit le ballon sur l'action suivante. 60% le RB est stoppé rapidement.
8. Motion pré-snap

Titre : Bouge avant le snap
Emoji : 🔄
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR est placé en motion afin de déterminer si la défense joue homme ou zone.

Choix 1 — libellé : Accélérer la motion

Effet(s) : Physique +1, Technique +1
Résultat aléatoire : 65% la défense révèle sa couverture. 35% mauvaise coordination : Technique -1.

Choix 2 — libellé : Ralentir pour observer la défense

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 70% le WR identifie la couverture. 30% il ralentit trop l'exécution : Exposition -1.

Choix 3 — libellé : Garder une vitesse constante

Effet(s) : Technique +1
Résultat aléatoire : 75% la motion est parfaitement exécutée. 25% le défenseur anticipe.
9. Slant contre zone

Titre : La fenêtre s'ouvre
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR doit attaquer une zone intérieure entre deux défenseurs.

Choix 1 — libellé : Couper immédiatement

Effet(s) : Technique +2
Résultat aléatoire : 65% fenêtre parfaite : Exposition +2. 35% le linebacker ferme la fenêtre : Technique -1.

Choix 2 — libellé : Attendre une seconde de plus

Effet(s) : Mental +1
Résultat aléatoire : 45% le défenseur est attiré ailleurs : Exposition +2. 55% la fenêtre disparaît : Exposition -1.

Choix 3 — libellé : Continuer verticalement

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 35% le WR trouve un espace profond : Exposition +3. 65% le safety ferme la route.
10. Le corner tourne le dos

Titre : Le défenseur ne te voit plus
Emoji : 👁️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le CB tourne les hanches et se retrouve dos au WR.

Choix 1 — libellé : Accélérer verticalement

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 60% séparation : Exposition +3. 40% le safety vient aider.

Choix 2 — libellé : Casser immédiatement vers l'intérieur

Effet(s) : Technique +2
Résultat aléatoire : 65% réception facile. 35% mauvais timing avec le QB : Technique -1.

Choix 3 — libellé : Continuer à vendre la route profonde

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 55% le CB recule encore. 45% aucune séparation.
11. Route près de la sideline

Titre : Deux pieds dedans
Emoji : 📍
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le QB lance vers la ligne de touche. Le WR doit contrôler son corps et sécuriser la réception.

Choix 1 — libellé : Attaquer le ballon

Effet(s) : Technique +2, Exposition +1
Résultat aléatoire : 65% réception parfaite. 35% le WR sort du terrain : Technique -1.

Choix 2 — libellé : Attendre le dernier moment

Effet(s) : Mental +1
Résultat aléatoire : 55% réception spectaculaire : Exposition +2. 45% réception ratée.

Choix 3 — libellé : Sécuriser avant tout

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 80% réception contrôlée. 20% le WR perd quelques yards.
12. YAC

Titre : Le ballon dans les mains
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR vient de réceptionner une passe courte avec plusieurs défenseurs devant lui.

Choix 1 — libellé : Attaquer plein axe

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 45% gros gain : Exposition +2. 35% gain moyen. 20% gros contact : Physique -2.

Choix 2 — libellé : Chercher l'extérieur

Effet(s) : Technique +1, Physique +1
Résultat aléatoire : 60% le WR gagne quelques yards supplémentaires. 40% il est poussé vers la touche.

Choix 3 — libellé : Se mettre immédiatement au sol

Effet(s) : Mental +1
Résultat aléatoire : 80% le WR protège le ballon. 20% il rate une possibilité importante : Exposition -1.
13. Red zone fade

Titre : Fade dans la end zone
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le QB regarde le WR isolé près de la ligne de touche dans la red zone.

Choix 1 — libellé : Attaquer le point haut

Effet(s) : Technique +1, Physique +1, Exposition +2
Résultat aléatoire : 45% touchdown : Exposition +4. 35% incomplet. 20% le CB dévie le ballon.

Choix 2 — libellé : Créer de l'espace avec le corps

Effet(s) : Technique +2
Résultat aléatoire : 60% séparation suffisante : Exposition +2. 40% contact trop important : Technique -1.

Choix 3 — libellé : Attaquer l'intérieur

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 55% le WR surprend le CB : Exposition +2. 45% la défense ferme l'espace.
14. Press coverage sur 3rd down

Titre : Third down, press coverage
Emoji : 🔥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : 3rd & 7. Le corner est en press et le WR doit gagner rapidement sa release.

Choix 1 — libellé : Release agressive

Effet(s) : Physique +1, Technique +2
Résultat aléatoire : 55% séparation immédiate : Exposition +2. 45% le CB gagne le duel : Technique -1.

Choix 2 — libellé : Double move

Effet(s) : Technique +2, Exposition +1
Résultat aléatoire : 40% le CB mord : Exposition +3. 60% la route ne se développe pas.

Choix 3 — libellé : Route courte

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 70% conversion possible après réception. 30% le WR ne gagne pas assez de séparation.
15. Le safety vient aider

Titre : Le safety arrive
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR bat son corner mais un safety se rapproche rapidement.

Choix 1 — libellé : Continuer verticalement

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 40% le WR reste ouvert : Exposition +3. 40% le safety ferme la fenêtre. 20% gros contact : Physique -2.

Choix 2 — libellé : Couper vers l'intérieur

Effet(s) : Technique +2
Résultat aléatoire : 65% le changement de direction bat l'aide : Exposition +2. 35% le safety lit le changement : Technique -1.

Choix 3 — libellé : Ralentir la route

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 55% le QB ajuste son lancer. 45% mauvais timing.
16. Le WR doit bloquer sur une course extérieure

Titre : Ton block décide du run
Emoji : 💪
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le RB part vers l'extérieur et le WR doit empêcher le corner de fermer le couloir.

Choix 1 — libellé : Bloquer frontalement

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 60% gros block : Exposition +1. 25% block neutre. 15% holding : Technique -1, Exposition -1.

Choix 2 — libellé : Bloquer avec l'angle

Effet(s) : Technique +2
Résultat aléatoire : 70% excellent block. 30% mauvais angle : Technique -1.

Choix 3 — libellé : Se détacher pour recevoir une screen

Effet(s) : Exposition +1, Technique +1
Résultat aléatoire : 50% le WR reçoit le ballon. 50% la défense lit la screen.
17. Le QB regarde ailleurs

Titre : Le QB ne te regarde pas
Emoji : 👀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR gagne son duel mais le QB regarde une autre partie du terrain.

Choix 1 — libellé : Continuer la route

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 60% le QB revient vers lui. 40% aucune cible.

Choix 2 — libellé : Improviser pour entrer dans son champ de vision

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 60% le QB comprend l'ajustement : Exposition +2. 40% mauvaise communication : Mental -2.

Choix 3 — libellé : Faire signe au QB

Effet(s) : Leadership +1, Mental +1
Résultat aléatoire : 50% le QB réagit. 50% le geste perturbe la synchronisation.
18. Deep ball

Titre : Le ballon part loin
Emoji : 🚀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le QB lance une passe profonde. Le WR doit suivre la trajectoire tout en gardant son avantage sur le CB.

Choix 1 — libellé : Accélérer au maximum

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 45% séparation : Exposition +4. 35% le ballon est trop long. 20% le CB revient dans le jeu.

Choix 2 — libellé : Se retourner tôt pour suivre le ballon

Effet(s) : Technique +2
Résultat aléatoire : 70% bonne réception potentielle. 30% le WR ralentit trop et perd sa séparation.

Choix 3 — libellé : Continuer sans regarder le ballon

Effet(s) : Physique +1, Mental +1
Résultat aléatoire : 50% le WR reçoit en stride : Exposition +3. 50% il ne localise pas le ballon à temps : Mental -1.
19. Contact à la ligne

Titre : Le jam
Emoji : 🥊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le corner réussit à mettre un contact légal au début de la route.

Choix 1 — libellé : Utiliser les mains pour se libérer

Effet(s) : Technique +2, Physique +1
Résultat aléatoire : 65% le WR se libère. 35% contact illégal : Technique -1, Exposition -1.

Choix 2 — libellé : Prendre l'extérieur

Effet(s) : Physique +1
Résultat aléatoire : 60% il gagne la course. 40% le CB le repousse vers la touche.

Choix 3 — libellé : Accepter le contact et continuer

Effet(s) : Mental +2
Résultat aléatoire : 70% le WR maintient sa route. 30% il perd son timing avec le QB : Technique -1.
20. Le corner est battu

Titre : Il est derrière toi
Emoji : 🏃‍♂️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR a complètement battu son défenseur et dispose d'une séparation importante.

Choix 1 — libellé : Accélérer encore

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 70% énorme séparation : Exposition +3. 30% le ballon est trop profond.

Choix 2 — libellé : Ralentir pour aider le QB

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 75% le QB trouve parfaitement le WR. 25% mauvais timing.

Choix 3 — libellé : Regarder immédiatement le ballon

Effet(s) : Technique +1
Résultat aléatoire : 60% réception possible. 40% le WR ralentit et laisse revenir le CB.
21. Le ballon est légèrement derrière

Titre : Ajustement difficile
Emoji : 👐
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : La passe arrive légèrement derrière le WR alors qu'un défenseur est proche.

Choix 1 — libellé : Tourner le corps pour absorber le contact

Effet(s) : Physique +1, Technique +1
Résultat aléatoire : 55% réception : Exposition +2. 30% incomplet. 15% gros contact : Physique -1.

Choix 2 — libellé : Tenter la réception à une main

Effet(s) : Exposition +2
Résultat aléatoire : 30% réception spectaculaire : Exposition +3. 70% incomplet.

Choix 3 — libellé : Abandonner la réception et éviter le contact

Effet(s) : Mental +1
Résultat aléatoire : 80% aucun problème. 20% occasion manquée : Exposition -1.
22. Le WR doit improviser sa route

Titre : Broken play
Emoji : 🔀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le QB sort de sa poche et le play initial est détruit. Le WR doit comprendre où aller pour créer une solution.

Choix 1 — libellé : Revenir vers le QB

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% le QB trouve le WR : Exposition +2. 35% mauvaise lecture : Mental -1.

Choix 2 — libellé : Continuer vers le fond

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 40% big play. 60% le QB ne peut pas lancer.

Choix 3 — libellé : Couper vers la sideline

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 60% le WR devient une cible sûre. 40% mauvaise synchronisation.
23. Third down

Titre : Il faut convertir
Emoji : 🔥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : 3rd & 7. Le WR doit gagner son duel pour prolonger le drive.

Choix 1 — libellé : Attaquer les sticks

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% conversion : Exposition +2. 35% le CB ferme la fenêtre.

Choix 2 — libellé : Chercher le big play

Effet(s) : Exposition +3
Résultat aléatoire : 35% énorme gain : Exposition +3. 45% incomplet. 20% interception ou turnover provoqué : Mental -2, Exposition -2.

Choix 3 — libellé : Route courte pour assurer la réception

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 70% réception. 30% gain insuffisant : Exposition -1.
24. Le WR2 doit prendre le relais

Titre : Ton moment arrive
Emoji : 🌟
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR1 est fortement couvert et le QB commence à chercher davantage le WR2.

Choix 1 — libellé : Se rendre disponible

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% le WR gagne plusieurs réceptions : Exposition +2. 30% il ne crée pas suffisamment de séparation.

Choix 2 — libellé : Prendre plus de risques sur ses routes

Effet(s) : Exposition +2
Résultat aléatoire : 45% grosse action : Exposition +3. 35% incomplet. 20% mauvaise lecture : Technique -2, Mental -1.

Choix 3 — libellé : Jouer le rôle de leurre

Effet(s) : Leadership +2, Technique +1
Résultat aléatoire : 70% le WR libère un coéquipier. 30% il disparaît complètement de l'action.
25. Le CB te parle

Titre : Le trash talk
Emoji : 🗣️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le corner commence à provoquer verbalement le WR après plusieurs duels.

Choix 1 — libellé : Ne rien répondre

Effet(s) : Mental +2
Résultat aléatoire : 80% le WR reste concentré. 20% la provocation continue à peser : Mental -1.

Choix 2 — libellé : Lui répondre sur le terrain

Effet(s) : Mental +1, Exposition +1
Résultat aléatoire : 50% le WR gagne le duel suivant : Exposition +2. 50% le CB gagne : Mental -2.

Choix 3 — libellé : Chercher immédiatement le duel

Effet(s) : Exposition +2, Mental +1
Résultat aléatoire : 45% grosse réception. 35% incomplet. 20% pénalité ou erreur : Mental -2, Exposition -1.
26. Le QB fait confiance au WR

Titre : « Go get it »
Emoji : 🏈
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le QB lance le ballon dans une zone contestée en faisant confiance au WR pour gagner son duel.

Choix 1 — libellé : Attaquer le ballon

Effet(s) : Physique +1, Mental +1, Exposition +2
Résultat aléatoire : 55% réception : Exposition +3. 30% incomplet. 15% interception : Mental -2, Exposition -2.

Choix 2 — libellé : Utiliser son corps

Effet(s) : Technique +2, Physique +1
Résultat aléatoire : 65% réception sécurisée. 35% le défenseur dévie le ballon.

Choix 3 — libellé : Jouer uniquement le ballon

Effet(s) : Technique +1
Résultat aléatoire : 45% grosse réception. 55% le défenseur intervient au dernier moment.
27. Retour après un gros contact

Titre : Il faut se relever
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR vient de prendre un gros contact après une réception et doit repartir sur le snap suivant.

Choix 1 — libellé : Repartir immédiatement

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 65% le WR montre sa solidité : Exposition +1. 35% fatigue : Physique -1.

Choix 2 — libellé : Jouer plus intelligemment

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% le WR évite les contacts inutiles. 30% il perd de l'agressivité.

Choix 3 — libellé : Attaquer encore plus physiquement

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 45% nouveau gros play. 35% aucun avantage. 20% nouveau gros contact : Physique -2, Mental -1.
28. Le WR doit reconnaître la couverture

Titre : Man ou zone ?
Emoji : 🧠
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Le WR doit identifier la couverture avant le snap afin d'ajuster sa route.

Choix 1 — libellé : Lire les mouvements des défenseurs

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 75% lecture correcte. 25% mauvaise interprétation : Technique -1.

Choix 2 — libellé : Se fier au play-call

Effet(s) : Mental +1
Résultat aléatoire : 70% la lecture du coordinateur est correcte. 30% la défense change sa couverture.

Choix 3 — libellé : Ajuster sa route selon le corner

Effet(s) : Technique +2
Résultat aléatoire : 60% excellent ajustement : Exposition +1. 40% le QB n'attendait pas cette modification : Mental -2.
29. Fin de match

Titre : Le drive décisif
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Il reste moins de deux minutes. Le WR sait qu'il sera probablement ciblé sur les dernières possessions.

Choix 1 — libellé : Demander le ballon

Effet(s) : Leadership +2, Mental +1, Exposition +2
Résultat aléatoire : 50% grosse réception décisive : Exposition +4. 30% incomplet. 20% mauvaise action : Mental -2, Exposition -2.

Choix 2 — libellé : Jouer simplement et rester disponible

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% le WR contribue au drive : Exposition +2. 30% il reste peu ciblé : Exposition -1.

Choix 3 — libellé : Chercher le big play à chaque snap

Effet(s) : Exposition +3
Résultat aléatoire : 35% réception spectaculaire : Exposition +4. 45% aucune réception. 20% erreur de route : Technique -2, Mental -2, Exposition -2.

Choix 4 — libellé : Se sacrifier pour libérer un coéquipier

Effet(s) : Leadership +3, Technique +1
Résultat aléatoire : 70% le coéquipier gagne un gros gain. 30% le block ou la route échoue : Technique -1.
30. Le dernier ballon

Titre : Dernière chance
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : WR
Contexte : Dernière action du match. Le QB envoie une passe dans la end zone. Plusieurs joueurs se battent pour le ballon.

Choix 1 — libellé : Attaquer le point le plus haut

Effet(s) : Physique +1, Technique +1, Exposition +3
Résultat aléatoire : 20% touchdown spectaculaire : Exposition +5. 45% passe incomplète. 35% le défenseur gagne le duel : Mental -1.

Choix 2 — libellé : Chercher le rebond

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 35% le WR récupère un ballon dévié : Exposition +4. 65% le ballon tombe au sol.

Choix 3 — libellé : Utiliser son corps pour empêcher le défenseur

Effet(s) : Physique +2, Technique +1
Résultat aléatoire : 50% réception : Exposition +4. 30% incomplet. 20% pénalité offensive : Technique -1, Exposition -2.

Choix 4 — libellé : Se placer pour le rebond plutôt que jouer le ballon

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 40% le ballon revient vers lui : Exposition +3. 60% aucun rebond exploitable.

1. Le trou se referme

Titre : Le trou disparaît
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Condition particulière :
Nécessite :
Contexte : Le RB reçoit le ballon mais le gap prévu est immédiatement bouché par le defensive tackle.

Choix 1 — libellé : Forcer le passage

Effet(s) : Physique +2
Résultat aléatoire : 55% le RB gagne quelques yards malgré tout : Exposition +1. 30% il est stoppé. 15% gros contact : Physique -2.

Choix 2 — libellé : Couper vers l'extérieur

Effet(s) : Technique +2
Résultat aléatoire : 60% le RB trouve un nouveau couloir : Exposition +1. 40% le linebacker ferme également l'extérieur : Technique -1.

Choix 3 — libellé : Patienter derrière la ligne

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 65% le RB attend que le bloc se développe : Exposition +2. 35% il attend trop longtemps : Exposition -1.
2. Le linebacker arrive plein axe

Titre : Collision imminente
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB vient de franchir la ligne mais un linebacker arrive directement sur lui.

Choix 1 — libellé : Baisser l'épaule

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 55% le RB gagne le contact : Exposition +1. 30% arrêt immédiat. 15% gros choc : Physique -2.

Choix 2 — libellé : Tenter un juke

Effet(s) : Technique +2
Résultat aléatoire : 50% le linebacker mord : Exposition +2. 35% il reste patient. 15% perte de balle : Technique -2, Mental -2, Exposition -2.

Choix 3 — libellé : Sortir en touche

Effet(s) : Mental +1
Résultat aléatoire : 85% le RB protège le ballon. 15% il perd quelques yards.
3. Le hole est énorme

Titre : Le boulevard
Emoji : 🛣️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : La ligne offensive crée un trou énorme au milieu.

Choix 1 — libellé : Accélérer plein axe

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 65% gros gain : Exposition +3. 25% gain moyen. 10% le safety intervient brutalement : Physique -1.

Choix 2 — libellé : Chercher un second trou

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 55% encore plus gros gain : Exposition +3. 45% le RB ralentit trop : Exposition -1.

Choix 3 — libellé : Suivre exactement le bloc

Effet(s) : Technique +1
Résultat aléatoire : 80% gain propre. 20% le RB rate une opportunité plus importante.
4. Outside zone

Titre : Lire le bord
Emoji : 🏃
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB reçoit sur une outside zone et doit décider quand couper vers l'intérieur.

Choix 1 — libellé : Continuer extérieur

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 55% le RB atteint le edge : Exposition +2. 45% le linebacker ferme l'extérieur.

Choix 2 — libellé : Couper derrière le bloc

Effet(s) : Technique +2
Résultat aléatoire : 65% grosse ouverture : Exposition +2. 35% le RB coupe trop tôt : Technique -1.

Choix 3 — libellé : Attendre le dernier moment

Effet(s) : Mental +2
Résultat aléatoire : 55% énorme lecture : Exposition +3. 45% le RB est rattrapé derrière la ligne : Exposition -2.
5. Le RB reçoit une screen

Titre : Screen pass
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : La défense blitz. Le QB laisse volontairement les pass rushers avancer avant de lancer une screen au RB.

Choix 1 — libellé : Attaquer immédiatement l'extérieur

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 60% gros gain : Exposition +3. 40% le défenseur lit la screen.

Choix 2 — libellé : Suivre les blocks

Effet(s) : Technique +2
Résultat aléatoire : 70% excellent gain. 30% le RB choisit le mauvais angle : Technique -1.

Choix 3 — libellé : Chercher le cutback

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 50% énorme espace : Exposition +3. 50% la défense ferme rapidement.
6. Pass protection

Titre : Le blitz arrive
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB doit rester en protection pour empêcher un linebacker de toucher le QB.

Choix 1 — libellé : Prendre le linebacker de face

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 65% excellente protection. 25% le RB est repoussé. 10% sack : Mental -2, Technique -1.

Choix 2 — libellé : Attaquer avec l'angle

Effet(s) : Technique +2
Résultat aléatoire : 70% protection réussie. 30% mauvais angle : Technique -1.

Choix 3 — libellé : Sortir en route

Effet(s) : Exposition +1
Résultat aléatoire : 50% le QB le trouve : Exposition +2. 50% le blitz arrive trop vite : Mental -1.
7. Fumble

Titre : Le ballon échappe
Emoji : 😱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB vient de perdre le contrôle du ballon après un gros contact.

Choix 1 — libellé : Se jeter immédiatement dessus

Effet(s) : Mental +1, Physique +1
Résultat aléatoire : 75% le RB récupère le ballon. 25% turnover : Mental -3, Exposition -3.

Choix 2 — libellé : Essayer de le récupérer en pleine course

Effet(s) : Physique +1
Résultat aléatoire : 40% récupération. 60% la défense récupère : Mental -3, Exposition -3.

Choix 3 — libellé : Sécuriser davantage le ballon à l'avenir

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : aucun effet immédiat.
8. Goal line

Titre : Un yard pour le touchdown
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB est à un yard de la end zone.

Choix 1 — libellé : Plonger au-dessus de la ligne

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 55% touchdown : Exposition +3. 30% stoppé. 15% gros contact : Physique -2.

Choix 2 — libellé : Suivre le block intérieur

Effet(s) : Technique +2
Résultat aléatoire : 70% touchdown. 30% la ligne défensive gagne le duel.

Choix 3 — libellé : Chercher l'extérieur

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 45% touchdown. 35% stoppé. 20% perte de yards : Exposition -1.
9. Fourth down

Titre : 4th & 1
Emoji : 🏈
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Toute la possession repose sur cette course.

Choix 1 — libellé : Plonger plein centre

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 65% first down : Leadership +1, Exposition +2. 35% stoppé : Mental -2, Exposition -1.

Choix 2 — libellé : Chercher le gap extérieur

Effet(s) : Technique +1
Résultat aléatoire : 45% first down : Exposition +2. 55% défense trop rapide : Exposition -2.

Choix 3 — libellé : Attendre derrière le fullback

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 70% first down. 30% perte de temps : Exposition -1.
10. Le safety est seul

Titre : One-on-one avec le safety
Emoji : ⚔️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB traverse la deuxième ligne et se retrouve seul face au safety.

Choix 1 — libellé : Juke

Effet(s) : Technique +2
Résultat aléatoire : 55% le safety mord : Exposition +2. 30% tackle. 15% fumble : Mental -2, Exposition -2.

Choix 2 — libellé : Aller au contact

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 55% le RB gagne quelques yards supplémentaires. 30% arrêt. 15% gros contact : Physique -2.

Choix 3 — libellé : Sortir vers la touche

Effet(s) : Mental +1
Résultat aléatoire : 80% le RB protège le ballon. 20% il laisse passer quelques yards.
11. Draw play

Titre : La défense mord au blitz
Emoji : 🎭
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : La défense blitz lourdement. L'attaque appelle une draw pour profiter de l'agressivité des pass rushers.

Choix 1 — libellé : Accélérer dès que possible

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 65% gros gain : Exposition +3. 35% le trou n'existe pas.

Choix 2 — libellé : Patienter

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 60% excellent gain. 40% la défense revient.

Choix 3 — libellé : Chercher le cutback

Effet(s) : Technique +2
Résultat aléatoire : 50% gros gain : Exposition +2. 50% tackle derrière la ligne.
12. Option QB/RB

Titre : Keep ou give ?
Emoji : 🔀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Sur une option, le RB doit exécuter parfaitement sa trajectoire pour laisser au QB le choix de garder ou donner.

Choix 1 — libellé : Maintenir la trajectoire prévue

Effet(s) : Technique +2
Résultat aléatoire : 75% excellente exécution. 25% mauvaise lecture collective : Mental -1.

Choix 2 — libellé : Accélérer vers le gap

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 60% gain positif. 40% le défenseur lit l'action.

Choix 3 — libellé : Ralentir pour laisser le QB décider

Effet(s) : Mental +1
Résultat aléatoire : 55% bonne lecture. 45% mauvaise synchronisation : Technique -1.
13. Red zone — outside run

Titre : Le edge est ouvert
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB voit un espace sur l'extérieur dans la red zone.

Choix 1 — libellé : Aller chercher le corner

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 50% touchdown : Exposition +3. 50% le défenseur ferme.

Choix 2 — libellé : Couper à l'intérieur

Effet(s) : Technique +2
Résultat aléatoire : 60% gain important. 40% tackle immédiat.

Choix 3 — libellé : Patienter derrière le block

Effet(s) : Mental +2
Résultat aléatoire : 65% ouverture : Exposition +2. 35% le RB est stoppé.
14. Le RB doit faire écran au blitz

Titre : Protéger le QB
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Un linebacker vient directement vers le QB.

Choix 1 — libellé : Prendre le contact

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 70% le QB a le temps de lancer. 30% le RB perd son duel : Technique -1.

Choix 2 — libellé : Bloquer avec le bon angle

Effet(s) : Technique +2
Résultat aléatoire : 75% protection réussie. 25% sack.

Choix 3 — libellé : Sortir en route

Effet(s) : Exposition +1
Résultat aléatoire : 45% réception. 55% le QB prend la pression : Mental -1.
15. Long run

Titre : 40 yards devant toi
Emoji : 🚀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB vient de franchir la ligne et dispose d'un énorme espace devant lui.

Choix 1 — libellé : Accélérer plein axe

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 50% touchdown : Exposition +4. 30% gros gain. 20% le safety arrive : Physique -1.

Choix 2 — libellé : Chercher le meilleur angle

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% énorme gain : Exposition +3. 30% le RB ralentit trop.

Choix 3 — libellé : Protéger le ballon avant tout

Effet(s) : Mental +1
Résultat aléatoire : 85% gros gain sécurisé. 15% opportunité manquée : Exposition -1.
16. Blitz zero

Titre : Personne ne couvre
Emoji : 🚨
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : La défense envoie pratiquement tout le monde. Le RB doit identifier sa priorité.

Choix 1 — libellé : Bloquer le linebacker

Effet(s) : Leadership +2, Physique +1
Résultat aléatoire : 70% le QB peut lancer. 30% le RB est dépassé : Technique -1.

Choix 2 — libellé : Sortir immédiatement en route

Effet(s) : Exposition +2
Résultat aléatoire : 50% réception énorme. 50% le QB est sacké avant.

Choix 3 — libellé : Attendre puis sortir

Effet(s) : Technique +2
Résultat aléatoire : 60% le QB gagne du temps. 40% trop tard : Mental -1.
17. Le RB est fatigué

Titre : Les jambes brûlent
Emoji : 🥵
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Après une longue série offensive, le RB commence à ressentir la fatigue.

Choix 1 — libellé : Demander quand même le ballon

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 45% gros gain : Exposition +2. 35% gain moyen. 20% grosse perte : Physique -1.

Choix 2 — libellé : Jouer plus intelligemment

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% le RB optimise ses courses. 30% baisse de rythme : Exposition -1.

Choix 3 — libellé : Demander une rotation

Effet(s) : Mental +1
Résultat aléatoire : 80% récupération efficace. 20% le coach estime que le RB aurait dû rester : Leadership -1.
18. Le fullback ouvre le chemin

Titre : Derrière le FB
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le fullback ouvre un chemin devant le RB.

Choix 1 — libellé : Suivre parfaitement son block

Effet(s) : Technique +2
Résultat aléatoire : 75% gros gain. 25% le RB rate l'ouverture.

Choix 2 — libellé : Couper derrière lui

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 55% énorme gain : Exposition +2. 45% le cutback n'existe pas.

Choix 3 — libellé : Passer devant lui

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 40% le RB surprend la défense. 60% tackle immédiat.
19. Goal line — contact

Titre : Tout le monde sait que tu vas courir
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : L'équipe est sur la goal line. Toute la défense anticipe une course intérieure.

Choix 1 — libellé : Frapper plein centre

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 55% touchdown : Exposition +3. 45% stoppé.

Choix 2 — libellé : Bounce extérieur

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 40% touchdown. 60% défense trop rapide.

Choix 3 — libellé : Sauter par-dessus la pile

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 45% touchdown spectaculaire : Exposition +3. 35% stoppé. 20% gros contact : Physique -2.
20. Two-minute drill

Titre : Il faut gagner du temps
Emoji : ⏱️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Il reste moins de deux minutes et chaque yard compte.

Choix 1 — libellé : Sortir rapidement en touche

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 70% le RB protège le chrono. 30% mauvaise lecture : Exposition -1.

Choix 2 — libellé : Chercher le maximum de yards

Effet(s) : Exposition +2
Résultat aléatoire : 50% gros gain : Exposition +2. 30% gain moyen. 20% fumble : Mental -2, Exposition -3.

Choix 3 — libellé : Se coucher après le first down

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 80% excellente gestion. 20% le coach voulait davantage de yards.
21. Le défenseur attend ton juke

Titre : Il ne mord pas
Emoji : 🧠
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB arrive face à un linebacker qui reste parfaitement équilibré et n'anticipe aucun mouvement.

Choix 1 — libellé : Faire quand même le juke

Effet(s) : Technique +1
Résultat aléatoire : 35% le défenseur mord finalement : Exposition +2. 65% tackle.

Choix 2 — libellé : Aller au contact

Effet(s) : Physique +2
Résultat aléatoire : 60% gain après contact. 40% arrêt.

Choix 3 — libellé : Changer de direction progressivement

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% le RB gagne l'angle. 35% le défenseur reste avec lui.
22. Le RB est utilisé comme receveur

Titre : Aligné dans le slot
Emoji : 🎯
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB est exceptionnellement aligné comme receveur.

Choix 1 — libellé : Attaquer verticalement

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 45% grosse séparation : Exposition +3. 55% le CB gagne le duel.

Choix 2 — libellé : Route courte

Effet(s) : Technique +2
Résultat aléatoire : 70% réception. 30% défenseur ferme rapidement.

Choix 3 — libellé : Utiliser un double move

Effet(s) : Technique +2, Exposition +1
Résultat aléatoire : 40% gros play : Exposition +3. 60% aucune séparation.
23. Le RB doit protéger le ballon

Titre : Deux défenseurs arrivent
Emoji : 🔒
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB vient de recevoir le ballon et deux défenseurs arrivent de côtés opposés.

Choix 1 — libellé : Couvrir le ballon à deux mains

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 85% ballon sécurisé. 15% perte de quelques yards.

Choix 2 — libellé : Continuer à chercher des yards

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 50% gain supplémentaire. 30% arrêt. 20% fumble : Mental -2, Exposition -3.

Choix 3 — libellé : Sortir en touche

Effet(s) : Mental +1
Résultat aléatoire : 90% ballon sécurisé. 10% le RB perd un yard.
24. Cutback

Titre : Le cutback est là
Emoji : ↩️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Tous les défenseurs ont suivi le mouvement initial. Un espace s'ouvre derrière eux.

Choix 1 — libellé : Couper immédiatement

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 60% énorme gain : Exposition +3. 40% le RB coupe trop tôt.

Choix 2 — libellé : Attendre encore

Effet(s) : Mental +2
Résultat aléatoire : 55% touchdown potentiel : Exposition +3. 45% le safety revient.

Choix 3 — libellé : Rester sur le chemin initial

Effet(s) : Technique +1
Résultat aléatoire : 75% gain correct. 25% perte de yards : Exposition -1.
25. Le RB doit faire un block surprise

Titre : Personne ne l'avait vu
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Sur une passe, un defensive end se libère et se dirige directement vers le QB.

Choix 1 — libellé : Aller au contact

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 65% block réussi. 35% le RB est dominé : Technique -1.

Choix 2 — libellé : Utiliser son angle

Effet(s) : Technique +2
Résultat aléatoire : 75% block efficace. 25% le DE atteint quand même le QB.

Choix 3 — libellé : Sortir chercher le ballon

Effet(s) : Exposition +1
Résultat aléatoire : 50% réception. 50% sack : Mental -1.
26. Le RB revient après une erreur

Titre : Oublier le fumble
Emoji : 🔥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Après une grosse erreur, le coach décide de redonner immédiatement le ballon au RB.

Choix 1 — libellé : Demander le ballon

Effet(s) : Mental +3, Leadership +1
Résultat aléatoire : 55% grosse réponse : Exposition +2. 45% la pression reste présente : Mental -1.

Choix 2 — libellé : Jouer très prudemment

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 75% course sécurisée. 25% manque d'agressivité : Exposition -1.

Choix 3 — libellé : Chercher immédiatement un gros play

Effet(s) : Exposition +2
Résultat aléatoire : 40% big play : Exposition +3. 35% gain faible. 25% nouvelle erreur : Mental -3, Technique -2.
27. Le défenseur arrive par derrière

Titre : Blindside
Emoji : 👊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le RB ne voit pas immédiatement un défenseur arriver par derrière.

Choix 1 — libellé : Protéger le ballon

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% le RB évite le fumble. 30% gros contact : Physique -1.

Choix 2 — libellé : Continuer à courir

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 45% gain supplémentaire. 35% gros contact. 20% fumble : Mental -2, Exposition -3.

Choix 3 — libellé : Se coucher

Effet(s) : Mental +1
Résultat aléatoire : 90% ballon sécurisé. 10% perte de yards.
28. Match sous pression

Titre : Le RB doit porter l'attaque
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : Le QB connaît une mauvaise période. Le coach décide de donner davantage de responsabilités au RB.

Choix 1 — libellé : Prendre la responsabilité

Effet(s) : Leadership +2, Mental +2
Résultat aléatoire : 50% le RB porte l'attaque : Exposition +3. 30% production moyenne. 20% grosse erreur : Mental -2.

Choix 2 — libellé : Rester discipliné

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 75% efficacité régulière. 25% l'équipe manque de big plays.

Choix 3 — libellé : Chercher le big play

Effet(s) : Exposition +3
Résultat aléatoire : 35% touchdown ou énorme gain : Exposition +4. 45% gain faible. 20% perte de balle : Mental -3, Exposition -3.
29. Dernière possession

Titre : Il reste 30 secondes
Emoji : ⏱️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Contexte : L'équipe est menée de quelques points. Le RB reçoit une passe courte avec beaucoup d'espace.

Choix 1 — libellé : Chercher le maximum de yards

Effet(s) : Exposition +2, Physique +1
Résultat aléatoire : 50% énorme gain : Exposition +3. 30% gain moyen. 20% fumble : Mental -3, Exposition -3.

Choix 2 — libellé : Sortir en touche

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 80% excellente gestion du chrono. 20% le RB aurait pu gagner davantage.

Choix 3 — libellé : Chercher le défenseur le plus proche pour gagner des yards

Effet(s) : Physique +2, Leadership +1
Résultat aléatoire : 55% gros gain après contact : Exposition +2. 30% stoppé. 15% gros contact : Physique -2.
30. Le RB doit choisir son style

Titre : Le dernier défenseur
Emoji : ⚔️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : RB
Condition particulière :
Nécessite :
Contexte : Le RB arrive dans l'espace face à un seul défenseur. C'est lui qui décidera comment terminer l'action.

Choix 1 — libellé : Juke

Effet(s) : Technique +2, Exposition +1
Résultat aléatoire : 55% défenseur battu : Exposition +2. 30% tackle. 15% fumble : Mental -2, Exposition -2.

Choix 2 — libellé : Spin move

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 40% action spectaculaire : Exposition +3. 40% tackle. 20% perte de contrôle : Technique -1, Mental -1.

Choix 3 — libellé : Truck

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 55% le RB gagne le contact. 30% arrêt. 15% gros contact : Physique -2.

Choix 4 — libellé : Sortir en touche

Effet(s) : Mental +1
Résultat aléatoire : 90% le RB protège le ballon. 10% il laisse quelques yards sur le terrain.

🏈 EDGE — 30 événements
1. Le tackle recule

Titre : Le tackle recule
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Condition particulière :
Nécessite :
Contexte : Dès le snap, l'EDGE remarque que le tackle offensif recule très rapidement en pass protection.

Choix 1 — libellé : Speed rush extérieur

Effet(s) : Technique +2, Physique +1
Résultat aléatoire : 60% l'EDGE prend l'avantage : Exposition +2. 40% le tackle ferme l'angle.

Choix 2 — libellé : Power rush intérieur

Effet(s) : Physique +2
Résultat aléatoire : 50% l'EDGE gagne le duel : Exposition +2. 50% il est contenu.

Choix 3 — libellé : Observer avant d'attaquer

Effet(s) : Mental +2
Résultat aléatoire : 65% l'EDGE identifie correctement le concept. 35% il laisse passer une opportunité.
2. Le tackle te prend en double

Titre : Double team
Emoji : 👥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : Le tackle et le tight end se dirigent tous les deux vers l'EDGE.

Choix 1 — libellé : Attaquer malgré le double block

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 40% l'EDGE crée quand même de la pression. 60% il est neutralisé.

Choix 2 — libellé : Se désengager rapidement

Effet(s) : Technique +2
Résultat aléatoire : 65% l'EDGE libère le couloir : Leadership +1. 35% il est bloqué.

Choix 3 — libellé : Occuper les deux bloqueurs

Effet(s) : Leadership +2, Physique +1
Résultat aléatoire : 70% un coéquipier profite de l'espace : Exposition +1. 30% l'EDGE est lui-même éliminé.
3. Outside run

Titre : Le RB attaque ton côté
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : Le RB se dirige vers l'extérieur. L'EDGE doit empêcher le coureur de gagner le edge.

Choix 1 — libellé : Fermer immédiatement l'extérieur

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% le RB est forcé à couper : Exposition +1. 30% l'EDGE est trop agressif.

Choix 2 — libellé : Attaquer le RB

Effet(s) : Physique +2
Résultat aléatoire : 55% tackle réussi : Exposition +2. 45% le RB passe derrière lui : Exposition -2.

Choix 3 — libellé : Rester patient

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne lecture. 35% le RB gagne quelques yards.
4. Speed rush

Titre : Le virage parfait
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : L'EDGE tente de contourner le tackle avec sa vitesse.

Choix 1 — libellé : Attaquer le coin

Effet(s) : Technique +2, Physique +1
Résultat aléatoire : 55% pression : Exposition +2. 30% sack : Exposition +3. 15% tackle fermé.

Choix 2 — libellé : Utiliser un dip & rip

Effet(s) : Technique +3
Résultat aléatoire : 50% excellent rush : Exposition +2. 50% le tackle absorbe le mouvement.

Choix 3 — libellé : Changer de plan au dernier moment

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 55% sack ou pression : Exposition +2. 45% trop tard.
5. Bull rush

Titre : Le mur avance
Emoji : 💪
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : Le tackle se positionne pour absorber un speed rush. L'EDGE décide de changer complètement de plan.

Choix 1 — libellé : Power rush

Effet(s) : Physique +3
Résultat aléatoire : 55% pocket compressée : Exposition +2. 45% le tackle tient.

Choix 2 — libellé : Speed-to-power

Effet(s) : Technique +2, Physique +1
Résultat aléatoire : 60% avantage obtenu. 40% l'EDGE perd son équilibre.

Choix 3 — libellé : Revenir au speed rush

Effet(s) : Mental +1
Résultat aléatoire : 45% le tackle est désormais déséquilibré : Exposition +2. 55% il s'adapte.
6. Le QB step-up

Titre : Le QB monte dans la poche
Emoji : 🎯
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : L'EDGE contourne son tackle mais le QB avance dans la poche.

Choix 1 — libellé : Plonger vers le QB

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 40% sack. 60% le QB échappe au contact.

Choix 2 — libellé : Fermer progressivement l'espace

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% pression ou sack : Exposition +2. 35% le QB lance avant.

Choix 3 — libellé : Maintenir le contain

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 70% le QB est forcé à rester dans la poche.
7. Read option

Titre : Keep ou give
Emoji : 🔀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : Le QB peut conserver le ballon ou le donner au RB.

Choix 1 — libellé : Crash sur le RB

Effet(s) : Technique +1
Résultat aléatoire : 55% RB stoppé. 45% QB garde le ballon : Exposition -1.

Choix 2 — libellé : Lire le QB

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne lecture : Exposition +1. 35% le QB exploite l'hésitation.

Choix 3 — libellé : Forcer le QB vers l'extérieur

Effet(s) : Technique +2, Leadership +1
Résultat aléatoire : 70% contain respecté. 30% mauvais angle.
8. Strip-sack

Titre : Le ballon est là
Emoji : 🏈
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : L'EDGE atteint le QB mais doit maintenant choisir comment terminer son rush.

Choix 1 — libellé : Frapper le bras

Effet(s) : Technique +2
Résultat aléatoire : 45% fumble : Exposition +4. 55% le QB protège le ballon.

Choix 2 — libellé : Sécuriser le sack

Effet(s) : Mental +2
Résultat aléatoire : 75% sack : Exposition +3. 25% le QB lâche le ballon avant.

Choix 3 — libellé : Frapper le plus fort possible

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 35% sack spectaculaire : Exposition +3. 45% sack normal. 20% le QB échappe au contact.
9. Screen pass

Titre : La screen
Emoji : 🎭
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : L'EDGE rush vers le QB avant de comprendre qu'une screen est en préparation.

Choix 1 — libellé : Freiner immédiatement

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 60% il lit correctement l'action : Exposition +1. 40% il est déjà trop loin.

Choix 2 — libellé : Continuer vers le QB

Effet(s) : Physique +1
Résultat aléatoire : 30% sack avant la screen. 70% le RB reçoit le ballon : Exposition -2.

Choix 3 — libellé : Revenir vers le RB

Effet(s) : Technique +2
Résultat aléatoire : 55% tackle immédiat : Exposition +2. 45% le RB échappe au contact.
10. Le TE vient bloquer

Titre : Le TE arrive
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : EDGE
Contexte : Un tight end vient aider le tackle sur le côté de l'EDGE.

Choix 1 — libellé : Attaquer les deux bloqueurs

Effet(s) : Physique +2
Résultat aléatoire : 40% pression créée. 60% neutralisé.

Choix 2 — libellé : Passer sous le TE

Effet(s) : Technique +2
Résultat aléatoire : 55% l'EDGE se libère : Exposition +2. 45% il perd son équilibre.

Choix 3 — libellé : Occuper le TE pour libérer le linebacker

Effet(s) : Leadership +2, Mental +1
Résultat aléatoire : 70% un coéquipier réalise le play : Leadership +1.
11. Stunt avec le DT

Titre : TEX stunt
Emoji : 🔄
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné) : EDGE
Contexte : L'EDGE et le defensive tackle doivent échanger leurs trajectoires pour perturber la ligne offensive.

Choix 1 — libellé : Exécuter exactement le timing

Effet(s) : Technique +3
Résultat aléatoire : 65% pression : Exposition +2. 35% la ligne lit le stunt.

Choix 2 — libellé : Accélérer son mouvement

Effet(s) : Physique +1
Résultat aléatoire : 50% énorme avantage. 50% le stunt se désynchronise : Technique -1.

Choix 3 — libellé : Ralentir pour laisser passer le DT

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 75% le DT profite du stunt : Exposition +1.
12. Le QB roule vers ton côté

Titre : Bootleg
Emoji : 🏃‍♂️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le QB sort de la poche vers le côté de l'EDGE.

Choix 1 — libellé : Poursuivre le QB

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 50% sack. 50% le QB lance en mouvement.

Choix 2 — libellé : Maintenir le contain

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 70% le QB est forcé à lancer rapidement.

Choix 3 — libellé : Attaquer le point de lancer

Effet(s) : Technique +2
Résultat aléatoire : 55% pression : Exposition +2. 45% le QB trouve son receveur.
13. Le QB scramble

Titre : Le QB s'échappe
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
**Poste(s) concerné : EDGE
Contexte : Le QB quitte la poche et court vers l'extérieur.

Choix 1 — libellé : Poursuivre à pleine vitesse

Effet(s) : Physique +2
Résultat aléatoire : 50% tackle : Exposition +2. 50% le QB gagne l'angle.

Choix 2 — libellé : Couper son angle

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 65% tackle. 35% le QB accélère.

Choix 3 — libellé : Forcer le QB à revenir intérieur

Effet(s) : Leadership +2, Mental +1
Résultat aléatoire : 70% un coéquipier termine le tackle : Leadership +1.
14. Third down

Titre : Third & long
Emoji : 🔥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : 3rd & 10. La défense a besoin d'une pression.

Choix 1 — libellé : Tout donner en speed rush

Effet(s) : Physique +1, Technique +2, Exposition +1
Résultat aléatoire : 45% sack : Exposition +4. 35% pression. 20% le tackle tient.

Choix 2 — libellé : Utiliser un counter move

Effet(s) : Technique +3
Résultat aléatoire : 55% pression : Exposition +2. 45% le QB lance avant.

Choix 3 — libellé : Rester discipliné sur le contain

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 70% le QB ne peut pas sortir de la poche.
15. Run inside

Titre : Le RB vient droit sur toi
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le RB attaque directement le gap intérieur de l'EDGE.

Choix 1 — libellé : Frapper le RB

Effet(s) : Physique +2
Résultat aléatoire : 65% tackle réussi : Exposition +2. 35% le RB gagne après contact.

Choix 2 — libellé : Lire les blocks

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% bonne lecture : Exposition +1. 30% hésitation.

Choix 3 — libellé : Attaquer le backfield

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 45% tackle derrière la ligne : Exposition +3. 55% le RB passe.
16. Fake snap

Titre : Le faux départ du QB
Emoji : 👀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le QB utilise des hard counts pour essayer de faire réagir la ligne défensive.

Choix 1 — libellé : Partir sur le mouvement

Effet(s) : Physique +1
Résultat aléatoire : 20% le tackle fait un faux départ aussi. 80% pénalité : Mental -2, Exposition -2.

Choix 2 — libellé : Rester parfaitement immobile

Effet(s) : Mental +2
Résultat aléatoire : 70% le snap arrive ensuite : aucun malus. 30% l'attaque change son rythme.

Choix 3 — libellé : Lire les habitudes du QB

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 60% meilleure anticipation au snap suivant.
17. Le tackle est sur ses talons

Titre : Il est déséquilibré
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Après deux rushs consécutifs, le tackle semble avoir du mal à suivre la vitesse de l'EDGE.

Choix 1 — libellé : Refaire le speed rush

Effet(s) : Technique +2, Exposition +1
Résultat aléatoire : 65% pression : Exposition +2. 35% le tackle s'est adapté.

Choix 2 — libellé : Counter intérieur

Effet(s) : Technique +3
Résultat aléatoire : 60% énorme avantage : Exposition +3. 40% le tackle ferme le gap.

Choix 3 — libellé : Power rush

Effet(s) : Physique +2
Résultat aléatoire : 55% succès : Exposition +2. 45% le tackle absorbe.
18. Sack en fin de match

Titre : Le moment décisif
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Dernière possession adverse. Un sack pourrait pratiquement assurer la victoire.

Choix 1 — libellé : Chercher le sack

Effet(s) : Exposition +2, Physique +1
Résultat aléatoire : 40% sack : Exposition +5. 40% pression. 20% le QB s'échappe : Exposition -2.

Choix 2 — libellé : Rester discipliné

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 75% le QB est contenu : Leadership +1. 25% il trouve une solution.

Choix 3 — libellé : Attendre le bon moment

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 55% sack ou pression : Exposition +3. 45% le ballon part avant.
19. Strip du RB

Titre : Punch out
Emoji : 👊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : L'EDGE arrive sur le RB après une course et voit le ballon exposé.

Choix 1 — libellé : Chercher le fumble

Effet(s) : Technique +2
Résultat aléatoire : 30% fumble : Exposition +4. 70% le RB protège le ballon.

Choix 2 — libellé : Sécuriser le tackle

Effet(s) : Mental +1, Physique +1
Résultat aléatoire : 80% tackle réussi : Exposition +2.

Choix 3 — libellé : Frapper très fort

Effet(s) : Physique +2
Résultat aléatoire : 25% fumble : Exposition +4. 55% tackle. 20% le RB casse le contact.
20. Zone read

Titre : Le RB traverse ton côté
Emoji : 🔀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Sur une zone read, l'EDGE doit choisir entre fermer le RB ou respecter le QB.

Choix 1 — libellé : Crasher le RB

Effet(s) : Technique +1
Résultat aléatoire : 60% RB stoppé. 40% QB conserve et gagne l'extérieur : Exposition -2.

Choix 2 — libellé : Lire le mesh

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne décision : Exposition +2. 35% hésitation.

Choix 3 — libellé : Forcer le QB intérieur

Effet(s) : Leadership +2, Technique +1
Résultat aléatoire : 70% le QB est contenu.
21. Le tackle triche avec ses mains

Titre : Ses mains sont trop hautes
Emoji : 👊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : L'EDGE remarque que le tackle attaque systématiquement avec ses mains très hautes.

Choix 1 — libellé : Swipe ses mains

Effet(s) : Technique +3
Résultat aléatoire : 60% l'EDGE se libère : Exposition +2. 40% le tackle corrige.

Choix 2 — libellé : Rip move

Effet(s) : Technique +2
Résultat aléatoire : 55% avantage : Exposition +2. 45% le tackle absorbe.

Choix 3 — libellé : Power through

Effet(s) : Physique +2
Résultat aléatoire : 50% succès. 50% neutralisé.
22. Contain

Titre : Ne laisse pas sortir le QB
Emoji : 🚧
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le coordinateur défensif insiste : l'EDGE ne doit surtout pas perdre le contain.

Choix 1 — libellé : Rester large

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 80% QB contenu. 20% l'EDGE est trop large pour participer au play.

Choix 2 — libellé : Attaquer le QB

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 45% pression : Exposition +2. 55% QB sort de la poche.

Choix 3 — libellé : Attendre le QB

Effet(s) : Technique +2
Résultat aléatoire : 60% tackle : Exposition +2. 40% QB trouve une passe.
23. Twist intérieur

Titre : Le gap s'ouvre
Emoji : 🌀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : L'EDGE voit un espace intérieur apparaître entre le guard et le tackle.

Choix 1 — libellé : Plonger intérieur

Effet(s) : Technique +2
Résultat aléatoire : 50% pression : Exposition +2. 50% le guard ferme.

Choix 2 — libellé : Continuer extérieur

Effet(s) : Physique +1
Résultat aléatoire : 60% l'EDGE conserve son rush : Exposition +1.

Choix 3 — libellé : Attendre le stunt

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 70% excellente coordination avec le DT.
24. Le QB garde trop longtemps le ballon

Titre : Le ballon ne part pas
Emoji : ⏳
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le QB attend longtemps avant de lancer.

Choix 1 — libellé : Accélérer le rush

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 55% sack : Exposition +3. 45% le tackle tient.

Choix 2 — libellé : Changer de move

Effet(s) : Technique +2
Résultat aléatoire : 60% pression : Exposition +2. 40% le QB lance avant.

Choix 3 — libellé : Maintenir le contain

Effet(s) : Mental +2
Résultat aléatoire : 70% le QB reste enfermé : Exposition +1.
25. Le RB te vient dessus en pass protection

Titre : Petit joueur, gros impact
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le RB reste en protection et vient bloquer directement l'EDGE.

Choix 1 — libellé : L'écraser

Effet(s) : Physique +2
Résultat aléatoire : 60% l'EDGE le repousse : Exposition +1. 40% il perd du temps.

Choix 2 — libellé : Utiliser les mains

Effet(s) : Technique +2
Résultat aléatoire : 70% l'EDGE se libère rapidement : Exposition +2.

Choix 3 — libellé : Contourner le RB

Effet(s) : Technique +1, Physique +1
Résultat aléatoire : 50% pression. 50% perte de temps.
26. Le QB lance sous pression

Titre : Passe forcée
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : L'EDGE ne touche pas le QB mais sa pression l'oblige à lancer précipitamment.

Choix 1 — libellé : Continuer à poursuivre

Effet(s) : Physique +1, Mental +1
Résultat aléatoire : 50% sack potentiel : Exposition +2. 50% le QB lance.

Choix 2 — libellé : Lever les bras

Effet(s) : Technique +2
Résultat aléatoire : 35% passe déviée : Exposition +3. 65% le ballon passe.

Choix 3 — libellé : Chercher le hit

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 40% gros impact : Exposition +2. 60% le QB lance avant le contact.
27. Play-action

Titre : Le faux handoff
Emoji : 🎭
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Le QB simule une remise au RB avant de reculer pour lancer.

Choix 1 — libellé : Mordre sur le run

Effet(s) : Technique +1
Résultat aléatoire : 25% le RB est réellement porteur. 75% play-action : Exposition -2.

Choix 2 — libellé : Lire le QB

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne lecture : Exposition +1. 35% légère hésitation.

Choix 3 — libellé : Attaquer immédiatement le QB

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 45% pression. 55% le QB lance derrière toi.
28. Sack en opportunité

Titre : Le QB est à portée
Emoji : 🏈
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : L'EDGE a enfin battu son bloqueur et n'a plus qu'un pas à faire pour atteindre le QB.

Choix 1 — libellé : Sécuriser le sack

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 80% sack : Exposition +3. 20% le QB échappe au contact.

Choix 2 — libellé : Chercher le strip

Effet(s) : Technique +2, Exposition +1
Résultat aléatoire : 35% fumble : Exposition +4. 45% sack. 20% QB échappe au rush.

Choix 3 — libellé : Frapper violemment

Effet(s) : Physique +2
Résultat aléatoire : 50% sack spectaculaire : Exposition +3. 30% sack normal. 20% QB s'échappe.
29. Quatrième quart-temps

Titre : Les jambes sont lourdes
Emoji : 🥵
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Après avoir joué presque tout le match, l'EDGE commence à ressentir la fatigue.

Choix 1 — libellé : Continuer à mettre la pression

Effet(s) : Physique +2, Mental +1
Résultat aléatoire : 45% gros play : Exposition +3. 35% rendement normal. 20% fatigue : Physique -2.

Choix 2 — libellé : Jouer plus intelligemment

Effet(s) : Technique +2, Mental +1
Résultat aléatoire : 70% l'EDGE compense sa fatigue par son placement.

Choix 3 — libellé : Demander une rotation

Effet(s) : Mental +1
Résultat aléatoire : 75% récupération utile. 25% le coach considère que l'équipe a besoin de lui : Leadership -1.
30. Le play décisif

Titre : Win the game
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : EDGE
Contexte : Dernier drive adverse. Un stop défensif mettrait quasiment fin au match. L'EDGE sait que son duel avec le tackle peut décider de la rencontre.

Choix 1 — libellé : Tout donner sur le speed rush

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 40% sack : Exposition +5. 35% pression. 25% le tackle tient.

Choix 2 — libellé : Utiliser son meilleur counter

Effet(s) : Technique +3, Mental +1
Résultat aléatoire : 55% pression ou sack : Exposition +4. 45% le tackle anticipe le mouvement.

Choix 3 — libellé : Jouer contain et faire confiance à la défense

Effet(s) : Mental +2, Leadership +2
Résultat aléatoire : 70% le QB reste contenu et la défense obtient le stop : Exposition +2, Leadership +1. 30% le QB trouve une solution : Exposition -2.

Choix 4 — libellé : Chercher le strip-sack

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 30% fumble : Exposition +5. 35% sack : Exposition +3. 35% le QB échappe au rush : Exposition -3.

🏈 SS — 30 événements football US
1. Le gap est ouvert

Titre : Attaque du gap
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : SS
Condition particulière :
Nécessite :
Contexte : Le RB attaque un gap intérieur et le SS doit décider à quel moment descendre.

Choix 1 — libellé : Descendre immédiatement

Effet(s) : Physique +2
Résultat aléatoire : 65% stop rapide : Exposition +2. 35% le RB coupe derrière toi : Technique -1, Exposition -2.

Choix 2 — libellé : Lire le RB avant de fermer

Effet(s) : Mental +2
Résultat aléatoire : 70% bonne lecture : Technique +1. 30% hésitation : Exposition -2.

Choix 3 — libellé : Attaquer directement le backfield

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 35% TFL : Exposition +3. 65% mauvais angle : Technique -2, Exposition -3.
2. Le TE sort du bloc

Titre : Release du Tight End
Emoji : 🎯
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : SS
Condition particulière :
Nécessite :
Contexte : Le TE commence par bloquer avant de partir soudainement en route.

Choix 1 — libellé : Le suivre immédiatement

Effet(s) : Technique +2
Résultat aléatoire : 65% couverture réussie. 35% le QB avait prévu une autre cible : Mental -1.

Choix 2 — libellé : Attendre pour confirmer

Effet(s) : Mental +2
Résultat aléatoire : 55% bonne lecture. 45% le TE gagne trop de terrain : Exposition -3.

Choix 3 — libellé : Jouer le ballon

Effet(s) : Technique +1, Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 40% passe déviée. 30% réception : Technique -1, Exposition -3.
3. Play-action

Titre : Ne mords pas
Emoji : 🎭
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : SS
Contexte : Le QB simule une course pour faire descendre le SS.

Choix 1 — libellé : Mordre sur le run

Effet(s) : Physique +1
Résultat aléatoire : 30% course réelle : Technique +1. 70% play-action : Mental -1, Exposition -3.

Choix 2 — libellé : Garder les yeux sur le QB

Effet(s) : Mental +2
Résultat aléatoire : 70% bonne lecture. 30% retard sur la course : Exposition -2.

Choix 3 — libellé : Attendre une seconde puis descendre

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 60% lecture parfaite. 40% tu arrives trop tard : Exposition -2.
4. Cross du WR

Titre : Crossing Route
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : SS
Contexte : Un WR traverse tout le terrain derrière les linebackers.

Choix 1 — libellé : Prendre le WR

Effet(s) : Technique +2
Résultat aléatoire : 65% couverture parfaite. 35% séparation : Exposition -2.

Choix 2 — libellé : Le passer au linebacker

Effet(s) : Leadership +2
Résultat aléatoire : 60% bonne communication. 40% le linebacker ne comprend pas : Leadership -2, Exposition -3.

Choix 3 — libellé : Jouer le QB

Effet(s) : Mental +2
Résultat aléatoire : 30% interception : Exposition +5. 70% le QB trouve le WR : Exposition -4.
5. Safety Blitz

Titre : Blitz du Strong Safety
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le coordinateur défensif décide d'envoyer le SS sur le QB.

Choix 1 — libellé : Partir immédiatement

Effet(s) : Physique +1, Exposition +1
Résultat aléatoire : 40% sack : Exposition +4. 60% le RB absorbe le blitz : Technique -1.

Choix 2 — libellé : Attendre le mouvement du RB

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 60% meilleur timing : Exposition +2. 40% le QB lance avant : Exposition -2.

Choix 3 — libellé : Feinter le blitz

Effet(s) : Mental +2
Résultat aléatoire : 55% QB perturbé. 45% le QB identifie la couverture : Exposition -2.
6. Le QB te fixe

Titre : Le regard du QB
Emoji : 👀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le QB semble volontairement regarder le SS avant le snap.

Choix 1 — libellé : Ne rien montrer

Effet(s) : Mental +2
Résultat aléatoire : 75% le QB hésite. 25% il identifie quand même la couverture.

Choix 2 — libellé : Montrer une couverture puis changer

Effet(s) : Technique +2
Résultat aléatoire : 60% QB trompé : Exposition +2. 40% mauvaise rotation : Leadership -1, Exposition -2.

Choix 3 — libellé : Descendre dans la box

Effet(s) : Leadership +1, Exposition +1
Résultat aléatoire : 35% le QB change son play. 65% play-action : Exposition -3.
7. Deep Ball

Titre : La bombe
Emoji : 🚀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Une longue passe est lancée vers ton côté du terrain.

Choix 1 — libellé : Jouer le receveur

Effet(s) : Technique +2
Résultat aléatoire : 70% couverture réussie. 30% réception : Exposition -4.

Choix 2 — libellé : Jouer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 35% passe déviée. 35% réception : Technique -2, Exposition -4.

Choix 3 — libellé : Sécuriser le tackle

Effet(s) : Mental +1
Résultat aléatoire : 75% gain limité. 25% grosse réception après contact : Exposition -3.
8. Open Field

Titre : Dernier défenseur
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le RB a dépassé toute la défense. Tu es le dernier homme.

Choix 1 — libellé : Frapper fort

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 55% gros tackle : Exposition +3. 45% le RB te contourne : Physique -1, Exposition -4.

Choix 2 — libellé : Prendre l'angle

Effet(s) : Technique +2
Résultat aléatoire : 80% tackle réussi.

Choix 3 — libellé : Chercher le strip

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 25% fumble : Exposition +5. 50% tackle. 25% RB échappe au tackle : Exposition -4.
9. Robber

Titre : Robber Safety
Emoji : 🕵️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Tu joues derrière les linebackers et peux couper une route intermédiaire.

Choix 1 — libellé : Lire les yeux du QB

Effet(s) : Mental +2
Résultat aléatoire : 55% interception ou déviation : Exposition +3. 45% le QB te manipule : Mental -1.

Choix 2 — libellé : Attendre la route

Effet(s) : Technique +2
Résultat aléatoire : 75% couverture réussie. 25% route trop rapide : Exposition -2.

Choix 3 — libellé : Sauter la route

Effet(s) : Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 70% mauvaise lecture : Technique -2, Exposition -4.
10. Slot Fade

Titre : Le slot part profond
Emoji : 🏃‍♂️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le receveur intérieur attaque verticalement.

Choix 1 — libellé : Coller au WR

Effet(s) : Technique +2
Résultat aléatoire : 65% bonne couverture. 35% le WR gagne la profondeur : Exposition -3.

Choix 2 — libellé : Jouer par-dessus

Effet(s) : Mental +2
Résultat aléatoire : 70% passe difficile. 30% passe sous ta zone : Exposition -2.

Choix 3 — libellé : Attaquer le ballon

Effet(s) : Exposition +2, Technique +1
Résultat aléatoire : 30% interception : Exposition +5. 70% réception : Exposition -4.
11. Wheel Route

Titre : Le RB s'échappe
Emoji : 🎯
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le RB sort du backfield puis attaque la profondeur.

Choix 1 — libellé : Le prendre immédiatement

Effet(s) : Technique +2
Résultat aléatoire : 70% couverture réussie.

Choix 2 — libellé : Attendre pour lire le QB

Effet(s) : Mental +2
Résultat aléatoire : 55% bonne lecture. 45% RB prend trop de profondeur : Exposition -3.

Choix 3 — libellé : Jouer le ballon

Effet(s) : Exposition +1
Résultat aléatoire : 30% interception : Exposition +5. 70% réception : Technique -1, Exposition -3.
12. Communication défensive

Titre : Check défensif
Emoji : 📢
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : L'attaque change de formation juste avant le snap.

Choix 1 — libellé : Réorganiser toute la défense

Effet(s) : Leadership +3
Résultat aléatoire : 75% tout le monde est correctement placé.

Choix 2 — libellé : Se concentrer sur son assignment

Effet(s) : Technique +1
Résultat aléatoire : 60% tout va bien. 40% un coéquipier est mal placé : Leadership -2, Exposition -2.

Choix 3 — libellé : Ne rien changer

Effet(s) : Mental -1
Résultat aléatoire : 45% l'attaque exploite l'ajustement : Exposition -3.
13. Goal Line

Titre : Dos à l'end zone
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : L'attaque est à deux yards de l'end zone.

Choix 1 — libellé : Descendre dans la box

Effet(s) : Physique +2
Résultat aléatoire : 60% stop. 40% play-action : Exposition -4.

Choix 2 — libellé : Rester en couverture

Effet(s) : Mental +2
Résultat aléatoire : 65% passe incomplète. 35% touchdown : Exposition -5.

Choix 3 — libellé : Jouer ultra-agressif

Effet(s) : Exposition +2
Résultat aléatoire : 35% gros stop : Exposition +4. 65% mauvais angle : Technique -2, Exposition -5.
14. QB Scramble

Titre : Le QB décolle
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le QB abandonne sa lecture et attaque le terrain au sol.

Choix 1 — libellé : Monter immédiatement

Effet(s) : Physique +2
Résultat aléatoire : 70% tackle. 30% QB te contourne : Physique -1, Exposition -3.

Choix 2 — libellé : Garder son angle

Effet(s) : Technique +2
Résultat aléatoire : 75% QB contenu. 25% gain moyen.

Choix 3 — libellé : Chercher le gros hit

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 35% gros hit : Exposition +4. 65% QB échappe au contact : Exposition -3.
15. Delayed Blitz

Titre : Blitz retardé
Emoji : ⏱️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le SS doit rester en couverture avant de déclencher son blitz.

Choix 1 — libellé : Blitz immédiatement

Effet(s) : Physique +1
Résultat aléatoire : 45% pression : Exposition +2. 55% protection parfaitement préparée : Technique -1.

Choix 2 — libellé : Attendre le RB

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 60% excellent timing : Exposition +3. 40% QB lance avant : Exposition -2.

Choix 3 — libellé : Finalement rester en couverture

Effet(s) : Mental +1
Résultat aléatoire : 60% tu évites une mauvaise situation. 40% le coordinateur te reproche ton hésitation : Leadership -1.
16. Sweep

Titre : Course extérieure
Emoji : 🏃‍♂️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le RB part vers la sideline avec plusieurs bloqueurs.

Choix 1 — libellé : Prendre le premier block

Effet(s) : Physique +2
Résultat aléatoire : 55% tu tiens ton gap. 45% block réussi : Physique -1, Exposition -2.

Choix 2 — libellé : Contourner les bloqueurs

Effet(s) : Technique +2
Résultat aléatoire : 65% angle parfait. 35% tu perds ton angle : Exposition -3.

Choix 3 — libellé : Attendre le RB

Effet(s) : Mental +2
Résultat aléatoire : 60% RB forcé vers l'intérieur. 40% il gagne l'extérieur : Exposition -3.
17. Motion

Titre : Motion pré-snap
Emoji : 🔄
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Un WR traverse la formation avant le snap.

Choix 1 — libellé : Le suivre

Effet(s) : Technique +1
Résultat aléatoire : 65% bonne décision. 35% la motion révèle ta couverture : Exposition -2.

Choix 2 — libellé : Le laisser passer

Effet(s) : Leadership +2
Résultat aléatoire : 70% rotation réussie. 30% mauvaise communication : Leadership -2.

Choix 3 — libellé : Changer totalement de couverture

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 55% attaque perturbée : Exposition +2. 45% défense désorganisée : Exposition -4.
18. Interception

Titre : Sauter la route
Emoji : 🦅
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le SS pense avoir compris exactement où le QB veut lancer.

Choix 1 — libellé : Sauter la route

Effet(s) : Technique +1, Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 70% mauvais diagnostic : Technique -2, Exposition -5.

Choix 2 — libellé : Rester discipliné

Effet(s) : Mental +2
Résultat aléatoire : 75% couverture parfaite. 25% réception devant toi : Exposition -2.

Choix 3 — libellé : Attendre une confirmation

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 60% bonne décision. 40% fenêtre d'interception disparue.
19. Fumble

Titre : Ballon libre
Emoji : 🏈
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le RB vient de perdre le ballon au milieu du trafic.

Choix 1 — libellé : Se jeter dessus

Effet(s) : Physique +1
Résultat aléatoire : 85% récupération : Exposition +3. 15% collision : Physique -1.

Choix 2 — libellé : Chercher à retourner le ballon

Effet(s) : Exposition +2
Résultat aléatoire : 25% gros retour : Exposition +5. 50% récupération simple. 25% tu perds le ballon à ton tour : Exposition -5.

Choix 3 — libellé : Sécuriser la zone

Effet(s) : Leadership +1, Mental +1
Résultat aléatoire : 80% un coéquipier récupère.
20. Block du WR

Titre : Le bloqueur inattendu
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le WR vient directement chercher le SS sur une course extérieure.

Choix 1 — libellé : Prendre le choc

Effet(s) : Physique +2
Résultat aléatoire : 55% tu gagnes le duel. 45% tu es repoussé : Physique -1, Exposition -2.

Choix 2 — libellé : Éviter le block

Effet(s) : Technique +2
Résultat aléatoire : 65% bon angle. 35% tu contournes trop largement : Exposition -3.

Choix 3 — libellé : Attendre le RB derrière lui

Effet(s) : Mental +2
Résultat aléatoire : 60% tu fermes l'espace. 40% le RB accélère avant ton contact.
21. Cover 2

Titre : Moitié profonde
Emoji : 🛡️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le SS est responsable d'une moitié profonde du terrain.

Choix 1 — libellé : Rester profond

Effet(s) : Mental +2
Résultat aléatoire : 80% aucune grosse menace. 20% passe courte réussie : Exposition -1.

Choix 2 — libellé : Descendre sur le slot

Effet(s) : Technique +1
Résultat aléatoire : 55% passe courte stoppée. 45% attaque profonde derrière toi : Exposition -5.

Choix 3 — libellé : Lire le QB

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 45% interception ou passe déviée : Exposition +4. 55% le QB t'attire hors position : Exposition -4.
22. Red Zone

Titre : Fenêtre réduite
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : L'attaque entre dans la red zone.

Choix 1 — libellé : Jouer très agressif

Effet(s) : Physique +1, Exposition +2
Résultat aléatoire : 40% gros stop : Exposition +4. 60% tu te fais manipuler : Exposition -4.

Choix 2 — libellé : Jouer le QB

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne lecture. 35% touchdown dans ta zone : Exposition -5.

Choix 3 — libellé : Protéger l'end zone

Effet(s) : Technique +1
Résultat aléatoire : 75% passe contestée. 25% petite réception mais gain contrôlé.
23. Switch avec le CB

Titre : Qui prend qui ?
Emoji : 📢
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Deux receveurs croisent leurs routes et la couverture nécessite un switch.

Choix 1 — libellé : Annoncer le switch

Effet(s) : Leadership +3
Résultat aléatoire : 80% couverture parfaite. 20% mauvaise compréhension : Leadership -2.

Choix 2 — libellé : Garder son assignment

Effet(s) : Technique +1
Résultat aléatoire : 50% réussite. 50% les deux défenseurs couvrent le même joueur : Leadership -2, Exposition -4.

Choix 3 — libellé : Improviser

Effet(s) : Mental +1
Résultat aléatoire : 45% excellente adaptation : Technique +1. 55% confusion : Mental -1, Exposition -3.
24. WR Screen

Titre : Screen immédiat
Emoji : 🎭
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le WR reçoit immédiatement derrière la ligne avec des bloqueurs devant lui.

Choix 1 — libellé : Descendre immédiatement

Effet(s) : Physique +2
Résultat aléatoire : 60% tackle pour faible gain. 40% mauvais angle : Technique -1, Exposition -3.

Choix 2 — libellé : Lire les blocks

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne lecture. 35% le WR gagne beaucoup de terrain : Exposition -3.

Choix 3 — libellé : Chercher le gros hit

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 30% gros hit : Exposition +4. 70% le WR l'évite : Physique -1, Exposition -3.
25. Pump Fake

Titre : Le faux lancer
Emoji : 🎭
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Le QB simule un lancer profond pour faire avancer le safety.

Choix 1 — libellé : Mordre

Effet(s) : Technique +1
Résultat aléatoire : 20% le lancer était réel. 80% tu quittes ta zone : Mental -1, Exposition -4.

Choix 2 — libellé : Rester patient

Effet(s) : Mental +2
Résultat aléatoire : 75% le QB ne gagne rien. 25% tu es trop prudent : Exposition -2.

Choix 3 — libellé : Feinter à ton tour

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 50% le QB hésite. 50% il profite de ton mouvement : Exposition -3.
26. Fourth Down

Titre : Quatrième tentative
Emoji : 🔥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : 4th down. L'attaque doit absolument gagner les yards nécessaires.

Choix 1 — libellé : Attaquer la ligne

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 55% stop : Exposition +3. 45% l'attaque trouve le trou : Exposition -4.

Choix 2 — libellé : Lire le QB

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 65% turnover on downs : Exposition +2. 35% passe complétée : Exposition -3.

Choix 3 — libellé : Anticiper la route courte

Effet(s) : Technique +2
Résultat aléatoire : 35% stop immédiat : Exposition +3. 65% mauvais diagnostic : Technique -1, Exposition -3.
27. Two Minute Drill

Titre : Tempo maximal
Emoji : ⏱️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : L'attaque enchaîne les snaps et cherche à remonter rapidement le terrain.

Choix 1 — libellé : Jouer conservateur

Effet(s) : Mental +2
Résultat aléatoire : 70% attaque ralentie. 30% elle exploite l'espace : Exposition -2.

Choix 2 — libellé : Prendre des risques

Effet(s) : Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 40% passe défendue. 30% gros gain offensif : Exposition -5.

Choix 3 — libellé : Organiser la défense

Effet(s) : Leadership +3
Résultat aléatoire : 70% défense organisée. 30% mauvaise communication : Leadership -2.
28. Hail Mary

Titre : Dernière prière
Emoji : 🙏
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Dernier snap du match. Plusieurs receveurs vont attaquer la end zone.

Choix 1 — libellé : Jouer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 20% interception : Exposition +6. 50% déviation. 30% réception : Exposition -6.

Choix 2 — libellé : Jouer le receveur

Effet(s) : Physique +1, Technique +1
Résultat aléatoire : 65% passe incomplète. 35% réception : Exposition -5.

Choix 3 — libellé : Organiser le tip

Effet(s) : Leadership +2, Technique +1
Résultat aléatoire : 60% défense récupère le ballon : Exposition +4. 40% cafouillage : Leadership -1.
29. Le gros hit

Titre : Collision
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Un WR vient de réceptionner et traverse le milieu du terrain. Le SS arrive lancé.

Choix 1 — libellé : Chercher le gros hit

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 40% énorme impact : Exposition +4. 60% le WR absorbe le contact : Physique -1.

Choix 2 — libellé : Tackle propre

Effet(s) : Technique +2
Résultat aléatoire : 80% tackle réussi. 20% mauvais angle : Technique -1.

Choix 3 — libellé : Chercher le fumble

Effet(s) : Technique +1, Exposition +2
Résultat aléatoire : 25% fumble : Exposition +5. 50% tackle. 25% le WR échappe au contact : Exposition -4.
30. Le play décisif

Titre : Make the Play
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : SS
Contexte : Dernier drive. Le match se joue sur cette action. Le SS doit décider s'il prend le risque de faire la différence ou s'il fait confiance au système.

Choix 1 — libellé : Jouer le héros

Effet(s) : Exposition +2
Résultat aléatoire : 25% interception : Exposition +6. 35% gros play défensif : Exposition +3. 40% mauvais choix : Mental -2, Exposition -6.

Choix 2 — libellé : Faire confiance au système

Effet(s) : Mental +2, Leadership +1
Résultat aléatoire : 75% stop défensif : Exposition +2. 25% l'attaque trouve une faille : Exposition -3.

Choix 3 — libellé : Lire le QB jusqu'au bout

Effet(s) : Mental +2, Technique +2
Résultat aléatoire : 50% passe déviée/interception : Exposition +4. 50% le QB te manipule : Technique -1, Exposition -4.

Choix 4 — libellé : Descendre pour stopper la course

Effet(s) : Physique +2
Résultat aléatoire : 60% gros stop : Exposition +3. 40% play-action : Exposition -5.

🏈 CB — 30 événements
1. Press Coverage

Titre : Press dès le snap
Emoji : 🥊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) : CB
Condition particulière :
Nécessite :
Contexte : Le WR est aligné juste devant toi. Le coordinateur te demande de le presser à la ligne.

Choix 1 — libellé : Frapper immédiatement

Effet(s) : Physique +2
Résultat aléatoire : 65% le WR est perturbé : Technique +1. 35% il esquive ton contact : Exposition -3.

Choix 2 — libellé : Attendre son premier mouvement

Effet(s) : Technique +2
Résultat aléatoire : 70% tu contrôles son release. 30% il gagne rapidement l'extérieur : Exposition -3.

Choix 3 — libellé : Jouer très agressif

Effet(s) : Exposition +2
Résultat aléatoire : 35% gros stop : Exposition +3. 65% faute ou mauvais placement : Technique -2, Exposition -3.
2. Release extérieur

Titre : Le WR attaque l'extérieur
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR utilise un release extérieur très rapide.

Choix 1 — libellé : Lui fermer la porte

Effet(s) : Technique +2
Résultat aléatoire : 70% tu gardes l'extérieur. 30% il casse à l'intérieur : Exposition -3.

Choix 2 — libellé : Le laisser partir

Effet(s) : Mental +1
Résultat aléatoire : 65% tu récupères ta position. 35% il crée trop de séparation : Exposition -3.

Choix 3 — libellé : Accrocher le WR

Effet(s) : Physique +1
Résultat aléatoire : 30% contact non signalé. 70% penalty défensif : Technique -1, Exposition -3.
3. Release intérieur

Titre : Il coupe dedans
Emoji : ↪️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR attaque immédiatement l'intérieur après le snap.

Choix 1 — libellé : Fermer l'intérieur

Effet(s) : Technique +2
Résultat aléatoire : 70% bonne couverture. 30% il casse à l'extérieur : Exposition -2.

Choix 2 — libellé : Lui donner l'intérieur

Effet(s) : Mental +1
Résultat aléatoire : 65% tu récupères. 35% le WR gagne immédiatement la séparation : Exposition -3.

Choix 3 — libellé : Anticiper le cut

Effet(s) : Technique +1, Exposition +1
Résultat aléatoire : 30% interception : Exposition +5. 70% mauvais diagnostic : Technique -2, Exposition -4.
4. Back Shoulder

Titre : Back Shoulder Fade
Emoji : 🎯
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR part en profondeur et le QB peut lancer derrière son épaule.

Choix 1 — libellé : Jouer le WR

Effet(s) : Technique +2
Résultat aléatoire : 65% passe incomplète. 35% réception : Exposition -3.

Choix 2 — libellé : Jouer le ballon

Effet(s) : Technique +1, Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 35% passe déviée. 35% réception : Exposition -4.

Choix 3 — libellé : Anticiper le retour

Effet(s) : Mental +1
Résultat aléatoire : 40% excellente lecture : Exposition +2. 60% le WR gagne le duel : Exposition -4.
5. Double Move

Titre : Double Move
Emoji : 🎭
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR montre une route courte avant d'exploser en profondeur.

Choix 1 — libellé : Mordre sur la première route

Effet(s) : Technique -1
Résultat aléatoire : 75% le WR te dépasse : Exposition -5. 25% tu récupères.

Choix 2 — libellé : Rester patient

Effet(s) : Mental +2
Résultat aléatoire : 75% couverture réussie. 25% le WR trouve une fenêtre courte : Exposition -2.

Choix 3 — libellé : Jouer agressif sur le break

Effet(s) : Exposition +2
Résultat aléatoire : 35% interception : Exposition +5. 65% tu es battu : Exposition -5.
6. Deep Ball

Titre : Bataille dans les airs
Emoji : 🚀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le QB lance une bombe vers ton côté du terrain.

Choix 1 — libellé : Jouer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 40% passe incomplète. 30% réception : Exposition -5.

Choix 2 — libellé : Jouer le WR

Effet(s) : Mental +1
Résultat aléatoire : 70% tu empêches la réception. 30% catch contesté : Exposition -3.

Choix 3 — libellé : Sécuriser le tackle

Effet(s) : Technique +1
Résultat aléatoire : 75% réception limitée. 25% grosse réception : Exposition -4.
7. Press Bail

Titre : Press puis recul
Emoji : 🔄
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Tu dois donner l'impression d'être en press avant de reculer immédiatement après le snap.

Choix 1 — libellé : Reculer très vite

Effet(s) : Technique +2
Résultat aléatoire : 70% couverture parfaite. 30% route courte dans ton dos : Exposition -2.

Choix 2 — libellé : Attendre le release

Effet(s) : Mental +2
Résultat aléatoire : 60% lecture réussie. 40% retard : Exposition -3.

Choix 3 — libellé : Feinter un blitz

Effet(s) : Leadership +1, Exposition +1
Résultat aléatoire : 50% QB perturbé. 50% mauvais timing : Exposition -3.
8. Slant

Titre : Slant rapide
Emoji : ⚡
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR attaque immédiatement l'intérieur sur une slant.

Choix 1 — libellé : Couper la trajectoire

Effet(s) : Technique +2
Résultat aléatoire : 60% passe déviée. 40% le WR te bat : Exposition -4.

Choix 2 — libellé : Jouer derrière lui

Effet(s) : Mental +1
Résultat aléatoire : 70% réception courte. 30% grosse séparation : Exposition -3.

Choix 3 — libellé : Sauter la route

Effet(s) : Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 70% mauvais diagnostic : Technique -2, Exposition -5.
9. Screen

Titre : Screen au WR
Emoji : 🧱
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR reçoit immédiatement derrière la ligne.

Choix 1 — libellé : Attaquer immédiatement

Effet(s) : Physique +2
Résultat aléatoire : 65% tackle rapide. 35% mauvais angle : Exposition -3.

Choix 2 — libellé : Lire les blocks

Effet(s) : Mental +2
Résultat aléatoire : 65% bonne lecture. 35% le WR trouve un trou : Exposition -3.

Choix 3 — libellé : Chercher le fumble

Effet(s) : Exposition +2
Résultat aléatoire : 25% fumble : Exposition +5. 50% tackle. 25% WR échappe au contact : Exposition -4.
10. Zone extérieure

Titre : Cover 3
Emoji : 🛡️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Tu dois protéger une profonde portion extérieure du terrain.

Choix 1 — libellé : Rester profond

Effet(s) : Mental +2
Résultat aléatoire : 80% bonne couverture. 20% réception courte : Exposition -1.

Choix 2 — libellé : Descendre sur le WR court

Effet(s) : Technique +1
Résultat aléatoire : 55% stop. 45% route profonde derrière toi : Exposition -5.

Choix 3 — libellé : Lire le QB

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 40% passe déviée/interception : Exposition +4. 60% mauvaise lecture : Exposition -4.
11. Pick Route

Titre : Pick légal ?
Emoji : 🧩
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Deux WR croisent leurs routes pour créer une séparation.

Choix 1 — libellé : Passer au-dessus

Effet(s) : Technique +2
Résultat aléatoire : 65% couverture conservée. 35% collision : Exposition -2.

Choix 2 — libellé : Passer dessous

Effet(s) : Mental +1
Résultat aléatoire : 60% tu récupères. 40% WR libre : Exposition -3.

Choix 3 — libellé : Forcer le contact

Effet(s) : Physique +1
Résultat aléatoire : 35% WR perturbé. 65% penalty défensif : Technique -1, Exposition -3.
12. Communication avec le Safety

Titre : Le Safety te couvre
Emoji : 📢
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR part en profondeur et tu dois savoir jusqu'où le suivre avant de passer la responsabilité au safety.

Choix 1 — libellé : Communiquer clairement

Effet(s) : Leadership +3
Résultat aléatoire : 80% couverture parfaite. 20% mauvaise compréhension : Leadership -2.

Choix 2 — libellé : Garder le WR

Effet(s) : Technique +1
Résultat aléatoire : 65% réussite. 35% autre WR libre : Exposition -3.

Choix 3 — libellé : Faire confiance au Safety

Effet(s) : Mental +1
Résultat aléatoire : 60% switch réussi. 40% mauvaise coordination : Leadership -2, Exposition -4.
13. Fade en Red Zone

Titre : Fade vers la end zone
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR attaque le coin de la end zone.

Choix 1 — libellé : Jouer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 30% interception : Exposition +5. 35% incompletion. 35% touchdown : Exposition -6.

Choix 2 — libellé : Jouer le WR

Effet(s) : Physique +1
Résultat aléatoire : 70% incompletion. 30% touchdown : Exposition -5.

Choix 3 — libellé : Prendre l'intérieur

Effet(s) : Technique +1
Résultat aléatoire : 65% couverture. 35% passe vers l'extérieur : Exposition -4.
14. Tackling

Titre : Open Field Tackle
Emoji : 💥
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le RB vient de franchir la ligne et arrive lancé vers toi.

Choix 1 — libellé : Gros hit

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 45% gros stop : Exposition +3. 55% RB te contourne : Exposition -4.

Choix 2 — libellé : Tackle technique

Effet(s) : Technique +2
Résultat aléatoire : 80% tackle réussi. 20% mauvais angle : Technique -1.

Choix 3 — libellé : Attendre le support

Effet(s) : Mental +2
Résultat aléatoire : 65% RB contenu. 35% gros gain : Exposition -3.
15. Blitz Corner

Titre : Corner Blitz
Emoji : ⚡
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le coordinateur te demande de blitzer depuis l'extérieur.

Choix 1 — libellé : Partir plein gaz

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 40% sack : Exposition +4. 60% RB te bloque : Technique -1.

Choix 2 — libellé : Attendre le snap parfait

Effet(s) : Mental +1, Technique +1
Résultat aléatoire : 60% pression. 40% QB lance avant : Exposition -2.

Choix 3 — libellé : Feinter le blitz

Effet(s) : Mental +2
Résultat aléatoire : 50% protection désorganisée. 50% QB identifie le piège : Exposition -2.
16. Route Out

Titre : Out Route
Emoji : ↗️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR attaque une route extérieure vers la sideline.

Choix 1 — libellé : Anticiper le break

Effet(s) : Technique +2
Résultat aléatoire : 35% interception : Exposition +5. 65% mauvais timing : Exposition -3.

Choix 2 — libellé : Suivre jusqu'au break

Effet(s) : Mental +1
Résultat aléatoire : 75% couverture correcte.

Choix 3 — libellé : Jouer au-dessus

Effet(s) : Technique +1
Résultat aléatoire : 65% tu empêches la profondeur. 35% réception courte : Exposition -2.
17. Comeback Route

Titre : Il revient vers le ballon
Emoji : ↩️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR attaque verticalement puis revient brutalement vers le QB.

Choix 1 — libellé : Anticiper le retour

Effet(s) : Technique +2
Résultat aléatoire : 35% interception : Exposition +5. 65% WR te surprend : Exposition -3.

Choix 2 — libellé : Rester derrière

Effet(s) : Mental +2
Résultat aléatoire : 70% couverture correcte. 30% passe complétée : Exposition -2.

Choix 3 — libellé : Presser le WR

Effet(s) : Physique +1
Résultat aléatoire : 55% WR perturbé. 45% faute : Exposition -2, Technique -1.
18. Option Route

Titre : Route option
Emoji : 🧠
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR choisit sa route selon ton placement.

Choix 1 — libellé : Lui donner l'extérieur

Effet(s) : Mental +1
Résultat aléatoire : 65% tu contrôles la situation. 35% il coupe intérieur : Exposition -3.

Choix 2 — libellé : Lui fermer l'intérieur

Effet(s) : Technique +2
Résultat aléatoire : 60% route forcée vers la sideline. 40% WR gagne l'extérieur : Exposition -3.

Choix 3 — libellé : Anticiper son choix

Effet(s) : Technique +1, Exposition +2
Résultat aléatoire : 35% interception : Exposition +5. 65% mauvaise lecture : Exposition -4.
19. Scramble du QB

Titre : Le QB sort de la poche
Emoji : 🏃‍♂️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le QB commence à courir vers ton côté.

Choix 1 — libellé : Continuer à couvrir

Effet(s) : Technique +2
Résultat aléatoire : 60% tu forces le QB à courir. 40% il gagne beaucoup de terrain : Exposition -3.

Choix 2 — libellé : Abandonner le WR et attaquer

Effet(s) : Physique +2
Résultat aléatoire : 70% tackle. 30% QB te contourne : Exposition -4.

Choix 3 — libellé : Contenir le QB

Effet(s) : Mental +2
Résultat aléatoire : 75% QB contenu. 25% grosse course : Exposition -3.
20. WR Physique

Titre : Le duel physique
Emoji : 🥊
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le WR est beaucoup plus puissant physiquement et cherche le contact à chaque route.

Choix 1 — libellé : Répondre au contact

Effet(s) : Physique +2
Résultat aléatoire : 55% tu imposes ton duel. 45% il te repousse : Physique -1, Exposition -2.

Choix 2 — libellé : Jouer avec les pieds

Effet(s) : Technique +2
Résultat aléatoire : 75% tu évites le duel physique.

Choix 3 — libellé : Le provoquer verbalement

Effet(s) : Exposition +1
Résultat aléatoire : 40% il perd son calme. 60% tu prends une pénalité : Mental -1, Exposition -3.
21. Two Minute Drill

Titre : No Huddle
Emoji : ⏱️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : L'attaque joue sans huddle et enchaîne les snaps.

Choix 1 — libellé : Jouer conservateur

Effet(s) : Mental +2
Résultat aléatoire : 70% défense stable. 30% gros gain offensif : Exposition -3.

Choix 2 — libellé : Prendre des risques

Effet(s) : Exposition +2
Résultat aléatoire : 35% interception : Exposition +5. 65% erreur de couverture : Exposition -5.

Choix 3 — libellé : Organiser les DB

Effet(s) : Leadership +3
Résultat aléatoire : 75% communication parfaite. 25% confusion : Leadership -2.
22. Slot Switch

Titre : Switch intérieur
Emoji : 🔄
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Deux receveurs intérieurs croisent leurs routes.

Choix 1 — libellé : Communiquer avec le Safety

Effet(s) : Leadership +2
Résultat aléatoire : 75% couverture réussie. 25% mauvaise compréhension : Exposition -3.

Choix 2 — libellé : Suivre ton WR

Effet(s) : Technique +2
Résultat aléatoire : 65% bonne couverture. 35% collision avec un autre défenseur : Leadership -1.

Choix 3 — libellé : Anticiper le switch

Effet(s) : Mental +2
Résultat aléatoire : 40% interception : Exposition +4. 60% mauvais timing : Exposition -3.
23. Goal Line Fade

Titre : Dernière fenêtre
Emoji : 🚨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : 3rd & Goal. Le WR est isolé contre toi.

Choix 1 — libellé : Jouer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 30% interception : Exposition +6. 35% incompletion. 35% touchdown : Exposition -6.

Choix 2 — libellé : Jouer le corps

Effet(s) : Physique +2
Résultat aléatoire : 65% réception empêchée. 35% pénalité : Technique -1, Exposition -4.

Choix 3 — libellé : Forcer le WR vers la sideline

Effet(s) : Technique +2
Résultat aléatoire : 75% zone réduite. 25% WR gagne l'intérieur : Exposition -5.
24. Punt Return

Titre : Le retourneur s'échappe
Emoji : 🏃
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Sur un punt, le retourneur trouve un trou et commence à accélérer.

Choix 1 — libellé : Prendre l'angle

Effet(s) : Technique +2
Résultat aléatoire : 75% retour contenu.

Choix 2 — libellé : Chercher le gros hit

Effet(s) : Physique +2, Exposition +1
Résultat aléatoire : 40% gros tackle : Exposition +3. 60% retourneur te contourne : Exposition -4.

Choix 3 — libellé : Attendre le support

Effet(s) : Mental +2
Résultat aléatoire : 65% retour contenu. 35% gros retour : Exposition -4.
25. Pick Six

Titre : La balle flottante
Emoji : 🦅
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le QB lance une passe flottante vers ton côté.

Choix 1 — libellé : Attaquer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 35% interception : Exposition +6. 65% passe incomplète ou réception : Exposition -2.

Choix 2 — libellé : Jouer le WR

Effet(s) : Mental +1
Résultat aléatoire : 70% incompletion. 30% réception : Exposition -3.

Choix 3 — libellé : Sécuriser le tackle

Effet(s) : Technique +1
Résultat aléatoire : 80% gain limité. 20% grosse réception : Exposition -4.
26. Press Man décisif

Titre : Un contre un
Emoji : 🔥
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Dernier drive. Tu es isolé en man coverage contre le meilleur WR adverse.

Choix 1 — libellé : Press agressif

Effet(s) : Physique +2, Exposition +2
Résultat aléatoire : 40% WR totalement neutralisé : Exposition +4. 60% WR gagne son release : Exposition -5.

Choix 2 — libellé : Off coverage

Effet(s) : Mental +2
Résultat aléatoire : 70% tu gardes la profondeur. 30% réception facile : Exposition -3.

Choix 3 — libellé : Tenter de lire le QB

Effet(s) : Technique +2
Résultat aléatoire : 35% interception : Exposition +6. 65% tu quittes légèrement ton assignment : Exposition -4.
27. Penalty

Titre : Le drapeau jaune
Emoji : 🟨
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Tu viens de faire un gros contact sur un WR. L'arbitre hésite à sortir le flag.

Choix 1 — libellé : Contester calmement

Effet(s) : Mental +1
Résultat aléatoire : 70% aucune conséquence. 30% l'arbitre maintient sa décision.

Choix 2 — libellé : Continuer à argumenter

Effet(s) : Leadership -1, Exposition +1
Résultat aléatoire : 25% tu obtiens une explication. 75% tu agaces l'arbitre : Exposition -2.

Choix 3 — libellé : Passer à l'action suivante

Effet(s) : Mental +2
Résultat aléatoire : 80% tu récupères immédiatement mentalement.
28. WR Star

Titre : Face au meilleur
Emoji : ⭐
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Le meilleur receveur adverse est aligné face à toi depuis plusieurs drives.

Choix 1 — libellé : Le jouer physiquement

Effet(s) : Physique +2
Résultat aléatoire : 50% tu prends l'ascendant. 50% il gagne le duel : Mental -1, Exposition -3.

Choix 2 — libellé : Étudier ses habitudes

Effet(s) : Mental +2, Technique +1
Résultat aléatoire : 70% tu anticipes mieux ses routes.

Choix 3 — libellé : Chercher l'interception

Effet(s) : Exposition +2
Résultat aléatoire : 30% interception : Exposition +6. 70% il exploite ton agressivité : Exposition -5.
29. Communication sous pression

Titre : Broken Coverage
Emoji : 🚨
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Après une motion, la défense semble désorganisée juste avant le snap.

Choix 1 — libellé : Replacer tout le monde

Effet(s) : Leadership +3
Résultat aléatoire : 70% défense parfaitement replacée. 30% trop de changements : Leadership -2.

Choix 2 — libellé : Se concentrer uniquement sur son assignment

Effet(s) : Technique +1
Résultat aléatoire : 60% ton duel est gagné. 40% un autre défenseur est perdu : Exposition -4.

Choix 3 — libellé : Improviser

Effet(s) : Mental +1
Résultat aléatoire : 45% excellente adaptation : Technique +1. 55% grosse erreur collective : Leadership -2, Exposition -4.
30. Le dernier duel

Titre : One-on-One
Emoji : 🏆
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné : CB
Contexte : Dernière action du match. Un seul duel entre toi et le WR peut décider de l'issue.

Choix 1 — libellé : Jouer le ballon

Effet(s) : Technique +2, Exposition +2
Résultat aléatoire : 30% interception : Exposition +7. 35% passe incomplète. 35% réception : Exposition -7.

Choix 2 — libellé : Jouer le WR

Effet(s) : Physique +1, Mental +1
Résultat aléatoire : 65% couverture réussie. 35% réception : Exposition -5.

Choix 3 — libellé : Faire confiance au Safety

Effet(s) : Leadership +2, Mental +1
Résultat aléatoire : 70% couverture coordonnée. 30% mauvaise communication : Leadership -2, Exposition -5.

Choix 4 — libellé : Prendre le risque sur la route

Effet(s) : Exposition +3
Résultat aléatoire : 25% interception : Exposition +7. 75% mauvais diagnostic : Technique -2, Exposition -6.


🏫 VIE SOCIALE — HIGH SCHOOL
1. La soirée après le match

Titre : La fête du vendredi soir
Emoji : 🎉
Acte : HS
Saisons concernées : toutes
Poste(s) concerné(s) :
Condition particulière :
Nécessite :
Contexte : Après un gros match, tes amis organisent une soirée. Tu as entraînement tôt demain.

Choix 1 — libellé : Y aller quand même

Effet(s) : Exposition +2
Résultat aléatoire : 70% bonne soirée : Mental +1. 30% tu arrives épuisé à l'entraînement : Physique -2.

Choix 2 — libellé : Rester chez toi

Effet(s) : Mental +1, Physique +1
Résultat aléatoire : 40% tes amis te reprochent ton absence : Exposition -1.

Choix 3 — libellé : Passer rapidement

Effet(s) : Exposition +1
Résultat aléatoire : 75% tu profites de la soirée sans conséquence.
2. Le groupe populaire

Titre : Invitation dans le groupe
Emoji : 👥
Acte : HS
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Les élèves les plus populaires commencent à t'intégrer à leur groupe.

Choix 1 — libellé : Accepter

Effet(s) : Exposition +3
Résultat aléatoire : 65% ta popularité augmente. 35% tu te retrouves entraîné dans des histoires : Mental -2.

Choix 2 — libellé : Rester avec tes amis

Effet(s) : Mental +1
Résultat aléatoire : 60% tes relations restent solides. 40% tu rates une opportunité sociale : Exposition -2.
3. Première relation

Titre : Ton premier vrai couple
Emoji : ❤️
Acte : HS / College
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Quelqu'un commence à prendre une place importante dans ta vie.

Choix 1 — libellé : T'investir complètement

Effet(s) : Mental +2
Résultat aléatoire : 40% relation très stable. 60% séparation difficile : Mental -3.

Choix 2 — libellé : Garder un équilibre

Effet(s) : Mental +1
Résultat aléatoire : 75% relation saine.

Choix 3 — libellé : Prioriser le football

Effet(s) : Technique +1
Résultat aléatoire : 45% la relation tient. 55% rupture : Mental -2, Exposition -1.
4. Les réseaux sociaux

Titre : Ta première vidéo devient virale
Emoji : 📱
Acte : HS / College
Saisons concernées :
Poste(s) concerné(s) :
Contexte : Une vidéo de toi circule énormément sur les réseaux.

Choix 1 — libellé : Profiter du buzz

Effet(s) : Exposition +4
Résultat aléatoire : 70% image positive. 30% controverse : Mental -2, Exposition -2.

Choix 2 — libellé : Ne rien faire

Effet(s) : Mental +1
Résultat aléatoire : 60% le buzz disparaît rapidement.

Choix 3 — libellé : Publier davantage

Effet(s) : Exposition +3
Résultat aléatoire : 35% énorme progression. 65% tu commences à être critiqué : Mental -2.
5. Rivalité scolaire

Titre : Le rival
Emoji : 😤
Acte : HS
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Un autre joueur de ton lycée devient ton rival sur et en dehors du terrain.

Choix 1 — libellé : Entrer dans le jeu

Effet(s) : Mental +1, Exposition +2
Résultat aléatoire : 50% rivalité saine. 50% conflit : Mental -2.

Choix 2 — libellé : L'ignorer

Effet(s) : Mental +2
Résultat aléatoire : 70% le conflit disparaît.

Choix 3 — libellé : Le confronter

Effet(s) : Leadership +1
Résultat aléatoire : 40% respect mutuel. 60% conflit aggravé : Exposition -2.
6. Le bal du lycée

Titre : Prom Night
Emoji : 🕺
Acte : HS
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Le grand bal du lycée approche.

Choix 1 — libellé : Y aller avec tes amis

Effet(s) : Exposition +2, Mental +1

Choix 2 — libellé : Y aller avec ton/ta partenaire

Effet(s) : Mental +2
Résultat aléatoire :70% soirée mémorable. 30% petite tension : Mental -1.

Choix 3 — libellé : Ne pas y aller

Effet(s) : Mental +1
Résultat aléatoire : 40% tu regrettes : Exposition -2.

7. La dispute avec un ami
Titre : Ton meilleur ami te tourne le dos
Emoji : 💔
Acte : HS / College
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Une dispute sérieuse éclate avec ton meilleur ami.

Choix 1 — libellé : Faire le premier pas

Effet(s) : Leadership +1, Mental +1
Résultat aléatoire : 75% réconciliation.

Choix 2 — libellé : Attendre qu'il revienne

Effet(s) : Mental -1
Résultat aléatoire : 50% réconciliation, 50% rupture durable : Mental -2.

Choix 3 — libellé : Couper les ponts

Effet(s) : Mental -2
Résultat aléatoire : 60% tu assumes. 40% tu regrettes : Mental -2.
8. Les études prennent du retard

Titre : Le dossier scolaire
Emoji : 📚
Acte : HS / College
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Entre le football et ta vie sociale, tes résultats scolaires commencent à baisser.

Choix 1 — libellé : Travailler davantage

Effet(s) : Mental +2

Choix 2 — libellé : Demander de l'aide

Effet(s) : Leadership +1, Mental +1

Choix 3 — libellé : Laisser couler

Effet(s) : Mental -2, Exposition -1
Résultat aléatoire : 25% tu rattrapes in extremis. 75% tes problèmes scolaires s'aggravent.
9. La rumeur

Titre : Une rumeur circule
Emoji : 🗣️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une rumeur sur toi commence à circuler.

Choix 1 — libellé : Répondre publiquement

Effet(s) : Exposition +2
Résultat aléatoire : 50% tu contrôles le récit. 50% la polémique grossit : Mental -2.

Choix 2 — libellé : Ignorer

Effet(s) : Mental +1
Résultat aléatoire : 70% elle disparaît.

Choix 3 — libellé : Confronter celui qui l'a lancée

Effet(s) : Leadership +1
Résultat aléatoire : 40% résolution. 60% conflit : Exposition -2.
10. Le coach te félicite devant tout le lycée

Titre : Le joueur modèle
Emoji : 🏆
Acte : HS / College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach te présente comme un exemple pour les autres élèves.

Choix 1 — libellé : Profiter de ton statut

Effet(s) : Leadership +2, Exposition +2
Résultat aléatoire : 30% certains pensent que tu prends la grosse tête : Exposition -2.

Choix 2 — libellé : Rester discret

Effet(s) : Mental +2

Choix 3 — libellé : Motiver les autres

Effet(s) : Leadership +3
11. Le premier sponsor local

Titre : Ton premier sponsor
Emoji : 💰
Acte : HS / College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une entreprise locale veut associer son image à la tienne.

Choix 1 — libellé : Accepter

Effet(s) : Exposition +3
Résultat aléatoire : 70% bonne opération. 30% image de sportif trop commercial : Exposition -2.

Choix 2 — libellé : Refuser

Effet(s) : Mental +1

Choix 3 — libellé : Négocier

Effet(s) : Leadership +2, Exposition +2
Résultat aléatoire : 60% meilleur accord. 40% l'entreprise se retire.
12. La remise des diplômes

Titre : Le dernier jour
Emoji : 🎓
Acte : HS
Saisons concernées : dernière saison
Poste(s) concerné :
Contexte : Ton aventure au lycée touche à sa fin.

Choix 1 — libellé : Faire un discours

Effet(s) : Leadership +3, Exposition +2
Résultat aléatoire : 20% discours maladroit : Mental -1.

Choix 2 — libellé : Profiter avec tes proches

Effet(s) : Mental +3

Choix 3 — libellé : Déjà penser à l'université

Effet(s) : Mental +1, Technique +1

🎓 VIE SOCIALE — NCAA
13. Arrivée sur le campus

Titre : Nouveau départ
Emoji : 🎒
Acte : College
Saisons concernées : 1
Poste(s) concerné :
Contexte : Tu arrives sur un campus où personne ne te connaît.

Choix 1 — libellé : Faire connaissance avec tout le monde

Effet(s) : Exposition +3

Choix 2 — libellé : Rester avec les joueurs

Effet(s) : Leadership +1, Mental +1

Choix 3 — libellé : Rester très discret

Effet(s) : Mental +1
Résultat aléatoire : 50% tu t'adaptes bien. 50% tu te sens isolé : Mental -2.
14. Le colocataire

Titre : Nouveau coloc
Emoji : 🏠
Acte : College
Saisons concernées : 1-4
Poste(s) concerné :
Contexte : Tu dois partager ton logement avec un autre étudiant.

Choix 1 — libellé : Devenir proche

Effet(s) : Mental +2
Résultat aléatoire : 20% gros conflit : Mental -2.

Choix 2 — libellé : Garder tes distances

Effet(s) : Mental +1

Choix 3 — libellé : Poser les règles dès le départ

Effet(s) : Leadership +2
Résultat aléatoire : 30% il trouve ça trop autoritaire : Mental -1.
15. Première grosse soirée universitaire

Titre : College Party
Emoji : 🎊
Acte : College
Saisons concernées : 1-4
Poste(s) concerné :
Contexte : Une énorme soirée étudiante est organisée.

Choix 1 — libellé : Y aller

Effet(s) : Exposition +3
Résultat aléatoire : 70% bonne soirée. 30% problème le lendemain : Mental -2.

Choix 2 — libellé : Passer rapidement

Effet(s) : Exposition +1

Choix 3 — libellé : Ne pas y aller

Effet(s) : Mental +1, Physique +1
16. Une relation devient sérieuse

Titre : Relation à distance
Emoji : 📞
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ta relation devient sérieuse alors que ton calendrier devient de plus en plus chargé.

Choix 1 — libellé : Faire passer la relation en priorité

Effet(s) : Mental +2
Résultat aléatoire : 40% équilibre difficile : Technique -1.

Choix 2 — libellé : Trouver un équilibre

Effet(s) : Mental +1, Leadership +1

Choix 3 — libellé : Prioriser ta carrière

Effet(s) : Technique +2
Résultat aléatoire : 50% relation maintenue. 50% rupture : Mental -3.
17. Le statut de joueur vedette

Titre : Tout le monde te connaît
Emoji : ⭐
Acte : College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ton visage commence à être connu sur le campus.

Choix 1 — libellé : Profiter de la célébrité

Effet(s) : Exposition +4
Résultat aléatoire : 30% ego qui monte : Mental -2.

Choix 2 — libellé : Garder la tête froide

Effet(s) : Mental +2

Choix 3 — libellé : Utiliser ton influence

Effet(s) : Leadership +3, Exposition +2
18. Un camarade te demande de l'aide

Titre : Coup de main
Emoji : 🤝
Acte : College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Un étudiant te demande de l'aider alors que tu as déjà énormément de travail.

Choix 1 — libellé : L'aider

Effet(s) : Leadership +2, Mental +1

Choix 2 — libellé : Refuser poliment

Effet(s) : Mental +1

Choix 3 — libellé : Promettre puis oublier

Effet(s) : Leadership -2, Exposition -1
19. Interview étudiante

Titre : Le journal du campus
Emoji : 🎙️
Acte : College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le journal étudiant veut t'interviewer.

Choix 1 — libellé : Accepter

Effet(s) : Exposition +3
Résultat aléatoire : 75% interview réussie. 25% une phrase est mal interprétée : Exposition -2.

Choix 2 — libellé : Refuser

Effet(s) : Mental +1

Choix 3 — libellé : Parler uniquement du football

Effet(s) : Exposition +2, Technique +1
20. Le groupe d'amis change

Titre : Nouvelles fréquentations
Emoji : 🔀
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ton entourage commence à changer avec ta réussite.

Choix 1 — libellé : Suivre le nouveau groupe

Effet(s) : Exposition +2
Résultat aléatoire : 45% nouvelles opportunités. 55% mauvaises influences : Mental -2.

Choix 2 — libellé : Garder tes anciens amis

Effet(s) : Mental +2

Choix 3 — libellé : Garder les deux cercles

Effet(s) : Leadership +1
Résultat aléatoire : 60% équilibre réussi. 40% tensions : Mental -1.
21. Le coach te demande d'être présent

Titre : Représenter l'équipe
Emoji : 🗣️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le programme te demande de représenter l'équipe lors d'un événement universitaire.

Choix 1 — libellé : Accepter

Effet(s) : Leadership +2, Exposition +2

Choix 2 — libellé : Refuser pour te reposer

Effet(s) : Physique +1, Mental +1
Résultat aléatoire : 30% le staff considère que tu manques d'implication : Leadership -1.
22. Première grosse interview nationale

Titre : Les médias nationaux
Emoji : 📺
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Pour la première fois, une chaîne nationale te demande une interview.

Choix 1 — libellé : Jouer la carte humble

Effet(s) : Mental +1, Exposition +2

Choix 2 — libellé : Assumer tes ambitions

Effet(s) : Exposition +4
Résultat aléatoire : 60% image forte. 40% certains te trouvent arrogant : Exposition -2.

Choix 3 — libellé : Répondre très prudemment

Effet(s) : Mental +2
Résultat aléatoire : 40% interview fade : Exposition -1.
23. Les réseaux deviennent ingérables

Titre : Trop de notifications
Emoji : 📲
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Tu reçois des centaines de messages après tes performances.

Choix 1 — libellé : Tout lire

Effet(s) : Exposition +2
Résultat aléatoire : 50% motivation. 50% critiques qui te touchent : Mental -2.

Choix 2 — libellé : Couper les notifications

Effet(s) : Mental +2

Choix 3 — libellé : Confier tes réseaux à quelqu'un

Effet(s) : Leadership +1, Mental +1
24. Le mentor

Titre : Un ancien joueur te conseille
Emoji : 🧓
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Un ancien joueur du programme te propose de te guider.

Choix 1 — libellé : Écouter ses conseils

Effet(s) : Mental +2, Leadership +1

Choix 2 — libellé : Faire ton propre chemin

Effet(s) : Mental +1
Résultat aléatoire : 40% tu regrettes de ne pas l'avoir écouté : Mental -2.

Choix 3 — libellé : Construire une vraie relation

Effet(s) : Leadership +2, Exposition +1
25. Le scandale d'un coéquipier

Titre : Mauvaise compagnie
Emoji : ⚠️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Un de tes proches est impliqué dans une histoire embarrassante.

Choix 1 — libellé : Le défendre

Effet(s) : Leadership +2
Résultat aléatoire : 40% il apprécie ton soutien. 60% ton image est associée à l'affaire : Exposition -3.

Choix 2 — libellé : Prendre tes distances

Effet(s) : Mental +1
Résultat aléatoire : 50% tu protèges ton image. 50% rupture amicale : Mental -2.

Choix 3 — libellé : L'aider en privé

Effet(s) : Leadership +2, Mental +1
26. Charity

Titre : Action caritative
Emoji : ❤️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une association te propose de participer à une action auprès d'enfants.

Choix 1 — libellé : Participer

Effet(s) : Leadership +2, Exposition +2

Choix 2 — libellé : Participer sans communication

Effet(s) : Leadership +3

Choix 3 — libellé : Refuser

Effet(s) : Mental +1
Résultat aléatoire : 30% l'occasion était importante : Exposition -2.
27. La pression des fans

Titre : Ils veulent tous une photo
Emoji : 📸
Acte : College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Tu es entouré de fans alors que tu essaies simplement de sortir du campus.

Choix 1 — libellé : Prendre le temps

Effet(s) : Leadership +1, Exposition +3
Résultat aléatoire : 20% la foule devient trop importante : Mental -1.

Choix 2 — libellé : Refuser poliment

Effet(s) : Mental +1

Choix 3 — libellé : Partir immédiatement

Effet(s) : Mental +1
Résultat aléatoire : 40% certains fans se vexent : Exposition -2.
28. Le transfert

Titre : Changer d'université
Emoji : 🔄
Acte : College
Saisons concernées : 1-4
Poste(s) concerné :
Contexte : Tu envisages de quitter ton université pour un autre programme.

Choix 1 — libellé : Partir
CHOISIR UNE NOUVELLE UNVERSITE

Effet(s) : Exposition +2
Résultat aléatoire : 60% nouveau départ réussi. 40% isolement : Mental -2.

Choix 2 — libellé : Rester

Effet(s) : Mental +2
Résultat aléatoire : 30% tu regrettes de ne pas être parti : Exposition -2.

Choix 3 — libellé : Attendre encore une saison

Effet(s) : Mental +1
Résultat aléatoire : 60% la situation s'améliore. 40% elle se dégrade : Mental -2.
29. Ton agent potentiel

Titre : Un représentant te contacte
Emoji : 💼
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une personne affirme pouvoir t'aider à gérer ton image et tes opportunités.

Choix 1 — libellé : Lui faire confiance

Effet(s) : Exposition +3
Résultat aléatoire : 60% bonne relation. 40% mauvaise gestion : Exposition -3.

Choix 2 — libellé : Vérifier tout avant

Effet(s) : Mental +2
Résultat aléatoire : 80% tu évites un mauvais choix.

Choix 3 — libellé : Refuser

Effet(s) : Mental +1
Résultat aléatoire : 30% tu rates une opportunité : Exposition -2.
30. Le dîner avec les recruteurs

Titre : Dîner important
Emoji : 🍽️
Acte : College + PRO
Saisons concernées :
Poste(s) concerné :
Contexte : Des personnes importantes pour ton avenir sont présentes à un dîner.

Choix 1 — libellé : Être très sociable

Effet(s) : Exposition +3, Leadership +1

Choix 2 — libellé : Rester professionnel

Effet(s) : Mental +2

Choix 3 — libellé : Montrer ta personnalité

Effet(s) : Exposition +2
Résultat aléatoire : 65% ils apprécient. 35% ils te trouvent trop confiant : Exposition -2.

🏈 VIE SOCIALE — PRO
31. Rookie dans une nouvelle ville

Titre : Bienvenue chez les pros
Emoji : 🌆
Acte : Pro
Saisons concernées : 1
Poste(s) concerné :
Contexte : Tu arrives dans une nouvelle ville et personne ne sait encore qui tu es.

Choix 1 — libellé : Explorer la ville

Effet(s) : Exposition +2, Mental +1

Choix 2 — libellé : Rester avec l'équipe

Effet(s) : Leadership +1, Mental +1

Choix 3 — libellé : Rester chez toi

Effet(s) : Mental +1
Résultat aléatoire : 40% isolement : Mental -2.
32. Premier gros contrat

Titre : Le premier gros chèque
Emoji : 💵
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Tu signes enfin un contrat qui change complètement ton niveau de vie.

Choix 1 — libellé : Acheter immédiatement

Effet(s) : Exposition +2
Résultat aléatoire : 40% achats mal gérés : Mental -2.

Choix 2 — libellé : Investir

Effet(s) : Mental +2

Choix 3 — libellé : Faire plaisir à ta famille

Effet(s) : Mental +3
33. Maison de rêve

Titre : La nouvelle maison
Emoji : 🏡
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Tu peux enfin acheter la maison dont tu rêvais.

Choix 1 — libellé : Acheter très grand

Effet(s) : Exposition +2
Résultat aléatoire : 35% charges trop importantes : Mental -2.

Choix 2 — libellé : Acheter raisonnable

Effet(s) : Mental +2

Choix 3 — libellé : Investir plutôt que consommer

Effet(s) : Mental +1, Leadership +1
34. Les sollicitations financières

Titre : Tout le monde veut quelque chose
Emoji : 💸
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Depuis que tu gagnes beaucoup d'argent, les demandes financières se multiplient.

Choix 1 — libellé : Dire oui

Effet(s) : Mental +1
Résultat aléatoire : 50% satisfaction. 50% abus : Mental -3.

Choix 2 — libellé : Fixer des limites

Effet(s) : Leadership +2, Mental +1

Choix 3 — libellé : Couper avec tout le monde

Effet(s) : Mental -1
Résultat aléatoire : 40% soulagement. 60% solitude : Mental -2.
35. La célébrité

Titre : Reconnu partout
Emoji : 🌟
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Tu ne peux plus sortir sans être reconnu.

Choix 1 — libellé : Accepter la célébrité

Effet(s) : Exposition +4

Choix 2 — libellé : Protéger ta vie privée

Effet(s) : Mental +2

Choix 3 — libellé : Utiliser ta notoriété

Effet(s) : Leadership +2, Exposition +3
Résultat aléatoire : 25% surexposition : Mental -2.
36. Premier grand scandale médiatique

Titre : La polémique
Emoji : 🚨
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une histoire concernant ta vie privée fait la une.

Choix 1 — libellé : Faire une déclaration

Effet(s) : Exposition +2
Résultat aléatoire : 60% tu contrôles la situation. 40% nouvelle polémique : Mental -3.

Choix 2 — libellé : Ne rien dire

Effet(s) : Mental +1
Résultat aléatoire : 50% la polémique disparaît. 50% elle s'amplifie : Exposition -4.

Choix 3 — libellé : Attaquer les médias

Effet(s) : Exposition +2
Résultat aléatoire : 30% tes fans adorent. 70% tu aggravres la situation : Mental -2, Exposition -3.
37. Les fans de l'équipe

Titre : Chouchou du public
Emoji : 📣
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Les supporters commencent à te considérer comme l'un des visages de la franchise.

Choix 1 — libellé : Communiquer avec eux

Effet(s) : Exposition +3, Leadership +1

Choix 2 — libellé : Rester discret

Effet(s) : Mental +2

Choix 3 — libellé : Devenir très présent sur les réseaux

Effet(s) : Exposition +4
Résultat aléatoire : 40% critiques : Mental -2.
38. Ton coéquipier devient ton meilleur ami

Titre : Frères d'armes
Emoji : 🤝
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une relation très forte se crée avec un coéquipier.

Choix 1 — libellé : Tout partager

Effet(s) : Mental +2, Leadership +1

Choix 2 — libellé : Garder une certaine distance

Effet(s) : Mental +1

Choix 3 — libellé : Devenir inséparables

Effet(s) : Mental +3
Résultat aléatoire : 25% conflit futur : Mental -3.
39. Conflit avec un coéquipier

Titre : Les tensions explosent
Emoji : 💢
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une dispute personnelle éclate avec un autre joueur.

Choix 1 — libellé : Régler ça en privé

Effet(s) : Mental +1, Leadership +1
Résultat aléatoire : 70% réconciliation.

Choix 2 — libellé : Répondre publiquement

Effet(s) : Exposition +2
Résultat aléatoire : 70% conflit aggravé : Mental -2.

Choix 3 — libellé : Ignorer

Effet(s) : Mental +1
Résultat aléatoire : 50% ça passe, 50% tensions persistantes : Leadership -1.
40. L'agent prend le contrôle

Titre : Ton entourage professionnel
Emoji : 💼
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ton agent veut gérer une grande partie de ton image publique.

Choix 1 — libellé : Le laisser gérer

Effet(s) : Mental +1
Résultat aléatoire : 65% très efficace. 35% ton image devient trop contrôlée : Exposition -2.

Choix 2 — libellé : Tout contrôler toi-même

Effet(s) : Leadership +2
Résultat aléatoire : 40% surcharge : Mental -2.

Choix 3 — libellé : Trouver un équilibre

Effet(s) : Leadership +2, Mental +1
41. Première campagne publicitaire

Titre : Ton visage sur les écrans
Emoji : 📺
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Une grande marque te propose une campagne nationale.

Choix 1 — libellé : Accepter

Effet(s) : Exposition +5
Résultat aléatoire : 75% énorme succès. 25% campagne mal reçue : Exposition -3.

Choix 2 — libellé : Refuser

Effet(s) : Mental +1
Résultat aléatoire : 40% tu regrettes : Exposition -2.

Choix 3 — libellé : Négocier pour garder ton image

Effet(s) : Leadership +2, Exposition +3
42. Les paparazzis

Titre : Plus aucune intimité
Emoji : 📷
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Des photographes commencent à suivre tes déplacements.

Choix 1 — libellé : Les ignorer

Effet(s) : Mental +2

Choix 2 — libellé : Leur parler

Effet(s) : Exposition +2
Résultat aléatoire : 60% relation correcte. 40% tes propos sont déformés : Exposition -3.

Choix 3 — libellé : Réagir agressivement

Effet(s) : Mental -1
Résultat aléatoire : 30% ils partent. 70% la vidéo fait le tour des réseaux : Exposition -4.
43. Fondation personnelle

Titre : Donner en retour
Emoji : ❤️
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Tu veux utiliser ta réussite pour aider ta communauté.

Choix 1 — libellé : Créer une fondation

Effet(s) : Leadership +4, Exposition +2

Choix 2 — libellé : Donner anonymement

Effet(s) : Mental +3

Choix 3 — libellé : Organiser des événements

Effet(s) : Leadership +3, Exposition +3
Résultat aléatoire : 20% organisation ratée : Leadership -1.
44. La relation avec les médias

Titre : Les journalistes te connaissent
Emoji : 📰
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Certains journalistes commencent à te suivre régulièrement.

Choix 1 — libellé : Leur parler régulièrement

Effet(s) : Exposition +3
Résultat aléatoire : 25% une relation se retourne contre toi : Exposition -3.

Choix 2 — libellé : Ne parler qu'en conférence

Effet(s) : Mental +1

Choix 3 — libellé : Ne rien leur donner

Effet(s) : Mental +2
Résultat aléatoire : 30% ils deviennent plus critiques : Exposition -2.
45. Le mariage

Titre : Une nouvelle étape
Emoji : 💍
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ta vie personnelle prend une nouvelle direction.

Choix 1 — libellé : Organiser une grande cérémonie

Effet(s) : Exposition +3, Mental +2
Résultat aléatoire : 25% pression médiatique : Mental -2.

Choix 2 — libellé : Rester très privé

Effet(s) : Mental +3

Choix 3 — libellé : Faire participer les fans

Effet(s) : Exposition +4
Résultat aléatoire : 35% surexposition : Mental -2.
46. Premier enfant

Titre : Une nouvelle responsabilité
Emoji : 👶
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ta vie personnelle change complètement.

Choix 1 — libellé : Tout réorganiser autour de la famille

Effet(s) : Mental +3
Résultat aléatoire : 30% fatigue importante : Physique -2.

Choix 2 — libellé : Maintenir ton rythme professionnel

Effet(s) : Technique +1
Résultat aléatoire : 45% équilibre réussi. 55% fatigue : Mental -2.

Choix 3 — libellé : Trouver un équilibre

Effet(s) : Leadership +2, Mental +2
47. La pression financière

Titre : Tout le monde compte sur toi
Emoji : 💰
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Ton entourage dépend désormais en partie de tes revenus.

Choix 1 — libellé : Tout prendre en charge

Effet(s) : Leadership +2
Résultat aléatoire : 50% satisfaction. 50% pression énorme : Mental -3.

Choix 2 — libellé : Poser des limites

Effet(s) : Mental +2

Choix 3 — libellé : Déléguer la gestion

Effet(s) : Leadership +1, Mental +1
Résultat aléatoire : 25% mauvaise gestion : Mental -2.
48. Le divorce d'un proche

Titre : Une famille sous tension
Emoji : 💔
Acte : Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Un proche traverse une période familiale difficile et compte sur toi.

Choix 1 — libellé : Être très présent

Effet(s) : Leadership +2, Mental +1
Résultat aléatoire : 30% tu t'épuises : Mental -2.

Choix 2 — libellé : Aider financièrement

Effet(s) : Mental +1
Résultat aléatoire : 40% cela crée une dépendance : Mental -2.

Choix 3 — libellé : Garder tes distances

Effet(s) : Mental -1
Résultat aléatoire : 50% tu protèges ton équilibre. 50% tu regrettes : Mental -2.
49. La retraite approche

Titre : Et après le football ?
Emoji : 🕰️
Acte : Pro
Saisons concernées : dernières saisons
Poste(s) concerné :
Contexte : Tu commences à réfléchir sérieusement à ta vie après le football.

Choix 1 — libellé : Préparer une reconversion

Effet(s) : Mental +2, Leadership +1

Choix 2 — libellé : Profiter encore du présent

Effet(s) : Mental +2
Résultat aléatoire : 40% tu regrettes de ne rien avoir préparé : Mental -3.

Choix 3 — libellé : Commencer à devenir mentor

Effet(s) : Leadership +3, Exposition +1
50. L'après-carrière

Titre : La vie après la NFL
Emoji : 🏁
Acte : Pro
Saisons concernées : dernière saison
Poste(s) concerné :
Contexte : Après des années de football professionnel, tu dois décider quelle personne tu veux devenir en dehors du terrain.

Choix 1 — libellé : Devenir coach

Effet(s) : Leadership +4, Technique +1

Choix 2 — libellé : Devenir entrepreneur

Effet(s) : Leadership +3
Résultat aléatoire : 40% premier projet difficile : Mental -2.

Choix 3 — libellé : Devenir personnalité médiatique

Effet(s) : Exposition +5
Résultat aléatoire : 35% surexposition : Mental -2.

Choix 4 — libellé : Disparaître des projecteurs

Effet(s) : Mental +4
Résultat aléatoire : 30% sentiment de vide : Mental -2.

🧠 PERSONNEL + ENTRAÎNEMENT — 50 ÉVÉNEMENTS
🏫 HIGH SCHOOL — 12
1. Le nouveau playbook

Titre : Le playbook s'épaissit
Emoji : 📖
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) :
Condition particulière :
Nécessite :
Contexte : Le coach installe plusieurs nouvelles formations et tu dois rapidement comprendre ton rôle.

Choix 1 — Tout apprendre immédiatement

Effet(s) : Technique +2, Mental -1

Choix 2 — Maîtriser d'abord les concepts principaux

Effet(s) : Technique +1, Mental +1

Choix 3 — Apprendre uniquement tes responsabilités

Effet(s) : Technique +1
Résultat aléatoire : 35% tu gagnes du temps ; 65% une mauvaise compréhension collective te pénalise : Technique -2.
2. Les reps supplémentaires

Titre : Encore dix répétitions
Emoji : 🔁
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Après l'entraînement, le coach propose quelques répétitions supplémentaires.

Choix 1 — Accepter

Effet(s) : Technique +2
Résultat aléatoire : 25% mauvaise exécution : Technique -1.

Choix 2 — Faire seulement quelques reps

Effet(s) : Technique +1, Physique +1

Choix 3 — Rentrer récupérer

Effet(s) : Physique +1, Mental +1
3. Le walkthrough

Titre : Walkthrough du vendredi
Emoji : 🚶
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Le coach organise une répétition sans contact où chacun doit être parfaitement aligné.

Choix 1 — Prendre ça très au sérieux

Effet(s) : Technique +2, Mental +1

Choix 2 — Faire le minimum

Effet(s) : Physique +1
Résultat aléatoire : 40% aucune conséquence ; 60% erreur mémorisée : Technique -1.
4. Le scout team

Titre : Jouer le rôle du titulaire
Emoji : 🧩
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné(s) :
Contexte : Le coach te demande d'imiter le style d'un adversaire pendant une séance.

Choix 1 — Copier chaque détail

Effet(s) : Technique +2, Mental +1

Choix 2 — Jouer naturellement

Effet(s) : Technique +1

Choix 3 — Faire seulement ce qu'on te demande

Effet(s) : Mental +1
Résultat aléatoire : 35% tu manques de sérieux : Leadership -1.
5. La cadence

Titre : Change ton tempo
Emoji : ⏱️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach veut travailler différentes cadences et réactions au snap.

Choix 1 — Répéter jusqu'à automatisation

Effet(s) : Technique +2

Choix 2 — Expérimenter toi-même

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 30% mauvaise synchronisation : Technique -1.

Choix 3 — Rester sur tes habitudes

Effet(s) : Mental +1
6. Le drill inhabituel

Titre : Une nouvelle méthode
Emoji : 🧪
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach introduit un exercice que tu n'as jamais pratiqué.

Choix 1 — Plonger dedans

Effet(s) : Technique +2
Résultat aléatoire : 25% difficulté : Mental -1.

Choix 2 — Observer avant d'essayer

Effet(s) : Mental +2

Choix 3 — Faire comme d'habitude

Effet(s) : Technique -1, Mental +1
7. La compétition interne

Titre : Qui gagnera les reps ?
Emoji : ⚔️
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Deux joueurs doivent se départager lors d'une série de répétitions.

Choix 1 — Jouer à fond

Effet(s) : Physique +2
Résultat aléatoire : 30% erreur sous pression : Mental -1.

Choix 2 — Rester méthodique

Effet(s) : Technique +2

Choix 3 — Chercher à impressionner

Effet(s) : Exposition +2
Résultat aléatoire : 45% réussite spectaculaire ; 55% erreur : Technique -2.
8. Le coach arrête la séance

Titre : Tout le monde s'arrête
Emoji : 🛑
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach interrompt tout pour corriger un problème collectif.

Choix 1 — Écouter attentivement

Effet(s) : Technique +2

Choix 2 — Poser une question

Effet(s) : Mental +1, Technique +1

Choix 3 — Profiter de la pause

Effet(s) : Physique +1
Résultat aléatoire : 40% tu rates une correction importante : Technique -1.
9. Le test surprise

Titre : Contrôle du playbook
Emoji : 📝
Acte : HS / College
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach teste individuellement votre connaissance des concepts.

Choix 1 — Réviser sérieusement

Effet(s) : Technique +2

Choix 2 — Compter sur ta mémoire

Effet(s) : Mental +1
Résultat aléatoire : 50% réussite ; 50% erreur : Technique -2.

Choix 3 — Réviser uniquement les plays principaux

Effet(s) : Technique +1
10. Le poste secondaire

Titre : Apprendre un autre rôle
Emoji : 🔄
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach te demande d'apprendre quelques responsabilités d'un autre poste.

Choix 1 — Accepter

Effet(s) : Technique +2, Mental +1

Choix 2 — Te concentrer sur ton poste

Effet(s) : Technique +1

Choix 3 — Prendre ça comme une contrainte

Effet(s) : Mental -1, Technique -1
11. La séance sous pression

Titre : Tout le monde te regarde
Emoji : 👀
Acte : HS / College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Plusieurs coaches observent spécifiquement ta séance.

Choix 1 — Jouer normalement

Effet(s) : Mental +2

Choix 2 — Montrer ce que tu sais faire

Effet(s) : Exposition +2, Technique +1
Résultat aléatoire : 35% tu forces : Technique -2.

Choix 3 — Chercher à ne faire aucune erreur

Effet(s) : Mental -1, Technique +1
12. Le défi du coach

Titre : « Montre-moi ce que tu as »
Emoji : 🔥
Acte : HS
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le coach te met volontairement au défi devant le groupe.

Choix 1 — Répondre par le travail

Effet(s) : Mental +2, Leadership +1

Choix 2 — Chercher le geste spectaculaire

Effet(s) : Exposition +2
Résultat aléatoire : 40% réussite : Technique +2 ; 60% échec : Mental -2.

Choix 3 — Ne rien montrer

Effet(s) : Mental +1
🎓 NCAA — 18 événements
13. Le changement de système

Titre : Nouveau système offensif
Emoji : 🧠
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le staff modifie une partie du système.

Choix 1 — Tout reprendre depuis zéro

Effet(s) : Technique +3, Mental -1

Choix 2 — Identifier uniquement les différences

Effet(s) : Technique +2

Choix 3 — Attendre que ça devienne automatique

Effet(s) : Mental +1
Résultat aléatoire : 50% adaptation ; 50% retard : Technique -2.
14. Le position meeting

Titre : Une heure au tableau
Emoji : 🧑‍🏫
Acte : College / Pro
Saisons concernées : toutes
Contexte : Ton coach de position passe une heure à détailler les responsabilités.

Choix 1 — Prendre des notes

Effet(s) : Technique +2

Choix 2 — Participer activement

Effet(s) : Leadership +1, Technique +1

Choix 3 — Écouter sans intervenir

Effet(s) : Mental +1
15. La protection complexe

Titre : Nouvelle protection
Emoji : 🛡️
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné : QB / OL / RB
Contexte : Une nouvelle protection comporte plusieurs ajustements selon la défense.

Choix 1 — La mémoriser parfaitement

Effet(s) : Technique +3

Choix 2 — Comprendre le principe plutôt que le texte

Effet(s) : Technique +2, Mental +1

Choix 3 — Faire confiance aux autres

Effet(s) : Leadership -1
Résultat aléatoire : 60% aucun problème ; 40% confusion : Technique -2.
16. Le check à la ligne

Titre : Modifier le play
Emoji : 📣
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le système permet de changer certains éléments juste avant le snap.

Choix 1 — Apprendre tous les checks

Effet(s) : Technique +2, Mental +1

Choix 2 — N'utiliser que les checks simples

Effet(s) : Technique +1

Choix 3 — Expérimenter beaucoup

Effet(s) : Mental +1
Résultat aléatoire : 35% excellent changement ; 65% mauvais check : Technique -2.
17. Le joueur qui connaît le système

Titre : Devenir une référence
Emoji : 📚
Acte : College / Pro
Saisons concernées : toutes
Contexte : Tes coéquipiers commencent à venir te demander des explications.

Choix 1 — Les aider

Effet(s) : Leadership +3, Technique +1

Choix 2 — Leur dire de demander au coach

Effet(s) : Mental +1

Choix 3 — Les aider sans être sûr

Effet(s) : Leadership +1
Résultat aléatoire : 40% tu aides correctement ; 60% tu transmets une erreur : Leadership -2.
18. Le script de début de match

Titre : Les premières séries
Emoji : 📋
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le staff prépare précisément les premières actions.

Choix 1 — Mémoriser chaque détail

Effet(s) : Technique +2, Mental +1

Choix 2 — Comprendre l'intention globale

Effet(s) : Mental +2

Choix 3 — Improviser selon la situation

Effet(s) : Mental +1
Résultat aléatoire : 40% réussite ; 60% erreur de communication : Technique -2.
19. La séance à thème

Titre : Une seule situation pendant deux heures
Emoji : 🎯
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le staff consacre toute la séance à une situation précise.

Choix 1 — Chercher la perfection

Effet(s) : Technique +3, Physique -1

Choix 2 — Rester régulier

Effet(s) : Technique +2

Choix 3 — Économiser tes efforts

Effet(s) : Physique +1
Résultat aléatoire : 40% aucune conséquence ; 60% tu rates des corrections : Technique -1.
20. Le leader de l'unité

Titre : Organiser les autres
Emoji : 🗣️
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le coach te demande de diriger une partie des répétitions.

Choix 1 — Prendre le rôle

Effet(s) : Leadership +3

Choix 2 — Partager le rôle

Effet(s) : Leadership +1, Mental +1

Choix 3 — Refuser

Effet(s) : Mental +1
Résultat aléatoire : 35% le coach respecte ton choix ; 65% Leadership -2.
21. La mauvaise habitude

Titre : Un détail technique te trahit
Emoji : 🔍
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le coach repère une petite habitude répétitive dans ton exécution.

Choix 1 — La corriger immédiatement

Effet(s) : Technique +2, Mental +1

Choix 2 — Travailler progressivement dessus

Effet(s) : Technique +1

Choix 3 — Considérer que ce n'est pas important

Effet(s) : Technique -2
22. La séance de fondamentaux

Titre : Retour aux bases
Emoji : 🧱
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le coach retire les schémas complexes pour retravailler les fondamentaux.

Choix 1 — Prendre ça au sérieux

Effet(s) : Technique +2

Choix 2 — Chercher à accélérer

Effet(s) : Physique +1
Résultat aléatoire : 40% bonne intensité ; 60% mauvaise exécution : Technique -1.

Choix 3 — Trouver ça inutile

Effet(s) : Technique -1, Mental -1
23. L'adversaire de la semaine

Titre : Comprendre leurs tendances
Emoji : 🔎
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le staff veut que chacun identifie des tendances précises chez l'adversaire.

Choix 1 — Étudier les détails

Effet(s) : Technique +2

Choix 2 — Étudier seulement les situations principales

Effet(s) : Technique +1, Mental +1

Choix 3 — Te fier au plan du coach

Effet(s) : Mental +1
Résultat aléatoire : 40% suffisant ; 60% mauvaise lecture : Technique -1.
24. Le lendemain de match

Titre : Corriger plutôt que célébrer
Emoji : 🧹
Acte : College / Pro
Saisons concernées : toutes
Contexte : Après une victoire, le staff revient immédiatement sur les erreurs.

Choix 1 — Te concentrer sur tes erreurs

Effet(s) : Technique +2, Mental +1

Choix 2 — Profiter de la victoire

Effet(s) : Mental +2

Choix 3 — Ne regarder que tes highlights

Effet(s) : Exposition +1
Résultat aléatoire : 50% confiance ; 50% excès de confiance : Mental -2.
25. La répétition jusqu'à l'échec

Titre : Encore une fois
Emoji : 🔄
Acte : College / Pro
Saisons concernées : toutes
Contexte : Une séquence est répétée jusqu'à ce que tout le groupe réussisse.

Choix 1 — Demander une nouvelle rep

Effet(s) : Technique +2, Mental +1

Choix 2 — Laisser les autres passer devant

Effet(s) : Mental +1

Choix 3 — Forcer malgré les erreurs

Effet(s) : Physique +1
Résultat aléatoire : 40% déclic ; 60% frustration : Mental -2.
26. Le changement de position temporaire

Titre : Aujourd'hui tu dépannes
Emoji : 🔀
Acte : College / Pro
Saisons concernées : toutes
Contexte : Une absence oblige le staff à te faire travailler temporairement ailleurs.

Choix 1 — Apprendre sérieusement

Effet(s) : Technique +2, Leadership +1

Choix 2 — Faire juste le nécessaire

Effet(s) : Mental +1

Choix 3 — Montrer que tu peux faire plus

Effet(s) : Exposition +2
Résultat aléatoire : 40% tu impressionnes ; 60% mauvaise exécution : Technique -2.
27. La routine pré-entraînement

Titre : Ton rituel
Emoji : 🔧
Acte : College / Pro
Saisons concernées : toutes
Contexte : Tu réalises que tu n'as pas de routine fixe avant les séances.

Choix 1 — Construire une routine stricte

Effet(s) : Mental +2, Technique +1

Choix 2 — Garder de la flexibilité

Effet(s) : Mental +1

Choix 3 — Ne rien changer

Effet(s) : Mental -1
28. Le défi technique

Titre : Le drill que personne ne réussit
Emoji : 🎯
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le staff met en place un exercice particulièrement difficile.

Choix 1 — Le refaire jusqu'à réussir

Effet(s) : Technique +3
Résultat aléatoire : 25% frustration : Mental -1.

Choix 2 — Demander une explication

Effet(s) : Technique +2, Mental +1

Choix 3 — Passer à autre chose

Effet(s) : Mental +1
Résultat aléatoire : 50% aucun impact ; 50% Technique -1.
29. La séance de communication

Titre : Parler avant de jouer
Emoji : 📢
Acte : College / Pro
Saisons concernées : toutes
Poste(s) concerné :
Contexte : Le staff insiste sur la communication entre joueurs.

Choix 1 — Prendre le commandement

Effet(s) : Leadership +2, Technique +1

Choix 2 — Être plus vocal

Effet(s) : Leadership +2

Choix 3 — Rester concentré sur ton rôle

Effet(s) : Technique +1
Résultat aléatoire : 35% manque de communication : Leadership -1.
30. Le jour sans équipement

Titre : Travail à sec
Emoji : 🏃
Acte : College / Pro
Saisons concernées : toutes
Contexte : Le staff organise une séance centrée sur les déplacements et la technique sans contact.

Choix 1 — Maximiser chaque rep

Effet(s) : Technique +2

Choix 2 — Travailler la fluidité

Effet(s) : Mental +1, Technique +1

Choix 3 — Faire le minimum

Effet(s) : Physique +1
Résultat aléatoire : 50% aucun problème ; 50% Technique -1.
🏈 PRO — 30 événements
31. Installation d'un nouveau système

Titre : Nouveau coordinateur
Emoji : 🧠
Acte : Pro
Saisons concernées : toutes
Contexte : Un nouveau coordinateur arrive et installe son système.

Choix 1 — Tout apprendre avant le camp

Effet(s) : Technique +3, Mental +1

Choix 2 — Apprendre progressivement

Effet(s) : Technique +2

Choix 3 — Compter sur ton expérience

Effet(s) : Mental +1
Résultat aléatoire : 45% ton expérience suffit ; 55% retard d'adaptation : Technique -3.
32. Le playbook de 500 pages

Titre : La montagne de plays
Emoji : 📚
Acte : Pro
Saisons concernées : toutes
Contexte : Le volume de concepts à maîtriser est énorme.

Choix 1 — Tout mémoriser

Effet(s) : Technique +3, Physique -1

Choix 2 — Comprendre les familles de concepts

Effet(s) : Technique +2, Mental +1

Choix 3 — Apprendre uniquement tes packages

Effet(s) : Technique +1
Résultat aléatoire : 35% suffisant ; 65% manque de polyvalence : Technique -2.
33. Le minicamp sans pads

Titre : Tout se joue dans les détails
Emoji : 🎯
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff profite d'une séance sans contact pour observer chaque détail technique.

Choix 1 — Être obsédé par les détails

Effet(s) : Technique +3

Choix 2 — Travailler à haute intensité

Effet(s) : Physique +1, Technique +1

Choix 3 — Économiser ton énergie

Effet(s) : Physique +2
Résultat aléatoire : 40% aucune conséquence ; 60% manque de précision : Technique -1.
34. Le meeting individuel avec le coordinateur

Titre : Une heure face au coordinateur
Emoji : 🧑‍💼
Acte : Pro
Saisons concernées : toutes
Contexte : Le coordinateur veut comprendre comment tu lis le jeu.

Choix 1 — Montrer tout ce que tu sais

Effet(s) : Technique +2, Leadership +1

Choix 2 — Poser beaucoup de questions

Effet(s) : Technique +2, Mental +1

Choix 3 — Rester très discret

Effet(s) : Mental +1
Résultat aléatoire : 40% bonne impression ; 60% il doute de ta compréhension : Leadership -1.
35. Le test de polyvalence

Titre : « Tu peux jouer ça ? »
Emoji : 🔀
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff teste ta capacité à remplir plusieurs rôles.

Choix 1 — Accepter tous les rôles

Effet(s) : Technique +2, Leadership +1

Choix 2 — Te spécialiser

Effet(s) : Technique +2
Résultat aléatoire : 30% manque de polyvalence : Leadership -1.

Choix 3 — Tenter de tout maîtriser

Effet(s) : Technique +3
Résultat aléatoire : 40% surcharge : Mental -2.
36. Le two-minute drill à l'entraînement

Titre : Deux minutes au chrono
Emoji : ⏳
Acte : Pro
Saisons concernées : toutes
Contexte : Le coach termine la séance par une simulation de fin de match.

Choix 1 — Prendre le commandement

Effet(s) : Leadership +2, Mental +1

Choix 2 — Exécuter strictement le script

Effet(s) : Technique +2

Choix 3 — Chercher le gros play

Effet(s) : Exposition +2
Résultat aléatoire : 35% play spectaculaire : Technique +2 ; 65% erreur : Mental -2.
37. Le rookie te pose une question

Titre : Transmettre ton expérience
Emoji : 🧑‍🏫
Acte : Pro
Saisons concernées : toutes
Contexte : Un rookie vient te demander comment gérer une situation précise du système.

Choix 1 — Prendre le temps de lui expliquer

Effet(s) : Leadership +3

Choix 2 — Lui donner une réponse rapide

Effet(s) : Leadership +1

Choix 3 — Lui dire d'apprendre seul

Effet(s) : Mental +1
Résultat aléatoire : 35% il se débrouille ; 65% Leadership -2.
38. Le changement de protection en cours de saison

Titre : Nouvelle règle de protection
Emoji : 🛡️
Acte : Pro
Saisons concernées : toutes
Contexte : Une mauvaise séquence oblige le staff à modifier certaines responsabilités.

Choix 1 — Répéter jusqu'à automatisation

Effet(s) : Technique +2

Choix 2 — Comprendre pourquoi le changement existe

Effet(s) : Technique +1, Mental +2

Choix 3 — Continuer comme avant

Effet(s) : Technique -2
39. Le joueur vétéran

Titre : Une autre manière de faire
Emoji : 🧓
Acte : Pro
Saisons concernées : toutes
Contexte : Un vétéran te montre une méthode différente de la tienne.

Choix 1 — Tester sa méthode

Effet(s) : Technique +2

Choix 2 — Comparer les deux

Effet(s) : Mental +1, Technique +1

Choix 3 — Défendre ta méthode

Effet(s) : Leadership +1
Résultat aléatoire : 40% tu avais raison ; 60% Technique -1.
40. Le travail du pied

Titre : Un centimètre de trop
Emoji : 👣
Acte : Pro
Saisons concernées : toutes
Contexte : Ton coach identifie un défaut minuscule dans ton footwork.

Choix 1 — Le corriger immédiatement

Effet(s) : Technique +3

Choix 2 — Le travailler progressivement

Effet(s) : Technique +1, Mental +1

Choix 3 — Considérer que ça ne change rien

Effet(s) : Technique -2
41. La séance individualisée du lundi

Titre : Une heure rien que pour toi
Emoji : 🏋️
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff te propose une heure supplémentaire centrée exclusivement sur ton développement.

Choix 1 — Travailler ton plus gros défaut

Effet(s) : Technique +3

Choix 2 — Perfectionner ton meilleur atout

Effet(s) : Technique +2, Exposition +1

Choix 3 — Travailler un nouveau domaine

Effet(s) : Technique +1, Mental +1
Résultat aléatoire : 30% découverte majeure : Technique +2 ; 70% progrès limité.
42. Le practice squad te pose problème

Titre : Rien ne vient facilement
Emoji : 🧱
Acte : Pro
Saisons concernées : toutes
Contexte : Un joueur du practice squad te domine régulièrement pendant une situation précise.

Choix 1 — Demander à refaire la séquence

Effet(s) : Technique +2, Mental +1

Choix 2 — Analyser pourquoi tu perds

Effet(s) : Mental +2, Technique +1

Choix 3 — Éviter cette situation

Effet(s) : Mental -1
Résultat aléatoire : 60% le problème revient : Technique -2.
43. Le coach te donne une responsabilité supplémentaire

Titre : Plus de responsabilités
Emoji : 📈
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff te donne davantage de responsabilités dans l'installation.

Choix 1 — Accepter immédiatement

Effet(s) : Leadership +2, Technique +2

Choix 2 — Demander du temps

Effet(s) : Mental +1
Résultat aléatoire : 70% le coach apprécie ta prudence.

Choix 3 — Dire que tu es prêt à tout

Effet(s) : Leadership +2
Résultat aléatoire : 40% tu assures ; 60% surcharge : Mental -2.
44. Le changement de cadence d'entraînement

Titre : Tempo professionnel
Emoji : ⚡
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff accélère fortement le rythme des répétitions.

Choix 1 — T'adapter immédiatement

Effet(s) : Physique +2, Technique +1

Choix 2 — Prioriser la précision

Effet(s) : Technique +2

Choix 3 — Chercher à suivre à tout prix

Effet(s) : Physique +2
Résultat aléatoire : 35% réussite ; 65% perte de qualité : Technique -2.
45. Le mini-camp de printemps

Titre : Repartir de zéro
Emoji : 🌱
Acte : Pro
Saisons concernées : offseason
Contexte : L'équipe reprend après plusieurs semaines d'arrêt.

Choix 1 — Reprendre progressivement

Effet(s) : Physique +2, Mental +1

Choix 2 — Revenir déjà à pleine intensité

Effet(s) : Physique +3
Résultat aléatoire : 30% mauvaise adaptation : Physique -2.

Choix 3 — Profiter pour retravailler ta technique

Effet(s) : Technique +3
46. Le travail avec un ancien coach

Titre : Une autre voix
Emoji : 🎓
Acte : Pro
Saisons concernées : offseason
Contexte : Un ancien coach reconnu te propose quelques séances privées.

Choix 1 — Suivre ses conseils

Effet(s) : Technique +2, Mental +1

Choix 2 — Lui demander de cibler un point précis

Effet(s) : Technique +3

Choix 3 — Ne pas changer tes habitudes

Effet(s) : Mental +1
Résultat aléatoire : 40% tu avais raison ; 60% occasion manquée : Technique -1.
47. Le programme de récupération change

Titre : Nouvelle routine de récupération
Emoji : 🧘
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff performance propose une nouvelle organisation entre les séances.

Choix 1 — Suivre strictement le protocole

Effet(s) : Physique +2

Choix 2 — Adapter selon tes sensations

Effet(s) : Mental +1, Physique +1

Choix 3 — Continuer tes habitudes

Effet(s) : Mental +1
Résultat aléatoire : 50% aucune conséquence ; 50% récupération insuffisante : Physique -2.
48. Le test de réaction

Titre : Quelques millisecondes
Emoji : ⚡
Acte : Pro
Saisons concernées : toutes
Contexte : Le staff te fait passer une série de tests de réaction et de prise de décision.

Choix 1 — Chercher la performance maximale

Effet(s) : Physique +1, Technique +1
Résultat aléatoire : 30% très bon résultat : Technique +2.

Choix 2 — Rester régulier

Effet(s) : Mental +2

Choix 3 — Te comparer aux autres

Effet(s) : Exposition +1
Résultat aléatoire : 50% motivation : Mental +1 ; 50% frustration : Mental -2.
49. La préparation au Combine

Titre : Quelques secondes pour convaincre
Emoji : ⏱️
Acte : Pro
Saisons concernées : offseason / pré-draft
Poste(s) concerné(s) :
Contexte : Tu dois préparer des tests standardisés qui seront observés par des équipes.

Choix 1 — Optimiser tes points forts

Effet(s) : Physique +2, Exposition +2

Choix 2 — Corriger tes faiblesses

Effet(s) : Technique +2, Mental +1

Choix 3 — Préparer chaque épreuve séparément

Effet(s) : Technique +1, Physique +1
Résultat aléatoire : 30% excellente performance : Exposition +3 ; 70% résultat correct.
50. Le Pro Day / workout privé

Titre : Une dernière démonstration
Emoji : 🏟️
Acte : Pro
Saisons concernées : pré-draft / offseason
Contexte : Tu dois réaliser une série d'exercices spécifiques devant des scouts et des coaches. Les workouts de football peuvent notamment mettre l'accent sur des exercices propres au poste et sur la qualité technique de l'exécution.

Choix 1 — Jouer la sécurité

Effet(s) : Mental +2, Technique +1

Choix 2 — Montrer ton potentiel maximal

Effet(s) : Exposition +4, Physique +1
Résultat aléatoire : 40% performance exceptionnelle : Exposition +3 ; 60% tu forces : Technique -2.

Choix 3 — Modifier certains exercices pour mettre tes qualités en avant

Effet(s) : Leadership +1, Exposition +2
Résultat aléatoire : 55% les scouts apprécient ; 45% ils trouvent ton approche risquée : Exposition -2.