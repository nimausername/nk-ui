import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { SwitchPreviews } from "@/components/docs/switch-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  switchDocsDescription,
  switchDocsMarkdown,
  switchDocsTitle,
  switchDocsUpdatedAt,
} from "@/content/docs/switch"

/**
 * Switch component detail page.
 */
export default function SwitchDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {switchDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{switchDocsTitle}</h1>
          <DocsCopyPage
            page={switchDocsMarkdown}
            url={`${siteConfig.url}/docs/components/switch`}
            markdownUrl="/docs/components/switch.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{switchDocsDescription}</p>
        <DocsLastUpdated date={switchDocsUpdatedAt} />
      </header>

      <ComponentInstall name="switch" />
      <SwitchPreviews />
    </article>
  )
}
