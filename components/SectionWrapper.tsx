"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoother feel
        opacity: { duration: 0.6 },
        y: { duration: 0.8 }
      }}
    >
      {children}
    </motion.section>
  );
}

