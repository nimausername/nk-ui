"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  formatDocsMoney,
  initialsOf,
  invoices,
  statusLabel,
  statusVariant,
} from "@/components/docs/table-previews/shared"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Table + Badge / Avatar cell composition.
 */
const TableBadgesPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Status badges</h2>
      <p className="text-sm text-muted-foreground">
        Compose Badge (and Avatar) inside cells — Table stays presentational.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableWithBadges() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ada Lovelace</TableCell>
          <TableCell>
            <Badge variant="success">Paid</Badge>
          </TableCell>
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
                  <TableHead>{isRtl ? "مشتری" : "Customer"}</TableHead>
                  <TableHead>{isRtl ? "وضعیت" : "Status"}</TableHead>
                  <TableHead className="text-end">
                    {isRtl ? "مبلغ" : "Amount"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar size="sm">
                          <AvatarFallback>
                            {initialsOf(invoice.customer)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="truncate font-medium">
                            {invoice.customer}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {invoice.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant(invoice.status)}>
                        {statusLabel(invoice.status, direction)}
                      </Badge>
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
  )
}

export { TableBadgesPreview }
