/* Every URL the site links to. The design file uses relative links
   (index.html, receipts.html, press.html); these are the real addresses they
   map to. */

/** The landing: Morse, the kit. */
export const MORSE = 'https://www.morsecms.xyz/'
export const MORSE_RECEIPTS = 'https://receipts.morsecms.xyz/'
export const MORSE_PRESS = 'https://press.morsecms.xyz/'
export const UPLOADER_APP = 'https://uploader.morsecms.xyz'

export const DOCS = 'https://docs.morsecms.xyz/'
export const DOCS_AGENT_COOKBOOK = 'https://docs.morsecms.xyz/agent-publishes.html'
export const DOCS_FOR_AGENTS = 'https://docs.morsecms.xyz/use-morse-with-ai.html'
export const GITHUB = 'https://github.com/arcadiasystems/morse-dcms'

/** "Get early access" opens a new issue on the Morse repository. The design
    added `?labels=agent-template`; that label does not exist on the
    repository, so the parameter is left out until the owner creates it. The
    day the template ships, every action that uses this becomes "Fork the
    template" and points at the template's repository. */
export const EARLY_ACCESS = 'https://github.com/arcadiasystems/morse-dcms/issues/new'

/* Routes on this site. */
export const HOME = '/'
export const HOME_TODAY = '/#today'
