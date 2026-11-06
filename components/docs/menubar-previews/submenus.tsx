"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Nested flyouts — Export and Insert menus with side panels.
 */
const MenubarSubmenusPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Submenus</h2>
      <p className="text-sm text-muted-foreground">
        Compose{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarSub</code>,{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarSubTrigger</code>
        , and{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarSubContent</code>{" "}
        for nested actions. Flyouts open on the logical end.
      </p>
      <ComponentPreview
        code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarSubmenus() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Export</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Raster</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PNG @1x</MenubarItem>
              <MenubarItem>PNG @2x</MenubarItem>
              <MenubarItem>WebP</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Vector</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>SVG</MenubarItem>
              <MenubarItem>PDF</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Copy as CSS <MenubarShortcut>⌥⌘C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Insert</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>From library</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Component</MenubarItem>
              <MenubarItem>Token set</MenubarItem>
              <MenubarItem>Icon</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Place image… <MenubarShortcut>⇧⌘K</MenubarShortcut>
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
                  {direction === "rtl" ? "خروجی" : "Export"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      {direction === "rtl" ? "رستر" : "Raster"}
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>PNG @1x</MenubarItem>
                      <MenubarItem>PNG @2x</MenubarItem>
                      <MenubarItem>WebP</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      {direction === "rtl" ? "وکتور" : "Vector"}
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>SVG</MenubarItem>
                      <MenubarItem>PDF</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "کپی به‌صورت CSS" : "Copy as CSS"}{" "}
                    <MenubarShortcut>⌥⌘C</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "درج" : "Insert"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      {direction === "rtl" ? "از کتابخانه" : "From library"}
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        {direction === "rtl" ? "کامپوننت" : "Component"}
                      </MenubarItem>
                      <MenubarItem>
                        {direction === "rtl" ? "مجموعه توکن" : "Token set"}
                      </MenubarItem>
                      <MenubarItem>
                        {direction === "rtl" ? "آیکون" : "Icon"}
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "قرار دادن تصویر…" : "Place image…"}{" "}
                    <MenubarShortcut>⇧⌘K</MenubarShortcut>
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

export { MenubarSubmenusPreview }
