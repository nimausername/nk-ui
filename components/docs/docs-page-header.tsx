import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type DocsPageHeaderProps = {
  /** Page title (usually a string). */
  readonly title: ReactNode
  /** Trailing actions (e.g. DocsCopyPage). */
  readonly actions?: ReactNode
  readonly className?: string
}

/**
 * Docs article title row — stacks on narrow screens, row from `sm`.
 */
const DocsPageHeader = ({ title, actions, className }: DocsPageHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
        className
      )}
    >
      <h1 className="min-w-0 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h1>
      {actions ? <div className="shrink-0 sm:ms-auto">{actions}</div> : null}
    </div>
  )
}

export { DocsPageHeader }
export type { DocsPageHeaderProps }
