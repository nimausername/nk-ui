import { introductionMarkdown } from "@/content/docs/introduction"

/**
 * Raw Introduction markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(introductionMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
