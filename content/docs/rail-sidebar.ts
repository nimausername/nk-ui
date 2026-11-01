/**
 * Rail Sidebar composite docs — markdown for Copy Page / AI.
 */

export const railSidebarDocsTitle = "Rail Sidebar"

export const railSidebarDocsDescription =
  "Animated dashed-rail navigation with nested items. Active routes draw rails from the list top to the current leaf."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const railSidebarDocsUpdatedAt = "2026-11-01"

export const railSidebarDocsMarkdown = `# Rail Sidebar

${railSidebarDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/rail-sidebar
\`\`\`

Depends on \`motion\` and Next.js (\`Link\` / \`usePathname\`).

## Usage

\`\`\`tsx
import { RailSidebar } from "@/components/ui/rail-sidebar"

export function Example() {
  return (
    <RailSidebar
      label="Docs"
      items={[
        { label: "Introduction", href: "/docs" },
        {
          label: "Installation",
          href: "/docs/installation",
          items: [
            { label: "Next.js", href: "/docs/installation/next" },
            { label: "Vite", href: "/docs/installation/vite" },
          ],
        },
      ]}
    />
  )
}
\`\`\`

## Notes

- Active item follows the current pathname (longest matching \`href\` wins).
- Nested active items draw two rails: list top → parent, then parent → leaf.
- Optional \`icon\` on any item for brand marks or leading glyphs.
- RTL mirrors the rail and corner to inline-start and keeps labels beside it.
- Lives in the [Composites](/docs/composites) catalog.
- The nk docs site uses a separate internal fork for its own sidebar chrome; install this package for your app.

## Credits

Interaction and visual concept adapted from [Rare UI HookSidebar](https://www.rareui.com/components/hooksidebar) by [Swami Malode](https://swamii.me/) ([rare-ui](https://github.com/swamimalode07/rare-ui)). nk’s published name is **Rail Sidebar** (\`@nk/rail-sidebar\`) to keep a distinct identity.
`
