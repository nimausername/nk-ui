/**
 * Radio Group component docs — markdown for Copy Page / AI.
 */

export const radioGroupDocsTitle = "Radio Group"

export const radioGroupDocsDescription =
  "Mutually exclusive options on Base UI. Use for a small set of choices where one value must be selected."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const radioGroupDocsUpdatedAt = "2026-11-01"

export const radioGroupDocsMarkdown = `# Radio Group

${radioGroupDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/radio-group
\`\`\`

## Composition model

- \`RadioGroup\` — root (\`value\` / \`defaultValue\`, \`name\`, \`onValueChange\`, …)
- \`Radio\` — one option (\`value\` required)
- \`RadioIndicator\` — selected mark

## Usage

\`\`\`tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { Radio, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

export function Example() {
  return (
    <Field name="plan">
      <FieldLabel>Plan</FieldLabel>
      <RadioGroup defaultValue="pro">
        <label className="flex items-center gap-2 text-sm">
          <Radio value="free">
            <RadioIndicator />
          </Radio>
          Free
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="pro">
            <RadioIndicator />
          </Radio>
          Pro
        </label>
      </RadioGroup>
    </Field>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/radio-group\` + \`radio\`).
- Prefer [\`Select\`](/docs/components/select) when the option list is long.
- Pair with [\`Field\`](/docs/components/field) + [\`Form\`](/docs/components/form) for submit validation.
- Live previews are on the docs page.
`
