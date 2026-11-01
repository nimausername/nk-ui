import { radioGroupDocsMarkdown } from "@/content/docs/radio-group"

/**
 * Raw Radio Group docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(radioGroupDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
