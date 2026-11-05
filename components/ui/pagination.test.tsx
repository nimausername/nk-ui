import { describe, expect, it } from "vitest"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { render, screen } from "@/test/render"

describe("Pagination", () => {
  it("exposes a pagination landmark", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#1">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument()
  })

  it("marks the active page", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    const link = screen.getByRole("link", { name: "2" })
    expect(link).toHaveAttribute("aria-current", "page")
    expect(link).toHaveAttribute("data-active")
  })

  it("renders previous, next, and ellipsis controls", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#prev" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )

    expect(
      screen.getByRole("link", { name: "Go to previous page" })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Go to next page" })).toBeInTheDocument()
    expect(screen.getByText("More pages")).toBeInTheDocument()
  })
})
