"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

/**
 * Help / FAQ style — the card title row is the trigger.
 */
const CollapsibleInCardPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">In a Card</h2>
      <p className="text-sm text-muted-foreground">
        Put the trigger in the header so the whole question opens its answer.
        One item only — use Accordion for a list of exclusive sections.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleInCard() {
  return (
    <Card className="w-full max-w-md py-0">
      <Collapsible>
        <CardHeader className="py-4">
          <CollapsibleTrigger className="w-full justify-between">
            <CardTitle>How do refunds work?</CardTitle>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsiblePanel>
          <CardContent className="pt-0 pb-4 text-sm text-muted-foreground">
            Refunds post within 5–10 business days after we confirm the return.
            You will get an email when the bank transfer starts.
          </CardContent>
        </CollapsiblePanel>
      </Collapsible>
    </Card>
  )
}`}
      >
        {(direction) => (
          <Card className="w-full max-w-md py-0">
            <Collapsible>
              <CardHeader className="py-4">
                <CollapsibleTrigger className="w-full justify-between">
                  <CardTitle>
                    {direction === "rtl"
                      ? "بازپرداخت چگونه کار می‌کند؟"
                      : "How do refunds work?"}
                  </CardTitle>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsiblePanel>
                <CardContent className="pt-0 pb-4 text-sm text-muted-foreground">
                  {direction === "rtl"
                    ? "بازپرداخت ۵ تا ۱۰ روز کاری بعد از تأیید مرجوعی واریز می‌شود. وقتی انتقال بانکی شروع شود ایمیل می‌گیرید."
                    : "Refunds post within 5–10 business days after we confirm the return. You will get an email when the bank transfer starts."}
                </CardContent>
              </CollapsiblePanel>
            </Collapsible>
          </Card>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleInCardPreview }
