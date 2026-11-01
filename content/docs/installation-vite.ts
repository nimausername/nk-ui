/**
 * Vite installation guide — markdown for Copy Page / AI.
 */

export const viteInstallTitle = "Vite"

export const viteInstallDescription =
  "Install and configure nk for Vite + React + Tailwind."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const viteInstallUpdatedAt = "2026-11-01"

export const viteInstallMarkdown = `# Vite

${viteInstallDescription}

Choose the setup that matches your starting point. This guide uses Tailwind v4.

## New project

### 1. Create a Vite app

\`\`\`bash
pnpm create vite@latest
\`\`\`

Pick the React + TypeScript template, then install dependencies.

### 2. Add Tailwind CSS

\`\`\`bash
pnpm add tailwindcss @tailwindcss/vite
\`\`\`

Replace \`src/index.css\` with:

\`\`\`css
@import "tailwindcss";
\`\`\`

### 3. Configure the @ path alias

Add \`baseUrl\` / \`paths\` to \`tsconfig.json\` and \`tsconfig.app.json\`:

\`\`\`json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
\`\`\`

Install \`@types/node\` and update \`vite.config.ts\`:

\`\`\`bash
pnpm add -D @types/node
\`\`\`

\`\`\`ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
\`\`\`

### 4. Initialize shadcn

\`\`\`bash
pnpm dlx shadcn@latest init
\`\`\`

Keep \`cssVariables\` enabled — nk themes with CSS variables.

### 5. Add the @nk registry

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

### 6. Install a component

\`\`\`bash
pnpm dlx shadcn@latest add @nk/button
\`\`\`

Or any item:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/<component>
\`\`\`

### 7. Use it

\`\`\`tsx
import { Button } from "@/components/ui/button"

export function App() {
  return <Button>Continue</Button>
}
\`\`\`

## Existing project

1. Confirm the \`@/\` alias resolves in TypeScript and Vite.
2. Run \`pnpm dlx shadcn@latest init\` if needed.
3. Add the \`@nk\` registry to \`components.json\`.
4. Install with \`pnpm dlx shadcn@latest add @nk/<component>\`.

## RTL

\`\`\`js
document.documentElement.setAttribute("dir", "rtl")
document.documentElement.setAttribute("lang", "fa")
\`\`\`
`
