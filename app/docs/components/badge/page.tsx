import Link from "next/link"

import { BadgePreviews } from "@/components/docs/badge-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  badgeDocsDescription,
  badgeDocsMarkdown,
  badgeDocsTitle,
  badgeDocsUpdatedAt,
} from "@/content/docs/badge"

/**
 * Badge component detail page.
 */
export default function BadgeDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {badgeDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{badgeDocsTitle}</h1>
          <DocsCopyPage
            page={badgeDocsMarkdown}
            url={`${siteConfig.url}/docs/components/badge`}
            markdownUrl="/docs/components/badge.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{badgeDocsDescription}</p>
        <DocsLastUpdated date={badgeDocsUpdatedAt} />
      </header>

      <ComponentInstall name="badge" />

      <BadgePreviews />
    </article>
  )
}
