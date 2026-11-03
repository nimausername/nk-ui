import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { ShaderBackgroundPreviews } from "@/components/docs/shader-background-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  shaderBackgroundDocsDescription,
  shaderBackgroundDocsEngine,
  shaderBackgroundDocsInspiration,
  shaderBackgroundDocsMarkdown,
  shaderBackgroundDocsTitle,
  shaderBackgroundDocsUpdatedAt,
} from "@/content/docs/shader-background"

/**
 * Shader Background component detail page.
 */
export default function ShaderBackgroundDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {shaderBackgroundDocsTitle}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {shaderBackgroundDocsTitle}
          </h1>
          <DocsCopyPage
            page={shaderBackgroundDocsMarkdown}
            url={`${siteConfig.url}/docs/components/shader-background`}
            markdownUrl="/docs/components/shader-background.md"
            className="shrink-0"
          />
        </div>
        <p className="text-muted-foreground text-pretty">
          {shaderBackgroundDocsDescription}
        </p>
        <DocsLastUpdated date={shaderBackgroundDocsUpdatedAt} />
      </header>

      <ComponentInstall name="shader-background" />

      <ShaderBackgroundPreviews />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Performance</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            WebGL effect — use{" "}
            <strong className="font-medium text-foreground">one instance</strong>{" "}
            per view for full-bleed atmospheres.
          </li>
          <li>
            Fine as a bounded-height hero on modern phones; always-on full
            viewport costs more GPU on low-end devices.
          </li>
          <li>
            Pauses off-screen, in a hidden tab, under{" "}
            <code className="rounded bg-muted px-1 text-xs">
              prefers-reduced-motion
            </code>
            , or when you set{" "}
            <code className="rounded bg-muted px-1 text-xs">paused</code>.
          </li>
        </ul>
      </section>

      <section className="space-y-2 border-t border-border pt-8">
        <h2 className="text-lg font-semibold">Credits</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Idea inspired by{" "}
          <a
            href={shaderBackgroundDocsInspiration.href}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {shaderBackgroundDocsInspiration.label}
          </a>{" "}
          (
          <a
            href={shaderBackgroundDocsInspiration.authorHref}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {shaderBackgroundDocsInspiration.author}
          </a>
          ). Shader Background is an original nk catalog — its own atmosphere
          names, palettes, and controls — not a port of beUI’s effect list.
        </p>
        <p className="text-sm text-muted-foreground text-pretty">
          Rendering engines from{" "}
          <a
            href={shaderBackgroundDocsEngine.href}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {shaderBackgroundDocsEngine.label}
          </a>{" "}
          by{" "}
          <a
            href={shaderBackgroundDocsEngine.authorHref}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {shaderBackgroundDocsEngine.author}
          </a>
          .
        </p>
      </section>
    </article>
  )
}
