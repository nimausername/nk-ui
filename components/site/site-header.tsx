"use client"

import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@teispace/next-themes"
import type { ReactNode } from "react"

import { NkMark } from "@/components/site/nk-mark"
import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/config/docs"
import { cn } from "@/lib/utils"

type SiteHeaderProps = {
  /** Server-rendered slot (e.g. GitHub stars link). */
  readonly trailing?: ReactNode
}

/**
 * Top navigation with Docs, Components, GitHub, and theme controls.
 */
const SiteHeader = ({ trailing }: SiteHeaderProps) => {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-flex items-center" aria-label="nk home">
            <NkMark size="md" />
          </Link>
          <nav className="hidden items-center gap-4 text-sm sm:flex" aria-label="Primary">
            {headerNavItems.map((item) => {
              const isActive =
                item.href === "/docs"
                  ? pathname.startsWith("/docs") &&
                    !pathname.startsWith("/docs/components") &&
                    !pathname.startsWith("/docs/composites")
                  : pathname.startsWith(item.href)

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

        <div className="flex items-center gap-2">
          {trailing}
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleToggleTheme}
            aria-label="Toggle color theme"
          >
            <Sun className="dark:hidden" aria-hidden="true" />
            <Moon className="hidden dark:block" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
