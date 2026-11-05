import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { TablePreviews } from "@/components/docs/table-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  tableDocsDescription,
  tableDocsMarkdown,
  tableDocsTitle,
  tableDocsUpdatedAt,
} from "@/content/docs/table"

/**
 * Table component detail page.
 */
export default function TableDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {tableDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {tableDocsTitle}
          </h1>
          <DocsCopyPage
            page={tableDocsMarkdown}
            url={`${siteConfig.url}/docs/components/table`}
            markdownUrl="/docs/components/table.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {tableDocsDescription}
        </p>
        <DocsLastUpdated date={tableDocsUpdatedAt} />
      </header>

      <ComponentInstall name="table" />

      <TablePreviews />
    </article>
  )
}
