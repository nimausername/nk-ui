import Link from "next/link"

import { CodeCommand } from "@/components/shared/code-command"
import { DocsStep, DocsSteps } from "@/components/docs/docs-steps"
import { InstallationFrameworkPage } from "@/components/docs/installation-framework-page"
import { NkRegistrySnippet } from "@/components/docs/nk-registry-snippet"
import {
  nextInstallDescription,
  nextInstallMarkdown,
  nextInstallTitle,
  nextInstallUpdatedAt,
} from "@/content/docs/installation-next"
import { shadcnCommands } from "@/lib/shadcn-commands"

const pathCards = [
  {
    title: "New project",
    description: "Create Next.js, init shadcn, add @nk, install a component.",
    href: "#new-project",
  },
  {
    title: "Existing project",
    description: "Wire @nk into a Next.js app that already has Tailwind.",
    href: "#existing-project",
  },
  {
    title: "Add components",
    description: "Registry is ready — install any item from Components.",
    href: "#add-components",
  },
] as const

const createNextAppCommands = {
  pnpm: "pnpm create next-app@latest",
  npm: "npx create-next-app@latest",
  yarn: "yarn create next-app",
  bun: "bunx create-next-app@latest",
} as const

/**
 * Next.js-specific nk installation guide.
 */
export default function NextInstallationPage() {
  return (
    <InstallationFrameworkPage
      title={nextInstallTitle}
      description={nextInstallDescription}
      markdown={nextInstallMarkdown}
      path="/docs/installation/next"
      markdownUrl="/docs/installation/next.md"
      updatedAt={nextInstallUpdatedAt}
      pathCards={pathCards}
    >
      <section id="new-project" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">New project</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Full path from an empty folder to an installed nk component.
          </p>
        </div>

        <DocsSteps>
          <DocsStep step={1} title="Create a Next.js app">
            <p>Use the App Router and Tailwind CSS when prompted.</p>
            <CodeCommand label="Create Next.js app" commands={createNextAppCommands} />
          </DocsStep>

          <DocsStep step={2} title="Initialize shadcn">
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

          <DocsStep step={3} title="Add the @nk registry">
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

          <DocsStep step={4} title="Install a component">
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

          <DocsStep step={5} title="Use it">
            <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
              <code>{`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Continue</Button>
}`}</code>
            </pre>
          </DocsStep>
        </DocsSteps>
      </section>

      <section id="existing-project" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Existing project</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            You already have Next.js with Tailwind. Three steps:
          </p>
        </div>

        <DocsSteps>
          <DocsStep step={1} title="Initialize shadcn if needed">
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
          Set direction on the document. Docs stay LTR by default; previews include an LTR/RTL
          toggle.
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>{`<html lang="fa" dir="rtl">`}</code>
        </pre>
      </section>
    </InstallationFrameworkPage>
  )
}
