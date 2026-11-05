import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the table element (className lands on `<table>`, not the scroll wrapper).
 */
type TableProps = ComponentProps<"table">

/**
 * Responsive data table. Wraps the native `<table>` in a horizontal scroll container.
 * Compose Header / Body / Footer / Row / Head / Cell / Caption.
 */
const Table = ({ className, ...props }: TableProps) => {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * Props for the table header section.
 */
type TableHeaderProps = ComponentProps<"thead">

/**
 * Header row group. Rows inside get a bottom border.
 */
const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * Props for the table body section.
 */
type TableBodyProps = ComponentProps<"tbody">

/**
 * Body row group. Last row drops its bottom border.
 */
const TableBody = ({ className, ...props }: TableBodyProps) => {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * Props for the table footer section.
 */
type TableFooterProps = ComponentProps<"tfoot">

/**
 * Footer row group for totals and summary rows.
 */
const TableFooter = ({ className, ...props }: TableFooterProps) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a table row.
 */
type TableRowProps = ComponentProps<"tr">

/**
 * Table row with hover and selected styles (`data-state="selected"`).
 */
const TableRow = ({ className, ...props }: TableRowProps) => {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted/50 motion-reduce:transition-none has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a column header cell.
 */
type TableHeadProps = ComponentProps<"th">

/**
 * Column header cell. Uses `text-start` so alignment follows writing direction.
 */
const TableHead = ({ className, ...props }: TableHeadProps) => {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-start align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pe-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a data cell.
 */
type TableCellProps = ComponentProps<"td">

/**
 * Data cell. Nowrap by default — long values widen the table and scroll sideways.
 */
const TableCell = ({ className, ...props }: TableCellProps) => {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pe-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the table caption.
 */
type TableCaptionProps = ComponentProps<"caption">

/**
 * Accessible caption rendered below the table (`caption-bottom`).
 */
const TableCaption = ({ className, ...props }: TableCaptionProps) => {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
export type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps,
}
