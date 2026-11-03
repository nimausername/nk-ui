/**
 * Shader Background component docs — markdown for Copy Page / AI.
 */

export const shaderBackgroundDocsTitle = "Shader Background"

export const shaderBackgroundDocsDescription =
  "A small set of product WebGL atmospheres — mist, haze, current, signal, and more — with nk names, defaults, scrim, and pause. Installable via @nk/shader-background."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const shaderBackgroundDocsUpdatedAt = "2026-11-03"

/** Inspiration credit — beUI idea of a typed shader surface. */
export const shaderBackgroundDocsInspiration = {
  label: "beUI — Shader Background",
  href: "https://beui.dev/components/motion/shader-background",
  author: "beUI",
  authorHref: "https://beui.dev",
} as const

/** Rendering engine credit — Paper Shaders WebGL package. */
export const shaderBackgroundDocsEngine = {
  label: "Paper Shaders",
  href: "https://shaders.paper.design",
  author: "Paper Design",
  authorHref: "https://paper.design",
} as const

export const shaderBackgroundDocsMarkdown = `# Shader Background

${shaderBackgroundDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/shader-background
\`\`\`

Installs \`@paper-design/shaders-react\` and pulls \`@nk/utils\`. Needs WebGL in the browser.

Pin the Paper package in apps that care about lockfile stability — it ships under \`0.0.x\` and may introduce breaking changes between minors.

## Usage

\`\`\`tsx
"use client"

import { ShaderBackground } from "@/components/ui/shader-background"

export function HeroMist() {
  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-2xl">
      <ShaderBackground effect="mist" scrim className="absolute inset-0" />
    </div>
  )
}
\`\`\`

## Effects

Eight curated atmospheres — not a dump of every Paper/beUI demo. Use \`SHADER_EFFECTS\` for pickers.

| Effect | Feel |
|--------|------|
| \`mist\` | Soft grain mist (default hero) |
| \`haze\` | Light grain for bright surfaces |
| \`current\` | Slow ink mesh |
| \`signal\` | High-contrast mesh + cool accent |
| \`ember\` | Warm static radial glow |
| \`night\` | Deep static mesh |
| \`ink\` | Mono technical noise |
| \`lattice\` | Sparse structural dots |

Override with \`colors\`, \`speed\`, \`softness\`, and friends when a look needs a tweak.

## nk controls

- \`paused\` — freeze the frame
- \`scrim\` — soft veil for text (\`true\` ≈ 45%, or \`0\`–\`1\`; uses \`--background\`)
- Auto-pauses when off-screen, the tab is hidden, or \`prefers-reduced-motion\` is on

## Notes

- Client-only (\`"use client"\`). Give the parent a definite size — the surface fills \`h-full w-full\`.
- Decorative by default (\`aria-hidden\` on the root).
- Need a Paper shader nk does not ship? Use \`@paper-design/shaders-react\` directly.

## Performance

- Use **one** full-bleed instance per view.
- Prefer bounded heights over always-on viewport backgrounds on low-end devices.

## Credits

Idea inspired by [${shaderBackgroundDocsInspiration.label}](${shaderBackgroundDocsInspiration.href}) ([${shaderBackgroundDocsInspiration.author}](${shaderBackgroundDocsInspiration.authorHref})). Shader Background is an original nk catalog — its own effect names, palettes, and controls — not a port of beUI’s effect list.

Rendering engines from [${shaderBackgroundDocsEngine.label}](${shaderBackgroundDocsEngine.href}) by [${shaderBackgroundDocsEngine.author}](${shaderBackgroundDocsEngine.authorHref}).
`
