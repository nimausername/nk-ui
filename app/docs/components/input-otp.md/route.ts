import { inputOtpDocsMarkdown } from "@/content/docs/input-otp"

/**
 * Raw Input OTP docs markdown for AI tools and “View as Markdown”.
 */
export const GET = () => {
  return new Response(inputOtpDocsMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
