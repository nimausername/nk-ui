import { inputGroupDocsMarkdown } from "@/content/docs/input-group"

/**
 * Raw Input Group docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(inputGroupDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
