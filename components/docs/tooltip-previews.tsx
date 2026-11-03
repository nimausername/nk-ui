"use client"

import { Info, Plus, Save, Settings } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

/**
 * Tooltip docs examples — sides, variants, shortcuts, disabled, delay.
 */
const TooltipPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipBasic() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover me
      </TooltipTrigger>
      <TooltipContent>Short hint</TooltipContent>
    </Tooltip>
  )
}`}
        >
          {(direction) => (
            <Tooltip>
              <TooltipTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "نشانه‌گر" : "Hover me"}
              </TooltipTrigger>
              <TooltipContent dir={direction}>
                {direction === "rtl" ? "راهنمای کوتاه" : "Short hint"}
              </TooltipContent>
            </Tooltip>
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Top
        </TooltipTrigger>
        <TooltipContent side="top">Top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Right
        </TooltipTrigger>
        <TooltipContent side="right">Right</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Bottom
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Left
        </TooltipTrigger>
        <TooltipContent side="left">Left</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Inline end
        </TooltipTrigger>
        <TooltipContent side="inline-end">Inline end</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Inline start
        </TooltipTrigger>
        <TooltipContent side="inline-start">Inline start</TooltipContent>
      </Tooltip>
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
                <Tooltip key={side}>
                  <TooltipTrigger
                    render={
                      <Button type="button" variant="outline" size="sm" />
                    }
                  >
                    {label}
                  </TooltipTrigger>
                  <TooltipContent side={side} dir={direction}>
                    {label}
                  </TooltipContent>
                </Tooltip>
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipAlign() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Start
        </TooltipTrigger>
        <TooltipContent side="bottom" align="start">
          Aligned start
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Center
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center">
          Aligned center
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          End
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">
          Aligned end
        </TooltipContent>
      </Tooltip>
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
                <Tooltip key={align}>
                  <TooltipTrigger
                    render={<Button type="button" variant="outline" />}
                  >
                    {label}
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align={align} dir={direction}>
                    {direction === "rtl" ? `تراز ${label}` : `Aligned ${align}`}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">invert</code> (default)
          flips foreground/background.{" "}
          <code className="rounded bg-muted px-1 text-xs">outline</code> uses the
          popover surface.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Invert
        </TooltipTrigger>
        <TooltipContent variant="invert">Default chip</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Outline
        </TooltipTrigger>
        <TooltipContent variant="outline">Popover surface</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          No arrow
        </TooltipTrigger>
        <TooltipContent showArrow={false}>Without caret</TooltipContent>
      </Tooltip>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger
                  render={<Button type="button" variant="outline" />}
                >
                  {direction === "rtl" ? "معکوس" : "Invert"}
                </TooltipTrigger>
                <TooltipContent variant="invert" dir={direction}>
                  {direction === "rtl" ? "چیپ پیش‌فرض" : "Default chip"}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Button type="button" variant="outline" />}
                >
                  {direction === "rtl" ? "حاشیه‌دار" : "Outline"}
                </TooltipTrigger>
                <TooltipContent variant="outline" dir={direction}>
                  {direction === "rtl" ? "سطح پاپ‌اور" : "Popover surface"}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Button type="button" variant="outline" />}
                >
                  {direction === "rtl" ? "بدون فلش" : "No arrow"}
                </TooltipTrigger>
                <TooltipContent showArrow={false} dir={direction}>
                  {direction === "rtl" ? "بدون نشانگر" : "Without caret"}
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Keyboard shortcut</h2>
        <p className="text-sm text-muted-foreground">
          Nest a{" "}
          <code className="rounded bg-muted px-1 text-xs">
            {'<kbd data-slot="kbd">'}
          </code>{" "}
          for a shortcut chip.
        </p>
        <ComponentPreview
          code={`import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipShortcut() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="icon" />}>
        <Save />
        <span className="sr-only">Save</span>
      </TooltipTrigger>
      <TooltipContent>
        Save
        <kbd data-slot="kbd">⌘S</kbd>
      </TooltipContent>
    </Tooltip>
  )
}`}
        >
          {(direction) => (
            <Tooltip>
              <TooltipTrigger
                render={<Button type="button" variant="outline" size="icon" />}
              >
                <Save aria-hidden="true" />
                <span className="sr-only">
                  {direction === "rtl" ? "ذخیره" : "Save"}
                </span>
              </TooltipTrigger>
              <TooltipContent dir={direction}>
                {direction === "rtl" ? "ذخیره" : "Save"}
                <kbd data-slot="kbd">⌘S</kbd>
              </TooltipContent>
            </Tooltip>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Icon buttons</h2>
        <ComponentPreview
          code={`import { Info, Plus, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="icon" />}>
          <Plus />
          <span className="sr-only">Add</span>
        </TooltipTrigger>
        <TooltipContent>Add item</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="icon" />}>
          <Settings />
          <span className="sr-only">Settings</span>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="soft" size="icon" />}>
          <Info />
          <span className="sr-only">Info</span>
        </TooltipTrigger>
        <TooltipContent variant="outline">More information</TooltipContent>
      </Tooltip>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button type="button" variant="outline" size="icon" />
                  }
                >
                  <Plus aria-hidden="true" />
                  <span className="sr-only">
                    {direction === "rtl" ? "افزودن" : "Add"}
                  </span>
                </TooltipTrigger>
                <TooltipContent dir={direction}>
                  {direction === "rtl" ? "افزودن مورد" : "Add item"}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Button type="button" variant="ghost" size="icon" />}
                >
                  <Settings aria-hidden="true" />
                  <span className="sr-only">
                    {direction === "rtl" ? "تنظیمات" : "Settings"}
                  </span>
                </TooltipTrigger>
                <TooltipContent dir={direction}>
                  {direction === "rtl" ? "تنظیمات" : "Settings"}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={<Button type="button" variant="soft" size="icon" />}
                >
                  <Info aria-hidden="true" />
                  <span className="sr-only">
                    {direction === "rtl" ? "اطلاعات" : "Info"}
                  </span>
                </TooltipTrigger>
                <TooltipContent variant="outline" dir={direction}>
                  {direction === "rtl" ? "اطلاعات بیشتر" : "More information"}
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled trigger</h2>
        <p className="text-sm text-muted-foreground">
          Disabled buttons do not fire pointer events — wrap the trigger target
          in a{" "}
          <code className="rounded bg-muted px-1 text-xs">span</code> so the
          tooltip still opens.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDisabled() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={<span className="inline-flex" tabIndex={0} />}
      >
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </TooltipTrigger>
      <TooltipContent>Unavailable in this plan</TooltipContent>
    </Tooltip>
  )
}`}
        >
          {(direction) => (
            <Tooltip>
              <TooltipTrigger
                render={<span className="inline-flex" tabIndex={0} />}
              >
                <Button type="button" variant="outline" disabled>
                  {direction === "rtl" ? "غیرفعال" : "Disabled"}
                </Button>
              </TooltipTrigger>
              <TooltipContent dir={direction}>
                {direction === "rtl"
                  ? "در این طرح در دسترس نیست"
                  : "Unavailable in this plan"}
              </TooltipContent>
            </Tooltip>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Delay</h2>
        <p className="text-sm text-muted-foreground">
          Nest a local{" "}
          <code className="rounded bg-muted px-1 text-xs">TooltipProvider</code>{" "}
          to override open delay for a group.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDelay() {
  return (
    <TooltipProvider delay={600}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Slow open
        </TooltipTrigger>
        <TooltipContent>Opens after 600ms</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
        >
          {(direction) => (
            <TooltipProvider delay={600}>
              <Tooltip>
                <TooltipTrigger
                  render={<Button type="button" variant="outline" />}
                >
                  {direction === "rtl" ? "باز شدن کند" : "Slow open"}
                </TooltipTrigger>
                <TooltipContent dir={direction}>
                  {direction === "rtl"
                    ? "پس از ۶۰۰ میلی‌ثانیه"
                    : "Opens after 600ms"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Long copy</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipLong() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Details
      </TooltipTrigger>
      <TooltipContent className="max-w-[220px]" variant="outline">
        Tooltips stay short. Prefer a Popover when you need richer content or
        interactive controls.
      </TooltipContent>
    </Tooltip>
  )
}`}
        >
          {(direction) => (
            <Tooltip>
              <TooltipTrigger
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "جزئیات" : "Details"}
              </TooltipTrigger>
              <TooltipContent
                className="max-w-[220px]"
                variant="outline"
                dir={direction}
              >
                {direction === "rtl"
                  ? "راهنماها کوتاه بمانند. برای محتوای غنی‌تر از پاپ‌اور استفاده کنید."
                  : "Tooltips stay short. Prefer a Popover when you need richer content or interactive controls."}
              </TooltipContent>
            </Tooltip>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { TooltipPreviews }
