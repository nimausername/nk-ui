import Link from "next/link"

import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { componentItems } from "@/config/docs"
import { siteConfig } from "@/config/site"
import {
  componentsDocsDescription,
  componentsDocsMarkdown,
  componentsDocsTitle,
  componentsDocsUpdatedAt,
} from "@/content/docs/components"

/**
 * Components index — list of all documented nk components.
 */
export default function ComponentsIndexPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <DocsPageHeader
          title={componentsDocsTitle}
          actions={
            <DocsCopyPage
              page={componentsDocsMarkdown}
              url={`${siteConfig.url}/docs/components`}
              markdownUrl="/docs/components.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{componentsDocsDescription}</p>
        <DocsLastUpdated date={componentsDocsUpdatedAt} />
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {componentItems.map((item) => (
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
        New primitives are added here as they ship. Composed pieces live under{" "}
        <Link href="/docs/composites" className="underline underline-offset-4">
          Composites
        </Link>
        . Registry setup stays the same — see{" "}
        <Link href="/docs/installation" className="underline underline-offset-4">
          Installation
        </Link>
        .
      </p>
    </article>
  )
}
