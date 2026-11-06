import Link from "next/link"

import { CollapsiblePreviews } from "@/components/docs/collapsible-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  collapsibleDocsDescription,
  collapsibleDocsMarkdown,
  collapsibleDocsTitle,
  collapsibleDocsUpdatedAt,
} from "@/content/docs/collapsible"

/**
 * Collapsible component detail page.
 */
export default function CollapsibleDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {collapsibleDocsTitle}
        </p>
        <DocsPageHeader
          title={collapsibleDocsTitle}
          actions={
            <DocsCopyPage
              page={collapsibleDocsMarkdown}
              url={`${siteConfig.url}/docs/components/collapsible`}
              markdownUrl="/docs/components/collapsible.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {collapsibleDocsDescription}
        </p>
        <DocsLastUpdated date={collapsibleDocsUpdatedAt} />
      </header>

      <ComponentInstall name="collapsible" />

      <CollapsiblePreviews />
    </article>
  )
}
