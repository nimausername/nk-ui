"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"

type Fruit = {
  readonly label: string
  readonly value: string
}

type ProduceGroup = {
  readonly value: string
  readonly items: readonly Fruit[]
}

const fruits: readonly Fruit[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
  { label: "Strawberry", value: "strawberry" },
]

const fruitsRtl: readonly Fruit[] = [
  { label: "سیب", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "گیلاس", value: "cherry" },
  { label: "انگور", value: "grape" },
  { label: "انبه", value: "mango" },
  { label: "پرتقال", value: "orange" },
  { label: "هلو", value: "peach" },
  { label: "گلابی", value: "pear" },
  { label: "توت‌فرنگی", value: "strawberry" },
]

const groupedProduce: readonly ProduceGroup[] = [
  {
    value: "Fruits",
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Mango", value: "mango" },
    ],
  },
  {
    value: "Vegetables",
    items: [
      { label: "Carrot", value: "carrot" },
      { label: "Spinach", value: "spinach" },
      { label: "Tomato", value: "tomato" },
    ],
  },
]

const groupedProduceRtl: readonly ProduceGroup[] = [
  {
    value: "میوه‌ها",
    items: [
      { label: "سیب", value: "apple" },
      { label: "موز", value: "banana" },
      { label: "انبه", value: "mango" },
    ],
  },
  {
    value: "سبزیجات",
    items: [
      { label: "هویج", value: "carrot" },
      { label: "اسفناج", value: "spinach" },
      { label: "گوجه‌فرنگی", value: "tomato" },
    ],
  },
]

const languages: readonly Fruit[] = [
  { label: "TypeScript", value: "ts" },
  { label: "JavaScript", value: "js" },
  { label: "Python", value: "py" },
  { label: "Rust", value: "rs" },
  { label: "Go", value: "go" },
]

const languagesRtl: readonly Fruit[] = [
  { label: "تایپ‌اسکریپت", value: "ts" },
  { label: "جاوااسکریپت", value: "js" },
  { label: "پایتون", value: "py" },
  { label: "راست", value: "rs" },
  { label: "گو", value: "go" },
]

/**
 * Combobox docs examples — basic, clear, groups, Field, multiple.
 */
const ComboboxPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Combobox</strong>:
            root — pass{" "}
            <code className="rounded bg-muted px-1 text-xs">items</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">
              ComboboxInputGroup
            </strong>{" "}
            / <strong className="font-medium text-foreground">Input</strong> /{" "}
            <strong className="font-medium text-foreground">Clear</strong> /{" "}
            <strong className="font-medium text-foreground">Trigger</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">
              ComboboxContent
            </strong>{" "}
            / <strong className="font-medium text-foreground">List</strong> /{" "}
            <strong className="font-medium text-foreground">Item</strong> /{" "}
            <strong className="font-medium text-foreground">Empty</strong>
          </li>
          <li>
            Multiple:{" "}
            <code className="rounded bg-muted px-1 text-xs">multiple</code> +{" "}
            <strong className="font-medium text-foreground">Chips</strong>
          </li>
          <li>
            Fixed options without search →{" "}
            <a
              href="/docs/components/select"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Select
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Type to filter. Selecting an item fills the input with its label.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
]

export function ComboboxBasic() {
  return (
    <Combobox items={fruits}>
      <ComboboxInputGroup className="max-w-sm">
        <ComboboxInput placeholder="Search fruit…" aria-label="Fruit" />
        <ComboboxTrigger aria-label="Open" />
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const items = isRtl ? fruitsRtl : fruits
            return (
              <div dir={direction} className="w-full max-w-sm">
                <Combobox items={[...items]}>
                  <ComboboxInputGroup>
                    <ComboboxInput
                      placeholder={
                        isRtl ? "جستجوی میوه…" : "Search fruit…"
                      }
                      aria-label={isRtl ? "میوه" : "Fruit"}
                    />
                    <ComboboxTrigger
                      aria-label={isRtl ? "باز کردن" : "Open"}
                    />
                  </ComboboxInputGroup>
                  <ComboboxContent>
                    <ComboboxEmpty>
                      {isRtl ? "میوه‌ای پیدا نشد." : "No fruits found."}
                    </ComboboxEmpty>
                    <ComboboxList>
                      {(item: Fruit) => (
                        <ComboboxItem key={item.value} value={item}>
                          {item.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Clear</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 text-xs">ComboboxClear</code>{" "}
          appears when a value is selected.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

export function ComboboxWithClear() {
  return (
    <Combobox items={fruits} defaultValue={fruits[0]}>
      <ComboboxInputGroup className="max-w-sm">
        <ComboboxInput aria-label="Fruit" />
        <ComboboxClear aria-label="Clear" />
        <ComboboxTrigger aria-label="Open" />
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const items = isRtl ? fruitsRtl : fruits
            return (
              <div dir={direction} className="w-full max-w-sm">
                <Combobox items={[...items]} defaultValue={items[0]}>
                  <ComboboxInputGroup>
                    <ComboboxInput aria-label={isRtl ? "میوه" : "Fruit"} />
                    <ComboboxClear
                      aria-label={isRtl ? "پاک کردن" : "Clear"}
                    />
                    <ComboboxTrigger
                      aria-label={isRtl ? "باز کردن" : "Open"}
                    />
                  </ComboboxInputGroup>
                  <ComboboxContent>
                    <ComboboxEmpty>
                      {isRtl ? "میوه‌ای پیدا نشد." : "No fruits found."}
                    </ComboboxEmpty>
                    <ComboboxList>
                      {(item: Fruit) => (
                        <ComboboxItem key={item.value} value={item}>
                          {item.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Groups</h2>
        <p className="text-sm text-muted-foreground">
          Nested{" "}
          <code className="rounded bg-muted px-1 text-xs">items</code> with{" "}
          <code className="rounded bg-muted px-1 text-xs">ComboboxGroup</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

export function ComboboxGrouped() {
  return (
    <Combobox items={groupedProduce}>
      <ComboboxInputGroup className="max-w-sm">
        <ComboboxInput placeholder="Search produce…" aria-label="Produce" />
        <ComboboxTrigger aria-label="Open" />
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No produce found.</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const groups = isRtl ? groupedProduceRtl : groupedProduce
            return (
              <div dir={direction} className="w-full max-w-sm">
                <Combobox items={[...groups]}>
                  <ComboboxInputGroup>
                    <ComboboxInput
                      placeholder={
                        isRtl ? "جستجوی محصولات…" : "Search produce…"
                      }
                      aria-label={isRtl ? "محصولات" : "Produce"}
                    />
                    <ComboboxTrigger
                      aria-label={isRtl ? "باز کردن" : "Open"}
                    />
                  </ComboboxInputGroup>
                  <ComboboxContent>
                    <ComboboxEmpty>
                      {isRtl ? "چیزی پیدا نشد." : "No produce found."}
                    </ComboboxEmpty>
                    <ComboboxList>
                      {(group: ProduceGroup) => (
                        <ComboboxGroup key={group.value} items={group.items}>
                          <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                          <ComboboxList>
                            {(item: Fruit) => (
                              <ComboboxItem key={item.value} value={item}>
                                {item.label}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxGroup>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Field</h2>
        <p className="text-sm text-muted-foreground">
          Label the input with Field — submit validation wires invalid rings.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Form } from "@/components/ui/form"

export function ComboboxWithField() {
  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        name="fruit"
        validationMode="onSubmit"
        validate={(value) => {
          if (!value) {
            return "Pick a fruit to continue."
          }
        }}
      >
        <FieldLabel>Favorite fruit</FieldLabel>
        <Combobox items={fruits} required>
          <ComboboxInputGroup>
            <ComboboxInput placeholder="Search…" />
            <ComboboxClear aria-label="Clear" />
            <ComboboxTrigger aria-label="Open" />
          </ComboboxInputGroup>
          <ComboboxContent>
            <ComboboxEmpty>No fruits found.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldError />
      </Field>
      <Button type="submit" variant="outline" size="sm" className="self-start">
        Check
      </Button>
    </Form>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const items = isRtl ? fruitsRtl : fruits
            return (
              <Form
                className="max-w-sm gap-3"
                dir={direction}
                onSubmit={(event) => {
                  event.preventDefault()
                }}
              >
                <Field
                  name="fruit"
                  validationMode="onSubmit"
                  validate={(value) => {
                    if (!value) {
                      return isRtl
                        ? "یک میوه انتخاب کنید."
                        : "Pick a fruit to continue."
                    }
                  }}
                >
                  <FieldLabel>
                    {isRtl ? "میوه مورد علاقه" : "Favorite fruit"}
                  </FieldLabel>
                  <Combobox items={[...items]} required>
                    <ComboboxInputGroup>
                      <ComboboxInput
                        placeholder={isRtl ? "جستجو…" : "Search…"}
                      />
                      <ComboboxClear
                        aria-label={isRtl ? "پاک کردن" : "Clear"}
                      />
                      <ComboboxTrigger
                        aria-label={isRtl ? "باز کردن" : "Open"}
                      />
                    </ComboboxInputGroup>
                    <ComboboxContent>
                      <ComboboxEmpty>
                        {isRtl ? "میوه‌ای پیدا نشد." : "No fruits found."}
                      </ComboboxEmpty>
                      <ComboboxList>
                        {(item: Fruit) => (
                          <ComboboxItem key={item.value} value={item}>
                            {item.label}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                  <FieldError />
                </Field>
                <Button
                  type="submit"
                  variant="outline"
                  size="sm"
                  className="self-start"
                >
                  {isRtl ? "بررسی" : "Check"}
                </Button>
              </Form>
            )
          }}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Multiple</h2>
        <p className="text-sm text-muted-foreground">
          Set{" "}
          <code className="rounded bg-muted px-1 text-xs">multiple</code> and
          compose chips around the input.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox"

export function ComboboxMultiple() {
  return (
    <Combobox items={languages} multiple>
      <ComboboxInputGroup className="max-w-md h-auto min-h-9 flex-wrap gap-1 px-2 py-1.5 [&_input]:px-0">
        <ComboboxValue>
          {(selected: typeof languages) => (
            <ComboboxChips
              className="flex w-full flex-wrap items-center gap-1 border-0 p-0 shadow-none focus-within:ring-0"
              aria-label={selected.length ? "Selected languages" : undefined}
            >
              {selected.map((item) => (
                <ComboboxChip
                  key={item.value}
                  aria-description="Press Delete to remove"
                >
                  {item.label}
                </ComboboxChip>
              ))}
              <ComboboxChipsInput
                placeholder={selected.length ? "" : "Add language…"}
              />
            </ComboboxChips>
          )}
        </ComboboxValue>
      </ComboboxInputGroup>
      <ComboboxContent>
        <ComboboxEmpty>No languages found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`}
        >
          {(direction) => {
            const isRtl = direction === "rtl"
            const items = isRtl ? languagesRtl : languages
            return (
              <div dir={direction} className="w-full max-w-md">
                <Combobox items={[...items]} multiple>
                  <ComboboxInputGroup className="h-auto min-h-9 flex-wrap gap-1 px-2 py-1.5 [&_input]:px-0 has-data-[slot=combobox-clear]:[&_input]:pe-0 [&_input]:pe-0">
                    <ComboboxValue>
                      {(selected: Fruit[]) => (
                        <ComboboxChips
                          className="flex w-full flex-wrap items-center gap-1 border-0 p-0 shadow-none focus-within:ring-0"
                          aria-label={
                            selected.length
                              ? isRtl
                                ? "زبان‌های انتخاب‌شده"
                                : "Selected languages"
                              : undefined
                          }
                        >
                          {selected.map((item) => (
                            <ComboboxChip
                              key={item.value}
                              aria-description={
                                isRtl
                                  ? "برای حذف Delete را بزنید"
                                  : "Press Delete to remove"
                              }
                            >
                              {item.label}
                            </ComboboxChip>
                          ))}
                          <ComboboxChipsInput
                            placeholder={
                              selected.length
                                ? ""
                                : isRtl
                                  ? "افزودن زبان…"
                                  : "Add language…"
                            }
                          />
                        </ComboboxChips>
                      )}
                    </ComboboxValue>
                  </ComboboxInputGroup>
                  <ComboboxContent>
                    <ComboboxEmpty>
                      {isRtl ? "زبانی پیدا نشد." : "No languages found."}
                    </ComboboxEmpty>
                    <ComboboxList>
                      {(item: Fruit) => (
                        <ComboboxItem key={item.value} value={item}>
                          {item.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            )
          }}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { ComboboxPreviews }
