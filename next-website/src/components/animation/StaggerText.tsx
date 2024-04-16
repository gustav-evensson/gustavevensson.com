"use client";

import { motion } from "framer-motion";

type Props = {
  children?: any;
  className?: string;
  aos?: boolean;
  duration?: number;
  delay?: number;
  stagger?: number;
  margin?: string;
};

export default function StaggerText({ children, className, aos = true, duration, delay, stagger, margin: m }: Props) {
  const charAnimations = {
    hidden: { opacity: 0 },
    visible: {  opacity: 1 },
  };

  return (
    <span className={className}>
      <span className="sr-only">{children}</span>
      <motion.span 
      aria-hidden 
      initial="hidden" 
      {...(aos ? { whileInView: "visible" } : { animate: "visible" })}
      transition={{ staggerChildren: stagger || 0.01, duration: duration || 0.3, delay: delay || 0}}
      viewport={{ once: true, margin: m || "0px" }}
      >
        {children.split("").map((char: any, index: number) => {
          return (
            <motion.span
              key={index}
              variants={charAnimations}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>
    </span>
  );
}
