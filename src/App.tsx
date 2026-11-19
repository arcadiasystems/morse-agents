import { FinalBand } from './base/FinalBand'
import { Footer } from './base/Footer'
import { Nav } from './base/Nav'
import { TraceMark } from './base/TraceMark'
import { Hero } from './components/Hero'
import { PressBand } from './components/PressBand'
import { Roadmap } from './components/Roadmap'
import { Template } from './components/Template'
import { Today } from './components/Today'
import { Why } from './components/Why'
import { DOCS, EARLY_ACCESS, GITHUB, MORSE, MORSE_PRESS, MORSE_RECEIPTS, UPLOADER_APP } from './lib/links'

const NAV_LINKS = [
  { label: 'The template', href: '#template' },
  { label: 'Forks', href: '#forks' },
  { label: 'Publish today', href: '#today' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'No code? Press', href: MORSE_PRESS, link: 'morse-press' },
]

const FOOTER_LINKS = [
  { label: 'Morse kit', href: MORSE, link: 'morse' },
  { label: 'Receipts', href: MORSE_RECEIPTS, link: 'morse-receipts' },
  { label: 'Press', href: MORSE_PRESS, link: 'morse-press' },
  { label: 'Uploader', href: UPLOADER_APP, link: 'morse-uploader' },
  { label: 'Docs', href: DOCS },
  { label: 'GitHub', href: GITHUB },
]

export default function App() {
  return (
    <>
      <Nav
        product="Agents"
        Mark={TraceMark}
        links={NAV_LINKS}
        morseHref={MORSE}
        action={{ label: 'Get early access', href: EARLY_ACCESS, leaves: true, cta: 'nav-early-access' }}
      />
      <main>
        <Hero />
        <Why />
        <Template />
        <Today />
        <PressBand />
        <Roadmap />
        <FinalBand
          Mark={TraceMark}
          headline={
            <>
              Fork it.
              <br />
              <em>Change one file.</em>
            </>
          }
          primary={{ label: 'Get early access', href: EARLY_ACCESS, leaves: true, cta: 'final-primary' }}
          secondary={{ label: 'Publish from an agent today', href: '#today', cta: 'final-secondary' }}
        />
      </main>
      <Footer
        product="Agents"
        Mark={TraceMark}
        links={FOOTER_LINKS}
        line="Morse Agents: an open agent template. Part of Morse, built by Arcadia Systems with a grant from the Walrus Foundation. © 2026 · Open source, MIT licence"
      />
    </>
  )
}
