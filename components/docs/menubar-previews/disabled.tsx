"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Disabled bar — whole menubar inert while a blocking action runs.
 */
const MenubarDisabledPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Disabled</h2>
      <p className="text-sm text-muted-foreground">
        Set{" "}
        <code className="rounded bg-muted px-1 text-xs">disabled</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">Menubar</code> to lock
        every menu — useful during saves or modal workflows.
      </p>
      <ComponentPreview
        code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDisabled() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Menubar disabled>
        <MenubarMenu>
          <MenubarTrigger>Project</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New canvas</MenubarItem>
            <MenubarItem>Duplicate</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Share</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Copy link</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="text-xs text-muted-foreground">Saving draft…</p>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-start gap-2" dir={direction}>
            <Menubar disabled>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "پروژه" : "Project"}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    {direction === "rtl" ? "بوم جدید" : "New canvas"}
                  </MenubarItem>
                  <MenubarItem>
                    {direction === "rtl" ? "تکثیر" : "Duplicate"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "اشتراک" : "Share"}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    {direction === "rtl" ? "کپی لینک" : "Copy link"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <p className="text-xs text-muted-foreground">
              {direction === "rtl" ? "در حال ذخیره پیش‌نویس…" : "Saving draft…"}
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarDisabledPreview }
