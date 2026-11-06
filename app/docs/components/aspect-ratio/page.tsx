import Link from "next/link"

import { AspectRatioPreviews } from "@/components/docs/aspect-ratio-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  aspectRatioDocsDescription,
  aspectRatioDocsMarkdown,
  aspectRatioDocsTitle,
  aspectRatioDocsUpdatedAt,
} from "@/content/docs/aspect-ratio"

/**
 * Aspect Ratio component detail page.
 */
export default function AspectRatioDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {aspectRatioDocsTitle}
        </p>
        <DocsPageHeader
          title={aspectRatioDocsTitle}
          actions={
            <DocsCopyPage
              page={aspectRatioDocsMarkdown}
              url={`${siteConfig.url}/docs/components/aspect-ratio`}
              markdownUrl="/docs/components/aspect-ratio.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {aspectRatioDocsDescription}
        </p>
        <DocsLastUpdated date={aspectRatioDocsUpdatedAt} />
      </header>

      <ComponentInstall name="aspect-ratio" />

      <AspectRatioPreviews />
    </article>
  )
}
