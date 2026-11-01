import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { TextareaPreviews } from "@/components/docs/textarea-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  textareaDocsDescription,
  textareaDocsMarkdown,
  textareaDocsTitle,
  textareaDocsUpdatedAt,
} from "@/content/docs/textarea"

/**
 * Textarea component detail page.
 */
export default function TextareaDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {textareaDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{textareaDocsTitle}</h1>
          <DocsCopyPage
            page={textareaDocsMarkdown}
            url={`${siteConfig.url}/docs/components/textarea`}
            markdownUrl="/docs/components/textarea.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{textareaDocsDescription}</p>
        <DocsLastUpdated date={textareaDocsUpdatedAt} />
      </header>

      <ComponentInstall name="textarea" />
      <TextareaPreviews />
    </article>
  )
}
