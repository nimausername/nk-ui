/**
 * Tabs component docs — markdown for Copy Page / AI.
 */

export const tabsDocsTitle = "Tabs"

export const tabsDocsDescription =
  "Tabbed panels on Base UI — icons, disabled tabs, controlled state, vertical layout, and indicator."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const tabsDocsUpdatedAt = "2026-11-04"

export const tabsDocsMarkdown = `# Tabs

${tabsDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/tabs
\`\`\`

## Usage

\`\`\`tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account panel</TabsContent>
      <TabsContent value="password">Password panel</TabsContent>
    </Tabs>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Parts: \`Tabs\` / \`TabsList\` / \`TabsTrigger\` / \`TabsContent\` / optional \`TabsIndicator\`.
- Controlled via \`value\` + \`onValueChange\`. Disable a tab with \`disabled\` on \`TabsTrigger\`.
- Vertical: \`orientation="vertical"\` and flex column list styles.
- Live previews (icons, indicator, RTL) are on the docs page.
`
