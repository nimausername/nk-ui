import { cva, type VariantProps } from "class-variance-authority"

/**
 * Visual variants for the nk Badge.
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-md border border-transparent font-medium whitespace-nowrap transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        soft: "bg-secondary/70 text-secondary-foreground",
        outline: "border-border bg-background text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-success text-success-foreground",
      },
      size: {
        default: "px-2 py-0.5 text-xs [&_svg]:size-3",
        sm: "px-1.5 py-px text-[10px] [&_svg]:size-2.5",
        lg: "px-2.5 py-1 text-sm [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type BadgeVariantProps = VariantProps<typeof badgeVariants>

export { badgeVariants }
export type { BadgeVariantProps }
