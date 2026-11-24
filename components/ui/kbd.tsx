import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for a single keycap.
 */
type KbdProps = ComponentProps<"kbd">

/**
 * One keyboard key. Compose several inside `KbdGroup` for a chord.
 */
const Kbd = ({ className, ...props }: KbdProps) => {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
        "in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10",
        "[&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for a chord of keycaps.
 */
type KbdGroupProps = ComponentProps<"kbd">

/**
 * A shortcut chord. Renders a `kbd` so nested keys stay in one hint.
 */
const KbdGroup = ({ className, ...props }: KbdGroupProps) => {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
export type { KbdGroupProps, KbdProps }
