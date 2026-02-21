import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: FadeInProps) => {
  const offset = 24;
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Stagger wrapper: children animate in sequence */
export const FadeInStagger = ({
  children,
  stagger = 0.1,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{ visible: { transition: { staggerChildren: stagger } } }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Use inside FadeInStagger */
export const FadeInItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
