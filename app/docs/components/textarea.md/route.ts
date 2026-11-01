import { textareaDocsMarkdown } from "@/content/docs/textarea"

/**
 * Raw Textarea docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(textareaDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
