"use client"

import { ArrowRight, Download, Plus, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { ProgressButton } from "@/components/extras/progress-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Docs-only loop that drives ProgressButton with a demo progress value.
 */
const ProgressButtonPreview = ({ rtl = false }: { readonly rtl?: boolean }) => {
  const [progress, setProgress] = useState(12)

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((value) => (value >= 100 ? 12 : Math.min(100, value + 8)))
    }, 500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <ProgressButton
      type="button"
      progress={progress}
      uploadingLabel={rtl ? "بارگذاری" : "Uploading"}
      completeLabel={rtl ? "دانلود آماده" : "Download ready"}
      percentMark={rtl ? "٪" : "%"}
    />
  )
}

/**
 * Button docs examples — core Button + Button-family extras shown on this page.
 */
const ButtonPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Button</strong> (
            <code className="rounded bg-muted px-1 text-xs">@nk/button</code>):{" "}
            <code className="rounded bg-muted px-1 text-xs">variant</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">size</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">loading</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">ProgressButton</strong> (
            <code className="rounded bg-muted px-1 text-xs">components/extras</code>
            ): upload progress — shown here, publish later as{" "}
            <code className="rounded bg-muted px-1 text-xs">@nk/progress-button</code>
          </li>
          <li>
            Icons / full width / pill: compose with children or{" "}
            <code className="rounded bg-muted px-1 text-xs">className</code>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}
        >
          {(direction) =>
            direction === "rtl" ? (
              <>
                <Button type="button">پیش‌فرض</Button>
                <Button type="button" variant="secondary">
                  ثانویه
                </Button>
                <Button type="button" variant="soft">
                  ملایم
                </Button>
                <Button type="button" variant="outline">
                  حاشیه‌دار
                </Button>
                <Button type="button" variant="ghost">
                  شفاف
                </Button>
                <Button type="button" variant="destructive">
                  حذف
                </Button>
                <Button type="button" variant="link">
                  پیوند
                </Button>
              </>
            ) : (
              <>
                <Button type="button">Default</Button>
                <Button type="button" variant="secondary">
                  Secondary
                </Button>
                <Button type="button" variant="soft">
                  Soft
                </Button>
                <Button type="button" variant="outline">
                  Outline
                </Button>
                <Button type="button" variant="ghost">
                  Ghost
                </Button>
                <Button type="button" variant="destructive">
                  Destructive
                </Button>
                <Button type="button" variant="link">
                  Link
                </Button>
              </>
            )
          }
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`}
        >
          {(direction) =>
            direction === "rtl" ? (
              <>
                <Button type="button" size="sm">
                  کوچک
                </Button>
                <Button type="button" size="default">
                  پیش‌فرض
                </Button>
                <Button type="button" size="lg">
                  بزرگ
                </Button>
              </>
            ) : (
              <>
                <Button type="button" size="sm">
                  Small
                </Button>
                <Button type="button" size="default">
                  Default
                </Button>
                <Button type="button" size="lg">
                  Large
                </Button>
              </>
            )
          }
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Icon buttons</h2>
        <ComponentPreview
          code={`import { Download, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="icon-sm" aria-label="Add">
        <Plus />
      </Button>
      <Button size="icon" aria-label="Add">
        <Plus />
      </Button>
      <Button size="icon-lg" aria-label="Add">
        <Plus />
      </Button>
      <Button size="icon" variant="outline" aria-label="Delete">
        <Trash2 />
      </Button>
      <Button size="icon" variant="ghost" aria-label="Download">
        <Download />
      </Button>
    </div>
  )
}`}
        >
          <Button type="button" size="icon-sm" aria-label="Add">
            <Plus />
          </Button>
          <Button type="button" size="icon" aria-label="Add">
            <Plus />
          </Button>
          <Button type="button" size="icon-lg" aria-label="Add">
            <Plus />
          </Button>
          <Button type="button" size="icon" variant="outline" aria-label="Delete">
            <Trash2 />
          </Button>
          <Button type="button" size="icon" variant="ghost" aria-label="Download">
            <Download />
          </Button>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With icons</h2>
        <ComponentPreview
          code={`import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        Continue
        <ArrowRight />
      </Button>
      <Button variant="outline">
        <Download />
        Download
      </Button>
    </div>
  )
}`}
        >
          {(direction) =>
            direction === "rtl" ? (
              <>
                <Button type="button">
                  ادامه
                  <ArrowRight className="rotate-180" aria-hidden="true" />
                </Button>
                <Button type="button" variant="outline">
                  <Download aria-hidden="true" />
                  دانلود
                </Button>
              </>
            ) : (
              <>
                <Button type="button">
                  Continue
                  <ArrowRight aria-hidden="true" />
                </Button>
                <Button type="button" variant="outline">
                  <Download aria-hidden="true" />
                  Download
                </Button>
              </>
            )
          }
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Loading</h2>
        <p className="text-sm text-muted-foreground">
          Use the <code className="rounded bg-muted px-1 text-xs">loading</code> prop on{" "}
          <code className="rounded bg-muted px-1 text-xs">Button</code>.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonLoading() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button loading>Saving</Button>
      <Button variant="outline" loading loadingLabel="Please wait">
        Submit
      </Button>
    </div>
  )
}`}
        >
          {(direction) =>
            direction === "rtl" ? (
              <>
                <Button type="button" loading>
                  در حال ذخیره
                </Button>
                <Button type="button" variant="outline" loading loadingLabel="لطفا صبر کنید">
                  ارسال
                </Button>
              </>
            ) : (
              <>
                <Button type="button" loading>
                  Saving
                </Button>
                <Button type="button" variant="outline" loading loadingLabel="Please wait">
                  Submit
                </Button>
              </>
            )
          }
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">ProgressButton (extra)</h2>
        <p className="text-sm text-muted-foreground">
          Button-family extra in{" "}
          <code className="rounded bg-muted px-1 text-xs">components/extras/progress-button.tsx</code>
          . Shown on this page; not part of{" "}
          <code className="rounded bg-muted px-1 text-xs">@nk/button</code> until we publish{" "}
          <code className="rounded bg-muted px-1 text-xs">@nk/progress-button</code>.
        </p>
        <ComponentPreview
          code={`import { ProgressButton } from "@/components/extras/progress-button"

export function ProgressButtonExample() {
  return <ProgressButton type="button" progress={64} />
}`}
        >
          {(direction) => <ProgressButtonPreview rtl={direction === "rtl"} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Full width &amp; pill</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"

export function ButtonLayout() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Button className="w-full">Full width</Button>
      <Button variant="outline" className="w-full rounded-full">
        Pill
      </Button>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex w-full max-w-sm flex-col gap-3">
              <Button type="button" className="w-full">
                {direction === "rtl" ? "تمام‌عرض" : "Full width"}
              </Button>
              <Button type="button" variant="outline" className={cn("w-full rounded-full")}>
                {direction === "rtl" ? "قرصی" : "Pill"}
              </Button>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonDisabled() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </div>
  )
}`}
        >
          {(direction) => (
            <>
              <Button type="button" disabled>
                {direction === "rtl" ? "غیرفعال" : "Disabled"}
              </Button>
              <Button type="button" variant="outline" disabled>
                {direction === "rtl" ? "غیرفعال" : "Disabled"}
              </Button>
            </>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ButtonPreviews }
