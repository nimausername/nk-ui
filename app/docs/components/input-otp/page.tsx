import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { InputOtpPreviews } from "@/components/docs/input-otp-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  inputOtpDocsDescription,
  inputOtpDocsMarkdown,
  inputOtpDocsTitle,
  inputOtpDocsUpdatedAt,
} from "@/content/docs/input-otp"

/**
 * Input OTP component detail page.
 */
export default function InputOtpDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {inputOtpDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {inputOtpDocsTitle}
          </h1>
          <DocsCopyPage
            page={inputOtpDocsMarkdown}
            url={`${siteConfig.url}/docs/components/input-otp`}
            markdownUrl="/docs/components/input-otp.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {inputOtpDocsDescription}
        </p>
        <DocsLastUpdated date={inputOtpDocsUpdatedAt} />
      </header>

      <ComponentInstall name="input-otp" />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Composition model</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">InputOTP</code> — root (
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">length</code> required)
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">InputOTPSlot</code> /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">InputOTPSlots</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">InputOTPGroup</code> +{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">InputOTPSeparator</code> — e.g.
            3 + 3
          </li>
        </ul>
      </section>

      <InputOtpPreviews />
    </article>
  )
}
