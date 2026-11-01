/**
 * Password Input composite docs — markdown for Copy Page / AI.
 */

export const passwordInputDocsTitle = "Password Input"

export const passwordInputDocsDescription =
  "Password field with a show / hide toggle on the logical end edge. Built on Input and Button — listed under Composites, not an Input variant."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const passwordInputDocsUpdatedAt = "2026-11-01"

export const passwordInputDocsMarkdown = `# Password Input

${passwordInputDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/password-input
\`\`\`

Pulls \`@nk/input\` and \`@nk/button\` (and their deps) as registry dependencies.

## Usage

\`\`\`tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"

export function Example() {
  return (
    <Field name="password">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput placeholder="••••••••" autoComplete="new-password" />
    </Field>
  )
}
\`\`\`

## Field validation

Same Field + \`Form\` pattern as Input. Demo accepts \`correct-horse-battery\`.

## Notes

- Visibility is uncontrolled by default (\`defaultVisible\`). Use \`visible\` + \`onVisibleChange\` to control it.
- Localize the toggle with \`showPasswordLabel\` / \`hidePasswordLabel\` (used as \`aria-label\`).
- Toggle sits at the logical \`end\` so LTR/RTL stay correct.
- Browsers mask the field **value** only — placeholders stay plain text either way.
- Pair with [\`Field\`](/docs/components/field) for labels and errors; the control is still an [\`Input\`](/docs/components/input) underneath.
- Lives in the [Composites](/docs/composites) catalog.
- Live previews include failed & approved validation.
`
