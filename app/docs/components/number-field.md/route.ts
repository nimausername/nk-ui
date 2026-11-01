import { numberFieldDocsMarkdown } from "@/content/docs/number-field"

/**
 * Raw Number Field docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(numberFieldDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
