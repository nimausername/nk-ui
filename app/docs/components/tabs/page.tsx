import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
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
        <DocsPageHeader
          title={tabsDocsTitle}
          actions={
            <DocsCopyPage
              page={tabsDocsMarkdown}
              url={`${siteConfig.url}/docs/components/tabs`}
              markdownUrl="/docs/components/tabs.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{tabsDocsDescription}</p>
        <DocsLastUpdated date={tabsDocsUpdatedAt} />
      </header>

      <ComponentInstall name="tabs" />

      <TabsPreviews />
    </article>
  )
}
