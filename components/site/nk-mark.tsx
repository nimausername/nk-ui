import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type NkMarkProps = ComponentProps<"span"> & {
  /**
   * Visual size of the mark.
   * - `sm` matches the docs sidebar breadcrumb (size-5 / 10px type).
   * - `md` is for the site header.
   */
  readonly size?: "sm" | "md"
}

const sizeClassName = {
  sm: "size-5 text-[10px]",
  md: "size-6 text-[11px]",
} as const

/**
 * nk brand mark — same inverted rounded square used in the docs sidebar breadcrumb.
 * Uses `bg-foreground` / `text-background` so it flips correctly in light and dark.
 */
const NkMark = ({ className, size = "sm", ...props }: NkMarkProps) => {
  return (
    <span
      data-slot="nk-mark"
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-sm bg-foreground font-semibold tracking-tight text-background select-none",
        sizeClassName[size],
        className
      )}
      {...props}
    >
      nk
    </span>
  )
}

export { NkMark }
export type { NkMarkProps }
