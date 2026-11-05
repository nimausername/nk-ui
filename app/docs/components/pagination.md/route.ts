import { paginationDocsMarkdown } from "@/content/docs/pagination"

/**
 * Raw Pagination docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(paginationDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
