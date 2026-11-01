import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type DocsStepsProps = {
  readonly children: ReactNode
  readonly className?: string
}

type DocsStepProps = {
  readonly step: number
  readonly title: string
  readonly children: ReactNode
  readonly className?: string
}

/**
 * Numbered vertical step list for docs guides.
 * Docs-site only — not part of the @nk registry.
 */
const DocsSteps = ({ children, className }: DocsStepsProps) => {
  return <ol className={cn("space-y-0", className)}>{children}</ol>
}

/**
 * One numbered step in a DocsSteps list.
 */
const DocsStep = ({ step, title, children, className }: DocsStepProps) => {
  return (
    <li className={cn("group/step relative flex gap-4", className)}>
      <div className="flex flex-col items-center self-stretch">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-medium tabular-nums text-foreground">
          {step}
        </span>
        <span
          aria-hidden="true"
          className="mt-2 w-px flex-1 bg-border group-last/step:hidden"
        />
      </div>
      <div className="min-w-0 flex-1 space-y-3 pb-10 group-last/step:pb-0">
        <h3 className="pt-0.5 text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <div className="space-y-3 text-sm text-muted-foreground">{children}</div>
      </div>
    </li>
  )
}

export { DocsSteps, DocsStep }
