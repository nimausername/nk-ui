import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { PhoneInputPreviews } from "@/components/docs/phone-input-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  phoneInputDocsDescription,
  phoneInputDocsMarkdown,
  phoneInputDocsTitle,
  phoneInputDocsUpdatedAt,
} from "@/content/docs/phone-input"

/**
 * Phone Input component detail page.
 */
export default function PhoneInputDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {phoneInputDocsTitle}
        </p>
        <DocsPageHeader
          title={phoneInputDocsTitle}
          actions={
            <DocsCopyPage
              page={phoneInputDocsMarkdown}
              url={`${siteConfig.url}/docs/components/phone-input`}
              markdownUrl="/docs/components/phone-input.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {phoneInputDocsDescription}
        </p>
        <DocsLastUpdated date={phoneInputDocsUpdatedAt} />
      </header>

      <ComponentInstall name="phone-input" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PhoneInput</code> — root
            (country + E.164 value)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PhoneInputGroup</code> —{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Country</code> +{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">Control</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">PhoneInputField</code> —
            compact label + group + error helper
          </li>
        </ul>
      </section>

      <PhoneInputPreviews />
    </article>
  )
}
