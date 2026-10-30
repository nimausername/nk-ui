"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

type AppProvidersProps = {
  readonly children: ReactNode
}

/**
 * Root client providers for color theme.
 */
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export { AppProviders }
