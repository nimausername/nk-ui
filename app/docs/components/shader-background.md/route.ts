import { shaderBackgroundDocsMarkdown } from "@/content/docs/shader-background"

/**
 * Raw Shader Background docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(shaderBackgroundDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
