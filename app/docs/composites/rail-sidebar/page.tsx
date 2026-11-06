import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { RailSidebarPreviews } from "@/components/docs/rail-sidebar-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  railSidebarDocsDescription,
  railSidebarDocsMarkdown,
  railSidebarDocsTitle,
  railSidebarDocsUpdatedAt,
} from "@/content/docs/rail-sidebar"

/**
 * Rail Sidebar composite detail page.
 */
export default function RailSidebarDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/composites" className="underline-offset-4 hover:underline">
            Composites
          </Link>
          <span aria-hidden="true"> / </span>
          {railSidebarDocsTitle}
        </p>
        <DocsPageHeader
          title={railSidebarDocsTitle}
          actions={
            <DocsCopyPage
              page={railSidebarDocsMarkdown}
              url={`${siteConfig.url}/docs/composites/rail-sidebar`}
              markdownUrl="/docs/composites/rail-sidebar.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">{railSidebarDocsDescription}</p>
        <DocsLastUpdated date={railSidebarDocsUpdatedAt} />
      </header>

      <ComponentInstall name="rail-sidebar" />

      <RailSidebarPreviews />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Credits</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Interaction and visual concept adapted from{" "}
          <a
            href="https://www.rareui.com/components/hooksidebar"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Rare UI HookSidebar
          </a>{" "}
          by{" "}
          <a
            href="https://swamii.me/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Swami Malode
          </a>{" "}
          (
          <a
            href="https://github.com/swamimalode07/rare-ui"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            rare-ui
          </a>
          ). nk ships this as{" "}
          <code className="rounded bg-muted px-1 text-xs">Rail Sidebar</code> (
          <code className="rounded bg-muted px-1 text-xs">@nk/rail-sidebar</code>
          ) to keep a distinct identity.
        </p>
      </section>
    </article>
  )
}
