/**
 * Pagination component docs — markdown for Copy Page / AI.
 */

export const paginationDocsTitle = "Pagination"

export const paginationDocsDescription =
  "Composable page navigation — previous / next, numbered links, and ellipsis for truncated ranges."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const paginationDocsUpdatedAt = "2026-11-05"

export const paginationDocsMarkdown = `# Pagination

${paginationDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/pagination
\`\`\`

## Usage

\`\`\`tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/page/1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/page/1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/page/2" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/page/3" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
\`\`\`

## Notes

- Parts: \`Pagination\` / \`PaginationContent\` / \`PaginationItem\` / \`PaginationLink\` / \`PaginationPrevious\` / \`PaginationNext\` / \`PaginationEllipsis\`.
- Pure composition (no Base UI root) — styles come from \`buttonVariants\`.
- Active page: \`isActive\` sets \`aria-current="page"\` and the outline button style.
- Use \`asChild\` to render Next.js \`Link\` or a \`button\` for client-side page state.
- Chevrons flip in RTL via \`rtl:rotate-180\`.
- Live previews (basic, icons, ellipsis, page info, table footer) are on the docs page.
`
