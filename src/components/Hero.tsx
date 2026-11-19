import { ButtonLink } from '../base/ButtonLink'
import { StatusLabel } from '../base/StatusLabel'
import { EARLY_ACCESS, MORSE_PRESS } from '../lib/links'

/* The parts describe the template's structure. They are not file or folder
   names: replace them with the real layout once the template exists. */
const FIXED_PARTS = [
  { name: 'memory', runsOn: 'WALMEM' },
  { name: 'publish', runsOn: 'RECEIPT' },
  { name: 'gate', runsOn: 'SEAL' },
]

/* One label per lift of the cartridge. agents.css holds one animation delay
   per label, so a fourth brain needs a fourth delay and a longer `lab` cycle. */
const BRAINS = ['Beat reporter', 'Changelog writer', 'Research digest']

/** The rig: an isometric board with three fixed chips and the lime cartridge that lifts out and changes its label. */
function Board() {
  return (
    <div className="iso">
      <div className="board">
        <span className="slot" />
        {FIXED_PARTS.map(({ name, runsOn }, index) => (
          <div key={name} className={`chip3 c${index + 1}`}>
            <b>{name}</b>
            <small>{runsOn}</small>
          </div>
        ))}
        <div className="cart">
          <small>THE BRAIN · YOU WRITE THIS</small>
          <div className="swap">
            {BRAINS.map(brain => (
              <b key={brain}>{brain}</b>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** The panel over the lower left of the rig, read like a status listing: what a fork changed. */
function ForkStatus() {
  return (
    <div className="gitst">
      <div className="gitst__hd">
        <span>FORK · WHAT CHANGED</span>
        <span>1 OF 4</span>
      </div>
      <ul>
        <li className="m">
          <span>~</span>
          <span>brain</span>
          <span>rewritten</span>
        </li>
        {FIXED_PARTS.map(({ name }) => (
          <li key={name}>
            <span />
            <span>{name}</span>
            <span>unchanged</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The hero object: the board with its cartridge, the fork listing over it, and the sketch label. Also drawn on the share image (og/main.tsx). */
export function Rig() {
  return (
    <div
      className="rig"
      role="group"
      aria-label="The agent template: a brain cartridge that swaps on a fixed board of three parts"
    >
      <Board />
      <ForkStatus />
      <span className="pill sample">A sketch, not shipped yet</span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <span className="glow a" />
      <span className="glow b" />
      <div className="wrap hero__grid">
        <div className="hero__l">
          <StatusLabel cells={['LIVE', 'PUBLISHING TODAY', 'TEMPLATE IN 60 DAYS']} word="AGENTS" />
          <h1 className="thin">
            One skeleton.
            <br />
            <em>Swap the brain.</em>
          </h1>
          <p className="sub">
            An open agent template for developers. How the agent remembers, publishes, proves and gates is already
            built. Who the agent is lives in one prompt module, so a new agent is one file.
          </p>
          {/* PRIMARY CTA. Swap to "Fork the template" and point at the repo the day the template ships. */}
          <div className="hero__cta">
            <ButtonLink variant="acc" label="Get early access" href={EARLY_ACCESS} leaves cta="primary" />
            <ButtonLink variant="ghost" label="Publish from an agent today" href="#today" cta="secondary" />
          </div>
          {/* Each run of text is one string, so it is one text node and measures as the design's does. */}
          <p className="hero__fine">
            {'Would rather not write code? '}
            <a href={MORSE_PRESS} data-link="morse-press">
              Morse Press
            </a>
            {' runs the same template for you from a form.'}
          </p>
        </div>
        <Rig />
      </div>
    </section>
  )
}
