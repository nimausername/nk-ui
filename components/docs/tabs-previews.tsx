"use client"

import { Folder, Settings, User } from "lucide-react"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

/**
 * Tabs docs examples — basic, icons, disabled, controlled, vertical, indicator.
 */
const TabsPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Tabs</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">value</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">defaultValue</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">orientation</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">TabsList</strong> /{" "}
            <strong className="font-medium text-foreground">TabsTrigger</strong> /{" "}
            <strong className="font-medium text-foreground">TabsContent</strong>
          </li>
          <li>
            Optional <strong className="font-medium text-foreground">TabsIndicator</strong>{" "}
            for a sliding active pill
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsBasic() {
  return (
    <Tabs defaultValue="account" className="max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-md border border-border p-4 text-sm">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="rounded-md border border-border p-4 text-sm">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}`}
        >
          {(direction) => (
            <Tabs defaultValue="account" className="max-w-md">
              <TabsList>
                <TabsTrigger value="account">
                  {direction === "rtl" ? "حساب" : "Account"}
                </TabsTrigger>
                <TabsTrigger value="password">
                  {direction === "rtl" ? "رمز" : "Password"}
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="account"
                className="rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl"
                  ? "تغییرات حساب را اینجا اعمال کنید."
                  : "Make changes to your account here."}
              </TabsContent>
              <TabsContent
                value="password"
                className="rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl"
                  ? "رمز عبور را اینجا تغییر دهید."
                  : "Change your password here."}
              </TabsContent>
            </Tabs>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With icons</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Folder, Settings, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsWithIcons() {
  return (
    <Tabs defaultValue="profile" className="max-w-md">
      <TabsList>
        <TabsTrigger value="profile">
          <User />
          Profile
        </TabsTrigger>
        <TabsTrigger value="projects">
          <Folder />
          Projects
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-4 text-sm text-muted-foreground">
        Profile panel
      </TabsContent>
      <TabsContent value="projects" className="p-4 text-sm text-muted-foreground">
        Projects panel
      </TabsContent>
      <TabsContent value="settings" className="p-4 text-sm text-muted-foreground">
        Settings panel
      </TabsContent>
    </Tabs>
  )
}`}
        >
          {(direction) => (
            <Tabs defaultValue="profile" className="max-w-md">
              <TabsList>
                <TabsTrigger value="profile">
                  <User />
                  {direction === "rtl" ? "پروفایل" : "Profile"}
                </TabsTrigger>
                <TabsTrigger value="projects">
                  <Folder />
                  {direction === "rtl" ? "پروژه‌ها" : "Projects"}
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings />
                  {direction === "rtl" ? "تنظیمات" : "Settings"}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="p-4 text-sm text-muted-foreground">
                {direction === "rtl" ? "پنل پروفایل" : "Profile panel"}
              </TabsContent>
              <TabsContent value="projects" className="p-4 text-sm text-muted-foreground">
                {direction === "rtl" ? "پنل پروژه‌ها" : "Projects panel"}
              </TabsContent>
              <TabsContent value="settings" className="p-4 text-sm text-muted-foreground">
                {direction === "rtl" ? "پنل تنظیمات" : "Settings panel"}
              </TabsContent>
            </Tabs>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled tab</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDisabled() {
  return (
    <Tabs defaultValue="overview" className="max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="billing" disabled>
          Billing
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 text-sm">
        Overview content
      </TabsContent>
      <TabsContent value="billing" className="p-4 text-sm">
        Billing content
      </TabsContent>
      <TabsContent value="team" className="p-4 text-sm">
        Team content
      </TabsContent>
    </Tabs>
  )
}`}
        >
          {(direction) => (
            <Tabs defaultValue="overview" className="max-w-md">
              <TabsList>
                <TabsTrigger value="overview">
                  {direction === "rtl" ? "نمای کلی" : "Overview"}
                </TabsTrigger>
                <TabsTrigger value="billing" disabled>
                  {direction === "rtl" ? "صورتحساب" : "Billing"}
                </TabsTrigger>
                <TabsTrigger value="team">
                  {direction === "rtl" ? "تیم" : "Team"}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 text-sm">
                {direction === "rtl" ? "محتوای نمای کلی" : "Overview content"}
              </TabsContent>
              <TabsContent value="billing" className="p-4 text-sm">
                {direction === "rtl" ? "محتوای صورتحساب" : "Billing content"}
              </TabsContent>
              <TabsContent value="team" className="p-4 text-sm">
                {direction === "rtl" ? "محتوای تیم" : "Team content"}
              </TabsContent>
            </Tabs>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsControlled() {
  const [value, setValue] = useState("one")

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button type="button" size="sm" variant="outline" onClick={() => setValue("two")}>
          Go to Two
        </Button>
      </div>
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one" className="p-4 text-sm">
          Panel one
        </TabsContent>
        <TabsContent value="two" className="p-4 text-sm">
          Panel two
        </TabsContent>
      </Tabs>
    </div>
  )
}`}
        >
          {(direction) => <TabsControlledPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With indicator</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsWithIndicator() {
  return (
    <Tabs defaultValue="inbox" className="max-w-md">
      <TabsList className="bg-transparent p-0">
        <TabsTrigger
          value="inbox"
          className="data-active:bg-transparent data-active:shadow-none"
        >
          Inbox
        </TabsTrigger>
        <TabsTrigger
          value="sent"
          className="data-active:bg-transparent data-active:shadow-none"
        >
          Sent
        </TabsTrigger>
        <TabsIndicator className="rounded-md bg-muted" />
      </TabsList>
      <TabsContent value="inbox" className="p-4 text-sm">
        Inbox messages
      </TabsContent>
      <TabsContent value="sent" className="p-4 text-sm">
        Sent messages
      </TabsContent>
    </Tabs>
  )
}`}
        >
          {(direction) => (
            <Tabs defaultValue="inbox" className="max-w-md">
              <TabsList className="bg-transparent p-0">
                <TabsTrigger
                  value="inbox"
                  className="z-10 data-active:bg-transparent data-active:shadow-none"
                >
                  {direction === "rtl" ? "ورودی" : "Inbox"}
                </TabsTrigger>
                <TabsTrigger
                  value="sent"
                  className="z-10 data-active:bg-transparent data-active:shadow-none"
                >
                  {direction === "rtl" ? "ارسال‌شده" : "Sent"}
                </TabsTrigger>
                <TabsIndicator className="rounded-md bg-muted" />
              </TabsList>
              <TabsContent value="inbox" className="p-4 text-sm">
                {direction === "rtl" ? "پیام‌های ورودی" : "Inbox messages"}
              </TabsContent>
              <TabsContent value="sent" className="p-4 text-sm">
                {direction === "rtl" ? "پیام‌های ارسال‌شده" : "Sent messages"}
              </TabsContent>
            </Tabs>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Vertical</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsVertical() {
  return (
    <Tabs
      defaultValue="general"
      orientation="vertical"
      className="max-w-lg flex-row gap-4"
    >
      <TabsList className="h-auto w-36 flex-col">
        <TabsTrigger value="general" className="w-full justify-start">
          General
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full justify-start">
          Security
        </TabsTrigger>
        <TabsTrigger value="advanced" className="w-full justify-start">
          Advanced
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="flex-1 rounded-md border border-border p-4 text-sm">
        General settings
      </TabsContent>
      <TabsContent value="security" className="flex-1 rounded-md border border-border p-4 text-sm">
        Security settings
      </TabsContent>
      <TabsContent value="advanced" className="flex-1 rounded-md border border-border p-4 text-sm">
        Advanced settings
      </TabsContent>
    </Tabs>
  )
}`}
        >
          {(direction) => (
            <Tabs
              defaultValue="general"
              orientation="vertical"
              className="max-w-lg flex-row gap-4"
            >
              <TabsList className="h-auto w-36 flex-col">
                <TabsTrigger value="general" className="w-full justify-start">
                  {direction === "rtl" ? "عمومی" : "General"}
                </TabsTrigger>
                <TabsTrigger value="security" className="w-full justify-start">
                  {direction === "rtl" ? "امنیت" : "Security"}
                </TabsTrigger>
                <TabsTrigger value="advanced" className="w-full justify-start">
                  {direction === "rtl" ? "پیشرفته" : "Advanced"}
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="general"
                className="flex-1 rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl" ? "تنظیمات عمومی" : "General settings"}
              </TabsContent>
              <TabsContent
                value="security"
                className="flex-1 rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl" ? "تنظیمات امنیت" : "Security settings"}
              </TabsContent>
              <TabsContent
                value="advanced"
                className="flex-1 rounded-md border border-border p-4 text-sm"
              >
                {direction === "rtl" ? "تنظیمات پیشرفته" : "Advanced settings"}
              </TabsContent>
            </Tabs>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

type PreviewDirection = "ltr" | "rtl"

const TabsControlledPreview = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [value, setValue] = useState("one")

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setValue("two")}
        >
          {direction === "rtl" ? "برو به دو" : "Go to Two"}
        </Button>
      </div>
      <Tabs value={value} onValueChange={(next) => setValue(String(next))}>
        <TabsList>
          <TabsTrigger value="one">
            {direction === "rtl" ? "یک" : "One"}
          </TabsTrigger>
          <TabsTrigger value="two">
            {direction === "rtl" ? "دو" : "Two"}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="one" className="p-4 text-sm">
          {direction === "rtl" ? "پنل یک" : "Panel one"}
        </TabsContent>
        <TabsContent value="two" className="p-4 text-sm">
          {direction === "rtl" ? "پنل دو" : "Panel two"}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export { TabsPreviews }
