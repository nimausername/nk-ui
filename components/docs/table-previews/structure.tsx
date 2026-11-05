"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  formatDocsMoney,
  invoices,
  invoiceTotal,
  statusLabel,
} from "@/components/docs/table-previews/shared"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Core Table structure previews — anatomy, basic, caption, footer.
 */
const TableStructurePreviews = () => {
  return (
    <>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Table</strong>:
            scroll wrapper + native{" "}
            <code className="rounded bg-muted px-1 text-xs">table</code> —
            <code className="rounded bg-muted px-1 text-xs">className</code> lands
            on the table, not the wrapper
          </li>
          <li>
            <strong className="font-medium text-foreground">TableHeader</strong>{" "}
            / <strong className="font-medium text-foreground">TableBody</strong>{" "}
            / <strong className="font-medium text-foreground">TableFooter</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">TableRow</strong>,{" "}
            <strong className="font-medium text-foreground">TableHead</strong>,{" "}
            <strong className="font-medium text-foreground">TableCell</strong>,{" "}
            <strong className="font-medium text-foreground">TableCaption</strong>
          </li>
          <li>
            Selected rows:{" "}
            <code className="rounded bg-muted px-1 text-xs">
              data-state=&quot;selected&quot;
            </code>
          </li>
          <li>
            For sort / filter / virtualized grids, reach for a data-grid — this
            primitive is for short composed tables
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Header + body rows. Cells are nowrap — overflow scrolls sideways.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableBasic() {
  return (
    <Table>
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
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            return (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{isRtl ? "فاکتور" : "Invoice"}</TableHead>
                    <TableHead>{isRtl ? "وضعیت" : "Status"}</TableHead>
                    <TableHead className="text-end">
                      {isRtl ? "مبلغ" : "Amount"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 3).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        {statusLabel(invoice.status, direction)}
                      </TableCell>
                      <TableCell className="text-end">
                        {formatDocsMoney(invoice.amount, direction)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Caption</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">TableCaption</code>{" "}
          sits below the table and names it for assistive tech.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithCaption() {
  return (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell>Ada Lovelace</TableCell>
          <TableCell className="text-end">$250</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            return (
              <Table>
                <TableCaption>
                  {isRtl
                    ? "فهرست فاکتورهای اخیر."
                    : "A list of recent invoices."}
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>{isRtl ? "فاکتور" : "Invoice"}</TableHead>
                    <TableHead>{isRtl ? "مشتری" : "Customer"}</TableHead>
                    <TableHead className="text-end">
                      {isRtl ? "مبلغ" : "Amount"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 2).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        {isRtl
                          ? invoice.customer === "Ada Lovelace"
                            ? "آدا لاولیس"
                            : "گریس هاپر"
                          : invoice.customer}
                      </TableCell>
                      <TableCell className="text-end">
                        {formatDocsMoney(invoice.amount, direction)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Footer</h2>
        <p className="text-sm text-muted-foreground">
          Totals and summary rows live in{" "}
          <code className="rounded bg-muted px-1 text-xs">TableFooter</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithFooter() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{/* rows */}</TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-end">$1,200</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            return (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{isRtl ? "فاکتور" : "Invoice"}</TableHead>
                    <TableHead>{isRtl ? "وضعیت" : "Status"}</TableHead>
                    <TableHead className="text-end">
                      {isRtl ? "مبلغ" : "Amount"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        {statusLabel(invoice.status, direction)}
                      </TableCell>
                      <TableCell className="text-end">
                        {formatDocsMoney(invoice.amount, direction)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>
                      {isRtl ? "جمع" : "Total"}
                    </TableCell>
                    <TableCell className="text-end">
                      {formatDocsMoney(invoiceTotal, direction)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            )
          }}
        </ComponentPreview>
      </section>
    </>
  )
}

export { TableStructurePreviews }
