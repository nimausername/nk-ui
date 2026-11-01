import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DialogPreviews } from "@/components/docs/dialog-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  dialogDocsDescription,
  dialogDocsMarkdown,
  dialogDocsTitle,
  dialogDocsUpdatedAt,
} from "@/content/docs/dialog"

/**
 * Dialog component detail page.
 */
export default function DialogDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {dialogDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{dialogDocsTitle}</h1>
          <DocsCopyPage
            page={dialogDocsMarkdown}
            url={`${siteConfig.url}/docs/components/dialog`}
            markdownUrl="/docs/components/dialog.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{dialogDocsDescription}</p>
        <DocsLastUpdated date={dialogDocsUpdatedAt} />
      </header>

      <ComponentInstall name="dialog" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Dialog</code> — root (open
            state / modal)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogTrigger</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogClose</code> — compose
            with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {"render={<Button />}"}
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogContent</code> — portal +
            overlay + popup
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogHeader</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogTitle</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogDescription</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DialogFooter</code> — actions;
            optional built-in Close
          </li>
        </ul>
      </section>

      <DialogPreviews />
    </article>
  )
}
