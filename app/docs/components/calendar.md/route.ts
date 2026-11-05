import { calendarDocsMarkdown } from "@/content/docs/calendar"

/**
 * Raw Calendar docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(calendarDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
