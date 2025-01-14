"use client";

import { useState, useEffect } from "react";

const themes = ["blue", "green", "yellow", "purple", "orange", "violet"];

export default function ThemeProvider({ children, className }: { children: React.ReactNode, className: string }) {

  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(themes[Math.floor(Math.random() * themes.length)]);
  }, []);
  return <body className={`${theme} ${className}`}>{children}</body>;
}
