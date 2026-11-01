import { manualInstallMarkdown } from "@/content/docs/installation-manual"

/**
 * Raw Manual installation markdown for AI tools.
 */
export const GET = () => {
  return new Response(manualInstallMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
