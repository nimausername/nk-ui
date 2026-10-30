"use client"

import { Languages } from "lucide-react"
import { useState, type ReactNode } from "react"

import { PreviewCodePanel } from "@/components/docs/preview-code-panel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PreviewDirection = "ltr" | "rtl"

type PreviewContent = ReactNode | ((direction: PreviewDirection) => ReactNode)

type ComponentPreviewProps = {
  readonly children: PreviewContent
  /** Example source shown under the live preview (View Code / Copy). */
  readonly code?: string
  readonly className?: string
  readonly title?: string
}

/**
 * Docs example frame: live preview, LTR/RTL toggle, optional View Code panel.
 */
const ComponentPreview = ({
  children,
  code,
  className,
  title = "Preview",
}: ComponentPreviewProps) => {
  const [direction, setDirection] = useState<PreviewDirection>("ltr")

  const handleToggleDirection = () => {
    setDirection((current) => (current === "ltr" ? "rtl" : "ltr"))
  }

  const content = typeof children === "function" ? children(direction) : children

  return (
    <div className={cn("overflow-hidden rounded-md border border-border", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-3 py-2">
        <p className="text-xs font-medium text-muted-foreground">{title}</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleToggleDirection}
          aria-label={
            direction === "ltr"
              ? "Preview with Persian RTL copy"
              : "Preview with English LTR copy"
          }
        >
          <Languages aria-hidden="true" />
          <span className="uppercase">{direction}</span>
        </Button>
      </div>
      <div
        data-nk-preview=""
        dir={direction}
        lang={direction === "rtl" ? "fa" : "en"}
        className="flex min-h-28 flex-wrap items-center justify-center gap-3 bg-background p-6"
      >
        {content}
      </div>
      {code ? <PreviewCodePanel code={code} /> : null}
    </div>
  )
}

export { ComponentPreview }
export type { PreviewDirection }
