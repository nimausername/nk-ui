import { sliderDocsMarkdown } from "@/content/docs/slider"

/**
 * Raw Slider docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(sliderDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
