import { alertDialogDocsMarkdown } from "@/content/docs/alert-dialog"

/**
 * Raw Alert Dialog docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(alertDialogDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
