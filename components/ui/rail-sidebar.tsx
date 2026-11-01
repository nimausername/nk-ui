"use client"

import { motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

const CORNER = 6
const DASH =
  "repeating-linear-gradient(to top, transparent 0 2px, currentColor 2px 4px)"

export type RailSidebarItem =
  | string
  | {
      label: string
      href?: string
      /** Optional leading mark (e.g. framework brand). */
      icon?: ReactNode
      /** Nested links rendered as indented sub-items. */
      items?: readonly RailSidebarItem[]
    }

export type RailSidebarProps = Omit<ComponentProps<"nav">, "onChange" | "dir"> & {
  readonly items: readonly RailSidebarItem[]
  readonly label?: string
  readonly value?: number
  readonly defaultValue?: number
  readonly onChange?: (index: number) => void
  readonly color?: string
  readonly dashed?: boolean
  /**
   * Writing direction for rail, indent, and leading icons. When omitted,
   * direction is read from the nearest ancestor `dir`.
   */
  readonly dir?: "ltr" | "rtl"
}

type FlatSidebarItem = {
  readonly label: string
  readonly href?: string
  readonly icon?: ReactNode
  readonly depth: number
  /** Flat index of the nearest parent item, if nested. */
  readonly parentIndex: number | null
}

const hrefOf = (item: RailSidebarItem) =>
  typeof item === "string" ? undefined : item.href

const labelOf = (item: RailSidebarItem) =>
  typeof item === "string" ? item : item.label

const iconOf = (item: RailSidebarItem) =>
  typeof item === "string" ? undefined : item.icon

const childrenOf = (item: RailSidebarItem) =>
  typeof item === "string" ? undefined : item.items

/**
 * Flattens nested sidebar items for rail indexing while keeping depth + parent.
 */
const flattenItems = (
  items: readonly RailSidebarItem[],
  depth = 0,
  parentIndex: number | null = null,
  flat: FlatSidebarItem[] = []
): FlatSidebarItem[] => {
  for (const item of items) {
    const index = flat.length
    flat.push({
      label: labelOf(item),
      href: hrefOf(item),
      icon: iconOf(item),
      depth,
      parentIndex,
    })
    const children = childrenOf(item)
    if (children?.length) {
      flattenItems(children, depth + 1, index, flat)
    }
  }

  return flat
}

/**
 * Picks the best matching route index (longest href wins for nested pages).
 */
const findActiveIndex = (flat: readonly FlatSidebarItem[], pathname: string) => {
  let bestIndex = -1
  let bestLength = -1

  flat.forEach((item, index) => {
    if (!item.href) {
      return
    }
    if (item.href === pathname && item.href.length > bestLength) {
      bestIndex = index
      bestLength = item.href.length
    }
  })

  return bestIndex
}

type RailProps = {
  readonly from?: number
  readonly y: number | null
  readonly visible: boolean
  readonly color?: string
  readonly dashed: boolean
  readonly className?: string
  /** Shift the vertical stroke for nested rails (logical px from inline-start). */
  readonly insetStart?: number
  readonly rtl: boolean
}

const HOOK_PATH_LTR = "M0.5 0a6 6 0 0 0 6 6H12"
const HOOK_PATH_RTL = "M11.5 0a6 6 0 0 1 -6 6H0"

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
  insetStart = 0,
  rtl,
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
        style={{
          insetInlineStart: insetStart,
          ...(dashed
            ? { backgroundImage: DASH }
            : { backgroundColor: "currentColor" }),
        }}
        className="absolute w-px"
      />
      <motion.svg
        initial={false}
        animate={{ top: (y ?? 0) - CORNER }}
        transition={travel}
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        style={{ insetInlineStart: insetStart }}
        className="absolute"
      >
        <path
          d={rtl ? HOOK_PATH_RTL : HOOK_PATH_LTR}
          stroke="currentColor"
          strokeDasharray={dashed ? "2 2" : undefined}
        />
      </motion.svg>
    </motion.span>
  )
}

/**
 * Animated dashed-rail sidebar (publishable `@nk/rail-sidebar` composite).
 *
 * Nested active items draw two rails: one from the list top to the parent,
 * and a second from the parent to the nested leaf.
 * Uses Next.js `Link` / `usePathname` for active routing.
 *
 * Concept adapted from Rare UI HookSidebar by Swami Malode; nk ships this as Rail Sidebar.
 * The docs site keeps a separate fork in `components/docs/docs-rail-sidebar.tsx`.
 */
const RailSidebar = ({
  items,
  label,
  value,
  defaultValue = 0,
  onChange,
  color,
  dashed = true,
  dir: dirProp,
  className,
  ...props
}: RailSidebarProps) => {
  const pathname = usePathname()
  const rootRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [centers, setCenters] = useState<number[]>([])
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [focusIndex, setFocusIndex] = useState<number | null>(null)
  const [pointerInside, setPointerInside] = useState(false)
  const [detectedDir, setDetectedDir] = useState<"ltr" | "rtl">("ltr")

  const dir = dirProp ?? detectedDir
  const isRtl = dir === "rtl"

  const flatItems = useMemo(() => flattenItems(items), [items])
  const routed = flatItems.some((item) => item.href)
  const routeIndex = findActiveIndex(flatItems, pathname)
  const activeIndex = value ?? (routed ? routeIndex : internalValue)
  /**
   * Pointer owns the preview rail while inside the list. After leave, only the
   * focused item may preview — never a stale hoverIndex left by the last pass
   * (click keeps focus on the active link and previously stuck the hover rail).
   */
  const previewIndex = pointerInside ? hoverIndex : focusIndex

  useLayoutEffect(() => {
    if (dirProp) {
      return
    }

    const root = rootRef.current
    if (!root) {
      return
    }

    const readDirection = () => {
      setDetectedDir(getComputedStyle(root).direction === "rtl" ? "rtl" : "ltr")
    }

    readDirection()

    const observer = new MutationObserver(readDirection)
    let node: HTMLElement | null = root
    while (node) {
      observer.observe(node, { attributes: true, attributeFilter: ["dir", "class"] })
      node = node.parentElement
    }

    return () => observer.disconnect()
  }, [dirProp])

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
  }, [flatItems, dir])

  const activeItem = activeIndex >= 0 ? flatItems[activeIndex] : undefined
  const activeParentIndex = activeItem?.parentIndex ?? null
  const activeParentY =
    activeParentIndex !== null ? (centers[activeParentIndex] ?? null) : null
  const activeLeafY = activeIndex < 0 ? null : (centers[activeIndex] ?? null)

  /** Top-level rail ends at the parent when a nested leaf is active. */
  const activeRootY = activeParentY !== null ? activeParentY : activeLeafY

  const previewItem =
    previewIndex !== null ? flatItems[previewIndex] : undefined
  const previewParentIndex = previewItem?.parentIndex ?? null
  const previewParentY =
    previewParentIndex !== null ? (centers[previewParentIndex] ?? null) : null
  const previewLeafY =
    previewIndex === null ? null : (centers[previewIndex] ?? null)

  const previewRootY =
    previewParentY !== null ? previewParentY : previewLeafY

  const previewRootFrom =
    activeRootY !== null &&
    previewRootY !== null &&
    previewRootY <= activeRootY
      ? Math.max(0, previewRootY - CORNER)
      : (activeRootY ?? 0)

  const nestedActiveVisible =
    activeParentY !== null &&
    activeLeafY !== null &&
    activeParentIndex !== null &&
    activeIndex !== activeParentIndex

  const previewVisible =
    previewIndex !== null &&
    previewIndex !== activeIndex &&
    previewRootY !== null

  const nestedPreviewVisible =
    previewVisible &&
    previewParentY !== null &&
    previewLeafY !== null &&
    previewParentIndex !== null &&
    previewIndex !== previewParentIndex

  const nestedPreviewFrom =
    nestedActiveVisible &&
    activeParentIndex === previewParentIndex &&
    previewLeafY !== null &&
    activeLeafY !== null &&
    previewLeafY <= activeLeafY
      ? Math.max(activeParentY ?? 0, previewLeafY - CORNER)
      : (previewParentY ?? activeParentY ?? 0)

  const handleSelect = (index: number) => {
    if (value === undefined) {
      setInternalValue(index)
    }
    onChange?.(index)
  }

  return (
    <nav
      ref={rootRef}
      data-slot="rail-sidebar"
      aria-label={label}
      dir={dir}
      className={cn("flex w-full flex-col", className)}
      {...props}
    >
      {label ? (
        <span
          data-slot="rail-sidebar-label"
          className="pb-3 ps-0.5 pe-2 text-start text-xs font-medium tracking-wide text-muted-foreground uppercase"
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
          from={previewRootFrom}
          y={previewRootY}
          visible={
            previewVisible &&
            !(
              nestedActiveVisible &&
              previewParentIndex === activeParentIndex &&
              previewItem?.depth &&
              previewItem.depth > 0
            )
          }
          dashed={dashed}
          rtl={isRtl}
          className="text-foreground/30"
        />
        <Rail
          y={activeRootY}
          visible={activeRootY !== null}
          color={color}
          dashed={dashed}
          rtl={isRtl}
          className="text-foreground"
        />
        <Rail
          from={nestedPreviewFrom}
          y={previewLeafY}
          visible={Boolean(nestedPreviewVisible)}
          dashed={dashed}
          insetStart={14}
          rtl={isRtl}
          className="text-foreground/30"
        />
        <Rail
          from={activeParentY ?? 0}
          y={activeLeafY}
          visible={Boolean(nestedActiveVisible)}
          color={color}
          dashed={dashed}
          insetStart={14}
          rtl={isRtl}
          className="text-foreground"
        />

        {flatItems.map((item, index) => {
          const isActive = index === activeIndex
          const isActiveAncestor =
            activeParentIndex !== null && index === activeParentIndex
          const setRef = (el: HTMLElement | null) => {
            itemRefs.current[index] = el
          }
          const handlePointerEnter = () => {
            setHoverIndex(index)
            setPointerInside(true)
          }
          const handleFocus = () => {
            setFocusIndex(index)
          }
          const handleBlur = () => {
            setFocusIndex((current) => (current === index ? null : current))
          }
          const rowClassName = cn(
            "flex w-full items-center gap-2 rounded-md py-1.5 pe-2 text-start text-sm transition-colors duration-200 motion-reduce:transition-none",
            item.depth > 0 ? "ps-9" : "ps-5",
            isActive || isActiveAncestor
              ? "font-medium text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )
          const content = (
            <>
              {item.icon ? (
                <span
                  data-slot="rail-sidebar-icon"
                  className="inline-flex size-3.5 shrink-0 items-center justify-center [unicode-bidi:isolate] [&_svg]:size-3.5"
                >
                  {item.icon}
                </span>
              ) : null}
              <span className="min-w-0 truncate [unicode-bidi:plaintext]">
                {item.label}
              </span>
            </>
          )

          if (item.href) {
            return (
              <Link
                key={`${index}-${item.label}-${item.href}`}
                ref={setRef}
                href={item.href}
                data-slot="rail-sidebar-item"
                data-active={isActive}
                data-depth={item.depth}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={handlePointerEnter}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={() => handleSelect(index)}
                className={rowClassName}
              >
                {content}
              </Link>
            )
          }

          return (
            <button
              key={`${index}-${item.label}`}
              ref={setRef}
              type="button"
              data-slot="rail-sidebar-item"
              data-active={isActive}
              data-depth={item.depth}
              aria-current={isActive ? "true" : undefined}
              onMouseEnter={handlePointerEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={() => handleSelect(index)}
              className={rowClassName}
            >
              {content}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export { RailSidebar }
