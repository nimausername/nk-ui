import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { ContextMenuPreviews } from "@/components/docs/context-menu-previews"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  contextMenuDocsDescription,
  contextMenuDocsMarkdown,
  contextMenuDocsTitle,
  contextMenuDocsUpdatedAt,
} from "@/content/docs/context-menu"

/**
 * Context Menu component detail page.
 */
export default function ContextMenuDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {contextMenuDocsTitle}
        </p>
        <DocsPageHeader
          title={contextMenuDocsTitle}
          actions={
            <DocsCopyPage
              page={contextMenuDocsMarkdown}
              url={`${siteConfig.url}/docs/components/context-menu`}
              markdownUrl="/docs/components/context-menu.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {contextMenuDocsDescription}
        </p>
        <DocsLastUpdated date={contextMenuDocsUpdatedAt} />
      </header>

      <ComponentInstall name="context-menu" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">ContextMenu</code>{" "}
            — root
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuTrigger
            </code>{" "}
            — right click / long press surface;{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuContent
            </code>{" "}
            positions at the pointer
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuItem
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuLinkItem
            </code>{" "}
            —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              variant=&quot;destructive&quot;
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">inset</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">disabled</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuLabel
            </code>{" "}
            must sit inside{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuGroup
            </code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuCheckboxItem
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuRadioGroup
            </code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              ContextMenuSub
            </code>
          </li>
        </ul>
      </section>

      <ContextMenuPreviews />
    </article>
  )
}
