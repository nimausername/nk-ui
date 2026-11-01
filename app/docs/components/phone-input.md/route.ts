import { phoneInputDocsMarkdown } from "@/content/docs/phone-input"

/**
 * Raw Phone Input docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(phoneInputDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
