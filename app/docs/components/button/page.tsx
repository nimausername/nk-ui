import Link from "next/link"

import { ButtonPreviews } from "@/components/docs/button-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  buttonDocsDescription,
  buttonDocsMarkdown,
  buttonDocsTitle,
  buttonDocsUpdatedAt,
} from "@/content/docs/button"

/**
 * Button component detail page.
 */
export default function ButtonDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {buttonDocsTitle}
        </p>
        <DocsPageHeader
          title={buttonDocsTitle}
          actions={
            <DocsCopyPage
              page={buttonDocsMarkdown}
              url={`${siteConfig.url}/docs/components/button`}
              markdownUrl="/docs/components/button.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{buttonDocsDescription}</p>
        <DocsLastUpdated date={buttonDocsUpdatedAt} />
      </header>

      <ComponentInstall name="button" />

      <ButtonPreviews />
    </article>
  )
}
