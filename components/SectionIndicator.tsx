"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id === "hero" ? "" : section.id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={section.id === "hero" ? "#" : `#${section.id}`}
            className="group relative"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                activeSection === section.id
                  ? "bg-primary border-primary scale-125"
                  : "bg-transparent border-secondary hover:border-primary"
              }`}
              animate={
                activeSection === section.id
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(79, 70, 229, 0.4)",
                        "0 0 0 8px rgba(79, 70, 229, 0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                repeat: activeSection === section.id ? Infinity : 0,
              }}
            />
            {/* Tooltip */}
            <motion.span
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ x: 10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
            >
              {section.label}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

