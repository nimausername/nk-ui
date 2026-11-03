import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { TabsPreviews } from "@/components/docs/tabs-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  tabsDocsDescription,
  tabsDocsMarkdown,
  tabsDocsTitle,
  tabsDocsUpdatedAt,
} from "@/content/docs/tabs"

/**
 * Tabs component detail page.
 */
export default function TabsDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {tabsDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{tabsDocsTitle}</h1>
          <DocsCopyPage
            page={tabsDocsMarkdown}
            url={`${siteConfig.url}/docs/components/tabs`}
            markdownUrl="/docs/components/tabs.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{tabsDocsDescription}</p>
        <DocsLastUpdated date={tabsDocsUpdatedAt} />
      </header>

      <ComponentInstall name="tabs" />

      <TabsPreviews />
    </article>
  )
}
