import { passwordInputDocsMarkdown } from "@/content/docs/password-input"

/**
 * Raw Password Input docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(passwordInputDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
