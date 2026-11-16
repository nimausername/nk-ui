import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the empty-state root.
 */
type EmptyProps = ComponentProps<"div">

/**
 * Centered empty-state shell — compose Media / Header / Title / Description / Content.
 * Add `border` for a dashed outline (default border style is dashed).
 */
const Empty = ({ className, ...props }: EmptyProps) => {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the empty header cluster.
 */
type EmptyHeaderProps = ComponentProps<"div">

/**
 * Groups media + title + description above actions.
 */
const EmptyHeader = ({ className, ...props }: EmptyHeaderProps) => {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex max-w-sm flex-col items-center gap-2", className)}
      {...props}
    />
  )
}

/**
 * Visual variants for empty media (icon tile vs raw illustration).
 */
const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type EmptyMediaVariantProps = VariantProps<typeof emptyMediaVariants>

/**
 * Props for empty media (icon tile or illustration).
 */
type EmptyMediaProps = ComponentProps<"div"> & EmptyMediaVariantProps

/**
 * Leading visual — `variant="icon"` wraps a glyph in a muted tile; default is bare.
 */
const EmptyMedia = ({
  className,
  variant = "default",
  ...props
}: EmptyMediaProps) => {
  return (
    <div
      data-slot="empty-media"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

/**
 * Props for the empty title.
 */
type EmptyTitleProps = ComponentProps<"div">

/**
 * Short heading for the empty state.
 */
const EmptyTitle = ({ className, ...props }: EmptyTitleProps) => {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-sm font-medium tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Props for the empty description.
 */
type EmptyDescriptionProps = ComponentProps<"div">

/**
 * Supporting copy under the title. Links inherit underline styles.
 */
const EmptyDescription = ({ className, ...props }: EmptyDescriptionProps) => {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the empty content / actions row.
 */
type EmptyContentProps = ComponentProps<"div">

/**
 * Actions and extra controls under the header (buttons, search, links).
 */
const EmptyContent = ({ className, ...props }: EmptyContentProps) => {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  emptyMediaVariants,
}
export type {
  EmptyContentProps,
  EmptyDescriptionProps,
  EmptyHeaderProps,
  EmptyMediaProps,
  EmptyProps,
  EmptyTitleProps,
}
