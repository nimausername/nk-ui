import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { MenubarPreviews } from "@/components/docs/menubar-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  menubarDocsDescription,
  menubarDocsMarkdown,
  menubarDocsTitle,
  menubarDocsUpdatedAt,
} from "@/content/docs/menubar"

/**
 * Menubar component detail page.
 */
export default function MenubarDocsPage() {
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
          {menubarDocsTitle}
        </p>
        <DocsPageHeader
          title={menubarDocsTitle}
          actions={
            <DocsCopyPage
              page={menubarDocsMarkdown}
              url={`${siteConfig.url}/docs/components/menubar`}
              markdownUrl="/docs/components/menubar.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {menubarDocsDescription}
        </p>
        <DocsLastUpdated date={menubarDocsUpdatedAt} />
      </header>

      <ComponentInstall name="menubar" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <p className="text-sm text-muted-foreground">
          Same tree as shadcn Menubar — bar → menu → trigger / content, with
          groups, checkboxes, radios, and subs. Popup chrome comes from{" "}
          <Link
            href="/docs/components/dropdown-menu"
            className="underline-offset-4 hover:underline"
          >
            Dropdown Menu
          </Link>
          .
        </p>
        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
          {`Menubar
├── MenubarMenu
│   ├── MenubarTrigger
│   └── MenubarContent
│       ├── MenubarGroup / Label / Item / LinkItem
│       ├── MenubarCheckboxItem
│       ├── MenubarRadioGroup → RadioItem
│       └── MenubarSub → SubTrigger / SubContent
└── MenubarMenu …`}
        </pre>
      </section>

      <MenubarPreviews />
    </article>
  )
}
