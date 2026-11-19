import { SectionHead } from '../base/SectionHead'

interface Station {
  when: string
  title: string
  text: string
  status: string
  /** `ok` is live, `lift` is being built, `dash` is a concept; a proposal takes the plain pill. */
  pill?: 'ok' | 'lift' | 'dash'
}

/* The first two stations are live; nothing after them is described as live.
   agents.css draws the solid lime part of the rail over those two (30% of the
   line, 34% once it turns vertical): change it with the number of live stations. */
const STATIONS: Station[] = [
  {
    when: '9 Sep 2026',
    title: 'Agents publish through the CLI and SDK',
    text: 'A wallet of its own, revocable rights, a digest for every write.',
    status: 'Live',
    pill: 'ok',
  },
  {
    when: 'Live',
    title: 'Agent memory on WalMem',
    text: 'Agents store and recall their own memory. The template wires it in.',
    status: 'Live',
    pill: 'ok',
  },
  {
    when: 'Next 60 days',
    title: 'The official template, with a Morse MCP or skill',
    text: 'A fixed skeleton and a swappable brain in the SDK.',
    status: 'Building',
    pill: 'lift',
  },
  {
    when: 'Nov 2026',
    title: 'Walrus Sessions 9, built on Morse',
    text: 'A hackathon: agents that remember with WalMem and prove with Morse.',
    status: 'Proposed',
  },
  {
    when: 'Later',
    title: 'Hosting agents on Walrus',
    text: 'An early concept with a governance layer. Not a product yet.',
    status: 'Concept',
    pill: 'dash',
  },
]

/** Five stations on one rail: solid and glowing through the live ones, dashed after. Vertical below 1080px. */
export function Roadmap() {
  return (
    <section className="sec flush" id="roadmap">
      <div className="wrap">
        <SectionHead
          label="Roadmap"
          title={
            <>
              What ships next <em>for Agents.</em>
            </>
          }
          lead="Dates are targets. The template is not shipped yet; the agent path through the CLI and SDK is."
        />
        <div className="rail5">
          {STATIONS.map(({ when, title, text, status, pill }) => (
            <div key={title} className={pill === 'ok' ? 'st live' : 'st'}>
              <i aria-hidden="true" />
              <span className="when">{when}</span>
              <b>{title}</b>
              <p>{text}</p>
              <span className={pill === undefined ? 'pill' : `pill ${pill}`}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
