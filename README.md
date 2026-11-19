# Morse Agents

The product site for **Morse Agents**, at
[agents.morsecms.xyz](https://agents.morsecms.xyz): an open agent template for
developers. How the agent remembers, publishes, proves and gates is built
once; who the agent is lives in one prompt module. Agents publish through the
Morse CLI and SDK today; the template is planned for the SDK within 60 days.

One of three sibling sites that share one dark base:
[Morse Receipts](https://receipts.morsecms.xyz) (paper), Morse Agents (lime)
and [Morse Press](https://press.morsecms.xyz) (vermilion).

## Routes

| Route | What it is |
|---|---|
| `/` | The site: seven sections, prerendered and then hydrated |
| anything else | `404.html`, served with a 404 status. Static, no script |

## Develop

```sh
npm install
npm run dev      # vite dev server, the page prerendered on request
npm run build    # tsc + production build, prerendered to static HTML in dist/
npm run lint     # eslint
npm run og       # redraw public/og.png, the share image, from og/ (needs Playwright's Chromium)
npm run icons    # redraw the icon files in public/ from favicon.svg and og/icon-full.svg
```

Stack: Vite + React 19 + TypeScript (strict), plain CSS, no runtime dependency
beyond React. Same toolchain as `arcadiasystems/morse-landing`.

## Structure

| Path | What lives there |
|---|---|
| `src/styles/base.css` | The shared dark base. Identical in the three sites |
| `src/styles/tokens.css` | This site's `:root` tokens: the Phosphor Lime palette |
| `src/styles/agents.css` | This site's own objects: the rig, the diff, the inspector, the terminal, the roadmap rail |
| `src/base/` | The React pieces the base implies (nav, status label, footer, final band, band, tabs). Identical in the three sites |
| `src/components/` | One component per section of the page |
| `src/lib/links.ts` | Every URL the site links to |
| `vite.config.ts` | The build, and the plugin that prerenders each page |
| `og/` | The share image as a page (`og.html`, `Card.tsx`, `card.css`: identical in the three sites; `main.tsx` and `object.css`: this site's content and hero object) and `icon-full.svg`, the full-bleed icon source. Not a build input |
| `scripts/` | `og.mjs` and `icons.mjs` draw `public/og.png` and the icon files with Playwright; `png.mjs` re-compresses what they write. Run by hand, never by the build or CI. Identical in the three sites |

`src/styles/base.css` and `src/base/` are written in
`arcadiasystems/morse-receipts` and copied here verbatim. Do not edit them
here: change them in morse-receipts and copy them again, so the three sites
never drift.

## Design handover

The design is `agents.html` in the `morse-sites-v4` design package, described
in its `HANDOVER.md` (section "Morse Agents") and `HANDOVER-landing.md`. The
package is kept by the owner and is not committed here. Class names in the
code are the ones the handover uses, so it stays a usable map: `.rig`, `.iso`,
`.board`, `.cart`, `.gitst`, `.diff`, `.ide`, `.kv`, `.forks`, `.tty`,
`.rail5`.

Three things to keep when changing the page:

- The cartridge runs on two linked animations in `agents.css`: `cart` (3
  seconds, the lift) and `lab` (9 seconds, stepped, one label per 3 seconds),
  offset so the label changes at the top of the lift. Keep the offsets in step
  if either timing changes.
- The rig is scaled with `transform: scale()` in front of its rotation at
  1080px and 860px. Do not resize its children.
- `--ok` equals `--acc`, so "live" is the accent itself and the page has one
  green.

## The day the template ships

"Get early access" appears in the nav, the hero and the final band, and all
three read `EARLY_ACCESS` in `src/lib/links.ts`. Change the label to "Fork the
template" and point the constant at the template's repository. The terminal's
commands were checked against `@arcadiasystems/morse-cli` 0.14.0; check them
again when the CLI changes.

## Hosting

Deployed by Vercel from this repository: production from `main`, a preview
for every pull request, custom domain `agents.morsecms.xyz`. `vercel.json`
holds everything the deployment needs:

- Framework preset `vite`, install `npm ci`, build `npm run build`, output `dist`.
- Clean URLs with no trailing slash.
- Unknown paths get `404.html` with a 404 status.
- Files under `/assets/` are fingerprinted by the build and cached for a year.
  Everything else, HTML included, is revalidated on every request.

## Measurement

No analytics or tracking script is loaded; choosing a tool is the owner's
call. The elements to measure carry stable attributes.

`data-cta`, actions on this site:

| Value | Element |
|---|---|
| `primary` | Hero, "Get early access". The site's primary event: early access clicks, then template forks once it ships |
| `secondary` | Hero, "Publish from an agent today" |
| `nav-early-access` | Nav, "Get early access" |
| `agent-cookbook` | Publish today, "Agent cookbook" |
| `docs-for-agents` | Publish today, "Docs for agents" |
| `final-primary`, `final-secondary` | The final band's two buttons |

`data-link`, links to the sibling sites:

| Value | Where |
|---|---|
| `morse` | Nav "Morse ↗", footer |
| `morse-press` | Nav "No code? Press", the line under the hero buttons, the Press band, footer |
| `morse-receipts` | Footer |
| `morse-uploader` | Footer |

## Licence

MIT. See [LICENSE](LICENSE).
