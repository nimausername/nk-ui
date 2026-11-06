import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DatePickerPreviews } from "@/components/docs/date-picker-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  datePickerDocsDescription,
  datePickerDocsMarkdown,
  datePickerDocsTitle,
  datePickerDocsUpdatedAt,
} from "@/content/docs/date-picker"

/**
 * Date Picker composite detail page.
 */
export default function DatePickerDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/composites" className="underline-offset-4 hover:underline">
            Composites
          </Link>
          <span aria-hidden="true"> / </span>
          {datePickerDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {datePickerDocsTitle}
          </h1>
          <DocsCopyPage
            page={datePickerDocsMarkdown}
            url={`${siteConfig.url}/docs/composites/date-picker`}
            markdownUrl="/docs/composites/date-picker.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {datePickerDocsDescription}
        </p>
        <DocsLastUpdated date={datePickerDocsUpdatedAt} />
      </header>

      <ComponentInstall name="date-picker" />

      <DatePickerPreviews />
    </article>
  )
}
