"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

/**
 * Popover docs examples — basic, fields, sides, align, footer, arrow, controlled.
 */
const PopoverPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the width and height for the canvas.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}`}
        >
          {(direction) => (
            <Popover>
              <PopoverTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "باز کردن" : "Open popover"}
              </PopoverTrigger>
              <PopoverContent dir={direction}>
                <PopoverHeader>
                  <PopoverTitle>
                    {direction === "rtl" ? "ابعاد" : "Dimensions"}
                  </PopoverTitle>
                  <PopoverDescription>
                    {direction === "rtl"
                      ? "عرض و ارتفاع بوم را تنظیم کنید."
                      : "Set the width and height for the canvas."}
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With fields</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverForm() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Edit
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Profile</PopoverTitle>
        </PopoverHeader>
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input defaultValue="Ada Lovelace" />
        </Field>
      </PopoverContent>
    </Popover>
  )
}`}
        >
          {(direction) => (
            <Popover>
              <PopoverTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "ویرایش" : "Edit"}
              </PopoverTrigger>
              <PopoverContent className="w-72" dir={direction}>
                <PopoverHeader>
                  <PopoverTitle>
                    {direction === "rtl" ? "پروفایل" : "Profile"}
                  </PopoverTitle>
                </PopoverHeader>
                <Field name="name">
                  <FieldLabel>
                    {direction === "rtl" ? "نام" : "Name"}
                  </FieldLabel>
                  <Input defaultValue="Ada Lovelace" />
                </Field>
              </PopoverContent>
            </Popover>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sides</h2>
        <p className="text-sm text-muted-foreground">
          Prefer{" "}
          <code className="rounded bg-muted px-1 text-xs">inline-start</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">inline-end</code> for
          LTR/RTL. Physical{" "}
          <code className="rounded bg-muted px-1 text-xs">left</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">right</code> stay fixed.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverSides() {
  return (
    <div className="flex flex-wrap gap-2">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>
          Top
        </PopoverTrigger>
        <PopoverContent side="top" className="w-auto">
          <PopoverTitle>Top</PopoverTitle>
        </PopoverContent>
      </Popover>
      {/* bottom, left, right, inline-start, inline-end */}
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap justify-center gap-2 py-8">
              {(
                [
                  ["top", direction === "rtl" ? "بالا" : "Top"],
                  ["right", direction === "rtl" ? "راست" : "Right"],
                  ["bottom", direction === "rtl" ? "پایین" : "Bottom"],
                  ["left", direction === "rtl" ? "چپ" : "Left"],
                  [
                    "inline-end",
                    direction === "rtl" ? "پایان خط" : "Inline end",
                  ],
                  [
                    "inline-start",
                    direction === "rtl" ? "شروع خط" : "Inline start",
                  ],
                ] as const
              ).map(([side, label]) => (
                <Popover key={side}>
                  <PopoverTrigger
                    render={
                      <Button type="button" variant="outline" size="sm" />
                    }
                  >
                    {label}
                  </PopoverTrigger>
                  <PopoverContent side={side} className="w-auto" dir={direction}>
                    <PopoverTitle>{label}</PopoverTitle>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Align</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverAlign() {
  return (
    <div className="flex flex-wrap gap-2">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Start
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" className="w-auto">
          <PopoverTitle>Aligned start</PopoverTitle>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Center
        </PopoverTrigger>
        <PopoverContent side="bottom" align="center" className="w-auto">
          <PopoverTitle>Aligned center</PopoverTitle>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          End
        </PopoverTrigger>
        <PopoverContent side="bottom" align="end" className="w-auto">
          <PopoverTitle>Aligned end</PopoverTitle>
        </PopoverContent>
      </Popover>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2 py-6">
              {(
                [
                  ["start", direction === "rtl" ? "شروع" : "Start"],
                  ["center", direction === "rtl" ? "وسط" : "Center"],
                  ["end", direction === "rtl" ? "پایان" : "End"],
                ] as const
              ).map(([align, label]) => (
                <Popover key={align}>
                  <PopoverTrigger
                    render={<Button type="button" variant="outline" />}
                  >
                    {label}
                  </PopoverTrigger>
                  <PopoverContent
                    side="bottom"
                    align={align}
                    className="w-auto"
                    dir={direction}
                  >
                    <PopoverTitle>
                      {direction === "rtl"
                        ? `تراز ${label}`
                        : `Aligned ${align}`}
                    </PopoverTitle>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Footer and close</h2>
        <p className="text-sm text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1 text-xs">PopoverFooter</code>{" "}
          for actions and{" "}
          <code className="rounded bg-muted px-1 text-xs">PopoverClose</code> to
          dismiss from inside the surface.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverWithFooter() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Confirm
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Apply filters?</PopoverTitle>
          <PopoverDescription>
            Active filters will update the table.
          </PopoverDescription>
        </PopoverHeader>
        <PopoverFooter>
          <PopoverClose render={<Button type="button" variant="outline" />}>
            Cancel
          </PopoverClose>
          <PopoverClose render={<Button type="button" />}>
            Apply
          </PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}`}
        >
          {(direction) => (
            <Popover>
              <PopoverTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "تأیید" : "Confirm"}
              </PopoverTrigger>
              <PopoverContent dir={direction}>
                <PopoverHeader>
                  <PopoverTitle>
                    {direction === "rtl" ? "اعمال فیلتر؟" : "Apply filters?"}
                  </PopoverTitle>
                  <PopoverDescription>
                    {direction === "rtl"
                      ? "فیلترهای فعال جدول را به‌روز می‌کنند."
                      : "Active filters will update the table."}
                  </PopoverDescription>
                </PopoverHeader>
                <PopoverFooter>
                  <PopoverClose
                    render={<Button type="button" variant="outline" />}
                  >
                    {direction === "rtl" ? "لغو" : "Cancel"}
                  </PopoverClose>
                  <PopoverClose render={<Button type="button" />}>
                    {direction === "rtl" ? "اعمال" : "Apply"}
                  </PopoverClose>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Arrow</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">
            showArrow
          </code>{" "}
          on{" "}
          <code className="rounded bg-muted px-1 text-xs">PopoverContent</code>{" "}
          when the surface should point at the trigger (off by default).
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverArrow() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        With arrow
      </PopoverTrigger>
      <PopoverContent showArrow>
        <PopoverHeader>
          <PopoverTitle>Quick tip</PopoverTitle>
          <PopoverDescription>
            The caret points at the trigger.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}`}
        >
          {(direction) => (
            <Popover>
              <PopoverTrigger render={<Button type="button" variant="outline" />}>
                {direction === "rtl" ? "با فلش" : "With arrow"}
              </PopoverTrigger>
              <PopoverContent showArrow dir={direction}>
                <PopoverHeader>
                  <PopoverTitle>
                    {direction === "rtl" ? "نکته سریع" : "Quick tip"}
                  </PopoverTitle>
                  <PopoverDescription>
                    {direction === "rtl"
                      ? "فلش به سمت دکمه اشاره می‌کند."
                      : "The caret points at the trigger."}
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <p className="text-sm text-muted-foreground">
          Drive open state with{" "}
          <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">onOpenChange</code> when
          another control should open or close the popover.
        </p>
        <ComponentPreview
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        Open from outside
      </Button>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="outline" />}>
          Trigger
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Controlled</PopoverTitle>
            <PopoverDescription>
              Open state lives in your component.
            </PopoverDescription>
          </PopoverHeader>
          <PopoverFooter>
            <PopoverClose render={<Button type="button" variant="outline" />}>
              Close
            </PopoverClose>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  )
}`}
        >
          {(direction) => <PopoverControlledDemo direction={direction} />}
        </ComponentPreview>
      </section>
    </div>
  )
}

type PopoverControlledDemoProps = {
  readonly direction: "ltr" | "rtl"
}

/**
 * Live controlled open demo for the docs preview.
 */
const PopoverControlledDemo = ({ direction }: PopoverControlledDemoProps) => {
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button type="button" variant="outline" />}>
          {direction === "rtl" ? "تریگر" : "Trigger"}
        </PopoverTrigger>
        <PopoverContent dir={direction}>
          <PopoverHeader>
            <PopoverTitle>
              {direction === "rtl" ? "کنترل‌شده" : "Controlled"}
            </PopoverTitle>
            <PopoverDescription>
              {direction === "rtl"
                ? "وضعیت باز بودن در کامپوننت شماست."
                : "Open state lives in your component."}
            </PopoverDescription>
          </PopoverHeader>
          <PopoverFooter>
            <PopoverClose render={<Button type="button" variant="outline" />}>
              {direction === "rtl" ? "بستن" : "Close"}
            </PopoverClose>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
      <p className="w-full text-center text-xs text-muted-foreground">
        {direction === "rtl" ? "وضعیت: " : "State: "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
          {open ? "open" : "closed"}
        </code>
      </p>
    </div>
  )
}

export { PopoverPreviews }
