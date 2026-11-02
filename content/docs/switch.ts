/**
 * Switch component docs — markdown for Copy Page / AI.
 */

export const switchDocsTitle = "Switch"

export const switchDocsDescription =
  "Accessible on/off switch on Base UI with a morphing thumb on state change. Prefer Switch for immediate settings toggles; use Checkbox for form agreements."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const switchDocsUpdatedAt = "2026-11-01"

export const switchDocsMarkdown = `# Switch

${switchDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/switch
\`\`\`

## Composition model

- \`Switch\` — root (\`checked\` / \`defaultChecked\`, \`name\`, …)
- \`SwitchThumb\` — sliding thumb with mid-travel stretch morph (RTL-aware)

## Usage

\`\`\`tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch, SwitchThumb } from "@/components/ui/switch"

export function Example() {
  return (
    <Field name="marketing" className="flex-row items-start justify-between gap-4">
      <div className="space-y-1">
        <FieldLabel>Marketing emails</FieldLabel>
        <FieldDescription>Receive occasional product news.</FieldDescription>
      </div>
      <Switch>
        <SwitchThumb />
      </Switch>
    </Field>
  )
}
\`\`\`

## Morph

On the first toggle, the thumb widens mid-travel (stays fully rounded), then settles back to a circle. Install also pulls \`styles/switch.css\` keyframes. Skipped when \`prefers-reduced-motion: reduce\`.

## Notes

- Built on Base UI (\`@base-ui/react/switch\`).
- Pair with [\`Field\`](/docs/components/field) for labeled settings rows.
- Live previews are on the docs page.
`
