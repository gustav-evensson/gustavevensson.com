'use client'

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'

type ADivProps = {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}


export default function ADiv({ children, className, initial, whileInView, viewport, transition }: ADivProps) {
  return (
    <motion.div
      {...{ initial, whileInView, viewport, transition }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}    