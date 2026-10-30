import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Accessible breadcrumb root. Compose List / Item / Link / Page / Separator
 * for every layout (icons, slash, chevron, collapsed, RTL-friendly text).
 */
const Breadcrumb = ({ ...props }: ComponentProps<"nav">) => {
  return <nav aria-label="Breadcrumb" data-slot="breadcrumb" {...props} />
}

/**
 * Ordered list wrapper for breadcrumb items.
 */
const BreadcrumbList = ({ className, ...props }: ComponentProps<"ol">) => {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

/**
 * Single crumb row item.
 */
const BreadcrumbItem = ({ className, ...props }: ComponentProps<"li">) => {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

type BreadcrumbLinkProps = ComponentProps<"a"> & {
  readonly asChild?: boolean
}

/**
 * Navigational crumb. Use `asChild` to render Next.js `Link` (or any custom link).
 */
const BreadcrumbLink = ({ asChild = false, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

/**
 * Current page crumb (non-interactive).
 */
const BreadcrumbPage = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  )
}

type BreadcrumbSeparatorProps = ComponentProps<"li"> & {
  readonly children?: ReactNode
}

/**
 * Separator between crumbs. Pass children to customize (slash, icon, etc.).
 */
const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

/**
 * Collapsed crumbs affordance (menu trigger usually wraps this).
 */
const BreadcrumbEllipsis = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
