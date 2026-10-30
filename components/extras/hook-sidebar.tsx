"use client"

import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react"

import { cn } from "@/lib/utils"

const CORNER = 6
const DASH =
  "repeating-linear-gradient(to top, transparent 0 2px, currentColor 2px 4px)"

export type HookSidebarItem = string | { label: string; href?: string }

export type HookSidebarProps = Omit<ComponentProps<"nav">, "onChange"> & {
  readonly items: readonly HookSidebarItem[]
  readonly label?: string
  readonly value?: number
  readonly defaultValue?: number
  readonly onChange?: (index: number) => void
  readonly color?: string
  readonly dashed?: boolean
}

const hrefOf = (item: HookSidebarItem) =>
  typeof item === "string" ? undefined : item.href

const labelOf = (item: HookSidebarItem) =>
  typeof item === "string" ? item : item.label

type RailProps = {
  readonly from?: number
  readonly y: number | null
  readonly visible: boolean
  readonly color?: string
  readonly dashed: boolean
  readonly className?: string
}

/**
 * Animated vertical rail + corner hook that tracks active or hover position.
 */
const Rail = ({
  from = 0,
  y,
  visible,
  color,
  dashed,
  className,
}: RailProps) => {
  const reduced = useReducedMotion()
  const travel = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.7 }

  return (
    <motion.span
      aria-hidden="true"
      initial={false}
      style={{ color }}
      animate={{ opacity: visible && y !== null ? 1 : 0 }}
      transition={reduced ? { duration: 0 } : { duration: 0.2 }}
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <motion.span
        initial={false}
        animate={{ top: from, height: Math.max(0, (y ?? 0) - CORNER - from) }}
        transition={travel}
        style={
          dashed
            ? { backgroundImage: DASH }
            : { backgroundColor: "currentColor" }
        }
        className="absolute start-0.5 w-px"
      />
      <motion.svg
        initial={false}
        animate={{ top: (y ?? 0) - CORNER }}
        transition={travel}
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        className="absolute start-0.5"
      >
        <path
          d="M0.5 0a6 6 0 0 0 6 6H12"
          stroke="currentColor"
          strokeDasharray={dashed ? "2 2" : undefined}
        />
      </motion.svg>
    </motion.span>
  )
}

/**
 * Animated dashed hook sidebar.
 *
 * Lives in `components/extras` (reusable, not yet in the @nk registry).
 * Used today by the docs site; may be published later as `@nk/hook-sidebar`.
 */
const HookSidebar = ({
  items,
  label,
  value,
  defaultValue = 0,
  onChange,
  color,
  dashed = true,
  className,
  ...props
}: HookSidebarProps) => {
  const pathname = usePathname()
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [centers, setCenters] = useState<number[]>([])
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [pointerInside, setPointerInside] = useState(false)
  const [focusInside, setFocusInside] = useState(false)

  const routed = items.some((item) => hrefOf(item))
  const routeIndex = items.findIndex((item) => hrefOf(item) === pathname)
  const activeIndex = value ?? (routed ? routeIndex : internalValue)

  useEffect(() => {
    const list = listRef.current
    if (!list) {
      return
    }

    const measure = () => {
      setCenters(
        itemRefs.current.map((el) =>
          el ? el.offsetTop + el.offsetHeight / 2 : 0
        )
      )
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [items])

  const activeY = activeIndex < 0 ? null : (centers[activeIndex] ?? null)
  const hoverY = hoverIndex === null ? null : (centers[hoverIndex] ?? null)

  const hoverFrom =
    activeY !== null && hoverY !== null && hoverY <= activeY
      ? Math.max(0, hoverY - CORNER)
      : (activeY ?? 0)

  const handleSelect = (index: number) => {
    if (value === undefined) {
      setInternalValue(index)
    }
    onChange?.(index)
  }

  return (
    <nav
      data-slot="hook-sidebar"
      aria-label={label}
      className={cn("flex flex-col", className)}
      {...props}
    >
      {label ? (
        <span
          data-slot="hook-sidebar-label"
          className="pb-3 ps-0.5 pe-2 text-xs font-medium tracking-wide text-muted-foreground uppercase"
        >
          {label}
        </span>
      ) : null}

      <div
        ref={listRef}
        onMouseLeave={() => setPointerInside(false)}
        className="relative flex flex-col gap-0.5"
      >
        <Rail
          from={hoverFrom}
          y={hoverY}
          visible={(pointerInside || focusInside) && hoverIndex !== activeIndex}
          dashed={dashed}
          className="text-foreground/30"
        />
        <Rail
          y={activeY}
          visible={activeY !== null}
          color={color}
          dashed={dashed}
          className="text-foreground"
        />

        {items.map((item, index) => {
          const text = labelOf(item)
          const href = hrefOf(item)
          const isActive = index === activeIndex
          const setRef = (el: HTMLElement | null) => {
            itemRefs.current[index] = el
          }
          const rowClassName = cn(
            "rounded-md py-1.5 ps-5 pe-2 text-start text-sm transition-colors duration-200 motion-reduce:transition-none",
            isActive
              ? "font-medium text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )

          if (href) {
            return (
              <Link
                key={`${index}-${text}`}
                ref={setRef}
                href={href}
                data-slot="hook-sidebar-item"
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={() => {
                  setHoverIndex(index)
                  setPointerInside(true)
                }}
                onFocus={() => {
                  setHoverIndex(index)
                  setFocusInside(true)
                }}
                onBlur={() => setFocusInside(false)}
                onClick={() => handleSelect(index)}
                className={rowClassName}
              >
                {text}
              </Link>
            )
          }

          return (
            <button
              key={`${index}-${text}`}
              ref={setRef}
              type="button"
              data-slot="hook-sidebar-item"
              data-active={isActive}
              aria-current={isActive ? "true" : undefined}
              onMouseEnter={() => {
                setHoverIndex(index)
                setPointerInside(true)
              }}
              onFocus={() => {
                setHoverIndex(index)
                setFocusInside(true)
              }}
              onBlur={() => setFocusInside(false)}
              onClick={() => handleSelect(index)}
              className={rowClassName}
            >
              {text}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export { HookSidebar }
