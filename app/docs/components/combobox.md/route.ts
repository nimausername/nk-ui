import { comboboxDocsMarkdown } from "@/content/docs/combobox"

/**
 * Raw Combobox docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(comboboxDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
