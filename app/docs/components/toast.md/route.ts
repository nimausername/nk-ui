import { toastDocsMarkdown } from "@/content/docs/toast"

/**
 * Raw Toast docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(toastDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
