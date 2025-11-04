"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// Split navigation links - mascot will be in the center
const leftNavLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const rightNavLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = allNavLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SK Logo - Fixed on Left */}
      <motion.a
        href="#"
        className={`fixed top-6 left-6 z-50 text-2xl font-bold transition-all duration-300 ${
          isScrolled ? "text-primary" : "text-foreground"
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        SK
      </motion.a>

      {/* Open to Work Badge - Fixed on Right */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full shadow-md">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Open to Work</span>
        </div>
      </motion.div>

      {/* Centered Navigation */}
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "top-4" : "top-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className={`mx-auto w-fit ${
            isScrolled
              ? "bg-white shadow-xl"
              : "bg-white/80 shadow-lg"
          } backdrop-blur-md rounded-full px-8 py-4 border border-border/50`}
        >
          <div className="flex items-center justify-center">
            {/* Mobile: Logo + Menu Button */}
            <div className="md:hidden flex items-center gap-4">
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:scale-110 transition-transform overflow-hidden border-2 border-primary/20"
            >
              <Image 
                src="/images/mascot.png" 
                alt="Mascot" 
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </a>
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation - Centered with Logo in Middle */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Left Nav Links */}
            {leftNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative whitespace-nowrap ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeSection"
                  />
                )}
              </a>
            ))}

            {/* Center Mascot/Logo */}
            <a
              href="#"
              className="flex items-center justify-center w-14 h-14 rounded-full hover:scale-110 transition-transform shadow-lg mx-2 overflow-hidden border-2 border-primary/20"
            >
              <Image 
                src="/images/mascot.png" 
                alt="Mascot" 
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </a>

            {/* Right Nav Links */}
            {rightNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative whitespace-nowrap ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeSection"
                  />
                )}
              </a>
            ))}
          </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl border border-border shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-6 py-4 space-y-3">
                  {allNavLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-medium text-secondary hover:text-foreground transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}

