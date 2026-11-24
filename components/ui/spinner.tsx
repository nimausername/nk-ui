import {
  CircleDashed,
  Loader,
  Loader2,
  LoaderCircle,
  LoaderPinwheel,
  RefreshCw,
  type LucideIcon,
} from "lucide-react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Lucide glyphs that read as a spinner when they rotate.
 */
const spinnerIcons = {
  loader: Loader,
  "loader-2": Loader2,
  circle: LoaderCircle,
  pinwheel: LoaderPinwheel,
  dashed: CircleDashed,
  refresh: RefreshCw,
} as const satisfies Record<string, LucideIcon>

/**
 * Which spinner glyph to draw. Defaults to the open arc (`loader-2`).
 */
type SpinnerIcon = keyof typeof spinnerIcons

/**
 * Props for the loading spinner.
 */
type SpinnerProps = ComponentProps<typeof Loader2> & {
  /** Glyph. Size and color still come from `className`. */
  readonly icon?: SpinnerIcon
}

/**
 * Indeterminate loading mark. Size and color via `className` (`size-*`, `text-*`).
 * Announces “Loading” unless you pass a different `aria-label`.
 */
const Spinner = ({
  className,
  icon = "loader-2",
  ...props
}: SpinnerProps) => {
  const Icon = spinnerIcons[icon]

  return (
    <Icon
      data-slot="spinner"
      data-icon={icon}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner, spinnerIcons }
export type { SpinnerIcon, SpinnerProps }
