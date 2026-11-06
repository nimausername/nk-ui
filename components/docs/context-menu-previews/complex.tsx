"use client"

import { useState } from "react"
import {
  CreditCard,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Complex composition — icons, shortcuts, radios, and a nested submenu.
 */
const ContextMenuComplexPreview = () => {
  const [theme, setTheme] = useState("system")

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Complex</h2>
      <p className="text-sm text-muted-foreground">
        Icons, shortcuts, radios, and a nested submenu in one composition.
      </p>
      <ComponentPreview
        code={`import { useState } from "react"
import {
  CreditCard,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuComplex() {
  const [theme, setTheme] = useState("system")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>My Account</ContextMenuLabel>
          <ContextMenuItem>
            <User />
            Profile
            <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <CreditCard />
            Billing
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Settings />
            Settings
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Keyboard />
            Keyboard shortcuts
            <ContextMenuShortcut>⌘K</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Team</ContextMenuLabel>
          <ContextMenuItem>
            <Users />
            Team
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <UserPlus />
              Invite users
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>
                <Mail />
                Email
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageSquare />
                Message
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <Plus />
                More…
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <LogOut />
          Log out
          <ContextMenuShortcut>⇧⌘Q</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
      >
        {(direction) => (
          <ContextMenu>
            <ContextMenuTrigger className="flex h-40 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              {direction === "rtl" ? "اینجا راست‌کلیک کنید" : "Right click here"}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56" dir={direction}>
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "حساب من" : "My Account"}
                </ContextMenuLabel>
                <ContextMenuItem>
                  <User />
                  {direction === "rtl" ? "پروفایل" : "Profile"}
                  <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <CreditCard />
                  {direction === "rtl" ? "صورتحساب" : "Billing"}
                  <ContextMenuShortcut>⌘B</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Settings />
                  {direction === "rtl" ? "تنظیمات" : "Settings"}
                  <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <Keyboard />
                  {direction === "rtl" ? "میانبرهای صفحه کلید" : "Keyboard shortcuts"}
                  <ContextMenuShortcut>⌘K</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "تیم" : "Team"}
                </ContextMenuLabel>
                <ContextMenuItem>
                  <Users />
                  {direction === "rtl" ? "تیم" : "Team"}
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <UserPlus />
                    {direction === "rtl" ? "دعوت کاربران" : "Invite users"}
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>
                      <Mail />
                      {direction === "rtl" ? "ایمیل" : "Email"}
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <MessageSquare />
                      {direction === "rtl" ? "پیام" : "Message"}
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Plus />
                      {direction === "rtl" ? "بیشتر…" : "More…"}
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "تم" : "Theme"}
                </ContextMenuLabel>
                <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <ContextMenuRadioItem value="light">
                    {direction === "rtl" ? "روشن" : "Light"}
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="dark">
                    {direction === "rtl" ? "تیره" : "Dark"}
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="system">
                    {direction === "rtl" ? "سیستم" : "System"}
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <LogOut />
                {direction === "rtl" ? "خروج" : "Log out"}
                <ContextMenuShortcut>⇧⌘Q</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuComplexPreview }
