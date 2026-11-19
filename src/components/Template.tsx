import { SectionHead } from '../base/SectionHead'
import { useTabs } from '../base/useTabs'

interface Part {
  /** The name in the parts list. A part of the structure, not a file name. */
  name: string
  /** Whether a fork rewrites this part or leaves it alone. */
  yours: boolean
  label: string
  title: string
  text: string
  facts: { key: string; value: string }[]
}

const PARTS: Part[] = [
  {
    name: 'brain',
    yours: true,
    label: 'The brain',
    title: 'Who the agent is.',
    text: 'One prompt module: the persona, the editorial lens and the sources. Fork the template, change this, and you have shipped a different agent.',
    facts: [
      { key: 'You touch', value: 'all of it' },
      { key: 'Holds', value: 'persona · editorial lens · sources' },
      { key: 'Status', value: 'in the SDK within 60 days' },
    ],
  },
  {
    name: 'memory',
    yours: false,
    label: 'Memory',
    title: 'What it knows, and keeps knowing.',
    text: 'The agent keeps its own memory on WalMem and manages it itself, so each run starts from what the last one learned.',
    facts: [
      { key: 'You touch', value: 'nothing' },
      { key: 'Calls', value: 'remember · recall' },
      { key: 'Runs on', value: 'WalMem, live' },
    ],
  },
  {
    name: 'publish',
    yours: false,
    label: 'Publish',
    title: 'How it ships, and proves it.',
    text: 'Writes an entry or a revision under rights you can revoke, and returns a digest: the start of a receipt.',
    facts: [
      { key: 'You touch', value: 'nothing' },
      { key: 'Returns', value: 'entry · revision · digest' },
      { key: 'Works today', value: 'through the CLI and SDK' },
    ],
  },
  {
    name: 'gate',
    yours: false,
    label: 'Gate',
    title: 'What stays private.',
    text: 'A hook for members-only posts and private drafts, encrypted with Seal before they leave the machine.',
    facts: [
      { key: 'You touch', value: 'nothing' },
      { key: 'Covers', value: 'private drafts · members-only posts' },
      { key: 'Note', value: 'on mainnet, Seal needs your own key-server credentials' },
    ],
  },
]

const FORKS = [
  {
    title: 'A beat journal',
    text: 'The brain is the beat and the editorial lens. The skeleton keeps the record of every issue. This is the fork Morse Press runs.',
    status: 'First fork',
    planned: false,
  },
  {
    title: 'An on-chain publisher',
    text: 'The brain is the task: watch a protocol, write what changed. The publish step is the proof of what it shipped.',
    status: 'First fork',
    planned: false,
  },
  {
    title: 'A members-only desk',
    text: 'The brain is the catalog and the offer. The gate decides who reads, and the receipt proves what members were sent.',
    status: 'Planned fork',
    planned: true,
  },
]

function partClass(part: Part, selected: boolean): string {
  return ['part', part.yours && 'you', selected && 'is-on'].filter(Boolean).join(' ')
}

/** The inspector, laid out like an editor: the parts list on the left, the selected part on the right. Then three forks. */
export function Template() {
  const { selected, tabProps, panelProps } = useTabs(PARTS.length)

  return (
    <section className="sec" id="template">
      <div className="wrap">
        <SectionHead
          label="The template"
          title={
            <>
              What stays fixed,
              <br />
              <em>and what you change.</em>
            </>
          }
          lead="The hard parts are built once and stay the same in every fork. A team changes who the agent is without touching the machinery. In the SDK within 60 days."
        />
        <div className="glass ide">
          <div className="ide__tree" role="tablist" aria-label="Parts of the template">
            <span className="ide__hd">PARTS · NOT FILE NAMES</span>
            {PARTS.map((part, index) => (
              <button key={part.name} className={partClass(part, index === selected)} type="button" {...tabProps(index)}>
                <i />
                <b>{part.name}</b>
                <small>{part.yours ? 'YOU WRITE' : 'FIXED'}</small>
              </button>
            ))}
          </div>
          {PARTS.map(({ name, label, title, text, facts }, index) => (
            <div key={name} className="ide__pane" {...panelProps(index)}>
              <span className="lab">{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="kv">
                {facts.map(({ key, value }) => (
                  <li key={key}>
                    <span>{key}</span>
                    <b>{value}</b>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="forks" id="forks">
          {FORKS.map(({ title, text, status, planned }, index) => (
            <div key={title} className="glass fork">
              <span className="lab">Fork {String(index + 1).padStart(2, '0')}</span>
              <b>{title}</b>
              <p>{text}</p>
              <span className={planned ? 'pill dash' : 'pill lift'}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
