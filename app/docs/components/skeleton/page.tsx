import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { SkeletonPreviews } from "@/components/docs/skeleton-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  skeletonDocsDescription,
  skeletonDocsMarkdown,
  skeletonDocsTitle,
  skeletonDocsUpdatedAt,
} from "@/content/docs/skeleton"

/**
 * Skeleton component detail page.
 */
export default function SkeletonDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {skeletonDocsTitle}
        </p>
        <DocsPageHeader
          title={skeletonDocsTitle}
          actions={
            <DocsCopyPage
              page={skeletonDocsMarkdown}
              url={`${siteConfig.url}/docs/components/skeleton`}
              markdownUrl="/docs/components/skeleton.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{skeletonDocsDescription}</p>
        <DocsLastUpdated date={skeletonDocsUpdatedAt} />
      </header>

      <ComponentInstall name="skeleton" />

      <SkeletonPreviews />
    </article>
  )
}
