/**
 * Breadcrumb component docs — markdown for Copy Page / AI.
 */

export const breadcrumbDocsTitle = "Breadcrumb"

export const breadcrumbDocsDescription =
  "Composable navigation trail — not one mega-component with every variant baked in. Mix icons, separators, ellipsis, and links by composition. No Base UI primitive required (same approach as shadcn)."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const breadcrumbDocsUpdatedAt = "2026-11-01"

export const breadcrumbDocsMarkdown = `# Breadcrumb

${breadcrumbDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/breadcrumb
\`\`\`

## Composition model

- \`Breadcrumb\` — root \`nav\`
- \`BreadcrumbList\` — \`ol\`
- \`BreadcrumbItem\` — \`li\`
- \`BreadcrumbLink\` / \`BreadcrumbPage\`
- \`BreadcrumbSeparator\` — chevron by default; pass children for slash or custom marks
- \`BreadcrumbEllipsis\` — collapsed middle (compose a menu later)

## Usage

\`\`\`tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Docs</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
\`\`\`

## Notes

- Prefer composition over variant explosion.
- Live previews (icons, slash, ellipsis, RTL) are on the docs page.
`
