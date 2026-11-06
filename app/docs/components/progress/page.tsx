import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { ProgressPreviews } from "@/components/docs/progress-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  progressDocsDescription,
  progressDocsMarkdown,
  progressDocsTitle,
  progressDocsUpdatedAt,
} from "@/content/docs/progress"

/**
 * Progress component detail page.
 */
export default function ProgressDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {progressDocsTitle}
        </p>
        <DocsPageHeader
          title={progressDocsTitle}
          actions={
            <DocsCopyPage
              page={progressDocsMarkdown}
              url={`${siteConfig.url}/docs/components/progress`}
              markdownUrl="/docs/components/progress.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{progressDocsDescription}</p>
        <DocsLastUpdated date={progressDocsUpdatedAt} />
      </header>

      <ComponentInstall name="progress" />

      <ProgressPreviews />
    </article>
  )
}
