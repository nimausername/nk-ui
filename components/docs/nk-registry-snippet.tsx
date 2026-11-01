"use client"

import { Check, Clipboard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { cn } from "@/lib/utils"

type NkRegistrySnippetProps = {
  readonly variant?: "production" | "local"
  readonly className?: string
}

const snippets = {
  production: `{
  "registries": {
    "@nk": "https://ui.nimakhabbazi.com/r/{name}.json"
  }
}`,
  local: `{
  "registries": {
    "@nk": "http://localhost:3000/r/{name}.json"
  }
}`,
} as const

const labels = {
  production: "Production registry",
  local: "Local registry",
} as const

/**
 * Shared components.json registry snippet with copy (install docs).
 */
const NkRegistrySnippet = ({
  variant = "production",
  className,
}: NkRegistrySnippetProps) => {
  const code = snippets[variant]
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const handleCopy = () => {
    void copyToClipboard(code)
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-border bg-card",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-1.5">
        <span className="truncate text-xs font-medium text-muted-foreground">
          {labels[variant]}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="shrink-0"
          onClick={handleCopy}
          aria-label={isCopied ? "Snippet copied" : "Copy registry snippet"}
        >
          {isCopied ? <Check aria-hidden="true" /> : <Clipboard aria-hidden="true" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export { NkRegistrySnippet, snippets as nkRegistrySnippets }
export type { NkRegistrySnippetProps }
