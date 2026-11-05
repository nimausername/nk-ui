"use client"

import { MoreHorizontal } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  formatDocsMoney,
  formatDocsNumber,
  invoices,
  statusLabel,
  statusVariant,
} from "@/components/docs/table-previews/shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Table inside a Card shell — admin list pattern.
 */
const TableInCardPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">In a Card</h2>
      <p className="text-sm text-muted-foreground">
        Common admin pattern — Card header, bordered table, footer actions.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableInCard() {
  return (
    <Card className="w-full max-w-2xl gap-0 py-0">
      <CardHeader className="border-b px-6 py-4">
        <CardTitle>Invoices</CardTitle>
        <CardDescription>Recent billing activity.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>{/* … */}</Table>
      </CardContent>
    </Card>
  )
}`}
      >
        {(direction) => {
          const isRtl = direction === "rtl"
          return (
            <Card className="w-full max-w-2xl gap-0 py-0" dir={direction}>
              <CardHeader className="border-b px-6 py-4">
                <CardTitle>{isRtl ? "فاکتورها" : "Invoices"}</CardTitle>
                <CardDescription>
                  {isRtl
                    ? "فعالیت صورت‌حساب اخیر."
                    : "Recent billing activity."}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="ps-6">
                        {isRtl ? "فاکتور" : "Invoice"}
                      </TableHead>
                      <TableHead>{isRtl ? "وضعیت" : "Status"}</TableHead>
                      <TableHead className="pe-6 text-end">
                        {isRtl ? "مبلغ" : "Amount"}
                      </TableHead>
                      <TableHead className="w-10 pe-4">
                        <span className="sr-only">
                          {isRtl ? "اقدامات" : "Actions"}
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="ps-6 font-medium">
                          {invoice.id}
                        </TableCell>
                        <TableCell>
                          <Badge variant={statusVariant(invoice.status)}>
                            {statusLabel(invoice.status, direction)}
                          </Badge>
                        </TableCell>
                        <TableCell className="pe-6 text-end">
                          {formatDocsMoney(invoice.amount, direction)}
                        </TableCell>
                        <TableCell className="pe-4">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label={
                              isRtl
                                ? `اقدامات ${invoice.id}`
                                : `Actions for ${invoice.id}`
                            }
                          >
                            <MoreHorizontal aria-hidden="true" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="justify-between border-t px-6 py-3 text-sm text-muted-foreground">
                <span>
                  {isRtl
                    ? `${formatDocsNumber(invoices.length, direction)} فاکتور`
                    : `${invoices.length} invoices`}
                </span>
                <Button type="button" variant="outline" size="sm">
                  {isRtl ? "صادرات" : "Export"}
                </Button>
              </CardFooter>
            </Card>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { TableInCardPreview }
