"use client"

import { useTheme } from "@teispace/next-themes"
import { useSyncExternalStore } from "react"

import { NkMark } from "@/components/site/nk-mark"
import { ShaderBackground } from "@/components/ui/shader-background"

/** Same decorative ramps as the marketing home mist — not theme tokens. */
const MIST_DARK_COLORS = ["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]
const MIST_LIGHT_COLORS = ["#c4b5fd", "#93c5fd", "#fbcfe8", "#e2e8f0"]

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

type CardBrandMistFieldProps = {
  readonly className?: string
}

/**
 * Home mist atmosphere — absolute fill for cover or full-card backgrounds.
 */
const CardBrandMistField = ({ className }: CardBrandMistFieldProps) => {
  const isClient = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )
  const { resolvedTheme } = useTheme()
  const isDark = !isClient || resolvedTheme !== "light"

  return (
    <ShaderBackground
      effect="mist"
      className={className}
      colors={isDark ? MIST_DARK_COLORS : MIST_LIGHT_COLORS}
      colorBack={isDark ? "#000000" : "#ffffff"}
      softness={isDark ? 0.65 : 0.88}
      speed={isDark ? 0.45 : 0.3}
    />
  )
}

/**
 * Card media cover — home mist + nk mark (brand identity on brand atmosphere).
 */
const CardBrandMistCover = () => {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/9] w-full overflow-hidden bg-black"
    >
      <CardBrandMistField className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <NkMark
          size="md"
          className="size-12 rounded-md text-lg shadow-sm sm:size-14 sm:text-xl"
        />
        <span className="text-sm font-medium tracking-tight text-white mix-blend-difference">
          UI you own
        </span>
      </div>
    </div>
  )
}

export { CardBrandMistCover, CardBrandMistField }
export type { CardBrandMistFieldProps }
