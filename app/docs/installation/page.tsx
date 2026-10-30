import Link from "next/link"

/**
 * General installation for the entire @nk registry (not component-specific).
 */
export default function InstallationPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Installation</h1>
        <p className="text-muted-foreground text-pretty">
          This is the <strong className="font-medium text-foreground">one-time setup</strong> for
          the whole nk library. You add the <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk</code>{" "}
          registry once; after that every future component uses the same flow.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">1. Prerequisites</h2>
        <p className="text-sm text-muted-foreground">
          A React or Next.js project with Tailwind CSS. Initialize shadcn if you have not:
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>npx shadcn@latest init</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">2. Add the @nk registry</h2>
        <p className="text-sm text-muted-foreground">
          Do this once in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">components.json</code>. It covers
          Button today and every component we publish later.
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>{`{
  "registries": {
    "@nk": "https://ui.nimakhabbazi.com/r/{name}.json"
  }
}`}</code>
        </pre>
        <p className="text-sm text-muted-foreground">Local development against this docs app:</p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>{`{
  "registries": {
    "@nk": "http://localhost:3000/r/{name}.json"
  }
}`}</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">3. Install any component</h2>
        <p className="text-sm text-muted-foreground">
          Same pattern for every item. Replace <code className="rounded bg-muted px-1.5 py-0.5 text-xs">button</code>{" "}
          with the component name from the{" "}
          <Link href="/docs/components" className="underline underline-offset-4">
            Components
          </Link>{" "}
          list:
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>npx shadcn@latest add @nk/&lt;component&gt;</code>
        </pre>
        <p className="text-sm text-muted-foreground">Example for the current Button:</p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>npx shadcn@latest add @nk/button</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          Each component page also repeats its own install command for copy-paste. The registry
          setup above is shared — you do not re-add <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk</code>{" "}
          per component.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">RTL in your app</h2>
        <p className="text-sm text-muted-foreground">
          nk components use logical CSS, so they mirror when your app sets direction. Docs stay LTR;
          use the RTL control on each component preview to verify. In production:
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>{`<html lang="fa" dir="rtl">`}</code>
        </pre>
      </section>
    </article>
  )
}
