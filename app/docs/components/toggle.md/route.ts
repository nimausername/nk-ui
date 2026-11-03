import { toggleDocsMarkdown } from "@/content/docs/toggle"

/**
 * Raw Toggle docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(toggleDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
