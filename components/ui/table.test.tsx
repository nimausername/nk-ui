import { describe, expect, it } from "vitest"

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
import { render, screen } from "@/test/render"

describe("Table", () => {
  it("renders a captioned table with header and body cells", () => {
    render(
      <Table>
        <TableCaption>Invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV-001</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByRole("table")).toBeInTheDocument()
    expect(screen.getByText("Invoices")).toBeInTheDocument()
    expect(screen.getByRole("columnheader", { name: "Invoice" })).toBeInTheDocument()
    expect(screen.getByRole("cell", { name: "INV-001" })).toBeInTheDocument()
  })

  it("marks a selected row via data-state", () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-state="selected">
            <TableCell>Selected</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByRole("row")).toHaveAttribute("data-state", "selected")
  })

  it("renders a footer summary row", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )

    expect(screen.getByRole("row", { name: /Total/ })).toBeInTheDocument()
  })
})
