import { SearchX } from "lucide-react"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type CommandEmptyIllustrationProps = ComponentProps<typeof SearchX>

/**
 * Minimal empty-command mark — Lucide SearchX (ISC).
 * Keeps the Command empty demo light; no scene illustration.
 */
const CommandEmptyIllustration = ({
  className,
  ...props
}: CommandEmptyIllustrationProps) => {
  return (
    <SearchX
      aria-hidden
      strokeWidth={1.5}
      className={cn("size-10 text-muted-foreground", className)}
      {...props}
    />
  )
}

export { CommandEmptyIllustration }
export type { CommandEmptyIllustrationProps }
