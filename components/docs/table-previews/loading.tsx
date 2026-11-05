"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const LOADING_ROWS = [0, 1, 2, 3] as const

/**
 * Loading table — real header, skeleton cells in the body.
 */
const TableLoadingPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Loading</h2>
      <p className="text-sm text-muted-foreground">
        Keep column labels visible. Fill body cells with{" "}
        <code className="rounded bg-muted px-1 text-xs">Skeleton</code> so layout
        does not jump when data arrives.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableLoading() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 4 }).map((_, index) => (
          <TableRow key={index} className="hover:bg-transparent">
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-32" />
            </TableCell>
            <TableCell className="text-end">
              <Skeleton className="ms-auto h-4 w-12" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`}
      >
        {(direction) => {
          const isRtl = direction === "rtl"
          return (
            <Table aria-busy="true" aria-label={isRtl ? "در حال بارگذاری" : "Loading"}>
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
                {LOADING_ROWS.map((row) => (
                  <TableRow key={row} className="hover:bg-transparent">
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Skeleton className="size-6 shrink-0 rounded-full" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                    </TableCell>
                    <TableCell className="text-end">
                      <Skeleton className="ms-auto h-4 w-12" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { TableLoadingPreview }
