import { nextInstallMarkdown } from "@/content/docs/installation-next"

/**
 * Raw Next.js installation markdown for AI tools.
 */
export const GET = () => {
  return new Response(nextInstallMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
