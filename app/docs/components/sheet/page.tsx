import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { SheetPreviews } from "@/components/docs/sheet-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  sheetDocsDescription,
  sheetDocsMarkdown,
  sheetDocsTitle,
  sheetDocsUpdatedAt,
} from "@/content/docs/sheet"

/**
 * Sheet component detail page.
 */
export default function SheetDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {sheetDocsTitle}
        </p>
        <DocsPageHeader
          title={sheetDocsTitle}
          actions={
            <DocsCopyPage
              page={sheetDocsMarkdown}
              url={`${siteConfig.url}/docs/components/sheet`}
              markdownUrl="/docs/components/sheet.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{sheetDocsDescription}</p>
        <DocsLastUpdated date={sheetDocsUpdatedAt} />
      </header>

      <ComponentInstall name="sheet" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Sheet</code> — root (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">open</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">onOpenChange</code>)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetTrigger</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetClose</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetContent</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">side</code> (default{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">end</code>),{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">size</code> (default{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">sm</code>),{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">showCloseButton</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">start</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">end</code> = logical
            (flip in RTL).{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">left</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">right</code> = physical
            (never flip)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetHeader</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetTitle</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetDescription</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetBody</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">SheetFooter</code>
          </li>
        </ul>
      </section>

      <SheetPreviews />
    </article>
  )
}
