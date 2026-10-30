"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { HookSidebar } from "@/components/extras/hook-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { componentItems, docsGuideItems } from "@/config/docs"
import { cn } from "@/lib/utils"

type DocsSidebarProps = {
  readonly className?: string
}

/**
 * Active docs section label for the sidebar breadcrumb.
 */
const getDocsSection = (pathname: string) => {
  if (pathname.startsWith("/docs/components")) {
    return { label: "Components", href: "/docs/components" }
  }

  return { label: "Docs", href: "/docs" }
}

/**
 * Docs-site sidebar. Composes the extras HookSidebar; not part of the @nk registry.
 */
const DocsSidebar = ({ className }: DocsSidebarProps) => {
  const pathname = usePathname()
  const section = getDocsSection(pathname)

  const guideItems = docsGuideItems.map((item) => ({
    label: item.title,
    href: item.href,
  }))

  const componentNavItems = [
    { label: "All components", href: "/docs/components" },
    ...componentItems.map((item) => ({
      label: item.title,
      href: item.href,
    })),
  ]

  return (
    <aside className={cn("w-full shrink-0 space-y-8 md:w-56", className)}>
      <Breadcrumb>
        <BreadcrumbList className="gap-1.5 sm:gap-1.5">
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="inline-flex size-5 items-center justify-center rounded-sm bg-foreground text-[10px] font-semibold tracking-tight text-background hover:text-background"
            >
              <Link href="/" aria-label="nk home">
                nk
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

      <HookSidebar label="Getting started" items={guideItems} />
      <HookSidebar label="Components" items={componentNavItems} />
    </aside>
  )
}

export { DocsSidebar }
