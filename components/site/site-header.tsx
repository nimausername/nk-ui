"use client"

import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@teispace/next-themes"
import type { ReactNode } from "react"

import { NkMark } from "@/components/site/nk-mark"
import { SiteMobileMenu } from "@/components/site/site-mobile-menu"
import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/config/docs"
import { cn } from "@/lib/utils"

type SiteHeaderProps = {
  /** Server-rendered slot (e.g. GitHub stars link). */
  readonly trailing?: ReactNode
}

/**
 * Active state for a primary header nav item.
 */
const isHeaderNavActive = (pathname: string, href: string) => {
  if (href === "/docs") {
    return (
      pathname.startsWith("/docs") &&
      !pathname.startsWith("/docs/components") &&
      !pathname.startsWith("/docs/composites")
    )
  }

  return pathname.startsWith(href)
}

/**
 * Top navigation with Docs, Components, GitHub, and theme controls.
 * Below `sm`, primary links live in SiteMobileMenu.
 */
const SiteHeader = ({ trailing }: SiteHeaderProps) => {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
  }

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-background via-background/70 to-transparent">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/" className="inline-flex items-center" aria-label="nk home">
            <NkMark size="md" />
          </Link>
          <nav className="hidden items-center gap-4 text-sm sm:flex" aria-label="Primary">
            {headerNavItems.map((item) => {
              const isActive = isHeaderNavActive(pathname, item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {trailing}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleToggleTheme}
            aria-label="Toggle color theme"
            className="hidden sm:inline-flex"
          >
            <Sun className="dark:hidden" aria-hidden="true" />
            <Moon className="hidden dark:block" aria-hidden="true" />
          </Button>
          <SiteMobileMenu />
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
