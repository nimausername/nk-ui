/**
 * Form component docs — markdown for Copy Page / AI.
 */

export const formDocsTitle = "Form"

export const formDocsDescription =
  "Base UI Form that runs Field validationMode onSubmit and supports form-level errors. Use instead of a native form when you need submit-time Field validation."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const formDocsUpdatedAt = "2026-11-01"

export const formDocsMarkdown = `# Form

${formDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/form
\`\`\`

## Why Form

[\`Field\`](/docs/components/field) \`validationMode="onSubmit"\` only runs inside Base UI \`Form\` — a native \`<form>\` will not trigger it. Use \`Form\` for Check / submit failed states; use \`onBlur\` / \`onChange\` on Field when you do not need submit validation.

## Usage

\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel, FieldSuccess } from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ACCEPTED_TEAM = "Acme"

export function Example() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="team"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.trim().length === 0) {
            return "Enter a team name."
          }
          if (value.trim() !== ACCEPTED_TEAM) {
            return "That name is not accepted."
          }
        }}
      >
        <FieldLabel>Team name</FieldLabel>
        <Input required placeholder="Acme" />
        <FieldError />
        <FieldSuccess>Team accepted.</FieldSuccess>
      </Field>
      <Button type="submit" variant="outline" size="sm">
        Check
      </Button>
    </Form>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/form\`).
- Default layout is a vertical flex stack (\`gap-4\`); override with \`className\`.
- Pair with [\`Field\`](/docs/components/field) and controls such as [\`Input\`](/docs/components/input), [\`Number Field\`](/docs/components/number-field), [\`Input OTP\`](/docs/components/input-otp), or [\`Password Input\`](/docs/composites/password-input).
- Phone Input uses its own submit/blur validation; still wrap in \`Form\` when mixing with Field controls or using a Check button.
- Live previews (submit validation, form errors) are on the docs page.
`
