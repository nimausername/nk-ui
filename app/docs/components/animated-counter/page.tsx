import Link from "next/link"

import { AnimatedCounterPreviews } from "@/components/docs/animated-counter-previews"
import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  animatedCounterDocsDescription,
  animatedCounterDocsMarkdown,
  animatedCounterDocsTitle,
  animatedCounterDocsUpdatedAt,
} from "@/content/docs/animated-counter"

/**
 * Animated Counter component detail page.
 */
export default function AnimatedCounterDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link
            href="/docs/components"
            className="underline-offset-4 hover:underline"
          >
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {animatedCounterDocsTitle}
        </p>
        <DocsPageHeader
          title={animatedCounterDocsTitle}
          actions={
            <DocsCopyPage
              page={animatedCounterDocsMarkdown}
              url={`${siteConfig.url}/docs/components/animated-counter`}
              markdownUrl="/docs/components/animated-counter.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {animatedCounterDocsDescription}
        </p>
        <DocsLastUpdated date={animatedCounterDocsUpdatedAt} />
      </header>

      <ComponentInstall name="animated-counter" />

      <AnimatedCounterPreviews />
    </article>
  )
}
