import { badgeDocsMarkdown } from "@/content/docs/badge"

/**
 * Raw Badge docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(badgeDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
