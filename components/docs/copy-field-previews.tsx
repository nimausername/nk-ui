"use client"

import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { CopyField } from "@/components/ui/copy-field"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

/**
 * Copy Field docs examples — basic, silent, editable, token, disabled, onCopied.
 */
const CopyFieldPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Pair with{" "}
          <code className="rounded bg-muted px-1 text-xs">Field</code>. Default
          toast title is{" "}
          <code className="rounded bg-muted px-1 text-xs">Copied</code> (requires{" "}
          <code className="rounded bg-muted px-1 text-xs">Toaster</code>).
        </p>
        <ComponentPreview
          code={`import { CopyField } from "@/components/ui/copy-field"
import { Field, FieldLabel } from "@/components/ui/field"

export function CopyFieldBasic() {
  return (
    <Field name="invite" className="w-full max-w-md">
      <FieldLabel>Invite link</FieldLabel>
      <CopyField
        defaultValue="https://example.com/invite/abc"
        readOnly
      />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="invite" className="w-full max-w-md">
              <FieldLabel>
                {direction === "rtl" ? "لینک دعوت" : "Invite link"}
              </FieldLabel>
              <CopyField
                defaultValue="https://example.com/invite/abc"
                readOnly
                copyLabel={direction === "rtl" ? "کپی" : "Copy"}
                copiedLabel={direction === "rtl" ? "کپی شد" : "Copied"}
                successToastTitle={direction === "rtl" ? "کپی شد" : "Copied"}
              />
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Without toast</h2>
        <p className="text-sm text-muted-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 text-xs">
            successToastTitle=&#123;null&#125;
          </code>{" "}
          to keep only the checkmark feedback.
        </p>
        <ComponentPreview
          code={`import { CopyField } from "@/components/ui/copy-field"

export function CopyFieldSilent() {
  return (
    <CopyField
      className="max-w-md"
      defaultValue="nk_live_sk_demo"
      successToastTitle={null}
      readOnly
    />
  )
}`}
        >
          {() => (
            <CopyField
              className="max-w-md"
              defaultValue="nk_live_sk_demo"
              successToastTitle={null}
              readOnly
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Editable</h2>
        <p className="text-sm text-muted-foreground">
          Omit{" "}
          <code className="rounded bg-muted px-1 text-xs">readOnly</code> to let
          users edit, then copy the current value. The copy control stays
          disabled while the field is empty.
        </p>
        <ComponentPreview
          code={`import { useState } from "react"
import { CopyField } from "@/components/ui/copy-field"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export function CopyFieldEditable() {
  const [value, setValue] = useState("Ada Lovelace")

  return (
    <Field name="display-name" className="w-full max-w-md">
      <FieldLabel>Display name</FieldLabel>
      <CopyField
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        successToastTitle={null}
      />
      <FieldDescription>Edit, then copy.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => <CopyFieldEditableDemo direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">API token</h2>
        <p className="text-sm text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1 text-xs">className</code> for
          mono styling; customize toast copy for the domain.
        </p>
        <ComponentPreview
          code={`import { CopyField } from "@/components/ui/copy-field"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export function CopyFieldToken() {
  return (
    <Field name="api-key" className="w-full max-w-md">
      <FieldLabel>API key</FieldLabel>
      <CopyField
        className="[&_input]:font-mono [&_input]:text-[0.8125rem]"
        defaultValue="nk_live_sk_9f3a2c1b0e7d"
        readOnly
        successToastTitle="API key copied"
        successToastDescription="Keep this secret."
      />
      <FieldDescription>Shown once — store it securely.</FieldDescription>
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="api-key" className="w-full max-w-md">
              <FieldLabel>
                {direction === "rtl" ? "کلید API" : "API key"}
              </FieldLabel>
              <CopyField
                className="[&_input]:font-mono [&_input]:text-[0.8125rem]"
                defaultValue="nk_live_sk_9f3a2c1b0e7d"
                readOnly
                copyLabel={direction === "rtl" ? "کپی" : "Copy"}
                copiedLabel={direction === "rtl" ? "کپی شد" : "Copied"}
                successToastTitle={
                  direction === "rtl" ? "کلید کپی شد" : "API key copied"
                }
                successToastDescription={
                  direction === "rtl"
                    ? "این مقدار را محرمانه نگه دارید."
                    : "Keep this secret."
                }
              />
              <FieldDescription>
                {direction === "rtl"
                  ? "فقط یک‌بار نمایش داده می‌شود — امن ذخیره کنید."
                  : "Shown once — store it securely."}
              </FieldDescription>
            </Field>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">onCopied</h2>
        <p className="text-sm text-muted-foreground">
          Hook analytics or side effects after a successful clipboard write.
        </p>
        <ComponentPreview
          code={`import { useState } from "react"
import { CopyField } from "@/components/ui/copy-field"

export function CopyFieldOnCopied() {
  const [last, setLast] = useState<string | null>(null)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <CopyField
        defaultValue="https://nk.dev/share/42"
        readOnly
        successToastTitle={null}
        onCopied={setLast}
      />
      <p className="text-xs text-muted-foreground">
        Last copied: {last ?? "—"}
      </p>
    </div>
  )
}`}
        >
          {(direction) => <CopyFieldOnCopiedDemo direction={direction} />}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          code={`import { CopyField } from "@/components/ui/copy-field"
import { Field, FieldLabel } from "@/components/ui/field"

export function CopyFieldDisabled() {
  return (
    <Field name="invite-disabled" className="w-full max-w-md">
      <FieldLabel>Invite link</FieldLabel>
      <CopyField
        defaultValue="https://example.com/invite/locked"
        readOnly
        disabled
      />
    </Field>
  )
}`}
        >
          {(direction) => (
            <Field name="invite-disabled" className="w-full max-w-md">
              <FieldLabel>
                {direction === "rtl" ? "لینک دعوت" : "Invite link"}
              </FieldLabel>
              <CopyField
                defaultValue="https://example.com/invite/locked"
                readOnly
                disabled
                copyLabel={direction === "rtl" ? "کپی" : "Copy"}
              />
            </Field>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

type CopyFieldDemoDirectionProps = {
  readonly direction: "ltr" | "rtl"
}

/**
 * Controlled editable demo for the docs preview.
 */
const CopyFieldEditableDemo = ({
  direction,
}: CopyFieldDemoDirectionProps) => {
  const [value, setValue] = useState(
    direction === "rtl" ? "آدا لاولیس" : "Ada Lovelace"
  )

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Field name="display-name">
        <FieldLabel>
          {direction === "rtl" ? "نام نمایشی" : "Display name"}
        </FieldLabel>
        <CopyField
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value)
          }}
          copyLabel={direction === "rtl" ? "کپی" : "Copy"}
          copiedLabel={direction === "rtl" ? "کپی شد" : "Copied"}
          successToastTitle={null}
        />
        <FieldDescription>
          {direction === "rtl"
            ? "ویرایش کنید، سپس کپی کنید. خالی = دکمه کپی غیرفعال."
            : "Edit, then copy. Empty disables the copy control."}
        </FieldDescription>
      </Field>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="self-start"
        onClick={() => {
          setValue("")
        }}
      >
        {direction === "rtl" ? "خالی کردن" : "Clear"}
      </Button>
    </div>
  )
}

/**
 * onCopied callback demo for the docs preview.
 */
const CopyFieldOnCopiedDemo = ({
  direction,
}: CopyFieldDemoDirectionProps) => {
  const [last, setLast] = useState<string | null>(null)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <CopyField
        defaultValue="https://nk.dev/share/42"
        readOnly
        copyLabel={direction === "rtl" ? "کپی" : "Copy"}
        copiedLabel={direction === "rtl" ? "کپی شد" : "Copied"}
        successToastTitle={null}
        onCopied={setLast}
      />
      <p className="text-xs text-muted-foreground">
        {direction === "rtl" ? "آخرین کپی: " : "Last copied: "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
          {last ?? "—"}
        </code>
      </p>
    </div>
  )
}

export { CopyFieldPreviews }
