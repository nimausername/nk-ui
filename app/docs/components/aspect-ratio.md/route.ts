import { aspectRatioDocsMarkdown } from "@/content/docs/aspect-ratio"

/**
 * Raw Aspect Ratio docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(aspectRatioDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
