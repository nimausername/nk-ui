/**
 * GlyphFlux component docs — markdown for Copy Page / AI.
 */

export const glyphFluxDocsTitle = "GlyphFlux"

export const glyphFluxDocsDescription =
  "A WebGL gradient field sampled into flickering ASCII glyphs. Choose a silhouette, tune density and glow, and scramble cells with the pointer. Installable via @nk/glyph-flux."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const glyphFluxDocsUpdatedAt = "2026-11-01"

/** Credit line for the docs page and markdown export. */
export const glyphFluxDocsCredit = {
  label: "React Bits — Gradient ASCII",
  href: "https://reactbits.dev/backgrounds/gradient-ascii",
  author: "David Haz",
  authorHref: "https://davidhaz.com",
} as const

export const glyphFluxDocsMarkdown = `# GlyphFlux

${glyphFluxDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/glyph-flux
\`\`\`

Pulls \`@nk/utils\` as a registry dependency. Needs WebGL2 in the browser.

## Usage

\`\`\`tsx
"use client"

import { GlyphFlux } from "@/components/ui/glyph-flux"

export function Example() {
  return (
    <div className="relative h-[560px] w-full">
      <GlyphFlux
        shape="ridge"
        interactive
        clickEffect="wave"
        intro
      />
    </div>
  )
}
\`\`\`

## Shapes

| Shape | Feel |
|-------|------|
| \`ridge\` | Soft horizon arch and sky falloff |
| \`conduit\` | Center pinch / energy vein |
| \`bloom\` | Rising swell from below |
| \`corona\` | Ring with noisy rays |

## Notes

- Client-only (\`"use client"\`). Give the parent a definite height.
- Respects \`prefers-reduced-motion\` (freezes animation; still paints a frame).
- \`lightMode\` switches to ink-on-light compositing.
- Live previews are on the docs page.

## Performance

GlyphFlux is a WebGL effect, not a lightweight CSS decoration.

- Use **one instance** per view (hero / section background). Avoid stacking several full-bleed fields.
- Modern phones are fine for a single bounded-height block; low-end devices and always-on full-viewport use will cost more GPU.
- Lighter on mobile: \`glow={0}\` (or very low), larger \`cellSize\` (20–24), lower \`grain\` / \`speed\`.
- Animation pauses when off-screen or the tab is hidden. DPR is capped at 2.
- Needs WebGL2. If unavailable, the canvas stays blank — the rest of the page should still work.

## Credits

Idea inspired by [React Bits — Gradient ASCII](${glyphFluxDocsCredit.href}) by [${glyphFluxDocsCredit.author}](${glyphFluxDocsCredit.authorHref}). GlyphFlux is an original nk implementation with its own shapes, API, and defaults.
`
