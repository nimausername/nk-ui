import { describe, expect, it, vi } from "vitest"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { render, screen } from "@/test/render"

describe("Command", () => {
  it("renders a searchable list with groups and shortcuts", async () => {
    const handleSelect = vi.fn()
    const { user } = render(
      <Command className="rounded-lg border border-border">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={handleSelect}>
              Calendar
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem>Search Emoji</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    expect(
      screen.getByPlaceholderText("Type a command...")
    ).toBeInTheDocument()
    expect(screen.getByText("Suggestions")).toBeInTheDocument()
    expect(screen.getByText("⌘K")).toBeInTheDocument()

    await user.click(screen.getByText("Calendar"))
    expect(handleSelect).toHaveBeenCalled()
  })

  it("filters items as the user types", async () => {
    const { user } = render(
      <Command className="rounded-lg border border-border">
        <CommandInput placeholder="Filter..." aria-label="Filter commands" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    await user.type(screen.getByLabelText("Filter commands"), "set")
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.queryByText("Calendar")).not.toBeInTheDocument()
  })

  it("opens as a dialog palette", async () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>New file</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    )

    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("Command Palette")).toBeInTheDocument()
    expect(screen.getByText("New file")).toBeInTheDocument()
  })

  it("renders a loading row for async flows", () => {
    render(
      <Command shouldFilter={false} className="rounded-lg border border-border">
        <CommandInput placeholder="Search async..." />
        <CommandList>
          <CommandLoading>Searching…</CommandLoading>
        </CommandList>
      </Command>
    )

    const loading = screen.getByRole("progressbar")
    expect(loading).toBeInTheDocument()
    expect(screen.getByText("Searching…")).toBeInTheDocument()
    expect(loading.className).toContain("text-center")
    expect(loading.className).toContain("[&>[aria-hidden]]:flex")
  })

  it("keeps disabled items visible but not selectable", async () => {
    const handleSelect = vi.fn()
    const { user } = render(
      <Command className="rounded-lg border border-border">
        <CommandInput placeholder="Filter..." />
        <CommandList>
          <CommandGroup heading="Workspace">
            <CommandItem onSelect={handleSelect}>Open</CommandItem>
            <CommandItem disabled onSelect={handleSelect}>
              Invite
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )

    expect(screen.getByText("Invite")).toBeInTheDocument()
    await user.click(screen.getByText("Invite"))
    expect(handleSelect).not.toHaveBeenCalled()
  })
})
