import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { ResizablePreviews } from "@/components/docs/resizable-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  resizableDocsDescription,
  resizableDocsMarkdown,
  resizableDocsTitle,
  resizableDocsUpdatedAt,
} from "@/content/docs/resizable"

/**
 * Resizable component detail page.
 */
export default function ResizableDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {resizableDocsTitle}
        </p>
        <DocsPageHeader
          title={resizableDocsTitle}
          actions={
            <DocsCopyPage
              page={resizableDocsMarkdown}
              url={`${siteConfig.url}/docs/components/resizable`}
              markdownUrl="/docs/components/resizable.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{resizableDocsDescription}</p>
        <DocsLastUpdated date={resizableDocsUpdatedAt} />
      </header>

      <ComponentInstall name="resizable" />

      <ResizablePreviews />
    </article>
  )
}
