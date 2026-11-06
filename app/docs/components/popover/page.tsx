import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { PopoverPreviews } from "@/components/docs/popover-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  popoverDocsDescription,
  popoverDocsMarkdown,
  popoverDocsTitle,
  popoverDocsUpdatedAt,
} from "@/content/docs/popover"

/**
 * Popover component detail page.
 */
export default function PopoverDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {popoverDocsTitle}
        </p>
        <DocsPageHeader
          title={popoverDocsTitle}
          actions={
            <DocsCopyPage
              page={popoverDocsMarkdown}
              url={`${siteConfig.url}/docs/components/popover`}
              markdownUrl="/docs/components/popover.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{popoverDocsDescription}</p>
        <DocsLastUpdated date={popoverDocsUpdatedAt} />
      </header>

      <ComponentInstall name="popover" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Popover</code> — root (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">open</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">onOpenChange</code>)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverTrigger</code> —
            compose with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {"render={<Button />}"}
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverContent</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">side</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">align</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">showArrow</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverHeader</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverTitle</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverDescription</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverFooter</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PopoverClose</code>
          </li>
        </ul>
      </section>

      <PopoverPreviews />
    </article>
  )
}
