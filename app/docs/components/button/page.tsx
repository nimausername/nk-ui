import Link from "next/link"

import { ButtonPreviews } from "@/components/docs/button-previews"

/**
 * Button component detail page.
 */
export default function ButtonDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          Button
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Button</h1>
        <p className="text-muted-foreground text-pretty">
          Built on Base UI. Toggle RTL in a preview to see Persian copy — the same idea as shadcn
          RTL examples. In your app, set{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">dir=&quot;rtl&quot;</code> on
          the document.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Install</h2>
        <p className="text-sm text-muted-foreground">
          Requires the general{" "}
          <Link href="/docs/installation" className="underline underline-offset-4">
            @nk registry setup
          </Link>{" "}
          once. Then:
        </p>
        <pre className="overflow-x-auto rounded-md border border-border bg-card p-4 text-sm">
          <code>npx shadcn@latest add @nk/button</code>
        </pre>
      </section>

      <ButtonPreviews />
    </article>
  )
}
