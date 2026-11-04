/**
 * Accordion component docs — markdown for Copy Page / AI.
 */

export const accordionDocsTitle = "Accordion"

export const accordionDocsDescription =
  "Collapsible sections on Base UI — single or multiple open panels, controlled state, disabled items, and searchable closed content."

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
- Parts: \`Accordion\` / \`AccordionItem\` / \`AccordionHeader\` / \`AccordionTrigger\` / \`AccordionPanel\`.
- Single-open by default; set \`multiple\` to keep several panels open.
- Controlled via \`value\` + \`onValueChange\` (array of open item values).
- Disable one item with \`AccordionItem disabled\`, or the whole tree with root \`disabled\`.
- \`AccordionTrigger\` renders a chevron by default; pass \`showChevron={false}\` to compose a custom trailing icon.
- \`hiddenUntilFound\` keeps closed panels findable via browser find-in-page.
- \`keepMounted\` keeps closed panels in the DOM (ignored when \`hiddenUntilFound\` is set).
- Live previews (controlled, disabled, rich triggers, long content, RTL) are on the docs page.
`
