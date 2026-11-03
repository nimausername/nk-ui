import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { TooltipPreviews } from "@/components/docs/tooltip-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  tooltipDocsDescription,
  tooltipDocsMarkdown,
  tooltipDocsTitle,
  tooltipDocsUpdatedAt,
} from "@/content/docs/tooltip"

/**
 * Tooltip component detail page.
 */
export default function TooltipDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {tooltipDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{tooltipDocsTitle}</h1>
          <DocsCopyPage
            page={tooltipDocsMarkdown}
            url={`${siteConfig.url}/docs/components/tooltip`}
            markdownUrl="/docs/components/tooltip.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{tooltipDocsDescription}</p>
        <DocsLastUpdated date={tooltipDocsUpdatedAt} />
      </header>

      <ComponentInstall name="tooltip" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">TooltipProvider</code> —
            shared delay for a subtree
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Tooltip</code> — root
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">TooltipTrigger</code> —
            compose with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {"render={<Button />}"}
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">TooltipContent</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">variant</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">side</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">align</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">showArrow</code>
          </li>
        </ul>
      </section>

      <TooltipPreviews />
    </article>
  )
}
