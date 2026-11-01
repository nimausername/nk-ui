import { formDocsMarkdown } from "@/content/docs/form"

/**
 * Raw Form docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(formDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
