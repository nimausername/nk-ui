import { avatarDocsMarkdown } from "@/content/docs/avatar"

/**
 * Raw Avatar docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(avatarDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
