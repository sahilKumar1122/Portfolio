"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Parallax effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background moves slower (0 to 40% down when scrolled)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  // Content moves normally, but with slight acceleration
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Fade out content as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Background Image - Larger to accommodate parallax movement */}
        <div 
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpeg')",
            backgroundColor: '#F9FAFB', // Fallback color
          }}
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/60 to-white/70" />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 tracking-tight leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sahil Kumar
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-secondary mb-6 font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting beautiful interfaces with React & Angular.<br className="hidden sm:block" />
            Building intelligent systems for the modern web.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={scrollToContact}
              className="text-lg px-10 py-7 rounded-full hover:bg-foreground/5 transition-all"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="text-secondary" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

