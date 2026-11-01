/**
 * Manual / existing React installation guide — markdown for Copy Page / AI.
 */

export const manualInstallTitle = "Manual"

export const manualInstallDescription =
  "Add nk to an existing React app that already has Tailwind and can run the shadcn CLI."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const manualInstallUpdatedAt = "2026-11-01"

export const manualInstallMarkdown = `# Manual

${manualInstallDescription}

Use this when you are not on the Next.js or Vite starters, or you already have a custom React setup.

## Prerequisites

- React 18+ (19 recommended)
- Tailwind CSS with CSS variables
- Path aliases that match \`components.json\` (\`@/components\`, \`@/lib/utils\`)
- Ability to run the shadcn CLI in the project root

## 1. Initialize shadcn if needed

\`\`\`bash
pnpm dlx shadcn@latest init
\`\`\`

Keep \`cssVariables\` enabled — nk themes with CSS variables. Skip if you already have a working \`components.json\`.

## 2. Add the @nk registry

\`\`\`json
{
  "registries": {
    "@nk": "https://ui.nimakhabbazi.com/r/{name}.json"
  }
}
\`\`\`

Local docs / dogfooding:

\`\`\`json
{
  "registries": {
    "@nk": "http://localhost:3000/r/{name}.json"
  }
}
\`\`\`

## 3. Install components

\`\`\`bash
pnpm dlx shadcn@latest add @nk/button
\`\`\`

Or any item:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/<component>
\`\`\`

## 4. Use it

\`\`\`tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Continue</Button>
}
\`\`\`

## RTL

\`\`\`html
<html lang="fa" dir="rtl">
\`\`\`

Prefer logical CSS so layouts flip without rewriting styles.

## Notes

- nk components depend on Base UI (\`@base-ui/react\`) — the CLI installs declared dependencies.
- Path aliases must match what \`shadcn init\` configured.
`
