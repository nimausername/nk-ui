import { scrollFadeDocsMarkdown } from "@/content/docs/scroll-fade"

/**
 * Raw Scroll Fade docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(scrollFadeDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
