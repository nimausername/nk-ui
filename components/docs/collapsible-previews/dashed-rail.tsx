import { Children, type ComponentProps, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Same dash pattern as Rail Sidebar (`2px` on / `2px` off via repeating gradient).
 */
const RAIL_SIDEBAR_DASH =
  "repeating-linear-gradient(to top, transparent 0 2px, currentColor 2px 4px)"

const CORNER = 6
/** First-row center for `min-h-8` / py-1 rows — hooks pin here, not the block middle. */
const ROW_HALF = 16
const HOOK_PATH_LTR = "M0.5 0a6 6 0 0 0 6 6H12"
const HOOK_PATH_RTL = "M11.5 0a6 6 0 0 1 -6 6H0"

type DashedRailProps = Omit<ComponentProps<"div">, "children"> & {
  readonly children: ReactNode
  /** Writing direction for the corner hook. */
  readonly dir?: "ltr" | "rtl"
}

/**
 * Always-on nested guide: one continuous dashed rail + a corner hook into each
 * sub-item’s first row (so open nested folders still get a hook on the folder
 * label, not the middle of the expanded panel).
 */
const DashedRail = ({
  className,
  children,
  dir = "ltr",
  style,
  ...props
}: DashedRailProps) => {
  const items = Children.toArray(children).filter(Boolean)
  const isRtl = dir === "rtl"
  const hookPath = isRtl ? HOOK_PATH_RTL : HOOK_PATH_LTR
  const hookTop = ROW_HALF - CORNER

  return (
    <div
      className={cn("relative ms-3.5 flex flex-col gap-1.5", className)}
      style={style}
      {...props}
    >
      {/* Single main rail — ends at the last item’s first-row hook origin. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute start-0 top-0 w-px text-border"
        style={{
          backgroundImage: RAIL_SIDEBAR_DASH,
          height: `calc(100% - ${ROW_HALF + CORNER}px)`,
        }}
      />

      {items.map((child, index) => (
        <div key={index} className="relative min-h-8 ps-3">
          <svg
            aria-hidden="true"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            className="pointer-events-none absolute start-0 text-border"
            style={{ top: hookTop }}
          >
            <path d={hookPath} stroke="currentColor" strokeDasharray="2 2" />
          </svg>
          <div className="min-w-0">{child}</div>
        </div>
      ))}
    </div>
  )
}

export { DashedRail, RAIL_SIDEBAR_DASH }
