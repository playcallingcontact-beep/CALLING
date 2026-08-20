import { useEffect, useState } from 'react'
import { Intro } from './screens/Intro'
import { CharacterCreation } from './screens/CharacterCreation'
import { SeasonEvent } from './screens/SeasonEvent'
import { EventResult } from './screens/EventResult'
import { SeasonRecap } from './screens/SeasonRecap'
import { SigningDay } from './screens/SigningDay'
import { Act1End } from './screens/Act1End'
import { RedshirtDecision } from './screens/RedshirtDecision'
import { Act2End } from './screens/Act2End'
import { CombineDecision } from './screens/CombineDecision'
import { CombineResult } from './screens/CombineResult'
import { DraftResult } from './screens/DraftResult'
import { ProSeasonRecap } from './screens/ProSeasonRecap'
import { PlayoffMatchup } from './screens/PlayoffMatchup'
import { PlayoffResult } from './screens/PlayoffResult'
import { ContractDecision, type ContractChoice } from './screens/ContractDecision'
import { FreeAgencyOffers } from './screens/FreeAgencyOffers'
import { TransferPortal } from './screens/TransferPortal'
import { DestinBrisee } from './screens/DestinBrisee'
import { CareerCard } from './screens/CareerCard'
import { createPlayer, type CharacterChoices } from './engine/characterFactory'
import { pickSeasonEvents, applyChoice } from './engine/eventEngine'
import { generateOffers } from './engine/signingDay'
import { enterCollege, applyRedshirt, refreshDepthChart } from './engine/collegeFactory'
import { generateTransferOffers, transferToCollege, type TransferOffer } from './engine/transferPortal'
import { resolveAmateurSeason } from './engine/amateurSeasonEngine'
import {
  applyCombineStepChoice,
  runDraft,
  COMBINE_STEPS,
  type CombineChoiceId,
  type CombineStep,
  type CombineStepDef,
} from './engine/draftEngine'
import { resolveProSeason, type ProSeasonResult } from './engine/proSeasonEngine'
import {
  buildPlayoffBracket,
  resolvePlayoffRound,
  applySuperBowlWin,
  applyConferenceChampionshipWin,
  type PlayoffRoundDef,
} from './engine/playoffEngine'
import {
  applyExtension,
  applyFranchiseTag,
  hasNoFreeAgencyOffers,
  generateFreeAgencyOffers,
  signFreeAgencyOffer,
  forcedRetirement,
  type FreeAgencyOffer,
} from './engine/contractEngine'
import { AGE_CURVES } from './engine/ageCurves'
import { HIGHSCHOOL_EVENTS } from './data/events/highschool'
import { COLLEGE_EVENTS } from './data/events/college'
import { PRO_EVENTS } from './data/events/pro'
import { SCENARIO_EVENTS } from './data/events/scenarios'
import type { Attributes, Player, RecruitingOffer } from './types/player'
import type { EventChoice, EventEffect, GameEvent } from './types/events'
import { initAnalytics, trackAdBannerImpression, trackCareerCreated, trackInterstitialAdShown } from './lib/analytics'
import { InterstitialAdOverlay } from './components/InterstitialAdOverlay'
import { CookieConsent } from './components/CookieConsent'
import { getCookieConsent, setCookieConsent, type CookieConsentStatus } from './lib/cookieConsent'
import { clearSavedGame, loadSavedGame, saveGame, type SavedGameState } from './lib/saveGame'

const EVENTS_PER_SEASON = 3
const TOTAL_HS_SEASONS = 2
const MAX_COLLEGE_SEASON = 4

// Un même événement peut être éligible sur plusieurs actes (GameEvent.acts[]) : le filtrage
// par acte se fait entièrement dans isEligible(), donc un seul pool combiné suffit ici.
const ALL_EVENTS: GameEvent[] = [...HIGHSCHOOL_EVENTS, ...COLLEGE_EVENTS, ...PRO_EVENTS, ...SCENARIO_EVENTS]

export type Screen =
  | 'intro'
  | 'creation'
  | 'event'
  | 'result'
  | 'recap'
  | 'signing'
  | 'end'
  | 'redshirt'
  | 'transfer'
  | 'end2'
  | 'combine'
  | 'combineresult'
  | 'draftresult'
  | 'playoffgame'
  | 'playoffresult'
  | 'prorecap'
  | 'contract'
  | 'freeagency'
  | 'destinbrisee'
  | 'careercard'

function recapNextLabel(p: Player): string {
  if (p.act === 'HS') {
    return p.season >= TOTAL_HS_SEASONS ? 'Go to Signing Day' : 'Next season'
  }
  if (p.season >= MAX_COLLEGE_SEASON) return 'Declare for the draft'
  return 'Next season'
}

function proRecapNextLabel(p: Player): string {
  return (p.contractYearsRemaining ?? 0) <= 0 ? 'View contract situation' : 'Next season'
}

function App() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [player, setPlayer] = useState<Player | null>(null)
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set())
  const [queue, setQueue] = useState<GameEvent[]>([])
  const [activeChoice, setActiveChoice] = useState<{
    event: GameEvent
    choice: EventChoice
    resolvedEffects: EventEffect[]
    player: Player
  } | null>(null)
  const [attributesBefore, setAttributesBefore] = useState<Attributes | null>(null)
  const [starRatingBefore, setStarRatingBefore] = useState(0)
  const [logsThisSeason, setLogsThisSeason] = useState<string[]>([])
  const [seasonStatsForRecap, setSeasonStatsForRecap] = useState<Record<string, number>>({})
  const [seasonAwardsForRecap, setSeasonAwardsForRecap] = useState<string[]>([])
  const [offers, setOffers] = useState<RecruitingOffer[]>([])
  const [signedWith, setSignedWith] = useState<RecruitingOffer | null>(null)
  const [proResult, setProResult] = useState<ProSeasonResult | null>(null)
  const [faOffers, setFaOffers] = useState<FreeAgencyOffer[]>([])
  const [transferOffers, setTransferOffers] = useState<TransferOffer[]>([])
  const [combineStep, setCombineStep] = useState<CombineStep>(1)
  const [activeCombineResult, setActiveCombineResult] = useState<{
    stepDef: CombineStepDef
    before: Player
    after: Player
  } | null>(null)
  const [playoffBracket, setPlayoffBracket] = useState<PlayoffRoundDef[]>([])
  const [playoffRoundIndex, setPlayoffRoundIndex] = useState(0)
  const [playoffOutcome, setPlayoffOutcome] = useState<'won' | 'lost'>('lost')
  const [playoffMVP, setPlayoffMVP] = useState(false)
  const [showRestartAd, setShowRestartAd] = useState(false)
  // Chargée une seule fois au tout premier rendu (initialiseur paresseux) pour que le bouton
  // "Continuer ma carrière" soit déjà là dès le premier affichage de l'écran d'accueil, sans
  // flash. Ne sert qu'à afficher ce résumé sur l'accueil — le vrai chargement dans le jeu
  // n'a lieu qu'au clic, via handleContinue().
  const [savedGame] = useState<SavedGameState | null>(() => loadSavedGame())
  const [cookieConsent, setCookieConsentState] = useState<CookieConsentStatus | null>(() => getCookieConsent())

  useEffect(() => {
    if (cookieConsent === 'accepted') initAnalytics()
  }, [cookieConsent])

  function handleCookieChoice(status: CookieConsentStatus) {
    setCookieConsent(status)
    setCookieConsentState(status)
  }

  // Sauvegarde automatique de toute carrière en cours (pas sur l'accueil, ni une fois la
  // carrière terminée — voir l'effet ci-dessous qui vide la sauvegarde à ce moment-là).
  useEffect(() => {
    if (!player || screen === 'intro' || screen === 'careercard') return
    saveGame({
      screen,
      player,
      seenIds: [...seenIds],
      queue,
      activeChoice,
      attributesBefore,
      starRatingBefore,
      logsThisSeason,
      seasonStatsForRecap,
      seasonAwardsForRecap,
      offers,
      signedWith,
      proResult,
      faOffers,
      transferOffers,
      combineStep,
      activeCombineResult,
      playoffBracket,
      playoffRoundIndex,
      playoffOutcome,
      playoffMVP,
    })
  }, [
    screen,
    player,
    seenIds,
    queue,
    activeChoice,
    attributesBefore,
    starRatingBefore,
    logsThisSeason,
    seasonStatsForRecap,
    seasonAwardsForRecap,
    offers,
    signedWith,
    proResult,
    faOffers,
    transferOffers,
    combineStep,
    activeCombineResult,
    playoffBracket,
    playoffRoundIndex,
    playoffOutcome,
    playoffMVP,
  ])

  // La carrière est terminée dès qu'on affiche son bilan — plus rien à "continuer".
  useEffect(() => {
    if (screen === 'careercard') clearSavedGame()
  }, [screen])

  function handleContinue() {
    if (!savedGame) return
    setScreen(savedGame.screen)
    setPlayer(savedGame.player)
    setSeenIds(new Set(savedGame.seenIds))
    setQueue(savedGame.queue)
    setActiveChoice(savedGame.activeChoice)
    setAttributesBefore(savedGame.attributesBefore)
    setStarRatingBefore(savedGame.starRatingBefore)
    setLogsThisSeason(savedGame.logsThisSeason)
    setSeasonStatsForRecap(savedGame.seasonStatsForRecap)
    setSeasonAwardsForRecap(savedGame.seasonAwardsForRecap)
    setOffers(savedGame.offers)
    setSignedWith(savedGame.signedWith)
    setProResult(savedGame.proResult)
    setFaOffers(savedGame.faOffers)
    setTransferOffers(savedGame.transferOffers)
    setCombineStep(savedGame.combineStep)
    setActiveCombineResult(savedGame.activeCombineResult)
    setPlayoffBracket(savedGame.playoffBracket)
    setPlayoffRoundIndex(savedGame.playoffRoundIndex)
    setPlayoffOutcome(savedGame.playoffOutcome)
    setPlayoffMVP(savedGame.playoffMVP)
  }

  function startSeason(p: Player, seen: Set<string>) {
    const events = pickSeasonEvents(p, ALL_EVENTS, seen, EVENTS_PER_SEASON)
    setAttributesBefore({ ...p.attributes })
    setStarRatingBefore(p.starRating)
    setLogsThisSeason([])
    if (events.length === 0) {
      finishSeason(p)
      return
    }
    setQueue(events)
    setPlayer(p)
    setScreen('event')
  }

  function withValueSnapshot(p: Player): Player {
    return { ...p, valueHistory: [...p.valueHistory, { age: p.age, value: p.exposureScore }] }
  }

  function goToRecap(p: Player) {
    const result = resolveAmateurSeason(p)
    setSeasonStatsForRecap(result.statsThisSeason)
    setSeasonAwardsForRecap(result.awardsWon)
    setPlayer(withValueSnapshot(result.player))
    setQueue([])
    setScreen('recap')
  }

  function finishSeason(p: Player) {
    if (p.act !== 'PRO') {
      goToRecap(p)
      return
    }
    const result = resolveProSeason(p)
    setQueue([])
    setProResult(result)

    if (result.destinBrisee) {
      setPlayer(withValueSnapshot({ ...result.player, retired: true, retirementType: 'destin-brisee' }))
      setScreen('destinbrisee')
      return
    }

    const decremented: Player = withValueSnapshot({
      ...result.player,
      contractYearsRemaining: Math.max(0, (result.player.contractYearsRemaining ?? 1) - 1),
    })
    setPlayer(decremented)

    if (result.madePlayoffs && decremented.nflTeam) {
      // Le résultat de la saison régulière est déjà acquis (stats, awards, qualification) —
      // seul le parcours en playoffs (et donc wonSuperBowl/superBowlMVP) reste à jouer,
      // écran par écran, avant d'afficher le bilan de saison.
      setPlayoffBracket(buildPlayoffBracket(decremented, decremented.nflTeam))
      setPlayoffRoundIndex(0)
      setScreen('playoffgame')
      return
    }

    setScreen('prorecap')
  }

  function handlePlayoffPlay() {
    if (!player) return
    const game = playoffBracket[playoffRoundIndex]
    const won = resolvePlayoffRound(game.winProbability)

    if (won && game.round === 'superbowl') {
      const { player: updated, wonMVP } = applySuperBowlWin(player)
      setPlayer(updated)
      setPlayoffMVP(wonMVP)
      setProResult((prev) =>
        prev ? { ...prev, wonSuperBowl: true, awardsWon: wonMVP ? [...prev.awardsWon, 'MVP du Ring Bowl'] : prev.awardsWon } : prev,
      )
    } else if (won && game.round === 'conference') {
      const { player: updated, wonMVP } = applyConferenceChampionshipWin(player)
      setPlayer(updated)
      setPlayoffMVP(wonMVP)
    } else {
      setPlayoffMVP(false)
    }

    setPlayoffOutcome(won ? 'won' : 'lost')
    setScreen('playoffresult')
  }

  function handlePlayoffResultContinue() {
    const isLastRound = playoffRoundIndex >= playoffBracket.length - 1
    if (playoffOutcome === 'lost' || isLastRound) {
      setScreen('prorecap')
      return
    }
    setPlayoffRoundIndex((i) => i + 1)
    setScreen('playoffgame')
  }

  function handleCreationComplete(choices: CharacterChoices) {
    const p = createPlayer(choices)
    trackCareerCreated(p.position)
    const seen = new Set<string>()
    startSeason(p, seen)
  }

  function handleChoose(choice: EventChoice) {
    if (!player || queue.length === 0) return
    const current = queue[0]
    const { player: resolved, resolvedEffects } = applyChoice(player, choice)
    const updated = resolved.act === 'COLLEGE' ? refreshDepthChart(resolved) : resolved
    setActiveChoice({ event: current, choice, resolvedEffects, player: updated })
    setScreen('result')
  }

  function handleResultContinue() {
    if (!activeChoice || !player) return
    const { event: current, player: updated } = activeChoice
    const newLogs = updated.log.slice(player.log.length)
    setLogsThisSeason((prev) => [...prev, ...newLogs])
    setSeenIds((prev) => new Set(prev).add(current.id))

    const remaining = queue.slice(1)
    setPlayer(updated)
    setActiveChoice(null)
    if (remaining.length === 0) {
      finishSeason(updated)
    } else {
      setQueue(remaining)
      setScreen('event')
    }
  }

  function proceedToNextCollegeSeason(p: Player) {
    const nextPlayer: Player = { ...p, season: p.season + 1, age: p.age + 1 }
    startSeason(nextPlayer, seenIds)
  }

  function handleRecapContinue() {
    if (!player) return

    if (player.act === 'HS') {
      if (player.season < TOTAL_HS_SEASONS) {
        const nextPlayer: Player = { ...player, season: player.season + 1, age: player.age + 1 }
        startSeason(nextPlayer, seenIds)
      } else {
        const generated = generateOffers(player)
        setOffers(generated)
        setScreen('signing')
      }
      return
    }

    if (player.season >= MAX_COLLEGE_SEASON) {
      setScreen('end2')
      return
    }
    // Le portail des transferts s'ouvre à chaque intersaison NCAA : rester ou rejoindre un
    // autre programme selon la performance/le temps de jeu de la saison écoulée.
    setTransferOffers(generateTransferOffers(player))
    setScreen('transfer')
  }

  function handleSign(offer: RecruitingOffer | null) {
    setSignedWith(offer)
    setScreen('end')
  }

  function handleEnterCollege() {
    if (!player) return
    const collegePlayer = enterCollege(player, signedWith)
    setSeenIds(new Set())
    setPlayer(collegePlayer)
    setScreen('redshirt')
  }

  function handleRedshirtDecision(redshirt: boolean) {
    if (!player) return
    const p = redshirt ? applyRedshirt(player) : player
    startSeason(p, seenIds)
  }

  function handleTransferStay() {
    if (!player) return
    proceedToNextCollegeSeason(player)
  }

  function handleTransferSign(offer: TransferOffer) {
    if (!player) return
    const transferred = transferToCollege(player, offer)
    proceedToNextCollegeSeason(transferred)
  }

  function handleGoToCombine() {
    setCombineStep(1)
    setScreen('combine')
  }

  function handleCombineDecision(choice: CombineChoiceId) {
    if (!player) return
    const updated = applyCombineStepChoice(player, combineStep, choice)
    setActiveCombineResult({ stepDef: COMBINE_STEPS[combineStep - 1], before: player, after: updated })
    setScreen('combineresult')
  }

  function handleCombineResultContinue() {
    if (!activeCombineResult) return
    const updated = activeCombineResult.after
    setActiveCombineResult(null)
    if (combineStep < COMBINE_STEPS.length) {
      setPlayer(updated)
      setCombineStep((s) => (s + 1) as CombineStep)
      setScreen('combine')
      return
    }
    const drafted = runDraft(updated)
    setSeenIds(new Set())
    setPlayer(drafted)
    setScreen('draftresult')
  }

  function handleDraftResultContinue() {
    if (!player) return
    startSeason(player, seenIds)
  }

  function handleProRecapContinue() {
    if (!player) return

    if ((player.contractYearsRemaining ?? 0) <= 0) {
      setScreen('contract')
      return
    }

    const curve = AGE_CURVES[player.position]
    if (player.age >= curve.typicalRetirementAge + 8) {
      setPlayer({ ...player, retired: true, retirementType: 'voluntaire' })
      setScreen('careercard')
      return
    }

    const nextPlayer: Player = { ...player, season: player.season + 1, age: player.age + 1 }
    startSeason(nextPlayer, seenIds)
  }

  function handleContractDecision(choice: ContractChoice) {
    if (!player) return

    if (choice === 'retire') {
      setPlayer({ ...player, retired: true, retirementType: 'voluntaire' })
      setScreen('careercard')
      return
    }

    if (choice === 'free-agency') {
      if (hasNoFreeAgencyOffers(player)) {
        const updated = forcedRetirement(player)
        setPlayer(updated)
        setScreen('careercard')
        return
      }
      setFaOffers(generateFreeAgencyOffers(player))
      setScreen('freeagency')
      return
    }

    const updated = choice === 'extension' ? applyExtension(player) : applyFranchiseTag(player)
    const nextPlayer: Player = { ...updated, season: updated.season + 1, age: updated.age + 1 }
    startSeason(nextPlayer, seenIds)
  }

  function handleFreeAgencySign(offer: FreeAgencyOffer) {
    if (!player) return
    const updated = signFreeAgencyOffer(player, offer)
    const nextPlayer: Player = { ...updated, season: updated.season + 1, age: updated.age + 1 }
    startSeason(nextPlayer, seenIds)
  }

  function handleDestinBriseeContinue() {
    setScreen('careercard')
  }

  function handleRestart() {
    clearSavedGame()
    setPlayer(null)
    setSeenIds(new Set())
    setQueue([])
    setActiveChoice(null)
    setOffers([])
    setSignedWith(null)
    setProResult(null)
    setFaOffers([])
    setTransferOffers([])
    setCombineStep(1)
    setPlayoffBracket([])
    setPlayoffRoundIndex(0)
    setPlayoffOutcome('lost')
    setPlayoffMVP(false)
    setScreen('intro')
  }

  // Toute demande de "Nouvelle carrière" (CareerCard, Act1End, Act2End) passe par ici : une
  // pub interstitielle s'affiche d'abord, le vrai reset (handleRestart) n'a lieu qu'une fois
  // celle-ci terminée.
  function requestRestart() {
    trackInterstitialAdShown()
    setShowRestartAd(true)
  }

  function handleRestartAdFinished() {
    setShowRestartAd(false)
    handleRestart()
  }

  return (
    <div className="flex min-h-svh flex-1 flex-col">
      {screen === 'intro' && (
        <Intro onStart={() => setScreen('creation')} savedPlayer={savedGame?.player ?? null} onContinue={handleContinue} />
      )}

      {screen === 'creation' && <CharacterCreation onComplete={handleCreationComplete} />}

      {screen === 'event' && player && queue.length > 0 && (
        <SeasonEvent event={queue[0]} player={player} onChoose={handleChoose} />
      )}

      {screen === 'result' && activeChoice && (
        <EventResult
          event={activeChoice.event}
          resolvedEffects={activeChoice.resolvedEffects}
          player={activeChoice.player}
          onContinue={handleResultContinue}
        />
      )}

      {screen === 'recap' && player && attributesBefore && (
        <SeasonRecap
          player={player}
          attributesBefore={attributesBefore}
          starRatingBefore={starRatingBefore}
          logsThisSeason={logsThisSeason}
          statsThisSeason={seasonStatsForRecap}
          awardsWon={seasonAwardsForRecap}
          nextLabel={recapNextLabel(player)}
          onContinue={handleRecapContinue}
        />
      )}

      {screen === 'signing' && player && (
        <SigningDay player={player} offers={offers} onSign={handleSign} />
      )}

      {screen === 'end' && player && (
        <Act1End player={player} signedWith={signedWith} onContinue={handleEnterCollege} onRestart={requestRestart} />
      )}

      {screen === 'redshirt' && player && (
        <RedshirtDecision player={player} onDecide={handleRedshirtDecision} />
      )}

      {screen === 'transfer' && player && (
        <TransferPortal player={player} offers={transferOffers} onStay={handleTransferStay} onTransfer={handleTransferSign} />
      )}

      {screen === 'end2' && player && (
        <Act2End player={player} onContinue={handleGoToCombine} onRestart={requestRestart} />
      )}

      {screen === 'combine' && player && (
        <CombineDecision player={player} step={combineStep} onDecide={handleCombineDecision} />
      )}

      {screen === 'combineresult' && activeCombineResult && (
        <CombineResult
          stepDef={activeCombineResult.stepDef}
          before={activeCombineResult.before}
          after={activeCombineResult.after}
          onContinue={handleCombineResultContinue}
        />
      )}

      {screen === 'draftresult' && player && (
        <DraftResult player={player} onContinue={handleDraftResultContinue} />
      )}

      {screen === 'playoffgame' && player && playoffBracket[playoffRoundIndex] && (
        <PlayoffMatchup player={player} game={playoffBracket[playoffRoundIndex]} onPlay={handlePlayoffPlay} />
      )}

      {screen === 'playoffresult' && player && playoffBracket[playoffRoundIndex] && (
        <PlayoffResult
          player={player}
          game={playoffBracket[playoffRoundIndex]}
          outcome={playoffOutcome}
          nextRoundLabel={playoffBracket[playoffRoundIndex + 1]?.roundLabel}
          wonMVP={playoffMVP}
          onContinue={handlePlayoffResultContinue}
        />
      )}

      {screen === 'prorecap' && player && proResult && (
        <ProSeasonRecap
          player={player}
          result={proResult}
          nextLabel={proRecapNextLabel(player)}
          onContinue={handleProRecapContinue}
        />
      )}

      {screen === 'contract' && player && (
        <ContractDecision player={player} onDecide={handleContractDecision} />
      )}

      {screen === 'freeagency' && player && (
        <FreeAgencyOffers player={player} offers={faOffers} onSign={handleFreeAgencySign} />
      )}

      {screen === 'destinbrisee' && player && (
        <DestinBrisee player={player} onContinue={handleDestinBriseeContinue} />
      )}

      {screen === 'careercard' && player && <CareerCard player={player} onRestart={requestRestart} />}

      <AdBannerPlaceholder />
      {showRestartAd && <InterstitialAdOverlay onFinished={handleRestartAdFinished} />}
      {cookieConsent === null && (
        <CookieConsent
          onAccept={() => handleCookieChoice('accepted')}
          onDecline={() => handleCookieChoice('declined')}
        />
      )}
    </div>
  )
}

// Emplacement réservé pour une bannière publicitaire (mobile + desktop) — fixe en bas de
// l'écran sur tous les écrans du jeu. La hauteur réelle vient de --ad-banner-height
// (index.css), et body.padding-bottom lui laisse toujours la place pour ne rien recouvrir.
function AdBannerPlaceholder() {
  useEffect(() => {
    trackAdBannerImpression()
  }, [])

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-black/10 bg-white/95 backdrop-blur-sm"
      style={{ height: 'var(--ad-banner-height)' }}
    >
      <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--text-dim)]">
        Ad space (banner)
      </span>
    </div>
  )
}

export default App
