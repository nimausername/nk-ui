/**
 * Select component docs — markdown for Copy Page / AI.
 */

export const selectDocsTitle = "Select"

export const selectDocsDescription =
  "Composable dropdown select on Base UI — trigger, popup, items, groups. Prefer over native select for styling and Field validation."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const selectDocsUpdatedAt = "2026-11-01"

export const selectDocsMarkdown = `# Select

${selectDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/select
\`\`\`

This also installs [\`Brand Icons\`](/docs/components/brand-icons) (\`@nk/brand-icons\`) and \`lucide-react\`.

## Composition model

- \`Select\` — root (\`value\`, \`items\`, \`onValueChange\`, …)
- \`SelectTrigger\` / \`SelectValue\`
- \`SelectContent\` — portal + popup + list
- \`SelectItem\`
- \`SelectGroup\` / \`SelectGroupLabel\` / \`SelectSeparator\`
- \`SelectLabel\` — optional Select-owned label (prefer FieldLabel with Field)

## Usage

\`\`\`tsx
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
]

export function Example() {
  return (
    <Field name="framework">
      <FieldLabel>Framework</FieldLabel>
      <Select items={frameworks}>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
\`\`\`

## Icons and brands

Compose Lucide icons or brand marks from \`@/components/ui/brand-icons\` inside \`SelectItem\`, and pass the same nodes in \`items\` so the trigger mirrors the list:

\`\`\`tsx
import { GitHubBrandIcon, SlackBrandIcon } from "@/components/ui/brand-icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const apps = [
  {
    value: "github",
    label: (
      <>
        <GitHubBrandIcon className="size-4" />
        GitHub
      </>
    ),
  },
  {
    value: "slack",
    label: (
      <>
        <SlackBrandIcon className="size-4" />
        Slack
      </>
    ),
  },
]

export function BrandExample() {
  return (
    <Select items={apps} defaultValue="github">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {apps.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react/select\`).
- Pass \`items\` on \`Select\` so the value label resolves correctly (including icon nodes).
- Pair with [\`Field\`](/docs/components/field) + [\`Form\`](/docs/components/form) for submit validation.
- Live previews (text, icons, brands, grouped, failed, disabled) are on the docs page.
`
