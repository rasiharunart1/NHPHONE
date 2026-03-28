import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:scale-[1.02] active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:bg-primary/90 shadow-xl shadow-secondary/10",
        destructive:
          "bg-error text-on-error hover:bg-error/90",
        outline:
          "border border-outline-variant/20 bg-transparent hover:bg-white/5",
        secondary:
          "bg-secondary text-on-secondary hover:bg-secondary/80",
        ghost: "hover:bg-white/5",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "glass-panel text-white border border-outline-variant/20 hover:bg-white/10",
        glow: "group relative px-10 py-5 bg-primary text-on-primary shadow-xl shadow-secondary/10"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-10 text-lg py-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    if (variant === "glow") {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
          <div className="absolute inset-0 rounded-full bg-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
        </Comp>
      )
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
