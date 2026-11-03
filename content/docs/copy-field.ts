/**
 * Copy Field composite docs — markdown for Copy Page / AI.
 */

export const copyFieldDocsTitle = "Copy Field"

export const copyFieldDocsDescription =
  "Input with a copy affordance on the logical end edge and optional toast feedback. Built on Input, Button, and Toast — listed under Composites."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const copyFieldDocsUpdatedAt = "2026-11-03"

export const copyFieldDocsMarkdown = `# Copy Field

${copyFieldDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/copy-field
\`\`\`

Pulls \`@nk/input\`, \`@nk/button\`, and \`@nk/toast\` (and their deps) as registry dependencies. Mount \`Toaster\` once — see [Toast](/docs/components/toast).

## Usage

\`\`\`tsx
import { Field, FieldLabel } from "@/components/ui/field"
import { CopyField } from "@/components/ui/copy-field"

export function Example() {
  return (
    <Field name="invite">
      <FieldLabel>Invite link</FieldLabel>
      <CopyField defaultValue="https://example.com/invite/abc" readOnly />
    </Field>
  )
}
\`\`\`

## Props

Extends Input (except \`type\`). Extra options:

| Prop | Default | Purpose |
| --- | --- | --- |
| \`copyLabel\` | \`Copy\` | Accessible name for the copy control |
| \`copiedLabel\` | \`Copied\` | Accessible name while the checkmark is shown |
| \`successToastTitle\` | \`Copied\` | Toast title on success; \`null\` skips toast |
| \`successToastDescription\` | — | Optional toast body |
| \`errorToastTitle\` | \`Copy failed\` | Toast title on clipboard failure; \`null\` skips |
| \`copiedDurationMs\` | \`1500\` | How long the checkmark stays visible |
| \`onCopied\` | — | Called with the copied string after a successful write |

The copy control is disabled when the value is empty or the field is \`disabled\`.

## Patterns

- **Silent** — \`successToastTitle={null}\` (checkmark only)
- **Editable** — omit \`readOnly\`; copy uses the live value
- **Token / mono** — \`className="[&_input]:font-mono"\`
- **Custom toast** — set \`successToastTitle\` / \`successToastDescription\`

## Notes

- Copy sits at the logical \`end\` so LTR/RTL stay correct.
- Pair with [\`Field\`](/docs/components/field) for labels; the control is still an [\`Input\`](/docs/components/input) underneath.
- Lives in the [Composites](/docs/composites) catalog.
- Live previews are on the docs page.
`
