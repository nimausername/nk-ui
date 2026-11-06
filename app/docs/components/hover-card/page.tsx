import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { HoverCardPreviews } from "@/components/docs/hover-card-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  hoverCardDocsDescription,
  hoverCardDocsMarkdown,
  hoverCardDocsTitle,
  hoverCardDocsUpdatedAt,
} from "@/content/docs/hover-card"

/**
 * Hover Card component detail page.
 */
export default function HoverCardDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {hoverCardDocsTitle}
        </p>
        <DocsPageHeader
          title={hoverCardDocsTitle}
          actions={
            <DocsCopyPage
              page={hoverCardDocsMarkdown}
              url={`${siteConfig.url}/docs/components/hover-card`}
              markdownUrl="/docs/components/hover-card.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {hoverCardDocsDescription}
        </p>
        <DocsLastUpdated date={hoverCardDocsUpdatedAt} />
      </header>

      <ComponentInstall name="hover-card" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">HoverCard</code>{" "}
            — root
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              HoverCardTrigger
            </code>{" "}
            — hover / focus;{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">href</code>{" "}
            or{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'render={<Button />}'}
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              HoverCardContent
            </code>{" "}
            —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">side</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">align</code>,
            optional arrow
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              HoverCardHeader
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              HoverCardTitle
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              HoverCardDescription
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              createHoverCardHandle
            </code>{" "}
            +{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              HoverCardViewport
            </code>{" "}
            for multi-trigger payloads
          </li>
        </ul>
      </section>

      <HoverCardPreviews />
    </article>
  )
}
