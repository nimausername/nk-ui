/**
 * Checkbox component docs — markdown for Copy Page / AI.
 */

export const checkboxDocsTitle = "Checkbox"

export const checkboxDocsDescription =
  "Accessible checkbox on Base UI with checked, indeterminate, and Field validation chrome."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const checkboxDocsUpdatedAt = "2026-11-01"

export const checkboxDocsMarkdown = `# Checkbox

${checkboxDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/checkbox
\`\`\`

## Composition model

- \`Checkbox\` — root (\`checked\` / \`defaultChecked\`, \`indeterminate\`, \`name\`, …)
- \`CheckboxIndicator\` — check / minus mark (defaults to Lucide icons)

## Usage

\`\`\`tsx
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export function Example() {
  return (
    <Field name="marketing" className="flex-row items-center gap-2">
      <Checkbox>
        <CheckboxIndicator />
      </Checkbox>
      <FieldLabel className="font-normal">Send me product updates</FieldLabel>
    </Field>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/checkbox\`).
- Pair with [\`Field\`](/docs/components/field) + [\`Form\`](/docs/components/form) for submit validation.
- Use \`indeterminate\` for “select all” mixed state.
- Live previews are on the docs page.
`
