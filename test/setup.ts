import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"
import { createElement, type ReactNode } from "react"
import { afterEach, beforeEach, vi } from "vitest"

afterEach(() => {
  cleanup()
})

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children?: ReactNode
    href: string
  }) => createElement("a", { href, ...props }, children),
}))

vi.mock("motion/react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("motion/react")>()
  return {
    ...actual,
    useReducedMotion: () => true,
  }
})

beforeEach(() => {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: {
      writeText: vi.fn().mockResolvedValue(undefined),
    },
  })
})
