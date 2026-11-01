import { inputDocsMarkdown } from "@/content/docs/input"

/**
 * Raw Input docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(inputDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
