"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

export default function ChatbotBubble() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-lg border border-border p-4 mb-2"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 text-secondary hover:text-foreground"
            >
              <X size={18} />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Bot className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Hey there! 👋
                </p>
                <p className="text-sm text-secondary">
                  I&apos;m Sahil&apos;s AI sidekick — experimenting with agentic AI. 🤖
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Bot size={24} />
      </motion.button>
    </div>
  );
}

