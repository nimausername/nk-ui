import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { FormPreviews } from "@/components/docs/form-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  formDocsDescription,
  formDocsMarkdown,
  formDocsTitle,
  formDocsUpdatedAt,
} from "@/content/docs/form"

/**
 * Form component detail page.
 */
export default function FormDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {formDocsTitle}
        </p>
        <DocsPageHeader
          title={formDocsTitle}
          actions={
            <DocsCopyPage
              page={formDocsMarkdown}
              url={`${siteConfig.url}/docs/components/form`}
              markdownUrl="/docs/components/form.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{formDocsDescription}</p>
        <DocsLastUpdated date={formDocsUpdatedAt} />
      </header>

      <ComponentInstall name="form" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Form</code> — root (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">onSubmit</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">errors</code>)
          </li>
          <li>
            Nest{" "}
            <Link href="/docs/components/field" className="underline underline-offset-4">
              Field
            </Link>{" "}
            children with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              validationMode=&quot;onSubmit&quot;
            </code>
          </li>
          <li>
            Submit with a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">type=&quot;submit&quot;</code>{" "}
            control (e.g.{" "}
            <Link href="/docs/components/button" className="underline underline-offset-4">
              Button
            </Link>
            )
          </li>
        </ul>
      </section>

      <FormPreviews />
    </article>
  )
}
