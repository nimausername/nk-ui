import { navigationMenuDocsMarkdown } from "@/content/docs/navigation-menu"

/**
 * Raw Navigation Menu docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(navigationMenuDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
