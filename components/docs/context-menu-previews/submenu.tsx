"use client"

import {
  CreditCard,
  Mail,
  MessageSquare,
  Plus,
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
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

/**
 * Nested submenu — Sub + SubTrigger + SubContent on the logical end side.
 */
const ContextMenuSubmenuPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Submenu</h2>
      <p className="text-sm text-muted-foreground">
        Compose{" "}
        <code className="rounded bg-muted px-1 text-xs">ContextMenuSub</code>,{" "}
        <code className="rounded bg-muted px-1 text-xs">
          ContextMenuSubTrigger
        </code>
        , and{" "}
        <code className="rounded bg-muted px-1 text-xs">
          ContextMenuSubContent
        </code>
        . Chevron flips in RTL.
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

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Users />
            Invite users
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
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
              <UserPlus />
              More…
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Plus />
            More tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>
              <CreditCard />
              Billing
            </ContextMenuItem>
            <ContextMenuItem>Developer tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
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
            <ContextMenuContent className="w-52" dir={direction}>
              <ContextMenuGroup>
                <ContextMenuLabel>
                  {direction === "rtl" ? "اقدامات" : "Actions"}
                </ContextMenuLabel>
                <ContextMenuItem>
                  {direction === "rtl" ? "بازگشت" : "Back"}
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  {direction === "rtl" ? "جلو" : "Forward"}
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  {direction === "rtl" ? "بارگذاری مجدد" : "Reload"}
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <Users />
                  {direction === "rtl" ? "دعوت کاربران" : "Invite users"}
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
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
                    <UserPlus />
                    {direction === "rtl" ? "بیشتر…" : "More…"}
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <Plus />
                  {direction === "rtl" ? "ابزار بیشتر" : "More tools"}
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuItem>
                    <CreditCard />
                    {direction === "rtl" ? "صورتحساب" : "Billing"}
                  </ContextMenuItem>
                  <ContextMenuItem>
                    {direction === "rtl" ? "ابزار توسعه‌دهنده" : "Developer tools"}
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ContextMenuSubmenuPreview }
