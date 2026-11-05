/**
 * Collapsible component docs — markdown for Copy Page / AI.
 */

export const collapsibleDocsTitle = "Collapsible"

export const collapsibleDocsDescription =
  "Single expand / collapse region on Base UI — trigger, animated panel, controlled open, and disabled."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const collapsibleDocsUpdatedAt = "2026-11-05"

export const collapsibleDocsMarkdown = `# Collapsible

${collapsibleDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/collapsible
\`\`\`

## Usage

\`\`\`tsx
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function Example() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Details</CollapsibleTrigger>
      <CollapsiblePanel>
        Extra context that stays out of the way until needed.
      </CollapsiblePanel>
    </Collapsible>
  )
}
\`\`\`

## Notes

- Parts: \`Collapsible\` / \`CollapsibleTrigger\` / \`CollapsiblePanel\`.
- Built on Base UI (\`@base-ui/react/collapsible\`).
- Uncontrolled: \`defaultOpen\`. Controlled: keep \`open\` + \`onOpenChange\` in the parent when you need to read or set open yourself.
- \`disabled\` on the root disables the trigger.
- Panel height animates via \`--collapsible-panel-height\`.
- \`CollapsibleTrigger\` includes a chevron by default — set \`showChevron={false}\` for a custom control.
- For many sections that coordinate open state, use [Accordion](/docs/components/accordion).
- Live previews are on the docs page under **Behavior** (API), **Patterns** (show more, filters, card, badge, profile), and **Navigation** (nav group, nested list, file tree).
`
