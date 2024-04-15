"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="ghost" size="icon" className="rounded-full transition-transform duration-300 hover:bg-transparent hover:scale-[1.15]" onClick={() => toggleTheme()}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 transition-transform duration-300 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-transform duration-300 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
