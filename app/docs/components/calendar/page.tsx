import Link from "next/link"

import { CalendarPreviews } from "@/components/docs/calendar-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  calendarDocsDescription,
  calendarDocsMarkdown,
  calendarDocsTitle,
  calendarDocsUpdatedAt,
} from "@/content/docs/calendar"

/**
 * Calendar component detail page.
 */
export default function CalendarDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {calendarDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {calendarDocsTitle}
          </h1>
          <DocsCopyPage
            page={calendarDocsMarkdown}
            url={`${siteConfig.url}/docs/components/calendar`}
            markdownUrl="/docs/components/calendar.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {calendarDocsDescription}
        </p>
        <DocsLastUpdated date={calendarDocsUpdatedAt} />
      </header>

      <ComponentInstall name="calendar" />

      <CalendarPreviews />
    </article>
  )
}
