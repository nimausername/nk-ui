import { tabsDocsMarkdown } from "@/content/docs/tabs"

/**
 * Raw Tabs docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(tabsDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
