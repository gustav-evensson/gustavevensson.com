"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function MotionStalker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth, window.innerHeight);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShow(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={cn("hidden md:block fixed inset-0 z-[-1]")}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: show ? 1 : 0,
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute w-[800px] aspect-square rounded-full stalker-gradient -translate-x-1/2 -translate-y-1/2 z-[0]"
      ></motion.div>
      <div className="fixed inset-0 z-[0] backdrop-blur-3xl bg-background/50"></div>
    </div>
  );
}
