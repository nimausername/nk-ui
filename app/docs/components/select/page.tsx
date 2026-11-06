import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { SelectPreviews } from "@/components/docs/select-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  selectDocsDescription,
  selectDocsMarkdown,
  selectDocsTitle,
  selectDocsUpdatedAt,
} from "@/content/docs/select"

/**
 * Select component detail page.
 */
export default function SelectDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {selectDocsTitle}
        </p>
        <DocsPageHeader
          title={selectDocsTitle}
          actions={
            <DocsCopyPage
              page={selectDocsMarkdown}
              url={`${siteConfig.url}/docs/components/select`}
              markdownUrl="/docs/components/select.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{selectDocsDescription}</p>
        <DocsLastUpdated date={selectDocsUpdatedAt} />
      </header>

      <ComponentInstall name="select" />
      <SelectPreviews />
    </article>
  )
}
