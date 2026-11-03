import { render as rtlRender, type RenderOptions } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { ReactElement, ReactNode } from "react"

import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"

type ProvidersProps = {
  readonly children: ReactNode
}

/**
 * Shared hosts for nk UI smokes (tooltip + toast). Theme is skipped here —
 * `@teispace/next-themes` pulls Next navigation and is not needed for unit smokes.
 */
const TestProviders = ({ children }: ProvidersProps) => {
  return (
    <TooltipProvider delay={0}>
      <Toaster>{children}</Toaster>
    </TooltipProvider>
  )
}

/**
 * Render UI under shared nk providers. Prefer this over raw RTL `render`.
 */
const render = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  const user = userEvent.setup()
  const result = rtlRender(ui, {
    wrapper: TestProviders,
    ...options,
  })

  return { user, ...result }
}

export * from "@testing-library/react"
export { render, userEvent }
