/**
 * Sheet component docs — markdown for Copy Page / AI.
 */

export const sheetDocsTitle = "Sheet"

export const sheetDocsDescription =
  "Edge panels on Base UI Dialog. Use start/end when the panel should flip with writing direction; use left/right when the edge must stay fixed."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const sheetDocsUpdatedAt = "2026-11-03"


export const sheetDocsMarkdown = `# Sheet

${sheetDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/sheet
\`\`\`

Pulls \`@nk/button\` as a registry dependency.

## Composition model

- \`Sheet\` — root (\`open\` / \`onOpenChange\` for controlled use)
- \`SheetTrigger\` / \`SheetClose\` — compose with Button via \`render={<Button />}\`
- \`SheetContent\` — portal + overlay + panel (\`side\`, \`size\`, \`showCloseButton\`)
- \`SheetHeader\` / \`SheetTitle\` / \`SheetDescription\`
- \`SheetBody\` — scrollable middle between header and footer
- \`SheetFooter\` — actions under the body

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Example() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open sheet
      </SheetTrigger>
      <SheetContent side="end">
        <SheetHeader>
          <SheetTitle>Edit panel</SheetTitle>
          <SheetDescription>
            Adjust settings without leaving the page.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <Button type="button">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
\`\`\`

## Sides

\`SheetContent\` \`side\` is **not** the same for logical vs physical edges:

| Value | Kind | LTR | RTL | Use when |
| --- | --- | --- | --- | --- |
| \`start\` | Logical | left | right | Panel should follow reading direction (nav, filters) |
| \`end\` | Logical (default) | right | left | Default edit / detail panel that flips with locale |
| \`left\` | Physical | left | left | Edge must stay on the left in every locale |
| \`right\` | Physical | right | right | Edge must stay on the right in every locale |
| \`top\` / \`bottom\` | Physical | same | same | Horizontal drawers |

**Rule of thumb:** pick \`start\` / \`end\` for locale-aware UI; pick \`left\` / \`right\` only when the product requires a fixed screen edge (maps, tools, chrome that never mirrors).

## Size

\`SheetContent\` \`size\` (default \`sm\`):

| Value | Side sheets (width) | Top / bottom (height) |
| --- | --- | --- |
| \`sm\` | \`max-w-sm\` | \`40vh\` |
| \`md\` | \`max-w-md\` | \`50vh\` |
| \`lg\` | \`max-w-lg\` | \`70vh\` |
| \`xl\` | \`max-w-xl\` | \`85vh\` |
| \`full\` | full viewport width | full viewport height |

On top/bottom, height is fixed so size is visible; put long content in \`SheetBody\` to scroll.

\`\`\`tsx
<SheetContent side="end" size="lg">
  …
</SheetContent>
\`\`\`

## No close button

\`\`\`tsx
<SheetContent side="bottom" showCloseButton={false}>
  …
</SheetContent>
\`\`\`

Esc and overlay click still dismiss unless you change Dialog root props.

## Form body

\`\`\`tsx
<SheetContent side="end">
  <SheetHeader>…</SheetHeader>
  <SheetBody>
    {/* scrollable fields */}
  </SheetBody>
  <SheetFooter>…</SheetFooter>
</SheetContent>
\`\`\`

## Controlled

\`\`\`tsx
const [open, setOpen] = useState(false)

<Sheet open={open} onOpenChange={setOpen}>
  …
</Sheet>
\`\`\`

## Notes

- Built on Base UI Dialog (\`@base-ui/react/dialog\`) with edge positioning — same primitive family as [Dialog](/docs/components/dialog).
- Close affordances use logical \`end\` positioning.
- Live previews are on the docs page.
`
