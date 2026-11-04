"use client"

import { User } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"

/**
 * Avatar docs examples — sizes, image, fallback, icon, group.
 */
const AvatarPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What lives where</h2>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
          <li>
            <strong className="font-medium text-foreground">Avatar</strong>: root +{" "}
            <code className="rounded bg-muted px-1 text-xs">size</code>
          </li>
          <li>
            <strong className="font-medium text-foreground">AvatarImage</strong> /{" "}
            <strong className="font-medium text-foreground">AvatarFallback</strong>
          </li>
          <li>
            <strong className="font-medium text-foreground">AvatarGroup</strong>:
            overlapping row helper
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}`}
        >
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With image</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarWithImage() {
  return (
    <Avatar size="lg">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`}
        >
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Fallback initials</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarFallbackDemo() {
  return (
    <Avatar>
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
  )
}`}
        >
          {(direction) => (
            <Avatar>
              <AvatarFallback>{direction === "rtl" ? "نم" : "AK"}</AvatarFallback>
            </Avatar>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Fallback icon</h2>
        <ComponentPreview
          className="w-full"
          code={`import { User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarFallbackIcon() {
  return (
    <Avatar>
      <AvatarFallback>
        <User className="size-4" aria-hidden="true" />
        <span className="sr-only">User</span>
      </AvatarFallback>
    </Avatar>
  )
}`}
        >
          <Avatar>
            <AvatarFallback>
              <User className="size-4" aria-hidden="true" />
              <span className="sr-only">User</span>
            </AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Broken image</h2>
        <p className="text-sm text-muted-foreground">
          When the image fails, Base UI shows the fallback automatically.
        </p>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarBrokenImage() {
  return (
    <Avatar>
      <AvatarImage src="/this-image-does-not-exist.png" alt="Missing" />
      <AvatarFallback>NA</AvatarFallback>
    </Avatar>
  )
}`}
        >
          {(direction) => (
            <Avatar>
              <AvatarImage src="/this-image-does-not-exist.png" alt="Missing" />
              <AvatarFallback>{direction === "rtl" ? "ند" : "NA"}</AvatarFallback>
            </Avatar>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Group</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"

export function AvatarGroupDemo() {
  return (
    <AvatarGroup aria-label="Team">
      <Avatar className="ring-2 ring-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="One" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  )
}`}
        >
          {(direction) => (
            <AvatarGroup aria-label={direction === "rtl" ? "تیم" : "Team"}>
              <Avatar className="ring-2 ring-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="One" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-background">
                <AvatarFallback>{direction === "rtl" ? "نم" : "AK"}</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-background">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-background">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </AvatarGroup>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { AvatarPreviews }
