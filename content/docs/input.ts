/**
 * Input component docs — markdown for Copy Page / AI.
 */

export const inputDocsTitle = "Input"

export const inputDocsDescription =
  "Base UI text input with nk black/white styles. Pair with Field for labels, descriptions, and failed / approved validation chrome — no variant explosion."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const inputDocsUpdatedAt = "2026-11-01"

export const inputDocsMarkdown = `# Input

${inputDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/input
\`\`\`

Pulls \`@nk/field\` (and utils) as a registry dependency.

## Usage

\`\`\`tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Example() {
  return (
    <Field name="email">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  )
}
\`\`\`

## Field validation

Wrap with [\`Field\`](/docs/components/field) + \`Form\` for \`onSubmit\` failed / approved chrome (demo accepts \`nk\`):

\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel, FieldSuccess } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ACCEPTED_USERNAME = "nk"

export function ValidationExample() {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Field
        name="username"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.trim().length === 0) {
            return "Enter a username."
          }
          if (value.trim() !== ACCEPTED_USERNAME) {
            return "That username is not accepted."
          }
        }}
      >
        <FieldLabel>Username</FieldLabel>
        <Input required placeholder="nk" />
        <FieldError />
        <FieldSuccess>Looks good.</FieldSuccess>
      </Field>
      <Button type="submit">Check</Button>
    </Form>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/input\`).
- Themes with nk CSS variables (\`input\`, \`ring\`, \`destructive\`, \`success\`).
- Failed / approved chrome via \`aria-invalid\` / \`data-invalid\` / \`data-valid\` — Field wires these; use [\`FieldError\`](/docs/components/field) / \`FieldSuccess\` for copy.
- Height matches default Button (\`h-9\`). Adjust with \`className\` if needed.
- Live previews (basic, labeled, failed & approved, disabled, file, RTL) are on the docs page.
- Field composition details: [\`Field\`](/docs/components/field).
- Password with show / hide: [\`Password Input\`](/docs/composites/password-input) under Composites (\`@nk/password-input\`).
- Numeric steppers: [\`Number Field\`](/docs/components/number-field) (\`@nk/number-field\`) — prefer over \`type="number"\`.
- Phone + country: [\`Phone Input\`](/docs/components/phone-input) (\`@nk/phone-input\`) — prefer over \`type="tel"\` alone.
- SMS / email codes: [\`Input OTP\`](/docs/components/input-otp) (\`@nk/input-otp\`).
`
