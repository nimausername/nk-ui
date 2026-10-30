"use client"

import { Check, Clipboard, Code2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PreviewCodePanelProps = {
  readonly code: string
}

/**
 * Collapsible example source for docs previews (shadcn-style View Code + Copy).
 * Docs-only — not part of the @nk registry.
 */
const PreviewCodePanel = ({ code }: PreviewCodePanelProps) => {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const lines = code.replace(/^\n+|\n+$/g, "").split("\n")

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  const handleToggle = () => {
    setOpen((current) => !current)
  }

  return (
    <div className="relative border-t border-border bg-muted/30">
      {!open ? (
        <div className="relative">
          <pre
            aria-hidden="true"
            className="max-h-24 overflow-hidden px-4 py-3 font-mono text-xs leading-6 text-muted-foreground"
          >
            {lines.slice(0, 4).map((line, index) => (
              <div key={`${index}-${line}`} className="flex gap-4">
                <span className="w-4 shrink-0 select-none text-end text-muted-foreground/50">
                  {index + 1}
                </span>
                <span className="min-w-0 grow">{line || " "}</span>
              </div>
            ))}
          </pre>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="pointer-events-auto bg-background"
              onClick={handleToggle}
            >
              <Code2 aria-hidden="true" />
              View Code
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-end gap-2 border-b border-border px-3 py-2">
            <Button type="button" variant="ghost" size="sm" onClick={handleCopy}>
              {copied ? (
                <Check aria-hidden="true" />
              ) : (
                <Clipboard aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={handleToggle}>
              Hide Code
            </Button>
          </div>
          <pre
            className={cn(
              "max-h-[28rem] overflow-auto px-4 py-3 font-mono text-xs leading-6 text-foreground"
            )}
          >
            <code>
              {lines.map((line, index) => (
                <div key={`${index}-${line}`} className="flex gap-4">
                  <span className="w-6 shrink-0 select-none text-end text-muted-foreground/60">
                    {index + 1}
                  </span>
                  <span className="min-w-0 grow whitespace-pre-wrap">{line || " "}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}

export { PreviewCodePanel }
