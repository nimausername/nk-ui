"use client"

import { Loader2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command"

/**
 * Async search with shouldFilter={false} and CommandLoading.
 */
const CommandLoadingPreview = () => {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  const handleQueryChange = (next: string) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setQuery(next)
    if (!next) {
      setLoading(false)
      return
    }
    setLoading(true)
    timerRef.current = window.setTimeout(() => {
      setLoading(false)
      timerRef.current = null
    }, 600)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Loading</h2>
      <p className="text-sm text-muted-foreground">
        Disable built-in filtering with{" "}
        <code className="rounded bg-muted px-1 text-xs">
          shouldFilter=&#123;false&#125;
        </code>{" "}
        and render{" "}
        <code className="rounded bg-muted px-1 text-xs">CommandLoading</code>{" "}
        while you fetch. Type to simulate a request.
      </p>
      <ComponentPreview
        code={`"use client"

import { Loader2 } from "lucide-react"
import { useState } from "react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command"

export function CommandLoadingDemo() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const handleQueryChange = (next: string) => {
    setQuery(next)
    if (!next) {
      setLoading(false)
      return
    }
    setLoading(true)
    window.setTimeout(() => setLoading(false), 600)
  }

  return (
    <Command shouldFilter={false} className="rounded-lg border border-border">
      <CommandInput
        value={query}
        onValueChange={handleQueryChange}
        placeholder="Search async..."
      />
      <CommandList>
        {loading ? (
          <CommandLoading>
            <Loader2 className="size-4 animate-spin" />
            Searching…
          </CommandLoading>
        ) : (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Results">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  )
}`}
      >
        {(direction) => (
          <div className="w-full max-w-md" dir={direction}>
            <Command
              shouldFilter={false}
              className="rounded-lg border border-border"
            >
              <CommandInput
                value={query}
                onValueChange={handleQueryChange}
                placeholder={
                  direction === "rtl" ? "جستجوی ناهمگام..." : "Search async..."
                }
              />
              <CommandList>
                {loading ? (
                  <CommandLoading>
                    <Loader2
                      className="size-4 animate-spin"
                      aria-hidden="true"
                    />
                    {direction === "rtl" ? "در حال جستجو…" : "Searching…"}
                  </CommandLoading>
                ) : (
                  <>
                    <CommandEmpty>
                      {direction === "rtl"
                        ? "نتیجه‌ای پیدا نشد."
                        : "No results found."}
                    </CommandEmpty>
                    <CommandGroup
                      heading={direction === "rtl" ? "نتایج" : "Results"}
                    >
                      <CommandItem>
                        {direction === "rtl" ? "تقویم" : "Calendar"}
                      </CommandItem>
                      <CommandItem>
                        {direction === "rtl" ? "تنظیمات" : "Settings"}
                      </CommandItem>
                    </CommandGroup>
                  </>
                )}
              </CommandList>
            </Command>
          </div>
        )}
      </ComponentPreview>
    </section>
  )
}

export { CommandLoadingPreview }
