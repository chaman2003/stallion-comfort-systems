import { RefObject, useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

type FadeProps = {
  children: RefObject<null>;
  index: number;
  delay?: number;
};

// Define variants outside of the component
const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
    },
  }),
};

export const FadeInWhenVisible = ({
  children,
  index,
  delay = 0.1,
}: FadeProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const delayValue = delay * index;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      custom={delayValue}
      variants={fadeVariants}
    >
      {children}
    </motion.div>
  );
};
