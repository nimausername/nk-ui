"use client"

import { useState } from "react"
import {
  Bell,
  FolderKanban,
  LayoutDashboard,
  Settings2,
} from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { DashedRail } from "@/components/docs/collapsible-previews/dashed-rail"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type PreviewDirection = "ltr" | "rtl"

/**
 * Shared leaf styles for the nav demo — active uses aria-current + muted fill.
 */
const navLeafClassName = (active: boolean) =>
  cn(
    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-sm transition-colors",
    "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
    active
      ? "bg-muted font-medium text-foreground"
      : "text-muted-foreground"
  )

/**
 * Nested product nav — workspace chrome, inbox count, projects, settings.
 */
const CollapsibleNavGroupDemo = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [selectedId, setSelectedId] = useState("overview")
  const isRtl = direction === "rtl"

  return (
    <nav
      aria-label={isRtl ? "ناوبری فضای کار" : "Workspace navigation"}
      className="flex w-full max-w-xs flex-col gap-3 rounded-xl border border-border bg-card p-3 text-card-foreground shadow-sm ring-1 ring-foreground/5"
    >
      <div className="flex items-center gap-2.5 px-1">
        <Avatar size="sm">
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            {isRtl ? "اکمی" : "Acme"}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {isRtl ? "فضای کاری تولید" : "Production workspace"}
          </p>
        </div>
        <Badge variant="outline">{isRtl ? "تیم" : "Team"}</Badge>
      </div>

      <Separator />

      <Collapsible defaultOpen className="gap-1">
        <CollapsibleTrigger className="w-full justify-between px-2 py-1.5 font-medium">
          <span className="flex items-center gap-2">
            <FolderKanban aria-hidden="true" className="size-4 shrink-0" />
            {isRtl ? "فضای کار" : "Workspace"}
          </span>
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <div className="flex flex-col gap-0.5 ps-1">
            <button
              type="button"
              className={navLeafClassName(selectedId === "overview")}
              aria-current={selectedId === "overview" ? "page" : undefined}
              onClick={() => setSelectedId("overview")}
            >
              <LayoutDashboard aria-hidden="true" className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 truncate">
                {isRtl ? "نمای کلی" : "Overview"}
              </span>
            </button>

            <button
              type="button"
              className={navLeafClassName(selectedId === "inbox")}
              aria-current={selectedId === "inbox" ? "page" : undefined}
              onClick={() => setSelectedId("inbox")}
            >
              <Bell aria-hidden="true" className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 truncate">
                {isRtl ? "صندوق" : "Inbox"}
              </span>
              <Badge variant="secondary">3</Badge>
            </button>

            <Collapsible defaultOpen className="gap-0.5">
              <CollapsibleTrigger className="w-full justify-between px-2 py-1.5 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <FolderKanban aria-hidden="true" className="size-4 shrink-0" />
                  {isRtl ? "پروژه‌ها" : "Projects"}
                </span>
              </CollapsibleTrigger>
              <CollapsiblePanel>
                <DashedRail dir={direction}>
                  <button
                    type="button"
                    className={navLeafClassName(selectedId === "atlas")}
                    aria-current={selectedId === "atlas" ? "page" : undefined}
                    onClick={() => setSelectedId("atlas")}
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-success"
                    />
                    <span className="min-w-0 flex-1 truncate">
                      {isRtl ? "اطلس" : "Atlas"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {isRtl ? "زنده" : "Live"}
                    </span>
                  </button>
                  <button
                    type="button"
                    className={navLeafClassName(selectedId === "north")}
                    aria-current={selectedId === "north" ? "page" : undefined}
                    onClick={() => setSelectedId("north")}
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                    />
                    <span className="min-w-0 flex-1 truncate">
                      {isRtl ? "نورت" : "North"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {isRtl ? "پیش‌نویس" : "Draft"}
                    </span>
                  </button>
                </DashedRail>
              </CollapsiblePanel>
            </Collapsible>
          </div>
        </CollapsiblePanel>
      </Collapsible>

      <Separator />

      <button
        type="button"
        className={navLeafClassName(selectedId === "settings")}
        aria-current={selectedId === "settings" ? "page" : undefined}
        onClick={() => setSelectedId("settings")}
      >
        <Settings2 aria-hidden="true" className="size-4 shrink-0" />
        <span className="min-w-0 flex-1 truncate">
          {isRtl ? "تنظیمات" : "Settings"}
        </span>
      </button>
    </nav>
  )
}

/**
 * Multi-level nav group — product sidebar slice, not the full Rail Sidebar.
 */
const CollapsibleNavGroupPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Nav group</h2>
      <p className="text-sm text-muted-foreground">
        Workspace chrome, nested projects, and an inbox count. For a full app
        column that collapses to icons, use Rail Sidebar instead.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { useState } from "react"
import {
  Bell,
  FolderKanban,
  LayoutDashboard,
  Settings2,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

/** Same dash + corner hook as Rail Sidebar. */
const RAIL_DASH =
  "repeating-linear-gradient(to top, transparent 0 2px, currentColor 2px 4px)"
const HOOK = "M0.5 0a6 6 0 0 0 6 6H12"

const navLeafClassName = (active: boolean) =>
  cn(
    "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-sm transition-colors",
    "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
    active ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
  )

export function CollapsibleNavGroup() {
  const [selectedId, setSelectedId] = useState("overview")

  return (
    <nav
      aria-label="Workspace navigation"
      className="flex w-full max-w-xs flex-col gap-3 rounded-xl border border-border bg-card p-3 shadow-sm ring-1 ring-foreground/5"
    >
      <div className="flex items-center gap-2.5 px-1">
        <Avatar size="sm">
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Acme</p>
          <p className="truncate text-xs text-muted-foreground">
            Production workspace
          </p>
        </div>
        <Badge variant="outline">Team</Badge>
      </div>

      <Separator />

      <Collapsible defaultOpen className="gap-1">
        <CollapsibleTrigger className="w-full justify-between px-2 py-1.5 font-medium">
          <span className="flex items-center gap-2">
            <FolderKanban className="size-4 shrink-0" />
            Workspace
          </span>
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <div className="flex flex-col gap-0.5 ps-1">
            <button
              type="button"
              className={navLeafClassName(selectedId === "overview")}
              aria-current={selectedId === "overview" ? "page" : undefined}
              onClick={() => setSelectedId("overview")}
            >
              <LayoutDashboard className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 truncate">Overview</span>
            </button>
            <button
              type="button"
              className={navLeafClassName(selectedId === "inbox")}
              aria-current={selectedId === "inbox" ? "page" : undefined}
              onClick={() => setSelectedId("inbox")}
            >
              <Bell className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 truncate">Inbox</span>
              <Badge variant="secondary">3</Badge>
            </button>
            <Collapsible defaultOpen className="gap-0.5">
              <CollapsibleTrigger className="w-full justify-between px-2 py-1.5 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <FolderKanban className="size-4 shrink-0" />
                  Projects
                </span>
              </CollapsibleTrigger>
              <CollapsiblePanel>
                <div className="relative ms-3.5 flex flex-col gap-1.5">
                  <span
                    aria-hidden
                    className="absolute start-0 top-0 w-px text-border"
                    style={{
                      height: "calc(100% - 22px)",
                      backgroundImage: RAIL_DASH,
                    }}
                  />
                  {[
                    { id: "atlas", label: "Atlas", live: true },
                    { id: "north", label: "North", live: false },
                  ].map((project) => (
                    <div
                      key={project.id}
                      className="relative min-h-8 ps-3"
                    >
                      <svg
                        aria-hidden
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        className="absolute start-0 top-2.5 text-border"
                      >
                        <path
                          d={HOOK}
                          stroke="currentColor"
                          strokeDasharray="2 2"
                          fill="none"
                        />
                      </svg>
                      <button
                        type="button"
                        className={navLeafClassName(selectedId === project.id)}
                        aria-current={
                          selectedId === project.id ? "page" : undefined
                        }
                        onClick={() => setSelectedId(project.id)}
                      >
                        <span
                          className={
                            project.live
                              ? "size-1.5 shrink-0 rounded-full bg-success"
                              : "size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                          }
                        />
                        <span className="min-w-0 flex-1 truncate">
                          {project.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {project.live ? "Live" : "Draft"}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </CollapsiblePanel>
            </Collapsible>
          </div>
        </CollapsiblePanel>
      </Collapsible>

      <Separator />

      <button
        type="button"
        className={navLeafClassName(selectedId === "settings")}
        aria-current={selectedId === "settings" ? "page" : undefined}
        onClick={() => setSelectedId("settings")}
      >
        <Settings2 className="size-4 shrink-0" />
        <span className="min-w-0 flex-1 truncate">Settings</span>
      </button>
    </nav>
  )
}`}
      >
        {(direction) => <CollapsibleNavGroupDemo direction={direction} />}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleNavGroupPreview }
