/**
 * Dialog component docs — markdown for Copy Page / AI.
 */

export const dialogDocsTitle = "Dialog"

export const dialogDocsDescription =
  "Composable modal dialog on Base UI. Build confirmations, forms, and focused tasks from Trigger, Content, Header, Footer, and Close — not a single mega-component."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const dialogDocsUpdatedAt = "2026-11-01"

export const dialogDocsMarkdown = `# Dialog

${dialogDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/dialog
\`\`\`

Pulls \`@nk/button\` (and utils) as a registry dependency.

## Composition model

- \`Dialog\` — root (open state / \`modal\` / handlers)
- \`DialogTrigger\` — opens; compose with Button via \`render={<Button />}\`
- \`DialogContent\` — portaled overlay + popup (optional corner close)
- \`DialogHeader\` / \`DialogTitle\` / \`DialogDescription\`
- \`DialogFooter\` — action row; optional built-in Close
- \`DialogClose\` — closes; compose with Button via \`render\`
- \`DialogPortal\` / \`DialogOverlay\` — lower-level pieces if you need a custom shell

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Example() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button type="button">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/dialog\`).
- Themes with nk black/white CSS variables (light/dark), including \`popover\`.
- Close affordances use logical \`end\` positioning for LTR/RTL.
- Live previews (basic, destructive confirm, no corner close, RTL) are on the docs page.
`
