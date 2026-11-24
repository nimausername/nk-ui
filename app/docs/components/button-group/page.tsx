import Link from "next/link"

import { ButtonGroupPreviews } from "@/components/docs/button-group-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  buttonGroupDocsDescription,
  buttonGroupDocsMarkdown,
  buttonGroupDocsTitle,
  buttonGroupDocsUpdatedAt,
} from "@/content/docs/button-group"

/**
 * Button Group component detail page.
 */
export default function ButtonGroupDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {buttonGroupDocsTitle}
        </p>
        <DocsPageHeader
          title={buttonGroupDocsTitle}
          actions={
            <DocsCopyPage
              page={buttonGroupDocsMarkdown}
              url={`${siteConfig.url}/docs/components/button-group`}
              markdownUrl="/docs/components/button-group.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{buttonGroupDocsDescription}</p>
        <DocsLastUpdated date={buttonGroupDocsUpdatedAt} />
      </header>

      <ComponentInstall name="button-group" />

      <ButtonGroupPreviews />
    </article>
  )
}
