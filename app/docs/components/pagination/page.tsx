import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { PaginationPreviews } from "@/components/docs/pagination-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  paginationDocsDescription,
  paginationDocsMarkdown,
  paginationDocsTitle,
  paginationDocsUpdatedAt,
} from "@/content/docs/pagination"

/**
 * Pagination component detail page.
 */
export default function PaginationDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {paginationDocsTitle}
        </p>
        <DocsPageHeader
          title={paginationDocsTitle}
          actions={
            <DocsCopyPage
              page={paginationDocsMarkdown}
              url={`${siteConfig.url}/docs/components/pagination`}
              markdownUrl="/docs/components/pagination.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {paginationDocsDescription}
        </p>
        <DocsLastUpdated date={paginationDocsUpdatedAt} />
      </header>

      <ComponentInstall name="pagination" />

      <PaginationPreviews />
    </article>
  )
}
