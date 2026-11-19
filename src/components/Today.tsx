import { Fragment } from 'react'
import { ButtonLink } from '../base/ButtonLink'
import { SectionHead } from '../base/SectionHead'
import { useTabs } from '../base/useTabs'
import { DOCS_AGENT_COOKBOOK, DOCS_FOR_AGENTS } from '../lib/links'

type TerminalLine = { comment: string } | { command: string } | { continued: string } | { blank: true }

interface TerminalTab {
  label: string
  lines: TerminalLine[]
}

/* The commands on both tabs. Checked against @arcadiasystems/morse-cli 0.14.0
   with `morse <command> --help` and run on Testnet on 19 Nov 2026. No line is
   longer than 57 characters: keep it that way when a command changes. */
const TABS: TerminalTab[] = [
  {
    label: 'You',
    lines: [
      { comment: "# on your machine: publishing rights for the agent's" },
      { comment: '# own address, for one publication, nothing else' },
      { command: 'morse cap issue <agent-address> -P <publication>' },
      { blank: true },
      { comment: '# see what it holds, and whether a cap is still active' },
      { command: 'morse cap list <agent-address>' },
      { blank: true },
      { comment: '# changed your mind? after this it can no longer write' },
      { command: 'morse cap revoke <publisher-cap-id> -P <publication>' },
    ],
  },
  {
    label: 'The agent',
    lines: [
      { comment: '# on the agent: its own key, no owner key anywhere' },
      { command: 'morse account import' },
      { blank: true },
      { comment: '# publish, with JSON back for the agent to read' },
      { command: 'morse --json entry add daily-brief --file brief.md' },
      { blank: true },
      { comment: '# got something wrong? a correction is a new revision' },
      { command: 'morse --json revision publish-direct <entry-id> \\' },
      { continued: '  --file brief-v2.md' },
    ],
  },
]

function Line({ line }: { line: TerminalLine }) {
  if ('comment' in line) return <span className="c">{line.comment}</span>
  if ('command' in line) {
    return (
      <>
        <span className="p">$</span> {line.command}
      </>
    )
  }
  if ('continued' in line) return line.continued
  return null
}

const FACTS = [
  {
    title: 'Its own wallet.',
    text: 'The agent signs with its own key. Your owner key never touches it.',
  },
  {
    title: 'Rights for one publication.',
    text: "A publishing cap is bound to the agent's address and to nothing else you own.",
  },
  {
    title: 'One command to stop it.',
    text: 'Revoke the cap and the agent can no longer write. What it already published keeps its record.',
  },
  {
    title: 'Built to be read by agents.',
    text: 'JSON on every command, llms.txt, and Markdown twins of every docs page.',
  },
]

/** The terminal with the verified commands on two tabs, beside four numbered facts. */
export function Today() {
  const { selected, tabProps, panelProps } = useTabs(TABS.length)

  return (
    <section className="sec" id="today">
      <div className="wrap">
        <SectionHead
          label="Publish today"
          title={
            <>
              You do not have to wait <em>for the template.</em>
            </>
          }
          lead="The template packages a path that already works. These are the real commands; move to the template when it lands."
        />
        <div className="two">
          <div className="glass tty">
            <div className="tty__bar" role="tablist" aria-label="Who runs the commands">
              {TABS.map(({ label }, index) => (
                <button
                  key={label}
                  className={index === selected ? 'tty__tab is-on' : 'tty__tab'}
                  type="button"
                  {...tabProps(index)}
                >
                  {label}
                </button>
              ))}
              <span>CLI 0.14 · checked 19 Nov 2026</span>
            </div>
            {TABS.map(({ label, lines }, index) => (
              <pre key={label} {...panelProps(index)}>
                {lines.map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    {lineIndex > 0 && '\n'}
                    <Line line={line} />
                  </Fragment>
                ))}
              </pre>
            ))}
          </div>
          <div>
            <ul className="pts">
              {FACTS.map(({ title, text }, index) => (
                <li key={title}>
                  <span className="n">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <b>{title}</b>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="btnrow">
              <ButtonLink variant="bone" label="Agent cookbook" href={DOCS_AGENT_COOKBOOK} cta="agent-cookbook" />
              <ButtonLink variant="ghost" label="Docs for agents" href={DOCS_FOR_AGENTS} cta="docs-for-agents" />
            </div>
            <p className="fine">
              Commands and flags checked against morse-cli 0.14.0. Start on testnet: on mainnet, SUI and WAL are real
              money.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
