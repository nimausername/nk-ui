"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Controlled menu — parent owns open state for a single MenubarMenu.
 */
const MenubarControlledPreview = () => {
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Controlled</h2>
      <p className="text-sm text-muted-foreground">
        Drive{" "}
        <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
        <code className="rounded bg-muted px-1 text-xs">onOpenChange</code> on{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarMenu</code> when a
        secondary control should open the same menu.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarControlled() {
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setHelpOpen(true)}
      >
        Open Help
      </Button>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Project</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New canvas</MenubarItem>
            <MenubarItem>Duplicate</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu open={helpOpen} onOpenChange={setHelpOpen}>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Keyboard shortcuts</MenubarItem>
            <MenubarItem>Docs</MenubarItem>
            <MenubarItem>Contact support</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span className="text-xs text-muted-foreground tabular-nums">
        Help {helpOpen ? "open" : "closed"}
      </span>
    </div>
  )
}`}
      >
        {(direction) => (
          <div
            className="flex flex-wrap items-center gap-3"
            dir={direction}
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setHelpOpen(true)
              }}
            >
              {direction === "rtl" ? "باز کردن راهنما" : "Open Help"}
            </Button>
            <Menubar>
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
              <MenubarMenu open={helpOpen} onOpenChange={setHelpOpen}>
                <MenubarTrigger>
                  {direction === "rtl" ? "راهنما" : "Help"}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    {direction === "rtl"
                      ? "میانبرهای صفحه‌کلید"
                      : "Keyboard shortcuts"}
                  </MenubarItem>
                  <MenubarItem>
                    {direction === "rtl" ? "مستندات" : "Docs"}
                  </MenubarItem>
                  <MenubarItem>
                    {direction === "rtl" ? "پشتیبانی" : "Contact support"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <span className="text-xs text-muted-foreground tabular-nums">
              {direction === "rtl"
                ? `راهنما ${helpOpen ? "باز" : "بسته"}`
                : `Help ${helpOpen ? "open" : "closed"}`}
            </span>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarControlledPreview }
