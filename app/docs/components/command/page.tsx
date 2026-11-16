import Link from "next/link"

import { CommandPreviews } from "@/components/docs/command-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  commandDocsDescription,
  commandDocsMarkdown,
  commandDocsTitle,
  commandDocsUpdatedAt,
} from "@/content/docs/command"

/**
 * Command component detail page.
 */
export default function CommandDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link
            href="/docs/components"
            className="underline-offset-4 hover:underline"
          >
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {commandDocsTitle}
        </p>
        <DocsPageHeader
          title={commandDocsTitle}
          actions={
            <DocsCopyPage
              page={commandDocsMarkdown}
              url={`${siteConfig.url}/docs/components/command`}
              markdownUrl="/docs/components/command.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {commandDocsDescription}
        </p>
        <DocsLastUpdated date={commandDocsUpdatedAt} />
      </header>

      <ComponentInstall name="command" />

      <CommandPreviews />
    </article>
  )
}
