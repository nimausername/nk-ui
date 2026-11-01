import Link from "next/link"

import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { IntroductionBody } from "@/components/docs/introduction-body"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { buttonVariants } from "@/components/ui/button-variants"
import { componentItems, compositeItems, docsGuideItems } from "@/config/docs"
import { siteConfig } from "@/config/site"
import {
  introductionDescription,
  introductionMarkdown,
  introductionTitle,
  introductionUpdatedAt,
} from "@/content/docs/introduction"
import { cn } from "@/lib/utils"

/**
 * Docs introduction — philosophy, getting started, and shipped components.
 */
export default function DocsPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{introductionTitle}</h1>
          <DocsCopyPage
            page={introductionMarkdown}
            url={`${siteConfig.url}/docs`}
            markdownUrl="/docs.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{introductionDescription}</p>
        <DocsLastUpdated date={introductionUpdatedAt} />
      </header>

      <IntroductionBody />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Start here</h2>
        <ul className="space-y-3">
          {docsGuideItems.map((item) => (
            <li key={item.href} className="border-b border-border pb-3">
              <Link
                href={item.href}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
              {item.description ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              ) : null}
            </li>
          ))}
          <li className="border-b border-border pb-3">
            <Link
              href="/docs/components"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Components
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Core primitives. Each item has its own detail page and install command.
            </p>
          </li>
          <li className="border-b border-border pb-3">
            <Link
              href="/docs/composites"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Composites
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Composed pieces built from several components — still installable via @nk.
            </p>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Available now</h2>
        <p className="text-sm text-muted-foreground">
          {componentItems.length} primitive
          {componentItems.length === 1 ? "" : "s"} and {compositeItems.length} composite
          {compositeItems.length === 1 ? "" : "s"} in the registry.
        </p>
        <ul className="divide-y divide-border border-y border-border">
          {[...componentItems, ...compositeItems].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col gap-1 py-4 transition-colors hover:bg-muted/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-medium text-foreground">{item.title}</span>
                {item.description ? (
                  <span className="text-sm text-muted-foreground sm:text-end">
                    {item.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/docs/installation" className={cn(buttonVariants(), "inline-flex")}>
            Installation
          </Link>
          <Link
            href="/docs/components"
            className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
          >
            Components
          </Link>
          <Link
            href="/docs/composites"
            className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
          >
            Composites
          </Link>
        </div>
      </section>
    </article>
  )
}
