"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLinkItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Original nk pattern — registry studio chrome with links, publish toggles, and a package flyout.
 */
const MenubarRegistryStudioPreview = () => {
  const [watchBuild, setWatchBuild] = useState(true)
  const [strictTypes, setStrictTypes] = useState(true)

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Registry studio</h2>
      <p className="text-sm text-muted-foreground">
        Product pattern for nk — package menus, doc links via{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarLinkItem</code>,
        and publish toggles beside a live status chip.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLinkItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarRegistryStudio() {
  const [watchBuild, setWatchBuild] = useState(true)
  const [strictTypes, setStrictTypes] = useState(true)

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Package</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Add</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>UI primitive</MenubarItem>
                  <MenubarItem>Composite</MenubarItem>
                  <MenubarItem>Example block</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Run registry:build <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Open CHANGELOG</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Docs</MenubarTrigger>
            <MenubarContent>
              <MenubarLinkItem href="/docs/components">
                Components index
              </MenubarLinkItem>
              <MenubarLinkItem href="/docs/installation">
                Installation
              </MenubarLinkItem>
              <MenubarSeparator />
              <MenubarItem>Copy page markdown</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Publish</MenubarTrigger>
            <MenubarContent className="w-56">
              <MenubarCheckboxItem
                checked={watchBuild}
                onCheckedChange={(checked) => setWatchBuild(checked === true)}
              >
                Watch build
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={strictTypes}
                onCheckedChange={(checked) => setStrictTypes(checked === true)}
              >
                Strict types
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>Ship to @nk registry</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Badge variant={watchBuild ? "success" : "outline"} size="sm">
          {watchBuild ? "watching" : "idle"}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground">
        Strict types {strictTypes ? "on" : "off"} · ready for registry:build
      </p>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex flex-col items-start gap-3" dir={direction}>
            <div className="flex flex-wrap items-center gap-3">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    {direction === "rtl" ? "بسته" : "Package"}
                  </MenubarTrigger>
                  <MenubarContent
                    align={direction === "rtl" ? "end" : "start"}
                  >
                    <MenubarSub>
                      <MenubarSubTrigger>
                        {direction === "rtl" ? "افزودن" : "Add"}
                      </MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>
                          {direction === "rtl"
                            ? "پریمیتیو UI"
                            : "UI primitive"}
                        </MenubarItem>
                        <MenubarItem>
                          {direction === "rtl" ? "ترکیبی" : "Composite"}
                        </MenubarItem>
                        <MenubarItem>
                          {direction === "rtl" ? "بلوک نمونه" : "Example block"}
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      {direction === "rtl"
                        ? "اجرای registry:build"
                        : "Run registry:build"}{" "}
                      <MenubarShortcut>⌘B</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      {direction === "rtl"
                        ? "باز کردن CHANGELOG"
                        : "Open CHANGELOG"}
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    {direction === "rtl" ? "مستندات" : "Docs"}
                  </MenubarTrigger>
                  <MenubarContent
                    align={direction === "rtl" ? "end" : "start"}
                  >
                    <MenubarLinkItem href="/docs/components">
                      {direction === "rtl"
                        ? "فهرست کامپوننت‌ها"
                        : "Components index"}
                    </MenubarLinkItem>
                    <MenubarLinkItem href="/docs/installation">
                      {direction === "rtl" ? "نصب" : "Installation"}
                    </MenubarLinkItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      {direction === "rtl"
                        ? "کپی مارک‌داون صفحه"
                        : "Copy page markdown"}
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    {direction === "rtl" ? "انتشار" : "Publish"}
                  </MenubarTrigger>
                  <MenubarContent
                    className="w-56"
                    align={direction === "rtl" ? "end" : "start"}
                  >
                    <MenubarCheckboxItem
                      checked={watchBuild}
                      onCheckedChange={(checked) => {
                        setWatchBuild(checked === true)
                      }}
                    >
                      {direction === "rtl" ? "نظارت بیلد" : "Watch build"}
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                      checked={strictTypes}
                      onCheckedChange={(checked) => {
                        setStrictTypes(checked === true)
                      }}
                    >
                      {direction === "rtl" ? "تایپ سخت‌گیرانه" : "Strict types"}
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      {direction === "rtl"
                        ? "ارسال به رجیستری @nk"
                        : "Ship to @nk registry"}
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <Badge variant={watchBuild ? "success" : "outline"} size="sm">
                {watchBuild
                  ? direction === "rtl"
                    ? "در حال نظارت"
                    : "watching"
                  : direction === "rtl"
                    ? "آرام"
                    : "idle"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {direction === "rtl"
                ? `تایپ سخت‌گیرانه ${strictTypes ? "روشن" : "خاموش"} · آماده برای registry:build`
                : `Strict types ${strictTypes ? "on" : "off"} · ready for registry:build`}
            </p>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarRegistryStudioPreview }
