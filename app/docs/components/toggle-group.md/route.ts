import { toggleGroupDocsMarkdown } from "@/content/docs/toggle-group"

/**
 * Raw Toggle Group docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(toggleGroupDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
