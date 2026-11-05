"use client"

import { MoreHorizontal } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  formatDocsMoney,
  invoices,
  statusLabel,
} from "@/components/docs/table-previews/shared"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Per-row actions menu — Edit / Duplicate / Delete via Dropdown Menu.
 */
const TableRowActionsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Row actions</h2>
      <p className="text-sm text-muted-foreground">
        A trailing icon column opens{" "}
        <code className="rounded bg-muted px-1 text-xs">DropdownMenu</code> —
        Table stays presentational.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableRowActions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead className="text-end">Amount</TableHead>
          <TableHead className="w-10">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell className="text-end">$250</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Actions for INV-001"
                  />
                }
              >
                <MoreHorizontal aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                  <TableHead className="w-10">
                    <span className="sr-only">
                      {isRtl ? "اقدامات" : "Actions"}
                    </span>
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
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="size-8"
                              aria-label={
                                isRtl
                                  ? `اقدامات ${invoice.id}`
                                  : `Actions for ${invoice.id}`
                              }
                            />
                          }
                        >
                          <MoreHorizontal
                            aria-hidden="true"
                            className="size-4"
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="w-40"
                          dir={direction}
                        >
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              {isRtl ? "ویرایش" : "Edit"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              {isRtl ? "کپی" : "Duplicate"}
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem variant="destructive">
                              {isRtl ? "حذف" : "Delete"}
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
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

export { TableRowActionsPreview }
