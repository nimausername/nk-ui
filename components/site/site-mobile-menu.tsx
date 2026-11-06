"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@teispace/next-themes"
import { useState, type ComponentType, type ReactNode, type SVGProps } from "react"

import {
  NextjsIcon,
  ReactIcon,
  ViteIcon,
} from "@/components/docs/framework-icons"
import { NkMark } from "@/components/site/nk-mark"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch, SwitchThumb } from "@/components/ui/switch"
import {
  componentItems,
  compositeItems,
  docsGuideItems,
  headerNavItems,
  installationFrameworkItems,
} from "@/config/docs"
import { cn } from "@/lib/utils"

/** Short support line under each primary destination (home / marketing). */
const navDescriptions: Record<string, string> = {
  "/docs": "Introduction and install",
  "/docs/components": "Installable primitives",
  "/docs/composites": "Multi-part patterns",
}

type IconProps = SVGProps<SVGSVGElement>

/** Same framework marks as DocsSidebar installation children. */
const frameworkIcons: Record<string, ComponentType<IconProps>> = {
  "/docs/installation/next": NextjsIcon,
  "/docs/installation/vite": ViteIcon,
  "/docs/installation/manual": ReactIcon,
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
 * Exact active state for a docs guide (Installation does not stay lit on frameworks).
 */
const isGuideActive = (pathname: string, href: string) => {
  if (href === "/docs") {
    return pathname === "/docs"
  }

  return pathname === href
}

type DocsNavLinkProps = {
  readonly href: string
  readonly children: ReactNode
  readonly active?: boolean
  readonly indented?: boolean
  readonly icon?: ReactNode
}

/**
 * Compact row used for the in-docs tree inside the site mobile menu.
 */
const DocsNavLink = ({
  href,
  children,
  active = false,
  indented = false,
  icon,
}: DocsNavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        indented && "ps-6",
        active
          ? "bg-muted font-medium text-foreground dark:bg-muted/50"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
      aria-current={active ? "page" : undefined}
    >
      {icon ? (
        <span className="inline-flex size-3.5 shrink-0 items-center justify-center [&>svg]:size-3.5">
          {icon}
        </span>
      ) : null}
      {children}
    </Link>
  )
}

type DocsNavSectionProps = {
  readonly label: string
  readonly children: ReactNode
}

/**
 * Labeled menu group — title with a rule continuing after the text, then rows.
 */
const DocsNavSection = ({ label, children }: DocsNavSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 px-3">
        <p className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <Separator className="flex-1" />
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  )
}

/**
 * Full docs catalog for mobile — replaces the three hub cards while on /docs.
 */
const DocsTreeNav = ({ pathname }: { readonly pathname: string }) => {
  return (
    <nav aria-label="Docs" className="flex flex-col gap-5">
      <DocsNavSection label="Getting started">
        {docsGuideItems.map((item) => (
          <DocsNavLink
            key={item.href}
            href={item.href}
            active={isGuideActive(pathname, item.href)}
          >
            {item.title}
          </DocsNavLink>
        ))}
        {installationFrameworkItems.map((item) => {
          const Icon = frameworkIcons[item.href]

          return (
            <DocsNavLink
              key={item.href}
              href={item.href}
              indented
              active={pathname === item.href}
              icon={Icon ? <Icon aria-hidden="true" /> : undefined}
            >
              {item.title}
            </DocsNavLink>
          )
        })}
      </DocsNavSection>

      <DocsNavSection label="Components">
        <DocsNavLink
          href="/docs/components"
          active={pathname === "/docs/components"}
        >
          All components
        </DocsNavLink>
        {componentItems.map((item) => (
          <DocsNavLink
            key={item.href}
            href={item.href}
            active={pathname === item.href}
          >
            {item.title}
          </DocsNavLink>
        ))}
      </DocsNavSection>

      <DocsNavSection label="Composites">
        <DocsNavLink
          href="/docs/composites"
          active={pathname === "/docs/composites"}
        >
          All composites
        </DocsNavLink>
        {compositeItems.map((item) => (
          <DocsNavLink
            key={item.href}
            href={item.href}
            active={pathname === item.href}
          >
            {item.title}
          </DocsNavLink>
        ))}
      </DocsNavSection>
    </nav>
  )
}

/**
 * Single mobile menu (right sheet): brand, destinations, dark mode.
 * On docs pages the body is the docs tree so there is no second Browse drawer.
 */
const SiteMobileMenu = () => {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [menuPathname, setMenuPathname] = useState(pathname)

  // Close the sheet when the route changes (adjust state during render — no effect).
  if (pathname !== menuPathname) {
    setMenuPathname(pathname)
    setOpen(false)
  }

  const isDark = resolvedTheme === "dark"
  const isDocs = pathname.startsWith("/docs")

  const handleDarkModeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side="end"
        size="sm"
        showCloseButton={false}
        className="gap-0 bg-background data-[side=end]:border-border"
      >
        <SheetHeader className="flex-row items-center justify-between gap-3 border-b border-border py-3 pe-4">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="nk home"
          >
            <NkMark size="md" />
            <SheetTitle className="text-base font-semibold tracking-tight">
              nk
            </SheetTitle>
          </Link>
          <SheetClose
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Close"
              />
            }
          >
            <X aria-hidden="true" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        <SheetBody className="gap-0 py-3 pb-10">
          {isDocs ? (
            <DocsTreeNav pathname={pathname} />
          ) : (
            <nav aria-label="Primary" className="flex flex-col">
              {headerNavItems.map((item) => {
                const isActive = isHeaderNavActive(pathname, item.href)
                const description = navDescriptions[item.href]

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex min-h-12 flex-col justify-center gap-0.5 rounded-md px-3 py-2.5 transition-colors",
                      isActive
                        ? "bg-muted dark:bg-muted/50"
                        : "hover:bg-muted/50"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={cn(
                        "text-base tracking-tight",
                        isActive
                          ? "font-semibold text-foreground"
                          : "font-medium text-foreground"
                      )}
                    >
                      {item.title}
                    </span>
                    {description ? (
                      <span className="text-xs text-muted-foreground">
                        {description}
                      </span>
                    ) : null}
                  </Link>
                )
              })}
            </nav>
          )}
        </SheetBody>

        <SheetFooter className="mt-auto flex-col gap-0 border-t border-border sm:flex-col sm:justify-start">
          <label className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-3">
            <span className="text-sm font-medium text-foreground">Dark mode</span>
            <Switch
              checked={isDark}
              onCheckedChange={handleDarkModeChange}
              aria-label="Toggle dark mode"
            >
              <SwitchThumb />
            </Switch>
          </label>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { SiteMobileMenu }
