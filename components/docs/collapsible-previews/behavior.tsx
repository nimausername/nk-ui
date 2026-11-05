"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

/**
 * Collapsible API demos — basic, open, controlled, disabled, custom trigger.
 */
const CollapsibleBehaviorPreviews = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Collapsible</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
            <code className="rounded bg-muted px-1 text-xs">defaultOpen</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">disabled</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">CollapsibleTrigger</strong>:
            expand control (optional chevron)
          </li>
          <li>
            <strong className="font-medium text-foreground">CollapsiblePanel</strong>:
            animated body
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Closed by default. One trigger, one panel.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleBasic() {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger>Shipping details</CollapsibleTrigger>
      <CollapsiblePanel>
        Orders ship in 2–3 business days. Tracking arrives after the first scan.
      </CollapsiblePanel>
    </Collapsible>
  )
}`}
        >
          {(direction) => (
            <Collapsible className="w-full max-w-md">
              <CollapsibleTrigger>
                {direction === "rtl" ? "جزئیات ارسال" : "Shipping details"}
              </CollapsibleTrigger>
              <CollapsiblePanel>
                {direction === "rtl"
                  ? "سفارش‌ها در ۲ تا ۳ روز کاری ارسال می‌شوند. پیگیری بعد از اولین اسکن می‌آید."
                  : "Orders ship in 2–3 business days. Tracking arrives after the first scan."}
              </CollapsiblePanel>
            </Collapsible>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default open</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDefaultOpen() {
  return (
    <Collapsible defaultOpen className="w-full max-w-md">
      <CollapsibleTrigger>Release notes</CollapsibleTrigger>
      <CollapsiblePanel>
        This panel starts expanded. Collapse it when the detail is no longer needed.
      </CollapsiblePanel>
    </Collapsible>
  )
}`}
        >
          {(direction) => (
            <Collapsible defaultOpen className="w-full max-w-md">
              <CollapsibleTrigger>
                {direction === "rtl" ? "یادداشت‌های انتشار" : "Release notes"}
              </CollapsibleTrigger>
              <CollapsiblePanel>
                {direction === "rtl"
                  ? "این پنل از ابتدا باز است. وقتی جزئیات لازم نبود ببندید."
                  : "This panel starts expanded. Collapse it when the detail is no longer needed."}
              </CollapsiblePanel>
            </Collapsible>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <p className="text-sm text-muted-foreground">
          Same trigger as Basic — but{" "}
          <code className="rounded bg-muted px-1 text-xs">open</code> lives in
          your React state. Use this when a parent needs to read or set open
          (persist it, sync a URL, close it after submit).
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>Internal notes</CollapsibleTrigger>
        <CollapsiblePanel>
          Extra detail. The parent owns open, so it can react when this changes.
        </CollapsiblePanel>
      </Collapsible>
      <p className="text-xs text-muted-foreground">
        State: {open ? "open" : "closed"}
      </p>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex w-full max-w-md flex-col gap-2">
              <Collapsible open={open} onOpenChange={setOpen}>
                <CollapsibleTrigger>
                  {direction === "rtl" ? "یادداشت‌های داخلی" : "Internal notes"}
                </CollapsibleTrigger>
                <CollapsiblePanel>
                  {direction === "rtl"
                    ? "جزئیات بیشتر. والد open را دارد تا وقتی عوض شد واکنش نشان دهد."
                    : "Extra detail. The parent owns open, so it can react when this changes."}
                </CollapsiblePanel>
              </Collapsible>
              <p className="text-xs text-muted-foreground">
                {direction === "rtl"
                  ? `وضعیت: ${open ? "باز" : "بسته"}`
                  : `State: ${open ? "open" : "closed"}`}
              </p>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDisabled() {
  return (
    <Collapsible disabled className="w-full max-w-md">
      <CollapsibleTrigger>Locked section</CollapsibleTrigger>
      <CollapsiblePanel>This content cannot be opened.</CollapsiblePanel>
    </Collapsible>
  )
}`}
        >
          {(direction) => (
            <Collapsible disabled className="w-full max-w-md">
              <CollapsibleTrigger>
                {direction === "rtl" ? "بخش قفل‌شده" : "Locked section"}
              </CollapsibleTrigger>
              <CollapsiblePanel>
                {direction === "rtl"
                  ? "این محتوا باز نمی‌شود."
                  : "This content cannot be opened."}
              </CollapsiblePanel>
            </Collapsible>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom trigger</h2>
        <p className="text-sm text-muted-foreground">
          Hide the default chevron and style the trigger like a button.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleCustomTrigger() {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger
        showChevron={false}
        render={<Button type="button" variant="outline" />}
      >
        Advanced options
      </CollapsibleTrigger>
      <CollapsiblePanel>
        Use showChevron false when the trigger already communicates open state.
      </CollapsiblePanel>
    </Collapsible>
  )
}`}
        >
          {(direction) => (
            <Collapsible className="w-full max-w-md">
              <CollapsibleTrigger
                showChevron={false}
                render={<Button type="button" variant="outline" />}
              >
                {direction === "rtl" ? "گزینه‌های پیشرفته" : "Advanced options"}
              </CollapsibleTrigger>
              <CollapsiblePanel>
                {direction === "rtl"
                  ? "وقتی خود تریگر وضعیت باز بودن را نشان می‌دهد showChevron را false کنید."
                  : "Use showChevron false when the trigger already communicates open state."}
              </CollapsiblePanel>
            </Collapsible>
          )}
        </ComponentPreview>
      </section>
    </>
  )
}

export { CollapsibleBehaviorPreviews }
