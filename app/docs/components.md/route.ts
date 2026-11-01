import { componentsDocsMarkdown } from "@/content/docs/components"

/**
 * Raw Components index markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(componentsDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
