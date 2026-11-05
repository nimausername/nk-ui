"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

/**
 * Status row that stays visible — badge + trigger, details in the panel.
 */
const CollapsibleWithBadgePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">With Badge</h2>
      <p className="text-sm text-muted-foreground">
        Keep a status chip in view while shipping lines and items hide until
        opened.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleWithBadge() {
  return (
    <Collapsible className="w-full max-w-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">Order #1842</span>
          <Badge variant="secondary">Shipped</Badge>
        </div>
        <CollapsibleTrigger>Details</CollapsibleTrigger>
      </div>
      <CollapsiblePanel>
        <ul className="list-disc space-y-1 ps-5">
          <li>Leather tote — qty 1</li>
          <li>Ships to Berlin, DE</li>
          <li>Tracking after the first scan</li>
        </ul>
      </CollapsiblePanel>
    </Collapsible>
  )
}`}
      >
        {(direction) => (
          <Collapsible className="w-full max-w-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  {direction === "rtl" ? "سفارش #۱۸۴۲" : "Order #1842"}
                </span>
                <Badge variant="secondary">
                  {direction === "rtl" ? "ارسال‌شده" : "Shipped"}
                </Badge>
              </div>
              <CollapsibleTrigger>
                {direction === "rtl" ? "جزئیات" : "Details"}
              </CollapsibleTrigger>
            </div>
            <CollapsiblePanel>
              <ul className="list-disc space-y-1 ps-5">
                <li>
                  {direction === "rtl"
                    ? "کیف چرمی — تعداد ۱"
                    : "Leather tote — qty 1"}
                </li>
                <li>
                  {direction === "rtl"
                    ? "ارسال به برلین، آلمان"
                    : "Ships to Berlin, DE"}
                </li>
                <li>
                  {direction === "rtl"
                    ? "پیگیری بعد از اولین اسکن"
                    : "Tracking after the first scan"}
                </li>
              </ul>
            </CollapsiblePanel>
          </Collapsible>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleWithBadgePreview }
