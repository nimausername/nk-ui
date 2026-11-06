import { menubarDocsMarkdown } from "@/content/docs/menubar"

/**
 * Raw Menubar docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(menubarDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
