"use client"

import {
  BookOpen,
  Boxes,
  Palette,
  Settings,
  Trash2,
} from "lucide-react"

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
 * Leading icons — library actions plus a destructive clear.
 */
const MenubarIconsPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With icons</h2>
      <p className="text-sm text-muted-foreground">
        Compose Lucide icons as children. Destructive rows use{" "}
        <code className="rounded bg-muted px-1 text-xs">
          {"variant=\"destructive\""}
        </code>
        .
      </p>
      <ComponentPreview
        code={`import {
  BookOpen,
  Boxes,
  Palette,
  Settings,
  Trash2,
} from "lucide-react"

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

export function MenubarIcons() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Library</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Boxes aria-hidden="true" />
            Components <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Palette aria-hidden="true" />
            Tokens
          </MenubarItem>
          <MenubarItem>
            <BookOpen aria-hidden="true" />
            Docs
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Settings aria-hidden="true" />
            Library settings
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Selection</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>Lock</MenubarItem>
            <MenubarItem>Hide</MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              <Trash2 aria-hidden="true" />
              Delete
            </MenubarItem>
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
                  {direction === "rtl" ? "کتابخانه" : "Library"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarItem>
                    <Boxes aria-hidden="true" />
                    {direction === "rtl" ? "کامپوننت‌ها" : "Components"}{" "}
                    <MenubarShortcut>⌘K</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Palette aria-hidden="true" />
                    {direction === "rtl" ? "توکن‌ها" : "Tokens"}
                  </MenubarItem>
                  <MenubarItem>
                    <BookOpen aria-hidden="true" />
                    {direction === "rtl" ? "مستندات" : "Docs"}
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Settings aria-hidden="true" />
                    {direction === "rtl"
                      ? "تنظیمات کتابخانه"
                      : "Library settings"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "انتخاب" : "Selection"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarGroup>
                    <MenubarItem>
                      {direction === "rtl" ? "قفل" : "Lock"}
                    </MenubarItem>
                    <MenubarItem>
                      {direction === "rtl" ? "پنهان" : "Hide"}
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem variant="destructive">
                      <Trash2 aria-hidden="true" />
                      {direction === "rtl" ? "حذف" : "Delete"}
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

export { MenubarIconsPreview }
