import { progressDocsMarkdown } from "@/content/docs/progress"

/**
 * Raw Progress docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(progressDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
