import { Band } from '../base/Band'
import { Lockup } from '../base/Lockup'
import { MORSE_PRESS } from '../lib/links'
import { PressMark } from './PressMark'

/** One glass band that sends non-coders to Morse Press. The Press lockup carries its own colour, vermilion. */
export function PressBand() {
  return (
    <section className="sec flush" id="press">
      <div className="wrap">
        <Band
          href={MORSE_PRESS}
          link="morse-press"
          lockup={<Lockup product="press" Mark={PressMark} markSize={40} productColor="var(--press)" fontSize={22} />}
          title="Would rather not run it yourself?"
          text="Morse Press runs this template for you. Set the sources, the brain and the voice in a form, and the agent runs your journal."
          action="Open Morse Press"
        />
      </div>
    </section>
  )
}
