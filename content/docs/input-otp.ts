/**
 * Input OTP component docs — markdown for Copy Page / AI.
 */

export const inputOtpDocsTitle = "Input OTP"

export const inputOtpDocsDescription =
  "One-time verification code on Base UI OTP Field. Individual slots with paste support, optional masking, and grouped layouts — not a single type=\"text\" box."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const inputOtpDocsUpdatedAt = "2026-11-01"

export const inputOtpDocsMarkdown = `# Input OTP

${inputOtpDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/input-otp
\`\`\`

## Composition model

- \`InputOTP\` — root (\`length\` required; \`value\` / \`onValueChange\`, \`mask\`, \`validationType\`, \`autoSubmit\`, …)
- \`InputOTPSlot\` — one character cell
- \`InputOTPSlots\` — helper that renders \`length\` slots with default aria-labels
- \`InputOTPGroup\` — optional layout wrapper for a run of slots
- \`InputOTPSeparator\` — accessible divider (e.g. \`123-456\`)

## Usage

\`\`\`tsx
import { useId } from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

export function Example() {
  const id = useId()

  return (
    <Field name="code">
      <FieldLabel htmlFor={id}>Verification code</FieldLabel>
      <InputOTP id={id} length={6}>
        <InputOTPSlots length={6} />
      </InputOTP>
      <FieldDescription>Enter the 6-digit code we sent you.</FieldDescription>
    </Field>
  )
}
\`\`\`

## Field validation

\`validationType\` only filters allowed characters. Failed / approved chrome comes from wrapping in Field (+ \`Form\` from \`@/components/ui/form\` for \`onSubmit\`):

\`\`\`tsx
import { useId } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSuccess,
} from "@/components/ui/field"
import { Form } from "@/components/ui/form"
import { InputOTP, InputOTPSlots } from "@/components/ui/input-otp"

const ACCEPTED_CODE = "424242"

export function ValidationExample() {
  const id = useId()

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Field
        name="otp"
        validationMode="onSubmit"
        validate={(value) => {
          if (typeof value !== "string" || value.length < 6) {
            return "Enter the full 6-digit code."
          }
          if (value !== ACCEPTED_CODE) {
            return "That code is not accepted."
          }
        }}
      >
        <FieldLabel htmlFor={id}>Verification code</FieldLabel>
        <InputOTP id={id} length={6}>
          <InputOTPSlots length={6} />
        </InputOTP>
        <FieldError />
        <FieldSuccess>Code accepted.</FieldSuccess>
      </Field>
      <Button type="submit">Check</Button>
    </Form>
  )
}
\`\`\`

Slots pick up \`data-invalid\` / \`data-valid\` (and \`aria-invalid\`) from Field and paint destructive / success border rings.

## Notes

- Built on Base UI (\`@base-ui/react/otp-field\`).
- Default \`validationType\` is \`numeric\`. Use \`alpha\` / \`alphanumeric\` / \`none\` when needed.
- Pass \`mask\` to hide characters (like a password slot).
- Use \`onValueComplete\` or \`autoSubmit\` when all slots are filled.
- Label the first slot via Root \`id\` + \`FieldLabel htmlFor\`; remaining slots get aria-labels from \`InputOTPSlots\`.
- After collecting a phone with [\`Phone Input\`](/docs/components/phone-input), verify with this component.
- Live previews (6-digit, masked, grouped, failed & approved, complete callback, disabled, RTL) are on the docs page.
`
