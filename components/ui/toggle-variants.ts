import { cva, type VariantProps } from "class-variance-authority"

/**
 * Visual variants for the nk Toggle.
 */
const toggleVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-pressed:bg-accent data-pressed:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-muted hover:text-muted-foreground",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 min-w-9 px-3",
        sm: "h-8 min-w-8 px-2 text-xs",
        lg: "h-10 min-w-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ToggleVariantProps = VariantProps<typeof toggleVariants>

export { toggleVariants }
export type { ToggleVariantProps }
