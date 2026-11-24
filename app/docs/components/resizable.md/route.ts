import { resizableDocsMarkdown } from "@/content/docs/resizable"

/**
 * Raw Resizable docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(resizableDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
