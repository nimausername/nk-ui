import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { ToggleGroupPreviews } from "@/components/docs/toggle-group-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  toggleGroupDocsDescription,
  toggleGroupDocsMarkdown,
  toggleGroupDocsTitle,
  toggleGroupDocsUpdatedAt,
} from "@/content/docs/toggle-group"

/**
 * Toggle Group component detail page.
 */
export default function ToggleGroupDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {toggleGroupDocsTitle}
        </p>
        <DocsPageHeader
          title={toggleGroupDocsTitle}
          actions={
            <DocsCopyPage
              page={toggleGroupDocsMarkdown}
              url={`${siteConfig.url}/docs/components/toggle-group`}
              markdownUrl="/docs/components/toggle-group.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{toggleGroupDocsDescription}</p>
        <DocsLastUpdated date={toggleGroupDocsUpdatedAt} />
      </header>

      <ComponentInstall name="toggle-group" />

      <ToggleGroupPreviews />
    </article>
  )
}
