"use client"

import { ListFilter } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Badge } from "@/components/ui/badge"
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const statusItems = [
  { label: "All statuses", value: "all" },
  { label: "Running", value: "running" },
  { label: "Failed", value: "failed" },
  { label: "Succeeded", value: "succeeded" },
]

const ownerItems = [
  { label: "Anyone", value: "anyone" },
  { label: "Me", value: "me" },
  { label: "Platform team", value: "platform" },
]

const statusItemsRtl = [
  { label: "همه وضعیت‌ها", value: "all" },
  { label: "در حال اجرا", value: "running" },
  { label: "ناموفق", value: "failed" },
  { label: "موفق", value: "succeeded" },
]

const ownerItemsRtl = [
  { label: "هر کسی", value: "anyone" },
  { label: "من", value: "me" },
  { label: "تیم پلتفرم", value: "platform" },
]

/**
 * Dashboard filter rail — search stays up; advanced filters fold under a trigger.
 */
const CollapsibleFiltersPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>
      <p className="text-sm text-muted-foreground">
        Production list UI: results + search always visible; advanced filters
        open in a panel under the trigger — not a Card and not a button full of
        labels.
      </p>
      <ComponentPreview
        className="w-full"
        code={`import { ListFilter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox, CheckboxIndicator } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const statusItems = [
  { label: "All statuses", value: "all" },
  { label: "Running", value: "running" },
  { label: "Failed", value: "failed" },
  { label: "Succeeded", value: "succeeded" },
]

const ownerItems = [
  { label: "Anyone", value: "anyone" },
  { label: "Me", value: "me" },
  { label: "Platform team", value: "platform" },
]

export function CollapsibleFilters() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <div className="flex items-end justify-between gap-3">
        <div className="space-y-0.5">
          <h3 className="text-sm font-semibold text-foreground">Deployments</h3>
          <p className="text-xs text-muted-foreground">24 results</p>
        </div>
      </div>

      <Field name="search">
        <FieldLabel className="sr-only">Search deployments</FieldLabel>
        <Input type="search" placeholder="Search deployments…" />
      </Field>

      <Collapsible defaultOpen className="gap-0">
        <div className="flex flex-wrap items-center gap-2">
          <CollapsibleTrigger className="gap-1.5 font-medium">
            <ListFilter aria-hidden="true" className="size-4 shrink-0" />
            Filters
          </CollapsibleTrigger>
          <Badge variant="secondary" size="sm">
            2 active
          </Badge>
          <span className="text-xs text-muted-foreground">
            Status · Owner
          </span>
        </div>

        <CollapsiblePanel>
          <div className="mt-3 flex flex-col gap-3 rounded-lg border border-border bg-muted/30 p-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field name="status">
                <FieldLabel>Status</FieldLabel>
                <Select defaultValue="running" items={statusItems}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field name="owner">
                <FieldLabel>Owner</FieldLabel>
                <Select defaultValue="me" items={ownerItems}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ownerItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Separator />
            <Field name="archived" className="flex-row items-center gap-2">
              <Checkbox>
                <CheckboxIndicator />
              </Checkbox>
              <FieldLabel className="font-normal">Show archived</FieldLabel>
            </Field>
          </div>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  )
}`}
      >
        {(direction) => {
          const isRtl = direction === "rtl"
          const statuses = isRtl ? statusItemsRtl : statusItems
          const owners = isRtl ? ownerItemsRtl : ownerItems

          return (
            <div className="flex w-full max-w-lg flex-col gap-3" dir={direction}>
              <div className="flex items-end justify-between gap-3">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {isRtl ? "دیپلوی‌ها" : "Deployments"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {isRtl ? "۲۴ نتیجه" : "24 results"}
                  </p>
                </div>
              </div>

              <Field name="search">
                <FieldLabel className="sr-only">
                  {isRtl ? "جستجوی دیپلوی‌ها" : "Search deployments"}
                </FieldLabel>
                <Input
                  type="search"
                  placeholder={
                    isRtl ? "جستجوی دیپلوی‌ها…" : "Search deployments…"
                  }
                />
              </Field>

              <Collapsible defaultOpen className="gap-0">
                <div className="flex flex-wrap items-center gap-2">
                  <CollapsibleTrigger className="gap-1.5 font-medium">
                    <ListFilter aria-hidden="true" className="size-4 shrink-0" />
                    {isRtl ? "فیلترها" : "Filters"}
                  </CollapsibleTrigger>
                  <Badge variant="secondary" size="sm">
                    {isRtl ? "۲ فعال" : "2 active"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {isRtl ? "وضعیت · مالک" : "Status · Owner"}
                  </span>
                </div>

                <CollapsiblePanel>
                  <div className="mt-3 flex flex-col gap-3 rounded-lg border border-border bg-muted/30 p-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field name="status">
                        <FieldLabel>
                          {isRtl ? "وضعیت" : "Status"}
                        </FieldLabel>
                        <Select defaultValue="running" items={[...statuses]}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {statuses.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field name="owner">
                        <FieldLabel>{isRtl ? "مالک" : "Owner"}</FieldLabel>
                        <Select defaultValue="me" items={[...owners]}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {owners.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>
                    <Separator />
                    <Field
                      name="archived"
                      className="flex-row items-center gap-2"
                    >
                      <Checkbox>
                        <CheckboxIndicator />
                      </Checkbox>
                      <FieldLabel className="font-normal">
                        {isRtl ? "نمایش آرشیو" : "Show archived"}
                      </FieldLabel>
                    </Field>
                  </div>
                </CollapsiblePanel>
              </Collapsible>
            </div>
          )
        }}
      </ComponentPreview>
    </section>
  )
}

export { CollapsibleFiltersPreview }
