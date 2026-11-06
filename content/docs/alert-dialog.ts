/**
 * Alert Dialog component docs — markdown for Copy Page / AI.
 */

export const alertDialogDocsTitle = "Alert Dialog"

export const alertDialogDocsDescription =
  "Modal confirmation on Base UI that requires an explicit response — size, type-to-confirm, detached triggers, menus, async actions, and nested confirms."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const alertDialogDocsUpdatedAt = "2026-11-06"

export const alertDialogDocsMarkdown = `# Alert Dialog

${alertDialogDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/alert-dialog
\`\`\`

Pulls \`@nk/button\` (and utils) as a registry dependency.

## Composition model

- \`AlertDialog\` — root (open state / handlers / \`handle\`; always modal, no outside-click dismiss)
- \`AlertDialogTrigger\` — opens; compose with Button via \`render={<Button />}\`; pass \`handle\` / \`payload\` when detached
- \`AlertDialogContent\` — portaled overlay + popup (no corner close); \`size="sm" | "default"\`
- \`AlertDialogHeader\` / \`AlertDialogTitle\` / \`AlertDialogDescription\`
- \`AlertDialogFooter\` — action row
- \`AlertDialogCancel\` / \`AlertDialogAction\` — close with outline / default Button
- \`AlertDialogClose\` — lower-level close; compose with any Button via \`render\`
- \`createAlertDialogHandle\` — links detached triggers to a root
- \`AlertDialogPortal\` / \`AlertDialogOverlay\` / \`AlertDialogViewport\` / \`AlertDialogPopup\` — custom shells

## Usage

\`\`\`tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Show dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/alert-dialog\`).
- Renders with role \`alertdialog\`; pointer dismissal outside the popup is disabled.
- Prefer this over [Dialog](/docs/components/dialog) when the user must confirm or cancel before continuing.
- Not the same as the inline [Alert](/docs/components/alert) callout.
- For destructive confirms, pass \`render={<Button variant="destructive" />}\` on \`AlertDialogAction\`.
- Type-to-confirm and async confirms should use a controlled root plus a regular Button (disable / \`loading\`) instead of \`AlertDialogAction\`.
- Open from a menu by controlling \`open\` and setting it from the menu item \`onClick\`.
- Themes with nk black/white CSS variables (light/dark), including \`popover\`.
- Live previews are on the docs page under Confirm / Patterns / Advanced tabs (RTL on each).
`
