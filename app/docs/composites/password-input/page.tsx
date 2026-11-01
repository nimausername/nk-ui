import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { PasswordInputPreviews } from "@/components/docs/password-input-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  passwordInputDocsDescription,
  passwordInputDocsMarkdown,
  passwordInputDocsTitle,
  passwordInputDocsUpdatedAt,
} from "@/content/docs/password-input"

/**
 * Password Input composite detail page.
 */
export default function PasswordInputDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/composites" className="underline-offset-4 hover:underline">
            Composites
          </Link>
          <span aria-hidden="true"> / </span>
          {passwordInputDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {passwordInputDocsTitle}
          </h1>
          <DocsCopyPage
            page={passwordInputDocsMarkdown}
            url={`${siteConfig.url}/docs/composites/password-input`}
            markdownUrl="/docs/composites/password-input.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {passwordInputDocsDescription}
        </p>
        <DocsLastUpdated date={passwordInputDocsUpdatedAt} />
      </header>

      <ComponentInstall name="password-input" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Show / hide</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          The toggle switches the control between{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">type=&quot;password&quot;</code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">type=&quot;text&quot;</code>.
          Only the typed <strong className="font-medium text-foreground">value</strong> is
          masked — placeholders never are.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Input</strong> — bare control (
            <Link href="/docs/components/input" className="underline underline-offset-4">
              Components → Input
            </Link>
            )
          </li>
          <li>
            <strong className="font-medium text-foreground">PasswordInput</strong> (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk/password-input</code>
            ): Input + show / hide Button — this page
          </li>
        </ul>
      </section>

      <PasswordInputPreviews />
    </article>
  )
}
