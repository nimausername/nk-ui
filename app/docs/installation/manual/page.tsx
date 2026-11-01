import Link from "next/link"

import { DocsStep, DocsSteps } from "@/components/docs/docs-steps"
import { InstallationFrameworkPage } from "@/components/docs/installation-framework-page"
import { NkRegistrySnippet } from "@/components/docs/nk-registry-snippet"
import { CodeCommand } from "@/components/shared/code-command"
import {
  manualInstallDescription,
  manualInstallMarkdown,
  manualInstallTitle,
  manualInstallUpdatedAt,
} from "@/content/docs/installation-manual"
import { shadcnCommands } from "@/lib/shadcn-commands"

const pathCards = [
  {
    title: "Prerequisites",
    description: "React, Tailwind, path aliases, and a shadcn-ready components.json.",
    href: "#prerequisites",
  },
  {
    title: "Add @nk",
    description: "Registry once, then install any component.",
    href: "#add-registry",
  },
  {
    title: "Install",
    description: "Same shadcn add command as other frameworks.",
    href: "#install",
  },
] as const

const usageSnippet = `import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>Continue</Button>
}`

/**
 * Manual / existing React nk installation guide.
 */
export default function ManualInstallationPage() {
  return (
    <InstallationFrameworkPage
      title={manualInstallTitle}
      description={manualInstallDescription}
      markdown={manualInstallMarkdown}
      path="/docs/installation/manual"
      markdownUrl="/docs/installation/manual.md"
      updatedAt={manualInstallUpdatedAt}
      pathCards={pathCards}
    >
      <section id="prerequisites" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Prerequisites</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Use this when you are not on the{" "}
            <Link
              href="/docs/installation/next"
              className="text-foreground underline underline-offset-4"
            >
              Next.js
            </Link>{" "}
            or{" "}
            <Link
              href="/docs/installation/vite"
              className="text-foreground underline underline-offset-4"
            >
              Vite
            </Link>{" "}
            starters, or you already have a custom React setup.
          </p>
          <ul className="list-disc space-y-2 ps-5 text-sm text-muted-foreground">
            <li>React 18+ (19 recommended)</li>
            <li>Tailwind CSS with CSS variables</li>
            <li>
              Path aliases that match{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                components.json
              </code>{" "}
              (
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                @/components
              </code>
              ,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                @/lib/utils
              </code>
              )
            </li>
            <li>Ability to run the shadcn CLI in the project root</li>
          </ul>
        </div>

        <DocsSteps>
          <DocsStep step={1} title="Initialize shadcn if needed">
            <p>
              Keep{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                cssVariables
              </code>{" "}
              enabled — nk themes with CSS variables. Skip this step if you already have a working{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                components.json
              </code>
              .
            </p>
            <CodeCommand
              label="Initialize shadcn"
              commands={shadcnCommands("shadcn@latest init")}
            />
          </DocsStep>
        </DocsSteps>
      </section>

      <section id="add-registry" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Add the @nk registry</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Merge into{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
              components.json
            </code>
            . Do this once per project.
          </p>
        </div>
        <NkRegistrySnippet />
        <p className="text-sm text-muted-foreground">Local docs / dogfooding:</p>
        <NkRegistrySnippet variant="local" />
      </section>

      <section id="install" className="scroll-mt-24 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Install components</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Same CLI pattern as every other framework guide. Browse{" "}
            <Link
              href="/docs/components"
              className="text-foreground underline underline-offset-4"
            >
              Components
            </Link>{" "}
            for names.
          </p>
        </div>
        <CodeCommand
          label="Install Button"
          commands={shadcnCommands("shadcn@latest add @nk/button")}
        />
        <CodeCommand
          label="Install any component"
          commands={shadcnCommands("shadcn@latest add @nk/<component>")}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Use it</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Imports follow whatever aliases{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            shadcn init
          </code>{" "}
          configured.
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm text-foreground">
          <code>{usageSnippet}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">RTL in your app</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Set direction on the document root or a layout wrapper. Prefer logical CSS properties so
          layouts flip without rewriting styles.
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>{`<html lang="fa" dir="rtl">`}</code>
        </pre>
      </section>

      <aside className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
        <p className="text-pretty">
          <span className="font-medium text-foreground">Note:</span> nk components depend on Base UI
          (
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            @base-ui/react
          </code>
          ). The shadcn CLI installs declared dependencies when you add a component.
        </p>
      </aside>
    </InstallationFrameworkPage>
  )
}
