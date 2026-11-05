const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const

type PreviewDirection = "ltr" | "rtl"

type InvoiceStatus = "paid" | "pending" | "overdue"

type Invoice = {
  readonly id: string
  readonly customer: string
  readonly email: string
  readonly amount: number
  readonly status: InvoiceStatus
}

const invoices: readonly Invoice[] = [
  {
    id: "INV-001",
    customer: "Ada Lovelace",
    email: "ada@analytical.engine",
    amount: 250,
    status: "paid",
  },
  {
    id: "INV-002",
    customer: "Grace Hopper",
    email: "grace@cobol.dev",
    amount: 150,
    status: "pending",
  },
  {
    id: "INV-003",
    customer: "Alan Turing",
    email: "alan@bletchley.uk",
    amount: 350,
    status: "paid",
  },
  {
    id: "INV-004",
    customer: "Katherine Johnson",
    email: "katherine@nasa.gov",
    amount: 450,
    status: "overdue",
  },
]

/**
 * Format amounts / counts — Persian digits in RTL previews.
 */
const formatDocsNumber = (value: number, direction: PreviewDirection) => {
  const latin = String(value)
  if (direction !== "rtl") {
    return latin
  }
  return latin.replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)] ?? digit)
}

/**
 * Currency label for docs demos.
 */
const formatDocsMoney = (value: number, direction: PreviewDirection) => {
  if (direction === "rtl") {
    return `${formatDocsNumber(value, direction)} دلار`
  }
  return `$${value.toLocaleString("en-US")}`
}

const statusLabel = (
  status: InvoiceStatus,
  direction: PreviewDirection
): string => {
  if (direction === "rtl") {
    if (status === "paid") return "پرداخت‌شده"
    if (status === "pending") return "در انتظار"
    return "سررسید گذشته"
  }
  if (status === "paid") return "Paid"
  if (status === "pending") return "Pending"
  return "Overdue"
}

const statusVariant = (
  status: InvoiceStatus
): "success" | "secondary" | "destructive" => {
  if (status === "paid") return "success"
  if (status === "pending") return "secondary"
  return "destructive"
}

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)

const invoiceTotal = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)

export {
  formatDocsMoney,
  formatDocsNumber,
  initialsOf,
  invoiceTotal,
  invoices,
  statusLabel,
  statusVariant,
}
export type { Invoice, InvoiceStatus, PreviewDirection }
