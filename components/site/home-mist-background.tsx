"use client"

import { useTheme } from "@teispace/next-themes"
import { useSyncExternalStore } from "react"

import { ShaderBackground } from "@/components/ui/shader-background"
import { cn } from "@/lib/utils"

/**
 * Decorative hero ramps only — not theme tokens.
 * Dark: violet / sky mist. Light: soft pastel grain. UI chrome stays nk B/W.
 */
const DARK_COLORS = ["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]
const LIGHT_COLORS = ["#c4b5fd", "#93c5fd", "#fbcfe8", "#e2e8f0"]

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

type HomeMistBackgroundProps = {
  readonly className?: string
}

/**
 * Marketing home hero atmosphere — colorful grain mist behind nk chrome.
 */
const HomeMistBackground = ({ className }: HomeMistBackgroundProps) => {
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
  const { resolvedTheme } = useTheme()

  const isDark = !isClient || resolvedTheme !== "light"

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <ShaderBackground
        effect="mist"
        className="absolute inset-0"
        colors={isDark ? DARK_COLORS : LIGHT_COLORS}
        colorBack={isDark ? "#000000" : "#ffffff"}
        softness={isDark ? 0.65 : 0.88}
        speed={isDark ? 0.45 : 0.3}
      />
      {/* Keep copy / buttons on nk background; mist stays atmospheric. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/25 to-background/85" />
    </div>
  )
}

export { HomeMistBackground }
