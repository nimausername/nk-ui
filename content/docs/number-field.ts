/**
 * Number Field component docs — markdown for Copy Page / AI.
 */

export const numberFieldDocsTitle = "Number Field"

export const numberFieldDocsDescription =
  "Composable numeric input on Base UI with increment / decrement steppers, min/max/step, and an optional scrub area. Prefer this over a bare type=\"number\" Input."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const numberFieldDocsUpdatedAt = "2026-11-01"

export const numberFieldDocsMarkdown = `# Number Field

${numberFieldDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/number-field
\`\`\`

## Composition model

- \`NumberField\` — root (\`value\` / \`defaultValue\`, \`min\`, \`max\`, \`step\`, \`format\`, …)
- \`NumberFieldGroup\` — bordered shell
- \`NumberFieldDecrement\` / \`NumberFieldInput\` / \`NumberFieldIncrement\`
- \`NumberFieldScrubArea\` / \`NumberFieldScrubAreaCursor\` — optional drag-to-adjust

## Usage

\`\`\`tsx
import { Field, FieldLabel } from "@/components/ui/field"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

export function Example() {
  return (
    <Field name="quantity">
      <FieldLabel>Quantity</FieldLabel>
      <NumberField defaultValue={1} min={1} max={99}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </Field>
  )
}
\`\`\`

## Field validation

Use \`Form\` + Field \`validate\` for failed / approved chrome (demo accepts \`12\`). \`NumberFieldGroup\` paints rings from \`data-invalid\` / \`data-valid\`.

## Notes

- Built on Base UI (\`@base-ui/react/number-field\`).
- Themes with nk Input tokens (\`input\`, \`ring\`, \`accent\`, \`destructive\`, \`success\`).
- Pair with [\`Field\`](/docs/components/field) for labels and errors.
- For plain text / email / file, use [\`Input\`](/docs/components/input).
- Live previews (quantity, currency, failed & approved, scrub, disabled, RTL) are on the docs page.
`
