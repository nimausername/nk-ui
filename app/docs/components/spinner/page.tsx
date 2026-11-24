import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { SpinnerPreviews } from "@/components/docs/spinner-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  spinnerDocsDescription,
  spinnerDocsMarkdown,
  spinnerDocsTitle,
  spinnerDocsUpdatedAt,
} from "@/content/docs/spinner"

/**
 * Spinner component detail page.
 */
export default function SpinnerDocsPage() {
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
          {spinnerDocsTitle}
        </p>
        <DocsPageHeader
          title={spinnerDocsTitle}
          actions={
            <DocsCopyPage
              page={spinnerDocsMarkdown}
              url={`${siteConfig.url}/docs/components/spinner`}
              markdownUrl="/docs/components/spinner.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {spinnerDocsDescription}
        </p>
        <DocsLastUpdated date={spinnerDocsUpdatedAt} />
      </header>

      <ComponentInstall name="spinner" />

      <SpinnerPreviews />
    </article>
  )
}
