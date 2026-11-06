import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { DropdownMenuPreviews } from "@/components/docs/dropdown-menu-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  dropdownMenuDocsDescription,
  dropdownMenuDocsMarkdown,
  dropdownMenuDocsTitle,
  dropdownMenuDocsUpdatedAt,
} from "@/content/docs/dropdown-menu"

/**
 * Dropdown Menu component detail page.
 */
export default function DropdownMenuDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {dropdownMenuDocsTitle}
        </p>
        <DocsPageHeader
          title={dropdownMenuDocsTitle}
          actions={
            <DocsCopyPage
              page={dropdownMenuDocsMarkdown}
              url={`${siteConfig.url}/docs/components/dropdown-menu`}
              markdownUrl="/docs/components/dropdown-menu.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {dropdownMenuDocsDescription}
        </p>
        <DocsLastUpdated date={dropdownMenuDocsUpdatedAt} />
      </header>

      <ComponentInstall name="dropdown-menu" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenu</code> —
            root
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuTrigger</code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuContent</code>{" "}
            —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">align</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">side</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuItem</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuLinkItem</code>{" "}
            —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              variant=&quot;destructive&quot;
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">inset</code>,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">disabled</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuLabel</code>{" "}
            must sit inside{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuGroup</code>
          </li>
          <li>
            Checkboxes, radios, shortcuts, separators, and nested{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">DropdownMenuSub</code>
          </li>
        </ul>
      </section>

      <DropdownMenuPreviews />
    </article>
  )
}
