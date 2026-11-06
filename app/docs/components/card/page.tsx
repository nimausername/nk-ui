import Link from "next/link"

import { CardPreviews } from "@/components/docs/card-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  cardDocsDescription,
  cardDocsMarkdown,
  cardDocsTitle,
  cardDocsUpdatedAt,
} from "@/content/docs/card"

/**
 * Card component detail page.
 */
export default function CardDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {cardDocsTitle}
        </p>
        <DocsPageHeader
          title={cardDocsTitle}
          actions={
            <DocsCopyPage
              page={cardDocsMarkdown}
              url={`${siteConfig.url}/docs/components/card`}
              markdownUrl="/docs/components/card.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{cardDocsDescription}</p>
        <DocsLastUpdated date={cardDocsUpdatedAt} />
      </header>

      <ComponentInstall name="card" />

      <CardPreviews />
    </article>
  )
}
