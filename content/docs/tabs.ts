/**
 * Tabs component docs — markdown for Copy Page / AI.
 */

export const tabsDocsTitle = "Tabs"

export const tabsDocsDescription =
  "Tabbed panels on Base UI — list, triggers, content, and optional indicator."

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
- Optional \`TabsIndicator\` tracks the active tab with CSS variables.
- Live previews are on the docs page.
`
