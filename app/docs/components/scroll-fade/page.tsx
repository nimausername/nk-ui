import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { ScrollFadePreviews } from "@/components/docs/scroll-fade-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  scrollFadeDocsDescription,
  scrollFadeDocsMarkdown,
  scrollFadeDocsTitle,
  scrollFadeDocsUpdatedAt,
} from "@/content/docs/scroll-fade"

/**
 * Scroll Fade utility detail page.
 */
export default function ScrollFadeDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {scrollFadeDocsTitle}
        </p>
        <DocsPageHeader
          title={scrollFadeDocsTitle}
          actions={
            <DocsCopyPage
              page={scrollFadeDocsMarkdown}
              url={`${siteConfig.url}/docs/components/scroll-fade`}
              markdownUrl="/docs/components/scroll-fade.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {scrollFadeDocsDescription}
        </p>
        <DocsLastUpdated date={scrollFadeDocsUpdatedAt} />
      </header>

      <ComponentInstall name="scroll-fade" />

      <ScrollFadePreviews />
    </article>
  )
}
