"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  type SheetSide,
  type SheetSize,
} from "@/components/ui/sheet"

/**
 * Sheet docs examples — sides, size, form body, no close, controlled.
 */
const SheetPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">End (default)</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetEnd() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open sheet
      </SheetTrigger>
      <SheetContent side="end">
        <SheetHeader>
          <SheetTitle>Edit panel</SheetTitle>
          <SheetDescription>
            Adjust settings without leaving the page.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <Button type="button">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`}
        >
          {(direction) => (
            <Sheet>
              <SheetTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "باز کردن پنل" : "Open sheet"}
              </SheetTrigger>
              <SheetContent side="end">
                <SheetHeader>
                  <SheetTitle>
                    {direction === "rtl" ? "ویرایش پنل" : "Edit panel"}
                  </SheetTitle>
                  <SheetDescription>
                    {direction === "rtl"
                      ? "تنظیمات را بدون ترک صفحه تغییر دهید."
                      : "Adjust settings without leaving the page."}
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose
                    render={<Button type="button" variant="outline" />}
                  >
                    {direction === "rtl" ? "لغو" : "Cancel"}
                  </SheetClose>
                  <Button type="button">
                    {direction === "rtl" ? "ذخیره" : "Save"}
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sides</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">start</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">end</code> are{" "}
          <strong className="font-medium text-foreground">logical</strong> — they
          swap when you toggle LTR/RTL.{" "}
          <code className="rounded bg-muted px-1 text-xs">left</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">right</code> are{" "}
          <strong className="font-medium text-foreground">physical</strong> — they
          stay on that screen edge in every locale.{" "}
          <code className="rounded bg-muted px-1 text-xs">top</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">bottom</code> are fixed
          horizontal drawers.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetSides() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" size="sm" />}>
          end
        </SheetTrigger>
        <SheetContent side="end">
          <SheetHeader>
            <SheetTitle>end</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {/* start, top, bottom, left, right */}
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap justify-center gap-2">
              {(
                [
                  [
                    "end",
                    direction === "rtl" ? "پایان (منطقی)" : "end (logical)",
                    direction === "rtl"
                      ? "منطقی — در RTL سمت چپ صفحه"
                      : "Logical — right in LTR, left in RTL",
                  ],
                  [
                    "start",
                    direction === "rtl" ? "شروع (منطقی)" : "start (logical)",
                    direction === "rtl"
                      ? "منطقی — در RTL سمت راست صفحه"
                      : "Logical — left in LTR, right in RTL",
                  ],
                  [
                    "right",
                    direction === "rtl" ? "راست (فیزیکی)" : "right (physical)",
                    direction === "rtl"
                      ? "فیزیکی — همیشه راست صفحه"
                      : "Physical — always the right edge",
                  ],
                  [
                    "left",
                    direction === "rtl" ? "چپ (فیزیکی)" : "left (physical)",
                    direction === "rtl"
                      ? "فیزیکی — همیشه چپ صفحه"
                      : "Physical — always the left edge",
                  ],
                  [
                    "top",
                    direction === "rtl" ? "بالا" : "top",
                    direction === "rtl"
                      ? "کشوی بالا"
                      : "Top edge drawer",
                  ],
                  [
                    "bottom",
                    direction === "rtl" ? "پایین" : "bottom",
                    direction === "rtl"
                      ? "کشوی پایین"
                      : "Bottom edge drawer",
                  ],
                ] as const satisfies ReadonlyArray<
                  readonly [SheetSide, string, string]
                >
              ).map(([side, label, hint]) => (
                <Sheet key={side}>
                  <SheetTrigger
                    render={
                      <Button type="button" variant="outline" size="sm" />
                    }
                  >
                    {label}
                  </SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader>
                      <SheetTitle>
                        <code className="text-sm">{side}</code>
                      </SheetTitle>
                      <SheetDescription>{hint}</SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Size</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">size</code> sets max
          width on side sheets (
          <code className="rounded bg-muted px-1 text-xs">sm</code> default →{" "}
          <code className="rounded bg-muted px-1 text-xs">full</code>). On{" "}
          <code className="rounded bg-muted px-1 text-xs">top</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">bottom</code> it sets
          a fixed height (content scrolls in{" "}
          <code className="rounded bg-muted px-1 text-xs">SheetBody</code>).
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetSizes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger render={<Button variant="outline" size="sm" />}>
          sm
        </SheetTrigger>
        <SheetContent side="end" size="sm">
          <SheetHeader>
            <SheetTitle>sm</SheetTitle>
            <SheetDescription>Default max width (max-w-sm).</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {/* md, lg, xl, full */}
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap justify-center gap-2">
              {(
                [
                  ["sm", "max-w-sm"],
                  ["md", "max-w-md"],
                  ["lg", "max-w-lg"],
                  ["xl", "max-w-xl"],
                  ["full", "full width"],
                ] as const satisfies ReadonlyArray<
                  readonly [SheetSize, string]
                >
              ).map(([size, hint]) => (
                <Sheet key={size}>
                  <SheetTrigger
                    render={
                      <Button type="button" variant="outline" size="sm" />
                    }
                  >
                    {size}
                  </SheetTrigger>
                  <SheetContent side="end" size={size}>
                    <SheetHeader>
                      <SheetTitle>
                        <code className="text-sm">{size}</code>
                      </SheetTitle>
                      <SheetDescription>
                        {direction === "rtl"
                          ? `عرض پنل: ${hint}`
                          : `Side panel width: ${hint}`}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              ))}
              <Sheet>
                <SheetTrigger
                  render={<Button type="button" variant="outline" size="sm" />}
                >
                  {direction === "rtl" ? "پایین lg" : "bottom lg"}
                </SheetTrigger>
                <SheetContent side="bottom" size="lg">
                  <SheetHeader>
                    <SheetTitle>
                      <code className="text-sm">bottom · lg</code>
                    </SheetTitle>
                    <SheetDescription>
                      {direction === "rtl"
                        ? "روی کشوهای بالا/پایین، size ارتفاع ثابت می‌دهد (اینجا ۷۰٪ صفحه)."
                        : "On top/bottom drawers, size sets height (here 70vh)."}
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With form body</h2>
        <p className="text-sm text-muted-foreground">
          Put scrollable fields in{" "}
          <code className="rounded bg-muted px-1 text-xs">SheetBody</code> so the
          footer stays pinned.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetForm() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Edit profile
      </SheetTrigger>
      <SheetContent side="end">
        <SheetHeader>
          <SheetTitle>Profile</SheetTitle>
          <SheetDescription>Update your public details.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <Field name="name">
            <FieldLabel>Name</FieldLabel>
            <Input defaultValue="Ada Lovelace" />
          </Field>
          <Field name="username">
            <FieldLabel>Username</FieldLabel>
            <Input defaultValue="@ada" />
          </Field>
        </SheetBody>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <Button type="button">Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`}
        >
          {(direction) => (
            <Sheet>
              <SheetTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "ویرایش پروفایل" : "Edit profile"}
              </SheetTrigger>
              <SheetContent side="end">
                <SheetHeader>
                  <SheetTitle>
                    {direction === "rtl" ? "پروفایل" : "Profile"}
                  </SheetTitle>
                  <SheetDescription>
                    {direction === "rtl"
                      ? "جزئیات عمومی خود را به‌روز کنید."
                      : "Update your public details."}
                  </SheetDescription>
                </SheetHeader>
                <SheetBody>
                  <Field name="name">
                    <FieldLabel>
                      {direction === "rtl" ? "نام" : "Name"}
                    </FieldLabel>
                    <Input defaultValue="Ada Lovelace" />
                  </Field>
                  <Field name="username">
                    <FieldLabel>
                      {direction === "rtl" ? "نام کاربری" : "Username"}
                    </FieldLabel>
                    <Input defaultValue="@ada" />
                  </Field>
                </SheetBody>
                <SheetFooter>
                  <SheetClose
                    render={<Button type="button" variant="outline" />}
                  >
                    {direction === "rtl" ? "لغو" : "Cancel"}
                  </SheetClose>
                  <Button type="button">
                    {direction === "rtl" ? "ذخیره" : "Save"}
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">No close button</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">
            showCloseButton=&#123;false&#125;
          </code>{" "}
          when footer actions (or Esc / overlay) are enough.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetNoClose() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Confirm
      </SheetTrigger>
      <SheetContent side="bottom" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Discard draft?</SheetTitle>
          <SheetDescription>
            You can still press Escape or click the overlay.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Keep</SheetClose>
          <SheetClose render={<Button />}>Discard</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`}
        >
          {(direction) => (
            <Sheet>
              <SheetTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "تأیید" : "Confirm"}
              </SheetTrigger>
              <SheetContent side="bottom" showCloseButton={false}>
                <SheetHeader>
                  <SheetTitle>
                    {direction === "rtl" ? "حذف پیش‌نویس؟" : "Discard draft?"}
                  </SheetTitle>
                  <SheetDescription>
                    {direction === "rtl"
                      ? "هنوز می‌توانید Escape بزنید یا روی پس‌زمینه کلیک کنید."
                      : "You can still press Escape or click the overlay."}
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose
                    render={<Button type="button" variant="outline" />}
                  >
                    {direction === "rtl" ? "نگه داشتن" : "Keep"}
                  </SheetClose>
                  <SheetClose render={<Button type="button" />}>
                    {direction === "rtl" ? "حذف" : "Discard"}
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <p className="text-sm text-muted-foreground">
          Drive open state with{" "}
          <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">onOpenChange</code>.
        </p>
        <ComponentPreview
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open from outside
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger render={<Button variant="outline" />}>
          Trigger
        </SheetTrigger>
        <SheetContent side="end">
          <SheetHeader>
            <SheetTitle>Controlled</SheetTitle>
            <SheetDescription>
              Open state lives in your component.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}`}
        >
          {(direction) => <SheetControlledDemo direction={direction} />}
        </ComponentPreview>
      </section>
    </div>
  )
}

type SheetControlledDemoProps = {
  readonly direction: "ltr" | "rtl"
}

/**
 * Live controlled open demo for the docs preview.
 */
const SheetControlledDemo = ({ direction }: SheetControlledDemoProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          setOpen(true)
        }}
      >
        {direction === "rtl" ? "باز کردن از بیرون" : "Open from outside"}
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger render={<Button type="button" variant="outline" />}>
          {direction === "rtl" ? "تریگر" : "Trigger"}
        </SheetTrigger>
        <SheetContent side="end">
          <SheetHeader>
            <SheetTitle>
              {direction === "rtl" ? "کنترل‌شده" : "Controlled"}
            </SheetTitle>
            <SheetDescription>
              {direction === "rtl"
                ? "وضعیت باز بودن در کامپوننت شماست."
                : "Open state lives in your component."}
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose render={<Button type="button" variant="outline" />}>
              {direction === "rtl" ? "بستن" : "Close"}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <p className="w-full text-center text-xs text-muted-foreground">
        {direction === "rtl" ? "وضعیت: " : "State: "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
          {open ? "open" : "closed"}
        </code>
      </p>
    </div>
  )
}

export { SheetPreviews }
