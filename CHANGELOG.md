# Changelog

## 0.1.0 — unreleased

- Scaffold Next.js docs site with light/dark themes
- Publish Scroll Area as `@nk/scroll-area` (Base UI custom scrollbars; compose with Scroll Fade on the viewport)
- Publish Scroll Fade as `@nk/scroll-fade` (CSS utilities + optional `useScrollFadeDirection` smart hook)
- Add `utils`, `button`, `breadcrumb`, `dialog`, `field`, `input`, and `progress-button` (Base UI / composable primitives)
- Publish Dialog as `@nk/dialog` (Trigger / Content / Header / Footer / Close; RTL-safe close)
- Publish Field as `@nk/field` and Input as `@nk/input` (labeled forms with automatic associations)
- Field + Input validation chrome: `FieldSuccess`, success tokens, `data-valid` / `data-invalid` border rings
- Publish Form as `@nk/form` with docs page (required for Field `validationMode="onSubmit"`)
- Input OTP slots: `data-invalid` / `data-valid` border rings; Field failed/approved docs preview
- Input / Number Field / Phone Input / Password Input: Form failed/approved validation demos + invalid/valid rings
- Publish Checkbox, Switch, Radio Group, Select, and Textarea (`@nk/*`) with Field-aware docs previews
- Publish Password Input as `@nk/password-input` (Composites; show / hide toggle on Input + Button)
- Publish Number Field as `@nk/number-field` (steppers, min/max/step, optional scrub area)
- Publish Phone Input as `@nk/phone-input` (phonefield + Base UI; country picker, E.164)
- Publish Input OTP as `@nk/input-otp` (Base UI OTP Field; slots, mask, grouped layouts)
- Expand Button: soft/link variants, icon sizes, loading state
- Publish ProgressButton as `@nk/progress-button` (stable label width)
- Docs Composites catalog for composed pieces (sidebar + `/docs/composites`)
- Publish Rail Sidebar as `@nk/rail-sidebar` (Composites; concept adapted from Rare UI HookSidebar); docs site uses an internal fork
- Remove `components/extras`
- Add shadcn-compatible `@nk` registry definitions
- Docs IA: Docs + Components + Composites, scoped Persian RTL previews
- Docs View Code / Copy panel under live previews
- Establish folder boundaries: `ui` / `docs` / `site` / `shared` + ARCHITECTURE.md
