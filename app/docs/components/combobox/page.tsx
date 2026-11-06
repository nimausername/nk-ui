import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { ComboboxPreviews } from "@/components/docs/combobox-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  comboboxDocsDescription,
  comboboxDocsMarkdown,
  comboboxDocsTitle,
  comboboxDocsUpdatedAt,
} from "@/content/docs/combobox"

/**
 * Combobox component detail page.
 */
export default function ComboboxDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {comboboxDocsTitle}
        </p>
        <DocsPageHeader
          title={comboboxDocsTitle}
          actions={
            <DocsCopyPage
              page={comboboxDocsMarkdown}
              url={`${siteConfig.url}/docs/components/combobox`}
              markdownUrl="/docs/components/combobox.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {comboboxDocsDescription}
        </p>
        <DocsLastUpdated date={comboboxDocsUpdatedAt} />
      </header>

      <ComponentInstall name="combobox" />

      <ComboboxPreviews />
    </article>
  )
}
