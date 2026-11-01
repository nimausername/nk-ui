/**
 * Scroll Fade docs — markdown for Copy Page / AI.
 */

export const scrollFadeDocsTitle = "Scroll Fade"

export const scrollFadeDocsDescription =
  "A CSS effect (not a component): add a class to any overflow element to fade its edges. Optional smart hook fades the exit edge while scrolling. Pair with @nk/scroll-area on the viewport when you want custom scrollbars."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const scrollFadeDocsUpdatedAt = "2026-11-01"

export const scrollFadeDocsMarkdown = `# Scroll Fade

${scrollFadeDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/scroll-fade
\`\`\`

This merges the CSS utilities into your global stylesheet and installs \`hooks/use-scroll-fade-direction.ts\`.

The CLI merges scroll-fade utilities into your global CSS (or copies \`styles/scroll-fade.css\` for you to import next to \`@import "tailwindcss"\`).

## Effect vs component

- **Scroll Fade** — CSS utility / effect. Install \`@nk/scroll-fade\`.
- **Scroll Area** — component with custom scrollbars. Install [\`@nk/scroll-area\`](/docs/components/scroll-area) and put \`scroll-fade\` on the viewport.

## Usage

Add \`scroll-fade\` (or \`scroll-fade-y\`) to the element that scrolls — the one with \`overflow-y-auto\`:

\`\`\`tsx
<div className="h-72 scroll-fade scrollbar-none overflow-y-auto">{/* ... */}</div>
\`\`\`

With [\`Scroll Area\`](/docs/components/scroll-area), put the class on the **viewport** (the real scroller), not the root:

\`\`\`tsx
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area"

export function Example() {
  return (
    <ScrollArea className="h-72 rounded-2xl border">
      <ScrollAreaViewport className="scroll-fade h-full">
        <ScrollAreaContent>{/* ... */}</ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  )
}
\`\`\`

Put surface styles (border, background) on a wrapper and \`scroll-fade\` on the scroller so the mask dissolves content, not the chrome.

## Classes

| Class | Behavior |
| --- | --- |
| \`scroll-fade\` / \`scroll-fade-y\` | Vertical position-aware fade |
| \`scroll-fade-x\` | Horizontal / inline fade (RTL-aware) |
| \`scroll-fade-t\` / \`b\` / \`l\` / \`r\` | Physical single-edge fades |
| \`scroll-fade-s\` / \`e\` | Logical start/end edges (RTL-aware) |
| \`scroll-fade-<n>\` / \`scroll-fade-[…]\` | Fade depth on the spacing scale or arbitrary |
| \`scroll-fade-{t,b,s,e}-<n>\` | Per-edge size |
| \`scroll-fade-none\` | Disable the mask |
| \`scroll-fade-smart\` | Opt-in direction override (needs the hook) |
| \`scrollbar-none\` / \`no-scrollbar\` | Hide native scrollbars |

Default fade depth is \`12%\` of the container, capped at \`40px\`. Reveal distance is \`--scroll-fade-reveal\` (\`96px\` by default).

## Smart direction

While scrolling, fade the **exit** edge (scroll down → top fades; scroll up → bottom fades). When idle (~200ms), clear the override so position-aware fades resume.

\`\`\`tsx
"use client"

import { useScrollFadeDirection } from "@/hooks/use-scroll-fade-direction"

export function SmartExample() {
  const ref = useScrollFadeDirection({ axis: "y" })

  return (
    <div
      ref={ref}
      className="scroll-fade scroll-fade-smart overflow-y-auto h-72"
    >
      {/* ... */}
    </div>
  )
}
\`\`\`

Hook options: \`axis: "y" | "x" | "inline"\` (default \`"y"\`), \`idleMs\` (default \`200\`), \`threshold\` (default \`1\`). Respects \`prefers-reduced-motion\` (skips direction overrides).

## Notes

- Position mode uses CSS scroll-driven animations — no scroll listeners. Unsupported browsers fall back to a static edge fade.
- No overflow → no fade.
- Pair with [\`Scroll Area\`](/docs/components/scroll-area) for custom thumbs; use \`scrollbar-none\` on bare overflow containers.
`
