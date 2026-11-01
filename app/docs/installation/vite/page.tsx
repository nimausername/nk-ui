import Link from "next/link"

import { DocsStep, DocsSteps } from "@/components/docs/docs-steps"
import { InstallationFrameworkPage } from "@/components/docs/installation-framework-page"
import { NkRegistrySnippet } from "@/components/docs/nk-registry-snippet"
import { CodeCommand } from "@/components/shared/code-command"
import {
  viteInstallDescription,
  viteInstallMarkdown,
  viteInstallTitle,
  viteInstallUpdatedAt,
} from "@/content/docs/installation-vite"
import { shadcnCommands } from "@/lib/shadcn-commands"

const pathCards = [
  {
    title: "New project",
    description: "Create Vite + React, add Tailwind, init shadcn, add @nk.",
    href: "#new-project",
  },
  {
    title: "Existing project",
    description: "Wire @nk into a Vite app that already has React + Tailwind.",
    href: "#existing-project",
  },
  {
    title: "Add components",
    description: "Registry is ready — install any item from Components.",
    href: "#add-components",
  },
] as const

const createViteCommands = {
  pnpm: "pnpm create vite@latest",
  npm: "npm create vite@latest",
  yarn: "yarn create vite",
  bun: "bun create vite",
} as const

const tailwindCommands = {
  pnpm: "pnpm add tailwindcss @tailwindcss/vite",
  npm: "npm install tailwindcss @tailwindcss/vite",
  yarn: "yarn add tailwindcss @tailwindcss/vite",
  bun: "bun add tailwindcss @tailwindcss/vite",
} as const

const typesNodeCommands = {
  pnpm: "pnpm add -D @types/node",
  npm: "npm install -D @types/node",
  yarn: "yarn add -D @types/node",
  bun: "bun add -d @types/node",
} as const

const indexCssSnippet = `@import "tailwindcss";`

const tsconfigSnippet = `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`

const tsconfigAppSnippet = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`

const viteConfigSnippet = `import path from "path"
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
})`

const usageSnippet = `import { Button } from "@/components/ui/button"

export function App() {
  return <Button>Continue</Button>
}`

/**
 * Vite-specific nk installation guide.
 */
export default function ViteInstallationPage() {
  return (
    <InstallationFrameworkPage
      title={viteInstallTitle}
      description={viteInstallDescription}
      markdown={viteInstallMarkdown}
      path="/docs/installation/vite"
      markdownUrl="/docs/installation/vite.md"
      updatedAt={viteInstallUpdatedAt}
      pathCards={pathCards}
    >
      <section id="new-project" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">New project</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Full path from an empty folder to an installed nk component (Tailwind v4).
          </p>
        </div>

        <DocsSteps>
          <DocsStep step={1} title="Create a Vite app">
            <p>Choose the React + TypeScript template, then install dependencies.</p>
            <CodeCommand label="Create Vite app" commands={createViteCommands} />
          </DocsStep>

          <DocsStep step={2} title="Add Tailwind CSS">
            <p>
              shadcn and nk expect Tailwind with CSS variables. Install the Vite plugin, then replace{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                src/index.css
              </code>
              :
            </p>
            <CodeCommand label="Install Tailwind" commands={tailwindCommands} />
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{indexCssSnippet}</code>
            </pre>
          </DocsStep>

          <DocsStep step={3} title="Configure the @ path alias">
            <p>
              Vite splits TypeScript config. Add the alias to both{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                tsconfig.json
              </code>{" "}
              and{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                tsconfig.app.json
              </code>
              , then wire Vite:
            </p>
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{tsconfigSnippet}</code>
            </pre>
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{tsconfigAppSnippet}</code>
            </pre>
            <CodeCommand label="Install @types/node" commands={typesNodeCommands} />
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{viteConfigSnippet}</code>
            </pre>
          </DocsStep>

          <DocsStep step={4} title="Initialize shadcn">
            <p>
              Keep{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                cssVariables
              </code>{" "}
              enabled — nk themes with CSS variables.
            </p>
            <CodeCommand
              label="Initialize shadcn"
              commands={shadcnCommands("shadcn@latest init")}
            />
          </DocsStep>

          <DocsStep step={5} title="Add the @nk registry">
            <p>
              Do this once in{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                components.json
              </code>
              .
            </p>
            <NkRegistrySnippet />
            <p>Local docs / dogfooding:</p>
            <NkRegistrySnippet variant="local" />
          </DocsStep>

          <DocsStep step={6} title="Install a component">
            <p id="add-components" className="scroll-mt-24">
              Same pattern for every item. Browse{" "}
              <Link
                href="/docs/components"
                className="text-foreground underline underline-offset-4"
              >
                Components
              </Link>{" "}
              for names.
            </p>
            <CodeCommand
              label="Install Button"
              commands={shadcnCommands("shadcn@latest add @nk/button")}
            />
            <CodeCommand
              label="Install any component"
              commands={shadcnCommands("shadcn@latest add @nk/<component>")}
            />
          </DocsStep>

          <DocsStep step={7} title="Use it">
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{usageSnippet}</code>
            </pre>
          </DocsStep>
        </DocsSteps>
      </section>

      <section id="existing-project" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Existing project</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            You already have Vite + React + Tailwind. Three steps:
          </p>
        </div>

        <DocsSteps>
          <DocsStep step={1} title="Initialize shadcn if needed">
            <p>
              Confirm the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">@/</code>{" "}
              alias resolves in TypeScript and Vite before running init.
            </p>
            <CodeCommand
              label="Initialize shadcn"
              commands={shadcnCommands("shadcn@latest init")}
            />
          </DocsStep>
          <DocsStep step={2} title="Add the @nk registry">
            <NkRegistrySnippet />
          </DocsStep>
          <DocsStep step={3} title="Install components">
            <CodeCommand
              label="Install a component"
              commands={shadcnCommands("shadcn@latest add @nk/button")}
            />
          </DocsStep>
        </DocsSteps>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">RTL in your app</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Set direction on the document root. Docs stay LTR by default; previews include an LTR/RTL
          toggle.
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>{`document.documentElement.setAttribute("dir", "rtl")
document.documentElement.setAttribute("lang", "fa")`}</code>
        </pre>
      </section>
    </InstallationFrameworkPage>
  )
}
