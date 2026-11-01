"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefCallback,
} from "react"

/** Scroll axis for direction-aware exit-edge fades. */
type ScrollFadeAxis = "y" | "x" | "inline"

/** Values written to `data-scroll-fade-dir` while scrolling. */
type ScrollFadeDirection = "up" | "down" | "left" | "right" | "start" | "end"

type UseScrollFadeDirectionOptions = {
  /** Axis to observe. Defaults to `"y"`. Use `"inline"` for RTL-aware horizontal scroll. */
  readonly axis?: ScrollFadeAxis
  /** Milliseconds after the last scroll before clearing the direction override. */
  readonly idleMs?: number
  /** Minimum scroll delta (px) before updating direction. */
  readonly threshold?: number
}

const ATTR = "data-scroll-fade-dir"

/**
 * Returns true when the element overflows on the observed axis.
 */
const hasOverflow = (element: HTMLElement, axis: ScrollFadeAxis): boolean => {
  if (axis === "y") {
    return element.scrollHeight > element.clientHeight + 1
  }
  return element.scrollWidth > element.clientWidth + 1
}

/**
 * Maps a scroll delta to the exit-edge direction token.
 * For `"inline"`, flips interpretation under `direction: rtl` so start/end
 * track reading direction (Chromium uses negative `scrollLeft` in RTL).
 */
const directionFromDelta = (
  delta: number,
  axis: ScrollFadeAxis,
  isRtl: boolean
): ScrollFadeDirection | null => {
  if (delta === 0) {
    return null
  }

  if (axis === "y") {
    return delta > 0 ? "down" : "up"
  }

  if (axis === "x") {
    return delta > 0 ? "right" : "left"
  }

  if (isRtl) {
    return delta < 0 ? "end" : "start"
  }

  return delta > 0 ? "end" : "start"
}

/**
 * Reads the scroll offset for the given axis.
 */
const readScrollOffset = (element: HTMLElement, axis: ScrollFadeAxis): number => {
  if (axis === "y") {
    return element.scrollTop
  }
  return element.scrollLeft
}

/**
 * Attaches a passive scroll listener that sets `data-scroll-fade-dir` while
 * scrolling so `.scroll-fade-smart` can fade the exit edge. Clears the attribute
 * after `idleMs` so position-aware `scroll-fade` resumes.
 *
 * Pair with `scroll-fade scroll-fade-smart` on the same overflow element
 * (e.g. a Scroll Area viewport).
 *
 * @returns Callback ref to assign to the scroll container.
 */
const useScrollFadeDirection = <T extends HTMLElement = HTMLElement>(
  options: UseScrollFadeDirectionOptions = {}
): RefCallback<T> => {
  const axis = options.axis ?? "y"
  const idleMs = options.idleMs ?? 200
  const threshold = options.threshold ?? 1

  const [element, setElement] = useState<T | null>(null)
  const lastOffsetRef = useRef(0)
  const idleTimerRef = useRef<number | null>(null)

  const ref = useCallback<RefCallback<T>>((node) => {
    setElement(node)
  }, [])

  useEffect(() => {
    if (!element) {
      return
    }

    lastOffsetRef.current = readScrollOffset(element, axis)

    const clearDirection = () => {
      element.removeAttribute(ATTR)
    }

    const clearIdleTimer = () => {
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current)
        idleTimerRef.current = null
      }
    }

    const scheduleIdleClear = () => {
      clearIdleTimer()
      idleTimerRef.current = window.setTimeout(() => {
        clearDirection()
        idleTimerRef.current = null
      }, idleMs)
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleScroll = () => {
      if (media.matches) {
        return
      }

      if (!hasOverflow(element, axis)) {
        clearDirection()
        clearIdleTimer()
        return
      }

      const offset = readScrollOffset(element, axis)
      const delta = offset - lastOffsetRef.current
      lastOffsetRef.current = offset

      if (Math.abs(delta) < threshold) {
        scheduleIdleClear()
        return
      }

      const isRtl = getComputedStyle(element).direction === "rtl"
      const direction = directionFromDelta(delta, axis, isRtl)
      if (direction) {
        element.setAttribute(ATTR, direction)
      }
      scheduleIdleClear()
    }

    const handleMotionChange = () => {
      if (media.matches) {
        clearDirection()
        clearIdleTimer()
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      if (!hasOverflow(element, axis)) {
        clearDirection()
        clearIdleTimer()
      }
    })

    media.addEventListener("change", handleMotionChange)
    element.addEventListener("scroll", handleScroll, { passive: true })
    resizeObserver.observe(element)

    return () => {
      media.removeEventListener("change", handleMotionChange)
      element.removeEventListener("scroll", handleScroll)
      resizeObserver.disconnect()
      clearIdleTimer()
      clearDirection()
    }
  }, [axis, element, idleMs, threshold])

  return ref
}

export { useScrollFadeDirection }
export type {
  ScrollFadeAxis,
  ScrollFadeDirection,
  UseScrollFadeDirectionOptions,
}
