import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { InputGroupPreviews } from "@/components/docs/input-group-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  inputGroupDocsDescription,
  inputGroupDocsMarkdown,
  inputGroupDocsTitle,
  inputGroupDocsUpdatedAt,
} from "@/content/docs/input-group"

/**
 * Input Group component detail page.
 */
export default function InputGroupDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {inputGroupDocsTitle}
        </p>
        <DocsPageHeader
          title={inputGroupDocsTitle}
          actions={
            <DocsCopyPage
              page={inputGroupDocsMarkdown}
              url={`${siteConfig.url}/docs/components/input-group`}
              markdownUrl="/docs/components/input-group.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{inputGroupDocsDescription}</p>
        <DocsLastUpdated date={inputGroupDocsUpdatedAt} />
      </header>

      <ComponentInstall name="input-group" />

      <InputGroupPreviews />
    </article>
  )
}
