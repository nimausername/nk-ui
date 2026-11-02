import Link from "next/link"

import { BrandIconsPreviews } from "@/components/docs/brand-icons-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  brandIconsDocsDescription,
  brandIconsDocsMarkdown,
  brandIconsDocsTitle,
  brandIconsDocsUpdatedAt,
} from "@/content/docs/brand-icons"

/**
 * Brand Icons component detail page.
 */
export default function BrandIconsDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {brandIconsDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {brandIconsDocsTitle}
          </h1>
          <DocsCopyPage
            page={brandIconsDocsMarkdown}
            url={`${siteConfig.url}/docs/components/brand-icons`}
            markdownUrl="/docs/components/brand-icons.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{brandIconsDocsDescription}</p>
        <DocsLastUpdated date={brandIconsDocsUpdatedAt} />
      </header>

      <ComponentInstall name="brand-icons" />

      <p className="text-sm text-muted-foreground">
        Also installed automatically with{" "}
        <Link href="/docs/components/select" className="underline underline-offset-4">
          Select
        </Link>{" "}
        (
        <code className="rounded bg-muted px-1 text-xs">@nk/select</code>
        ).
      </p>

      <BrandIconsPreviews />
    </article>
  )
}
