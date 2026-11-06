"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

/**
 * Vertical orientation — stacks triggers for side rails / narrow tool chrome.
 */
const MenubarVerticalPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Vertical</h2>
      <p className="text-sm text-muted-foreground">
        Pass{" "}
        <code className="rounded bg-muted px-1 text-xs">
          orientation=&quot;vertical&quot;
        </code>{" "}
        and stack the bar with{" "}
        <code className="rounded bg-muted px-1 text-xs">flex-col</code> for a
        side rail.
      </p>
      <ComponentPreview
        code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarVertical() {
  return (
    <Menubar
      orientation="vertical"
      className="h-auto w-40 flex-col items-stretch"
    >
      <MenubarMenu>
        <MenubarTrigger className="w-full justify-start">Tools</MenubarTrigger>
        <MenubarContent side="inline-end" align="start">
          <MenubarItem>
            Move <MenubarShortcut>V</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Frame <MenubarShortcut>F</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Hand <MenubarShortcut>H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="w-full justify-start">Arrange</MenubarTrigger>
        <MenubarContent side="inline-end" align="start">
          <MenubarItem>Bring forward</MenubarItem>
          <MenubarItem>Send backward</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Group selection</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
      >
        {(direction) => (
          <div dir={direction}>
            <Menubar
              orientation="vertical"
              className="h-auto w-40 flex-col items-stretch"
            >
              <MenubarMenu>
                <MenubarTrigger className="w-full justify-start">
                  {direction === "rtl" ? "ابزار" : "Tools"}
                </MenubarTrigger>
                <MenubarContent side="inline-end" align="start">
                  <MenubarItem>
                    {direction === "rtl" ? "جابه‌جایی" : "Move"}{" "}
                    <MenubarShortcut>V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    {direction === "rtl" ? "فریم" : "Frame"}{" "}
                    <MenubarShortcut>F</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "دست" : "Hand"}{" "}
                    <MenubarShortcut>H</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="w-full justify-start">
                  {direction === "rtl" ? "چینش" : "Arrange"}
                </MenubarTrigger>
                <MenubarContent side="inline-end" align="start">
                  <MenubarItem>
                    {direction === "rtl" ? "آوردن به جلو" : "Bring forward"}
                  </MenubarItem>
                  <MenubarItem>
                    {direction === "rtl" ? "فرستادن به عقب" : "Send backward"}
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    {direction === "rtl" ? "گروه‌بندی" : "Group selection"}
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

export { MenubarVerticalPreview }
