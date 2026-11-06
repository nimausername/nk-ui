"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Full workspace bar — composition reference covering groups, toggles, radios, and a sub.
 */
const MenubarWorkspacePreview = () => {
  const [guides, setGuides] = useState(true)
  const [pixelGrid, setPixelGrid] = useState(false)
  const [workspace, setWorkspace] = useState("design")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Workspace</h2>
      <p className="text-sm text-muted-foreground">
        End-to-end composition for a design workspace — shortcuts, a Share
        flyout, canvas toggles, and an active workspace radio group.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarWorkspace() {
  const [guides, setGuides] = useState(true)
  const [pixelGrid, setPixelGrid] = useState(false)
  const [workspace, setWorkspace] = useState("design")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Canvas</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New frame <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Restore last closed</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Copy link</MenubarItem>
              <MenubarItem>Invite editors</MenubarItem>
              <MenubarItem>Present mode</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Export… <MenubarShortcut>⇧⌘E</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarLabel>Overlays</MenubarLabel>
            <MenubarCheckboxItem
              checked={guides}
              onCheckedChange={(checked) => setGuides(checked === true)}
            >
              Guides
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={pixelGrid}
              onCheckedChange={(checked) => setPixelGrid(checked === true)}
            >
              Pixel grid
            </MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>
              Zoom to fit <MenubarShortcut>⇧1</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Zoom to selection
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Workspace</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={workspace} onValueChange={setWorkspace}>
            <MenubarRadioItem value="design">Design</MenubarRadioItem>
            <MenubarRadioItem value="prototype">Prototype</MenubarRadioItem>
            <MenubarRadioItem value="dev">Dev mode</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>Manage workspaces…</MenubarItem>
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
                  {direction === "rtl" ? "بوم" : "Canvas"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarGroup>
                    <MenubarItem>
                      {direction === "rtl" ? "فریم جدید" : "New frame"}{" "}
                      <MenubarShortcut>⌘F</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      {direction === "rtl"
                        ? "بازگردانی آخرین بسته‌شده"
                        : "Restore last closed"}
                    </MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      {direction === "rtl" ? "اشتراک" : "Share"}
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        {direction === "rtl" ? "کپی لینک" : "Copy link"}
                      </MenubarItem>
                      <MenubarItem>
                        {direction === "rtl"
                          ? "دعوت ویرایشگر"
                          : "Invite editors"}
                      </MenubarItem>
                      <MenubarItem>
                        {direction === "rtl" ? "حالت ارائه" : "Present mode"}
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "خروجی…" : "Export…"}{" "}
                    <MenubarShortcut>⇧⌘E</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "نما" : "View"}
                </MenubarTrigger>
                <MenubarContent
                  className="w-52"
                  align={direction === "rtl" ? "end" : "start"}
                >
                  <MenubarGroup>
                    <MenubarLabel>
                      {direction === "rtl" ? "لایه‌ها" : "Overlays"}
                    </MenubarLabel>
                    <MenubarCheckboxItem
                      checked={guides}
                      onCheckedChange={(checked) => {
                        setGuides(checked === true)
                      }}
                    >
                      {direction === "rtl" ? "راهنماها" : "Guides"}
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                      checked={pixelGrid}
                      onCheckedChange={(checked) => {
                        setPixelGrid(checked === true)
                      }}
                    >
                      {direction === "rtl" ? "شبکه پیکسل" : "Pixel grid"}
                    </MenubarCheckboxItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem>
                      {direction === "rtl" ? "زوم به کل" : "Zoom to fit"}{" "}
                      <MenubarShortcut>⇧1</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      {direction === "rtl"
                        ? "زوم به انتخاب"
                        : "Zoom to selection"}
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "فضای کاری" : "Workspace"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarRadioGroup
                    value={workspace}
                    onValueChange={setWorkspace}
                  >
                    <MenubarRadioItem value="design">
                      {direction === "rtl" ? "طراحی" : "Design"}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="prototype">
                      {direction === "rtl" ? "پروتوتایپ" : "Prototype"}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dev">
                      {direction === "rtl" ? "حالت توسعه" : "Dev mode"}
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl"
                      ? "مدیریت فضاها…"
                      : "Manage workspaces…"}
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

export { MenubarWorkspacePreview }
