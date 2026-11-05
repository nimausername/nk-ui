import { collapsibleDocsMarkdown } from "@/content/docs/collapsible"

/**
 * Raw Collapsible docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(collapsibleDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
