/**
 * Aspect Ratio component docs — markdown for Copy Page / AI.
 */

export const aspectRatioDocsTitle = "Aspect Ratio"

export const aspectRatioDocsDescription =
  "Lock a frame to a fixed width / height ratio with native CSS — media, embeds, and cards."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const aspectRatioDocsUpdatedAt = "2026-11-05"

export const aspectRatioDocsMarkdown = `# Aspect Ratio

${aspectRatioDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/aspect-ratio
\`\`\`

## Usage

\`\`\`tsx
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Example() {
  return (
    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
      <img
        src="/hero.jpg"
        alt="Hero"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  )
}
\`\`\`

## Notes

- Parts: \`AspectRatio\` only — a relative box with CSS \`aspect-ratio\`.
- Pass \`ratio\` as width ÷ height (\`16 / 9\`, \`1\`, \`4 / 3\`, \`9 / 16\`). Defaults to \`1\`.
- Fill media with \`absolute inset-0 size-full object-cover\` (or \`object-contain\`).
- No Base UI / Radix dependency — native CSS.
- Live previews (16:9, square, 4:3, portrait, in a Card) are on the docs page.
`
