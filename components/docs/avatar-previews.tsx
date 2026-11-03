"use client"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * Avatar docs examples — fallback, image, sizes.
 */
const AvatarPreviews = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Fallback</h2>
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
        <h2 className="text-lg font-semibold">With image</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarImageDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <ComponentPreview
          className="w-full"
          code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-6">
        <AvatarFallback className="text-[10px]">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}`}
        >
          <div className="flex items-center gap-3">
            <Avatar className="size-6">
              <AvatarFallback className="text-[10px]">SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        </ComponentPreview>
      </section>
    </div>
  )
}

export { AvatarPreviews }
