/**
 * Table component docs — markdown for Copy Page / AI.
 */

export const tableDocsTitle = "Table"

export const tableDocsDescription =
  "Composable data table — header, body, footer, caption, and row selection styles on native HTML."

/** Editorial last-updated date for the docs header (`YYYY-MM-DD`). */
export const tableDocsUpdatedAt = "2026-11-05"

export const tableDocsMarkdown = `# Table

${tableDocsDescription}

## Install

Requires the general [@nk registry setup](/docs/installation) once. Then:

\`\`\`bash
pnpm dlx shadcn@latest add @nk/table
\`\`\`

## Usage

\`\`\`tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Example() {
  return (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-end">$250</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
\`\`\`

## Notes

- Parts: \`Table\` / \`TableHeader\` / \`TableBody\` / \`TableFooter\` / \`TableRow\` / \`TableHead\` / \`TableCell\` / \`TableCaption\`.
- Pure composition (no Base UI root) — styled native table elements.
- \`Table\` wraps the table in an overflow-x container; \`className\` applies to the inner \`<table>\`.
- \`TableHead\` uses \`text-start\` so column labels follow writing direction.
- Selected rows: set \`data-state="selected"\` on \`TableRow\` (pair with Checkbox).
- Cells are \`whitespace-nowrap\` by default — long values scroll horizontally.
- For sort / filter / virtualization, use a data-grid; this primitive is for short composed tables.
- Docs previews are tabbed like Card / Collapsible: Structure, Patterns (badges, selection, empty, loading, row actions), Compositions.
`
