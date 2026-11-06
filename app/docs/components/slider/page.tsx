import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { SliderPreviews } from "@/components/docs/slider-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  sliderDocsDescription,
  sliderDocsMarkdown,
  sliderDocsTitle,
  sliderDocsUpdatedAt,
} from "@/content/docs/slider"

/**
 * Slider component detail page.
 */
export default function SliderDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {sliderDocsTitle}
        </p>
        <DocsPageHeader
          title={sliderDocsTitle}
          actions={
            <DocsCopyPage
              page={sliderDocsMarkdown}
              url={`${siteConfig.url}/docs/components/slider`}
              markdownUrl="/docs/components/slider.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{sliderDocsDescription}</p>
        <DocsLastUpdated date={sliderDocsUpdatedAt} />
      </header>

      <ComponentInstall name="slider" />

      <SliderPreviews />
    </article>
  )
}
