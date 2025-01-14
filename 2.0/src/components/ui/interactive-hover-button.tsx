import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", icon, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-32 outline-none focus-visible:border-primary cursor-pointer transition-all duration-300 overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
          className
        )}
        {...props}
      >
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          {icon}
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
      </button>
    );
  }
);

interface InteractiveHoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  icon: React.ReactNode;
  href: string;
}


const InteractiveHoverLink = React.forwardRef<HTMLAnchorElement, InteractiveHoverLinkProps>(
  ({ text = "Link", icon, className, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn("group relative w-32 outline-none focus-visible:border-primary cursor-pointer transition-all duration-300 overflow-hidden rounded-full border bg-background p-2 text-center inline-block font-semibold", className)}
        {...props}
      >
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          {icon}
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
      </Link>
    )
  }
);

InteractiveHoverLink.displayName = "InteractiveHoverLink";

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton, InteractiveHoverLink };
