"use client";

import { cn } from "@/lib/utils";
import "./NavMenu.css";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="navMenu relative flex items-center z-20 slide-in-top delay-100">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setShowMenu(!showMenu)}
        className={cn("menuBtn focus-visible:ring-0 pointer-events-auto transition-transform duration-300 z-30 hover:bg-transparent", {
          "rotate-45": showMenu,
        })}
      >
          <svg className="!size-8" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="22" width="8" height="8" rx="4" className="stroke-foreground vertical" strokeWidth="2" />
            <rect x="22" y="22" width="8" height="8" rx="4" className="stroke-foreground horizontal" strokeWidth="2" />
            <rect x="22" y="41" width="8" height="8" rx="4" className="stroke-foreground down" strokeWidth="2" />
            <rect x="41" y="22" width="8" height="8" rx="4" className="stroke-foreground right" strokeWidth="2" />
            <rect x="3" y="22" width="8" height="8" rx="4" className="stroke-foreground left" strokeWidth="2" />
            <rect x="22" y="3" width="8" height="8" rx="4" className="stroke-foreground up" strokeWidth="2" />
          </svg>
      </Button>
      <div
        className={cn(
          "absolute -bottom-8 translate-y-full left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none flex flex-col items-center gap-8 z-30",
          {
            "pointer-events-auto": showMenu,
          }
        )}
      >
        <a
          href="#home"
          className={cn("writing-vertical navItem-transition-1 border-transparent border-l hover:border-foreground -translate-x-full opacity-0", {
            "translate-x-0 opacity-100": showMenu,
          })}
          tabIndex={showMenu ? 0 : -1}
          onClick={() => setShowMenu(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={cn("writing-vertical navItem-transition-2 border-transparent border-l hover:border-foreground -translate-x-full opacity-0", {
            "translate-x-0 opacity-100": showMenu,
          })}
          tabIndex={showMenu ? 0 : -1}
          onClick={() => setShowMenu(false)}
        >
          About
        </a>
        <a
          href="#work"
          className={cn("writing-vertical navItem-transition-3 border-transparent border-l hover:border-foreground -translate-x-full opacity-0", {
            "translate-x-0 opacity-100": showMenu,
          })}
          tabIndex={showMenu ? 0 : -1}
          onClick={() => setShowMenu(false)}
        >
          Work
        </a>
        <a
          href="#contact"
          className={cn("writing-vertical navItem-transition-4 border-transparent border-l hover:border-foreground -translate-x-full opacity-0", {
            "translate-x-0 opacity-100": showMenu,
          })}
          tabIndex={showMenu ? 0 : -1}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </a>
      </div>
      <div className={cn("fixed inset-0 bg-transparent pointer-events-none transition z-20 block", {
        "pointer-events-auto bg-background/90 backdrop-blur-xl": showMenu,
      })} onClick={() => setShowMenu(false)} />
    </div>
  );
}
