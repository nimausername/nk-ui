"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  formatDocsMoney,
  invoices,
} from "@/components/docs/table-previews/shared"
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Table row selection with Checkbox + data-state.
 */
const TableSelectionPreview = () => {
  const [selected, setSelected] = useState<ReadonlySet<string>>(
    () => new Set(["INV-002"])
  )

  const allIds = invoices.map((invoice) => invoice.id)
  const allSelected = allIds.every((id) => selected.has(id))
  const someSelected = allIds.some((id) => selected.has(id)) && !allSelected

  const handleToggleAll = (checked: boolean) => {
    setSelected(checked ? new Set(allIds) : new Set())
  }

  const handleToggleRow = (id: string, checked: boolean) => {
    setSelected((current) => {
      const next = new Set(current)
      if (checked) {
        next.add(id)
      } else {
        next.delete(id)
      }
      return next
    })
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Selection</h2>
      <p className="text-sm text-muted-foreground">
        Pair Checkbox +{" "}
        <code className="rounded bg-muted px-1 text-xs">CheckboxIndicator</code>{" "}
        with{" "}
        <code className="rounded bg-muted px-1 text-xs">
          data-state=&quot;selected&quot;
        </code>{" "}
        on the row for bulk actions.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableSelection() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox aria-label="Select all">
              <CheckboxIndicator />
            </Checkbox>
          </TableHead>
          <TableHead>Invoice</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell>
            <Checkbox checked aria-label="Select INV-001">
              <CheckboxIndicator />
            </Checkbox>
          </TableCell>
          <TableCell className="font-medium">INV-001</TableCell>
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
                  <TableHead className="w-8">
                    <Checkbox
                      checked={allSelected}
                      indeterminate={someSelected}
                      aria-label={isRtl ? "انتخاب همه" : "Select all"}
                      onCheckedChange={(checked) =>
                        handleToggleAll(checked === true)
                      }
                    >
                      <CheckboxIndicator />
                    </Checkbox>
                  </TableHead>
                  <TableHead>{isRtl ? "فاکتور" : "Invoice"}</TableHead>
                  <TableHead>{isRtl ? "مشتری" : "Customer"}</TableHead>
                  <TableHead className="text-end">
                    {isRtl ? "مبلغ" : "Amount"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => {
                  const isSelected = selected.has(invoice.id)
                  return (
                    <TableRow
                      key={invoice.id}
                      data-state={isSelected ? "selected" : undefined}
                    >
                      <TableCell>
                        <Checkbox
                          checked={isSelected}
                          aria-label={
                            isRtl
                              ? `انتخاب ${invoice.id}`
                              : `Select ${invoice.id}`
                          }
                          onCheckedChange={(checked) =>
                            handleToggleRow(invoice.id, checked === true)
                          }
                        >
                          <CheckboxIndicator />
                        </Checkbox>
                      </TableCell>
                      <TableCell className="font-medium">
                        {invoice.id}
                      </TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell className="text-end">
                        {formatDocsMoney(invoice.amount, direction)}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { TableSelectionPreview }
