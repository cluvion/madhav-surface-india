import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { ArrowRight, ChevronsRight } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-all",
  {
    variants: {
      variant: {
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border bg-background shadow-xs  ",
        primary: "rounded-none bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-foreground transition-colors duration-700 ease-in-out w-auto cursor-pointer ",
        secondary: "rounded-none bg-foreground px-6 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary transition-colors duration-700 ease-in-out w-auto cursor-pointer ",
        link: "text-primary underline-offset-4 hover:underline cursor-pointer",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      // size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  arrow = true,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <div
      className={cn(buttonVariants({ variant, size, className }),"group")}>
      <Comp
        data-slot="button"
        {...props}
      >
        {props.children}
      </Comp>
      {arrow && (
        <ChevronsRight className="h-4 w-4 transition-transform duration-700 ease-in-out group-hover:translate-x-1" />
      )}
    </div>
  );
}

export { Button, buttonVariants }
