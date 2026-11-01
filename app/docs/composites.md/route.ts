import { compositesDocsMarkdown } from "@/content/docs/composites"

/**
 * Raw Composites index markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(compositesDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
