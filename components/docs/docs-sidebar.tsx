"use client"

import { HookSidebar } from "@/components/extras/hook-sidebar"
import { componentItems, docsGuideItems } from "@/config/docs"
import { cn } from "@/lib/utils"

type DocsSidebarProps = {
  readonly className?: string
}

/**
 * Docs-site sidebar. Composes the extras HookSidebar; not part of the @nk registry.
 */
const DocsSidebar = ({ className }: DocsSidebarProps) => {
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
      <HookSidebar label="Getting started" items={guideItems} />
      <HookSidebar label="Components" items={componentNavItems} />
    </aside>
  )
}

export { DocsSidebar }
