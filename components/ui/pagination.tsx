import { Slot } from "@radix-ui/react-slot"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import type { ComponentProps } from "react"

import {
  buttonVariants,
  type ButtonVariantProps,
} from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

/**
 * Props for the pagination landmark.
 */
type PaginationProps = ComponentProps<"nav">

/**
 * Accessible pagination root. Compose Content / Item / Link / Previous / Next /
 * Ellipsis. Use `asChild` on links to render Next.js `Link`.
 */
const Pagination = ({ className, ...props }: PaginationProps) => {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

/**
 * Props for the page list.
 */
type PaginationContentProps = ComponentProps<"ul">

/**
 * Horizontal list of pagination items.
 */
const PaginationContent = ({ className, ...props }: PaginationContentProps) => {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

/**
 * Props for a single list item.
 */
type PaginationItemProps = ComponentProps<"li">

/**
 * List item wrapper around a link, previous/next, or ellipsis.
 */
const PaginationItem = ({ className, ...props }: PaginationItemProps) => {
  return (
    <li data-slot="pagination-item" className={cn("", className)} {...props} />
  )
}

type PaginationLinkProps = ComponentProps<"a"> &
  Pick<ButtonVariantProps, "size"> & {
    /** Marks the current page for assistive tech and outline styling. */
    readonly isActive?: boolean
    /** Render as child element (e.g. Next.js `Link`) via Radix Slot. */
    readonly asChild?: boolean
  }

/**
 * Page control styled like a Button. Active pages use the outline variant.
 */
const PaginationLink = ({
  className,
  isActive = false,
  size = "icon",
  asChild = false,
  ...props
}: PaginationLinkProps) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive ? "" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the previous-page control.
 */
type PaginationPreviousProps = ComponentProps<typeof PaginationLink>

/**
 * Previous page control. Chevron flips in RTL.
 * With `asChild`, pass a single child (e.g. `button` / `Link`) that owns the label.
 */
const PaginationPrevious = ({
  className,
  children,
  asChild = false,
  size = "default",
  ...props
}: PaginationPreviousProps) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size={size}
      className={cn(
        "gap-1",
        size === "default" && "px-2.5 sm:pe-4",
        className
      )}
      asChild={asChild}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          <ChevronLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
          <span className="hidden sm:inline">{children ?? "Previous"}</span>
        </>
      )}
    </PaginationLink>
  )
}

/**
 * Props for the next-page control.
 */
type PaginationNextProps = ComponentProps<typeof PaginationLink>

/**
 * Next page control. Chevron flips in RTL.
 * With `asChild`, pass a single child (e.g. `button` / `Link`) that owns the label.
 */
const PaginationNext = ({
  className,
  children,
  asChild = false,
  size = "default",
  ...props
}: PaginationNextProps) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size={size}
      className={cn(
        "gap-1",
        size === "default" && "px-2.5 sm:ps-4",
        className
      )}
      asChild={asChild}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          <span className="hidden sm:inline">{children ?? "Next"}</span>
          <ChevronRight aria-hidden="true" className="size-4 rtl:rotate-180" />
        </>
      )}
    </PaginationLink>
  )
}

/**
 * Props for the collapsed-pages marker.
 */
type PaginationEllipsisProps = ComponentProps<"span">

/**
 * Ellipsis when page numbers are truncated.
 */
const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" aria-hidden="true" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
export type {
  PaginationProps,
  PaginationContentProps,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationEllipsisProps,
}
