/**
 * Brand Icons component docs — markdown for Copy Page / AI.
 */

export const brandIconsDocsTitle = "Brand Icons"

export const brandIconsDocsDescription =
  "Thousands of currentColor brand marks (Simple Icons + curated overrides) for Select options, buttons, and menus. Ships with Select (`@nk/brand-icons`) or install on its own."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const brandIconsDocsUpdatedAt = "2026-11-02"

export const brandIconsDocsMarkdown = `# Brand Icons

${brandIconsDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/brand-icons
\`\`\`

Installing [\`Select\`](/docs/components/select) (\`@nk/select\`) also pulls this package as a registry dependency. Installs \`simple-icons\` as an npm dependency.

## Marks

Every Simple Icons slug is available as:

- A named export: \`GitHubBrandIcon\`, \`NextdotjsBrandIcon\`, \`StripeBrandIcon\`, …
- Or \`<BrandIcon slug="github" />\` / \`<BrandIcon slug="nextdotjs" />\`

Also export \`brandIconsCatalog\` (\`{ name, slug, Icon }[]\`) and \`getBrandIconData(slug)\` for pickers and custom rendering.

Curated overrides (removed from Simple Icons for trademark reasons): Slack, OpenAI, LinkedIn, Amazon Web Services, Microsoft, Visual Studio Code.

Paths use \`fill="currentColor"\` and \`aria-hidden\` so marks follow text / accent colors.

## Usage with Select

\`\`\`tsx
import { BrandIcon, GitHubBrandIcon, SlackBrandIcon } from "@/components/ui/brand-icons"
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
  {
    value: "vercel",
    label: (
      <>
        <BrandIcon slug="vercel" className="size-4" />
        Vercel
      </>
    ),
  },
]

export function Example() {
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

- For generic UI icons (mail, bell, user), use \`lucide-react\` — already installed with Select.
- Live Select previews with brands are on the [Select](/docs/components/select) page.
- Slug reference: [simpleicons.org](https://simpleicons.org).
`
