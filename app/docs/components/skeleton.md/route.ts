import { skeletonDocsMarkdown } from "@/content/docs/skeleton"

/**
 * Raw Skeleton docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(skeletonDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
