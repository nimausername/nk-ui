import { viteInstallMarkdown } from "@/content/docs/installation-vite"

/**
 * Raw Vite installation markdown for AI tools.
 */
export const GET = () => {
  return new Response(viteInstallMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
