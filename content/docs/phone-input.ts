/**
 * Phone Input component docs — markdown for Copy Page / AI.
 */

export const phoneInputDocsTitle = "Phone Input"

export const phoneInputDocsDescription =
  "Composable phone field with a searchable country picker and as-you-type formatting. Value is E.164-ready via phonefield on Base UI — not a bare type=\"tel\" Input."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const phoneInputDocsUpdatedAt = "2026-11-01"

export const phoneInputDocsMarkdown = `# Phone Input

${phoneInputDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/phone-input
\`\`\`

Also installs the \`phonefield\` npm dependency (peer: \`@base-ui/react\`).

## Composition model

- \`PhoneInput\` — root (\`defaultCountry\`, \`value\` / \`onValueChange\`, \`name\`, \`required\`, …)
- \`PhoneInputLabel\` / \`PhoneInputDescription\` / \`PhoneInputError\`
- \`PhoneInputGroup\` — bordered shell
- \`PhoneInputCountry\` — searchable picker (compose children to customize)
- \`PhoneInputControl\` — national number input
- \`PhoneInputField\` — opinionated label + group + error layout for common forms
- \`usePhoneField\` / \`getExampleNumber\` — hooks and utils from phonefield

## Usage

\`\`\`tsx
import {
  getExampleNumber,
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputDescription,
  PhoneInputError,
  PhoneInputGroup,
  PhoneInputLabel,
} from "@/components/ui/phone-input"

export function Example() {
  return (
    <PhoneInput name="phone" defaultCountry="US" required>
      <PhoneInputLabel>Phone</PhoneInputLabel>
      <PhoneInputGroup>
        <PhoneInputCountry />
        <PhoneInputControl placeholder={(c) => getExampleNumber(c.iso2)} />
      </PhoneInputGroup>
      <PhoneInputDescription>Used for sign-in codes.</PhoneInputDescription>
      <PhoneInputError />
    </PhoneInput>
  )
}
\`\`\`

Or the compact field helper:

\`\`\`tsx
import { PhoneInputField } from "@/components/ui/phone-input"

export function Compact() {
  return (
    <PhoneInputField
      name="phone"
      defaultCountry="US"
      label="Phone"
      description="Used for sign-in codes."
    />
  )
}
\`\`\`

## Validation

Validates after blur or form submit when incomplete / invalid. Use \`required\`, \`PhoneInputError\`, and \`invalid\` for external “not accepted” checks. Demo accepts \`+14155552671\` (US \`415 555 2671\`). Group paints \`data-invalid\` / \`data-valid\` rings.

## Notes

- Built on [phonefield](https://phonefield.vercel.app) + Base UI Combobox / Input.
- \`onValueChange\` receives \`{ countryIso2, countryDialCode, nationalNumber, e164, isValid }\`.
- Country trigger uses logical \`border-e\` for LTR/RTL.
- For plain text fields use [\`Input\`](/docs/components/input); for steppers use [\`Number Field\`](/docs/components/number-field).
- After collecting a number, verify with [\`Input OTP\`](/docs/components/input-otp).
- Live previews (basic, failed & approved, preferred countries, controlled E.164, disabled, RTL) are on the docs page.
`
