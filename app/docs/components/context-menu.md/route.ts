import { contextMenuDocsMarkdown } from "@/content/docs/context-menu"

/**
 * Raw Context Menu docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(contextMenuDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
