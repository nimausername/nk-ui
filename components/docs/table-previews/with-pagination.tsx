"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  formatDocsMoney,
  formatDocsNumber,
  invoices,
} from "@/components/docs/table-previews/shared"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Table + Pagination footer composition.
 */
const TableWithPaginationPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With Pagination</h2>
      <p className="text-sm text-muted-foreground">
        Compose Pagination below the table for list footers — Table does not own
        paging.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithPagination() {
  return (
    <div className="space-y-4">
      <Table>{/* … */}</Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}`}
      >
        {(direction) => {
          const isRtl = direction === "rtl"
          return (
            <div className="w-full max-w-2xl space-y-4" dir={direction}>
              <Table>
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
                  {invoices.slice(0, 3).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">
                        {invoice.id}
                      </TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell className="text-end">
                        {formatDocsMoney(invoice.amount, direction)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  {isRtl
                    ? `صفحه ${formatDocsNumber(1, direction)} از ${formatDocsNumber(4, direction)}`
                    : "Page 1 of 4"}
                </p>
                <Pagination className="mx-0 w-auto justify-end">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#prev"
                        aria-disabled
                        className="pointer-events-none opacity-50"
                      >
                        {isRtl ? "قبلی" : "Previous"}
                      </PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#next">
                        {isRtl ? "بعدی" : "Next"}
                      </PaginationNext>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { TableWithPaginationPreview }
