"use client"

import { useState } from "react"
import { ChevronRight, File, Folder } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { DashedRail } from "@/components/docs/collapsible-previews/dashed-rail"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

type TreeFile = {
  readonly id: string
  readonly name: string
  readonly kind: "file"
}

type TreeFolder = {
  readonly id: string
  readonly name: string
  readonly kind: "folder"
  readonly children: readonly TreeNode[]
}

type TreeNode = TreeFile | TreeFolder

const FILE_TREE: readonly TreeNode[] = [
  {
    id: "ui",
    name: "ui",
    kind: "folder",
    children: [
      { id: "button", name: "button.tsx", kind: "file" },
      { id: "card", name: "card.tsx", kind: "file" },
      { id: "collapsible", name: "collapsible.tsx", kind: "file" },
      { id: "input", name: "input.tsx", kind: "file" },
      { id: "tabs", name: "tabs.tsx", kind: "file" },
    ],
  },
  {
    id: "docs",
    name: "docs",
    kind: "folder",
    children: [
      { id: "preview", name: "component-preview.tsx", kind: "file" },
      { id: "install", name: "component-install.tsx", kind: "file" },
      {
        id: "collapsible-previews",
        name: "collapsible-previews",
        kind: "folder",
        children: [
          { id: "file-tree", name: "file-tree.tsx", kind: "file" },
          { id: "nav-group", name: "nav-group.tsx", kind: "file" },
          { id: "filters", name: "filters.tsx", kind: "file" },
        ],
      },
    ],
  },
  {
    id: "lib",
    name: "lib",
    kind: "folder",
    children: [
      { id: "utils", name: "utils.ts", kind: "file" },
      { id: "cn", name: "cn.ts", kind: "file" },
    ],
  },
  { id: "globals", name: "globals.css", kind: "file" },
  { id: "package", name: "package.json", kind: "file" },
]

type PreviewDirection = "ltr" | "rtl"

type TreeRowsProps = {
  readonly nodes: readonly TreeNode[]
  readonly selectedId: string
  readonly onSelect: (id: string) => void
  readonly direction: PreviewDirection
}

/**
 * File row — spacer matches the leading chevron column on folders.
 */
const FileRow = ({
  node,
  selected,
  onSelect,
}: {
  readonly node: TreeFile
  readonly selected: boolean
  readonly onSelect: (id: string) => void
}) => {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-start text-sm transition-colors",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        selected
          ? "bg-muted font-medium text-foreground"
          : "text-muted-foreground hover:bg-muted/60"
      )}
      aria-current={selected ? "true" : undefined}
      onClick={() => onSelect(node.id)}
    >
      <span aria-hidden="true" className="size-3.5 shrink-0" />
      <File aria-hidden="true" className="size-4 shrink-0" />
      <span className="truncate">{node.name}</span>
    </button>
  )
}

/**
 * Minimal tree rows — leading chevron; nested children get dashed rail + hooks.
 */
const TreeRows = ({
  nodes,
  selectedId,
  onSelect,
  direction,
}: TreeRowsProps) => {
  return (
    <div className="flex flex-col">
      {nodes.map((node) => {
        if (node.kind === "file") {
          return (
            <FileRow
              key={node.id}
              node={node}
              selected={selectedId === node.id}
              onSelect={onSelect}
            />
          )
        }

        return (
          <Collapsible key={node.id} defaultOpen className="gap-0">
            <CollapsibleTrigger
              showChevron={false}
              className="w-full justify-start gap-1.5 rounded-md px-2 py-1 font-medium text-foreground hover:bg-muted/60"
            >
              <ChevronRight
                aria-hidden="true"
                className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-panel-open/collapsible-trigger:rotate-90 motion-reduce:transition-none"
              />
              <Folder aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">{node.name}</span>
            </CollapsibleTrigger>
            <CollapsiblePanel>
              <DashedRail dir={direction}>
                {node.children.map((child) =>
                  child.kind === "file" ? (
                    <FileRow
                      key={child.id}
                      node={child}
                      selected={selectedId === child.id}
                      onSelect={onSelect}
                    />
                  ) : (
                    <TreeRows
                      key={child.id}
                      nodes={[child]}
                      selectedId={selectedId}
                      onSelect={onSelect}
                      direction={direction}
                    />
                  )
                )}
              </DashedRail>
            </CollapsiblePanel>
          </Collapsible>
        )
      })}
    </div>
  )
}

/**
 * Compact explorer — selection by id, nested guide matches Rail Sidebar dash.
 */
const CollapsibleFileTreeDemo = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [selectedId, setSelectedId] = useState("collapsible")
  const isRtl = direction === "rtl"

  return (
    <div className="w-full max-w-xs rounded-xl border border-border bg-card p-2 text-card-foreground">
      <p className="px-2 pb-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {isRtl ? "کاوشگر" : "Explorer"}
      </p>
      <TreeRows
        nodes={FILE_TREE}
        selectedId={selectedId}
        onSelect={setSelectedId}
        direction={direction}
      />
    </div>
  )
}

/**
 * Nested folders with aligned file rows and dashed rail hooks into each child.
 */
const CollapsibleFileTreePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">File tree</h2>
      <p className="text-sm text-muted-foreground">
        Sub-items keep the Rail Sidebar dashed rail, with a corner hook into
        each row. Prefer a dedicated tree for arrow-key navigation.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { useState } from "react"
import { ChevronRight, File, Folder } from "lucide-react"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const RAIL_DASH =
  "repeating-linear-gradient(to top, transparent 0 2px, currentColor 2px 4px)"
const HOOK = "M0.5 0a6 6 0 0 0 6 6H12"

export function CollapsibleFileTree() {
  const [selectedId, setSelectedId] = useState("button")
  const files = [
    { id: "button", name: "button.tsx" },
    { id: "collapsible", name: "collapsible.tsx" },
  ]

  return (
    <div className="w-full max-w-xs rounded-xl border border-border bg-card p-2">
      <p className="px-2 pb-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Explorer
      </p>
      <Collapsible defaultOpen className="gap-0">
        <CollapsibleTrigger
          showChevron={false}
          className="w-full justify-start gap-1.5 px-2 py-1 font-medium"
        >
          <ChevronRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-data-panel-open/collapsible-trigger:rotate-90" />
          <Folder className="size-4 shrink-0" />
          ui
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
            {files.map((file) => (
              <div key={file.id} className="relative min-h-8 ps-3">
                <svg
                  aria-hidden
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  className="absolute start-0 top-2.5 text-border"
                >
                  <path d={HOOK} stroke="currentColor" strokeDasharray="2 2" fill="none" />
                </svg>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-start text-sm",
                    selectedId === file.id
                      ? "bg-muted font-medium"
                      : "text-muted-foreground hover:bg-muted/60"
                  )}
                  onClick={() => setSelectedId(file.id)}
                >
                  <span className="size-3.5 shrink-0" />
                  <File className="size-4 shrink-0" />
                  {file.name}
                </button>
              </div>
            ))}
          </div>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  )
}`}
      >
        {(direction) => <CollapsibleFileTreeDemo direction={direction} />}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleFileTreePreview }
