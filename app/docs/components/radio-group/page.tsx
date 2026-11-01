import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { RadioGroupPreviews } from "@/components/docs/radio-group-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  radioGroupDocsDescription,
  radioGroupDocsMarkdown,
  radioGroupDocsTitle,
  radioGroupDocsUpdatedAt,
} from "@/content/docs/radio-group"

/**
 * Radio Group component detail page.
 */
export default function RadioGroupDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {radioGroupDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{radioGroupDocsTitle}</h1>
          <DocsCopyPage
            page={radioGroupDocsMarkdown}
            url={`${siteConfig.url}/docs/components/radio-group`}
            markdownUrl="/docs/components/radio-group.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{radioGroupDocsDescription}</p>
        <DocsLastUpdated date={radioGroupDocsUpdatedAt} />
      </header>

      <ComponentInstall name="radio-group" />
      <RadioGroupPreviews />
    </article>
  )
}
