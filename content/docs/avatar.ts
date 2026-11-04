/**
 * Avatar component docs — markdown for Copy Page / AI.
 */

export const avatarDocsTitle = "Avatar"

export const avatarDocsDescription =
  "Profile image with fallback on Base UI — sizes, groups, initials, and icons."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const avatarDocsUpdatedAt = "2026-11-04"

export const avatarDocsMarkdown = `# Avatar

${avatarDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/avatar
\`\`\`

## Usage

\`\`\`tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.png" alt="Ada" />
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
  )
}
\`\`\`

## Notes

- Built on Base UI (\`@base-ui/react\`).
- Parts: \`Avatar\` / \`AvatarImage\` / \`AvatarFallback\` / \`AvatarGroup\`.
- Sizes: \`sm\`, \`default\`, \`lg\` (or override with \`className\`).
- Stack with \`AvatarGroup\` and ring classes on each avatar for overlap.
- Live previews (image, fallback, icon, group, RTL) are on the docs page.
`
