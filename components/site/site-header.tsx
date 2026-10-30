"use client"

import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/config/docs"
import { cn } from "@/lib/utils"

/**
 * Top navigation with Docs, Components, and theme controls.
 */
const SiteHeader = () => {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground"
            aria-label="nk home"
          >
            nk
          </Link>
          <nav className="hidden items-center gap-4 text-sm sm:flex" aria-label="Primary">
            {headerNavItems.map((item) => {
              const isActive =
                item.href === "/docs"
                  ? pathname.startsWith("/docs") && !pathname.startsWith("/docs/components")
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
    </header>
  )
}

export { SiteHeader }
