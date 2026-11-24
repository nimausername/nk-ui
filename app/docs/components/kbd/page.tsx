import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { KbdPreviews } from "@/components/docs/kbd-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  kbdDocsDescription,
  kbdDocsMarkdown,
  kbdDocsTitle,
  kbdDocsUpdatedAt,
} from "@/content/docs/kbd"

/**
 * Kbd component detail page.
 */
export default function KbdDocsPage() {
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
          {kbdDocsTitle}
        </p>
        <DocsPageHeader
          title={kbdDocsTitle}
          actions={
            <DocsCopyPage
              page={kbdDocsMarkdown}
              url={`${siteConfig.url}/docs/components/kbd`}
              markdownUrl="/docs/components/kbd.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{kbdDocsDescription}</p>
        <DocsLastUpdated date={kbdDocsUpdatedAt} />
      </header>

      <ComponentInstall name="kbd" />

      <KbdPreviews />
    </article>
  )
}
