import Link from "next/link"
import type { ComponentType, SVGProps } from "react"

import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { NextjsIcon, ReactIcon, ViteIcon } from "@/components/docs/framework-icons"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { installationFrameworkItems } from "@/config/docs"
import { siteConfig } from "@/config/site"
import {
  installationDescription,
  installationMarkdown,
  installationTitle,
  installationUpdatedAt,
} from "@/content/docs/installation"
import { cn } from "@/lib/utils"

type IconProps = SVGProps<SVGSVGElement>

const frameworkIcons: Record<string, ComponentType<IconProps>> = {
  "/docs/installation/next": NextjsIcon,
  "/docs/installation/vite": ViteIcon,
  "/docs/installation/manual": ReactIcon,
}

/**
 * Installation hub — choose a framework, then follow that guide.
 */
export default function InstallationPage() {
  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{installationTitle}</h1>
          <DocsCopyPage
            page={installationMarkdown}
            url={`${siteConfig.url}/docs/installation`}
            markdownUrl="/docs/installation.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{installationDescription}</p>
        <DocsLastUpdated date={installationUpdatedAt} />
      </header>

      <aside className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
        <p className="text-pretty">
          <span className="font-medium text-foreground">Note:</span> nk installs through the shadcn
          CLI. Each framework guide starts from that stack, then adds the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">@nk</code>{" "}
          registry once.
        </p>
      </aside>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">Choose your framework</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Open the guide that matches your app. Steps differ by scaffold; the registry command is
            the same.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {installationFrameworkItems.map((item) => {
            const Icon = frameworkIcons[item.href]

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-full flex-col items-center justify-center gap-3 rounded-md border border-border bg-card px-4 py-8 text-center",
                    "transition-colors hover:bg-muted/40"
                  )}
                >
                  {Icon ? <Icon className="size-10 text-foreground" /> : null}
                  <span className="font-medium text-foreground">{item.title}</span>
                  {item.description ? (
                    <span className="text-xs text-muted-foreground text-pretty">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}
