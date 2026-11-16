import { commandDocsMarkdown } from "@/content/docs/command"

/**
 * Raw Command docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(commandDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
