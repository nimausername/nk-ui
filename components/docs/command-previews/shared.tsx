"use client"

import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { CommandDialog } from "@/components/ui/command"

type PreviewDirection = "ltr" | "rtl"

const scrollableCommands = [
  {
    group: "Navigation",
    items: ["Home", "Projects", "Inbox", "Calendar", "Docs"],
  },
  {
    group: "Actions",
    items: ["New file", "New folder", "Upload", "Share", "Duplicate", "Archive"],
  },
  {
    group: "Account",
    items: ["Profile", "Billing", "Team", "Notifications", "Security"],
  },
  {
    group: "Tools",
    items: [
      "Calculator",
      "Emoji",
      "Theme",
      "Shortcuts",
      "Integrations",
      "API keys",
    ],
  },
] as const

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vite", label: "Vite" },
  { value: "nuxt", label: "Nuxt" },
] as const

const frameworksRtl: Record<(typeof frameworks)[number]["value"], string> = {
  "next.js": "نکست‌جی‌اس",
  remix: "ریمیکس",
  astro: "آسترو",
  vite: "ویت",
  nuxt: "نکست",
}

type TriggeredPaletteProps = {
  readonly open: boolean
  readonly onOpenChange: (open: boolean) => void
  readonly direction: PreviewDirection
  readonly triggerLabel: string
  readonly title?: string
  readonly description?: string
  readonly children: ReactNode
}

/**
 * Shared trigger + CommandDialog shell for docs demos.
 */
const TriggeredPalette = ({
  open,
  onOpenChange,
  direction,
  triggerLabel,
  title,
  description,
  children,
}: TriggeredPaletteProps) => {
  return (
    <div className="flex flex-col items-start gap-3" dir={direction}>
      <Button
        type="button"
        variant="outline"
        onClick={() => onOpenChange(true)}
      >
        {triggerLabel}
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={onOpenChange}
        title={
          title ?? (direction === "rtl" ? "پالت دستور" : "Command Palette")
        }
        description={
          description ??
          (direction === "rtl"
            ? "یک دستور را جستجو کنید تا اجرا شود..."
            : "Search for a command to run...")
        }
      >
        {children}
      </CommandDialog>
    </div>
  )
}

export { frameworks, frameworksRtl, scrollableCommands, TriggeredPalette }
export type { PreviewDirection, TriggeredPaletteProps }
