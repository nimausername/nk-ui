import Link from "next/link"
import type { ReactNode } from "react"

import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { buttonVariants } from "@/components/ui/button-variants"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type PathCard = {
  readonly title: string
  readonly description: string
  readonly href: string
}

type InstallationFrameworkPageProps = {
  readonly title: string
  readonly description: string
  readonly markdown: string
  readonly path: string
  readonly markdownUrl: string
  /** ISO date (`YYYY-MM-DD`) shown under the description. */
  readonly updatedAt: string
  readonly pathCards: readonly PathCard[]
  readonly children: ReactNode
}

/**
 * Shared chrome for framework-specific installation guides.
 */
const InstallationFrameworkPage = ({
  title,
  description,
  markdown,
  path,
  markdownUrl,
  updatedAt,
  pathCards,
  children,
}: InstallationFrameworkPageProps) => {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/installation" className="underline-offset-4 hover:underline">
            Installation
          </Link>
          <span aria-hidden="true"> / </span>
          {title}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <DocsCopyPage
            page={markdown}
            url={`${siteConfig.url}${path}`}
            markdownUrl={markdownUrl}
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{description}</p>
        <DocsLastUpdated date={updatedAt} />
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Choose a path</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {pathCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="rounded-md border border-border bg-card p-4 transition-colors hover:bg-muted/40"
            >
              <p className="font-medium text-foreground">{card.title}</p>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">{card.description}</p>
            </a>
          ))}
        </div>
      </section>

      {children}

      <div className="flex flex-wrap gap-3">
        <Link href="/docs/components" className={cn(buttonVariants(), "inline-flex")}>
          Browse components
        </Link>
        <Link
          href="/docs/installation"
          className={cn(buttonVariants({ variant: "outline" }), "inline-flex")}
        >
          All frameworks
        </Link>
      </div>
    </article>
  )
}

export { InstallationFrameworkPage }
export type { PathCard }
