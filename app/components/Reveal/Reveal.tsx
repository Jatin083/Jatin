"use client";

import { motion, useReducedMotion } from "motion/react";

// Content rises gently into place the first time it enters the viewport.
// Reduced motion: a plain cross-fade, no travel.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}
