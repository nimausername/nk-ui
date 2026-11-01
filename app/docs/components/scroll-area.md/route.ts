import { scrollAreaDocsMarkdown } from "@/content/docs/scroll-area"

/**
 * Raw Scroll Area docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(scrollAreaDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
