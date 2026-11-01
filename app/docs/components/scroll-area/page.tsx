import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { ScrollAreaPreviews } from "@/components/docs/scroll-area-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  scrollAreaDocsDescription,
  scrollAreaDocsMarkdown,
  scrollAreaDocsTitle,
  scrollAreaDocsUpdatedAt,
} from "@/content/docs/scroll-area"

/**
 * Scroll Area component detail page.
 */
export default function ScrollAreaDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {scrollAreaDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {scrollAreaDocsTitle}
          </h1>
          <DocsCopyPage
            page={scrollAreaDocsMarkdown}
            url={`${siteConfig.url}/docs/components/scroll-area`}
            markdownUrl="/docs/components/scroll-area.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {scrollAreaDocsDescription}
        </p>
        <DocsLastUpdated date={scrollAreaDocsUpdatedAt} />
      </header>

      <ComponentInstall name="scroll-area" />

      <ScrollAreaPreviews />
    </article>
  )
}
