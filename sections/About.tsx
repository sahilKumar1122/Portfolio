"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Code2,
  Palette,
  Blocks,
  Cloud,
  Brain,
  Sparkles,
} from "lucide-react";

const techIcons = [
  { name: "React", icon: Code2 },
  { name: "Angular", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "UI/UX", icon: Palette },
  { name: "Node.js", icon: Blocks },
  { name: "Docker", icon: Cloud },
  { name: "AWS", icon: Cloud },
  { name: "AI/ML", icon: Brain },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Animated ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-primary/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Profile Image Container */}
              <motion.div 
                className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* If you add your photo as public/images/profile.jpg, it will show here */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  {/* Your profile photo */}
                  <img
                    src="/images/me.jpeg"
                    alt="Sahil Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient with icon if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <svg class="text-primary" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg border-2 border-primary/20">
                <Brain className="text-accent" size={32} />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -z-10 blur-xl" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-3 rounded-full">
              <div className="text-3xl font-bold text-primary">1+</div>
              <div className="text-left">
                <div className="text-sm font-semibold text-primary">Years</div>
                <div className="text-xs text-secondary">Experience</div>
              </div>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              Hey there! I&apos;m a <span className="text-primary font-semibold">Software Engineer</span> at{" "}
              <span className="font-semibold">Standard Chartered Research Technology</span>, passionate about
              crafting beautiful, intuitive user interfaces that users love.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My expertise lies in <span className="text-primary font-semibold">frontend development</span> with
              React, Angular, and Next.js, but I&apos;m constantly expanding my horizons into{" "}
              <span className="font-semibold">full-stack development</span>,{" "}
              <span className="font-semibold">cloud technologies</span> (Docker, AWS), and{" "}
              <span className="font-semibold">AI/ML systems</span>.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              I thrive on building scalable web applications, implementing elegant design systems,
              and bringing seamless user experiences to life. With a strong foundation in both
              frontend and backend, I love tackling complex challenges and turning them into
              simple, efficient solutions.
            </p>

            {/* Location Badge */}
            <div className="flex items-center gap-2 text-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">New Delhi, India</span>
              <span className="text-muted-foreground">• IST (UTC+5:30)</span>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Core Technologies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            {techIcons.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="text-primary" size={32} />
                  <span className="text-xs font-medium text-secondary text-center">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

