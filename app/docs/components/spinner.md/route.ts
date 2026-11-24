import { spinnerDocsMarkdown } from "@/content/docs/spinner"

/**
 * Raw Spinner docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(spinnerDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
