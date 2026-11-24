"use client"

import { ChevronDown } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const currencyItems = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
] as const

/**
 * Labels, fields, a split action, and separate clusters.
 */
const ButtonGroupComposePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Compose</h2>
      <p className="text-sm text-muted-foreground">
        A label, a field, a split button, or two clusters with a gap.
      </p>
      <ComponentPreview
        code={`import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ButtonGroupCompose() {
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Input aria-label="Website" placeholder="example.com" />
      </ButtonGroup>
      <ButtonGroup>
        <Select defaultValue="usd" items={[{ label: "USD", value: "usd" }, { label: "EUR", value: "eur" }]}>
          <SelectTrigger aria-label="Currency">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
          </SelectContent>
        </Select>
        <Input aria-label="Amount" placeholder="0.00" />
      </ButtonGroup>
      <ButtonGroup>
        <Button type="button" variant="outline">
          Save
        </Button>
        <ButtonGroupSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button type="button" variant="outline" size="icon" aria-label="More save options" />}
          >
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save as draft</DropdownMenuItem>
            <DropdownMenuItem>Save and publish</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup aria-label="History">
        <ButtonGroup>
          <Button type="button" variant="outline">Copy</Button>
          <Button type="button" variant="outline">Paste</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="button" variant="outline">Undo</Button>
          <Button type="button" variant="outline">Redo</Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex w-full max-w-sm flex-col items-start gap-4">
            <ButtonGroup className="w-full">
              <ButtonGroupText>https://</ButtonGroupText>
              <Input
                aria-label={direction === "rtl" ? "وب‌سایت" : "Website"}
                placeholder="example.com"
              />
            </ButtonGroup>
            <ButtonGroup className="w-full">
              <Select
                defaultValue="usd"
                items={currencyItems.map((item) => ({ ...item }))}
              >
                <SelectTrigger aria-label={direction === "rtl" ? "واحد پول" : "Currency"}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                </SelectContent>
              </Select>
              <Input
                aria-label={direction === "rtl" ? "مبلغ" : "Amount"}
                placeholder="0.00"
              />
            </ButtonGroup>
            <ButtonGroup>
              <Button type="button" variant="outline">
                {direction === "rtl" ? "ذخیره" : "Save"}
              </Button>
              <ButtonGroupSeparator />
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label={
                        direction === "rtl" ? "گزینه‌های بیشتر ذخیره" : "More save options"
                      }
                    />
                  }
                >
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    {direction === "rtl" ? "ذخیره به عنوان پیش‌نویس" : "Save as draft"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {direction === "rtl" ? "ذخیره و انتشار" : "Save and publish"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
            <ButtonGroup aria-label={direction === "rtl" ? "تاریخچه" : "History"}>
              <ButtonGroup>
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "رونوشت" : "Copy"}
                </Button>
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "جای‌گذاری" : "Paste"}
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "واگرد" : "Undo"}
                </Button>
                <Button type="button" variant="outline">
                  {direction === "rtl" ? "ازنو" : "Redo"}
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { ButtonGroupComposePreview }
