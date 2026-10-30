import type { ReactNode } from "react"

import { DocsSidebar } from "@/components/docs/docs-sidebar"

type DocsLayoutProps = {
  readonly children: ReactNode
}

/**
 * Shared docs chrome with sidebar navigation.
 */
export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 gap-10 px-4 py-10 sm:px-6">
      <DocsSidebar className="hidden md:block" />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
