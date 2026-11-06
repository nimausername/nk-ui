import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { NavigationMenuPreviews } from "@/components/docs/navigation-menu-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  navigationMenuDocsDescription,
  navigationMenuDocsMarkdown,
  navigationMenuDocsTitle,
  navigationMenuDocsUpdatedAt,
} from "@/content/docs/navigation-menu"

/**
 * Navigation Menu component detail page.
 */
export default function NavigationMenuDocsPage() {
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
          {navigationMenuDocsTitle}
        </p>
        <DocsPageHeader
          title={navigationMenuDocsTitle}
          actions={
            <DocsCopyPage
              page={navigationMenuDocsMarkdown}
              url={`${siteConfig.url}/docs/components/navigation-menu`}
              markdownUrl="/docs/components/navigation-menu.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {navigationMenuDocsDescription}
        </p>
        <DocsLastUpdated date={navigationMenuDocsUpdatedAt} />
      </header>

      <ComponentInstall name="navigation-menu" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <p className="text-sm text-muted-foreground">
          Same tree as shadcn Navigation Menu — list → item → trigger / content
          or a top-level link. The root mounts one shared viewport for panel
          transitions.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
          {`NavigationMenu
├── NavigationMenuList
│   ├── NavigationMenuItem
│   │   ├── NavigationMenuTrigger
│   │   └── NavigationMenuContent → Link…
│   └── NavigationMenuItem → NavigationMenuLink
└── (Positioner / Popup / Viewport)`}
        </pre>
      </section>

      <NavigationMenuPreviews />
    </article>
  )
}
