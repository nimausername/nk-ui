/**
 * Scroll Area component docs — markdown for Copy Page / AI.
 */

export const scrollAreaDocsTitle = "Scroll Area"

export const scrollAreaDocsDescription =
  "Native scroll container with custom scrollbars on Base UI. Compose Root, Viewport, Content, Scrollbar, and Thumb. Pair with Scroll Fade on the viewport for edge fades."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const scrollAreaDocsUpdatedAt = "2026-11-01"

export const scrollAreaDocsMarkdown = `# Scroll Area

${scrollAreaDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/scroll-area
\`\`\`

## Usage

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
    <ScrollArea className="h-72 w-full max-w-xs rounded-2xl border">
      <ScrollAreaViewport className="h-full">
        <ScrollAreaContent>{/* items */}</ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  )
}
\`\`\`

## With Scroll Fade

Scroll Fade is a separate CSS effect (\`@nk/scroll-fade\`). Put fade classes on the **viewport**, not the root:

\`\`\`tsx
<ScrollAreaViewport className="scroll-fade h-full">
  <ScrollAreaContent>{/* items */}</ScrollAreaContent>
</ScrollAreaViewport>
\`\`\`

## Composition

| Part | Role |
| --- | --- |
| \`ScrollArea\` | Root — height, border, radius |
| \`ScrollAreaViewport\` | Real scroller — overflow + optional \`scroll-fade\` |
| \`ScrollAreaContent\` | Content wrapper |
| \`ScrollAreaScrollbar\` | Track (\`orientation="vertical" \\| "horizontal"\`) |
| \`ScrollAreaThumb\` | Draggable thumb |
| \`ScrollAreaCorner\` | Corner when both axes scroll |

## Notes

- Built on Base UI (\`@base-ui/react/scroll-area\`).
- Give the root a fixed height (or \`h-full\` inside a sized parent) so the viewport can overflow.
- Related: [\`Scroll Fade\`](/docs/components/scroll-fade) (\`@nk/scroll-fade\`).
`
