import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

const linkVariants = cva(
  "flex items-center gap-1 py-1 relative after:duration-200 after:transition-[width] after:absolute after:w-6 after:h-[2px] after:bottom-0 after:left-0 after:bg-foreground hover:after:w-full",
  {
    variants: {
      variant: {
        default: "text-foreground after:bg-foreground",
        primary: "text-primary after:bg-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  href: string;
}

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Link;
    return (
      <Comp
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

LinkComponent.displayName = "LinkComponent";

export { LinkComponent, linkVariants };
