import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { InputPreviews } from "@/components/docs/input-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  inputDocsDescription,
  inputDocsMarkdown,
  inputDocsTitle,
  inputDocsUpdatedAt,
} from "@/content/docs/input"

/**
 * Input component detail page.
 */
export default function InputDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {inputDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{inputDocsTitle}</h1>
          <DocsCopyPage
            page={inputDocsMarkdown}
            url={`${siteConfig.url}/docs/components/input`}
            markdownUrl="/docs/components/input.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">{inputDocsDescription}</p>
        <DocsLastUpdated date={inputDocsUpdatedAt} />
      </header>

      <ComponentInstall name="input" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Input</strong> (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk/input</code>): the
            control
          </li>
          <li>
            <strong className="font-medium text-foreground">Field</strong> (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk/field</code>): label /
            description / error — see{" "}
            <Link href="/docs/components/field" className="underline underline-offset-4">
              Field
            </Link>
          </li>
          <li>
            <strong className="font-medium text-foreground">PasswordInput</strong> (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">@nk/password-input</code>
            ): show / hide toggle — see{" "}
            <Link href="/docs/composites/password-input" className="underline underline-offset-4">
              Composites → Password Input
            </Link>
          </li>
          <li>
            Width, size tweaks, adornments: compose with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">className</code> or wrappers
          </li>
        </ul>
      </section>

      <InputPreviews />
    </article>
  )
}
