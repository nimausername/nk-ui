"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Radio groups — density and color scheme picks held in state.
 */
const MenubarRadiosPreview = () => {
  const [density, setDensity] = useState("default")
  const [scheme, setScheme] = useState("system")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Radios</h2>
      <p className="text-sm text-muted-foreground">
        Use{" "}
        <code className="rounded bg-muted px-1 text-xs">MenubarRadioGroup</code>{" "}
        when exactly one option should stay selected.
      </p>
      <ComponentPreview
        code={`"use client"

import { useState } from "react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarRadios() {
  const [density, setDensity] = useState("default")
  const [scheme, setScheme] = useState("system")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Density</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={density} onValueChange={setDensity}>
            <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
            <MenubarRadioItem value="default">Default</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>Reset density</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Appearance</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={scheme} onValueChange={setScheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">Match system</MenubarRadioItem>
          </MenubarRadioGroup>
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
                  {direction === "rtl" ? "تراکم" : "Density"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarRadioGroup
                    value={density}
                    onValueChange={setDensity}
                  >
                    <MenubarRadioItem value="compact">
                      {direction === "rtl" ? "فشرده" : "Compact"}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="default">
                      {direction === "rtl" ? "پیش‌فرض" : "Default"}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="comfortable">
                      {direction === "rtl" ? "راحت" : "Comfortable"}
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "بازنشانی تراکم" : "Reset density"}
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  {direction === "rtl" ? "ظاهر" : "Appearance"}
                </MenubarTrigger>
                <MenubarContent align={direction === "rtl" ? "end" : "start"}>
                  <MenubarRadioGroup value={scheme} onValueChange={setScheme}>
                    <MenubarRadioItem value="light">
                      {direction === "rtl" ? "روشن" : "Light"}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dark">
                      {direction === "rtl" ? "تیره" : "Dark"}
                    </MenubarRadioItem>
                    <MenubarRadioItem value="system">
                      {direction === "rtl" ? "مطابق سیستم" : "Match system"}
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { MenubarRadiosPreview }
