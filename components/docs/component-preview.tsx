"use client"

import { Languages } from "lucide-react"
import { useState, useSyncExternalStore, type ReactNode } from "react"

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
  /** Extra controls rendered in the preview frame toolbar (before LTR/RTL). */
  readonly actions?: PreviewContent
  /** When false, hides the LTR/RTL toolbar control (default true). */
  readonly showDirectionToggle?: boolean
}

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

/**
 * Docs example frame: live preview, optional LTR/RTL toggle, optional View Code panel.
 *
 * Interactive children mount only on the client so Base UI Field/Input (and similar)
 * do not SSR/hydrate with mismatched control state attributes.
 */
const ComponentPreview = ({
  children,
  code,
  className,
  title = "Preview",
  actions,
  showDirectionToggle = true,
}: ComponentPreviewProps) => {
  const [direction, setDirection] = useState<PreviewDirection>("ltr")
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)

  const handleToggleDirection = () => {
    setDirection((current) => (current === "ltr" ? "rtl" : "ltr"))
  }

  const content =
    isClient && (typeof children === "function" ? children(direction) : children)
  const toolbarActions =
    isClient && (typeof actions === "function" ? actions(direction) : actions)
  const showToolbar = Boolean(toolbarActions) || showDirectionToggle

  return (
    <div className={cn("overflow-hidden rounded-md border border-border", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-3 py-2">
        <p className="text-xs font-medium text-muted-foreground">{title}</p>
        {showToolbar ? (
          <div className="flex items-center gap-2">
            {toolbarActions}
            {showDirectionToggle ? (
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
            ) : null}
          </div>
        ) : null}
      </div>
      <div
        data-nk-preview=""
        dir={direction}
        lang={direction === "rtl" ? "fa" : "en"}
        className="flex min-h-28 flex-wrap items-center justify-center gap-3 bg-background p-6"
      >
        {isClient ? (
          content
        ) : (
          <div className="h-9 w-full max-w-sm rounded-md border border-dashed border-border/80" />
        )}
      </div>
      {code ? <PreviewCodePanel code={code} /> : null}
    </div>
  )
}

export { ComponentPreview }
export type { PreviewDirection }
