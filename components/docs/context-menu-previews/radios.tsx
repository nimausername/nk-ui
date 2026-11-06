"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Radio items — mutually exclusive choices inside the context menu.
 */
const ContextMenuRadiosPreview = () => {
  const [person, setPerson] = useState("pedro")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Radios</h2>
      <p className="text-sm text-muted-foreground">
        Pair{" "}
        <code className="rounded bg-muted px-1 text-xs">
          ContextMenuRadioGroup
        </code>{" "}
        with{" "}
        <code className="rounded bg-muted px-1 text-xs">ContextMenuRadioItem</code>
        .
      </p>
      <ComponentPreview
        code={`import { useState } from "react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuRadios() {
  const [person, setPerson] = useState("pedro")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
            <ContextMenuRadioItem value="disabled" disabled>
              Disabled
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
      >
        {(direction) => (
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              {direction === "rtl" ? "اینجا راست‌کلیک کنید" : "Right click here"}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52" dir={direction}>
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "افراد" : "People"}
                </ContextMenuLabel>
                <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                  <ContextMenuRadioItem value="pedro">
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">
                    Colm Tuite
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="disabled" disabled>
                    {direction === "rtl" ? "غیرفعال" : "Disabled"}
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuRadiosPreview }
