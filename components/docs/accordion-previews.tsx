"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * Accordion docs examples — single and multiple.
 */
const AccordionPreviews = () => {
  return (
    <div className="space-y-10">
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
    </div>
  )
}

export { AccordionPreviews }
