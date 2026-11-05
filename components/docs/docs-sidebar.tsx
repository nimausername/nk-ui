"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentType, SVGProps } from "react"

import { NextjsIcon, ReactIcon, ViteIcon } from "@/components/docs/framework-icons"
import { DocsRailSidebar } from "@/components/docs/docs-rail-sidebar"
import { NkMark } from "@/components/site/nk-mark"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  componentItems,
  compositeItems,
  docsGuideItems,
  installationFrameworkItems,
} from "@/config/docs"
import { cn } from "@/lib/utils"

type IconProps = SVGProps<SVGSVGElement>

const frameworkIcons: Record<string, ComponentType<IconProps>> = {
  "/docs/installation/next": NextjsIcon,
  "/docs/installation/vite": ViteIcon,
  "/docs/installation/manual": ReactIcon,
}

type DocsSidebarProps = {
  readonly className?: string
}

/** Stable Components rail items (module scope — same on server and client). */
const componentNavItems = [
  { label: "All components", href: "/docs/components" },
  ...componentItems.map((item) => ({
    label: item.title,
    href: item.href,
  })),
] as const

/** Stable Composites rail items (module scope — same on server and client). */
const compositeNavItems = [
  { label: "All composites", href: "/docs/composites" },
  ...compositeItems.map((item) => ({
    label: item.title,
    href: item.href,
  })),
] as const

/**
 * Active docs section label for the sidebar breadcrumb.
 */
const getDocsSection = (pathname: string) => {
  if (pathname.startsWith("/docs/composites")) {
    return { label: "Composites", href: "/docs/composites" }
  }

  if (pathname.startsWith("/docs/components")) {
    return { label: "Components", href: "/docs/components" }
  }

  return { label: "Docs", href: "/docs" }
}

/**
 * Docs-site sidebar. Uses the internal `DocsRailSidebar` fork — not the
 * publishable `@nk/rail-sidebar` composite.
 */
const DocsSidebar = ({ className }: DocsSidebarProps) => {
  const pathname = usePathname()
  const section = getDocsSection(pathname)

  const guideItems = docsGuideItems.map((item) => {
    if (item.href !== "/docs/installation") {
      return { label: item.title, href: item.href }
    }

    return {
      label: item.title,
      href: item.href,
      items: installationFrameworkItems.map((framework) => {
        const Icon = frameworkIcons[framework.href]

        return {
          label: framework.title,
          href: framework.href,
          icon: Icon ? <Icon aria-hidden="true" /> : undefined,
        }
      }),
    }
  })

  return (
    <aside className={cn("w-full shrink-0 space-y-8 md:w-56", className)}>
      <Breadcrumb>
        <BreadcrumbList className="gap-1.5 sm:gap-1.5">
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="rounded-sm hover:opacity-80">
              <Link href="/" aria-label="nk home" className="inline-flex">
                <NkMark size="sm" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/docs">nk</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="font-medium text-foreground">
              <Link href={section.href}>{section.label}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DocsRailSidebar label="Getting started" items={guideItems} />
      <DocsRailSidebar
        key={componentNavItems.map((item) => item.href).join("|")}
        label="Components"
        items={componentNavItems}
      />
      <DocsRailSidebar
        key={compositeNavItems.map((item) => item.href).join("|")}
        label="Composites"
        items={compositeNavItems}
      />
    </aside>
  )
}

export { DocsSidebar }
