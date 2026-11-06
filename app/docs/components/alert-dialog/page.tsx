import Link from "next/link"

import { AlertDialogPreviews } from "@/components/docs/alert-dialog-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  alertDialogDocsDescription,
  alertDialogDocsMarkdown,
  alertDialogDocsTitle,
  alertDialogDocsUpdatedAt,
} from "@/content/docs/alert-dialog"

/**
 * Alert Dialog component detail page.
 */
export default function AlertDialogDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {alertDialogDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {alertDialogDocsTitle}
          </h1>
          <DocsCopyPage
            page={alertDialogDocsMarkdown}
            url={`${siteConfig.url}/docs/components/alert-dialog`}
            markdownUrl="/docs/components/alert-dialog.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {alertDialogDocsDescription}
        </p>
        <DocsLastUpdated date={alertDialogDocsUpdatedAt} />
      </header>

      <ComponentInstall name="alert-dialog" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">AlertDialog</code>{" "}
            — root (always modal; no outside-click dismiss)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogTrigger
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogClose
            </code>{" "}
            — compose with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'render={<Button />}'}
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogContent
            </code>{" "}
            — portal + overlay + popup (no corner close)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogHeader
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogTitle
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogDescription
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogFooter
            </code>{" "}
            with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogCancel
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogAction
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              createAlertDialogHandle
            </code>{" "}
            for detached / multi triggers;{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogViewport
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              AlertDialogPopup
            </code>{" "}
            for custom shells
          </li>
        </ul>
      </section>

      <AlertDialogPreviews />
    </article>
  )
}
