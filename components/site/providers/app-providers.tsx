"use client"

import { ThemeProvider } from "@teispace/next-themes"
import type { ReactNode } from "react"

import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { themeConfig } from "@/lib/theme"

type AppProvidersProps = {
  readonly children: ReactNode
}

/**
 * Root client providers for color theme, tooltips, and toasts.
 *
 * `noScript` is required: the blocking script is in `app/layout.tsx`. Without
 * it, ThemeProvider injects a `<script>` on the client during Fast Refresh and
 * React 19 full-reloads in a loop.
 */
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider {...themeConfig} noScript>
      <TooltipProvider>
        <Toaster>{children}</Toaster>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export { AppProviders }
