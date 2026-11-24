import { buttonGroupDocsMarkdown } from "@/content/docs/button-group"

/**
 * Raw Button Group docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(buttonGroupDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
