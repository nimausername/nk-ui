"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { TableEmptyIllustration } from "@/components/docs/table-previews/empty-illustration"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Empty table body — header stays, unDraw illustration + CTA.
 */
const TableEmptyPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Empty</h2>
      <p className="text-sm text-muted-foreground">
        Keep the header for orientation. Illustration is unDraw{" "}
        <a
          href="https://undraw.co/illustrations/no-data_ig65"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          No data
        </a>{" "}
        (free, no attribution) with fills mapped to theme tokens — or drop in{" "}
        <code className="rounded bg-muted px-1 text-xs">
          /illustrations/undraw-no-data.svg
        </code>
        .
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableEmpty() {
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
        <TableRow className="hover:bg-transparent">
          <TableCell colSpan={3} className="whitespace-normal py-10">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <img
                src="/illustrations/undraw-no-data.svg"
                alt=""
                width={160}
                height={156}
                className="size-40"
              />
              <div className="space-y-1">
                <p className="text-sm font-medium">No invoices yet</p>
                <p className="text-sm text-muted-foreground">
                  Create your first invoice to see it here.
                </p>
              </div>
              <Button type="button" size="sm">
                Create invoice
              </Button>
            </div>
          </TableCell>
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
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={3} className="whitespace-normal py-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                      <TableEmptyIllustration />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          {isRtl ? "هنوز فاکتوری نیست" : "No invoices yet"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {isRtl
                            ? "اولین فاکتور را بسازید تا اینجا دیده شود."
                            : "Create your first invoice to see it here."}
                        </p>
                      </div>
                      <Button type="button" size="sm">
                        {isRtl ? "ایجاد فاکتور" : "Create invoice"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { TableEmptyPreview }
