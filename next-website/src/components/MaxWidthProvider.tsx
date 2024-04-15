import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const variants = cva(
  "w-full px-8 mx-auto",
  {
    variants: {
      size: {
        "2xl": "max-w-screen-2xl",
        "xl": "max-w-screen-xl",
        "lg": "max-w-screen-lg",
        "md": "max-w-screen-md",
        "sm": "max-w-screen-sm",
      }
    },
    defaultVariants: {
      size: "xl",
    },
  }
)

export interface MwpProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
      children: React.ReactNode;
    }

const Mwp = React.forwardRef<HTMLDivElement, MwpProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div className={cn(variants({ className, size }))} ref={ref} {...props}>
        {props.children}
      </div>
    );
  }
);

Mwp.displayName = "Mwp";

export { Mwp, variants };

// export default function mwp({ className, size, children }: { className?: string; size?: "2xl" | "xl" | "lg" | "md" | "sm"; children: React.ReactNode }) {
//   return <div className={cn(buttonVariants({ className, size }))}>{children}</div>;
// }
