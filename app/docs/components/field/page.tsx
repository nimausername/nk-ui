import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { FieldPreviews } from "@/components/docs/field-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  fieldDocsDescription,
  fieldDocsMarkdown,
  fieldDocsTitle,
  fieldDocsUpdatedAt,
} from "@/content/docs/field"

/**
 * Field component detail page.
 */
export default function FieldDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {fieldDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{fieldDocsTitle}</h1>
          <DocsCopyPage
            page={fieldDocsMarkdown}
            url={`${siteConfig.url}/docs/components/field`}
            markdownUrl="/docs/components/field.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{fieldDocsDescription}</p>
        <DocsLastUpdated date={fieldDocsUpdatedAt} />
      </header>

      <ComponentInstall name="field" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Field</code> — root (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">name</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">disabled</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">validate</code>)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">FieldLabel</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">FieldDescription</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">FieldError</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">FieldSuccess</code> — failed /
            approved messages
          </li>
          <li>
            Control:{" "}
            <Link href="/docs/components/input" className="underline underline-offset-4">
              Input
            </Link>{" "}
            (or other Base UI field-aware controls)
          </li>
        </ul>
      </section>

      <FieldPreviews />
    </article>
  )
}
