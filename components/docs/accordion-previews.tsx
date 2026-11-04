"use client"

import { ChevronRight, CircleHelp, Settings } from "lucide-react"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

/**
 * Accordion docs examples — states, control, composition, and Base UI extras.
 */
const AccordionPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Accordion</strong>: open
            state, <code className="rounded bg-muted px-1 text-xs">multiple</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">disabled</code>,{" "}
            <code className="rounded bg-muted px-1 text-xs">hiddenUntilFound</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">AccordionItem</strong>:{" "}
            <code className="rounded bg-muted px-1 text-xs">value</code>, per-item{" "}
            <code className="rounded bg-muted px-1 text-xs">disabled</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">AccordionHeader</strong> +{" "}
            <strong className="font-medium text-foreground">AccordionTrigger</strong>:
            heading + expand control (optional chevron)
          </li>
          <li>
            <strong className="font-medium text-foreground">AccordionPanel</strong>:
            animated collapsible body
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} className="max-w-md">
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Yes. It follows WAI-ARIA accordion patterns.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Yes. It uses nk tokens and logical CSS.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion defaultValue={["item-1"]} className="max-w-md">
              <AccordionItem value="item-1">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "دسترس‌پذیر است؟" : "Is it accessible?"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "بله. از الگوهای WAI-ARIA پیروی می‌کند."
                    : "Yes. It follows WAI-ARIA accordion patterns."}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "استایل دارد؟" : "Is it styled?"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "بله. از توکن‌های nk و CSS منطقی استفاده می‌کند."
                    : "Yes. It uses nk tokens and logical CSS."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Multiple</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["a"]} className="max-w-md">
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>Can several stay open?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Yes — pass multiple on the root.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>Does it animate?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Height uses --accordion-panel-height.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion multiple defaultValue={["a"]} className="max-w-md">
              <AccordionItem value="a">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl"
                      ? "چندتا می‌توانند باز بمانند؟"
                      : "Can several stay open?"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "بله — multiple را روی ریشه بگذارید."
                    : "Yes — pass multiple on the root."}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "انیمیشن دارد؟" : "Does it animate?"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "ارتفاع از --accordion-panel-height استفاده می‌کند."
                    : "Height uses --accordion-panel-height."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function AccordionControlled() {
  const [value, setValue] = useState<string[]>(["shipping"])

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button type="button" size="sm" variant="outline" onClick={() => setValue(["shipping"])}>
          Open shipping
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={() => setValue([])}>
          Close all
        </Button>
      </div>
      <Accordion value={value} onValueChange={setValue}>
        <AccordionItem value="shipping">
          <AccordionHeader>
            <AccordionTrigger>Shipping</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>We ship worldwide within 3–5 days.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionHeader>
            <AccordionTrigger>Returns</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>30-day return window on unused items.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`}
        >
          {(direction) => <AccordionControlledPreview direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled item</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDisabledItem() {
  return (
    <Accordion defaultValue={["open"]} className="max-w-md">
      <AccordionItem value="open">
        <AccordionHeader>
          <AccordionTrigger>Available</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>This section can open and close.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="locked" disabled>
        <AccordionHeader>
          <AccordionTrigger>Coming soon</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Not interactive while disabled.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion defaultValue={["open"]} className="max-w-md">
              <AccordionItem value="open">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "در دسترس" : "Available"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "این بخش باز و بسته می‌شود."
                    : "This section can open and close."}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="locked" disabled>
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "به‌زودی" : "Coming soon"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "در حالت غیرفعال قابل استفاده نیست."
                    : "Not interactive while disabled."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled accordion</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDisabledRoot() {
  return (
    <Accordion disabled defaultValue={["one"]} className="max-w-md">
      <AccordionItem value="one">
        <AccordionHeader>
          <AccordionTrigger>Read-only section</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>The whole accordion ignores interaction.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionHeader>
          <AccordionTrigger>Also locked</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Root disabled covers every item.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion disabled defaultValue={["one"]} className="max-w-md">
              <AccordionItem value="one">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "بخش فقط‌خواندنی" : "Read-only section"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "کل آکاردئون تعامل را نادیده می‌گیرد."
                    : "The whole accordion ignores interaction."}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="two">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "این هم قفل است" : "Also locked"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "disabled روی ریشه همه آیتم‌ها را می‌گیرد."
                    : "Root disabled covers every item."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Rich trigger</h2>
        <ComponentPreview
          className="w-full"
          code={`import { CircleHelp } from "lucide-react"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionRichTrigger() {
  return (
    <Accordion defaultValue={["help"]} className="max-w-md">
      <AccordionItem value="help">
        <AccordionHeader>
          <AccordionTrigger className="items-center hover:no-underline">
            <span className="flex items-start gap-3 text-start">
              <CircleHelp className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span className="flex flex-col gap-0.5">
                <span>Need help?</span>
                <span className="text-xs font-normal text-muted-foreground">
                  Support hours and contact options
                </span>
              </span>
            </span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          Email support@example.com or chat weekdays 9–17.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion defaultValue={["help"]} className="max-w-md">
              <AccordionItem value="help">
                <AccordionHeader>
                  <AccordionTrigger className="items-center hover:no-underline">
                    <span className="flex items-start gap-3 text-start">
                      <CircleHelp className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span className="flex flex-col gap-0.5">
                        <span>{direction === "rtl" ? "کمک لازم دارید؟" : "Need help?"}</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          {direction === "rtl"
                            ? "ساعات پشتیبانی و راه‌های تماس"
                            : "Support hours and contact options"}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "به support@example.com ایمیل بزنید یا در روزهای کاری ۹–۱۷ گفتگو کنید."
                    : "Email support@example.com or chat weekdays 9–17."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom chevron</h2>
        <ComponentPreview
          className="w-full"
          code={`import { ChevronRight, Settings } from "lucide-react"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionCustomChevron() {
  return (
    <Accordion defaultValue={["settings"]} className="max-w-md">
      <AccordionItem value="settings">
        <AccordionHeader>
          <AccordionTrigger showChevron={false} className="hover:no-underline">
            <span className="flex flex-1 items-center gap-2">
              <Settings className="size-4 text-muted-foreground" />
              Settings
            </span>
            <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open/accordion-trigger:rotate-90" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Compose any trailing icon with showChevron false.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion defaultValue={["settings"]} className="max-w-md">
              <AccordionItem value="settings">
                <AccordionHeader>
                  <AccordionTrigger showChevron={false} className="hover:no-underline">
                    <span className="flex flex-1 items-center gap-2">
                      <Settings className="size-4 text-muted-foreground" />
                      {direction === "rtl" ? "تنظیمات" : "Settings"}
                    </span>
                    <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open/accordion-trigger:rotate-90" />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "با showChevron={false} هر آیکون پایانی را ترکیب کنید."
                    : "Compose any trailing icon with showChevron false."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Hidden until found</h2>
        <p className="text-sm text-muted-foreground">
          Closed panels stay in the DOM with{" "}
          <code className="rounded bg-muted px-1 text-xs">hidden=&quot;until-found&quot;</code>.
          Use browser find (Ctrl/Cmd+F) and search for the word{" "}
          <strong className="font-medium text-foreground">restocking</strong> to reveal the
          matching panel.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionHiddenUntilFound() {
  return (
    <Accordion hiddenUntilFound className="max-w-md">
      <AccordionItem value="shipping">
        <AccordionHeader>
          <AccordionTrigger>Shipping</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Standard shipping takes 3–5 business days.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionHeader>
          <AccordionTrigger>Returns</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          No restocking fee on returns started within 14 days.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion hiddenUntilFound className="max-w-md">
              <AccordionItem value="shipping">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "ارسال" : "Shipping"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "ارسال عادی ۳ تا ۵ روز کاری طول می‌کشد."
                    : "Standard shipping takes 3–5 business days."}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "مرجوعی" : "Returns"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "برای مرجوعی‌های شروع‌شده تا ۱۴ روز، هزینه restocking نیست."
                    : "No restocking fee on returns started within 14 days."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Long content</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionLongContent() {
  return (
    <Accordion defaultValue={["details"]} className="max-w-md">
      <AccordionItem value="details">
        <AccordionHeader>
          <AccordionTrigger>Product details</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <div className="space-y-2">
            <p>
              Height animation uses the Base UI --accordion-panel-height CSS variable so
              tall content opens and closes smoothly.
            </p>
            <p>
              Prefer short answers in FAQ panels. When you need more detail, keep
              paragraphs readable and avoid nesting another accordion inside.
            </p>
            <p>Honors prefers-reduced-motion by dropping the height transition.</p>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="care">
        <AccordionHeader>
          <AccordionTrigger>Care instructions</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>Wipe with a soft dry cloth. Avoid solvents.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          {(direction) => (
            <Accordion defaultValue={["details"]} className="max-w-md">
              <AccordionItem value="details">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "جزئیات محصول" : "Product details"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  <div className="space-y-2">
                    <p>
                      {direction === "rtl"
                        ? "انیمیشن ارتفاع از متغیر CSS --accordion-panel-height استفاده می‌کند تا محتوای بلند نرم باز و بسته شود."
                        : "Height animation uses the Base UI --accordion-panel-height CSS variable so tall content opens and closes smoothly."}
                    </p>
                    <p>
                      {direction === "rtl"
                        ? "در FAQ پاسخ‌های کوتاه بهترند. برای جزئیات بیشتر پاراگراف‌ها را خوانا نگه دارید و آکاردئون تو در تو نسازید."
                        : "Prefer short answers in FAQ panels. When you need more detail, keep paragraphs readable and avoid nesting another accordion inside."}
                    </p>
                    <p>
                      {direction === "rtl"
                        ? "با prefers-reduced-motion انتقال ارتفاع حذف می‌شود."
                        : "Honors prefers-reduced-motion by dropping the height transition."}
                    </p>
                  </div>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionHeader>
                  <AccordionTrigger>
                    {direction === "rtl" ? "راهنمای نگهداری" : "Care instructions"}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionPanel>
                  {direction === "rtl"
                    ? "با پارچه نرم و خشک پاک کنید. از حلال‌ها پرهیز کنید."
                    : "Wipe with a soft dry cloth. Avoid solvents."}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

type PreviewDirection = "ltr" | "rtl"

const AccordionControlledPreview = ({
  direction,
}: {
  readonly direction: PreviewDirection
}) => {
  const [value, setValue] = useState<string[]>(["shipping"])

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setValue(["shipping"])}
        >
          {direction === "rtl" ? "باز کردن ارسال" : "Open shipping"}
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={() => setValue([])}>
          {direction === "rtl" ? "بستن همه" : "Close all"}
        </Button>
      </div>
      <Accordion value={value} onValueChange={(next) => setValue(next)}>
        <AccordionItem value="shipping">
          <AccordionHeader>
            <AccordionTrigger>
              {direction === "rtl" ? "ارسال" : "Shipping"}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            {direction === "rtl"
              ? "ارسال به سراسر جهان در ۳ تا ۵ روز."
              : "We ship worldwide within 3–5 days."}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionHeader>
            <AccordionTrigger>
              {direction === "rtl" ? "مرجوعی" : "Returns"}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            {direction === "rtl"
              ? "۳۰ روز مهلت مرجوعی برای کالاهای استفاده‌نشده."
              : "30-day return window on unused items."}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { AccordionPreviews }
