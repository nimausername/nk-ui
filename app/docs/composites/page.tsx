import Link from "next/link"

import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { compositeItems } from "@/config/docs"
import { siteConfig } from "@/config/site"
import {
  compositesDocsDescription,
  compositesDocsMarkdown,
  compositesDocsTitle,
  compositesDocsUpdatedAt,
} from "@/content/docs/composites"

/**
 * Composites index — composed multi-part components built on primitives.
 */
export default function CompositesIndexPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <DocsPageHeader
          title={compositesDocsTitle}
          actions={
            <DocsCopyPage
              page={compositesDocsMarkdown}
              url={`${siteConfig.url}/docs/composites`}
              markdownUrl="/docs/composites.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{compositesDocsDescription}</p>
        <DocsLastUpdated date={compositesDocsUpdatedAt} />
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {compositeItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex flex-col gap-1 py-4 transition-colors hover:bg-muted/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-medium text-foreground">{item.title}</span>
              {item.description ? (
                <span className="text-sm text-muted-foreground sm:text-end">{item.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted-foreground">
        Composites are still published through the registry — same install flow as{" "}
        <Link href="/docs/components" className="underline underline-offset-4">
          Components
        </Link>
        . See{" "}
        <Link href="/docs/installation" className="underline underline-offset-4">
          Installation
        </Link>
        .
      </p>
    </article>
  )
}
