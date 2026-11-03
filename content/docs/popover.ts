/**
 * Popover component docs — markdown for Copy Page / AI.
 */

export const popoverDocsTitle = "Popover"

export const popoverDocsDescription =
  "Anchored non-modal surface on Base UI. Build filters, forms, and rich content from Trigger, Content, Header, Title, Description, Footer, and Close."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const popoverDocsUpdatedAt = "2026-11-03"

export const popoverDocsMarkdown = `# Popover

${popoverDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/popover
\`\`\`

## Composition model

- \`Popover\` — root (\`open\` / \`onOpenChange\` for controlled use)
- \`PopoverTrigger\` — opens; compose with Button via \`render={<Button />}\`
- \`PopoverContent\` — portaled surface (\`side\` / \`align\` / \`showArrow\`)
- \`PopoverHeader\` / \`PopoverTitle\` / \`PopoverDescription\`
- \`PopoverFooter\` — action row
- \`PopoverClose\` — dismiss from inside; compose with Button via \`render={<Button />}\`

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Example() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the width and height for the canvas.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
\`\`\`

## Placement

\`PopoverContent\` accepts \`side\` (\`top\` | \`bottom\` | \`left\` | \`right\` | \`inline-start\` | \`inline-end\`) and \`align\` (\`start\` | \`center\` | \`end\`). Prefer logical inline sides for LTR/RTL.

Pass \`showArrow\` when the surface should point at the trigger (off by default).

## Footer and close

\`\`\`tsx
<PopoverContent>
  <PopoverHeader>
    <PopoverTitle>Apply filters?</PopoverTitle>
  </PopoverHeader>
  <PopoverFooter>
    <PopoverClose render={<Button type="button" variant="outline" />}>
      Cancel
    </PopoverClose>
    <PopoverClose render={<Button type="button" />}>Apply</PopoverClose>
  </PopoverFooter>
</PopoverContent>
\`\`\`

## Controlled

\`\`\`tsx
const [open, setOpen] = useState(false)

<Popover open={open} onOpenChange={setOpen}>
  …
</Popover>
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/popover\`).
- Themes with nk \`popover\` / \`border\` CSS variables (light/dark).
- Use [Dialog](/docs/components/dialog) for modal focused tasks; Popover stays non-modal.
- Live previews are on the docs page.
`
