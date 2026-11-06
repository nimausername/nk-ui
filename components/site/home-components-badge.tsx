import Link from "next/link"

import { NkMark } from "@/components/site/nk-mark"
import { Badge } from "@/components/ui/badge"
import { componentItems } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type HomeComponentsBadgeProps = {
  readonly className?: string
}

/**
 * Compact hero badge — mark, total component count, and recently added.
 */
const HomeComponentsBadge = ({ className }: HomeComponentsBadgeProps) => {
  return (
    <Badge
      variant="outline"
      size="lg"
      asChild
      className={cn(
        "max-w-full gap-1.5 bg-background/75 pe-2.5 ps-1 shadow-sm backdrop-blur-md",
        "hover:border-foreground/25 hover:bg-background/90",
        className
      )}
    >
      <Link
        href="/docs/components"
        className="inline-flex min-w-0 max-w-full items-center gap-1.5"
      >
        <NkMark size="sm" />
        <span className="min-w-0 truncate text-muted-foreground">
          <span className="tabular-nums text-foreground">{componentItems.length}</span>
          <span className="sm:hidden">
            {" · "}
            <span className="tabular-nums text-foreground">
              +{siteConfig.newlyAddedCount}
            </span>
            {" new"}
          </span>
          <span className="hidden sm:inline">
            {` ${siteConfig.badgeLabel} · `}
            <span className="tabular-nums text-foreground">
              +{siteConfig.newlyAddedCount}
            </span>
            {" new"}
          </span>
        </span>
      </Link>
    </Badge>
  )
}

export { HomeComponentsBadge }
export type { HomeComponentsBadgeProps }
