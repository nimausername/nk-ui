"use client"

import { MoreHorizontal } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

/**
 * Core Card structure previews — anatomy, basic, action, bordered, form.
 */
const CardStructurePreviews = () => {
  return (
    <>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Card</strong>: bordered
            surface root
          </li>
          <li>
            <strong className="font-medium text-foreground">CardHeader</strong> /{" "}
            <strong className="font-medium text-foreground">CardTitle</strong> /{" "}
            <strong className="font-medium text-foreground">CardDescription</strong> /{" "}
            <strong className="font-medium text-foreground">CardAction</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">CardContent</strong> /{" "}
            <strong className="font-medium text-foreground">CardFooter</strong>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Title and description share{" "}
          <code className="rounded bg-muted px-1 text-xs">CardHeader</code>. The
          next sentence is{" "}
          <code className="rounded bg-muted px-1 text-xs">CardContent</code>, so
          the card’s section gap separates them.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardBasic() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          You have 3 unread messages from the last 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        Review alerts, mentions, and deployment updates in one place.
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button type="button" variant="outline">
          Dismiss
        </Button>
        <Button type="button">Open inbox</Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>
                  {direction === "rtl" ? "اعلان‌ها" : "Notifications"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl"
                    ? "۳ پیام خوانده‌نشده از ۲۴ ساعت گذشته دارید."
                    : "You have 3 unread messages from the last 24 hours."}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                {direction === "rtl"
                  ? "هشدارها، منشن‌ها و به‌روزرسانی‌های استقرار را در یک جا ببینید."
                  : "Review alerts, mentions, and deployment updates in one place."}
              </CardContent>
              <CardFooter className="justify-end">
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "رد کردن" : "Dismiss"}
                </Button>
                <Button type="button">
                  {direction === "rtl" ? "باز کردن صندوق" : "Open inbox"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With action</h2>
        <p className="text-sm text-muted-foreground">
          The member line is{" "}
          <code className="rounded bg-muted px-1 text-xs">CardDescription</code>.
          The sentence under it is{" "}
          <code className="rounded bg-muted px-1 text-xs">CardContent</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { MoreHorizontal } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardWithAction() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Team</CardTitle>
        <CardDescription>12 members · 3 pending invites</CardDescription>
        <CardAction>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="More">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="text-sm">
        Manage roles and access for everyone in this workspace.
      </CardContent>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>{direction === "rtl" ? "تیم" : "Team"}</CardTitle>
                <CardDescription>
                  {direction === "rtl"
                    ? "۱۲ عضو · ۳ دعوت در انتظار"
                    : "12 members · 3 pending invites"}
                </CardDescription>
                <CardAction>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    aria-label={direction === "rtl" ? "بیشتر" : "More"}
                  >
                    <MoreHorizontal />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="text-sm">
                {direction === "rtl"
                  ? "نقش‌ها و دسترسی همه افراد این فضای کاری را مدیریت کنید."
                  : "Manage roles and access for everyone in this workspace."}
              </CardContent>
            </Card>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Bordered sections</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardBorderedSections() {
  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <CardHeader className="border-b border-border py-5">
        <CardTitle>Billing</CardTitle>
        <CardDescription>Invoice settings for this project.</CardDescription>
      </CardHeader>
      <CardContent className="py-5 text-sm">
        Next invoice on the 1st of each month. Seats are billed annually.
      </CardContent>
      <CardFooter className="justify-end border-t border-border py-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Save</Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="w-full max-w-md gap-0 py-0">
              <CardHeader className="border-b border-border py-5">
                <CardTitle>
                  {direction === "rtl" ? "صورتحساب" : "Billing"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl"
                    ? "تنظیمات فاکتور برای این پروژه."
                    : "Invoice settings for this project."}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-5 text-sm">
                {direction === "rtl"
                  ? "فاکتور بعدی در اول هر ماه صادر می‌شود. صندلی‌ها سالانه محاسبه می‌شوند."
                  : "Next invoice on the 1st of each month. Seats are billed annually."}
              </CardContent>
              <CardFooter className="justify-end border-t border-border py-4">
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "لغو" : "Cancel"}
                </Button>
                <Button type="button">
                  {direction === "rtl" ? "ذخیره" : "Save"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Form</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function CardForm() {
  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <CardHeader className="border-b border-border py-5">
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy a new project. You can change these later.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 py-5">
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input placeholder="Acme" />
          <FieldDescription>Shown on dashboards and invoices.</FieldDescription>
        </Field>
        <Field name="slug">
          <FieldLabel>Slug</FieldLabel>
          <Input placeholder="acme" />
          <FieldDescription>Used in URLs: acme.example.com</FieldDescription>
        </Field>
      </CardContent>
      <CardFooter className="justify-end border-t border-border py-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="button">Create</Button>
      </CardFooter>
    </Card>
  )
}`}
        >
          {(direction) => (
            <Card className="w-full max-w-md gap-0 py-0">
              <CardHeader className="border-b border-border py-5">
                <CardTitle>
                  {direction === "rtl" ? "ایجاد پروژه" : "Create project"}
                </CardTitle>
                <CardDescription>
                  {direction === "rtl"
                    ? "یک پروژه جدید مستقر کنید. بعداً می‌توانید این‌ها را تغییر دهید."
                    : "Deploy a new project. You can change these later."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 py-5">
                <Field name="name">
                  <FieldLabel>
                    {direction === "rtl" ? "نام" : "Name"}
                  </FieldLabel>
                  <Input placeholder={direction === "rtl" ? "اکمه" : "Acme"} />
                  <FieldDescription>
                    {direction === "rtl"
                      ? "در داشبورد و فاکتورها نمایش داده می‌شود."
                      : "Shown on dashboards and invoices."}
                  </FieldDescription>
                </Field>
                <Field name="slug">
                  <FieldLabel>
                    {direction === "rtl" ? "اسلاگ" : "Slug"}
                  </FieldLabel>
                  <Input placeholder="acme" />
                  <FieldDescription>
                    {direction === "rtl"
                      ? "در URLها استفاده می‌شود: acme.example.com"
                      : "Used in URLs: acme.example.com"}
                  </FieldDescription>
                </Field>
              </CardContent>
              <CardFooter className="justify-end border-t border-border py-4">
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "لغو" : "Cancel"}
                </Button>
                <Button type="button">
                  {direction === "rtl" ? "ایجاد" : "Create"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </ComponentPreview>
      </section>
    </>
  )
}

export { CardStructurePreviews }
