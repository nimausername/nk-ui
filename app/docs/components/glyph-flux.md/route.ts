import { glyphFluxDocsMarkdown } from "@/content/docs/glyph-flux"

/**
 * Raw GlyphFlux docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(glyphFluxDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
