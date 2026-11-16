import { animatedCounterDocsMarkdown } from "@/content/docs/animated-counter"

/**
 * Raw Animated Counter docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(animatedCounterDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
