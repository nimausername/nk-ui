import { popoverDocsMarkdown } from "@/content/docs/popover"

/**
 * Raw Popover docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(popoverDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
