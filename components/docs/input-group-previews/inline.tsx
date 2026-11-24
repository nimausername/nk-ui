"use client"

import { Search } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Kbd } from "@/components/ui/kbd"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

/**
 * Prefix, suffix, icon, and button inside a single-line field.
 */
const InputGroupInlinePreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Inside the field</h2>
      <p className="text-sm text-muted-foreground">
        Text, an icon, a button, or a shortcut sits inside the same border.
      </p>
      <ComponentPreview
        code={`import { Search } from "lucide-react"

import { Kbd } from "@/components/ui/kbd"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputGroupInline() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Website" placeholder="example.com" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Amount" placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput aria-label="Search" placeholder="Search docs" />
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput aria-label="Invite email" placeholder="name@example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Invite</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}`}
      >
        {(direction) => (
          <div className="flex w-full max-w-sm flex-col gap-4">
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                aria-label={direction === "rtl" ? "وب‌سایت" : "Website"}
                placeholder="example.com"
              />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                aria-label={direction === "rtl" ? "مبلغ" : "Amount"}
                placeholder="0.00"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupInput
                aria-label={direction === "rtl" ? "جستجو" : "Search"}
                placeholder={direction === "rtl" ? "جستجوی راهنما" : "Search docs"}
              />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘K</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput
                aria-label={direction === "rtl" ? "ایمیل دعوت" : "Invite email"}
                placeholder="name@example.com"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  {direction === "rtl" ? "دعوت" : "Invite"}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { InputGroupInlinePreview }
