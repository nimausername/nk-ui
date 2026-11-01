"use client"

import { Tabs } from "@base-ui/react/tabs"
import { Check, Clipboard } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { PACKAGE_MANAGERS, type PackageManager } from "@/lib/shadcn-commands"
import { cn } from "@/lib/utils"

type CodeCommandProps = {
  /** Command string per package manager. */
  readonly commands: Readonly<Record<PackageManager, string>>
  /** Accessible label for the command block. */
  readonly label?: string
  readonly className?: string
  readonly defaultManager?: PackageManager
}

const isPackageManager = (value: unknown): value is PackageManager =>
  value === "pnpm" || value === "npm" || value === "yarn" || value === "bun"

/**
 * Package-manager tabs + copy command block (shadcn-style).
 * Shared site UI — not part of the @nk registry.
 */
const CodeCommand = ({
  commands,
  label = "Command",
  className,
  defaultManager = "pnpm",
}: CodeCommandProps) => {
  const [manager, setManager] = useState<PackageManager>(defaultManager)
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const command = commands[manager]

  const handleCopy = () => {
    void copyToClipboard(command)
  }

  return (
    <div
      className={cn("overflow-hidden rounded-md border border-border bg-card", className)}
    >
      <Tabs.Root
        value={manager}
        onValueChange={(value) => {
          if (isPackageManager(value)) {
            setManager(value)
          }
        }}
      >
        <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-2">
          <Tabs.List
            aria-label={`${label} package manager`}
            className="flex min-w-0 flex-1 gap-0.5 overflow-x-auto py-1.5"
          >
            {PACKAGE_MANAGERS.map((id) => (
              <Tabs.Tab
                key={id}
                value={id}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground",
                  "data-selected:bg-background data-selected:text-foreground data-selected:shadow-sm"
                )}
              >
                {id}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="shrink-0"
            onClick={handleCopy}
            aria-label={isCopied ? "Command copied" : "Copy command"}
          >
            {isCopied ? <Check aria-hidden="true" /> : <Clipboard aria-hidden="true" />}
          </Button>
        </div>
      </Tabs.Root>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{command}</code>
      </pre>
    </div>
  )
}

export { CodeCommand }
export type { CodeCommandProps }
