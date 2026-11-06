/**
 * Hover Card component docs — markdown for Copy Page / AI.
 */

export const hoverCardDocsTitle = "Hover Card"

export const hoverCardDocsDescription =
  "Rich hover / focus previews on Base UI Preview Card — links, media, profiles, placement, timestamps, release notes, multi-trigger payloads, and dialog nesting."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const hoverCardDocsUpdatedAt = "2026-11-06"

export const hoverCardDocsMarkdown = `# Hover Card

${hoverCardDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/hover-card
\`\`\`

## Composition model

- \`HoverCard\` — root (\`open\` / \`handle\` / handlers)
- \`HoverCardTrigger\` — hover / focus target (\`href\`, \`render\`, \`delay\`, \`closeDelay\`, \`payload\`)
- \`HoverCardContent\` — portaled surface (\`side\`, \`align\`, optional arrow)
- \`HoverCardHeader\` / \`HoverCardTitle\` / \`HoverCardDescription\` — body chrome
- \`HoverCardViewport\` — animated swaps for multi-trigger payloads
- \`createHoverCardHandle\` — detached / shared triggers

## Usage

\`\`\`tsx
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Example() {
  return (
    <HoverCard>
      <p>
        Learn about{" "}
        <HoverCardTrigger
          href="https://en.wikipedia.org/wiki/Typography"
          className="underline"
        >
          typography
        </HoverCardTrigger>
        .
      </p>
      <HoverCardContent>
        <HoverCardHeader>
          <HoverCardTitle>Typography</HoverCardTitle>
          <HoverCardDescription>
            The art of arranging type.
          </HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/preview-card\`), shipped as \`HoverCard\` to match common design-system naming.
- Richer than [Tooltip](/docs/components/tooltip); lighter than a click [Popover](/docs/components/popover).
- Default trigger delays: open \`600ms\`, close \`300ms\` — override per trigger.
- Themes with nk black/white CSS variables (light/dark), including \`popover\`.
- Live previews (Preview / Profile / Placement / Advanced tabs, RTL) are on the docs page — including image captions, live timestamps, and paginated release notes.
`
