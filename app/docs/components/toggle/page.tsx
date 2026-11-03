import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { TogglePreviews } from "@/components/docs/toggle-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  toggleDocsDescription,
  toggleDocsMarkdown,
  toggleDocsTitle,
  toggleDocsUpdatedAt,
} from "@/content/docs/toggle"

/**
 * Toggle component detail page.
 */
export default function ToggleDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {toggleDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{toggleDocsTitle}</h1>
          <DocsCopyPage
            page={toggleDocsMarkdown}
            url={`${siteConfig.url}/docs/components/toggle`}
            markdownUrl="/docs/components/toggle.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{toggleDocsDescription}</p>
        <DocsLastUpdated date={toggleDocsUpdatedAt} />
      </header>

      <ComponentInstall name="toggle" />

      <TogglePreviews />
    </article>
  )
}
