import { progressButtonDocsMarkdown } from "@/content/docs/progress-button"

/**
 * Raw Progress Button docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(progressButtonDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
