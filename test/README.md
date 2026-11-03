# nk UI test harness

Shared Vitest + Testing Library setup for every `components/ui` component.

## Commands

- `pnpm test` — run all smokes once
- `pnpm test:watch` — watch mode

## Convention for new components

1. Add `components/ui/<name>.tsx`.
2. Add `components/ui/<name>.test.tsx` in the same folder.
3. Import from `@/test/render` (not raw `@testing-library/react`).
4. Keep tests as **smokes only**:
   - mounts without crashing
   - primary role / label is reachable
   - one critical interaction when it exists
5. Do not retest Base UI internals or visual polish.

## Shared providers

`render()` wraps TooltipProvider + Toaster. ThemeProvider is omitted in unit smokes (Next theme package is app-host only). Overlay and toast smokes rely on the shared hosts.
