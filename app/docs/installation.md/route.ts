import { installationMarkdown } from "@/content/docs/installation"

/**
 * Raw Installation markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(installationMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
