import * as React from "react"
import { cn } from "@/lib/utils"

const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    corner?: "lg" | "xl" | "2xl" | "3xl" | "full"
  }
>(({ className, corner = "xl", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "glass-panel border border-outline-variant/10",
        corner === "lg" && "rounded-lg",
        corner === "xl" && "rounded-xl",
        corner === "2xl" && "rounded-2xl",
        corner === "3xl" && "rounded-3xl",
        corner === "full" && "rounded-[4rem]",
        className
      )}
      {...props}
    />
  )
})
GlassCard.displayName = "GlassCard"

export { GlassCard }
