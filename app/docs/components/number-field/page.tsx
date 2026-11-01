import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { NumberFieldPreviews } from "@/components/docs/number-field-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  numberFieldDocsDescription,
  numberFieldDocsMarkdown,
  numberFieldDocsTitle,
  numberFieldDocsUpdatedAt,
} from "@/content/docs/number-field"

/**
 * Number Field component detail page.
 */
export default function NumberFieldDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {numberFieldDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {numberFieldDocsTitle}
          </h1>
          <DocsCopyPage
            page={numberFieldDocsMarkdown}
            url={`${siteConfig.url}/docs/components/number-field`}
            markdownUrl="/docs/components/number-field.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {numberFieldDocsDescription}
        </p>
        <DocsLastUpdated date={numberFieldDocsUpdatedAt} />
      </header>

      <ComponentInstall name="number-field" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">NumberField</code> — root
            value / min / max / step
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">NumberFieldGroup</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Decrement</code> +{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Input</code> +{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Increment</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">NumberFieldScrubArea</code> —
            optional drag-to-adjust (often wraps the label)
          </li>
        </ul>
      </section>

      <NumberFieldPreviews />
    </article>
  )
}
