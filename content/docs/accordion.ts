/**
 * Accordion component docs — markdown for Copy Page / AI.
 */

export const accordionDocsTitle = "Accordion"

export const accordionDocsDescription =
  "Collapsible sections on Base UI — single or multiple open panels."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const accordionDocsUpdatedAt = "2026-11-04"

export const accordionDocsMarkdown = `# Accordion

${accordionDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/accordion
\`\`\`

## Usage

\`\`\`tsx
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Example() {
  return (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Yes. It follows WAI-ARIA patterns.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Set \`multiple\` to keep several panels open.
- Live previews are on the docs page.
`
