import { cardDocsMarkdown } from "@/content/docs/card"

/**
 * Raw Card docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(cardDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
