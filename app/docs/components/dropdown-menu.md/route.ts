import { dropdownMenuDocsMarkdown } from "@/content/docs/dropdown-menu"

/**
 * Raw Dropdown Menu docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(dropdownMenuDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
