import { accordionDocsMarkdown } from "@/content/docs/accordion"

/**
 * Raw Accordion docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(accordionDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
