import { buttonDocsMarkdown } from "@/content/docs/button"

/**
 * Raw Button docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(buttonDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
