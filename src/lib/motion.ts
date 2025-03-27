import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const FadeInWhenVisible = ({
  children,
  index,
  delay = 0.1,
}: {
  children: React.ReactNode;
  index: number;
  delay?: number;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * delay,
            ease: [0.17, 0.55, 0.55, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
