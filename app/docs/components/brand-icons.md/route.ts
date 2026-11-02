import { brandIconsDocsMarkdown } from "@/content/docs/brand-icons"

/**
 * Raw Brand Icons docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(brandIconsDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
