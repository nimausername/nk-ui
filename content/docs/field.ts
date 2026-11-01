/**
 * Field component docs — markdown for Copy Page / AI.
 */

export const fieldDocsTitle = "Field"

export const fieldDocsDescription =
  "Composable form field shell on Base UI. Label, description, error, and success associate automatically with the control — no manual htmlFor / id wiring."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const fieldDocsUpdatedAt = "2026-11-01"

export const fieldDocsMarkdown = `# Field

${fieldDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/field
\`\`\`

## Composition model

- \`Field\` — root (\`name\`, \`disabled\`, \`validate\`, \`validationMode\`)
- \`FieldLabel\` — accessible label (\`data-invalid\` / \`data-valid\` after validation)
- \`FieldDescription\` — helper text
- \`FieldError\` — failed message (\`match\` for forced / ValidityState keys)
- \`FieldSuccess\` — approved message when valid and filled
- \`FieldValidity\` — render-prop for custom validity UI

Place any Base UI-aware control inside (e.g. [\`Input\`](/docs/components/input)).

## Usage

\`\`\`tsx
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Example() {
  return (
    <Field
      name="username"
      validationMode="onBlur"
      validate={(value) => {
        if (typeof value !== "string" || value.length < 3) {
          return "Use at least 3 characters."
        }
      }}
    >
      <FieldLabel>Username</FieldLabel>
      <Input required minLength={3} placeholder="nk" />
      <FieldDescription>Letters and numbers only.</FieldDescription>
      <FieldError />
      <FieldSuccess>Username is available.</FieldSuccess>
    </Field>
  )
}
\`\`\`

## Submit validation

\`validationMode="onSubmit"\` requires [\`Form\`](/docs/components/form) (\`@nk/form\`), not a native \`<form>\`:

\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ACCEPTED_TEAM = "Acme"

export function SubmitExample() {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Field name="team" validationMode="onSubmit" validate={(value) => {
        if (typeof value !== "string" || value.trim().length === 0) {
          return "Enter a team name."
        }
        if (value.trim() !== ACCEPTED_TEAM) {
          return "That name is not accepted."
        }
      }}>
        <FieldLabel>Team name</FieldLabel>
        <Input required />
        <FieldError />
      </Field>
      <Button type="submit">Check</Button>
    </Form>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/field\`).
- Failed / approved chrome is Field-driven: control gets \`data-invalid\` / \`data-valid\` (and \`aria-invalid\`); Input paints destructive / success border and ring.
- Prefer composition over a single mega form component.
- Live previews (labeled, failed, approved) are on the docs page.
`
