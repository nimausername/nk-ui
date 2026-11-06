import { hoverCardDocsMarkdown } from "@/content/docs/hover-card"

/**
 * Raw Hover Card docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(hoverCardDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
