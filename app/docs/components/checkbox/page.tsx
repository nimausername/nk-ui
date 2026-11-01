import Link from "next/link"

import { CheckboxPreviews } from "@/components/docs/checkbox-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  checkboxDocsDescription,
  checkboxDocsMarkdown,
  checkboxDocsTitle,
  checkboxDocsUpdatedAt,
} from "@/content/docs/checkbox"

/**
 * Checkbox component detail page.
 */
export default function CheckboxDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {checkboxDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{checkboxDocsTitle}</h1>
          <DocsCopyPage
            page={checkboxDocsMarkdown}
            url={`${siteConfig.url}/docs/components/checkbox`}
            markdownUrl="/docs/components/checkbox.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{checkboxDocsDescription}</p>
        <DocsLastUpdated date={checkboxDocsUpdatedAt} />
      </header>

      <ComponentInstall name="checkbox" />
      <CheckboxPreviews />
    </article>
  )
}
