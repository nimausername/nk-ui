"use client"

import {
  CreditCard,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Settings,
  Trash2,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * Dropdown Menu docs examples — variants across composition patterns.
 */
const DropdownMenuPreviews = () => {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivity, setShowActivity] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [position, setPosition] = useState("bottom")
  const [theme, setTheme] = useState("system")

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Groups, labels, separators, and a destructive action.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "باز کردن منو" : "Open menu"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "حساب من" : "My Account"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "پروفایل" : "Profile"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "تنظیمات" : "Settings"}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "تیم" : "Team"}
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    {direction === "rtl" ? "خروج" : "Log out"}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Icons</h2>
        <p className="text-sm text-muted-foreground">
          Leading icons mute by default and brighten on focus.
        </p>
        <ComponentPreview
          code={`import { CreditCard, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Account
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "حساب" : "Account"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "حساب" : "Account"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <User />
                    {direction === "rtl" ? "پروفایل" : "Profile"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings />
                    {direction === "rtl" ? "تنظیمات" : "Settings"}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  {direction === "rtl" ? "خروج" : "Log out"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Shortcuts</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuShortcuts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Edit
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Edit</DropdownMenuLabel>
          <DropdownMenuItem>
            Undo
            <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Redo
            <DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Cut
            <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Paste
            <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "ویرایش" : "Edit"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "ویرایش" : "Edit"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "واگرد" : "Undo"}
                    <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "از نو" : "Redo"}
                    <DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "برش" : "Cut"}
                    <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    {direction === "rtl" ? "چسباندن" : "Paste"}
                    <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Destructive</h2>
        <ComponentPreview
          code={`import { LogOut, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDestructive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Actions
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Danger zone</DropdownMenuLabel>
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 />
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "اقدامات" : "Actions"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "منطقه خطر" : "Danger zone"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "بایگانی" : "Archive"}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2 />
                  {direction === "rtl" ? "حذف" : "Delete"}
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  {direction === "rtl" ? "خروج" : "Log out"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Checkboxes</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivity, setShowActivity] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        View
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivity}
            onCheckedChange={setShowActivity}
          >
            Activity bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
            disabled
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "نمایش" : "View"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "ظاهر" : "Appearance"}
                  </DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={(checked) => {
                      setShowStatusBar(Boolean(checked))
                    }}
                  >
                    {direction === "rtl" ? "نوار وضعیت" : "Status bar"}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showActivity}
                    onCheckedChange={(checked) => {
                      setShowActivity(Boolean(checked))
                    }}
                  >
                    {direction === "rtl" ? "نوار فعالیت" : "Activity bar"}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={(checked) => {
                      setShowPanel(Boolean(checked))
                    }}
                    disabled
                  >
                    {direction === "rtl" ? "پنل" : "Panel"}
                  </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Radio group</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadios() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Panel
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panel position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "پنل" : "Panel"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "موقعیت پنل" : "Panel position"}
                  </DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      {direction === "rtl" ? "بالا" : "Top"}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      {direction === "rtl" ? "پایین" : "Bottom"}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      {direction === "rtl" ? "راست" : "Right"}
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Submenu</h2>
        <p className="text-sm text-muted-foreground">
          Nest secondary actions with{" "}
          <code className="rounded bg-muted px-1 text-xs">DropdownMenuSub</code>
          . Opens on the logical end side.
        </p>
        <ComponentPreview
          code={`import {
  CreditCard,
  Mail,
  MessageSquare,
  Plus,
  UserPlus,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Share
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Team</DropdownMenuLabel>
          <DropdownMenuItem>
            <Users />
            Invite users
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              Invite
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Mail />
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare />
                  Message
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus />
                  More…
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "اشتراک" : "Share"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "تیم" : "Team"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Users />
                    {direction === "rtl" ? "دعوت کاربران" : "Invite users"}
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus />
                      {direction === "rtl" ? "دعوت" : "Invite"}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Mail />
                          {direction === "rtl" ? "ایمیل" : "Email"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare />
                          {direction === "rtl" ? "پیام" : "Message"}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Plus />
                          {direction === "rtl" ? "بیشتر…" : "More…"}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <CreditCard />
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Links & inset</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">DropdownMenuLinkItem</code>{" "}
          renders an anchor.{" "}
          <code className="rounded bg-muted px-1 text-xs">inset</code> aligns
          rows under a label without a leading icon.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Navigate
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Go to</DropdownMenuLabel>
          <DropdownMenuLinkItem href="#docs" inset closeOnClick>
            Documentation
          </DropdownMenuLinkItem>
          <DropdownMenuLinkItem href="#api" inset closeOnClick>
            API
          </DropdownMenuLinkItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Support</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "ناوبری" : "Navigate"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel inset>
                    {direction === "rtl" ? "برو به" : "Go to"}
                  </DropdownMenuLabel>
                  <DropdownMenuLinkItem href="#docs" inset closeOnClick>
                    {direction === "rtl" ? "مستندات" : "Documentation"}
                  </DropdownMenuLinkItem>
                  <DropdownMenuLinkItem href="#api" inset closeOnClick>
                    {direction === "rtl" ? "رابط برنامه‌نویسی" : "API"}
                  </DropdownMenuLinkItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem inset>
                  {direction === "rtl" ? "پشتیبانی" : "Support"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Align</h2>
        <p className="text-sm text-muted-foreground">
          Control placement with{" "}
          <code className="rounded bg-muted px-1 text-xs">align</code> on{" "}
          <code className="rounded bg-muted px-1 text-xs">DropdownMenuContent</code>.
        </p>
        <ComponentPreview
          code={`import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuAlign() {
  return (
    <div className="flex flex-wrap gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
          Start
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuItem>Action</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
          Center
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-40">
          <DropdownMenuItem>Action</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="icon-sm" />}>
          <MoreHorizontal />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Action</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button type="button" variant="outline" size="sm" />}
                >
                  {direction === "rtl" ? "شروع" : "Start"}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-40" dir={direction}>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "اقدام" : "Action"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button type="button" variant="outline" size="sm" />}
                >
                  {direction === "rtl" ? "وسط" : "Center"}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-40"
                  dir={direction}
                >
                  <DropdownMenuItem>
                    {direction === "rtl" ? "اقدام" : "Action"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button type="button" variant="outline" size="icon-sm" />
                  }
                >
                  <MoreHorizontal aria-hidden="true" />
                  <span className="sr-only">
                    {direction === "rtl" ? "بیشتر" : "More"}
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40" dir={direction}>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "اقدام" : "Action"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Complex</h2>
        <p className="text-sm text-muted-foreground">
          Icons, shortcuts, radios, and a nested submenu in one composition.
        </p>
        <ComponentPreview
          code={`import {
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
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuComplex() {
  const [theme, setTheme] = React.useState("system")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Complex menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard />
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Team</DropdownMenuLabel>
          <DropdownMenuItem>
            <Users />
            Team
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Mail />
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare />
                  Message
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus />
                  More…
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          {(direction) => (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "منوی کامل" : "Complex menu"}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" dir={direction}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "حساب من" : "My Account"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <User />
                    {direction === "rtl" ? "پروفایل" : "Profile"}
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings />
                    {direction === "rtl" ? "تنظیمات" : "Settings"}
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard />
                    {direction === "rtl" ? "میانبرها" : "Keyboard shortcuts"}
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "تیم" : "Team"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Users />
                    {direction === "rtl" ? "تیم" : "Team"}
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus />
                      {direction === "rtl" ? "دعوت کاربران" : "Invite users"}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Mail />
                          {direction === "rtl" ? "ایمیل" : "Email"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare />
                          {direction === "rtl" ? "پیام" : "Message"}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Plus />
                          {direction === "rtl" ? "بیشتر…" : "More…"}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    {direction === "rtl" ? "پوسته" : "Theme"}
                  </DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={theme}
                    onValueChange={setTheme}
                  >
                    <DropdownMenuRadioItem value="light">
                      {direction === "rtl" ? "روشن" : "Light"}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                      {direction === "rtl" ? "تاریک" : "Dark"}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system">
                      {direction === "rtl" ? "سیستم" : "System"}
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  {direction === "rtl" ? "خروج" : "Log out"}
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { DropdownMenuPreviews }
