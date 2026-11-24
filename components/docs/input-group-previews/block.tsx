"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"

/**
 * A note with its action under the text.
 */
const InputGroupBlockPreview = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Under the text</h2>
      <p className="text-sm text-muted-foreground">
        A longer field can keep its action on the row below the writing.
      </p>
      <ComponentPreview
        code={`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupNote() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupTextarea aria-label="Note" placeholder="Write a note" />
      <InputGroupAddon align="block-end" className="justify-end">
        <InputGroupButton variant="outline">Save</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`}
      >
        {(direction) => (
          <InputGroup className="w-full max-w-sm">
            <InputGroupTextarea
              aria-label={direction === "rtl" ? "یادداشت" : "Note"}
              placeholder={direction === "rtl" ? "یک یادداشت بنویسید" : "Write a note"}
            />
            <InputGroupAddon align="block-end" className="justify-end">
              <InputGroupButton variant="outline">
                {direction === "rtl" ? "ذخیره" : "Save"}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        )}
      </ComponentPreview>
    </section>
  )
}

export { InputGroupBlockPreview }
