import { datePickerDocsMarkdown } from "@/content/docs/date-picker"

/**
 * Raw Date Picker docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(datePickerDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
