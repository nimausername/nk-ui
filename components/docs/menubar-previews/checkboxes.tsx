"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Checkbox items — canvas chrome toggles with follow-up actions.
 */
const MenubarCheckboxesPreview = () => {
  const [rulers, setRulers] = useState(true)
  const [snap, setSnap] = useState(true)
  const [outline, setOutline] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Checkboxes</h2>
      <p className="text-sm text-muted-foreground">
        Use{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarCheckboxItem</code>{" "}
        for independent toggles — then plain rows for one-shot actions.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCheckboxes() {
  const [rulers, setRulers] = useState(true)
  const [snap, setSnap] = useState(true)
  const [outline, setOutline] = useState(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Display</MenubarTrigger>
        <MenubarContent className="w-56">
          <MenubarCheckboxItem
            checked={rulers}
            onCheckedChange={(checked) => setRulers(checked === true)}
          >
            Show rulers
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={snap}
            onCheckedChange={(checked) => setSnap(checked === true)}
          >
            Snap to objects
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={outline}
            onCheckedChange={(checked) => setOutline(checked === true)}
          >
            Outline mode
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Reset view <MenubarShortcut>⌘0</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Mirror canvas
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
      >
        {(direction) => (
          <div dir={direction}>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "نمایش" : "Display"}
                </MenubarTrigger>
                <MenubarContent
                  className="w-56"
                  align={direction === "rtl" ? "end" : "start"}
                >
                  <MenubarCheckboxItem
                    checked={rulers}
                    onCheckedChange={(checked) => {
                      setRulers(checked === true)
                    }}
                  >
                    {direction === "rtl" ? "نمایش خط‌کش" : "Show rulers"}
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={snap}
                    onCheckedChange={(checked) => {
                      setSnap(checked === true)
                    }}
                  >
                    {direction === "rtl" ? "چسبیدن به اشیا" : "Snap to objects"}
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={outline}
                    onCheckedChange={(checked) => {
                      setOutline(checked === true)
                    }}
                  >
                    {direction === "rtl" ? "حالت خطی" : "Outline mode"}
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "بازنشانی نما" : "Reset view"}{" "}
                    <MenubarShortcut>⌘0</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    {direction === "rtl" ? "آینه بوم" : "Mirror canvas"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarCheckboxesPreview }
