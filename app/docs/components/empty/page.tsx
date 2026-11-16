import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { EmptyPreviews } from "@/components/docs/empty-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  emptyDocsDescription,
  emptyDocsMarkdown,
  emptyDocsTitle,
  emptyDocsUpdatedAt,
} from "@/content/docs/empty"

/**
 * Empty component detail page.
 */
export default function EmptyDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link
            href="/docs/components"
            className="underline-offset-4 hover:underline"
          >
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {emptyDocsTitle}
        </p>
        <DocsPageHeader
          title={emptyDocsTitle}
          actions={
            <DocsCopyPage
              page={emptyDocsMarkdown}
              url={`${siteConfig.url}/docs/components/empty`}
              markdownUrl="/docs/components/empty.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {emptyDocsDescription}
        </p>
        <DocsLastUpdated date={emptyDocsUpdatedAt} />
      </header>

      <ComponentInstall name="empty" />

      <EmptyPreviews />
    </article>
  )
}
