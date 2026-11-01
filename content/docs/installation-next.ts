/**
 * Next.js installation guide — markdown for Copy Page / AI.
 */

export const nextInstallTitle = "Next.js"

export const nextInstallDescription =
  "Install and configure nk for Next.js (App Router + Tailwind)."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const nextInstallUpdatedAt = "2026-11-01"

export const nextInstallMarkdown = `# Next.js

${nextInstallDescription}

Choose the setup that matches your starting point.

## New project

### 1. Create a Next.js app

\`\`\`bash
pnpm create next-app@latest
\`\`\`

Use the App Router and Tailwind CSS when prompted.

### 2. Initialize shadcn

\`\`\`bash
pnpm dlx shadcn@latest init
\`\`\`

Keep \`cssVariables\` enabled — nk themes with CSS variables.

### 3. Add the @nk registry

In \`components.json\`:

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

### 4. Install a component

\`\`\`bash
pnpm dlx shadcn@latest add @nk/button
\`\`\`

Or any item:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/<component>
\`\`\`

### 5. Use it

\`\`\`tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Continue</Button>
}
\`\`\`

## Existing project

1. Run \`pnpm dlx shadcn@latest init\` if needed.
2. Add the \`@nk\` registry to \`components.json\`.
3. Install with \`pnpm dlx shadcn@latest add @nk/<component>\`.

## RTL

\`\`\`html
<html lang="fa" dir="rtl">
\`\`\`
`
