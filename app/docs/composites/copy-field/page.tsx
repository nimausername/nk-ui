import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { CopyFieldPreviews } from "@/components/docs/copy-field-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  copyFieldDocsDescription,
  copyFieldDocsMarkdown,
  copyFieldDocsTitle,
  copyFieldDocsUpdatedAt,
} from "@/content/docs/copy-field"

/**
 * Copy Field composite detail page.
 */
export default function CopyFieldDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/composites" className="underline-offset-4 hover:underline">
            Composites
          </Link>
          <span aria-hidden="true"> / </span>
          {copyFieldDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {copyFieldDocsTitle}
          </h1>
          <DocsCopyPage
            page={copyFieldDocsMarkdown}
            url={`${siteConfig.url}/docs/composites/copy-field`}
            markdownUrl="/docs/composites/copy-field.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {copyFieldDocsDescription}
        </p>
        <DocsLastUpdated date={copyFieldDocsUpdatedAt} />
      </header>

      <ComponentInstall name="copy-field" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Input</strong> — bare control (
            <Link href="/docs/components/input" className="underline underline-offset-4">
              Components → Input
            </Link>
            )
          </li>
          <li>
            <strong className="font-medium text-foreground">Toast</strong> — mount{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Toaster</code> (
            <Link href="/docs/components/toast" className="underline underline-offset-4">
              Components → Toast
            </Link>
            )
          </li>
          <li>
            <strong className="font-medium text-foreground">CopyField</strong> (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk/copy-field</code>
            ): Input + copy Button + optional toast — this page
          </li>
          <li>
            Copy control disabled when value is empty or field is{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">disabled</code>
          </li>
          <li>
            Skip toast with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              successToastTitle=&#123;null&#125;
            </code>
            ; hook{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">onCopied</code> for
            side effects
          </li>
        </ul>
      </section>

      <CopyFieldPreviews />
    </article>
  )
}
