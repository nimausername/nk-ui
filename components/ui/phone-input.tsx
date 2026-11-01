"use client"

import { Check, ChevronDown } from "lucide-react"
import { PhoneField } from "phonefield"
import { getExampleNumber } from "phonefield/utils"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PhoneInputState = PhoneField.State

const resolveClassName = (
  className: string | ((state: PhoneInputState) => string | undefined) | undefined,
  state: PhoneInputState,
  ...base: Array<string | undefined>
) => {
  return cn(...base, typeof className === "function" ? className(state) : className)
}

/**
 * Props for the phone input root (country, E.164 value, validation).
 */
type PhoneInputProps = PhoneField.RootProps

/**
 * Phone number field root. Owns country + national number; emits E.164 via `onValueChange`.
 * Pair Label / Group / Country / Input / Description / Error by composition.
 */
const PhoneInput = ({ className, ...props }: PhoneInputProps) => {
  return (
    <PhoneField.Root
      data-slot="phone-input"
      className={(state) =>
        resolveClassName(className, state, "flex w-full flex-col gap-1.5")
      }
      {...props}
    />
  )
}

/**
 * Props for the accessible phone label.
 */
type PhoneInputLabelProps = PhoneField.LabelProps

/**
 * Label wired to the phone input control.
 */
const PhoneInputLabel = ({ className, ...props }: PhoneInputLabelProps) => {
  return (
    <PhoneField.Label
      data-slot="phone-input-label"
      className={(state) =>
        resolveClassName(
          className,
          state,
          "text-sm leading-none font-medium text-foreground select-none",
          "data-invalid:text-destructive",
          "data-valid:text-success",
          "data-disabled:pointer-events-none data-disabled:opacity-50"
        )
      }
      {...props}
    />
  )
}

/**
 * Props for the bordered country + number shell.
 */
type PhoneInputGroupProps = PhoneField.GroupProps

/**
 * Visual shell matching nk Input height and focus / invalid rings.
 */
const PhoneInputGroup = ({ className, ...props }: PhoneInputGroupProps) => {
  return (
    <PhoneField.Group
      data-slot="phone-input-group"
      className={(state) =>
        resolveClassName(
          className,
          state,
          "flex h-9 w-full min-w-0 items-stretch overflow-hidden rounded-md border border-input bg-transparent transition-colors",
          "data-focused:border-ring data-focused:ring-2 data-focused:ring-ring data-focused:ring-offset-2 data-focused:ring-offset-background",
          "data-invalid:border-destructive data-invalid:ring-2 data-invalid:ring-destructive/30",
          "data-valid:border-success data-valid:ring-2 data-valid:ring-success/30",
          "data-focused:data-invalid:border-destructive data-focused:data-invalid:ring-destructive/30",
          "data-focused:data-valid:border-success data-focused:data-valid:ring-success/30",
          "data-disabled:pointer-events-none data-disabled:opacity-50"
        )
      }
      {...props}
    />
  )
}

/**
 * Props for helper text under the control.
 */
type PhoneInputDescriptionProps = PhoneField.DescriptionProps

/**
 * Supporting copy linked to the input for assistive tech.
 */
const PhoneInputDescription = ({
  className,
  ...props
}: PhoneInputDescriptionProps) => {
  return (
    <PhoneField.Description
      data-slot="phone-input-description"
      className={(state) =>
        resolveClassName(className, state, "text-sm text-muted-foreground text-pretty")
      }
      {...props}
    />
  )
}

/**
 * Props for the validation error message.
 */
type PhoneInputErrorProps = PhoneField.ErrorProps

/**
 * Error message shown while the field is invalid.
 */
const PhoneInputError = ({ className, ...props }: PhoneInputErrorProps) => {
  return (
    <PhoneField.Error
      data-slot="phone-input-error"
      className={(state) => resolveClassName(className, state, "text-sm text-destructive")}
      {...props}
    />
  )
}

/**
 * Props for the national number input.
 */
type PhoneInputControlProps = PhoneField.InputProps

/**
 * Formatted national number input inside the group.
 */
const PhoneInputControl = ({ className, ...props }: PhoneInputControlProps) => {
  return (
    <PhoneField.Input
      data-slot="phone-input-control"
      className={cn(
        "h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground tabular-nums outline-none",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

type PhoneInputCountryProps = PhoneField.CountryProps

/**
 * Default nk country picker (flag + dial code + searchable list).
 * Pass `children` to replace the default composition with custom parts.
 */
const PhoneInputCountry = ({
  children,
  labels,
  ...props
}: PhoneInputCountryProps) => {
  if (children) {
    return (
      <PhoneField.Country labels={labels} {...props}>
        {children}
      </PhoneField.Country>
    )
  }

  return (
    <PhoneField.Country labels={labels} {...props}>
      <PhoneField.CountryTrigger
        data-slot="phone-input-country-trigger"
        className={cn(
          "group/phone-country inline-flex shrink-0 items-center gap-1.5 border-e border-input px-2.5 text-sm outline-none select-none",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:bg-accent focus-visible:text-accent-foreground",
          "data-popup-open:bg-accent data-popup-open:text-accent-foreground"
        )}
      >
        <PhoneField.CountryValue>
          {(country) => (
            <>
              <span aria-hidden="true" className="text-base leading-none">
                {country.flag}
              </span>
              <span className="tabular-nums text-muted-foreground">{country.dialCode}</span>
            </>
          )}
        </PhoneField.CountryValue>
        <PhoneField.CountryIcon className="text-muted-foreground transition-transform duration-150 group-data-popup-open/phone-country:rotate-180">
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </PhoneField.CountryIcon>
      </PhoneField.CountryTrigger>
      <PhoneField.CountryPortal>
        <PhoneField.CountryPositioner className="isolate z-50" sideOffset={6}>
          <PhoneField.CountryPopup
            data-slot="phone-input-country-popup"
            className={cn(
              "flex max-h-[min(22rem,var(--available-height))] w-72 max-w-[var(--available-width)] origin-[var(--transform-origin)] flex-col overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lg outline-none",
              "duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
            )}
          >
            <div className="border-b border-border p-1.5">
              <PhoneField.CountrySearch
                data-slot="phone-input-country-search"
                className={cn(
                  "h-8 w-full rounded-md bg-muted/60 px-2.5 text-sm outline-none",
                  "placeholder:text-muted-foreground",
                  "focus-visible:ring-2 focus-visible:ring-ring/40"
                )}
              />
            </div>
            <PhoneField.CountryEmpty className="px-3 py-6 text-center text-sm text-muted-foreground empty:hidden" />
            <PhoneField.CountryList
              data-slot="phone-input-country-list"
              className="min-h-0 flex-1 scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0 [&_[data-preferred]]:mb-1 [&_[data-preferred]]:border-b [&_[data-preferred]]:border-border [&_[data-preferred]]:pb-1"
            >
              {(country) => (
                <PhoneField.CountryItem
                  key={country.iso2}
                  country={country}
                  className={cn(
                    "flex cursor-default items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm outline-none select-none",
                    "data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                  )}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {country.flag}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{country.name}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {country.dialCode}
                  </span>
                  <PhoneField.CountryItemIndicator className="text-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </PhoneField.CountryItemIndicator>
                </PhoneField.CountryItem>
              )}
            </PhoneField.CountryList>
          </PhoneField.CountryPopup>
        </PhoneField.CountryPositioner>
      </PhoneField.CountryPortal>
    </PhoneField.Country>
  )
}

/**
 * Convenience composition: label + group (country + control) + description + error.
 * Prefer the parts when you need a custom layout.
 */
type PhoneInputFieldProps = PhoneInputProps & {
  readonly label?: ReactNode
  readonly description?: ReactNode
  readonly placeholder?: PhoneField.InputProps["placeholder"]
  readonly countryLabels?: PhoneField.CountryLabels
  readonly controlProps?: Omit<PhoneInputControlProps, "placeholder">
}

/**
 * Opinionated single-field layout for common forms.
 */
const PhoneInputField = ({
  className,
  label,
  description,
  placeholder,
  countryLabels,
  controlProps,
  children,
  ...props
}: PhoneInputFieldProps) => {
  return (
    <PhoneInput className={className} {...props}>
      {label ? <PhoneInputLabel>{label}</PhoneInputLabel> : null}
      <PhoneInputGroup>
        <PhoneInputCountry labels={countryLabels} />
        <PhoneInputControl
          aria-label={label ? undefined : "Phone number"}
          placeholder={placeholder}
          {...controlProps}
        />
      </PhoneInputGroup>
      {description ? (
        <PhoneInputDescription>{description}</PhoneInputDescription>
      ) : null}
      <PhoneInputError />
      {children}
    </PhoneInput>
  )
}

export {
  getExampleNumber,
  PhoneInput,
  PhoneInputControl,
  PhoneInputCountry,
  PhoneInputDescription,
  PhoneInputError,
  PhoneInputField,
  PhoneInputGroup,
  PhoneInputLabel,
}
export type {
  PhoneInputControlProps,
  PhoneInputCountryProps,
  PhoneInputDescriptionProps,
  PhoneInputErrorProps,
  PhoneInputFieldProps,
  PhoneInputGroupProps,
  PhoneInputLabelProps,
  PhoneInputProps,
}
export type { PhoneField }
export { usePhoneField } from "phonefield"
