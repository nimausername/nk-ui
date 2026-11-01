import { checkboxDocsMarkdown } from "@/content/docs/checkbox"

/**
 * Raw Checkbox docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(checkboxDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
