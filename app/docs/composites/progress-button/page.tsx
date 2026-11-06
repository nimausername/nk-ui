import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { ProgressButtonPreviews } from "@/components/docs/progress-button-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  progressButtonDocsDescription,
  progressButtonDocsMarkdown,
  progressButtonDocsTitle,
  progressButtonDocsUpdatedAt,
} from "@/content/docs/progress-button"

/**
 * Progress Button composite detail page.
 */
export default function ProgressButtonDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/composites" className="underline-offset-4 hover:underline">
            Composites
          </Link>
          <span aria-hidden="true"> / </span>
          {progressButtonDocsTitle}
        </p>
        <DocsPageHeader
          title={progressButtonDocsTitle}
          actions={
            <DocsCopyPage
              page={progressButtonDocsMarkdown}
              url={`${siteConfig.url}/docs/composites/progress-button`}
              markdownUrl="/docs/composites/progress-button.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {progressButtonDocsDescription}
        </p>
        <DocsLastUpdated date={progressButtonDocsUpdatedAt} />
      </header>

      <ComponentInstall name="progress-button" />

      <ProgressButtonPreviews />
    </article>
  )
}
