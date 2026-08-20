import type { GameEvent } from '../../types/events'

export const SCENARIO_EVENTS: GameEvent[] = [
  {
    id: 'scn-1',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['QB'],
    emoji: '🧠',
    title: 'The blitz is obvious',
    context: '3rd & 6. Two linebackers are creeping toward the line and the safety is dropping into the box. You read a heavy blitz coming.',
    choices: [
      {
        id: 'c1',
        label: 'Call an audible',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'The audible picks the blitz apart perfectly.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'The defense had already anticipated the switch.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Trust the play call',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'The play works exactly as drawn up.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1, log: 'The blitz arrives immediately.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep the RB in protection',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'The protection holds up.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -1, log: 'You lose a passing option by keeping him in.' }],
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
    title: 'No safety over the top',
    context: 'The defense is showing Cover 0. There is no safety protecting the deep field and nearly every receiver is in man coverage.',
    choices: [
      {
        id: 'c1',
        label: 'Take the deep shot',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 4, log: 'Your receiver wins the one-on-one battle downfield.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'The pass falls incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'You force the throw into tight coverage.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attack underneath right away',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'The quick throw picks up a handful of yards.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'The blitz gets there before the catch is made.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Audible into a run',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You exploit the light box perfectly.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'An unblocked defender blows up the play for a loss.' }],
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
    title: 'Both safeties are backpedaling',
    context: 'Both safeties are sitting very deep. The defense clearly wants to take away the big play.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the gap between the safeties',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'The window is perfect — the ball splits the defense and lands right in your receiver\'s hands.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'The pass falls incomplete, but the mechanics were clean — the coordinator praises the decision despite the result.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'You misread the coverage — the ball sails right at a defender who closes the window at the last instant.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take the short yards',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'A short, safe throw completed without forcing anything — the drive moves on, even if no one will remember it.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Playing it safe over and over makes the offense predictable — the defense starts anticipating every call.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Audible into a run',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'The box is light and the last-second change catches the defense off guard — a big gain on the ground.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'The linebacker reads the audible almost as fast as you do and closes the gap before the snap.' }],
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
    title: 'The pocket is collapsing',
    context: 'The pass rush is arriving faster than expected. You have to make a decision before the pocket caves in.',
    choices: [
      {
        id: 'c1',
        label: 'Scramble',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You tuck it and go — the pocket collapses behind you but you pick up solid yardage on the scramble.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1, log: 'You break contain but a linebacker closes the gap fast — stopped for a minimal gain.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'You scramble late and eat a huge hit before you can get out of bounds.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Get the ball out fast',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You get the ball out on time — quick release, clean completion before the rush arrives.' }],
          },
          {
            weight: 20,
            effects: [{ log: 'Rushed under pressure, the throw sails off-target. Incomplete.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: -1, log: 'Under pressure you rush the throw — INTERCEPTED! The defense reads it the whole way.' }, { attribute: 'mental', delta: -2 }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Hold for the deep route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'You hold the pocket one more beat — the deep route breaks open for a huge gain downfield.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'You hang in too long looking for the shot play — SACKED before the route ever develops.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'WR1 is locked down',
    context: 'The team\'s best receiver is drawing a double team on every single snap.',
    choices: [
      {
        id: 'c1',
        label: 'Force it to WR1',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 5, log: 'You force it into double coverage anyway — your WR1 goes up and makes an incredible contested catch.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'Double-covered the whole way, your WR1 can\'t shake free. Incomplete, but at least it\'s not a turnover.' }, { exposureDelta: 2 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2 }, { attribute: 'technique', delta: -2, log: 'You force the ball into double coverage one time too many — INTERCEPTED.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Work through your progressions',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You come off your first read and find the checkdown — an easy completion underneath.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'You hold onto the ball too long looking for a second option and the play dies in your hands.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Use WR1 as a decoy',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You sell the route to WR1 and the safety bites — it opens up a secondary target for an easy gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'The defense doesn\'t take the bait — your decoy route changes nothing and the play stalls.' }],
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
    title: 'Twelve yards to go',
    context: 'The defense is protecting the sticks and the first down marker feels a long way off.',
    choices: [
      {
        id: 'c1',
        label: 'Look for the big play',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 4, log: 'You take a shot downfield and find a wide-open window — a chunk play that erases the distance in one snap.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'The shot play doesn\'t connect — incomplete, but the aggression sends a message to the defense.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'You force a throw into a tight window that was never really there. Bad decision, worse result.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take what the defense gives you',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'You take the underneath route the defense is giving you — simple, efficient, moves the chains.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You dump it off underneath, but the checkdown comes up well short of what\'s needed.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Scramble',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'No one open — you tuck it and run, picking up the first down with your legs.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You take off scrambling but the defense closes the gap fast and brings you down short.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You scramble into traffic and take a heavy hit trying to squeeze out extra yards.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'Everyone is covered',
    context: 'The defense is playing man-to-man. No receiver seems to have a clear advantage before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Identify the best matchup',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'You scan the field and find the one favorable matchup — the ball goes out before the window closes.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You pick the wrong matchup — your target is blanketed and the read falls apart.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attack the middle',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You attack the middle of the field and the seam opens right on schedule — clean completion.' }, { exposureDelta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'The middle read is there, but the throw is a beat late. Incomplete.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'You attack the middle and a linebacker undercuts the route — INTERCEPTED.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep it simple',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You play it safe and take the simple read — no risk, no mistake, drive stays alive.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You play it too safe — the conservative call stalls the drive out almost immediately.' }],
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
    title: 'The linebacker is watching you',
    context: 'The defense has assigned a linebacker to spy the QB.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the spy',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You attack the spy linebacker directly and win the footrace — a real chunk of yards to show for it.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You take on the spy but he reads the run all the way and wraps you up for a short gain.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'The spy linebacker times it perfectly and lays a big hit on you before you can get going.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay in the pocket',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'With the spy occupied, you stay patient in the pocket and find a clean throwing window.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'You hold the pocket too long — a second rusher gets home and the pressure forces a bad play.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Fake the scramble',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You sell the scramble and the spy bites — it opens the throwing lane wide open.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'The spy stays disciplined and doesn\'t fall for the fake — the play doesn\'t develop.' }],
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
    title: 'Compressed field',
    context: 'The defense compacts the formation, shrinking the available space considerably.',
    choices: [
      {
        id: 'c1',
        label: 'Attack quickly',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'You attack fast before the window closes — the throw threads through the compressed coverage.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -2, log: 'The compact defense closes the passing lane instantly — nowhere to put the ball.' }],
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
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'The play-action freezes a defender for just a beat — enough to find the open man.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'The defense stays disciplined and doesn\'t bite on the fake — the play gains nothing.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep the ball',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You keep it yourself and find a crease in the tight formation for a solid gain.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -1, log: 'You keep it yourself into a crowded box and absorb a heavy hit for your trouble.' }, { attribute: 'mental', delta: 1 }],
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
    title: 'Two minutes on the clock',
    context: 'The team needs to move the ball downfield fast.',
    choices: [
      {
        id: 'c1',
        label: 'Ultra-fast tempo',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'The no-huddle tempo catches the defense out of position — easy completion before they can even set.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'The tempo works against you too — you rush a decision and the throw is a mess.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play it methodically',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You slow the game down and work the two-minute drill like a metronome — clean, controlled, effective.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Your methodical approach eats too much clock — the drive stalls with time running out.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the big play immediately',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 6, log: 'You go for the knockout blow immediately — the deep ball connects for a massive gain.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'The shot downfield falls incomplete — the clock keeps bleeding away.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'You force the deep shot with the clock ticking — INTERCEPTED, and the drive is dead.' }, { attribute: 'mental', delta: -3 }],
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
    title: 'Fourth-down attempt',
    context: '4th & 3. The team has to decide whether to go for it and keep the possession alive.',
    choices: [
      {
        id: 'c1',
        label: 'Ask to go for it',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You lobby the coach to go for it — CONVERSION! You move the chains and keep the drive alive.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You get your wish and go for it on fourth down — TURNOVER ON DOWNS. The gamble doesn\'t pay off.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Trust the coach',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You trust the staff\'s call — whatever it is, it turns out to be the right decision.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You trust the staff\'s call, but this time the conservative decision costs the team the possession.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Offer a precise pre-snap read',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You give the coordinator a specific pre-snap read — it\'s exactly right, and the conversion is clean.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'Your pre-snap read tips off the defense — a defender jumps the route before it even develops.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'After the interception',
    context: 'You come back onto the field after throwing an interception. The whole team is watching to see how you respond.',
    choices: [
      {
        id: 'c1',
        label: 'Come out aggressive',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 5, log: 'You answer the pick with pure aggression — the very next throw goes for a huge gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'You keep pushing downfield right after the turnover — incomplete, but the mindset is right.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Still shaken from the pick, you force another throw into coverage — a second mistake in as many drives.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Secure the first few throws',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You dial it back and complete a couple of easy, safe throws — the rhythm and the confidence come back.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You play it safe one throw too many — the defense reads the pattern and shuts it down.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lean on the run game',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You lean on the run game to settle everyone down — the offense finds its rhythm again.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You try to lean on the run game, but the defense stacks the box and shuts it down cold.' }],
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
    title: 'The protection is breaking down',
    context: 'The offensive line has already given up several pressures. You need to adapt your approach.',
    choices: [
      {
        id: 'c1',
        label: 'Keep an RB in protection',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You keep the back in to chip the rusher — the extra help buys you just enough time.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'Even with the extra blocker, the pass rush still wins — pressure gets home again.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Get the ball out very fast',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You get rid of the ball before the rush even arrives — the quick game neutralizes the pressure completely.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'You rush the throw to beat the pressure and the timing is off — the ball sails high.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep looking downfield',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'You keep pushing the ball downfield despite the pressure — the gamble pays off with a big gain.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -1, log: 'The pressure finally gets home — SACK. You had one option too many downfield.' }, { attribute: 'technique', delta: -1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'physique', delta: -1, log: 'The pressure forces the issue and the ball comes loose — FUMBLE under duress.' }],
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
    title: 'Five seconds on the play clock',
    context: 'The play call looks bad against the defense\'s look. Five seconds remain before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Call an audible',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You spot the mismatch and change the play with seconds to spare — the new call is perfect.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'You try to change the play but the communication breaks down before the snap — chaos at the line.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep the play',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You trust the original call — not a perfect matchup, but enough to get by.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You stick with the original call and the defense exploits the bad matchup immediately.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Snap it immediately',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'You snap it before the defense can even set — they\'re caught flat-footed.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: -1, log: 'You snap it in a hurry and realize too late — you\'re locked into a bad play against the wrong look.' }],
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
    title: 'The drive that decides the game',
    context: 'Less than two minutes left. You have to lead your team on a potentially game-deciding drive.',
    choices: [
      {
        id: 'c1',
        label: 'Take command',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }, { exposureDelta: 4, log: 'You take full command of the huddle and lead a drive for the ages — every throw on point.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You move the ball well, but the drive stalls once you hit the red zone.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'The moment gets too big — you crack under the pressure and the drive falls apart.' }, { attribute: 'technique', delta: -2 }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stick strictly to the plan',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You stick to the script the coordinator drew up — it works exactly as designed.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'The defense adjusts to your predictable script and the drive dies on schedule.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play very aggressive',
        effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'You go for broke — the exact big play the moment demanded.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'You keep pushing for the home run throw — incomplete, incomplete, the clock keeps ticking.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2 }, { attribute: 'technique', delta: -2, log: 'You force one shot too many in the biggest moment of the game — INTERCEPTED.' }],
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
    title: 'The safety is cheating',
    context: 'You notice before the snap that the safety has shaded slightly toward WR1. The defense seems to be anticipating the play designed for your best receiver.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the other side',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You spot the safety cheating early and attack the opposite side — the numbers advantage pays off big.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You attack away from the cheating safety, but the defense recovers in time to shut it down.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stick with the original plan',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You stay with the original plan anyway — your WR1 wins the matchup even with safety help over the top.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1, log: 'You stick with the plan into the extra coverage — the pass falls incomplete.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'You throw right into the help defense had shown pre-snap — INTERCEPTED.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Use WR1 as a decoy',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You use your WR1 as a decoy — the safety follows him and leaves another target wide open.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'The safety doesn\'t bite on the decoy — your WR1\'s help stays put and nothing opens up.' }],
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
    title: 'The bad snap',
    context: 'The snap comes in a little too high. You have to react immediately as the defense is already attacking the line.',
    choices: [
      {
        id: 'c1',
        label: 'Dive on the ball',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'physique', delta: 1, log: 'You dive on the loose ball before the defense can react — recovery, and the drive survives.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You dive for it, but a defender gets there a split-second faster — TURNOVER.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Try to play through it',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'You scoop the bad snap on the run and somehow turn the botched play into a positive gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You scramble to recover the high snap and get swallowed up for a loss.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -1 }, { attribute: 'physique', delta: -1, log: 'You try to play through the bad snap and the ball squirts loose — FUMBLE.' }, { attribute: 'mental', delta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Throw the ball away',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'You throw it away out of bounds — not pretty, but you live to play the next down.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'Rattled by the bad snap, you throw it away carelessly — right into traffic near the sideline.' }],
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
    title: 'Blindside pressure',
    context: 'An edge rusher is coming free from your blindside. You never picked him up before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Spin away and escape',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You spin away from the blindside rush just in time and escape the pocket clean.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You try to spin away but the rusher recovers — SACK from your blindside.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'You never see him coming — a huge blindside hit lays you out.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Get rid of it now',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'With the rush closing fast, you get the ball out immediately to a short, safe target.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2, log: 'You throw it away under pressure before the hit lands — incomplete, but you\'re still standing.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: -2, log: 'You throw blind under pressure without seeing the coverage — INTERCEPTED.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Eat the sack',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'You go down and cover the ball securely as the rush arrives — a clean sack, but the possession is safe.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'The rusher jars the ball loose as you go down — FUMBLE.' }, { exposureDelta: -2 }],
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
    title: 'The receiver improvises',
    context: 'The WR doesn\'t run the exact route that was called and breaks off it suddenly. You have to decide whether to adjust your throw on the fly.',
    choices: [
      {
        id: 'c1',
        label: 'Follow his improvisation',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You read the improvisation the same way your receiver does — you\'re both on the same page and the ball finds him.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'You adjust the throw to the new route, but you and your receiver aren\'t on the same page at all.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stick with the original throw',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'You trust the original route — the receiver corrects himself just in time and the ball is there.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -1, log: 'You throw to the spot the route was supposed to be — but your receiver is already somewhere else. Incomplete.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for another target',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'You bail on the busted route entirely and find a second target coming open underneath.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You hesitate, torn between the busted route and your checkdown, and the window closes on both.' }],
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
    title: 'The delayed blitz',
    context: 'The linebacker starts out in coverage before triggering his blitz a couple of seconds after the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Identify the blitz immediately',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You spot the delayed blitz the instant it declares and get the ball out to the hot route in time.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'The blitz comes late and you\'re a beat behind recognizing it — you never catch up to the pressure.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attack the middle',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'With the blitzer occupied elsewhere, the middle of the field opens up for a clean completion.' }, { exposureDelta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'You attack the middle right as the delayed blitz gets home — the throw sails incomplete.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'You throw into the middle without seeing the late blitzer drop into coverage — INTERCEPTED.' }, { exposureDelta: 1 }, { attribute: 'mental', delta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Get out of the pocket',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'You climb out of the pocket ahead of the delayed rush and buy your receivers extra time downfield.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You try to escape the pocket but contain holds — the blitzer chases you right back into traffic.' }, { exposureDelta: -1 }],
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
    title: 'Change the rhythm',
    context: 'The defense is starting to key on the offense\'s tempo. You can change up the snap cadence.',
    choices: [
      {
        id: 'c1',
        label: 'Speed things up hard',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You snap the ball at a sudden sprint pace — the defense is caught completely out of position.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: -1, log: 'The sudden tempo backfires — your own offense isn\'t ready and the communication breaks down.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Slow the tempo down',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1, log: 'You slow everything down at the line — controlling the pace takes the defense out of its rhythm.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'Slowing the tempo gives the defense extra time too — they adjust the coverage before the snap.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep the usual rhythm',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'You stay with the same pace as always — nothing changes, and nothing goes wrong either.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You keep the same rhythm and the defense keeps reading it perfectly, play after play.' }],
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
    title: 'The corner is playing press',
    context: 'The CB lines up right on top of the WR, trying to disrupt his release.',
    choices: [
      {
        id: 'c1',
        label: 'Attack it right away',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You test the press coverage right away — your WR wins the release and the ball finds him for a big gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You go right at the press coverage, but the corner wins the rep this time. Incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'The extra beat it takes to test the press lets the rush get home — a forced, desperate throw.' }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use pre-snap motion',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'The pre-snap motion tips the defense\'s hand — now you know exactly what coverage you\'re facing.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You send the motion looking for information, but the defense doesn\'t react at all — no read gained.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Switch targets',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You come off the pressed receiver entirely and find a secondary target running free.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'You waste a beat looking elsewhere before committing, and the extra hesitation costs you the window.' }],
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
    title: 'Reading the RPO',
    context: 'On an RPO, you have to quickly read the conflict defender and decide whether to hand it off or throw.',
    choices: [
      {
        id: 'c1',
        label: 'Pull it and throw',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'You read the conflict defender perfectly — he crashes down and you pull it to throw for a big gain.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'The conflict defender stays disciplined and doesn\'t bite — your read gives you nothing.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Hand it to the RB',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You hand it off as read — a solid, unspectacular gain on the ground.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You hand it off, but in hindsight the throw was wide open the whole time.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Pull it and run',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'You pull it and keep it yourself — the conflict defender is frozen and a lane opens right up.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep it yourself, but the defense rallies fast and holds it to a minimal gain.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You keep it yourself, but a linebacker fills the gap and lays a heavy hit on you.' }, { exposureDelta: 1 }, { attribute: 'mental', delta: -1 }],
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
    title: 'Two sacks in a row',
    context: 'The defense has sacked you twice on the last two drives. The pressure is starting to get in your head.',
    choices: [
      {
        id: 'c1',
        label: 'Keep pushing the attack',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 5, log: 'You refuse to back down after two straight sacks — the very next throw goes for a big play.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'You keep pushing the ball downfield and the pass rush gets home again — pressure, but no third sack this time.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Rattled by the pressure, you force a throw into coverage — INTERCEPTED.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Get the ball out quickly',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You start getting the ball out fast to take the pass rush out of the equation — the drive settles down.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'Getting the ball out quick every time starts to read as predictable — the defense adjusts accordingly.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lean on the run game',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You lean on the run to take the pass rush out of the game entirely — the offense finds its rhythm again.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Even the run game can\'t escape it — the defensive line keeps winning up front.' }],
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
    title: 'The safety is jumping the route',
    context: 'You notice the safety keeps cheating toward a short route to the slot receiver.',
    choices: [
      {
        id: 'c1',
        label: 'Trap him with a double move',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You dial up a double move to bait the cheating safety — he bites completely and the route blows right by him.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: -1, log: 'The safety stays patient and doesn\'t bite on the double move — the trap doesn\'t spring.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep playing it straight',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You ignore the tendency and run the play as called — the defense doesn\'t do anything different this time.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'The safety jumps the short route exactly like you expected — the throw is knocked away, incomplete.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack somewhere else',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You steer clear of the safety\'s tendency entirely and attack a different area of the field — wide open.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'You look elsewhere on the field, but the rest of the coverage is just as tight.' }],
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
    title: 'The ball is getting slick',
    context: 'Heavy rain starts falling mid-game. The ball is getting harder to control and deep passes are turning risky.',
    choices: [
      {
        id: 'c1',
        label: 'Keep throwing deep',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'You keep pushing the ball downfield despite the rain — the wet conditions don\'t stop this one from connecting big.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'The slick ball slips at release just enough to throw off the deep ball. Incomplete.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'The wet ball slips out of your grip at release — an ugly, off-target throw.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Shorten up the passing game',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You shorten up the passing game to account for the slick ball — safe, controlled, effective in the rain.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'Even the short game isn\'t immune — the wet ball slips out of your hands on the exchange.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Lean on the run game',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You lean on the ground game in the rain — the run controls the tempo while the passing game stays dry on the sideline.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -1, log: 'The defense loads the box knowing the rain favors the run — the ground game gets no easier.' }],
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
    title: 'Look the defender off',
    context: 'A linebacker is guarding the middle of the field. You can try to manipulate him with your eyes and arm motion.',
    choices: [
      {
        id: 'c1',
        label: 'Look left, throw right',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You stare down the decoy side and the linebacker bites hard — the real target is wide open on the other side.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -1, log: 'The linebacker doesn\'t fall for your eyes at all — he stays disciplined in his zone regardless.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stare down the target',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'You lock onto your target with no deception — sometimes the direct approach just works.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You stare down your target with no misdirection at all — the linebacker reads it before the ball is even out.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Use play-action',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'The play-fake sells perfectly — the linebacker steps up to defend the run and the passing lane opens behind him.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'The linebacker doesn\'t bite on the fake at all — he stays right in his passing lane.' }],
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
    title: 'The hit after the throw',
    context: 'You see your receiver open, but you know you\'re about to take a huge hit right after you release the ball.',
    choices: [
      {
        id: 'c1',
        label: 'Throw it despite the hit',
        effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'You deliver the throw knowing the hit is coming — completion, and you take the shot standing tall.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2, log: 'You take the hit and deliver anyway — the throw sails incomplete, but you stood in there.' }, { exposureDelta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }, { attribute: 'physique', delta: -2, log: 'You get the throw off just before a defender drives you into the turf — a brutal hit after the release.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Throw it away',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'You throw it away and avoid the hit entirely — the smart, safe decision.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You throw it away to avoid the hit — only to see on the film that your man was wide open deep.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Climb out of the pocket',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1, log: 'You climb the pocket and buy extra time instead of standing in against the hit.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You try to escape the pocket but there\'s nowhere to go — SACK.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You step up trying to avoid one rusher and run straight into another — a huge collision.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'Bleed the clock',
    context: 'Your team is up by three points in the final minutes. You need to protect the lead and keep the ball out of the opponent\'s hands.',
    choices: [
      {
        id: 'c1',
        label: 'Play it ultra-safe',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You milk the clock with safe, conservative calls — exactly what a fourth-quarter lead needs.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'Playing it this safe makes the offense completely predictable — the defense knows exactly what\'s coming.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep attacking',
        effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'You keep the offense aggressive even with the lead — a critical first down puts the game away.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 1, log: 'You stay aggressive with the lead — incomplete, but the clock keeps moving regardless.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -2 }, { attribute: 'mental', delta: -2 }, { attribute: 'technique', delta: -2, log: 'You push the ball downfield with a lead you didn\'t need to risk — INTERCEPTED, and the door swings back open.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look to run it yourself',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'You tuck it and run it yourself — enough yardage to keep the clock exactly where you want it.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep it yourself, but the defense holds the gain to almost nothing.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'You keep it yourself and eat a big hit — but you burned clock either way.' }, { attribute: 'leadership', delta: 1 }],
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
    title: 'The safety is too deep',
    context: 'After the snap, you notice the safety has dropped way too deep, leaving the intermediate zone wide open.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the window right now',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You attack the void the deep safety left behind immediately — the throw is perfect.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 2, log: 'You attack the intermediate window right away — the timing is just off. Incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 15,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -1, log: 'You misjudge how open the window really was — the throw never had a real chance.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Hold for the deep route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'You hold for the double move — the safety\'s too-deep alignment turns into an even bigger play downfield.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'You wait for the deeper route, but the safety recovers his depth before the ball ever gets there.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'You hold the ball too long waiting for the deep shot — SACKED before it ever develops.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Check it down',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You take the easy checkdown instead of chasing the big play — safe, simple, drive intact.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You take the safe checkdown — only to watch the tape later and see how open that intermediate window really was.' }],
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
    title: 'The corner is playing press',
    context: 'The CB is lined up right in front of you, trying to keep you from getting a clean release.',
    choices: [
      {
        id: 'c1',
        label: 'Attack his outside shoulder immediately',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'An explosive first step wipes out the CB\'s press — you win outside before he can even react.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'The CB reads your move and jams you cold at the line — the route dies before it even starts.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use an inside release',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'The inside release catches the CB off guard, a step behind — separation is immediate.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'The CB rides your hip the whole way and throws off the timing of the route.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Get physical with the CB',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You strike first and impose your size — the CB takes a step back, thrown off balance.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'A shoulder-to-shoulder battle where neither of you really wins.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'The flag comes out: contact was too heavy before the five-yard mark. Offensive penalty.' }, { exposureDelta: -1 }],
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
    title: 'Ten yards of cushion',
    context: 'The corner backs off almost ten yards before the snap to take away anything deep.',
    choices: [
      {
        id: 'c1',
        label: 'Attack underneath right away',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You attack the soft cushion immediately with a quick out — easy pitch and catch, solid yards after the grab.' }, { exposureDelta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'The corner closes the cushion faster than expected and the window shuts before the ball arrives.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Push straight upfield',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 4, log: 'You push straight upfield and the corner keeps backpedaling — the deep shot is on.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'You push vertical but the corner matches your speed step for step, keeping his cushion intact.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }, { attribute: 'technique', delta: -1, log: 'You try to run by him, but the corner\'s cushion was exactly enough — no separation at all.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Run a comeback route',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You sell the deep route and snap it back down — perfect comeback, right on time with the throw.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1, log: 'Your break on the comeback and the QB\'s throw don\'t sync up — the timing is off.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'They\'ve got two on you',
    context: 'The defense has been doubling you on every drive for a while now.',
    choices: [
      {
        id: 'c1',
        label: 'Keep attacking vertically',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 5, log: 'Double-teamed all game, you still find a crack in the coverage — a massive window opens up regardless.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: -2, log: 'Double coverage takes you completely out of the game plan — not a single target comes your way.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2, log: 'You keep pressing vertically into the double team and your QB forces a dangerous throw your way anyway.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the decoy',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You accept the decoy role and run your route hard anyway — pulling both defenders and springing a teammate wide open.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -1, log: 'You run the decoy route, but the double team doesn\'t bite at all — nobody else gets freed up.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ask for pre-snap motion',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You ask for pre-snap motion to identify the double team — it confirms exactly what coverage you\'re facing.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You motion across the formation, but the defense communicates flawlessly and the double team travels with you.' }],
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
    title: 'The throw is early',
    context: 'The QB releases the ball before you\'ve fully finished your route.',
    choices: [
      {
        id: 'c1',
        label: 'Dive for the ball',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You lay out fully extended for the underthrown ball — a spectacular diving catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You dive for the early throw but it\'s just out of reach. Incomplete.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You get a hand on the early throw diving for it, but it bounces off your fingertips.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Slow down to adjust',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You break down and adjust your speed to the early throw — clean adjustment, clean catch.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You slow down to adjust, but the ball is already past you before you can locate it.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Finish the route as called',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'You trust the route as called and so does your QB — you\'re both exactly where you need to be.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -1, log: 'You finish the route as designed, but the early throw and your timing never quite line up. Incomplete.' }],
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
    title: 'The ball is in the air',
    context: 'You\'re covered, but the QB puts enough air under the ball to give you a shot at it.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the ball at its highest point',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You climb the ladder and attack the ball at its highest point — you come down with it over the defender.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1, log: 'You go up for the jump ball but can\'t quite bring it in. Incomplete.' }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You go up for the jump ball and get leveled at the point of contact — the ball never had a chance.' }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Shield the ball with your body',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You shield the ball with your body all the way through the catch — secure, controlled reception.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'The defender times his play on the ball perfectly, no matter how you shield it — knocked away clean.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the one-handed grab',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 7, log: 'You reach out and snag it with one hand — a highlight-reel, one-handed grab.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 3, log: 'You go for the spectacular one-handed grab and it slips right through. Incomplete.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -1, log: 'You reach for the one-hander and only manage to tip it — the ball flutters away deflected.' }],
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
    title: 'The ball hits the turf',
    context: 'You just dropped a perfectly catchable pass.',
    choices: [
      {
        id: 'c1',
        label: 'Demand the ball again right away',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You shake off the drop immediately and demand the ball again — you make up for it on the very next snap.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'You ask for another look right away, but the drop is still rattling around in your head — the pressure builds.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Focus on the next snap',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'You put the drop behind you and reset for the next play — clean mind, clean approach.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -1, log: 'You try to move on, but you\'re still thinking about the drop when the next ball comes your way.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Take a risk to make up for it',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 5, log: 'You go looking for the big play to erase the drop — and you find it, a huge grab downfield.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'You press too hard trying to make up for the drop and it costs you again — a second mistake in as many snaps.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'The block that springs the run',
    context: 'A screen pass is called and you have to block the defender closing in on the RB.',
    choices: [
      {
        id: 'c1',
        label: 'Go find the contact',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You go find the defender and put him on his back — the block springs a huge lane for the screen.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'You engage the defender straight up — a stalemate block, no ground gained either way.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You hang on a beat too long to finish the block — HOLDING. The flag wipes out the gain.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Block with patience',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You stay patient and square, waiting for the defender to commit — textbook block, lane wide open.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'You wait for the defender to commit, but he slips off the edge of your block untouched.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Focus only on your own route',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'You run your own route instead of blocking — it pays off two plays later when the ball comes your way.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: -1, log: 'You skip the block and run your route — without it, the RB gets swallowed up almost immediately.' }],
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
    title: 'Moving before the snap',
    context: 'You\'re sent in motion to figure out whether the defense is playing man or zone.',
    choices: [
      {
        id: 'c1',
        label: 'Speed up the motion',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'You go in motion at full speed — the defense\'s reaction gives away man coverage instantly.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: -1, log: 'You rush through the motion and the timing with the rest of the formation is off.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Slow down to read the defense',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You take the motion slow and read the defense\'s reaction carefully — coverage identified before the snap.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You take the motion too slow and it throws off the timing of the whole play.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep a steady pace',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You run the motion at a steady, controlled pace — clean, textbook execution.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'You run the motion at your usual pace, but the defender has clearly seen this look before.' }],
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
    title: 'The window opens',
    context: 'You have to attack a soft spot between two defenders.',
    choices: [
      {
        id: 'c1',
        label: 'Break immediately',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You break immediately into the seam — the window is perfect and the ball is right on it.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You break early into the seam, but the linebacker closes the window before the throw gets there.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Hold one extra beat',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You hold your break one extra beat and the defender bites on something else — the seam opens up clean.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You wait one beat too long and the window that was there closes completely.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep pushing vertically',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 4, log: 'You keep pushing vertically past the seam and find a wide-open lane deep down the field.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -1, log: 'You push it vertical past the seam, but the safety rotates over and shuts the route down.' }],
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
    title: 'The defender can\'t see you',
    context: 'The CB turns his hips and ends up with his back to you.',
    choices: [
      {
        id: 'c1',
        label: 'Accelerate vertically',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 5, log: 'The corner\'s hips are turned and he can\'t see you — you hit the jets and create instant separation.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -1, log: 'You accelerate past the turned corner, but the safety rotates over just in time to help.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Break inside immediately',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'With his hips turned the wrong way, you break inside immediately — an easy pitch and catch.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You break inside on the blind corner, but you and your QB aren\'t quite in sync on the timing.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep selling the deep route',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'You keep selling the deep route even with his back turned — he keeps backpedaling, buying you more room.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -1, log: 'You keep selling the deep route, but he recovers his angle and there\'s no separation to be found.' }],
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
    title: 'Two feet inbounds',
    context: 'The QB throws toward the sideline. You have to control your body and secure the catch.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You attack the ball at the sideline and drag both feet down inbounds — a perfect, high-difficulty catch.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: -1, log: 'You attack the ball at the sideline, but your momentum carries a foot out of bounds. No catch.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait until the last moment',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You wait until the last possible instant to attack the ball at the sideline — a spectacular, well-timed grab.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1, log: 'You wait too long on the sideline route and the ball is on you before you\'re ready. Drop.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play it safe above all',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1, log: 'You play it safe on the sideline route — a controlled, unspectacular catch well inbounds.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'You play it so safe on the sideline that you give up a few extra yards just to guarantee the catch.' }],
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
    title: 'Ball in your hands',
    context: 'You just caught a short pass with several defenders in front of you.',
    choices: [
      {
        id: 'c1',
        label: 'Attack straight ahead',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'You put your foot in the ground and attack straight upfield — a big gain after the catch.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You head straight upfield and pick up a solid, unspectacular chunk of yards after the catch.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1, log: 'You attack straight ahead into the heart of the defense and get met with a huge hit for your trouble.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bounce it outside',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You bounce it to the outside and pick up a few extra yards before anyone can square you up.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'You bounce it outside and get run out of bounds before you can turn upfield.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Get down immediately',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'You go down immediately after the catch — no risk, ball secured, drive intact.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You go down immediately to protect the catch — the tape shows there was a lot more room to work with.' }],
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
    title: 'Fade in the end zone',
    context: 'The QB sees you isolated near the sideline in the red zone.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the high point',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 6, log: 'You go up and attack the fade at its highest point — TOUCHDOWN!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You go up for the fade in the corner of the end zone — just off, incomplete.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1, log: 'The corner times his leap perfectly and gets a hand on the fade before you can — batted away.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Create space with your body',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You use your frame to box out the corner in the end zone — just enough separation for the throw.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'You try to box out the corner but he gets too physical through the route — no separation at all.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Break it inside',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You break the fade to a slant instead — the corner is completely surprised, wide open in the end zone.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1, log: 'You cut the route to the inside, but the middle of the end zone is already clogged with defenders.' }],
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
    context: '3rd & 7. The corner is playing press and you need to win your release fast.',
    choices: [
      {
        id: 'c1',
        label: 'Aggressive release',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You attack the press with a hard, physical release — instant separation before the corner can recover.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -1, log: 'The corner wins the rep at the line — the press coverage does its job and the route dies right there.' }],
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
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'You sell the double move perfectly on third down — the corner bites and the route blows wide open.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: -1, log: 'The double move doesn\'t sell — the corner stays patient and the route never really develops.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Short route',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You settle for the quick, safe route underneath — enough separation to move the sticks after the catch.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'Even the quick route isn\'t enough against the press — you can\'t create the separation needed to convert.' }],
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
    title: 'The safety is closing in',
    context: 'You\'ve beaten your corner, but a safety is coming over fast.',
    choices: [
      {
        id: 'c1',
        label: 'Keep going vertical',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You keep running vertically with the safety closing fast — somehow you stay just open enough.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'The safety arrives right on time and closes the throwing window before the ball gets there.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You keep going vertical and the arriving safety lays a huge hit right as the ball gets close.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Cut it inside',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You cut hard to the inside and the change of direction beats the safety\'s help completely.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You cut inside, but the safety reads the break the whole way and closes it down.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Settle the route down',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'You settle the route down as the safety closes — your QB sees it and adjusts the throw perfectly.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1, log: 'You settle the route down, but you and your QB aren\'t on the same page about where.' }],
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
    title: 'Your block decides the run',
    context: 'The RB is heading outside and you have to keep the corner from closing off the lane.',
    choices: [
      {
        id: 'c1',
        label: 'Block him head-on',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You go chest to chest with the corner and drive him out of the play entirely — huge block, lane wide open.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'You go straight at the corner — a stalemate at the point of attack, no ground given either way.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You lose the leverage on the block and grab on to save it — HOLDING. The flag kills the run.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Block with an angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take the perfect angle to cut off the corner\'s pursuit — textbook edge block.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'You take the wrong angle on the block and the corner slips right by you into the play.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Peel off for the screen',
        effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'You peel off the block and slip out for the screen — the ball finds you in space.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: -1, log: 'You peel off looking for the screen, but the defense reads it the whole way and it\'s blown up before it starts.' }],
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
    title: 'The QB isn\'t looking at you',
    context: 'You\'ve won your matchup, but the QB is looking at another part of the field.',
    choices: [
      {
        id: 'c1',
        label: 'Keep running the route',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You finish the route with full effort even though the QB\'s eyes are elsewhere — he comes back to you late and the ball arrives anyway.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'You finish the route hard, but the QB never looks your way — the play goes elsewhere entirely.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Improvise into his line of sight',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You break off the route and drift into his line of sight — he sees the adjustment and gets you the ball.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You drift to get into his vision, but you\'re not on the same page — the improvisation doesn\'t sync up at all.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wave for the ball',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You wave for the ball and the QB catches the signal in time — the throw comes your way.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'You wave for the ball, but the gesture throws off the timing of the route entirely.' }],
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
    title: 'The ball is going deep',
    context: 'The QB launches a deep pass. You have to track the flight while keeping your edge on the CB.',
    choices: [
      {
        id: 'c1',
        label: 'Hit top speed',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'You hit top speed down the sideline — pure separation, nobody within five yards of you.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You run under it at full speed, but the throw is just overthrown — can\'t quite run it down.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1, log: 'You sprint flat out but the corner recovers the ground and gets back into the play.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Turn early to track the ball',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You turn your head early to locate the deep ball — good tracking, in perfect position for the catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'You turn to find the ball too early and it costs you speed — the corner closes the separation right back up.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Run it out without looking',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You trust your speed and don\'t look back until the last second — you catch it in full stride without breaking speed.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -1, log: 'You run it out without looking back and never locate the ball in time — it sails right by you.' }],
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
    title: 'The jam',
    context: 'The corner lands a legal jam right at the start of your route.',
    choices: [
      {
        id: 'c1',
        label: 'Use your hands to get free',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You use a clean swim move to shed the jam at the line — free release, route right on track.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You fight through the jam, but the corner holds on a beat too long — illegal contact, but the flag doesn\'t come.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take the outside release',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'You take the outside release and win the race to the boundary before he can reset.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: -1, log: 'You take the outside release, but he rides you all the way to the sideline and squeezes the route dead.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Absorb the contact and keep going',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You absorb the jam and stay on track through the contact — the route holds up exactly as designed.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: -1, log: 'You push through the jam, but it costs you just enough timing to throw off the connection with your QB.' }],
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
    title: 'He\'s behind you now',
    context: 'You\'ve completely beaten your defender and have a huge cushion of separation.',
    choices: [
      {
        id: 'c1',
        label: 'Hit another gear',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You hit another gear and stretch the separation even further — nobody within twenty yards of you.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -1, log: 'You keep accelerating and the throw sails just over your outstretched fingers — too deep.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ease up to help the QB',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You ease off the throttle just enough to give your QB a target — he finds you in stride, perfectly placed.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'You slow down expecting the throw, but you and your QB read the timing completely differently.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the ball immediately',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You pick up the ball early in flight and track it all the way in — clean, controlled catch in stride.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'You look back for the ball too early and lose a step — it lets the corner close the gap right back up.' }],
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
    title: 'A tough adjustment',
    context: 'The pass arrives slightly behind you with a defender closing in.',
    choices: [
      {
        id: 'c1',
        label: 'Turn your body to shield it',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You spin your body to shield the ball from the closing defender — you make the tough adjustment catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You adjust your body for the low throw, but it slips through your hands. Incomplete.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: -1, log: 'You turn to make the adjustment right as the defender arrives — a violent collision, ball knocked away.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Go for the one-handed grab',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 5, log: 'You reach back with one hand for the tough throw — an incredible, highlight-worthy grab.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2, log: 'You reach back one-handed for the tough throw and it clanks off your fingertips. Incomplete.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Bail on the catch to avoid the hit',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'You bail on the catch to avoid the big hit — smart, no harm done, live for the next play.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You bail on the catch to protect yourself — only to see on the replay that the ball was more catchable than it looked.' }],
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
    context: 'The QB breaks the pocket and the original play is dead. You have to figure out where to go to create something.',
    choices: [
      {
        id: 'c1',
        label: 'Work back toward the QB',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You work back toward the scrambling QB in the broken play — he finds you for a completion.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You come back toward the QB, but you read the scramble wrong and end up in the wrong spot entirely.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep pushing deep',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep pushing deep even with the play broken — the QB buys enough time and it turns into a huge play.' }, { exposureDelta: 2 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -1, log: 'You keep running deep, but the QB gets flushed before he can ever get the ball to you.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Break for the sideline',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You break for the sideline to give the scrambling QB an easy outlet — a safe, easy target.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'You break for the sideline, but you and your scrambling QB never quite sync up on where.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'Must-convert down',
    context: '3rd & 7. You have to win your matchup to keep the drive alive.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the sticks',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You attack straight at the sticks — CONVERSION, first down secured.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You attack the sticks, but the corner closes the window right as the ball arrives.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Look for the big play',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 6, log: 'You run right past the sticks looking for more — a huge gain well beyond the first down.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'You push past the sticks for the bigger play — the throw doesn\'t connect. Incomplete.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'You push for the home run route on third down and the QB forces a bad throw — INTERCEPTED.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Run a short route to be safe',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You run the safe, short route to guarantee the conversion — easy pitch and catch, chains moved.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You play it safe with the short route, but it comes up just short of the sticks.' }],
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
    title: 'Your moment is here',
    context: 'WR1 is blanketed and the QB is starting to look your way more.',
    choices: [
      {
        id: 'c1',
        label: 'Make yourself available',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'With WR1 blanketed, you make yourself the obvious answer all game — the targets and the catches pile up.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try to become the go-to option, but you can\'t separate enough to actually be the answer.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Push your routes further',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 5, log: 'You push your routes further than usual looking for a signature moment — and you find it, a huge play.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'You push the routes deeper than usual — the extra risk doesn\'t pay off this time. Incomplete.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'You push the route further than the play called for and it throws off your own read entirely.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play the decoy role',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You accept the decoy role while WR1 is blanketed — your route pulls coverage and springs a teammate free.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -2, log: 'You commit to the decoy role and simply disappear from the game plan entirely — no impact at all.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'The trash talk',
    context: 'The corner starts chirping at you after a few reps against each other.',
    choices: [
      {
        id: 'c1',
        label: 'Say nothing back',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You let it roll off your shoulders and stay locked in on the game — the trash talk means nothing.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'You try to ignore it, but the chirping keeps creeping into your head snap after snap.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Answer him on the field',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You let your play do the talking on the very next rep — you win the matchup decisively.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'You try to answer him on the next play and he backs up his words — he wins the rep clean.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Demand the ball right now',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'Fired up by the trash talk, you demand the ball immediately — and you deliver, a big catch right in his face.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'Fired up by the chirping, you go looking for the ball right away — incomplete, but the message is sent.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'Fired up and a little too aggressive, you cross the line — a penalty flag ends the response before it starts.' }],
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
    title: '"Go get it"',
    context: 'The QB puts the ball in a contested area, trusting you to win the matchup.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the ball',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 5, log: 'You go up and attack the contested ball with full trust from your QB — you come down with it.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You attack the contested ball, but the defender gets just enough of a hand on it. Incomplete.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You lose the battle for the contested ball completely — the defender comes down with it instead. INTERCEPTED.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use your body',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You box out the defender with your frame through the whole route — secure, controlled catch.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try to box him out, but he still gets a hand through to deflect the ball away.' }, { attribute: 'physique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play only the ball',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'You track the ball alone and time your jump perfectly — a clean, contested grab.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: -1, log: 'You track the ball alone, but the defender times his contest perfectly at the last instant.' }],
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
    title: 'Time to get back up',
    context: 'You just took a huge hit after a catch and need to line back up for the next snap.',
    choices: [
      {
        id: 'c1',
        label: 'Get up right away',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You bounce right back up and line up for the next snap — the toughness doesn\'t go unnoticed.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'physique', delta: -1, log: 'You get right back up, but the hit takes more out of you than you\'d like to admit.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play smarter',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You adjust your game after the hit — smarter routes, fewer unnecessary collisions.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You play it too cautious after the hit and lose the edge that made you effective in the first place.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play even more physical',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2, log: 'You respond to the big hit by playing even more physical — and it produces another big play.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You respond by playing more physical, but it doesn\'t change anything about the outcome this time.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'You play even more physical after the last hit — and absorb another huge collision for your trouble.' }],
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
    title: 'Man or zone?',
    context: 'You have to identify the coverage before the snap to adjust your route.',
    choices: [
      {
        id: 'c1',
        label: 'Read the defenders\' movement',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You read the defenders\' pre-snap movement correctly — man coverage confirmed, route adjusted accordingly.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'You misread the defenders\' pre-snap shifts entirely — the route is run against the wrong coverage.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Trust the play call',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You trust the coordinator\'s pre-snap read from the sideline — it\'s spot on.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'You trust the sideline\'s read, but the defense disguises and switches the coverage right at the snap.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Adjust your route to the corner',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'You adjust your route on the fly based on what the corner shows you — perfect adaptation, clean separation.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -2, log: 'You adjust the route on your own read, but your QB was expecting the original — the two of you aren\'t in sync.' }],
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
    title: 'The decisive drive',
    context: 'Less than two minutes left. You know you\'ll likely be targeted on the final possessions.',
    choices: [
      {
        id: 'c1',
        label: 'Demand the ball',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 6, log: 'You call for the ball in the biggest moment of the drive and come through with a massive, game-deciding catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You demand the ball in the two-minute drill and the throw doesn\'t connect. Incomplete.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You demand the ball late in the game and force something that just wasn\'t there.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play it simple and stay available',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You stay simple and available for the QB — a steady contributor on the game-deciding drive.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You stay available and disciplined, but the ball just doesn\'t come your way much on this drive.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the big play every snap',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'You push for the home run on every single snap — and it finally connects for a spectacular grab.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'You push for the big play snap after snap, and the ball just never comes your way.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 1 }, { attribute: 'technique', delta: -2, log: 'You push too hard for the big play and run the wrong route entirely — a costly mental error.' }, { attribute: 'mental', delta: -2 }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Sacrifice yourself to free a teammate',
        effects: [{ attribute: 'leadership', delta: 3 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You sell out to clear a teammate\'s path — he takes it for a huge gain thanks to your sacrifice.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -3, log: 'You sell out to clear the way for a teammate, but the block whiffs and the whole play collapses.' }],
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
    title: 'Last chance',
    context: 'Final play of the game. The QB launches a pass into the end zone. A pile of players is fighting for the ball.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the highest point',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 8, log: 'You climb over everyone at the highest point of the ball — TOUCHDOWN, an unbelievable game-winner!' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'You go up with the crowd for the Hail Mary — the ball hits the ground. Incomplete.' }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3 }, { attribute: 'mental', delta: -1, log: 'You go up in the scrum for the ball, but the defender times his jump better and comes down with it.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Look for the deflection',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You hang back from the pile and read the deflection — the tipped ball falls right into your hands.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: -1, log: 'You hang back reading for a deflection that never comes clean — the ball just falls harmlessly to the turf.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Use your body to box out the defender',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You use your body to box the defender out of the pile entirely — you come away with the catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'You box out the defender as best you can — the ball still falls incomplete in the chaos.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -2, log: 'You box out the defender a little too aggressively in the pile — offensive pass interference wipes it out.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Position for the rebound instead of the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You position for the rebound instead of the catch itself — the deflection bounces right back into your hands.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: -2, log: 'You position for the rebound, but there\'s nothing usable to be found in the scrum.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'The hole disappears',
    context: 'You take the handoff, but the designed gap is instantly plugged by the defensive tackle.',
    choices: [
      {
        id: 'c1',
        label: 'Force it through',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1, log: 'You lower your pads and force it through the clogged hole anyway — a few hard-fought yards.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: -2, log: 'You try to force it through the clogged hole and get stood straight up for no gain.' }],
          },
          {
            weight: 15,
            effects: [{ log: 'You force it into the pile and get met by a wall of bodies — a bone-jarring collision at the line.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bounce it outside',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1, log: 'You bounce it outside the clogged gap and find a fresh crease to work with.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -1, log: 'You bounce it outside, but the linebacker flows with you and closes that gap too.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stay patient behind the line',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You stay patient behind the line and let the block develop — the hole reopens right on schedule.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You wait for the hole to develop, but you hold your patience one beat too long and the window closes.' }],
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
    title: 'Collision incoming',
    context: 'You\'ve just crossed the line of scrimmage but a linebacker is coming straight at you.',
    choices: [
      {
        id: 'c1',
        label: 'Lower your shoulder',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You lower your shoulder and win the collision outright — the linebacker bounces off.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: -2, log: 'You lower your shoulder into the hit, but the linebacker meets you square and stops you dead.' }, { attribute: 'mental', delta: -1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'Two players collide at full speed — a violent hit that leaves both of you shaken.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Try a juke move',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You throw a juke at the incoming linebacker and he completely bites — clean gain through the space he vacated.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'You throw the juke, but the linebacker stays patient and squares you up regardless.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: -2, log: 'You juke right into the hit and the ball comes loose on the collision — FUMBLE.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Get out of bounds',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'mental', delta: 1, log: 'You get out of bounds before the hit lands — no risk, ball secured.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: -1, log: 'You bail out of bounds a step early and leave a couple of yards on the field.' }],
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
    title: 'The wide-open boulevard',
    context: 'The offensive line opens up a massive hole right up the middle.',
    choices: [
      {
        id: 'c1',
        label: 'Hit it at full speed',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You hit the massive hole at full speed — a huge gain through the wide-open middle.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1, log: 'You hit the hole hard, but the defense rallies fast enough to hold it to a solid, unspectacular gain.' }, { exposureDelta: 2 }],
          },
          {
            weight: 10,
            effects: [{ exposureDelta: -2, log: 'You burst through the hole at full speed and the safety comes flying in for a violent, momentum-stopping hit.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Look for a second hole',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You bypass the first hole looking for something even better — and find it, an even bigger gain.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You hesitate looking for a better crease and the extra beat costs you — the gain shrinks considerably.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Follow the block exactly',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1, log: 'You trust the blocking scheme and follow it to the letter — a clean, efficient gain.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'You follow the blocking scheme exactly as designed — the tape shows a bigger cutback was available.' }],
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
    title: 'Reading the edge',
    context: 'You take the handoff on an outside zone run and have to decide when to cut it back inside.',
    choices: [
      {
        id: 'c1',
        label: 'Keep it outside',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'You stay patient to the outside and turn the corner clean — you reach the edge in space.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -1, log: 'You stay patient to the outside, but the linebacker beats you to the edge and seals it off.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Cut it back behind the block',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You cut it back behind the block right on schedule — a huge crease opens up.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -1, log: 'You cut it back a beat too early, before the block has really sealed anything off.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for the last moment',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'You wait until the very last instant to make your cut — a brilliant, patient read of the whole zone scheme.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'You wait for the cut to develop, but a pursuing defender catches you from behind before you can hit it.' }],
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
    context: 'The defense blitzes. The QB lets the pass rushers come free on purpose before dumping a screen your way.',
    choices: [
      {
        id: 'c1',
        label: 'Attack outside immediately',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You catch the screen and turn upfield immediately — a huge gain with blockers leading the way.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: -1, log: 'You catch the screen, but a defender reads it the whole way and blows it up for a loss.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Follow your blocks',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You trust your blockers and follow the screen exactly as designed — an excellent gain.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'You catch the screen but choose the wrong angle behind your blockers — the gain evaporates.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the cutback',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You catch the screen and cut back against the grain — a massive amount of space opens up.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try the cutback on the screen, but the defense flows and closes it down almost instantly.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'The blitz is coming',
    context: 'You have to stay in protection to keep a linebacker off the QB.',
    choices: [
      {
        id: 'c1',
        label: 'Take the linebacker head-on',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'You square up the blitzing linebacker head-on and stonewall him completely — excellent protection.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2, log: 'You square up the linebacker, but he\'s bigger and stronger — you get driven back into the pocket.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -2, log: 'You take on the blitzing linebacker and he simply wins — SACK, right through your block.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attack with an angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You cut the blitzer off with a well-angled block — clean protection, the QB has time.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -1, log: 'You take the wrong angle on the blitz pickup and the rusher slips right by you.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Release into your route',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 3, log: 'You release late into your route out of the backfield and the QB finds you for an easy checkdown.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'You release into your route, but the blitz gets home before the ball can ever get to you.' }],
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
    title: 'The ball comes loose',
    context: 'You just lost control of the ball after a big hit.',
    choices: [
      {
        id: 'c1',
        label: 'Dive on it immediately',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'You dive on the loose ball immediately — recovered, crisis averted.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'You dive for the loose ball but a defender gets there first — TURNOVER.' }, { attribute: 'physique', delta: 1 }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Try to scoop it up on the run',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'You scoop the loose ball up on the run without ever breaking stride — clean recovery.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -3, log: 'You try to scoop it up on the run, but the defense gets to it first — TURNOVER.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Vow to secure the ball better',
        effects: [{ attribute: 'technique', delta: 2, log: 'You make a mental note to switch the ball to your outside arm from now on — a lesson learned the hard way.' }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-68',
    theme: 'FOOTBALL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    positions: ['RB-FB'],
    emoji: '🚨',
    title: 'One yard from the touchdown',
    context: 'You\'re one yard from the end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Dive over the line',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You dive over the pile for the goal line — TOUCHDOWN!' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You dive for the pylon and get met at the line — stopped just short.' }, { exposureDelta: 2 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'You dive into the pile and get absolutely leveled at the goal line.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Follow the interior block',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You follow your lineman\'s block right through the middle — TOUCHDOWN!' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You follow the block, but the defensive line wins the leverage battle at the goal line.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the outside',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'You bounce it outside the goal-line pile and turn the corner — TOUCHDOWN!' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You bounce it outside, but the edge defender rallies and stops you just short of the pylon.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'You bounce it outside and the defense blows up the edge — you lose ground instead of gaining it.' }],
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
    context: 'The whole possession comes down to this run.',
    choices: [
      {
        id: 'c1',
        label: 'Dive straight up the middle',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1, log: 'You dive straight into the middle of the pile — FIRST DOWN, possession secured.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You dive into the middle and the defensive line holds the line — stopped short on fourth down.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Look for the outside gap',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You bounce it to the outside gap — enough room to move the chains. FIRST DOWN.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'You bounce it outside, but the defense flows faster than you can turn the corner — turnover on downs.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait behind the fullback',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You trust your fullback to lead the way and follow him through the hole — FIRST DOWN.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You wait a beat too long behind your fullback and the window closes before you can hit it.' }],
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
    title: 'One-on-one with the safety',
    context: 'You break through the second level and find yourself alone with the safety.',
    choices: [
      {
        id: 'c1',
        label: 'Juke him',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You throw a juke at the last defender and he completely bites — nothing but green in front of you.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'You throw the juke, but the safety stays square and wraps you up.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -2, log: 'You juke right into the safety\'s hit and the ball comes loose — FUMBLE.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Go through him',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'You lower your shoulder into the last man and drive through the contact for extra yards.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: -2, log: 'The safety stands you straight up on contact — no yards gained.' }, { attribute: 'mental', delta: -1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'You collide with the safety at full speed — a bone-rattling, open-field hit.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Cut toward the sideline',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'You cut it toward the sideline and get out of bounds — the ball stays safe.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'You bail toward the sideline a little early and leave a few yards behind you.' }],
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
    title: 'The defense bites on the blitz',
    context: 'The defense blitzes heavily. The offense calls a draw to punish the aggressive pass rushers.',
    choices: [
      {
        id: 'c1',
        label: 'Hit it as fast as possible',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'The blitz completely oversells and you burst through the vacated middle — a huge gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: -1, log: 'The blitz doesn\'t leave the lane it was supposed to and you\'re met right at the line.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay patient',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay patient and let the blitz commit fully before hitting the hole — an excellent gain.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -2, log: 'You wait for the hole to develop, but the blitzers recover fast enough to close it before you can hit it.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the cutback',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You cut back against the grain of the blitz — a huge gain through the space they left behind.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try the cutback, but a blitzer reads it and drags you down behind the line.' }],
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
    title: 'Keep or give?',
    context: 'On an option play, you need to run your track perfectly so the QB can read whether to keep it or hand it off.',
    choices: [
      {
        id: 'c1',
        label: 'Hold your assigned track',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You hold your exact assigned track through the mesh point — flawless option execution.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You hold your track perfectly, but the QB\'s read and yours don\'t line up at all.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Burst toward the gap',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1, log: 'You burst into the gap the instant you get the ball — a solid, positive gain.' }, { exposureDelta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'You burst into the gap, but the defender reads the option the whole way and meets you there.' }, { exposureDelta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Slow down to let the QB decide',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1, log: 'You slow your track just enough to let the QB make the read cleanly — good process, good result.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You slow your track to help the QB\'s read, but the two of you end up out of sync at the mesh.' }],
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
    title: 'The edge is open',
    context: 'You spot a gap on the outside in the red zone.',
    choices: [
      {
        id: 'c1',
        label: 'Go get the corner',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You bend it to the edge and turn the corner in the red zone — TOUCHDOWN!' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -1, log: 'You bend it to the edge, but the corner comes downhill fast and shuts it down.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Cut it inside',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'You cut it back to the inside instead of forcing the edge — a big gain up the middle.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'You cut it back inside and run straight into a waiting defender — stopped immediately.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stay patient behind the block',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2, log: 'You stay patient behind your blocker in the red zone and the lane opens right on cue.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -2, log: 'You wait for the block to develop, but it never really does — stopped for no gain.' }],
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
    title: 'Protect the QB',
    context: 'A linebacker is coming straight for the QB.',
    choices: [
      {
        id: 'c1',
        label: 'Take the contact',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 2, log: 'You step up and absorb the linebacker head-on — your QB gets all the time he needs.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You step up to take the hit, but the linebacker simply wins the leverage battle.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Block with the right angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take the perfect angle to cut off the rusher\'s path — clean, successful protection.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'Your angle is off just enough — the rusher slips through and gets home. SACK.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Release into your route',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 1, log: 'You release late out of the backfield instead of blocking — the QB finds you for an easy completion.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'You release into your route instead of staying in to block — and the QB pays for it, getting hit as he throws.' }],
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
    title: '40 yards of open field',
    context: 'You\'ve just broken through the line with a huge cushion of space ahead of you.',
    choices: [
      {
        id: 'c1',
        label: 'Hit full speed',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'You hit the afterburners straight up the middle of the open field — TOUCHDOWN!' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'You sprint straight ahead and get run down just shy of the end zone — still a huge gain.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You sprint straight up the field and the last safety takes a perfect angle to run you down.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Look for the best angle',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You take a slight angle to set up the safety — it works perfectly, leaving him grasping at air.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try to set up the safety with an angle, but it costs you too much speed and he closes the gap.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Protect the ball above all',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'mental', delta: 1, log: 'You play it safe with the ball high and tight — still a big, secure gain in the open field.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You play it a little too safe protecting the ball — the tape shows there was more room to be had.' }],
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
    title: 'Nobody\'s covering',
    context: 'The defense sends nearly everyone. You have to identify your priority.',
    choices: [
      {
        id: 'c1',
        label: 'Block the linebacker',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You pick up the blitzing linebacker in protection — your QB gets the clean pocket he needs.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You step up to block the linebacker, but he\'s simply too much and gets by you.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Release into your route right away',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'You skip the block entirely and release into your route immediately — a huge completion out of the backfield.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: -2, log: 'You skip the block to release into your route, but the QB gets sacked before the ball can ever get to you.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait, then release',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'You wait for the initial rush to clear before releasing — it buys your QB just enough time.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You wait too long to release and by the time you\'re open, the play has already broken down.' }],
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
    title: 'Legs are burning',
    context: 'After a long offensive series, fatigue is starting to set in.',
    choices: [
      {
        id: 'c1',
        label: 'Demand the ball anyway',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'Legs burning, you demand the ball anyway — and somehow it\'s your best run of the drive.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2, log: 'You push through the fatigue and demand the ball — a solid, unspectacular gain.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'physique', delta: -1, log: 'Your legs are simply gone — you demand the ball anyway and pay for it with a big loss.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play smarter',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You adjust your running style to conserve energy — smarter paths, same production.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You try to run smarter to save energy, but it costs you the burst that makes you dangerous.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ask for a breather',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1, log: 'You ask out for a series to catch your breath — the rest does exactly what it needed to.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'You ask out to rest, but the coach clearly expected you to push through it.' }],
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
    title: 'Behind the FB',
    context: 'The fullback is clearing a path in front of you.',
    choices: [
      {
        id: 'c1',
        label: 'Follow his block exactly',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You trust the fullback\'s lead block completely and follow it right through the hole — a big gain.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'You follow the fullback\'s block, but you miss the cutback lane he actually created.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Cut back behind him',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You cut back behind the fullback\'s block instead of following it straight — a massive gain.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -2, log: 'You look for the cutback behind the fullback, but there\'s nothing there — the lane never opens.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Get ahead of him',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'You get ahead of the fullback\'s block entirely — the defense doesn\'t expect it and you catch them off guard.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -1, log: 'You get ahead of the block too early and run straight into a free defender — stopped immediately.' }, { exposureDelta: -1 }],
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
    title: 'Everyone knows you\'re running',
    context: 'The team is on the goal line. The whole defense is expecting an inside run.',
    choices: [
      {
        id: 'c1',
        label: 'Hit it straight up the middle',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 3, log: 'You put your head down and hit the loaded box straight on anyway — TOUCHDOWN!' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -2, log: 'You hit the stacked box head-on and the numbers simply aren\'t in your favor — stopped cold.' }, { attribute: 'leadership', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Bounce it outside',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'You bounce it outside the loaded box — the edge is thin enough to get around. TOUCHDOWN!' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: -1, log: 'You bounce it outside, but with everyone expecting run, the defense flows too fast to outrun.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jump over the pile',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 5, log: 'You launch over the pile at the goal line — a spectacular, highlight-worthy TOUCHDOWN!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: -2, log: 'You launch over the pile and get met in mid-air, driven backward — stopped short.' }, { exposureDelta: -2 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: 2, log: 'You launch over the pile and take a violent hit at the peak of the jump.' }],
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
    title: 'Time to burn the clock',
    context: 'Less than two minutes left and every yard matters.',
    choices: [
      {
        id: 'c1',
        label: 'Get out of bounds fast',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You get out of bounds quickly to stop the clock — smart, situational football.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You rush to get out of bounds and misjudge the sideline — the clock keeps running anyway.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Look for maximum yards',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 4, log: 'You ignore the clock and just look for the biggest gain possible — and it pays off big.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2, log: 'You look for the biggest gain possible — a solid pickup, nothing more.' }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1 }, { attribute: 'mental', delta: -2, log: 'You push for extra yards inside the pile and the ball comes loose — FUMBLE, disaster with the clock winding down.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Slide down after the first down',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You slide down immediately after the first down marker — textbook clock management.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -2, log: 'You slide down right at the marker, but the sideline wanted you to push for more before going down.' }, { attribute: 'leadership', delta: -1 }],
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
    title: 'He\'s not biting',
    context: 'You come face to face with a linebacker who stays perfectly balanced, not committing to anything.',
    choices: [
      {
        id: 'c1',
        label: 'Try the juke anyway',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You try the juke anyway against the balanced linebacker — and this time, against the odds, he actually bites.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'You try the juke, but the linebacker stays perfectly balanced and wraps you up regardless.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Go through him',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'You go right at the balanced linebacker and win the contact — extra yards after the hit.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: -2, log: 'You go right at the linebacker and he meets you square — stopped cold at the point of contact.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Change direction gradually',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You change direction gradually instead of committing to a move — you win the angle cleanly.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You change direction gradually, but the balanced linebacker mirrors you step for step.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'Lined up in the slot',
    context: 'You\'re unusually lined up as a receiver.',
    choices: [
      {
        id: 'c1',
        label: 'Attack vertically',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'Lined up in the slot, you attack vertically and the linebacker covering you has no chance — huge separation.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: -1, log: 'You attack vertically out of the slot, but the corner covering you wins the footrace clean.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Run a short route',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You run a quick, safe route out of the slot — an easy pitch and catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You run the short route, but the defender closes the passing lane before the ball can get there.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Use a double move',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'You sell the double move perfectly out of the slot — a huge play against the confused coverage.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: -2, log: 'The double move doesn\'t fool anyone out of the slot — no separation at all.' }, { exposureDelta: -1 }],
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
    title: 'Two defenders converging',
    context: 'You\'ve just caught the ball and two defenders are closing in from opposite sides.',
    choices: [
      {
        id: 'c1',
        label: 'Wrap the ball up with both hands',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'technique', delta: 2, log: 'You wrap the ball up with both hands before the hit lands — ball secured through the gang tackle.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: -2, log: 'You focus so hard on protecting the ball that you give up a couple of yards in the process.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep fighting for yards',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep fighting for yards between the two converging defenders — a little extra before they bring you down.' }, { exposureDelta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep fighting between the two defenders, but they close the pincer and stop you cold.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2 }, { attribute: 'mental', delta: -2, log: 'You keep fighting for yards between two defenders and the ball squirts loose in the collision — FUMBLE.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Get out of bounds',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 90,
            effects: [{ attribute: 'mental', delta: 1, log: 'You bail toward the sideline before the double hit lands — no risk, ball secured.' }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'mental', delta: -1, log: 'You bail toward the sideline a step early and leave a yard on the field.' }],
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
    title: 'The cutback is there',
    context: 'Every defender has flowed with the initial movement. A gap opens up behind them.',
    choices: [
      {
        id: 'c1',
        label: 'Cut it immediately',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You hit the cutback lane the instant it opens — a massive gain against a defense that overcommitted.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'You cut back before the lane is truly there and run right into a defender who hadn\'t fully committed yet.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait a little longer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'You hold your patience for one more beat before hitting the cutback — the whole field opens up.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -2, log: 'You wait one beat too long and the safety has enough time to recover and cut off the lane.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stay on the original path',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You stick with the original path instead of chasing the cutback — a solid, unspectacular gain.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You stick with the original path and run right into the pursuit that the cutback would have avoided.' }],
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
    title: 'Nobody saw him',
    context: 'On a pass play, a defensive end comes free and heads straight for the QB.',
    choices: [
      {
        id: 'c1',
        label: 'Go meet him',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'You pick up the free rusher just in time and stone him completely — a critical block.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You pick up the free rusher, but he\'s simply too much for you and bulldozes right through.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use an angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take a sharp angle to cut off the free rusher\'s path — an efficient, well-placed block.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'You take your angle on the free rusher, but he still gets a hand on the QB anyway.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Release for the ball',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'You release for the ball instead of picking up the free rusher — the QB gets it to you quickly before trouble arrives.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -1, log: 'You release for the ball instead of blocking, and the unblocked rusher gets home. SACK.' }],
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
    title: 'Forget the fumble',
    context: 'After a big mistake, the coach decides to give you the ball right back immediately.',
    choices: [
      {
        id: 'c1',
        label: 'Ask for the ball',
        effects: [{ attribute: 'mental', delta: 3 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 3 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'You ask for the ball right back after the fumble — and answer with your best run of the day.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -2, log: 'You get the ball back right after the fumble, but the mistake is still weighing on you.' }, { attribute: 'leadership', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play it very safe',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You play it extra safe after the fumble — a secure, low-risk carry.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1, log: 'You play it so safe after the fumble that you leave obvious yards on the table.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for a big play right away',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 5, log: 'You go looking for a big answer to the fumble right away — and you find it.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 2, log: 'You go looking for the big answer to the fumble — instead you get a modest, unremarkable gain.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -3, log: 'You press too hard trying to answer the fumble immediately and make a second mistake instead.' }, { attribute: 'technique', delta: -2 }],
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
    context: 'You don\'t immediately see a defender closing in from behind.',
    choices: [
      {
        id: 'c1',
        label: 'Protect the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You brace the ball tight anticipating the blindside hit — the fumble never comes.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1, log: 'You brace for the blindside hit — it still lands with full force, but the ball stays secure.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep running',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep churning forward without seeing the blindside threat — and pick up extra yards anyway.' }, { exposureDelta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'You keep pushing forward and the unseen defender arrives with a huge blindside hit.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2 }, { attribute: 'mental', delta: -2, log: 'You never see the blindside hit coming and the ball is jarred loose — FUMBLE.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Slide down',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 90,
            effects: [{ attribute: 'mental', delta: 1, log: 'You go down at the first sign of trouble — no risk, ball secured.' }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'mental', delta: -1, log: 'You go down a step too early and leave some obvious yards on the table.' }],
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
    title: 'You have to carry the offense',
    context: 'The QB is going through a rough patch. The coach decides to give you a bigger workload.',
    choices: [
      {
        id: 'c1',
        label: 'Take on the responsibility',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'You embrace the extra workload and carry the offense on your back all game.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You embrace the extra workload, but the production is steady rather than spectacular.' }, { attribute: 'mental', delta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: -2, log: 'You embrace the extra workload and the pressure of it leads to a costly mistake.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay disciplined',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You stay within yourself and just do your job carry after carry — steady, reliable efficiency.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'You stay disciplined and within the offense, but it means the team is missing the home-run plays it needs.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Look for the big play',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'You go hunting for the home run play on every touch — and land one, a touchdown or a game-changing gain.' }],
          },
          {
            weight: 45,
            effects: [{ exposureDelta: 3, log: 'You keep hunting for the home run play — instead you get a modest gain, nothing more.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -3, log: 'You press too hard chasing the big play and cough the ball up — TURNOVER.' }],
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
    title: '30 seconds left',
    context: 'The team trails by a few points. You catch a short pass with plenty of room ahead.',
    choices: [
      {
        id: 'c1',
        label: 'Look for maximum yards',
        effects: [{ exposureDelta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 5, log: 'You turn upfield and look for every possible yard — a huge gain with the clock winding down.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2, log: 'You push for maximum yardage — a decent, unremarkable gain.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ exposureDelta: -1 }, { attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -3, log: 'You push too hard for extra yards in the chaos and the ball comes loose — FUMBLE, with the clock running out.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Get out of bounds',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You get out of bounds immediately to stop the clock — perfect situational awareness.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -2, log: 'You get out of bounds right away — the tape shows you left extra yards behind.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack the nearest defender for extra yards',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'You attack the nearest defender head-on and win the contact — extra yards squeezed out with the clock ticking.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: -2, log: 'You attack the nearest defender and get stood straight up — no gain, precious seconds gone.' }, { attribute: 'leadership', delta: -1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You attack the nearest defender and take a violent hit for your trouble.' }],
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
    title: 'The last defender',
    context: 'You break into open space with only one defender left to beat. How you finish the play is up to you.',
    choices: [
      {
        id: 'c1',
        label: 'Juke him',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'The juke works to perfection — the defender grabs at air while you take off for the end zone.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'The defender doesn\'t bite on the juke and brings you down after a fair gain.' }, { exposureDelta: 1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1 }, { attribute: 'mental', delta: -2, log: 'In the middle of the juke, the ball slips loose from your arms — FUMBLE! The defense dives on it.' }],
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
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'The spin move throws the defender completely off balance — he goes down while you keep running.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'The spin buys you a little space, but the defender holds on and finishes the tackle.' }, { exposureDelta: 2 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'The move is too abrupt — you lose your balance spinning and the gain shrinks to almost nothing.' }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Truck him',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'You lower your shoulder and blow straight through the tackle attempt — the defender bounces off backward.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: -2, log: 'The defender absorbs the hit without giving ground and stops you cold on contact.' }, { attribute: 'mental', delta: -1 }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'mental', delta: 1, log: 'A brutal head-on collision — both players stay down for a moment before getting back up.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Get out of bounds',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 90,
            effects: [{ attribute: 'mental', delta: 1, log: 'You play it safe and step out of bounds without taking an unnecessary risk — the ball stays secure.' }],
          },
          {
            weight: 10,
            effects: [{ attribute: 'mental', delta: -1, log: 'You step out of bounds a little early — a few extra yards were still there for the taking.' }],
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
    title: 'The tackle is backpedaling',
    context: 'Right off the snap, you notice the offensive tackle dropping back fast into pass protection.',
    choices: [
      {
        id: 'c1',
        label: 'Speed rush outside',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'You dip around the retreating tackle with pure speed — you win the edge clean.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try the speed rush, but the tackle mirrors your angle and rides you past the pocket.' }, { attribute: 'physique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Power rush inside',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You bull-rush straight through the tackle\'s chest — you win the leverage battle outright.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -2, log: 'You bull-rush the tackle, but he anchors down and holds his ground.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Read before attacking',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You take a beat to read the tackle\'s set before committing — you identify the protection scheme perfectly.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -2, log: 'You take a beat to read the tackle\'s set, but it costs you the window that was there.' }],
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
    context: 'The tackle and the tight end are both coming at you.',
    choices: [
      {
        id: 'c1',
        label: 'Attack through the double block',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'You attack straight into the double team anyway — somehow you still collapse the pocket.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -2, log: 'You attack the double team head-on and get completely swallowed up — no pressure at all.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Shed it quickly',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1, log: 'You quickly shed the double team before it fully forms — the lane opens for a teammate right behind you.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try to shed the double team early, but they lock on before you can disengage.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Occupy both blockers',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 1, log: 'You sacrifice yourself to occupy both blockers — a teammate runs free through the space you created.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -2, log: 'You occupy both blockers, but they simply wash you out of the play entirely — no impact for anyone.' }, { attribute: 'physique', delta: -1 }],
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
    title: 'The RB is running your way',
    context: 'The RB is heading outside. You have to keep the runner from turning the edge.',
    choices: [
      {
        id: 'c1',
        label: 'Slam the edge shut',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You slam the edge shut immediately — the RB has no choice but to cut it back inside.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You crash the edge too hard, too fast, and overrun the play entirely.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attack the RB',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You attack the RB directly at the edge and bring him down — clean tackle for a short gain.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -2, log: 'You attack the RB directly, but he cuts back behind you before you can wrap him up.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stay patient',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay patient and maintain your leverage on the edge — a smart, disciplined read.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -2, log: 'You stay patient reading the play, but the RB finds a small crease before you can close it.' }],
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
    title: 'The perfect bend',
    context: 'You try to get around the tackle with pure speed.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the corner',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'You bend the corner around the tackle — pressure, forcing the QB off his spot.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'You bend the corner cleanly around the tackle — SACK, right on the QB before he can even set his feet.' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try to bend the corner, but the tackle rides you well past the pocket — no path to the QB.' }, { attribute: 'physique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use a dip and rip',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'You dip under the tackle\'s hands and rip through cleanly — an excellent, technically perfect rush.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -3, log: 'You go for the dip and rip, but the tackle absorbs the whole move and resets his anchor.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Change your plan at the last second',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You change your rush plan at the last instant and it catches the tackle completely off guard — sack or pressure.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -2, log: 'You try to change your plan at the last instant, but it\'s too late — the tackle has already won his set.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'The Wall Advances',
    context: 'The tackle sets up to absorb a speed rush. You decide to switch up your plan completely.',
    choices: [
      {
        id: 'c1',
        label: 'Power rush',
        effects: [{ attribute: 'physique', delta: 3 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 3 }, { exposureDelta: 2, log: 'You go full power straight through the tackle\'s chest — the pocket collapses inward.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -3, log: 'You bring full power straight at the tackle, and he simply holds his ground.' }],
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
            effects: [{ attribute: 'technique', delta: 2, log: 'You start with speed then convert to power at the last second — the tackle can\'t adjust in time.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try the speed-to-power transition, but you lose your own balance in the process.' }, { attribute: 'physique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go back to the speed rush',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You go back to the speed rush — the tackle is still off-balance from the power move and can\'t recover in time.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: -1, log: 'You go back to the speed rush, but the tackle has already adjusted his set to cover it.' }],
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
    title: 'The QB Climbs the Pocket',
    context: 'You get around your tackle, but the QB is climbing the pocket.',
    choices: [
      {
        id: 'c1',
        label: 'Dive at the QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'You dive at the climbing QB — SACK, brought down before he can escape up the pocket.' }, { exposureDelta: 1 }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -1, log: 'You dive at the QB as he climbs, but he slips the tackle attempt entirely.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Close the space gradually',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You close the space methodically as the QB climbs — pressure or sack, he has nowhere left to go.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You close the space methodically, but the QB gets the throw off just before you arrive.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Hold your contain',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You hold your contain lane disciplined as the QB climbs — he\'s forced to stay in the pocket.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'You hold your contain, but the QB finds a crease and slips out of the pocket anyway.' }, { attribute: 'leadership', delta: -1 }],
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
    title: 'Keep or Give',
    context: 'The QB can keep the ball himself or hand it off to the RB.',
    choices: [
      {
        id: 'c1',
        label: 'Crash down on the RB',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'You crash down hard on the dive read — the RB is stopped before he ever gets started.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -1, log: 'You crash down on the dive read, but the QB reads it and pulls the ball to keep it himself.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'You keep your eyes on the QB through the mesh point — a clean, correct read of the option.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -2, log: 'You hesitate reading the option and the QB exploits the split second of indecision.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Force the QB outside',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You force the QB to commit to the outside — your contain discipline pays off exactly as coached.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'You take the wrong angle trying to force the QB outside and he cuts back through the gap you left.' }, { attribute: 'leadership', delta: -1 }],
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
    title: 'The Ball Is Right There',
    context: 'You reach the QB, but now you have to choose how to finish the rush.',
    choices: [
      {
        id: 'c1',
        label: 'Punch at the arm',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'You go straight for the ball, punching at his throwing arm — FUMBLE, it comes free.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: -2, log: 'You punch at the ball, but the QB tucks it away and protects it through the sack.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Secure the sack',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'You forget about the strip and just secure the sack — clean, certain, no risk.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'You go to wrap up for the safe sack, but the QB releases the ball just before you get there.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Hit as hard as you can',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'You unload with everything you have — a spectacular, bone-jarring sack.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2, log: 'You unload with full force and bring him down — nothing fancy, just a sack.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -2, log: 'You unload with everything you have and the QB somehow slips the hit entirely.' }, { exposureDelta: -1 }],
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
    title: 'The Screen Pass',
    context: 'You rush toward the QB before realizing a screen is developing behind you.',
    choices: [
      {
        id: 'c1',
        label: 'Brake immediately',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 1, log: 'You slam on the brakes the instant you sense the screen — you read it perfectly.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -2, log: 'You try to brake for the screen, but you\'ve already rushed too far upfield to recover.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep coming at the QB',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You ignore the screen developing behind you and keep coming — you get to the QB before the ball ever leaves his hand.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2, log: 'You ignore the developing screen and keep rushing — the RB catches it clean with nobody home.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Turn back to the RB',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You turn back and chase down the screen — immediate tackle, minimal damage.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -2, log: 'You turn back to chase the screen, but the RB slips your attempted tackle.' }],
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
    title: 'The Tight End Arrives',
    context: 'A tight end comes over to help the tackle on your side.',
    choices: [
      {
        id: 'c1',
        label: 'Attack both blockers',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'You attack both blockers head-on anyway — somehow you still create pressure.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -2, log: 'You attack both blockers head-on and get completely neutralized between them.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Duck under the TE',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You duck under the tight end\'s block and slip free into the backfield.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -2, log: 'You try to duck under the tight end\'s block and lose your balance in the process.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Occupy the TE to free the linebacker',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You occupy the tight end to free up the linebacker behind you — he finishes the play.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -2, log: 'You occupy the tight end as planned, but the linebacker behind you arrives a beat too late.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'TEX Stunt',
    context: 'You and the defensive tackle need to swap rush lanes to disrupt the offensive line.',
    choices: [
      {
        id: 'c1',
        label: 'Execute the timing perfectly',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'You hit the exact timing of the stunt — the exchange with the tackle creates instant pressure.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -3, log: 'You execute the stunt on time, but the offensive line reads the exchange and picks it up cleanly.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Speed up your move',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'You speed up your part of the stunt — the timing works out to a huge advantage.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You speed up your part of the stunt, but it throws off the timing with your teammate completely.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Slow down to let the DT through',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 1, log: 'You slow your path to let the DT come free through the exchange — he gets home clean.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'You slow your path for the exchange, but the DT gets picked up before the stunt can develop.' }, { attribute: 'leadership', delta: -1 }],
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
    context: 'The QB rolls out of the pocket toward your side.',
    choices: [
      {
        id: 'c1',
        label: 'Chase the QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'You chase the bootleg down full speed — SACK, run down from behind.' }, { exposureDelta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -1, log: 'You chase the bootleg, but the QB gets the throw off on the move before you can catch him.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Hold your contain',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You hold your contain and don\'t overpursue — the QB is forced into a rushed, hurried throw.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'You hold your contain disciplined, but the QB still finds a quick completion on the move.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack the throwing spot',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You attack the spot where the QB plans to throw from — pressure right as he sets up.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -2, log: 'You attack the throwing spot, but the QB still finds his receiver before you can affect the pass.' }],
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
    title: 'The QB Breaks Loose',
    context: 'The QB leaves the pocket and takes off toward the sideline.',
    choices: [
      {
        id: 'c1',
        label: 'Chase at full speed',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You chase the scrambling QB down at full speed — clean tackle.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -2, log: 'You chase at full speed, but the QB has the angle and the head start to outrun you.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Cut the angle',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You cut the angle instead of chasing straight — you meet the scrambling QB right where he\'s headed.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'You cut the angle, but the QB kicks into another gear and outruns your angle too.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Force the QB back inside',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You force the scrambling QB back to the inside — a teammate is waiting there to finish the tackle.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -2, log: 'You try to force the QB back inside, but he cuts back outside you for a big scramble.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'Third & Long',
    context: '3rd & 10. The defense needs pressure now.',
    choices: [
      {
        id: 'c1',
        label: 'Empty the tank on the speed rush',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You empty the tank on the speed rush on third-and-long — SACK, exactly when the defense needed it.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'You empty the tank on the speed rush — no sack, but real pressure that forces a rushed throw.' }, { attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'You empty the tank on the speed rush and the tackle simply holds his ground on the crucial down.' }, { attribute: 'technique', delta: -2 }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use a counter move',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'You counter back inside off the speed rush — the tackle is caught leaning and you generate pressure.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -3, log: 'You counter back inside, but the QB gets the ball out before you can affect the throw.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stay disciplined on contain',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay disciplined in your rush lane on third-and-long — the QB has nowhere to escape the pocket.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'You stay disciplined in your rush lane, but the QB still finds a clean throwing lane.' }, { attribute: 'leadership', delta: -1 }],
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
    title: 'The RB Comes Right at You',
    context: 'The RB attacks straight into your interior gap.',
    choices: [
      {
        id: 'c1',
        label: 'Meet the RB head-on',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You meet the RB head-on in the gap — clean tackle for a short gain.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You meet the RB head-on, but he fights through the initial contact for extra yards.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the blocks',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 1, log: 'You read the blocking scheme before committing to the gap — a clean, correct run fit.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take an extra beat to read the blocks and the hesitation costs you leverage in the gap.' }, { attribute: 'mental', delta: 1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack the backfield',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You shoot straight into the backfield before the blocks can set — tackle for a loss.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'You shoot into the backfield, but the RB has already made his cut and gets past you.' }, { exposureDelta: 1 }],
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
    title: 'The Hard Count',
    context: 'The QB works hard counts to try to draw the defensive line offside.',
    choices: [
      {
        id: 'c1',
        label: 'Jump on the movement',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: 1, log: 'You jump on the hard count — turns out the tackle flinched too, so it evens out.' }],
          },
          {
            weight: 80,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'You jump early on the hard count — OFFSIDES, a costly penalty against your own defense.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay perfectly still',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'The snap comes right after — no jump, no penalty.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'The offense catches you flat-footed with a change of pace.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Read the QB\'s tendencies',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'You\'ve got his cadence down — better anticipation off the next snap.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'The QB keeps mixing up his cadence to keep you guessing.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'He\'s Off Balance',
    context: 'After two straight rushes, the tackle looks like he can\'t keep up with your speed.',
    choices: [
      {
        id: 'c1',
        label: 'Run the speed rush again',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'You win the corner again — PRESSURE up the arc.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: -2, log: 'The tackle adjusts his set and cuts off the corner this time.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Counter back inside',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 3, log: 'You counter back inside and blow right past him — huge advantage.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 3, log: 'The tackle recovers and closes the inside gap just in time.' }],
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
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You bull rush and walk him straight back into the pocket.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -2, log: 'The tackle anchors down and absorbs the bull rush.' }],
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
    title: 'The Decisive Moment',
    context: 'The opponent\'s last possession. A sack here could all but seal the win.',
    choices: [
      {
        id: 'c1',
        label: 'Go for the sack',
        effects: [{ exposureDelta: 2 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 7, log: 'You beat the tackle clean and drop the QB — SACK!' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'You collapse the pocket and force an early throw — PRESSURE.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -1, log: 'The QB feels you coming and slips out of the pocket.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay disciplined',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 2, log: 'You stay disciplined on the edge — the QB has nowhere to go.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'The QB finds a crease and escapes contain anyway.' }, { attribute: 'leadership', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for the right moment',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'You time the rush perfectly — SACK or at worst a forced, hurried throw.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -2, log: 'The ball is out before you can get there.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'Punch Out',
    context: 'You close in on the RB after a run and see the ball exposed.',
    choices: [
      {
        id: 'c1',
        label: 'Go for the fumble',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'You punch straight through and the ball pops loose — FUMBLE!' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -2, log: 'The RB tucks it away and protects the ball.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Secure the tackle',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'You wrap up and bring him down — clean tackle.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'The RB spins free just before you close the tackle.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Hit very hard',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'You explode through the ball carrier — the ball comes loose, FUMBLE!' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'Big hit, clean tackle.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -2, log: 'The RB shrugs off the hit and breaks the tackle.' }],
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
    title: 'The RB Crosses Your Side',
    context: 'On a zone read, you have to choose between crashing down on the RB or respecting the QB keep.',
    choices: [
      {
        id: 'c1',
        label: 'Crash down on the RB',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You crash down hard and the RB is stopped cold.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The QB pulls it and turns the corner while you\'re chasing the RB.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the mesh point',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 2, log: 'You read the mesh point correctly and play it right.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -2, log: 'You hesitate a beat too long reading the mesh.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Force the QB inside',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You force the QB to keep it inside — right into your teammates\' arms.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -2, log: 'The QB cuts back inside before you can wall it off.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'His Hands Are Too High',
    context: 'You notice the tackle consistently attacks with his hands set way too high.',
    choices: [
      {
        id: 'c1',
        label: 'Swipe his hands away',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 3 }, { exposureDelta: 2, log: 'You swipe his hands away clean — you\'re free off the edge.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -3, log: 'The tackle corrects his hand placement before you can counter.' }],
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
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You rip through his frame for a clean advantage.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -2, log: 'The tackle absorbs the rip and resets his hands.' }],
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
            effects: [{ attribute: 'physique', delta: 2, log: 'You bull straight through and win with power.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -2, log: 'The tackle anchors and neutralizes the power rush.' }],
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
    title: 'Don\'t Let the QB Out',
    context: 'The defensive coordinator has been clear: whatever happens, do not lose contain.',
    choices: [
      {
        id: 'c1',
        label: 'Stay wide',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay disciplined outside — the QB is contained.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -2, log: 'You\'re too far outside to factor into the play at all.' }, { attribute: 'leadership', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Attack the QB',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'You attack the QB and force the throw — PRESSURE.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: -1, log: 'The QB steps up and slides out of the pocket.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for the QB',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You wait him out and wrap him up for the tackle.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'The QB finds a passing lane before you can close.' }],
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
    title: 'The Gap Opens',
    context: 'You spot a seam opening up between the guard and the tackle.',
    choices: [
      {
        id: 'c1',
        label: 'Dive inside',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You dive through the gap — PRESSURE up the middle.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -2, log: 'The guard slides over and seals the gap shut.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay outside',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1, log: 'You keep your rush lane and stay on track outside.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: -1, log: 'The tackle recovers and reattaches to your outside shoulder.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for the stunt',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You and the DT time the stunt perfectly.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'The stunt gets its timing crossed and the exchange breaks down.' }, { attribute: 'leadership', delta: -1 }],
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
    title: 'The Ball Isn\'t Coming Out',
    context: 'The QB is holding onto the ball a long time before throwing.',
    choices: [
      {
        id: 'c1',
        label: 'Speed up the rush',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 4, log: 'You turn the corner and get home — SACK!' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: -1, log: 'The tackle holds his ground and buys the QB more time.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Switch up your move',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You switch it up mid-rush — PRESSURE.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: -2, log: 'The QB gets the ball out before you can counter.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Hold your contain',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'You keep the pocket shut — the QB stays trapped.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'The QB finds a throwing window you left open.' }, { exposureDelta: -1 }],
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
    title: 'Small Player, Big Impact',
    context: 'The RB stays in to block and comes straight at you in protection.',
    choices: [
      {
        id: 'c1',
        label: 'Crush him',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1, log: 'You bull the RB back into the pocket.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: -2, log: 'You waste precious time fighting through the chip block.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use your hands',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You use your hands and shed the block fast.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'The RB holds his ground on the chip block.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Loop around the RB',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'You loop around the RB — PRESSURE.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: -1, log: 'The detour costs you the rush lane and precious time.' }, { attribute: 'physique', delta: -1 }],
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
    title: 'Forced Throw',
    context: 'You don\'t get to the QB, but your pressure forces him into a rushed throw.',
    choices: [
      {
        id: 'c1',
        label: 'Keep chasing',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You keep chasing — you\'re closing fast, SACK opportunity.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: -1, log: 'The QB gets rid of it before you close the distance.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Get your hands up',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'You get your hands up — the pass is batted down at the line.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -2, log: 'The ball sails right over your outstretched hands.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the big hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'You lower your shoulder and land a huge hit right as he throws.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -2, log: 'The QB releases it a beat before you can land the hit.' }, { exposureDelta: -1 }],
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
    title: 'The Fake Handoff',
    context: 'The QB fakes a handoff to the RB before dropping back to pass.',
    choices: [
      {
        id: 'c1',
        label: 'Bite on the run',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1, log: 'It\'s a real handoff — the RB actually has the ball.' }],
          },
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'You bite on the fake — it\'s PLAY-ACTION, and the QB is already dropping back.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 1, log: 'You read the QB\'s eyes and diagnose it correctly.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -2, log: 'You hesitate just slightly before committing.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack the QB right away',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'You go straight for the QB regardless — PRESSURE.' }, { exposureDelta: 1 }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: -1, log: 'The QB steps up and throws right behind where you rushed.' }, { exposureDelta: -1 }],
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
    title: 'The QB Is Within Reach',
    context: 'You\'ve finally beaten your blocker and it\'s just one step to the QB now.',
    choices: [
      {
        id: 'c1',
        label: 'Secure the sack',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'You close the window without giving him a single chance to escape — SACK! The QB is down before he can throw.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'The QB feels the pressure at the last second and just barely slips away — the sack escapes you.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Go for the strip',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'Your hand hits the ball right at the moment of impact and it hits the ground — FUMBLE! Your team recovers.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 2, log: 'You don\'t get the fumble you were hoping for, but it\'s still a SACK — the QB is down.' }, { exposureDelta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -2, log: 'The QB feels the strip attempt coming and gets rid of the ball just before your hand arrives.' }, { exposureDelta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Hit him violently',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'The impact is brutal — SPECTACULAR SACK! The QB is sent flying, and it\'s already making the highlight reels.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2, log: 'Nothing flashy, but it\'s still a SACK — clean and effective.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'physique', delta: -2, log: 'You launch the hit too early and the QB slides out of reach at the last second.' }],
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
    title: 'Legs Feel Heavy',
    context: 'After playing almost the entire game, fatigue is starting to set in.',
    choices: [
      {
        id: 'c1',
        label: 'Keep bringing the pressure',
        effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 3, log: 'You dig deep and make a BIG PLAY through the fatigue.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You grind through it — solid, unspectacular rep.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -1, log: 'Your legs are dead — fatigue finally catches up to you.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play smarter',
        effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You lean on positioning to make up for tired legs.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'The fatigue finally slows you down a step too much.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ask for a breather',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'You get a breather — a useful reset before the next series.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'The coach decides the team needs you out there regardless.' }],
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
    context: 'The opponent\'s final drive. A defensive stop would all but end the game. You know your one-on-one with the tackle could decide it.',
    choices: [
      {
        id: 'c1',
        label: 'Empty the tank on the speed rush',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 7, log: 'You empty the tank on the speed rush and get home — SACK to seal it!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You get the corner — PRESSURE at the worst possible time for the offense.' }, { exposureDelta: 2 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: -2, log: 'The tackle digs in and holds his ground one last time.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use your best counter',
        effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: 1 }, { exposureDelta: 4, log: 'You unleash your best counter move — PRESSURE, maybe even a SACK.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: -3, log: 'The tackle has seen the move on film and anticipates it perfectly.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play contain and trust the defense',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 3 }, { exposureDelta: 2, log: 'You play contain and trust your defense — the QB is boxed in and the stop comes.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 2 }, { exposureDelta: -2, log: 'The QB somehow finds a way to escape and extend the drive.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Go for the strip-sack',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'You go for the strip — the ball comes out, FUMBLE!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You bring him down before he can protect it — SACK!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -1, log: 'The QB feels the rush coming and slips away just in time.' }],
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
    title: 'Gap Attack',
    context: 'The RB attacks an interior gap and you have to decide when to trigger downhill.',
    choices: [
      {
        id: 'c1',
        label: 'Trigger downhill immediately',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You fill the gap fast and stop the run cold.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'The RB cuts back behind you before you can square up.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the RB before closing',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1, log: 'You read it right and close the gap at the perfect moment.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'You hesitate a beat too long before committing downhill.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack the backfield directly',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You blow past the block and drop him in the backfield — TACKLE FOR LOSS.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'You take a bad angle and overrun the play.' }, { exposureDelta: -2 }],
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
    title: 'Tight End Release',
    context: 'The TE starts out blocking before suddenly releasing into his route.',
    choices: [
      {
        id: 'c1',
        label: 'Follow him immediately',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You stick with him step for step — clean coverage.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'You cover him well, but the QB was looking elsewhere the whole time.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait to confirm',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait it out and read the route correctly.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The TE gets too much of a head start downfield.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'You undercut the route and jump the ball — INTERCEPTED!' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1, log: 'You get there in time to knock the pass away.' }, { exposureDelta: 2 }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -1, log: 'The TE hauls it in just ahead of you.' }],
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
    title: 'Don\'t Bite',
    context: 'The QB fakes a run to try to draw you downhill.',
    choices: [
      {
        id: 'c1',
        label: 'Bite on the run',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1, log: 'It\'s not a fake — this is a real running play.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You bite hard — it\'s PLAY-ACTION, and you\'re completely out of position.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep your eyes on the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You keep your eyes on the QB and read it correctly.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'You\'re a step slow reacting to the actual run.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait a beat, then trigger',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You wait it out for a beat and get a perfect read.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'You wait too long and arrive after the play has already developed.' }],
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
    context: 'A WR crosses the entire field behind the linebackers.',
    choices: [
      {
        id: 'c1',
        label: 'Take the WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You mirror the WR across the field — perfect coverage.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'The WR creates just enough separation crossing the field.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Pass him off to the linebacker',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You call it out early — clean communication on the switch.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -3, log: 'The linebacker doesn\'t get the call in time.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 5, log: 'You jump the route on the QB\'s throw — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -4, log: 'The QB finds his receiver right where you left him.' }],
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
    title: 'Strong Safety Blitz',
    context: 'The defensive coordinator decides to send you after the QB.',
    choices: [
      {
        id: 'c1',
        label: 'Go immediately',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 5, log: 'You come clean off the edge on the blitz — SACK!' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -1, log: 'The RB picks up the blitz and buys the QB time.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for the RB\'s move',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You time it perfectly off the RB\'s release.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The QB gets the ball out before you can arrive.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Fake the blitz',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2, log: 'You show blitz and drop back — the QB is thrown off completely.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The QB reads the disguise and identifies the coverage anyway.' }],
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
    title: 'The QB\'s Stare',
    context: 'The QB seems to be staring right at you on purpose before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Give nothing away',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'You give him nothing — the QB hesitates at the line.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'He identifies the coverage anyway despite your disguise.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Show one coverage, then rotate',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2, log: 'You show one look and rotate late — the QB is completely fooled.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: -1, log: 'Your rotation is a beat late and leaves a seam open.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Creep down into the box',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'leadership', delta: 1, log: 'The QB sees you creeping down and audibles out of the play.' }, { exposureDelta: 1 }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'You bite down into the box — it\'s PLAY-ACTION, and you\'re out of position.' }],
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
    title: 'The Deep Ball',
    context: 'A long pass is launched toward your side of the field.',
    choices: [
      {
        id: 'c1',
        label: 'Play the receiver',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You track the receiver stride for stride — clean coverage deep.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'The receiver hauls in the deep ball just past your reach.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'You track the flight of the ball perfectly — INTERCEPTED!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'You get a hand on it just enough to knock it away.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: -2, log: 'The receiver times his jump better and comes down with it.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Secure the tackle',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'You play it safe and limit the gain after the catch.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'He shrugs off the hit and turns it into a much bigger gain.' }],
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
    title: 'Last Line of Defense',
    context: 'The RB has broken through the entire defense. You\'re the last man back.',
    choices: [
      {
        id: 'c1',
        label: 'Hit hard',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'You lower the boom — big hit, tackle secured.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'The RB makes you miss and slips around the hit.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take the angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take the right angle and bring him down — clean tackle.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -2, log: 'The RB cuts away from your angle at the last second.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the strip',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 6, log: 'You go for the strip on the tackle — the ball comes loose, FUMBLE!' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'You wrap up and bring him down — clean tackle.' }, { exposureDelta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'The RB breaks free of the tackle attempt.' }],
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
    context: 'You\'re playing behind the linebackers, in position to jump an intermediate route.',
    choices: [
      {
        id: 'c1',
        label: 'Read the QB\'s eyes',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 3, log: 'You read the QB\'s eyes perfectly and break on the throw — INTERCEPTED or batted down.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1, log: 'The QB looks you off and manipulates your eyes.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for the route',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You wait for the route to develop — clean coverage.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'The route breaks faster than you can react.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jump the route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'You jump the route early — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2 }, { attribute: 'technique', delta: -2, log: 'You jump the wrong route and get burned by a bad read.' }],
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
    title: 'The Slot Goes Deep',
    context: 'The slot receiver attacks vertically up the field.',
    choices: [
      {
        id: 'c1',
        label: 'Stick to the WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You stay glued to the WR stride for stride — solid coverage.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'The WR wins the vertical stem and gains a step of depth.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play over the top',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You play over the top and make the throw nearly impossible.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The pass drops in underneath your zone.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Attack the ball',
        effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'You attack the ball at its highest point — INTERCEPTED!' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2, log: 'The receiver comes down with the catch.' }, { attribute: 'technique', delta: 1 }],
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
    title: 'The RB Slips Free',
    context: 'The RB releases from the backfield and attacks downfield.',
    choices: [
      {
        id: 'c1',
        label: 'Take him immediately',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You jump the route right away — clean coverage.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: -2, log: 'The RB gains a step of separation out of the backfield.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait and read the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait and read the QB — good read.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The RB gets too much depth before you react.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play the ball',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 6, log: 'You attack the ball in the air — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -2 }, { attribute: 'technique', delta: -1, log: 'The RB secures the catch out of the backfield.' }],
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
    title: 'Defensive Check',
    context: 'The offense shifts formation right before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Reorganize the whole defense',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You get everyone lined up right — the whole defense is set.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: -2, log: 'One teammate still ends up out of position despite the check.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Focus on your assignment',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You handle your assignment and everything holds up.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'A teammate elsewhere is left out of position.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Change nothing',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: -1 }, { exposureDelta: -3, log: 'The offense exploits the formation change before anyone adjusts.' }],
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
    title: 'Backed Up to the End Zone',
    context: 'The offense is two yards from the end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Creep down into the box',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'You crash down and get the stop at the goal line.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -4, log: 'You bite down — it\'s PLAY-ACTION at the worst possible time.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay in coverage',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay patient in coverage — the pass falls incomplete.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -5, log: 'The receiver comes free in the end zone — TOUCHDOWN.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play ultra-aggressive',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 6, log: 'You fly in aggressively and blow up the play — HUGE STOP.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -3 }, { attribute: 'technique', delta: -2, log: 'You take a bad angle and open up a lane.' }],
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
    title: 'The QB Takes Off',
    context: 'The QB abandons his read and takes off running.',
    choices: [
      {
        id: 'c1',
        label: 'Close immediately',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 2, log: 'You close fast and bring the QB down — tackle.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'The QB makes you miss and turns the corner.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Hold your angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You keep your angle disciplined — the QB is boxed in.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'The QB picks up a modest gain before you close.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the big hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'You come in looking for the kill shot — BIG HIT.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -1, log: 'The QB slides and avoids the hit at the last second.' }],
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
    title: 'Delayed Blitz',
    context: 'You need to hold coverage before triggering your blitz.',
    choices: [
      {
        id: 'c1',
        label: 'Blitz immediately',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2, log: 'You bring the blitz immediately — PRESSURE.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'The offense had the protection perfectly set for it.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for the RB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 3, log: 'You time your blitz off the RB\'s release — excellent timing.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The QB gets it out before you can arrive.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Bail and stay in coverage',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You bail on the blitz and avoid a bad matchup.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'The coordinator calls you out for hesitating on the call.' }],
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
    title: 'Outside Run',
    context: 'The RB heads for the sideline with multiple blockers in front of him.',
    choices: [
      {
        id: 'c1',
        label: 'Take on the first block',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'You hold your gap and force the RB to bounce it.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'The blocker seals you and springs the RB outside.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Go around the blockers',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take a perfect angle around the blockers.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'You lose your angle trying to avoid the blocks.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for the RB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait him out and force the RB back inside.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The RB turns the corner and gets outside.' }],
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
    title: 'Pre-Snap Motion',
    context: 'A WR moves across the formation before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Follow him',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You match the motion and stay disciplined — good decision.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'Following the motion tips off your coverage to the QB.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Pass him off',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You pass him off cleanly — the rotation works.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -2, log: 'The communication breaks down on the exchange.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Blow up the coverage call',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'You blow up the whole coverage call — the offense is completely thrown off.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: -4, log: 'The last-second change leaves the defense scrambling and disorganized.' }],
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
    title: 'Jump the Route',
    context: 'You think you know exactly where the QB is about to throw.',
    choices: [
      {
        id: 'c1',
        label: 'Jump the route',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'You jump the route on your read — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -1, log: 'You guessed wrong — bad diagnosis, and the route goes elsewhere.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay disciplined',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay disciplined in your zone — perfect coverage.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The catch comes right in front of you anyway.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for confirmation',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You wait for confirmation — smart, patient decision.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'By the time you\'re sure, the interception window is already gone.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'Loose Ball',
    context: 'The RB just lost the ball in a pile of traffic.',
    choices: [
      {
        id: 'c1',
        label: 'Dive on it',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 85,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'You dive on the loose ball — recovery!' }],
          },
          {
            weight: 15,
            effects: [{ attribute: 'physique', delta: -1, log: 'You collide with a pile of bodies fighting for the ball.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Try to return it',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 7, log: 'You scoop the fumble and take off — huge return!' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'You scoop it up for a routine recovery.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -3, log: 'You fumble it right back trying to advance it.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Secure the area',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You seal the area and a teammate scoops up the loose ball.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Nobody ends up in position to cover the loose ball.' }, { attribute: 'mental', delta: -1 }],
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
    title: 'The Surprise Blocker',
    context: 'The WR comes straight at you to block on an outside run.',
    choices: [
      {
        id: 'c1',
        label: 'Take the collision',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'You meet the block head-on and win the collision.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'The block drives you back and out of the play.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Avoid the block',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You slip the block with a clean angle.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'You take too wide a path avoiding the block.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for the RB behind him',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait it out and close the space behind him.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -2, log: 'The RB accelerates through the hole before you can make contact.' }],
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
    title: 'Deep Half',
    context: 'You\'re responsible for a deep half of the field.',
    choices: [
      {
        id: 'c1',
        label: 'Stay deep',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You hold your depth — no big play threatens the defense.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -1, log: 'A short pass underneath is completed without issue.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Jump down on the slot',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'You jump down and stop the short pass immediately.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -5, log: 'The offense hits a deep shot right behind your vacated zone.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Read the QB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You read the QB\'s eyes perfectly — INTERCEPTED or batted away.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'The QB baits you out of position with his eyes.' }],
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
    title: 'Shrinking Window',
    context: 'The offense enters the red zone.',
    choices: [
      {
        id: 'c1',
        label: 'Play very aggressive',
        effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: 6, log: 'You play it aggressive and blow up the play — HUGE STOP.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2, log: 'You bite on the misdirection and get manipulated out of the play.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You read the QB and make the right call.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -5, log: 'The ball finds the end zone right through your zone — TOUCHDOWN.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Protect the end zone',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You get a hand in and contest the catch in the end zone.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'The catch is completed but you limit it to a small, controlled gain.' }],
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
    title: 'Who\'s Got Who?',
    context: 'Two receivers cross their routes and the coverage needs a switch.',
    choices: [
      {
        id: 'c1',
        label: 'Call out the switch',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You call the switch loud and clear — perfect coverage.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: -1, log: 'The call doesn\'t get through clearly.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stick to your assignment',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'You stick to your assignment and it works out.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'Both defenders end up covering the same man.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Improvise',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You improvise on the fly — excellent adaptation.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: -3, log: 'The improvisation creates total confusion in coverage.' }],
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
    title: 'Instant Screen',
    context: 'The WR catches it right behind the line with blockers already set up in front of him.',
    choices: [
      {
        id: 'c1',
        label: 'Trigger immediately',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2, log: 'You crash down immediately — tackle for a short gain.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'You take a bad angle chasing the screen.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the blocks',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You read the blocks and find the right lane.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The WR picks up a ton of yardage behind his blockers.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the big hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'You come in looking for the kill shot — BIG HIT.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1, log: 'The WR sees you coming and slips the hit.' }, { exposureDelta: -1 }],
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
    title: 'The Pump Fake',
    context: 'The QB pump-fakes a deep throw to draw you forward.',
    choices: [
      {
        id: 'c1',
        label: 'Bite',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1, log: 'The throw was real — you guessed right.' }],
          },
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1, log: 'You bite on the pump fake and abandon your zone.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay patient',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay patient — the QB gains nothing off the fake.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'You play it too cautious and give up easy ground.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Fake right back',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You sell your own fake and the QB hesitates.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'He reads your fake and takes advantage of your movement.' }],
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
    title: 'Fourth Down',
    context: '4th down. The offense absolutely has to convert.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the line',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'You attack the line and stuff the run — STOP, TURNOVER ON DOWNS.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'The offense finds the crease and moves the chains.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the QB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 2, log: 'You read the QB perfectly — TURNOVER ON DOWNS.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'The pass is completed and the offense moves the chains.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticipate the short route',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 3, log: 'You jump the short route immediately — instant stop, TURNOVER ON DOWNS.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You guess wrong on the route and the offense converts.' }, { exposureDelta: -3 }],
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
    title: 'Max Tempo',
    context: 'The offense is snapping fast, trying to march quickly down the field.',
    choices: [
      {
        id: 'c1',
        label: 'Play conservative',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You play it conservative and slow the offense\'s rhythm.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The offense exploits the cushion you gave them.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take risks',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'You gamble for the ball — INTERCEPTED!' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'You get there in time to defend the pass.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -3, log: 'The gamble backfires and the offense picks up a huge gain.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Organize the defense',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You get everyone lined up — a well-organized defense.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -1, log: 'The communication breaks down under the tempo.' }],
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
    title: 'Hail Mary',
    context: 'The final snap of the game. Multiple receivers are attacking the end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 8, log: 'You go up and attack the ball at its peak — INTERCEPTED to end it!' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'You get a hand in and bat the ball away.' }, { exposureDelta: 2 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'The receiver comes down with it in the crowd.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the receiver',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'You get physical with the receiver — the pass falls incomplete.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -5, log: 'The receiver climbs the ladder and comes down with it anyway.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Organize the tip drill',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You organize the tip drill — the defense comes down with the ball.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: -1, log: 'The tipped ball turns into total chaos in the end zone.' }, { attribute: 'technique', delta: -1 }],
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
    context: 'A WR just made the catch and is cutting across the middle of the field. You\'re closing in at full speed.',
    choices: [
      {
        id: 'c1',
        label: 'Go for the big hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'You come in looking for the kill shot — ENORMOUS impact.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: -1, log: 'The WR braces and absorbs the contact.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Clean tackle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 2, log: 'You wrap up clean — tackle secured.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'You take a bad angle and miss the tackle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the fumble',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'You go for the strip on the hit — the ball comes loose, FUMBLE!' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 1, log: 'You wrap up and bring him down — clean tackle.' }, { exposureDelta: 2 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The WR ducks the hit and stays on his feet.' }],
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
    context: 'Final drive. The game comes down to this play. You have to decide whether to gamble for the difference-maker or trust the system.',
    choices: [
      {
        id: 'c1',
        label: 'Play the hero',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 8, log: 'You gamble for the game-changing play — INTERCEPTED!' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'You make the HUGE defensive play everyone will remember.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -4 }, { attribute: 'mental', delta: -2, log: 'The gamble doesn\'t pay off — a bad read at the worst time.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Trust the system',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: 2, log: 'You trust the system and the defense gets the stop.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'leadership', delta: 1 }, { exposureDelta: -3, log: 'The offense finds a crack in the system anyway.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Read the QB to the end',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 2 }, { exposureDelta: 4, log: 'You read the QB right to the very end — batted down or INTERCEPTED!' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1, log: 'The QB manipulates your eyes right until the release.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Come downhill to stop the run',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 3, log: 'You come downhill and blow up the run — HUGE STOP.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -5, log: 'You crash down — it\'s PLAY-ACTION, and you\'re completely out of the play.' }],
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
    title: 'Press at the Snap',
    context: 'The WR lines up right across from you. The coordinator wants you to press him at the line.',
    choices: [
      {
        id: 'c1',
        label: 'Jam him immediately',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: 1, log: 'You jam him hard at the line — the WR\'s release is completely disrupted.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'He slips your jam and avoids the contact clean.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for his first move',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You wait for his first move and control the release.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'He wins outside quickly before you can mirror him.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play very aggressive',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5, log: 'You play it ultra-aggressive — HUGE STOP at the line.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -1 }, { attribute: 'technique', delta: -2, log: 'You get too handsy — HOLDING, a bad penalty against the defense.' }],
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
    title: 'The WR Attacks Outside',
    context: 'The WR fires off with a very fast outside release.',
    choices: [
      {
        id: 'c1',
        label: 'Shut the door on him',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You shut the door on the outside release.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'He breaks back inside before you can seal it.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Let him go',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'You recover your position quickly.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'He creates too much separation before you catch up.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Grab the WR',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1, log: 'You grab a handful of jersey — no flag, you get away with it.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You hold on too long — HOLDING, a flag against the defense.' }, { exposureDelta: -3 }],
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
    title: 'He Breaks Inside',
    context: 'The WR attacks straight inside right after the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Seal the inside',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You seal the inside — solid coverage.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'He breaks back outside before you can react.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Give him the inside',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'You recover your leverage quickly.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'The WR gains instant separation on the cut.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticipate the cut',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 6, log: 'You jump the cut before he even makes it — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -1, log: 'You guess wrong and the cut goes the other way.' }, { exposureDelta: -3 }],
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
    context: 'The WR releases deep and the QB can throw it to his back shoulder.',
    choices: [
      {
        id: 'c1',
        label: 'Play the WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You play the WR\'s hands and the pass falls incomplete.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'The WR shields you off and comes down with the back-shoulder catch.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'You track the ball and undercut the throw — INTERCEPTED!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You get there just in time to bat the pass away.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The WR times his hands perfectly and secures the catch.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticipate the comeback',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You anticipate the comeback perfectly — excellent read.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -4, log: 'The WR wins the route battle on the comeback.' }],
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
    context: 'The WR sells a short route before exploding vertically.',
    choices: [
      {
        id: 'c1',
        label: 'Bite on the first route',
        effects: [{ attribute: 'technique', delta: -1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: -1 }, { exposureDelta: -5, log: 'You bite on the double move — the WR blows right past you.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'You recover just enough to stay in the play.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay patient',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay patient through the double move — clean coverage.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The WR finds a short window underneath.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play aggressive on the break',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'You jump the break aggressively — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -3, log: 'You guess wrong and get beat clean on the double move.' }],
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
    title: 'Battle in the Air',
    context: 'The QB launches a deep ball toward your side of the field.',
    choices: [
      {
        id: 'c1',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'You track the deep ball and go up for it — INTERCEPTED!' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2, log: 'You contest at the catch point — the pass falls incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'The WR out-jumps you and comes down with the deep ball.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the WR',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You get physical at the catch point and break it up.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'It\'s a jump-ball situation and the WR comes down with the contested catch.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Secure the tackle',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 1, log: 'You play it safe and limit the catch after the fact.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'The WR turns it into a much bigger gain than expected.' }],
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
    title: 'Press Then Retreat',
    context: 'You need to sell press coverage before backing off immediately after the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Backpedal fast',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 2, log: 'You bail into your zone at full speed — perfect coverage.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'A short route sits down right behind your bail.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for the release',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait for the release and get a clean read.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'You\'re a beat late reacting to the actual release.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Fake a blitz',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You sell the blitz look — the QB is completely thrown off.' }, { exposureDelta: 1 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'Your fake blitz timing is off and doesn\'t fool anyone.' }],
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
    title: 'Quick Slant',
    context: 'The WR breaks inside immediately on a slant.',
    choices: [
      {
        id: 'c1',
        label: 'Cut the trajectory',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'You undercut the slant and bat it away.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'The WR beats you clean on the inside break.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play from behind',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You play it from behind — a short, controlled catch.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'The WR gets way too much separation on the slant.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Jump the route',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 7, log: 'You jump the slant early — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -3 }, { attribute: 'technique', delta: -2, log: 'You guess wrong and the route goes somewhere else entirely.' }],
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
    title: 'Screen to the WR',
    context: 'The WR catches it right behind the line of scrimmage.',
    choices: [
      {
        id: 'c1',
        label: 'Attack immediately',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'You take the right angle and drop the WR right at the catch — a minimal gain, almost erased.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'You come in on a bad angle — real effort, but the WR is already gone.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Read the blocks',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You identify the blocks setting up right away and cut the WR\'s lane off clean.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'Despite your read, the WR finds a crease between two blocks nobody saw coming.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the fumble',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 7, log: 'You rip the ball right out of the WR\'s arms at the point of contact — FORCED FUMBLE! The defense swarms it.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'No fumble, but a clean tackle that limits the damage on the screen.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -2, log: 'Your attempt at the ball fails and the WR shakes off the contact to extend the run.' }],
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
    context: 'You\'re responsible for protecting a deep outside third of the field.',
    choices: [
      {
        id: 'c1',
        label: 'Rester profond',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You hold your deep third — solid coverage.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -1, log: 'A short route underneath is completed without incident.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Drive down on the short WR',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1, log: 'You drive down and stop the short route immediately.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -5, log: 'A deep route hits right behind your vacated zone.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Read the QB',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: 4, log: 'You read the QB perfectly — batted away or INTERCEPTED!' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'You bite on the wrong read and get burned.' }],
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
    title: 'Legal Pick?',
    context: 'Two WRs cross their routes to try to create separation.',
    choices: [
      {
        id: 'c1',
        label: 'Fight over the top',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You fight over the top and stay attached — coverage holds.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -2, log: 'You collide with the other defender in traffic.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Fight underneath',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You fight underneath and recover in time.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'The pick works and your WR comes free.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Force the contact',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1, log: 'You force through the contact — the WR\'s route is disrupted.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You get whistled for it — DEFENSIVE PASS INTERFERENCE.' }, { exposureDelta: -3 }],
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
    title: 'The Safety Has Your Help',
    context: 'The WR releases deep and you need to know how far to carry him before handing off to the safety.',
    choices: [
      {
        id: 'c1',
        label: 'Communicate clearly',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You call it out clearly — the handoff to the safety is seamless.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: -1, log: 'The call gets lost and the handoff isn\'t clean.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep the WR',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You stay on the WR and it works out.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -3, log: 'Another receiver comes free in the vacated zone.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Trust the safety',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You trust the safety and the switch goes off clean.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'The coordination with the safety breaks down completely.' }, { exposureDelta: -4 }],
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
    title: 'Fade to the End Zone',
    context: 'The WR attacks the corner of the end zone.',
    choices: [
      {
        id: 'c1',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 7, log: 'You go up and attack the fade at its highest point — INTERCEPTED!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'You contest the catch and the pass falls incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'The WR shields you off in the corner — TOUCHDOWN.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the WR',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 1, log: 'You get physical with the WR — the pass falls incomplete.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -5, log: 'The WR wins the physical battle in the end zone — TOUCHDOWN.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Take the inside',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You take away the inside and force the tough sideline throw.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'The QB throws to the open outside shoulder.' }],
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
    context: 'The RB has broken through the line and is barreling toward you.',
    choices: [
      {
        id: 'c1',
        label: 'Big hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'You come in looking for the kill shot — HUGE STOP.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'The RB makes you miss in the open field.' }],
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
            effects: [{ attribute: 'technique', delta: 2, log: 'You break down and make a fundamentally sound tackle.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: -1, log: 'You take a bad angle in the open field and miss.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for support',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait for help and the RB is boxed in.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The RB breaks free for a big gain before help arrives.' }],
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
    context: 'The coordinator wants you to blitz off the edge.',
    choices: [
      {
        id: 'c1',
        label: 'Go full speed',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 5, log: 'You come in unblocked off the corner — SACK!' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }, { attribute: 'technique', delta: -1, log: 'The RB picks up the corner blitz and buys the QB time.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for the perfect snap',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You time the snap perfectly — PRESSURE.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The QB gets the ball out before you arrive.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Fake the blitz',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2, log: 'You sell the fake blitz — the protection is completely disorganized.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The QB identifies the fake blitz for what it is.' }],
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
    context: 'The WR runs an out route toward the sideline.',
    choices: [
      {
        id: 'c1',
        label: 'Anticipate the break',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You jump the out route before he breaks — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'You jump too early and mistime the break.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay attached through the break',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'You stay attached through the break — solid coverage.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -1, log: 'The WR breaks off his route quicker than expected.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Play over the top',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1, log: 'You play over the top and take away anything deep.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'The short out route is completed underneath you.' }],
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
    title: 'He Comes Back to the Ball',
    context: 'The WR attacks vertically then breaks sharply back toward the QB.',
    choices: [
      {
        id: 'c1',
        label: 'Anticipate the comeback',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 5, log: 'You jump the comeback before it happens — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'The WR sells the vertical and surprises you coming back.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay behind',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You stay behind and mirror the double move — solid coverage.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'The comeback route is completed in front of you.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Press the WR',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 1, log: 'You press through the route and disrupt his timing.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1 }, { exposureDelta: -2, log: 'You get too physical — a flag against the defense.' }, { attribute: 'technique', delta: -1 }],
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
    title: 'Option Route',
    context: 'The WR reads his route off your leverage.',
    choices: [
      {
        id: 'c1',
        label: 'Give him the outside',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'You give him the outside and control the leverage.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'He reads your leverage and cuts inside.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take away the inside',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take away the inside and force the route toward the sideline.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'The WR wins outside before you can react.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticipate his choice',
        effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: 7, log: 'You guess his route perfectly — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -2, log: 'You guess the wrong route entirely.' }],
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
    title: 'The QB Leaves the Pocket',
    context: 'The QB starts running toward your side.',
    choices: [
      {
        id: 'c1',
        label: 'Keep covering',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 2, log: 'You stay on your man and force the QB to keep running.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -3, log: 'The QB picks up a big chunk of yardage on the scramble.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Abandon the WR and attack',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 2, log: 'You abandon coverage and close the distance — tackle.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -4, log: 'The QB makes you miss in the open field.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Contain the QB',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 2, log: 'You keep your leverage — the QB is boxed in.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The QB breaks contain for a big scramble.' }],
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
    title: 'The Physical Battle',
    context: 'The WR is much more physical than you and looks for contact on every route.',
    choices: [
      {
        id: 'c1',
        label: 'Match the physicality',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'physique', delta: 2, log: 'You match his physicality and win the leverage battle.' }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'physique', delta: 1, log: 'He overpowers you and creates space with sheer strength.' }, { exposureDelta: -2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play with your feet',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You use footwork to sidestep the physical battle entirely.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'The WR\'s size wins out regardless of your footwork.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Trash talk him',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 1, log: 'You get in his head — he loses his composure.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: -2 }, { attribute: 'mental', delta: -1, log: 'The trash talk backfires — UNSPORTSMANLIKE CONDUCT against you.' }],
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
    context: 'The offense is playing without a huddle, snapping the ball rapid-fire.',
    choices: [
      {
        id: 'c1',
        label: 'Play conservative',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You play it conservative — the defense holds steady.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The tempo catches the defense off guard for a big gain.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Take risks',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 7, log: 'You gamble against the no-huddle pace — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: -3, log: 'The tempo forces a coverage error.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Organize the DBs',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You get everyone on the same page — perfect communication.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: -1, log: 'The fast pace leaves the secondary in confusion.' }],
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
    title: 'Inside Switch',
    context: 'Two inside receivers cross their routes.',
    choices: [
      {
        id: 'c1',
        label: 'Communicate with the safety',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You communicate the switch with the safety — clean coverage.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: -3, log: 'The call doesn\'t get through in time.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stick with your WR',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2, log: 'You stick with your original man through the switch.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: -1, log: 'You collide with a teammate crossing paths.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Anticipate the switch',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: 4, log: 'You anticipate the switch before it happens — INTERCEPTED!' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'You jump the switch a beat too early.' }],
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
    title: 'Final Window',
    context: '3rd & Goal. The WR is isolated on you.',
    choices: [
      {
        id: 'c1',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 8, log: 'You go up and attack the ball at the goal line — INTERCEPTED!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'You contest the catch in the end zone — pass falls incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'The WR wins the jump ball in the corner — TOUCHDOWN.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Use your body',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2, log: 'You use your body to shield the catch — reception denied.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'You get too physical too early — DEFENSIVE PASS INTERFERENCE.' }, { exposureDelta: -4 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Force the WR toward the sideline',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You force him toward the sideline — the window shrinks.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -5, log: 'The WR cuts back inside and finds room.' }],
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
    title: 'The Returner Breaks Free',
    context: 'On a punt, the returner finds a lane and starts to accelerate.',
    choices: [
      {
        id: 'c1',
        label: 'Take the angle',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'You take the right angle and contain the return.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -2, log: 'The returner breaks your angle with a cut.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Go for the big hit',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 4, log: 'You lower the boom — big tackle on the return.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'The returner makes you miss in the open field.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Wait for support',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 2, log: 'You wait for help and the return is contained.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -4, log: 'The returner breaks free for a huge return.' }],
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
    title: 'The Floating Ball',
    context: 'The QB lofts a floating pass toward your side.',
    choices: [
      {
        id: 'c1',
        label: 'Attack the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 8, log: 'You attack the floater aggressively — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -2, log: 'You misjudge the flight of the ball — incomplete pass or a completed catch, depending on the bounce.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the WR',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You play the WR and the pass falls incomplete.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -3, log: 'The WR adjusts to the floater and secures the catch.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Secure the tackle',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'technique', delta: 1, log: 'You play it safe and limit the gain.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'The WR turns it into a much bigger gain than expected.' }],
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
    title: 'One on One',
    context: 'Final drive. You\'re isolated in man coverage on the opponent\'s best WR.',
    choices: [
      {
        id: 'c1',
        label: 'Press aggressive',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 6, log: 'You jam him hard — the WR is totally neutralized at the line.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: -3, log: 'The WR fights through the press and wins his release.' }],
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
            effects: [{ attribute: 'mental', delta: 2, log: 'You play off and keep everything in front of you.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -3, log: 'The cushion gives up an easy underneath completion.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Try to read the QB',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 6, log: 'You read the QB\'s eyes on the crucial drive — INTERCEPTED!' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -4, log: 'You peek at the QB and drift slightly off your assignment.' }],
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
    title: 'The Yellow Flag',
    context: 'You just made big contact on a WR. The referee is hesitating on whether to throw the flag.',
    choices: [
      {
        id: 'c1',
        label: 'Contest calmly',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You stay composed and contest it calmly — no flag, no consequence.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'The referee holds his call regardless.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep arguing',
        effects: [{ attribute: 'leadership', delta: -1 }, { exposureDelta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: -1, log: 'You get the referee to explain the call.' }, { exposureDelta: 1 }],
          },
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: -1 }, { exposureDelta: -1, log: 'You just annoy the referee further.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Move on to the next play',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'You flush it and move on to the next play immediately.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -2, log: 'The incident keeps rattling you on the next snap.' }],
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
    title: 'Facing the Best',
    context: 'The opponent\'s best receiver has been lined up across from you for several drives.',
    choices: [
      {
        id: 'c1',
        label: 'Play him physical',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2, log: 'You play him physical and win the leverage battle.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'He wins the physical matchup this time.' }, { exposureDelta: -3 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Study his tendencies',
        effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You study his tendencies and anticipate his routes better.' }, { attribute: 'technique', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'He varies his route tree specifically to counter your scouting.' }, { attribute: 'technique', delta: -1 }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go for the interception',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 8, log: 'You gamble for the pick against the WR1 — INTERCEPTED!' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -3, log: 'He exploits your aggressiveness with a double move.' }],
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
    context: 'After a motion, the defense looks disorganized right before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Reset everyone',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 3, log: 'You get the defense perfectly reset just in time.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Too many late changes leave the defense scrambling.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Focus only on your assignment',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'technique', delta: 1, log: 'You lock in on your assignment and win your one-on-one.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 1 }, { exposureDelta: -4, log: 'Another defender is left lost in the shuffle.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Improvise',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You improvise on the fly — excellent adaptation.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'The improvisation turns into a major collective breakdown.' }, { exposureDelta: -4 }],
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
    context: 'The final play of the game. A single duel between you and the WR could decide the outcome.',
    choices: [
      {
        id: 'c1',
        label: 'Play the ball',
        effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: 9, log: 'You go up and rip the ball away — INTERCEPTED to end it!' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2, log: 'You contest the catch — the pass falls incomplete.' }, { exposureDelta: 2 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 2 }, { exposureDelta: -5, log: 'The WR wins the final battle and comes down with the catch.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Play the WR',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 1, log: 'You lock him down — clean coverage when it matters most.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { exposureDelta: -5, log: 'The WR gets the better of you on the biggest play of the game.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Trust the safety',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You trust the safety and the coverage is perfectly coordinated.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -5, log: 'The communication with the safety breaks down at the worst time.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Take the risk on the route',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ exposureDelta: 10, log: 'You gamble everything on the route — INTERCEPTED to win it!' }],
          },
          {
            weight: 75,
            effects: [{ exposureDelta: -3 }, { attribute: 'technique', delta: -2, log: 'The gamble doesn\'t pay off — you guess the wrong route entirely.' }],
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
    title: 'Friday Night Party',
    context: 'After a big win, your friends throw a party. You\'ve got early practice tomorrow.',
    choices: [
      {
        id: 'c1',
        label: 'Go anyway',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1, log: 'The party is a blast — between the laughs and the music, you recharge before the grind starts again.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2 }, { attribute: 'physique', delta: -2, log: 'You get home late and the wake-up is brutal — the next day\'s practice happens on dead legs.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay home',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: -1, log: 'A quiet night at home, but the group notices your absence and lets you know about it come Monday.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stop by briefly',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 1, log: 'You stop in to say hi, enjoy the vibe for an hour, then head out before things get out of hand.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -1, log: 'A friend teases you about it: "you never stay at these things more than an hour."' }],
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
    title: 'Invited Into the Group',
    context: 'The most popular kids at school start folding you into their circle.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 65,
            effects: [{ exposureDelta: 3, log: 'The group welcomes you without reservation and your popularity spikes overnight in the school hallways.' }],
          },
          {
            weight: 35,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'Your popularity climbs, but you get dragged into drama that had nothing to do with you.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay with your friends',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You choose to stay loyal to your usual circle — nothing changes, and that\'s fine by you.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'You stay with your longtime friends, but you know an opportunity like that won\'t come around again soon.' }],
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
    title: 'Your First Real Relationship',
    context: 'Someone starts to become an important part of your life.',
    choices: [
      {
        id: 'c1',
        label: 'Invest fully',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2, log: 'The relationship turns out rock solid despite the time you pour into it.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -1, log: 'The relationship ends, and the breakup hits harder than expected.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep a balance',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: 1, log: 'You keep things balanced — a healthy relationship.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -1, log: 'The balance turns out more fragile than you thought.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Prioritize football',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'You put football first, and somehow the relationship survives.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'You put football first — and it costs you the relationship.' }, { exposureDelta: -1 }],
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
    title: 'Your First Video Goes Viral',
    context: 'A video of you is spreading fast across social media.',
    choices: [
      {
        id: 'c1',
        label: 'Ride the buzz',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 4, log: 'You lean into the moment and it builds a positive public image.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The attention spirals into an unexpected controversy.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Do nothing',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'You stay quiet and the buzz fades away quickly.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Screenshots keep resurfacing long after you thought it was over.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Post more',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 3, log: 'You lean all the way in and your following explodes.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'The extra exposure invites more criticism than you expected.' }],
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
    title: 'The Rival',
    context: 'Another player at your school becomes your rival, on and off the field.',
    choices: [
      {
        id: 'c1',
        label: 'Lean into it',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You lean into the rivalry — it stays competitive and healthy.' }, { exposureDelta: 2 }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'The rivalry boils over into real conflict.' }, { exposureDelta: 2 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ignore him',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'You ignore him and the tension fizzles out.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'He keeps trying to provoke you regardless.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Confront him',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'The confrontation clears the air — mutual respect follows.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'The confrontation only makes things worse.' }],
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
    context: 'The big high school dance is coming up.',
    choices: [
      {
        id: 'c1',
        label: 'Go with your friends',
        effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1, log: 'You dance the night away with your crew — a blast, though your legs feel it the next morning.' }],
      },
      {
        id: 'c2',
        label: 'Go with your date',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 2, log: 'It turns into a night you\'ll both remember.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'A little tension creeps into the evening.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Skip it',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'You end up regretting missing it.' }],
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
    title: 'Your Best Friend Turns on You',
    context: 'A serious fight breaks out with your best friend.',
    choices: [
      {
        id: 'c1',
        label: 'Make the first move',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You reach out first, and it leads to reconciliation.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: -1, log: 'He turns down your attempt to make things right.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Wait for him to come around',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'Eventually, things patch themselves up on their own.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -3, log: 'The silence stretches into a lasting rift.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Cut ties',
        effects: [{ attribute: 'mental', delta: -2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -2, log: 'You own the decision and move forward without looking back.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -4, log: 'You come to regret cutting him off.' }],
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
    title: 'Report Card Trouble',
    context: 'Between football and your social life, your grades are starting to slip.',
    choices: [
      {
        id: 'c1',
        label: 'Hit the books harder',
        effects: [{ attribute: 'mental', delta: 2, log: 'You buckle down and pull your grades back up.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Ask for help',
        effects: [{ attribute: 'mental', delta: 1, log: 'A tutor helps you get back on track.' }, { attribute: 'leadership', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Let it slide',
        effects: [{ attribute: 'mental', delta: -2 }, { exposureDelta: -1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'mental', delta: -2, log: 'You pull it together at the last possible moment.' }, { exposureDelta: -1 }],
          },
          {
            weight: 75,
            effects: [{ attribute: 'mental', delta: -2, log: 'Your academic problems keep piling up.' }, { exposureDelta: -1 }],
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
    title: 'A Rumor Starts Circulating',
    context: 'A rumor about you starts making the rounds.',
    choices: [
      {
        id: 'c1',
        label: 'Respond publicly',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'You get ahead of it and control the narrative.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Responding only fuels the controversy further.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ignore it',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'You ignore it, and the rumor fades away on its own.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'It keeps circulating regardless.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Confront whoever started it',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You confront the source directly and it gets resolved.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: -2, log: 'The confrontation escalates into real conflict.' }],
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
    title: 'The Model Player',
    context: 'Your coach holds you up as an example for the other students.',
    choices: [
      {
        id: 'c1',
        label: 'Lean into the status',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2, log: 'You genuinely inspire the people around you.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Some teammates think it\'s gone to your head.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep a low profile',
        effects: [{ attribute: 'mental', delta: 2, log: 'You let your play do the talking instead.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Motivate the others',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You take the lead and push the whole group to work harder.' }, { attribute: 'physique', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-191',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE'],
    emoji: '💰',
    title: 'Your First Sponsor',
    context: 'A local business wants to attach its brand to yours.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 3, log: 'It turns out to be a smart move for your image.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: -1, log: 'You end up looking like a sellout to some fans.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Decline',
        effects: [{ attribute: 'mental', delta: 1, log: 'You stay independent and keep your image your own.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Negotiate',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You negotiate and land a better deal.' }, { exposureDelta: 2 }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: -2, log: 'The company walks away from the table entirely.' }, { exposureDelta: -2 }],
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
    title: 'The Last Day',
    context: 'Your high school journey is coming to an end.',
    choices: [
      {
        id: 'c1',
        label: 'Give a speech',
        effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1, log: 'The speech comes out a little awkward, but you get through it.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Spend it with your close friends',
        effects: [{ attribute: 'mental', delta: 3, log: 'You savor the moment with the people who matter most.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Already thinking about college',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'While everyone else celebrates, you\'re already mapping out the next level.' }, { exposureDelta: -1 }],
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
    title: 'Fresh Start',
    context: 'You arrive on a campus where nobody knows you.',
    choices: [
      {
        id: 'c1',
        label: 'Meet everyone you can',
        effects: [{ exposureDelta: 3, log: 'You make the rounds and your name quickly becomes familiar around campus.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stick with the players',
        effects: [{ attribute: 'leadership', delta: 1, log: 'You bond fast with your teammates and settle into the group with ease.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Keep to yourself',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You settle in and adapt well to the new environment.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'You end up feeling isolated on the new campus.' }],
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
    title: 'New Roommate',
    context: 'You have to share your place with another student.',
    choices: [
      {
        id: 'c1',
        label: 'Get close',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 20,
            effects: [{ log: 'It escalates into a serious falling-out.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep your distance',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'You keep things civil but distant, and it costs you a little respect in the room.' }],
      },
      {
        id: 'c3',
        label: 'Set ground rules from day one',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'He thinks you\'re being way too controlling about it.' }],
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
    context: 'A massive student party is going down.',
    choices: [
      {
        id: 'c1',
        label: 'Go',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 3, log: 'It turns into a great night.' }],
          },
          {
            weight: 30,
            effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'You deal with the consequences the next day.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Make a quick appearance',
        effects: [{ exposureDelta: 1, log: 'You stop by just long enough to be seen before slipping out early.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Skip it',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1, log: 'You stay in and wake up rested while everyone else nurses a hangover.' }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-196',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '📞',
    title: 'Long-Distance Relationship',
    context: 'Your relationship is getting serious just as your schedule gets more packed.',
    choices: [
      {
        id: 'c1',
        label: 'Make the relationship a priority',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { attribute: 'technique', delta: -1, log: 'Balancing it with everything else proves genuinely difficult.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Find a balance',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1, log: 'You manage to juggle both, and it keeps you grounded.' }],
      },
      {
        id: 'c3',
        label: 'Prioritize your career',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2, log: 'Somehow, the relationship survives the distance.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -3, log: 'The distance and your priorities end the relationship.' }],
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
    title: 'Everybody Knows Your Name',
    context: 'Your face is becoming recognizable all over campus.',
    choices: [
      {
        id: 'c1',
        label: 'Enjoy the fame',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 4 }, { attribute: 'mental', delta: -2, log: 'The attention starts going to your head.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep a level head',
        effects: [{ attribute: 'mental', delta: 2, log: 'You stay grounded and let the noise pass you by.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Use your influence',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You start rallying people around you, and the added pressure wears on you.' }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-198',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    emoji: '🤝',
    title: 'A Helping Hand',
    context: 'A fellow student asks for your help when you\'re already buried in work.',
    choices: [
      {
        id: 'c1',
        label: 'Help him out',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You make time for him anyway, and it doesn\'t go unnoticed.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Politely decline',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'You protect your own workload, but word gets around that you turned him down.' }],
      },
      {
        id: 'c3',
        label: 'Promise and then forget',
        effects: [{ attribute: 'leadership', delta: -2, log: 'You never follow through, and he doesn\'t forget it.' }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-199',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE'],
    emoji: '🎙️',
    title: 'The Campus Paper',
    context: 'The student newspaper wants to interview you.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 3, log: 'The interview goes great.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -1, log: 'One quote gets taken out of context.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Decline',
        effects: [{ attribute: 'mental', delta: 1, log: 'You pass on the interview and keep your focus on the field.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Only talk about football',
        effects: [{ exposureDelta: 2, log: 'You steer every question back to the game, and the strict script wears on you a little.' }, { attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-200',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔀',
    title: 'New Company',
    context: 'Your circle starts to shift along with your success.',
    choices: [
      {
        id: 'c1',
        label: 'Fall in with the new crowd',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'The new circle opens doors you wouldn\'t have found otherwise.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The new crowd turns out to be a bad influence.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep your old friends',
        effects: [{ attribute: 'mental', delta: 2, log: 'You stay loyal to the people who knew you before any of this.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Keep both circles',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You manage to balance both worlds.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1, log: 'Keeping both circles creates friction.' }],
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
    title: 'Representing the Team',
    context: 'The program asks you to represent the team at a university event.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You represent the program well, though the appearance eats into your rest.' }, { exposureDelta: 2 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Decline to rest up',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'The staff sees it as a lack of commitment to the program.' }],
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
    title: 'National Media',
    context: 'For the first time, a national network wants to interview you.',
    choices: [
      {
        id: 'c1',
        label: 'Play it humble',
        effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: 2, log: 'You deflect the credit to your teammates, and some read it as a lack of command.' }, { attribute: 'leadership', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Own your ambitions',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 4, log: 'It projects a strong, confident image.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -2, log: 'Some see it as arrogance.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Answer very cautiously',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -1, log: 'The interview comes across flat and forgettable.' }],
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
    title: 'Too Many Notifications',
    context: 'You get hundreds of messages after your performances.',
    choices: [
      {
        id: 'c1',
        label: 'Read all of them',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 2, log: 'It fuels your motivation.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The criticism gets under your skin.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Turn off notifications',
        effects: [{ attribute: 'mental', delta: 2, log: 'You silence your phone and the noise stops getting to you.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Hand your accounts to someone else',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1, log: 'You let someone else manage the noise, and it takes a weight off your shoulders.' }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-204',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧓',
    title: 'A Former Player Reaches Out',
    context: 'A former player from the program offers to mentor you.',
    choices: [
      {
        id: 'c1',
        label: 'Take his advice',
        effects: [{ attribute: 'mental', delta: 2, log: 'You take his advice to heart, even if it means adjusting your own technique.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Forge your own path',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'You end up regretting not taking his advice.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Build a real relationship',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You invest real time in the relationship, and it pays off in ways that matter.' }, { exposureDelta: 1 }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-205',
    theme: 'VIE_SOCIALE',
    acts: ['COLLEGE', 'PRO'],
    emoji: '⚠️',
    title: 'Bad Company',
    context: 'Someone close to you gets caught up in an embarrassing story.',
    choices: [
      {
        id: 'c1',
        label: 'Defend him',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2, log: 'He appreciates you standing by him.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: -3, log: 'Your image gets tied to the whole affair.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Distance yourself',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You protect your image by staying clear of it.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'The friendship doesn\'t survive the distance you put between you.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Help him quietly',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You quietly help him out of it, no headlines needed.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-206',
    theme: 'VIE_SOCIALE',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '❤️',
    title: 'Charity Work',
    context: 'A charity invites you to take part in an event for kids.',
    choices: [
      {
        id: 'c1',
        label: 'Take part',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You show up for the kids and it means a lot to everyone involved.' }, { exposureDelta: 2 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Take part without publicizing it',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You quietly give your time, no cameras, no headlines.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Decline',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'You come to realize it was a missed opportunity.' }],
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
    title: 'Everyone Wants a Photo',
    context: 'You\'re mobbed by fans while just trying to get off campus.',
    choices: [
      {
        id: 'c1',
        label: 'Take the time',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 3 }, { attribute: 'mental', delta: -1, log: 'The crowd grows bigger than you can manage.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Politely decline',
        effects: [{ attribute: 'mental', delta: 1, log: 'You apologize and keep moving, and most people understand.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Leave immediately',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'A few fans take it personally.' }],
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
    title: 'Transfer Rumors',
    context: 'Recruiters from other programs are feeling things out before the transfer portal officially opens.',
    choices: [
      {
        id: 'c1',
        label: 'Listen to the overtures',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 2, log: 'Word gets around and it works in your favor.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The locker room doesn\'t take kindly to the rumors.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Reaffirm your loyalty to the program',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'Some observers read it as a lack of ambition.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Leave the door open',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1, log: 'Staying ambiguous actually works out.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'The uncertainty makes things worse.' }],
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
    title: 'A Rep Reaches Out',
    context: 'Someone claims they can help you manage your image and your opportunities.',
    choices: [
      {
        id: 'c1',
        label: 'Trust him',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 3, log: 'It turns into a solid working relationship.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -2, log: 'He mismanages things behind your back.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Check everything first',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'mental', delta: 2, log: 'The due diligence saves you from a bad decision.' }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'mental', delta: -2, log: 'You let an opportunity slip by while you were checking things out.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Decline',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'You end up missing out on the opportunity entirely.' }],
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
    title: 'Important Dinner',
    context: 'People who matter for your future are at a dinner you\'re attending.',
    choices: [
      {
        id: 'c1',
        label: 'Be very sociable',
        effects: [{ exposureDelta: 3, log: 'You work the room all night, and everyone remembers you for it.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stay professional',
        effects: [{ attribute: 'mental', delta: 2, log: 'You keep things buttoned-up and businesslike all evening.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Show your personality',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 65,
            effects: [{ exposureDelta: 2, log: 'They appreciate you being yourself.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: -1, log: 'They find you a bit too confident for the room.' }],
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
    title: 'Welcome to the Pros',
    context: 'You arrive in a new city and nobody knows who you are yet.',
    choices: [
      {
        id: 'c1',
        label: 'Explore the city',
        effects: [{ exposureDelta: 2, log: 'You spend your free time getting to know your new city.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stick with the team',
        effects: [{ attribute: 'leadership', delta: 1, log: 'You lean on your new teammates to find your footing.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Stay in',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'The isolation starts to weigh on you.' }],
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
    title: 'The First Big Check',
    context: 'You finally sign a contract that completely changes your standard of living.',
    choices: [
      {
        id: 'c1',
        label: 'Spend right away',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The spending spirals out of control fast.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Invest it',
        effects: [{ attribute: 'mental', delta: 2, log: 'You put the money to work instead of spending it.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Spoil your family',
        effects: [{ attribute: 'mental', delta: 3, log: 'You take care of your family first, and it feels like the right call.' }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-213',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🏡',
    title: 'The New House',
    context: 'You can finally buy the house you\'ve always dreamed of.',
    choices: [
      {
        id: 'c1',
        label: 'Go big',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The upkeep costs turn out to be way more than you planned for.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Buy something reasonable',
        effects: [{ attribute: 'mental', delta: 2, log: 'You buy something comfortable but sensible, and sleep easy at night.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Invest instead of spending',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1, log: 'You put the money toward your future instead of a house.' }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-214',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💸',
    title: 'Everyone Wants Something',
    context: 'Ever since you started making real money, the requests for cash keep piling up.',
    choices: [
      {
        id: 'c1',
        label: 'Say yes',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'It feels good to help people out.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -2, log: 'People start taking advantage of your generosity.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Set boundaries',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You draw a clear line, and people respect it.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Cut everyone off',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'Cutting ties brings real relief.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -3, log: 'The isolation hits harder than you expected.' }],
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
    title: 'Recognized Everywhere',
    context: 'You can\'t go out anymore without being recognized.',
    choices: [
      {
        id: 'c1',
        label: 'Embrace the fame',
        effects: [{ exposureDelta: 4, log: 'You lean into the attention and let people come up to you.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Protect your privacy',
        effects: [{ attribute: 'mental', delta: 2, log: 'You guard your personal space and it keeps you sane.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Leverage your fame',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 3 }, { attribute: 'mental', delta: -2, log: 'The constant exposure starts to wear on you.' }],
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
    title: 'The Controversy',
    context: 'A story about your personal life makes headlines.',
    choices: [
      {
        id: 'c1',
        label: 'Issue a statement',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 2, log: 'You get ahead of the story and control the narrative.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -3, log: 'The statement sparks a whole new controversy.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Say nothing',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Staying silent lets the controversy die down.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -4, log: 'The silence only lets it grow bigger.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Go after the media',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ exposureDelta: 2, log: 'Your fans love you fighting back.' }],
          },
          {
            weight: 70,
            effects: [{ exposureDelta: -1 }, { attribute: 'mental', delta: -2, log: 'Attacking the media only makes things worse.' }],
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
    title: 'Fan Favorite',
    context: 'Fans are starting to see you as one of the faces of the franchise.',
    choices: [
      {
        id: 'c1',
        label: 'Engage with them',
        effects: [{ exposureDelta: 3, log: 'You make time for the fans, and it builds real goodwill.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stay low-key',
        effects: [{ attribute: 'mental', delta: 2, log: 'You keep a low profile and let your play speak for itself.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Go all-in on social media',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 4 }, { attribute: 'mental', delta: -2, log: 'The heavy social media presence draws real criticism.' }],
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
    title: 'Brothers in Arms',
    context: 'A tight bond forms with a teammate.',
    choices: [
      {
        id: 'c1',
        label: 'Share everything',
        effects: [{ attribute: 'mental', delta: 2, log: 'You open up completely, and the friendship deepens fast.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Keep some distance',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'You keep him at arm\'s length, and it shows in how the group sees you.' }],
      },
      {
        id: 'c3',
        label: 'Become inseparable',
        effects: [{ attribute: 'mental', delta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ log: 'The closeness plants the seeds of a future conflict.' }],
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
    title: 'Tensions Boil Over',
    context: 'A personal dispute breaks out with another player.',
    choices: [
      {
        id: 'c1',
        label: 'Settle it privately',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'The private conversation defuses the tension — you shake hands and move on.' }, { attribute: 'leadership', delta: 1 }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'The talk doesn\'t fully clear the air, and the awkwardness lingers in the locker room.' }, { attribute: 'leadership', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Respond publicly',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 70,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Your public response pours gasoline on the fire — the media grabs the story and the conflict escalates.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Ignore it',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'You let it go without reacting. Within a few days, everyone\'s already forgotten about it.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Your silence is read as a lack of backbone — the tension keeps simmering under the surface.' }],
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
    title: 'Your Professional Circle',
    context: 'Your agent wants to manage a large part of your public image.',
    choices: [
      {
        id: 'c1',
        label: 'Let him handle it',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1, log: 'It turns out to be very effective.' }],
          },
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'Your image starts feeling overly controlled and scripted.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Control everything yourself',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -2, log: 'Managing it all yourself becomes overwhelming.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Find a balance',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You split the load with your agent and keep enough control for yourself.' }, { attribute: 'mental', delta: 1 }, { exposureDelta: -1 }],
      },
    ],
  },
  {
    id: 'scn-221',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '📺',
    title: 'Your Face on Every Screen',
    context: 'A major brand offers you a national campaign.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ exposureDelta: 5 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 5, log: 'The campaign is a massive success.' }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -2, log: 'The campaign doesn\'t land well with the public.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Decline',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1 }, { exposureDelta: -2, log: 'You end up regretting turning it down.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Negotiate to protect your image',
        effects: [{ attribute: 'leadership', delta: 2 }, { exposureDelta: 3, log: 'You negotiate terms that fit your image, and the campaign reflects who you are.' }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-222',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '📷',
    title: 'No Privacy Left',
    context: 'Photographers start following your every move.',
    choices: [
      {
        id: 'c1',
        label: 'Ignore them',
        effects: [{ attribute: 'mental', delta: 2, log: 'You tune out the cameras and go about your day.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c2',
        label: 'Talk to them',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 60,
            effects: [{ exposureDelta: 2, log: 'It ends up being a decent working relationship.' }],
          },
          {
            weight: 40,
            effects: [{ exposureDelta: -1, log: 'Your words get twisted out of context.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'React aggressively',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'The confrontation actually makes them back off.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: -1 }, { exposureDelta: -4, log: 'The video of the blow-up goes viral everywhere.' }],
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
    title: 'Giving Back',
    context: 'You want to use your success to help your community.',
    choices: [
      {
        id: 'c1',
        label: 'Start a foundation',
        effects: [{ attribute: 'leadership', delta: 4, log: 'You launch your own foundation, and the community takes notice.' }, { exposureDelta: 2 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Give anonymously',
        effects: [{ attribute: 'mental', delta: 3, log: 'You give quietly, with no name attached, and it feels more meaningful that way.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Organize events',
        effects: [{ attribute: 'leadership', delta: 3 }, { exposureDelta: 3 }],
        variants: [
          {
            weight: 80,
            effects: [{ attribute: 'leadership', delta: 3, log: 'The event turns out to be a huge success.' }, { exposureDelta: 3 }],
          },
          {
            weight: 20,
            effects: [{ attribute: 'leadership', delta: -2, log: 'The organization falls apart at the last minute.' }],
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
    title: 'The Beat Reporters Know You',
    context: 'A few journalists start following you regularly.',
    choices: [
      {
        id: 'c1',
        label: 'Talk to them regularly',
        effects: [{ exposureDelta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ log: 'One of those relationships eventually turns on you.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Only speak at press conferences',
        effects: [{ attribute: 'mental', delta: 1, log: 'You keep it strictly professional and stick to press conferences only.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Give them nothing',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 2 }, { exposureDelta: -2, log: 'They start writing more critical pieces about you.' }],
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
    title: 'A New Chapter',
    context: 'Your personal life is taking a new direction.',
    choices: [
      {
        id: 'c1',
        label: 'Throw a big ceremony',
        effects: [{ exposureDelta: 3 }, { attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ exposureDelta: 3, log: 'It turns into a magnificent, widely celebrated ceremony.' }, { attribute: 'mental', delta: 2 }],
          },
          {
            weight: 25,
            effects: [{ exposureDelta: -2, log: 'The media attention brings a wave of pressure.' }, { attribute: 'mental', delta: -1 }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep it very private',
        effects: [{ attribute: 'mental', delta: 3, log: 'You keep the moment just for the people who matter most.' }, { exposureDelta: -1 }],
      },
      {
        id: 'c3',
        label: 'Get the fans involved',
        effects: [{ exposureDelta: 4 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 4 }, { attribute: 'mental', delta: -2, log: 'It ends up being way more exposure than you bargained for.' }],
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
    title: 'A New Responsibility',
    context: 'Your personal life is changing completely.',
    choices: [
      {
        id: 'c1',
        label: 'Reorganize everything around family',
        effects: [{ attribute: 'mental', delta: 3 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 3 }, { attribute: 'physique', delta: -2, log: 'The reorganization leaves you seriously worn out.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Keep up your professional pace',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'technique', delta: 1, log: 'You manage to keep it balanced.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'The dual demands leave you exhausted.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Find a balance',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 2, log: 'You find a rhythm between family and football that actually works.' }, { attribute: 'technique', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-227',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '💰',
    title: 'Everyone Is Counting on You',
    context: 'Part of your circle now depends on your income.',
    choices: [
      {
        id: 'c1',
        label: 'Take care of everyone',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2, log: 'It feels good being the one everyone can rely on.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -3, log: 'The weight of everyone\'s expectations becomes enormous.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Set boundaries',
        effects: [{ attribute: 'mental', delta: 2, log: 'You set clear limits, even if it disappoints a few people.' }, { attribute: 'leadership', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Delegate the management',
        effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1, log: 'The delegation doesn\'t go as smoothly as hoped.' }],
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
    title: 'A Family Under Strain',
    context: 'Someone close to you is going through a tough family situation and is counting on you.',
    choices: [
      {
        id: 'c1',
        label: 'Be there for them fully',
        effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -1, log: 'Being there for everyone starts to wear you down.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Help financially',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'The financial help creates an unhealthy dependency.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Keep your distance',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -1, log: 'You protect your own balance by keeping distance.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: -3, log: 'You come to regret not being there.' }],
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
    title: 'Life After Football?',
    context: 'You start seriously thinking about your life after football.',
    choices: [
      {
        id: 'c1',
        label: 'Prepare a career transition',
        effects: [{ attribute: 'mental', delta: 2, log: 'You start laying the groundwork for life after football.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Enjoy the present a bit longer',
        effects: [{ attribute: 'mental', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: -1, log: 'You end up regretting not having prepared anything.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Start becoming a mentor',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You start passing on what you know to younger players.' }, { exposureDelta: 1 }, { attribute: 'physique', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-230',
    theme: 'VIE_SOCIALE',
    acts: ['PRO'],
    emoji: '🏁',
    title: 'Life After the BFL',
    context: 'After years of pro football, you have to decide who you want to be off the field.',
    choices: [
      {
        id: 'c1',
        label: 'Become a coach',
        effects: [{ attribute: 'leadership', delta: 4, log: 'You step onto the sideline as a coach, ready to shape the next generation.' }, { attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Become an entrepreneur',
        effects: [{ attribute: 'leadership', delta: 3 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 3 }, { attribute: 'mental', delta: -2, log: 'The first venture turns out to be a rocky start.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Become a media personality',
        effects: [{ exposureDelta: 5 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 5 }, { attribute: 'mental', delta: -2, log: 'The constant spotlight becomes overwhelming.' }],
          },
        ],
      },
      {
        id: 'c4',
        label: 'Step out of the spotlight',
        effects: [{ attribute: 'mental', delta: 4 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -2, log: 'Stepping away leaves an unexpected feeling of emptiness.' }],
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
    title: 'The Playbook Keeps Growing',
    context: 'The coach installs several new formations and you need to learn your role fast.',
    choices: [
      {
        id: 'c1',
        label: 'Learn it all right away',
        effects: [{ attribute: 'technique', delta: 2, log: 'You cram through every new formation in one sitting.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Master the core concepts first',
        effects: [{ attribute: 'technique', delta: 1, log: 'You lock down the core concepts before worrying about the rest.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Learn only your own assignments',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'You save time by narrowing your focus.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'A collective misunderstanding on the play ends up costing you.' }],
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
    title: 'Ten More Reps',
    context: 'After practice, the coach offers a few extra reps.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 75,
            effects: [{ attribute: 'technique', delta: 2, log: 'Each rep comes out cleaner than the last — the coach nods, satisfied.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'Fatigue sets in and your mechanics lose precision as the reps pile up.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Do just a few reps',
        effects: [{ attribute: 'technique', delta: 1, log: 'You get the essentials in without wearing yourself out, but you don\'t really progress either.' }, { attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Head in to recover',
        effects: [{ attribute: 'physique', delta: 1, log: 'Heading in to rest does the body and mind good — the technique work can wait until tomorrow.' }, { attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-233',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🚶',
    title: 'Friday Walkthrough',
    context: 'The coach runs a no-contact walkthrough where everyone needs to be perfectly aligned.',
    choices: [
      {
        id: 'c1',
        label: 'Take it very seriously',
        effects: [{ attribute: 'technique', delta: 2, log: 'You treat the walkthrough like a real snap, and the precision shows.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Do the bare minimum',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Going through the motions costs you nothing this time.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'The sloppy rep gets baked in as muscle memory.' }],
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
    title: 'Playing the Starter\'s Role',
    context: 'The coach asks you to mimic an opponent\'s style during a session.',
    choices: [
      {
        id: 'c1',
        label: 'Copy every detail',
        effects: [{ attribute: 'technique', delta: 2, log: 'You nail every detail of the mimicked style.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Play it naturally',
        effects: [{ attribute: 'technique', delta: 1, log: 'You stick to your own game instead of imitating anyone.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Do only what\'s asked',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'It comes across as a lack of seriousness.' }],
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
    title: 'Change Your Tempo',
    context: 'The coach wants to work on different cadences and snap reactions.',
    choices: [
      {
        id: 'c1',
        label: 'Drill it until it\'s automatic',
        effects: [{ attribute: 'technique', delta: 2, log: 'You repeat the cadence over and over until it\'s second nature.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Experiment on your own',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1, log: 'You adapt well to the new tempo.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: -1, log: 'The timing with the line gets thrown off.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Stick with your habits',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You fall back on old habits instead of adjusting to the new tempo.' }],
      },
    ],
  },
  {
    id: 'scn-236',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🧪',
    title: 'A New Method',
    context: 'The coach introduces a drill you\'ve never practiced before.',
    choices: [
      {
        id: 'c1',
        label: 'Dive right in',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'The unfamiliar drill proves genuinely difficult.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Watch before trying',
        effects: [{ attribute: 'mental', delta: 2, log: 'You watch closely before attempting the unfamiliar drill yourself.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Stick to what you know',
        effects: [{ attribute: 'technique', delta: -1, log: 'You avoid the new drill entirely and lean on familiar habits.' }, { attribute: 'mental', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-237',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '⚔️',
    title: 'Who Wins the Reps?',
    context: 'Two players need to be separated over a series of reps.',
    choices: [
      {
        id: 'c1',
        label: 'Go all out',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'mental', delta: -1, log: 'The pressure of the rep leads to a mistake.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay methodical',
        effects: [{ attribute: 'technique', delta: 2, log: 'You stay patient and technical instead of muscling through the rep.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Try to impress',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 45,
            effects: [{ exposureDelta: 2, log: 'You pull off something spectacular.' }],
          },
          {
            weight: 55,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'Trying to impress backfires into a mistake.' }],
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
    title: 'Everyone Stops',
    context: 'The coach halts everything to correct a team-wide issue.',
    choices: [
      {
        id: 'c1',
        label: 'Listen carefully',
        effects: [{ attribute: 'technique', delta: 2, log: 'You lock in on every word of the correction.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Ask a question',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You speak up to clarify the point, though it draws a little side-eye.' }, { attribute: 'leadership', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Take advantage of the break',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You miss an important correction during the break.' }],
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
    title: 'Playbook Quiz',
    context: 'The coach individually tests everyone\'s grasp of the concepts.',
    choices: [
      {
        id: 'c1',
        label: 'Study hard',
        effects: [{ attribute: 'technique', delta: 2, log: 'You cram every concept before the test.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Rely on your memory',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Your memory holds up and you pass the test.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'Your memory fails you and you get a concept wrong.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Study only the core plays',
        effects: [{ attribute: 'technique', delta: 1, log: 'You focus narrowly on the core plays and hope it\'s enough.' }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-240',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '🔄',
    title: 'Learning Another Role',
    context: 'The coach asks you to learn some responsibilities from another position.',
    choices: [
      {
        id: 'c1',
        label: 'Accept',
        effects: [{ attribute: 'technique', delta: 2, log: 'You take on the new role and pick it up quickly.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Focus on your own position',
        effects: [{ attribute: 'technique', delta: 1, log: 'You stay locked in on your own job instead of learning someone else\'s.' }, { attribute: 'leadership', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Treat it as a chore',
        effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -1, log: 'You go through the motions without any real effort, and it shows.' }],
      },
    ],
  },
  {
    id: 'scn-241',
    theme: 'PERSONNEL',
    acts: ['HS', 'COLLEGE', 'PRO'],
    emoji: '👀',
    title: 'All Eyes on You',
    context: 'Several coaches are specifically watching your session.',
    choices: [
      {
        id: 'c1',
        label: 'Play it normal',
        effects: [{ attribute: 'mental', delta: 2, log: 'You block out the extra eyes and just play your game.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Show what you can do',
        effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -1, log: 'You push too hard trying to show off.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Try not to make a single mistake',
        effects: [{ attribute: 'mental', delta: -1, log: 'You play it overly cautious, tensed up under the extra scrutiny.' }, { attribute: 'technique', delta: 1 }],
      },
    ],
  },
  {
    id: 'scn-242',
    theme: 'PERSONNEL',
    acts: ['HS'],
    emoji: '🔥',
    title: '"Show Me What You\'ve Got"',
    context: 'The coach deliberately challenges you in front of the group.',
    choices: [
      {
        id: 'c1',
        label: 'Answer with hard work',
        effects: [{ attribute: 'mental', delta: 2, log: 'You answer the challenge by simply outworking everyone else.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Go for the spectacular play',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 2, log: 'The spectacular attempt actually pays off.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'The flashy attempt falls flat.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Show nothing',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'You hold back and don\'t rise to the challenge, and the group notices.' }],
      },
    ],
  },
  {
    id: 'scn-243',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧠',
    title: 'New Offensive System',
    context: 'The staff overhauls part of the system.',
    choices: [
      {
        id: 'c1',
        label: 'Start over from scratch',
        effects: [{ attribute: 'technique', delta: 3, log: 'You wipe the slate clean and relearn the system from the ground up.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Identify only the differences',
        effects: [{ attribute: 'technique', delta: 2, log: 'You isolate exactly what changed instead of relearning everything.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Wait for it to become automatic',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'It clicks and becomes automatic over time.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'You lag behind the rest of the group adjusting.' }],
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
    title: 'An Hour at the Whiteboard',
    context: 'Your position coach spends an hour detailing the assignments.',
    choices: [
      {
        id: 'c1',
        label: 'Take notes',
        effects: [{ attribute: 'technique', delta: 2, log: 'You fill pages of notes during the whiteboard session.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Participate actively',
        effects: [{ attribute: 'leadership', delta: 1, log: 'You jump into the discussion with questions and ideas of your own.' }, { attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Listen without speaking up',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You sit quietly through the session, and a few details slip past you.' }],
      },
    ],
  },
  {
    id: 'scn-245',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    positions: ['QB', 'RB-FB'],
    emoji: '🛡️',
    title: 'New Protection Scheme',
    context: 'A new protection call comes with several adjustments depending on the defense.',
    choices: [
      {
        id: 'c1',
        label: 'Memorize it perfectly',
        effects: [{ attribute: 'technique', delta: 3, log: 'You drill the protection call until you know it cold.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Understand the principle, not just the text',
        effects: [{ attribute: 'technique', delta: 2, log: 'You dig into why the scheme works, not just what to call.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Trust the rest of the unit',
        effects: [{ attribute: 'leadership', delta: -1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: -1, log: 'Trusting the unit works out fine.' }],
          },
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: -1 }, { attribute: 'technique', delta: -2, log: 'The trust leads to confusion on the protection call.' }],
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
    title: 'Changing the Play',
    context: 'The system allows you to change certain elements right before the snap.',
    choices: [
      {
        id: 'c1',
        label: 'Learn every check',
        effects: [{ attribute: 'technique', delta: 2, log: 'You memorize every check in the system, leaving nothing to chance.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Only use the simple checks',
        effects: [{ attribute: 'technique', delta: 1, log: 'You stick to the basic checks and skip the riskier ones.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Experiment a lot',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1, log: 'The experimenting leads to an excellent check.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'One of the checks backfires badly.' }],
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
    title: 'Becoming the Go-To Guy',
    context: 'Teammates start coming to you for explanations.',
    choices: [
      {
        id: 'c1',
        label: 'Help them out',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You make yourself available to anyone with a question.' }, { attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Tell them to ask the coach',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'You redirect them to the coaches, and it reads as a lack of investment in the group.' }],
      },
      {
        id: 'c3',
        label: 'Help even when unsure',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'You manage to explain it correctly.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: -1, log: 'You accidentally pass along a wrong explanation.' }],
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
    title: 'The Opening Script',
    context: 'The staff precisely scripts the opening plays.',
    choices: [
      {
        id: 'c1',
        label: 'Memorize every detail',
        effects: [{ attribute: 'technique', delta: 2, log: 'You lock in every detail of the opening script.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Understand the overall intent',
        effects: [{ attribute: 'mental', delta: 2, log: 'You focus on the big picture instead of memorizing the exact script.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Improvise based on the situation',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'The improvisation works out.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -2, log: 'The improvisation leads to a miscommunication.' }],
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
    title: 'One Situation for Two Hours',
    context: 'The staff dedicates the entire session to one specific situation.',
    choices: [
      {
        id: 'c1',
        label: 'Chase perfection',
        effects: [{ attribute: 'technique', delta: 3, log: 'You chase a flawless rep, no matter how many tries it takes.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stay consistent',
        effects: [{ attribute: 'technique', delta: 2, log: 'You focus on staying steady rather than spectacular.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Conserve your effort',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Conserving your energy costs you nothing this time.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You miss some of the finer corrections.' }],
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
    title: 'Running the Group',
    context: 'The coach asks you to lead part of the reps.',
    choices: [
      {
        id: 'c1',
        label: 'Take the role',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You step up and take charge of the group.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Share the role',
        effects: [{ attribute: 'leadership', delta: 1, log: 'You split the responsibility with a teammate instead of taking it all on.' }, { attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Decline',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1, log: 'The coach respects your decision to pass.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'The coach isn\'t thrilled you passed on the opportunity to lead.' }],
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
    title: 'A Technical Detail Gives You Away',
    context: 'The coach spots a small repeated habit in your execution.',
    choices: [
      {
        id: 'c1',
        label: 'Fix it right away',
        effects: [{ attribute: 'technique', delta: 2, log: 'You correct the habit on the spot before it becomes a bigger problem.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Work on it gradually',
        effects: [{ attribute: 'technique', delta: 1, log: 'You chip away at the habit slowly, rep by rep.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Decide it doesn\'t matter',
        effects: [{ attribute: 'technique', delta: -2, log: 'You brush off the correction, and the habit sticks around.' }],
      },
    ],
  },
  {
    id: 'scn-252',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🧱',
    title: 'Back to Basics',
    context: 'The coach strips away the complex schemes to rework the fundamentals.',
    choices: [
      {
        id: 'c1',
        label: 'Take it seriously',
        effects: [{ attribute: 'technique', delta: 2, log: 'You grind through the fundamentals without cutting corners.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Try to speed through it',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'You bring good intensity to the fundamentals.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Rushing through it leads to sloppy execution.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Decide it\'s pointless',
        effects: [{ attribute: 'technique', delta: -1, log: 'You go through the basics half-heartedly, and it shows in your execution.' }, { attribute: 'mental', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-253',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🔎',
    title: 'Reading Their Tendencies',
    context: 'The staff wants everyone to identify specific tendencies in the opponent.',
    choices: [
      {
        id: 'c1',
        label: 'Study every detail',
        effects: [{ attribute: 'technique', delta: 2, log: 'You break down film until you know every tendency cold.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Study only the main situations',
        effects: [{ attribute: 'technique', delta: 1, log: 'You focus your film study on the situations most likely to matter.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Trust the coach\'s game plan',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'The coach\'s plan turns out to be enough.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Relying only on the plan leads to a bad read.' }],
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
    title: 'Correcting Instead of Celebrating',
    context: 'After a win, the staff immediately goes back over the mistakes.',
    choices: [
      {
        id: 'c1',
        label: 'Focus on your mistakes',
        effects: [{ attribute: 'technique', delta: 2, log: 'You skip the celebration and dive straight into correcting your mistakes.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Enjoy the win',
        effects: [{ attribute: 'mental', delta: 2, log: 'You let yourself enjoy the win instead of dwelling on the film.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Only watch your own highlights',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1, log: 'Watching your own highlights builds confidence.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'It builds a dangerous overconfidence instead.' }],
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
    title: 'One More Time',
    context: 'A sequence gets repeated until the whole group nails it.',
    choices: [
      {
        id: 'c1',
        label: 'Ask for another rep',
        effects: [{ attribute: 'technique', delta: 2, log: 'You ask to run it again until the group gets it right.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Let others go first',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You step back and let others take the reps first.' }],
      },
      {
        id: 'c3',
        label: 'Push through despite the mistakes',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 1, log: 'Something finally clicks.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'mental', delta: -2, log: 'The repeated failures pile up into real frustration.' }],
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
    title: 'You\'re Filling In Today',
    context: 'An absence forces the staff to have you work elsewhere temporarily.',
    choices: [
      {
        id: 'c1',
        label: 'Learn it seriously',
        effects: [{ attribute: 'technique', delta: 2, log: 'You take the temporary assignment seriously and actually learn the position.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Do just what\'s needed',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You do the bare minimum to get through the fill-in role.' }],
      },
      {
        id: 'c3',
        label: 'Show you can do more',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 2, log: 'You impress everyone filling in.' }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: -2, log: 'Trying to do too much leads to sloppy execution.' }],
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
    title: 'Your Ritual',
    context: 'You realize you don\'t have a set routine before sessions.',
    choices: [
      {
        id: 'c1',
        label: 'Build a strict routine',
        effects: [{ attribute: 'mental', delta: 2, log: 'You build a strict pre-session ritual and stick to it religiously.' }, { attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stay flexible',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You keep things loose and improvise your prep each time.' }],
      },
      {
        id: 'c3',
        label: 'Change nothing',
        effects: [{ attribute: 'mental', delta: -1, log: 'You skip building any routine at all, and the lack of structure catches up with you.' }],
      },
    ],
  },
  {
    id: 'scn-258',
    theme: 'PERSONNEL',
    acts: ['COLLEGE', 'PRO'],
    emoji: '🎯',
    title: 'The Drill Nobody Can Nail',
    context: 'The staff sets up a particularly difficult drill.',
    choices: [
      {
        id: 'c1',
        label: 'Keep at it until you nail it',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: -1, log: 'The repeated failed attempts breed real frustration.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Ask for an explanation',
        effects: [{ attribute: 'technique', delta: 2, log: 'You stop and ask the coach to break the drill down step by step.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Move on to something else',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Moving on costs you nothing.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Skipping the hard drill leaves a gap in your technique.' }],
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
    title: 'Talk Before You Play',
    context: 'The staff insists on communication between players.',
    choices: [
      {
        id: 'c1',
        label: 'Take charge',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You take charge of the communication before the snap.' }, { attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Be more vocal',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You start calling things out louder, and it changes how the group sees you.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Stay focused on your own role',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'Staying quiet is read as a lack of communication.' }],
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
    title: 'Dry Run',
    context: 'The staff runs a session focused on footwork and no-contact technique.',
    choices: [
      {
        id: 'c1',
        label: 'Maximize every rep',
        effects: [{ attribute: 'technique', delta: 2, log: 'You push every rep to its limit, even without contact.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Work on fluidity',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You focus on smoothing out your movement rather than grinding reps.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Do the bare minimum',
        effects: [{ attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1, log: 'Coasting through costs you nothing this time.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Coasting through leaves your technique a little rusty.' }],
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
    title: 'New Coordinator',
    context: 'A new coordinator arrives and installs his system.',
    choices: [
      {
        id: 'c1',
        label: 'Learn it all before camp',
        effects: [{ attribute: 'technique', delta: 3, log: 'You spend the offseason mastering the new system before camp even starts.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Learn it gradually',
        effects: [{ attribute: 'technique', delta: 2, log: 'You pick up the new system piece by piece as camp goes on.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Lean on your experience',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 45,
            effects: [{ attribute: 'mental', delta: 1, log: 'Your experience carries you through just fine.' }],
          },
          {
            weight: 55,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -3, log: 'You fall behind the rookies who actually studied.' }],
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
    title: 'The Mountain of Plays',
    context: 'The volume of concepts to master is enormous.',
    choices: [
      {
        id: 'c1',
        label: 'Memorize it all',
        effects: [{ attribute: 'technique', delta: 3, log: 'You grind through the entire playbook until it\'s all committed to memory.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Understand the families of concepts',
        effects: [{ attribute: 'technique', delta: 2, log: 'You group the concepts into families instead of memorizing each one individually.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Learn only your own packages',
        effects: [{ attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'technique', delta: 1, log: 'Knowing just your packages turns out to be enough.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'technique', delta: -1, log: 'The lack of versatility gets exposed.' }],
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
    title: 'It All Comes Down to Details',
    context: 'The staff uses a no-contact session to watch every technical detail.',
    choices: [
      {
        id: 'c1',
        label: 'Obsess over the details',
        effects: [{ attribute: 'technique', delta: 3, log: 'You pick apart every last detail of your technique.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Work at high intensity',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You push the pace instead of dwelling on the fine points.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Conserve your energy',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'physique', delta: 2, log: 'Conserving energy costs you nothing this time.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -1, log: 'The lack of focus shows up as sloppy technique.' }],
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
    title: 'An Hour With the Coordinator',
    context: 'The coordinator wants to understand how you read the game.',
    choices: [
      {
        id: 'c1',
        label: 'Show everything you know',
        effects: [{ attribute: 'technique', delta: 2, log: 'You lay out everything you understand about the offense.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Ask a lot of questions',
        effects: [{ attribute: 'technique', delta: 2, log: 'You pepper the coordinator with questions to understand his thinking.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Stay very low-key',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'Staying quiet leaves a good impression regardless.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'He starts doubting how well you actually understand the offense.' }],
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
    title: '"Can You Play This?"',
    context: 'The staff tests your ability to fill multiple roles.',
    choices: [
      {
        id: 'c1',
        label: 'Accept every role',
        effects: [{ attribute: 'technique', delta: 2, log: 'You say yes to every role the staff throws at you.' }, { attribute: 'leadership', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Specialize',
        effects: [{ attribute: 'technique', delta: 2 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 2 }, { attribute: 'leadership', delta: -1, log: 'Specializing narrows your value on the roster.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Try to master everything',
        effects: [{ attribute: 'technique', delta: 3 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'technique', delta: 3 }, { attribute: 'mental', delta: -2, log: 'Trying to master everything at once overloads you.' }],
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
    title: 'Two Minutes on the Clock',
    context: 'The coach wraps the session with a end-of-game simulation.',
    choices: [
      {
        id: 'c1',
        label: 'Take charge',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You take control of the two-minute drill and direct the huddle.' }, { attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Stick strictly to the script',
        effects: [{ attribute: 'technique', delta: 2, log: 'You run the script exactly as called, no deviations.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Go for the big play',
        effects: [{ exposureDelta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ exposureDelta: 2 }, { attribute: 'technique', delta: 2, log: 'You go for the spectacular play and pull it off.' }],
          },
          {
            weight: 65,
            effects: [{ exposureDelta: 2 }, { attribute: 'mental', delta: -2, log: 'Chasing the big play leads to a mistake.' }],
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
    title: 'Passing on What You Know',
    context: 'A rookie comes to ask you how to handle a specific situation in the system.',
    choices: [
      {
        id: 'c1',
        label: 'Take the time to explain it',
        effects: [{ attribute: 'leadership', delta: 3, log: 'You take a solid twenty minutes to walk him through it in detail — the rookie will remember this moment.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Give him a quick answer',
        effects: [{ attribute: 'leadership', delta: 1, log: 'A quick answer between reps — useful, but a bit rushed.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Tell him to figure it out himself',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'mental', delta: 1, log: 'You let him work it out on his own. He ends up handling it just fine.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -2, log: 'Left without an answer, the rookie repeats the same mistake in a real game — the locker room remembers.' }],
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
    title: 'New Protection Rule',
    context: 'A bad sequence forces the staff to change some assignments.',
    choices: [
      {
        id: 'c1',
        label: 'Drill it until it\'s automatic',
        effects: [{ attribute: 'technique', delta: 2, log: 'You repeat the new assignment until it becomes reflex.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Understand why the change was made',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 2, log: 'You ask why the change was made, and it clicks once you understand the reasoning.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Keep doing it the old way',
        effects: [{ attribute: 'technique', delta: -2, log: 'You keep running the old assignment out of habit, and it gets flagged fast.' }],
      },
    ],
  },
  {
    id: 'scn-269',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🧓',
    title: 'A Different Way of Doing It',
    context: 'A veteran shows you a method different from your own.',
    choices: [
      {
        id: 'c1',
        label: 'Try his method',
        effects: [{ attribute: 'technique', delta: 2, log: 'You give the veteran\'s method an honest try.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Compare the two',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You test both methods side by side to see which actually works better for you.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Defend your own method',
        effects: [{ attribute: 'leadership', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 1, log: 'It turns out your method was right all along.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 1 }, { attribute: 'technique', delta: -1, log: 'Defending your method costs you — you should have listened.' }],
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
    title: 'One Inch Too Far',
    context: 'Your coach spots a tiny flaw in your footwork.',
    choices: [
      {
        id: 'c1',
        label: 'Fix it right away',
        effects: [{ attribute: 'technique', delta: 3, log: 'You correct the footwork flaw immediately, rep after rep.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Work on it gradually',
        effects: [{ attribute: 'technique', delta: 1, log: 'You work the fix in gradually instead of forcing it all at once.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Decide it doesn\'t change anything',
        effects: [{ attribute: 'technique', delta: -2, log: 'You dismiss the flaw as nothing to worry about, and it keeps costing you.' }],
      },
    ],
  },
  {
    id: 'scn-271',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🏋️',
    title: 'An Hour Just for You',
    context: 'The staff offers an extra hour focused exclusively on your development.',
    choices: [
      {
        id: 'c1',
        label: 'Work on your biggest weakness',
        effects: [{ attribute: 'technique', delta: 3, log: 'You spend the extra hour attacking your weakest link.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Perfect your best asset',
        effects: [{ attribute: 'technique', delta: 2, log: 'You sharpen your best tool even further.' }, { exposureDelta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Work on something new',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 3, log: 'You stumble onto a major breakthrough in a new area.' }, { attribute: 'mental', delta: 1 }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -1, log: 'Progress in the new area comes slow and limited.' }, { attribute: 'mental', delta: 1 }],
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
    title: 'Nothing Comes Easy',
    context: 'A practice squad player keeps beating you in one specific situation.',
    choices: [
      {
        id: 'c1',
        label: 'Ask to run it again',
        effects: [{ attribute: 'technique', delta: 2, log: 'You ask to run the rep again until you finally win it.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Analyze why you\'re losing',
        effects: [{ attribute: 'mental', delta: 2, log: 'You break down exactly why you keep losing the rep and adjust.' }, { attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Avoid the situation',
        effects: [{ attribute: 'mental', delta: -1 }],
        variants: [
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: -1 }, { attribute: 'technique', delta: -2, log: 'Avoiding it doesn\'t work — the problem just comes back.' }],
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
    title: 'More Responsibility',
    context: 'The staff gives you more responsibility in the install.',
    choices: [
      {
        id: 'c1',
        label: 'Accept right away',
        effects: [{ attribute: 'leadership', delta: 2, log: 'You accept the added responsibility without hesitation.' }, { attribute: 'technique', delta: 2 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Ask for time',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'mental', delta: 1, log: 'The coach appreciates you taking it seriously.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'leadership', delta: -1, log: 'The staff expected more initiative from you.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Say you\'re ready for anything',
        effects: [{ attribute: 'leadership', delta: 2 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'leadership', delta: 2, log: 'You back it up and deliver.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'leadership', delta: 2 }, { attribute: 'mental', delta: -2, log: 'Biting off too much leaves you overloaded.' }],
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
    title: 'Pro Tempo',
    context: 'The staff sharply speeds up the pace of the reps.',
    choices: [
      {
        id: 'c1',
        label: 'Adapt right away',
        effects: [{ attribute: 'physique', delta: 2, log: 'You throw yourself into the faster pace right away.' }, { attribute: 'technique', delta: 1 }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Prioritize precision',
        effects: [{ attribute: 'technique', delta: 2, log: 'You stay precise even as the tempo picks up around you.' }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Try to keep up no matter what',
        effects: [{ attribute: 'physique', delta: 2 }],
        variants: [
          {
            weight: 35,
            effects: [{ attribute: 'physique', delta: 2, log: 'You keep pace and it pays off.' }],
          },
          {
            weight: 65,
            effects: [{ attribute: 'physique', delta: 2 }, { attribute: 'technique', delta: -2, log: 'Chasing the tempo costs you clean technique.' }],
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
    title: 'Starting Over',
    context: 'The team returns after several weeks off.',
    choices: [
      {
        id: 'c1',
        label: 'Ease back in gradually',
        effects: [{ attribute: 'physique', delta: 2, log: 'You ease back into training carefully after the time off.' }, { attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Come back at full intensity right away',
        effects: [{ attribute: 'physique', delta: 3 }],
        variants: [
          {
            weight: 70,
            effects: [{ attribute: 'physique', delta: 3, log: 'You come back at full speed and it works.' }],
          },
          {
            weight: 30,
            effects: [{ attribute: 'physique', delta: -1, log: 'Your body isn\'t ready and the intensity backfires.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Use the time to rework your technique',
        effects: [{ attribute: 'technique', delta: 3, log: 'You use the downtime to rebuild your technique from the ground up.' }, { attribute: 'physique', delta: -1 }],
      },
    ],
  },
  {
    id: 'scn-276',
    theme: 'PERSONNEL',
    acts: ['PRO'],
    emoji: '🎓',
    title: 'A Different Voice',
    context: 'A well-known former coach offers you a few private sessions.',
    choices: [
      {
        id: 'c1',
        label: 'Follow his advice',
        effects: [{ attribute: 'technique', delta: 2, log: 'You follow the former coach\'s advice to the letter.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Ask him to target one specific thing',
        effects: [{ attribute: 'technique', delta: 3, log: 'You ask him to zero in on one specific flaw, and the focused work pays off.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Don\'t change your habits',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ attribute: 'mental', delta: 1, log: 'It turns out sticking with your own approach was the right call.' }],
          },
          {
            weight: 60,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'technique', delta: -1, log: 'You end up missing out on a real opportunity to improve.' }],
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
    title: 'New Recovery Routine',
    context: 'The performance staff proposes a new schedule between sessions.',
    choices: [
      {
        id: 'c1',
        label: 'Follow the protocol strictly',
        effects: [{ attribute: 'physique', delta: 2, log: 'You follow the new recovery protocol to the letter.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Adapt based on how you feel',
        effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: 1, log: 'You adjust the protocol day to day based on how your body feels.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Stick with your own habits',
        effects: [{ attribute: 'mental', delta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1, log: 'Sticking with your old routine costs you nothing.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -2, log: 'Your recovery ends up falling short.' }],
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
    title: 'A Few Milliseconds',
    context: 'The staff runs you through a series of reaction and decision-making tests.',
    choices: [
      {
        id: 'c1',
        label: 'Chase peak performance',
        effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1 }],
        variants: [
          {
            weight: 25,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 3, log: 'You post a very strong result.' }],
          },
          {
            weight: 50,
            effects: [{ attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: 1, log: 'You post a solidly average result.' }],
          },
          {
            weight: 25,
            effects: [{ attribute: 'technique', delta: -1, log: 'The result comes back disappointing.' }],
          },
        ],
      },
      {
        id: 'c2',
        label: 'Stay consistent',
        effects: [{ attribute: 'mental', delta: 2, log: 'You keep your results steady instead of chasing a big number.' }, { attribute: 'technique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Compare yourself to the others',
        effects: [{ exposureDelta: 1 }],
        variants: [
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: 1, log: 'Seeing where you stack up fuels your motivation.' }],
          },
          {
            weight: 50,
            effects: [{ exposureDelta: 1 }, { attribute: 'mental', delta: -2, log: 'The comparison leaves you frustrated instead.' }],
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
    title: 'A Few Seconds to Make Your Case',
    context: 'You have to prepare for standardized tests that teams will be watching.',
    choices: [
      {
        id: 'c1',
        label: 'Maximize your strengths',
        effects: [{ attribute: 'physique', delta: 2 }, { exposureDelta: 2, log: 'You lean into your best tools and let them carry the workout.' }, { attribute: 'mental', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Shore up your weaknesses',
        effects: [{ attribute: 'technique', delta: 2, log: 'You spend your prep time on the drills that expose your weaknesses.' }, { attribute: 'mental', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c3',
        label: 'Prepare each test separately',
        effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 30,
            effects: [{ attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: 1 }, { exposureDelta: 3, log: 'Preparing each drill individually pays off with an excellent performance.' }],
          },
          {
            weight: 70,
            effects: [{ attribute: 'technique', delta: -1, log: 'You post a decent, unremarkable result.' }, { attribute: 'physique', delta: 1 }],
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
    title: 'One Last Showcase',
    context: 'You have to run through a series of specific drills in front of scouts and coaches. Football workouts often emphasize position-specific drills and the technical quality of execution.',
    choices: [
      {
        id: 'c1',
        label: 'Play it safe',
        effects: [{ attribute: 'mental', delta: 2, log: 'You stick to fundamentals instead of chasing a highlight number.' }, { attribute: 'technique', delta: 1 }, { attribute: 'physique', delta: -1 }],
      },
      {
        id: 'c2',
        label: 'Show your maximum potential',
        effects: [{ exposureDelta: 4 }, { attribute: 'physique', delta: 1 }],
        variants: [
          {
            weight: 40,
            effects: [{ exposureDelta: 7, log: 'You put on an exceptional, jaw-dropping performance.' }, { attribute: 'physique', delta: 1 }],
          },
          {
            weight: 60,
            effects: [{ exposureDelta: 4 }, { attribute: 'physique', delta: 1 }, { attribute: 'technique', delta: -2, log: 'You push too hard trying to max out every number.' }],
          },
        ],
      },
      {
        id: 'c3',
        label: 'Adjust some drills to showcase your strengths',
        effects: [{ attribute: 'leadership', delta: 1 }, { exposureDelta: 2 }],
        variants: [
          {
            weight: 55,
            effects: [{ attribute: 'leadership', delta: 1, log: 'The scouts appreciate seeing your strengths highlighted.' }, { exposureDelta: 2 }],
          },
          {
            weight: 45,
            effects: [{ attribute: 'leadership', delta: -1, log: 'They see your approach as a risky gamble.' }],
          },
        ],
      },
    ],
  },
]
