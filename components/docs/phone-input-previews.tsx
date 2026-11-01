"use client"

import { useState } from "react"
import type { PhoneField } from "phonefield"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import {
  getExampleNumber,
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputDescription,
  PhoneInputError,
  PhoneInputField,
  PhoneInputGroup,
  PhoneInputLabel,
} from "@/components/ui/phone-input"

const ACCEPTED_PHONE_E164 = "+14155552671"

/**
 * Phone Input docs examples — basic, validation, preferred, controlled, disabled, RTL.
 */
const PhoneInputPreviews = () => {
  const [phone, setPhone] = useState<PhoneField.Value | null>(null)
  const [validationPhone, setValidationPhone] = useState<PhoneField.Value | null>(null)
  const [phoneRejected, setPhoneRejected] = useState(false)

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  getExampleNumber,
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputDescription,
  PhoneInputError,
  PhoneInputGroup,
  PhoneInputLabel,
} from "@/components/ui/phone-input"

export function PhoneInputBasic() {
  return (
    <PhoneInput name="phone" defaultCountry="US" className="max-w-sm">
      <PhoneInputLabel>Phone</PhoneInputLabel>
      <PhoneInputGroup>
        <PhoneInputCountry />
        <PhoneInputControl placeholder={(c) => getExampleNumber(c.iso2)} />
      </PhoneInputGroup>
      <PhoneInputDescription>Used for sign-in codes.</PhoneInputDescription>
      <PhoneInputError />
    </PhoneInput>
  )
}`}
        >
          {(direction) => (
            <PhoneInput name="phone" defaultCountry="US" className="max-w-sm">
              <PhoneInputLabel>
                {direction === "rtl" ? "تلفن" : "Phone"}
              </PhoneInputLabel>
              <PhoneInputGroup>
                <PhoneInputCountry
                  labels={
                    direction === "rtl"
                      ? { search: "جستجوی کشور", empty: "نتیجه‌ای نیست" }
                      : undefined
                  }
                />
                <PhoneInputControl placeholder={(c) => getExampleNumber(c.iso2)} />
              </PhoneInputGroup>
              <PhoneInputDescription>
                {direction === "rtl"
                  ? "برای کدهای ورود استفاده می‌شود."
                  : "Used for sign-in codes."}
              </PhoneInputDescription>
              <PhoneInputError />
            </PhoneInput>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Failed &amp; approved</h2>
        <p className="text-sm text-muted-foreground">
          Demo accepts only{" "}
          <code className="rounded bg-muted px-1 text-xs tabular-nums">
            {ACCEPTED_PHONE_E164}
          </code>{" "}
          (US <span className="tabular-nums">415 555 2671</span>). Incomplete or other numbers +
          Check show the destructive ring and{" "}
          <code className="rounded bg-muted px-1 text-xs">PhoneInputError</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import type { PhoneField } from "phonefield"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import {
  getExampleNumber,
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputError,
  PhoneInputGroup,
  PhoneInputLabel,
} from "@/components/ui/phone-input"

const ACCEPTED_E164 = "+14155552671"

export function PhoneInputValidation() {
  const [phone, setPhone] = useState<PhoneField.Value | null>(null)
  const [rejected, setRejected] = useState(false)

  return (
    <Form
      className="max-w-sm gap-3"
      onSubmit={(event) => {
        event.preventDefault()
        setRejected(
          Boolean(phone?.isValid && phone.e164 !== ACCEPTED_E164)
        )
      }}
    >
      <PhoneInput
        name="phone"
        required
        defaultCountry="US"
        invalid={rejected}
        onValueChange={(value) => {
          setPhone(value)
          setRejected(false)
        }}
      >
        <PhoneInputLabel>Phone</PhoneInputLabel>
        <PhoneInputGroup>
          <PhoneInputCountry />
          <PhoneInputControl placeholder={(c) => getExampleNumber(c.iso2)} />
        </PhoneInputGroup>
        <PhoneInputError>
          {rejected
            ? "That number is not accepted."
            : "Enter a valid phone number."}
        </PhoneInputError>
      </PhoneInput>
      <Button type="submit" variant="outline" size="sm" className="self-start">
        Check
      </Button>
    </Form>
  )
}`}
        >
          {(direction) => (
            <Form
              className="max-w-sm gap-3"
              onSubmit={(event) => {
                event.preventDefault()
                setPhoneRejected(
                  Boolean(
                    validationPhone?.isValid &&
                      validationPhone.e164 !== ACCEPTED_PHONE_E164
                  )
                )
              }}
            >
              <PhoneInput
                name="phone-validate"
                required
                defaultCountry="US"
                invalid={phoneRejected}
                onValueChange={(value) => {
                  setValidationPhone(value)
                  setPhoneRejected(false)
                }}
              >
                <PhoneInputLabel>
                  {direction === "rtl" ? "تلفن" : "Phone"}
                </PhoneInputLabel>
                <PhoneInputGroup>
                  <PhoneInputCountry
                    labels={
                      direction === "rtl"
                        ? { search: "جستجوی کشور", empty: "نتیجه‌ای نیست" }
                        : undefined
                    }
                  />
                  <PhoneInputControl placeholder={(c) => getExampleNumber(c.iso2)} />
                </PhoneInputGroup>
                <PhoneInputError>
                  {phoneRejected
                    ? direction === "rtl"
                      ? "این شماره پذیرفته نیست."
                      : "That number is not accepted."
                    : direction === "rtl"
                      ? "یک شماره معتبر وارد کنید."
                      : "Enter a valid phone number."}
                </PhoneInputError>
              </PhoneInput>
              <Button type="submit" variant="outline" size="sm" className="self-start">
                {direction === "rtl" ? "بررسی" : "Check"}
              </Button>
            </Form>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">PhoneInputField helper</h2>
        <ComponentPreview
          className="w-full"
          code={`import { PhoneInputField } from "@/components/ui/phone-input"

export function PhoneInputFieldDemo() {
  return (
    <PhoneInputField
      name="mobile"
      defaultCountry="GB"
      className="max-w-sm"
      label="Mobile"
      description="Include country code via the picker."
    />
  )
}`}
        >
          {(direction) => (
            <PhoneInputField
              name="mobile"
              defaultCountry="GB"
              className="max-w-sm"
              label={direction === "rtl" ? "موبایل" : "Mobile"}
              description={
                direction === "rtl"
                  ? "کد کشور را از انتخاب‌گر بگذارید."
                  : "Include country code via the picker."
              }
              countryLabels={
                direction === "rtl"
                  ? { search: "جستجوی کشور", empty: "نتیجه‌ای نیست" }
                  : undefined
              }
            />
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Preferred countries</h2>
        <ComponentPreview
          className="w-full"
          code={`import {
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputGroup,
  PhoneInputLabel,
} from "@/components/ui/phone-input"

export function PhoneInputPreferred() {
  return (
    <PhoneInput
      defaultCountry="US"
      preferredCountries={["US", "CA", "GB", "DE", "AE"]}
      className="max-w-sm"
    >
      <PhoneInputLabel>Phone</PhoneInputLabel>
      <PhoneInputGroup>
        <PhoneInputCountry />
        <PhoneInputControl />
      </PhoneInputGroup>
    </PhoneInput>
  )
}`}
        >
          {(direction) => (
            <PhoneInput
              defaultCountry="US"
              preferredCountries={["US", "CA", "GB", "DE", "AE"]}
              className="max-w-sm"
            >
              <PhoneInputLabel>
                {direction === "rtl" ? "تلفن" : "Phone"}
              </PhoneInputLabel>
              <PhoneInputGroup>
                <PhoneInputCountry />
                <PhoneInputControl />
              </PhoneInputGroup>
            </PhoneInput>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Controlled</h2>
        <p className="text-sm text-muted-foreground">
          Read{" "}
          <code className="rounded bg-muted px-1 text-xs">e164</code> and{" "}
          <code className="rounded bg-muted px-1 text-xs">isValid</code> from{" "}
          <code className="rounded bg-muted px-1 text-xs">onValueChange</code>.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { useState } from "react"
import type { PhoneField } from "phonefield"
import {
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputGroup,
  PhoneInputLabel,
} from "@/components/ui/phone-input"

export function PhoneInputControlled() {
  const [phone, setPhone] = useState<PhoneField.Value | null>(null)

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <PhoneInput
        value={phone ?? undefined}
        onValueChange={setPhone}
        defaultCountry="US"
      >
        <PhoneInputLabel>Phone</PhoneInputLabel>
        <PhoneInputGroup>
          <PhoneInputCountry />
          <PhoneInputControl />
        </PhoneInputGroup>
      </PhoneInput>
      <p className="text-xs text-muted-foreground tabular-nums">
        {phone?.e164 ?? "—"} {phone?.isValid ? "(valid)" : "(incomplete)"}
      </p>
    </div>
  )
}`}
        >
          {(direction) => (
            <div className="flex max-w-sm flex-col gap-2">
              <PhoneInput
                value={phone ?? undefined}
                onValueChange={setPhone}
                defaultCountry="US"
              >
                <PhoneInputLabel>
                  {direction === "rtl" ? "تلفن" : "Phone"}
                </PhoneInputLabel>
                <PhoneInputGroup>
                  <PhoneInputCountry />
                  <PhoneInputControl />
                </PhoneInputGroup>
              </PhoneInput>
              <p className="text-xs text-muted-foreground tabular-nums">
                {phone?.e164 ?? "—"}{" "}
                {phone?.isValid
                  ? direction === "rtl"
                    ? "(معتبر)"
                    : "(valid)"
                  : direction === "rtl"
                    ? "(ناقص)"
                    : "(incomplete)"}
              </p>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <ComponentPreview
          className="w-full"
          code={`import { PhoneInputField } from "@/components/ui/phone-input"

export function PhoneInputDisabled() {
  return (
    <PhoneInputField
      disabled
      defaultCountry="US"
      defaultValue={{ countryIso2: "US", nationalNumber: "4155552671" }}
      className="max-w-sm"
      label="Phone"
    />
  )
}`}
        >
          {(direction) => (
            <PhoneInputField
              disabled
              defaultCountry="US"
              defaultValue={{ countryIso2: "US", nationalNumber: "4155552671" }}
              className="max-w-sm"
              label={direction === "rtl" ? "تلفن" : "Phone"}
            />
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { PhoneInputPreviews }
