import { switchDocsMarkdown } from "@/content/docs/switch"

/**
 * Raw Switch docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(switchDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
