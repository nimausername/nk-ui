import Link from "next/link"

import { BreadcrumbPreviews } from "@/components/docs/breadcrumb-previews"

/**
 * Breadcrumb component detail page.
 */
export default function BreadcrumbDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          Breadcrumb
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Breadcrumb</h1>
        <p className="text-muted-foreground text-pretty">
          Composable navigation trail — not one mega-component with every variant baked in.
          Mix icons, separators, ellipsis, and links by composition. No Base UI primitive
          required (same approach as shadcn).
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
          <code>npx shadcn@latest add @nk/breadcrumb</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Breadcrumb</code> — root{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">nav</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">BreadcrumbList</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">ol</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">BreadcrumbItem</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">li</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">BreadcrumbLink</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">BreadcrumbPage</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">BreadcrumbSeparator</code> —
            chevron by default; pass children for slash or custom marks
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">BreadcrumbEllipsis</code> —
            collapsed middle (compose a menu later)
          </li>
        </ul>
      </section>

      <BreadcrumbPreviews />
    </article>
  )
}
