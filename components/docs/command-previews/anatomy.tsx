/**
 * Composition map for Command docs — no live preview.
 */
const CommandAnatomyPreview = () => {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">What lives where</h2>
      <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">
        <li>
          <strong className="font-medium text-foreground">Command</strong>:
          filter root (
          <code className="rounded bg-muted px-1 text-xs">value</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">shouldFilter</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">filter</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">loop</code>)
        </li>
        <li>
          <strong className="font-medium text-foreground">CommandDialog</strong>:
          Dialog palette shell (
          <code className="rounded bg-muted px-1 text-xs">open</code> /{" "}
          <code className="rounded bg-muted px-1 text-xs">onOpenChange</code>)
        </li>
        <li>
          <strong className="font-medium text-foreground">CommandInput</strong> +{" "}
          <strong className="font-medium text-foreground">CommandList</strong>:
          search field and scrollable results
        </li>
        <li>
          <strong className="font-medium text-foreground">CommandEmpty</strong> /{" "}
          <strong className="font-medium text-foreground">CommandLoading</strong>:
          no-match and async states
        </li>
        <li>
          <strong className="font-medium text-foreground">CommandGroup</strong> +{" "}
          <strong className="font-medium text-foreground">CommandItem</strong> +{" "}
          <strong className="font-medium text-foreground">CommandSeparator</strong>{" "}
          +{" "}
          <strong className="font-medium text-foreground">CommandShortcut</strong>:
          sections, rows, dividers, hints (
          <code className="rounded bg-muted px-1 text-xs">keywords</code>,{" "}
          <code className="rounded bg-muted px-1 text-xs">disabled</code>)
        </li>
      </ul>
    </section>
  )
}

export { CommandAnatomyPreview }
