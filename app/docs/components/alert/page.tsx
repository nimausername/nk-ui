import Link from "next/link"

import { AlertPreviews } from "@/components/docs/alert-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  alertDocsDescription,
  alertDocsMarkdown,
  alertDocsTitle,
  alertDocsUpdatedAt,
} from "@/content/docs/alert"

/**
 * Alert component detail page.
 */
export default function AlertDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {alertDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{alertDocsTitle}</h1>
          <DocsCopyPage
            page={alertDocsMarkdown}
            url={`${siteConfig.url}/docs/components/alert`}
            markdownUrl="/docs/components/alert.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{alertDocsDescription}</p>
        <DocsLastUpdated date={alertDocsUpdatedAt} />
      </header>

      <ComponentInstall name="alert" />

      <AlertPreviews />
    </article>
  )
}
