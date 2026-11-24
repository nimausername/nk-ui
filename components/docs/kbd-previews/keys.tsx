"use client"

import { ArrowUp, CornerDownLeft } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

/**
 * Single keys, chords, and icon keys.
 */
const KbdKeysPreview = () => {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Key</h2>
        <p className="text-sm text-muted-foreground">
          One{" "}
          <code className="rounded bg-muted px-1 text-xs">Kbd</code> per key.
        </p>
        <ComponentPreview
          code={`import { Kbd } from "@/components/ui/kbd"

export function KbdKey() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <Kbd>Esc</Kbd>
    </div>
  )
}`}
        >
          {() => (
            <div className="flex items-center gap-2">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
              <Kbd>Esc</Kbd>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Group</h2>
        <p className="text-sm text-muted-foreground">
          A chord is a{" "}
          <code className="rounded bg-muted px-1 text-xs">KbdGroup</code> of
          keys.
        </p>
        <ComponentPreview
          code={`import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdChord() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Alt</Kbd>
        <Kbd>Del</Kbd>
      </KbdGroup>
    </div>
  )
}`}
        >
          {() => (
            <div className="flex flex-wrap items-center gap-4">
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Alt</Kbd>
                <Kbd>Del</Kbd>
              </KbdGroup>
            </div>
          )}
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Icons</h2>
        <p className="text-sm text-muted-foreground">
          A key can hold an icon instead of a letter.
        </p>
        <ComponentPreview
          code={`import { ArrowUp, CornerDownLeft } from "lucide-react"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdIcons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <KbdGroup>
        <Kbd>
          <ArrowUp />
        </Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <Kbd>
        <CornerDownLeft />
      </Kbd>
    </div>
  )
}`}
        >
          {() => (
            <div className="flex flex-wrap items-center gap-4">
              <KbdGroup>
                <Kbd>
                  <ArrowUp aria-hidden />
                </Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
              <Kbd>
                <CornerDownLeft aria-hidden />
              </Kbd>
            </div>
          )}
        </ComponentPreview>
      </section>
    </div>
  )
}

export { KbdKeysPreview }
