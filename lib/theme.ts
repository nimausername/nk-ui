/**
 * Shared theme options for the docs site.
 * Keep layout script props and ThemeProvider in sync.
 */

export const themeConfig = {
  attribute: "class" as const,
  defaultTheme: "system",
  enableSystem: true,
  disableTransitionOnChange: true,
  storageKey: "nk-theme",
} as const
