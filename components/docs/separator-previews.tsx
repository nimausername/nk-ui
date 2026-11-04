"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

/**
 * Separator docs examples — orientations, labeled, toolbar, menu-style.
 */
const SeparatorPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Separator</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">orientation</code>{" "}
            (<code className="rounded bg-muted px-1 text-xs">horizontal</code> |{" "}
            <code className="rounded bg-muted px-1 text-xs">vertical</code>)
          </li>
          <li>
            Labeled dividers: compose text + two Separators (not a separate API)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Horizontal</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorHorizontal() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <p className="text-sm">Above</p>
      <Separator />
      <p className="text-sm">Below</p>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="w-full max-w-sm space-y-3">
              <p className="text-sm">{direction === "rtl" ? "بالا" : "Above"}</p>
              <Separator />
              <p className="text-sm">{direction === "rtl" ? "پایین" : "Below"}</p>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Vertical</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorVertical() {
  return (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex h-8 items-center gap-3">
              <span className="text-sm">{direction === "rtl" ? "چپ" : "Left"}</span>
              <Separator orientation="vertical" />
              <span className="text-sm">{direction === "rtl" ? "راست" : "Right"}</span>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Labeled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorLabeled() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Separator className="flex-1" />
      <span className="shrink-0 text-xs text-muted-foreground">or</span>
      <Separator className="flex-1" />
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex w-full max-w-sm items-center gap-3">
              <Separator className="flex-1" />
              <span className="shrink-0 text-xs text-muted-foreground">
                {direction === "rtl" ? "یا" : "or"}
              </span>
              <Separator className="flex-1" />
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">In a toolbar</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SeparatorToolbar() {
  return (
    <div className="flex h-9 items-center gap-1 rounded-md border border-border p-1">
      <Button type="button" size="sm" variant="ghost">
        Cut
      </Button>
      <Button type="button" size="sm" variant="ghost">
        Copy
      </Button>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <Button type="button" size="sm" variant="ghost">
        Paste
      </Button>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex h-9 items-center gap-1 rounded-md border border-border p-1">
              <Button type="button" size="sm" variant="ghost">
                {direction === "rtl" ? "برش" : "Cut"}
              </Button>
              <Button type="button" size="sm" variant="ghost">
                {direction === "rtl" ? "کپی" : "Copy"}
              </Button>
              <Separator orientation="vertical" className="mx-1 h-5" />
              <Button type="button" size="sm" variant="ghost">
                {direction === "rtl" ? "جای‌گذاری" : "Paste"}
              </Button>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">In a menu list</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorMenuList() {
  return (
    <div className="w-full max-w-xs rounded-md border border-border py-1 text-sm">
      <button type="button" className="block w-full px-3 py-1.5 text-start hover:bg-muted">
        Profile
      </button>
      <button type="button" className="block w-full px-3 py-1.5 text-start hover:bg-muted">
        Billing
      </button>
      <Separator className="my-1" />
      <button type="button" className="block w-full px-3 py-1.5 text-start hover:bg-muted">
        Log out
      </button>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="w-full max-w-xs rounded-md border border-border py-1 text-sm">
              <button
                type="button"
                className="block w-full px-3 py-1.5 text-start hover:bg-muted"
              >
                {direction === "rtl" ? "پروفایل" : "Profile"}
              </button>
              <button
                type="button"
                className="block w-full px-3 py-1.5 text-start hover:bg-muted"
              >
                {direction === "rtl" ? "صورتحساب" : "Billing"}
              </button>
              <Separator className="my-1" />
              <button
                type="button"
                className="block w-full px-3 py-1.5 text-start hover:bg-muted"
              >
                {direction === "rtl" ? "خروج" : "Log out"}
              </button>
            </div>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { SeparatorPreviews }
