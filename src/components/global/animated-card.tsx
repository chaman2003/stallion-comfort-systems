"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  index?: number;
  hoverScale?: boolean;
}

export default function AnimatedCard({
  children,
  delay = 0,
  index = 0,
  hoverScale = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={hoverScale ? { scale: 1.02, y: -5 } : {}}
      transition={{
        duration: 0.4,
        delay: (delay || 0) + index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
