"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Minimal anatomy — one menu with groups, shortcuts, and a separator.
 */
const MenubarAnatomyPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Anatomy</h2>
      <p className="text-sm text-muted-foreground">
        Smallest useful bar — one trigger, grouped items, shortcuts, and a
        separator.
      </p>
      <ComponentPreview
        code={`import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarAnatomy() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Project</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New canvas <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Duplicate</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Rename…</MenubarItem>
            <MenubarItem>Archive</MenubarItem>
          </MenubarGroup>
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
                  {direction === "rtl" ? "پروژه" : "Project"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarGroup>
                    <MenubarItem>
                      {direction === "rtl" ? "بوم جدید" : "New canvas"}{" "}
                      <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      {direction === "rtl" ? "تکثیر" : "Duplicate"}
                    </MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem>
                      {direction === "rtl" ? "تغییر نام…" : "Rename…"}
                    </MenubarItem>
                    <MenubarItem>
                      {direction === "rtl" ? "بایگانی" : "Archive"}
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarAnatomyPreview }
