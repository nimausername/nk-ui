import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { SeparatorPreviews } from "@/components/docs/separator-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  separatorDocsDescription,
  separatorDocsMarkdown,
  separatorDocsTitle,
  separatorDocsUpdatedAt,
} from "@/content/docs/separator"

/**
 * Separator component detail page.
 */
export default function SeparatorDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {separatorDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{separatorDocsTitle}</h1>
          <DocsCopyPage
            page={separatorDocsMarkdown}
            url={`${siteConfig.url}/docs/components/separator`}
            markdownUrl="/docs/components/separator.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{separatorDocsDescription}</p>
        <DocsLastUpdated date={separatorDocsUpdatedAt} />
      </header>

      <ComponentInstall name="separator" />

      <SeparatorPreviews />
    </article>
  )
}
