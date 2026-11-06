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
 * Root options — non-modal overlay and focus looping at the bar edge.
 */
const MenubarRootOptionsPreview = () => {
  const [modal, setModal] = useState(false)
  const [loopFocus, setLoopFocus] = useState(false)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Root options</h2>
      <p className="text-sm text-muted-foreground">
        Base UI root props —{" "}
        <code className="rounded bg-muted px-1 text-xs">modal</code> (default{" "}
        <code className="rounded bg-muted px-1 text-xs">true</code>) and{" "}
        <code className="rounded bg-muted px-1 text-xs">loopFocus</code> (default{" "}
        <code className="rounded bg-muted px-1 text-xs">true</code>). Toggle below,
        then open a menu and try outside click / arrow keys across triggers.
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

export function MenubarRootOptions() {
  const [modal, setModal] = useState(false)
  const [loopFocus, setLoopFocus] = useState(false)

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant={modal ? "default" : "outline"}
          onClick={() => setModal((value) => !value)}
        >
          modal: {String(modal)}
        </Button>
        <Button
          type="button"
          size="sm"
          variant={loopFocus ? "default" : "outline"}
          onClick={() => setLoopFocus((value) => !value)}
        >
          loopFocus: {String(loopFocus)}
        </Button>
      </div>
      <Menubar modal={modal} loopFocus={loopFocus}>
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
            <MenubarItem>Invite</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Docs</MenubarItem>
            <MenubarItem>Shortcuts</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="max-w-md text-xs text-muted-foreground">
        With modal false, outside UI stays interactive while a menu is open.
        With loopFocus false, arrowing past the last trigger stops instead of
        wrapping.
      </p>
    </div>
  )
}`}
        actions={(direction) => (
          <div className="flex flex-wrap gap-2" dir={direction}>
            <Button
              type="button"
              size="sm"
              variant={modal ? "default" : "outline"}
              onClick={() => {
                setModal((value) => !value)
              }}
            >
              modal: {String(modal)}
            </Button>
            <Button
              type="button"
              size="sm"
              variant={loopFocus ? "default" : "outline"}
              onClick={() => {
                setLoopFocus((value) => !value)
              }}
            >
              loopFocus: {String(loopFocus)}
            </Button>
          </div>
        )}
      >
        {(direction) => (
          <div className="flex flex-col items-start gap-3" dir={direction}>
            <Menubar modal={modal} loopFocus={loopFocus}>
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
                  <MenubarItem>
                    {direction === "rtl" ? "دعوت" : "Invite"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "راهنما" : "Help"}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    {direction === "rtl" ? "مستندات" : "Docs"}
                  </MenubarItem>
                  <MenubarItem>
                    {direction === "rtl" ? "میانبرها" : "Shortcuts"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <p className="max-w-md text-xs text-muted-foreground">
              {direction === "rtl"
                ? "با modal=false بیرون از منو قابل کلیک می‌ماند. با loopFocus=false فلش‌ها در انتهای نوار متوقف می‌شوند."
                : "With modal false, outside UI stays interactive while a menu is open. With loopFocus false, arrowing past the last trigger stops instead of wrapping."}
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarRootOptionsPreview }
