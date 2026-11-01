import Link from "next/link"

/**
 * Rich Introduction article body (mirrors content/docs/introduction markdown).
 */
const IntroductionBody = () => {
  return (
    <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
      <div className="space-y-4">
        <p className="text-base text-foreground text-pretty">
          This is not an opaque component package. It is how you build your own kit.
        </p>
        <p className="text-pretty">
          You know how most traditional component libraries work: you install a package from NPM,
          import the components, and use them in your app.
        </p>
        <p className="text-pretty">
          That works until you need to customize a component to fit your product, support a layout
          direction the kit ignored, or pull in something the package never shipped. You end up
          wrapping library code, fighting styles, or mixing APIs that do not compose.
        </p>
        <p className="text-pretty">nk is built to avoid that. It follows these principles:</p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <span className="font-medium text-foreground">Open Code</span> — The styled layer lives
            in your repo. You can read and change it.
          </li>
          <li>
            <span className="font-medium text-foreground">Composition</span> — Components share a
            predictable, composable interface.
          </li>
          <li>
            <span className="font-medium text-foreground">Distribution</span> — A flat registry schema
            and the shadcn CLI install source into your project.
          </li>
          <li>
            <span className="font-medium text-foreground">Calm Defaults</span> — Black/white CSS
            variables, light and dark, ready out of the box.
          </li>
          <li>
            <span className="font-medium text-foreground">RTL First-class</span> — Logical CSS so
            Persian and Arabic layouts work without fighting the kit.
          </li>
          <li>
            <span className="font-medium text-foreground">AI-Ready</span> — Open source files and
            markdown docs LLMs can read, explain, and extend.
          </li>
        </ul>
      </div>

      <section id="open-code" className="scroll-mt-24 space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Open Code</h2>
        <p className="text-pretty">
          nk hands you the actual component code via{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            npx shadcn@latest add @nk/...
          </code>
          . You own the files after install.
        </p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <span className="font-medium text-foreground">Full transparency</span> — You see how each
            piece is built on Base UI.
          </li>
          <li>
            <span className="font-medium text-foreground">Easy customization</span> — Change variants,
            structure, or tokens without wrapping a black box.
          </li>
          <li>
            <span className="font-medium text-foreground">AI integration</span> — LLMs can read the
            same files your app imports.
          </li>
        </ul>
        <p className="text-pretty">
          In a typical library, changing button behavior means overrides and wrappers. With nk, you
          edit the button in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            components/ui
          </code>
          .
        </p>
        <p className="text-pretty">
          Behavior and accessibility stay on Base UI. When{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            @base-ui/react
          </code>{" "}
          ships fixes, you get them by updating that dependency. The styled top layer stays yours.
        </p>
      </section>

      <section id="composition" className="scroll-mt-24 space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Composition</h2>
        <p className="text-pretty">
          Every nk component aims for a shared, composable interface — small parts you assemble
          instead of one mega-component with dozens of layout flags.
        </p>
        <p className="text-pretty">
          Breadcrumb is the model:{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">List</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">Item</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">Link</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">Page</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">Separator</code>.
          Icons, chevrons, and ellipsis come from composition in your app, not a new API for every
          layout.
        </p>
        <p className="text-pretty">
          A shared interface is predictable for your team and for LLMs. You are not learning a
          different pattern for every new component.
        </p>
      </section>

      <section id="distribution" className="scroll-mt-24 space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Distribution</h2>
        <p className="text-pretty">
          nk is also a code distribution system. It uses the shadcn registry schema and CLI:
        </p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <span className="font-medium text-foreground">Schema</span> — Flat JSON that lists files,
            npm dependencies, and registry dependencies.
          </li>
          <li>
            <span className="font-medium text-foreground">CLI</span> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
              npx shadcn@latest add @nk/&lt;name&gt;
            </code>{" "}
            copies source into your project.
          </li>
        </ul>
        <p className="text-pretty">
          Add the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">@nk</code> registry
          once in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            components.json
          </code>
          . Every component afterward uses the same install path. See{" "}
          <Link href="/docs/installation" className="text-foreground underline underline-offset-4">
            Installation
          </Link>
          .
        </p>
      </section>

      <section id="calm-defaults" className="scroll-mt-24 space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Calm Defaults</h2>
        <p className="text-pretty">
          nk ships black/white semantic CSS variables and product-oriented defaults:
        </p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <span className="font-medium text-foreground">Good out of the box</span> — Clean light and
            dark without a redesign pass.
          </li>
          <li>
            <span className="font-medium text-foreground">Unified system</span> — Components share
            tokens so the UI stays consistent.
          </li>
          <li>
            <span className="font-medium text-foreground">Easy to retheme</span> — Override CSS
            variables; keep structure and behavior.
          </li>
        </ul>
      </section>

      <section id="rtl-first-class" className="scroll-mt-24 space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">RTL First-class</h2>
        <p className="text-pretty">Direction is a first-class concern, not a docs-only demo.</p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            Prefer logical properties and Tailwind logical utilities (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">ms</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">me</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">ps</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">pe</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">start</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">end</code>) over
            physical{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">left</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">right</code>.
          </li>
          <li>
            Use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">gap</code> for
            icon and control spacing so rows mirror correctly under{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">dir=&quot;rtl&quot;</code>
            .
          </li>
          <li>Docs include an LTR/RTL toggle so you can verify compositions live.</li>
        </ul>
        <p className="text-pretty">
          Full translation infrastructure is out of scope for v1 — layout direction is the promise.
        </p>
      </section>

      <section id="ai-ready" className="scroll-mt-24 space-y-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">AI-Ready</h2>
        <p className="text-pretty">
          Open code, a consistent composition model, and markdown docs make nk workable with AI
          tools.
        </p>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            Copy this page as markdown, or open it in ChatGPT / Claude with the docs URL in context.
          </li>
          <li>
            View the raw page at{" "}
            <Link href="/docs.md" className="text-foreground underline underline-offset-4">
              /docs.md
            </Link>
            .
          </li>
          <li>
            Installed source under{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
              components/ui
            </code>{" "}
            is what models should edit — the same files you ship.
          </li>
        </ul>
        <p className="text-pretty">
          An AI that learns your Breadcrumb or Button patterns can suggest variants or new
          components that fit the rest of the kit.
        </p>
      </section>
    </div>
  )
}

export { IntroductionBody }
