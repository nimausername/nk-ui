import Link from "next/link"

import { BreadcrumbPreviews } from "@/components/docs/breadcrumb-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  breadcrumbDocsDescription,
  breadcrumbDocsMarkdown,
  breadcrumbDocsTitle,
  breadcrumbDocsUpdatedAt,
} from "@/content/docs/breadcrumb"

/**
 * Breadcrumb component detail page.
 */
export default function BreadcrumbDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {breadcrumbDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{breadcrumbDocsTitle}</h1>
          <DocsCopyPage
            page={breadcrumbDocsMarkdown}
            url={`${siteConfig.url}/docs/components/breadcrumb`}
            markdownUrl="/docs/components/breadcrumb.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{breadcrumbDocsDescription}</p>
        <DocsLastUpdated date={breadcrumbDocsUpdatedAt} />
      </header>

      <ComponentInstall name="breadcrumb" />

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
