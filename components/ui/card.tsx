import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the card root.
 */
type CardProps = ComponentProps<"div">

/**
 * Bordered surface for grouping related content. Compose Header / Content / Footer.
 */
const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl border border-border bg-card py-6 text-card-foreground shadow-sm",
        "ring-1 ring-foreground/5",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the card header.
 */
type CardHeaderProps = ComponentProps<"div">

/**
 * Top region for title, description, and optional action.
 * Uses a grid so CardAction can sit in the end column.
 */
const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the card title.
 */
type CardTitleProps = ComponentProps<"div">

/**
 * Primary heading inside CardHeader.
 */
const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn("text-base leading-snug font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * Props for the card description.
 */
type CardDescriptionProps = ComponentProps<"div">

/**
 * Supporting copy under the title.
 */
const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground text-pretty", className)}
      {...props}
    />
  )
}

/**
 * Props for an optional header action (button / menu).
 */
type CardActionProps = ComponentProps<"div">

/**
 * End-aligned control in CardHeader (e.g. menu or secondary button).
 */
const CardAction = ({ className, ...props }: CardActionProps) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the card body.
 */
type CardContentProps = ComponentProps<"div">

/**
 * Main content area below the header.
 */
const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Props for the card footer.
 */
type CardFooterProps = ComponentProps<"div">

/**
 * Bottom actions / meta row. Add a top border via className when needed.
 */
const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center gap-2 px-6 [.border-t]:pt-6",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
}
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardActionProps,
  CardContentProps,
  CardFooterProps,
}
