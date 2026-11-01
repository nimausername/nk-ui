/**
 * Textarea component docs — markdown for Copy Page / AI.
 */

export const textareaDocsTitle = "Textarea"

export const textareaDocsDescription =
  "Multi-line text field with nk Input styling. Uses Field.Control so it wires into Field validation like other Base UI controls."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const textareaDocsUpdatedAt = "2026-11-01"

export const textareaDocsMarkdown = `# Textarea

${textareaDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/textarea
\`\`\`

## Usage

\`\`\`tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function Example() {
  return (
    <Field name="bio">
      <FieldLabel>Bio</FieldLabel>
      <Textarea placeholder="A sentence or two about you" />
      <FieldDescription>Shown on your public profile.</FieldDescription>
    </Field>
  )
}
\`\`\`

## Notes

- Native \`<textarea>\` via Base UI \`Field.Control\` (no separate Base UI Textarea).
- Failed / approved chrome matches [\`Input\`](/docs/components/input) (\`data-invalid\` / \`data-valid\`).
- Pair with [\`Field\`](/docs/components/field) + [\`Form\`](/docs/components/form) for submit validation.
- Live previews are on the docs page.
`
