import { sheetDocsMarkdown } from "@/content/docs/sheet"

/**
 * Raw Sheet docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(sheetDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
