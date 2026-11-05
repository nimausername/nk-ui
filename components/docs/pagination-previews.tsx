"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const pageSizeItems = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
]

const pageSizeItemsRtl = [
  { label: "۱۰", value: "10" },
  { label: "۲۵", value: "25" },
  { label: "۵۰", value: "50" },
]

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const

type PreviewDirection = "ltr" | "rtl"

/**
 * Format page / count numbers — Persian digits in RTL previews.
 */
const formatDocsNumber = (value: number, direction: PreviewDirection) => {
  const latin = String(value)
  if (direction !== "rtl") {
    return latin
  }
  return latin.replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)] ?? digit)
}

/**
 * Controlled numbered pagination for interactive docs demos.
 */
const ControlledPagination = ({
  page,
  pageCount,
  onPageChange,
  direction,
  showLabels = true,
}: {
  readonly page: number
  readonly pageCount: number
  readonly onPageChange: (page: number) => void
  readonly direction: PreviewDirection
  readonly showLabels?: boolean
}) => {
  const isRtl = direction === "rtl"
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <Pagination dir={direction}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            asChild
            size={showLabels ? "default" : "icon"}
            aria-disabled={page <= 1 || undefined}
            className={page <= 1 ? "pointer-events-none opacity-50" : undefined}
          >
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => onPageChange(page - 1)}
            >
              <ChevronLeft
                aria-hidden="true"
                className="size-4 rtl:rotate-180"
              />
              {showLabels ? (
                <span className="hidden sm:inline">
                  {isRtl ? "قبلی" : "Previous"}
                </span>
              ) : null}
            </button>
          </PaginationPrevious>
        </PaginationItem>
        {pages.map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              asChild
              isActive={item === page}
              size="icon"
            >
              <button type="button" onClick={() => onPageChange(item)}>
                {formatDocsNumber(item, direction)}
              </button>
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            asChild
            size={showLabels ? "default" : "icon"}
            aria-disabled={page >= pageCount || undefined}
            className={
              page >= pageCount ? "pointer-events-none opacity-50" : undefined
            }
          >
            <button
              type="button"
              disabled={page >= pageCount}
              onClick={() => onPageChange(page + 1)}
            >
              {showLabels ? (
                <span className="hidden sm:inline">
                  {isRtl ? "بعدی" : "Next"}
                </span>
              ) : null}
              <ChevronRight
                aria-hidden="true"
                className="size-4 rtl:rotate-180"
              />
            </button>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

/**
 * Pagination docs examples — basic, icons, ellipsis, info, controlled, table footer.
 */
const PaginationPreviews = () => {
  const [page, setPage] = useState(2)
  const [infoPage, setInfoPage] = useState(1)
  const [tablePage, setTablePage] = useState(1)
  const [pageSize, setPageSize] = useState("10")

  const totalRows = 100
  const size = Number(pageSize)
  const from = (tablePage - 1) * size + 1
  const to = Math.min(tablePage * size, totalRows)
  const tablePageCount = Math.ceil(totalRows / size)

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Pagination</strong>:
            landmark root
          </li>
          <li>
            <strong className="font-medium text-foreground">PaginationContent</strong>{" "}
            / <strong className="font-medium text-foreground">PaginationItem</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">PaginationLink</strong>,{" "}
            <strong className="font-medium text-foreground">Previous</strong>,{" "}
            <strong className="font-medium text-foreground">Next</strong>,{" "}
            <strong className="font-medium text-foreground">Ellipsis</strong>
          </li>
          <li>
            Use{" "}
            <code className="rounded bg-muted px-1 text-xs">asChild</code> to
            render Next.js{" "}
            <code className="rounded bg-muted px-1 text-xs">Link</code> or a{" "}
            <code className="rounded bg-muted px-1 text-xs">button</code>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Labeled previous / next around numbered pages. Current page uses the
          outline button style.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationBasic() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`}
        >
          {(direction) => (
            <ControlledPagination
              page={page}
              pageCount={3}
              onPageChange={setPage}
              direction={direction}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Icons only</h2>
        <p className="text-sm text-muted-foreground">
          Compact chrome for toolbars — keep{" "}
          <code className="rounded bg-muted px-1 text-xs">aria-label</code> on
          previous / next.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationIconsOnly() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="px-2.5">
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="px-2.5">
            <ChevronRight className="size-4 rtl:rotate-180" />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`}
        >
          {(direction) => (
            <ControlledPagination
              page={page}
              pageCount={3}
              onPageChange={setPage}
              direction={direction}
              showLabels={false}
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With ellipsis</h2>
        <p className="text-sm text-muted-foreground">
          Truncate long ranges. Place{" "}
          <code className="rounded bg-muted px-1 text-xs">PaginationEllipsis</code>{" "}
          where pages are skipped.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationWithEllipsis() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`}
        >
          {(direction) => (
            <Pagination dir={direction}>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#prev">
                    {direction === "rtl" ? "قبلی" : "Previous"}
                  </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#1">
                    {formatDocsNumber(1, direction)}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#2" isActive>
                    {formatDocsNumber(2, direction)}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#3">
                    {formatDocsNumber(3, direction)}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#12">
                    {formatDocsNumber(12, direction)}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#next">
                    {direction === "rtl" ? "بعدی" : "Next"}
                  </PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Page info</h2>
        <p className="text-sm text-muted-foreground">
          When numbers are too dense, keep prev / next and announce the range in
          plain text.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationPageInfo() {
  const [page, setPage] = useState(1)
  const pageCount = 10

  return (
    <Pagination>
      <PaginationContent className="w-full max-w-sm justify-between gap-3">
        <PaginationItem>
          <PaginationPrevious asChild>
            <Button
              type="button"
              variant="ghost"
              disabled={page <= 1}
              onClick={() => setPage((current) => current - 1)}
            />
          </PaginationPrevious>
        </PaginationItem>
        <li className="text-sm text-muted-foreground">
          Page {page} of {pageCount}
        </li>
        <PaginationItem>
          <PaginationNext asChild>
            <Button
              type="button"
              variant="ghost"
              disabled={page >= pageCount}
              onClick={() => setPage((current) => current + 1)}
            />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const pageCount = 10

            return (
              <Pagination dir={direction}>
                <PaginationContent className="w-full max-w-sm justify-between gap-3">
                  <PaginationItem>
                    <PaginationPrevious asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        disabled={infoPage <= 1}
                        onClick={() => setInfoPage((current) => current - 1)}
                      >
                        <ChevronLeft
                          aria-hidden="true"
                          className="size-4 rtl:rotate-180"
                        />
                        <span className="hidden sm:inline">
                          {isRtl ? "قبلی" : "Previous"}
                        </span>
                      </Button>
                    </PaginationPrevious>
                  </PaginationItem>
                  <li className="text-sm text-muted-foreground tabular-nums">
                    {isRtl
                      ? `صفحه ${formatDocsNumber(infoPage, direction)} از ${formatDocsNumber(pageCount, direction)}`
                      : `Page ${infoPage} of ${pageCount}`}
                  </li>
                  <PaginationItem>
                    <PaginationNext asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        disabled={infoPage >= pageCount}
                        onClick={() => setInfoPage((current) => current + 1)}
                      >
                        <span className="hidden sm:inline">
                          {isRtl ? "بعدی" : "Next"}
                        </span>
                        <ChevronRight
                          aria-hidden="true"
                          className="size-4 rtl:rotate-180"
                        />
                      </Button>
                    </PaginationNext>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Table footer</h2>
        <p className="text-sm text-muted-foreground">
          Production list chrome — rows-per-page, range text, and first/prev/next
          jump controls.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const pageSizeItems = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
]

export function PaginationTableFooter() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState("10")
  const total = 100
  const size = Number(pageSize)
  const pageCount = Math.ceil(total / size)
  const from = (page - 1) * size + 1
  const to = Math.min(page * size, total)

  return (
    <Card className="w-full max-w-lg gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Deployments</CardTitle>
        <CardDescription>Latest runs across production.</CardDescription>
      </CardHeader>
      <CardContent className="py-4 text-sm text-muted-foreground">
        Table body goes here.
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t py-3 [.border-t]:pt-3">
        <Field name="pageSize" className="w-auto flex-row items-center gap-2">
          <FieldLabel className="text-xs text-muted-foreground">
            Rows
          </FieldLabel>
          <Select
            value={pageSize}
            onValueChange={(value) => {
              if (value) {
                setPageSize(value)
                setPage(1)
              }
            }}
            items={pageSizeItems}
          >
            <SelectTrigger className="h-8 w-[4.5rem]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <p className="text-xs text-muted-foreground tabular-nums">
          {from}–{to} of {total}
        </p>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            disabled={page <= 1}
            aria-label="Previous page"
            onClick={() => setPage((current) => current - 1)}
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            disabled={page >= pageCount}
            aria-label="Next page"
            onClick={() => setPage((current) => current + 1)}
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const sizes = isRtl ? pageSizeItemsRtl : pageSizeItems

            return (
              <Card className="w-full max-w-lg gap-0 py-0" dir={direction}>
                <CardHeader className="border-b py-4">
                  <CardTitle>
                    {isRtl ? "دیپلوی‌ها" : "Deployments"}
                  </CardTitle>
                  <CardDescription>
                    {isRtl
                      ? "آخرین اجراها در محیط تولید."
                      : "Latest runs across production."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 py-4 text-sm text-muted-foreground">
                  <div className="rounded-md border border-dashed border-border px-3 py-6 text-center">
                    {isRtl ? "بدنه جدول اینجا می‌آید." : "Table body goes here."}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t py-3 [.border-t]:pt-3">
                  <Field
                    name="pageSize"
                    className="w-auto flex-row items-center gap-2"
                  >
                    <FieldLabel className="text-xs text-muted-foreground">
                      {isRtl ? "ردیف" : "Rows"}
                    </FieldLabel>
                    <Select
                      value={pageSize}
                      onValueChange={(value) => {
                        if (value != null) {
                          setPageSize(String(value))
                          setTablePage(1)
                        }
                      }}
                      items={[...sizes]}
                    >
                      <SelectTrigger className="h-8 w-[4.5rem]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <p className="text-xs text-muted-foreground tabular-nums">
                    {isRtl
                      ? `${formatDocsNumber(from, direction)}–${formatDocsNumber(to, direction)} از ${formatDocsNumber(totalRows, direction)}`
                      : `${from}–${to} of ${totalRows}`}
                  </p>
                  <div className="flex items-center gap-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      disabled={tablePage <= 1}
                      aria-label={isRtl ? "صفحه قبل" : "Previous page"}
                      onClick={() => setTablePage((current) => current - 1)}
                    >
                      <ChevronLeft
                        aria-hidden="true"
                        className="size-4 rtl:rotate-180"
                      />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      disabled={tablePage >= tablePageCount}
                      aria-label={isRtl ? "صفحه بعد" : "Next page"}
                      onClick={() => setTablePage((current) => current + 1)}
                    >
                      <ChevronRight
                        aria-hidden="true"
                        className="size-4 rtl:rotate-180"
                      />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )
          }}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { PaginationPreviews }
