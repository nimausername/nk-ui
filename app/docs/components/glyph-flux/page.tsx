import Link from "next/link"

import { ComponentInstall } from "@/components/docs/component-install"
import { DocsCopyPage } from "@/components/docs/docs-copy-page"
import { DocsPageHeader } from "@/components/docs/docs-page-header"
import { GlyphFluxPreviews } from "@/components/docs/glyph-flux-previews"
import { DocsLastUpdated } from "@/components/shared/docs-last-updated"
import { siteConfig } from "@/config/site"
import {
  glyphFluxDocsCredit,
  glyphFluxDocsDescription,
  glyphFluxDocsMarkdown,
  glyphFluxDocsTitle,
  glyphFluxDocsUpdatedAt,
} from "@/content/docs/glyph-flux"

/**
 * GlyphFlux component detail page.
 */
export default function GlyphFluxDocsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-muted-foreground">
          <Link href="/docs/components" className="underline-offset-4 hover:underline">
            Components
          </Link>
          <span aria-hidden="true"> / </span>
          {glyphFluxDocsTitle}
        </p>
        <DocsPageHeader
          title={glyphFluxDocsTitle}
          actions={
            <DocsCopyPage
              page={glyphFluxDocsMarkdown}
              url={`${siteConfig.url}/docs/components/glyph-flux`}
              markdownUrl="/docs/components/glyph-flux.md"
              className="shrink-0"
            />
          }
        />
        <p className="text-muted-foreground text-pretty">
          {glyphFluxDocsDescription}
        </p>
        <DocsLastUpdated date={glyphFluxDocsUpdatedAt} />
      </header>

      <ComponentInstall name="glyph-flux" />

      <GlyphFluxPreviews />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Performance</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            WebGL effect — use <strong className="font-medium text-foreground">one
            instance</strong> per view, not several full-bleed fields.
          </li>
          <li>
            Fine as a bounded-height hero on modern phones; always-on full viewport
            or low-end devices cost more GPU.
          </li>
          <li>
            Lighter on mobile:{" "}
            <code className="rounded bg-muted px-1 text-xs">glow={"{0}"}</code>,
            larger{" "}
            <code className="rounded bg-muted px-1 text-xs">cellSize</code>{" "}
            (20–24), lower grain/speed.
          </li>
          <li>
            Pauses off-screen / hidden tab; DPR capped at 2. Needs WebGL2 — otherwise
            the canvas stays blank.
          </li>
        </ul>
      </section>

      <section className="space-y-2 border-t border-border pt-8">
        <h2 className="text-lg font-semibold">Credits</h2>
        <p className="text-sm text-muted-foreground text-pretty">
          Idea inspired by{" "}
          <a
            href={glyphFluxDocsCredit.href}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {glyphFluxDocsCredit.label}
          </a>{" "}
          by{" "}
          <a
            href={glyphFluxDocsCredit.authorHref}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {glyphFluxDocsCredit.author}
          </a>
          . GlyphFlux is an original nk implementation with its own shapes, API,
          and defaults.
        </p>
      </section>
    </article>
  )
}
