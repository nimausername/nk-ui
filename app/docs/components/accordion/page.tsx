import Link from "next/link"

import { AccordionPreviews } from "@/components/docs/accordion-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  accordionDocsDescription,
  accordionDocsMarkdown,
  accordionDocsTitle,
  accordionDocsUpdatedAt,
} from "@/content/docs/accordion"

/**
 * Accordion component detail page.
 */
export default function AccordionDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {accordionDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{accordionDocsTitle}</h1>
          <DocsCopyPage
            page={accordionDocsMarkdown}
            url={`${siteConfig.url}/docs/components/accordion`}
            markdownUrl="/docs/components/accordion.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{accordionDocsDescription}</p>
        <DocsLastUpdated date={accordionDocsUpdatedAt} />
      </header>

      <ComponentInstall name="accordion" />

      <AccordionPreviews />
    </article>
  )
}
