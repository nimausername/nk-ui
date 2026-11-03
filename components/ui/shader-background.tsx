"use client"

/**
 * Idea inspired by beUI Shader Background
 * (https://beui.dev/components/motion/shader-background).
 * This is an original nk implementation: a small set of product atmospheres
 * with nk names and defaults — not a port of beUI’s effect catalog.
 * Rendering engines from Paper Shaders (https://shaders.paper.design).
 */

import {
  DotGrid,
  GrainGradient,
  MeshGradient,
  PerlinNoise,
  StaticMeshGradient,
  StaticRadialGradient,
} from "@paper-design/shaders-react"
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ComponentType,
  type HTMLAttributes,
} from "react"

import { cn } from "@/lib/utils"

/**
 * nk product atmospheres — intentional and few.
 * Not a 1:1 map of Paper/beUI demo shaders.
 */
export type ShaderEffect =
  | "mist"
  | "haze"
  | "current"
  | "signal"
  | "ember"
  | "night"
  | "ink"
  | "lattice"

type EffectDefinition = {
  readonly Shader: ComponentType<Record<string, unknown>>
  readonly defaults: Record<string, unknown>
  /** When true, never inject a `speed` uniform. */
  readonly static?: boolean
}

/**
 * Curated looks for nk’s black/white system.
 * Engines are Paper; names, palettes, and the short list are nk.
 */
const EFFECT_DEFINITIONS: Record<ShaderEffect, EffectDefinition> = {
  /** Soft grain mist — dark hero (nk neutrals with visible range). */
  mist: {
    Shader: GrainGradient,
    defaults: {
      colors: ["#171717", "#404040", "#a3a3a3", "#f5f5f5"],
      colorBack: "#000000",
      softness: 0.75,
      speed: 0.4,
    },
  },
  /** Light grain for bright surfaces (nk neutrals). */
  haze: {
    Shader: GrainGradient,
    defaults: {
      colors: ["#e5e5e5", "#a3a3a3", "#737373", "#262626"],
      colorBack: "#ffffff",
      softness: 0.88,
      speed: 0.28,
    },
  },
  /** Slow ink mesh — product dark field. */
  current: {
    Shader: MeshGradient,
    defaults: {
      colors: ["#000000", "#171717", "#262626", "#fafafa"],
      distortion: 0.55,
      swirl: 0.35,
      speed: 0.28,
    },
  },
  /** High-contrast mesh — black / white / muted. */
  signal: {
    Shader: MeshGradient,
    defaults: {
      colors: ["#000000", "#171717", "#e5e5e5", "#ffffff"],
      distortion: 0.7,
      swirl: 0.25,
      speed: 0.35,
    },
  },
  /** Soft static radial — muted glow, no motion. */
  ember: {
    Shader: StaticRadialGradient,
    defaults: {
      colorBack: "#000000",
      colors: ["#525252", "#a3a3a3", "#171717"],
    },
    static: true,
  },
  /** Deep static mesh for dark section breaks. */
  night: {
    Shader: StaticMeshGradient,
    defaults: {
      colors: ["#000000", "#171717", "#262626", "#0a0a0a"],
    },
    static: true,
  },
  /** Mono technical noise. */
  ink: {
    Shader: PerlinNoise,
    defaults: {
      colorFront: "#fafafa",
      colorBack: "#000000",
      speed: 0.22,
    },
  },
  /** Sparse structural dots. */
  lattice: {
    Shader: DotGrid,
    defaults: {
      colorBack: "#000000",
      colorFill: "#ffffff",
      colorStroke: "#262626",
    },
    static: true,
  },
}

/** Stable list of effect ids for pickers and docs. */
export const SHADER_EFFECTS = Object.keys(EFFECT_DEFINITIONS) as ShaderEffect[]

/**
 * Props for ShaderBackground — nk effect API with optional overrides.
 */
export type ShaderBackgroundProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "color"
> & {
  /** Curated atmosphere. Defaults to `mist`. */
  readonly effect?: ShaderEffect
  readonly colors?: string[]
  readonly colorBack?: string
  readonly colorFront?: string
  readonly colorFill?: string
  readonly colorStroke?: string
  readonly speed?: number
  readonly softness?: number
  readonly distortion?: number
  readonly swirl?: number
  /** Force a frozen frame (also auto when off-screen, hidden, or reduced motion). */
  readonly paused?: boolean
  /**
   * Soft readability veil (0–1). `true` uses 0.45.
   * Uses `--background` so it tracks light/dark.
   */
  readonly scrim?: number | boolean
  readonly style?: CSSProperties
}

const subscribeClient = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

const subscribeReducedMotion = (onStoreChange: () => void) => {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

const getReducedMotionSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const getReducedMotionServerSnapshot = () => false

const resolveScrimOpacity = (scrim: number | boolean | undefined) => {
  if (scrim === true) return 0.45
  if (typeof scrim === "number") return Math.min(1, Math.max(0, scrim))
  return 0
}

/**
 * Full-bleed WebGL atmosphere — small nk catalog on Paper engines.
 *
 * Mounts after hydration. Freezes when `paused`, off-screen, the tab is hidden,
 * or the OS asks for reduced motion.
 */
const ShaderBackground = ({
  effect = "mist",
  colors,
  colorBack,
  colorFront,
  colorFill,
  colorStroke,
  speed,
  softness,
  distortion,
  swirl,
  paused = false,
  scrim,
  className,
  style,
  ...rest
}: ShaderBackgroundProps) => {
  const isClient = useSyncExternalStore(
    subscribeClient,
    getClientSnapshot,
    getServerSnapshot
  )
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )

  const rootRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)
  const [pageVisible, setPageVisible] = useState(true)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageVisible(document.visibilityState === "visible")
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  const definition = EFFECT_DEFINITIONS[effect]
  const { Shader, defaults, static: isStatic } = definition

  const overrides: Record<string, unknown> = {}
  if (colors !== undefined) overrides.colors = colors
  if (colorBack !== undefined) overrides.colorBack = colorBack
  if (colorFront !== undefined) overrides.colorFront = colorFront
  if (colorFill !== undefined) overrides.colorFill = colorFill
  if (colorStroke !== undefined) overrides.colorStroke = colorStroke
  if (softness !== undefined) overrides.softness = softness
  if (distortion !== undefined) overrides.distortion = distortion
  if (swirl !== undefined) overrides.swirl = swirl
  if (speed !== undefined) overrides.speed = speed

  const shouldFreeze = paused || reducedMotion || !inView || !pageVisible
  const speedOverride = !isStatic && shouldFreeze ? { speed: 0 } : {}

  const scrimOpacity = resolveScrimOpacity(scrim)
  const surfaceClassName = cn("relative h-full w-full overflow-hidden", className)

  if (!isClient) {
    return (
      <div
        ref={rootRef}
        aria-hidden="true"
        className={surfaceClassName}
        style={style}
        {...rest}
      />
    )
  }

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={surfaceClassName}
      style={style}
      {...rest}
    >
      <Shader
        {...defaults}
        {...overrides}
        {...speedOverride}
        className="absolute inset-0 h-full w-full"
      />
      {scrimOpacity > 0 ? (
        <div
          className="pointer-events-none absolute inset-0 bg-background"
          style={{ opacity: scrimOpacity }}
        />
      ) : null}
    </div>
  )
}

export { ShaderBackground }
