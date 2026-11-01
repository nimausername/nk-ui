import { dialogDocsMarkdown } from "@/content/docs/dialog"

/**
 * Raw Dialog docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(dialogDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
