"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { skillCategories } from "@/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Animated counter component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].name);

  return (
    <SectionWrapper id="skills" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs
            defaultValue={skillCategories[0].name}
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="text-sm md:text-base"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category, catIndex) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05, type: "spring" }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -8,
                        rotateY: 5,
                        boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                      className="bg-gradient-to-br from-white to-primary/5 p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all cursor-pointer text-center group relative overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      
                      {/* Icon circle */}
                      <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-2xl font-bold text-primary">
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                      
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors relative z-10">
                        {skill.name}
                      </p>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Achievement Section with Animated Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-xl border border-border shadow-sm"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Achievements & Expertise
          </h3>
          
          <div className="space-y-8">
            {/* Problem Solving */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-foreground">Problem Solving</p>
                <Badge className="text-lg font-bold bg-primary/10 text-primary border border-primary/20">
                  <AnimatedCounter end={1200} suffix="+" />
                </Badge>
              </div>
              <p className="text-xs text-secondary mb-2">
                Solved 1200+ problems on LeetCode and GeeksforGeeks
              </p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Test Coverage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-foreground">Test Coverage</p>
                <Badge className="text-lg font-bold bg-accent/10 text-accent border border-accent/20">
                  <AnimatedCounter end={90} suffix="%+" />
                </Badge>
              </div>
              <p className="text-xs text-secondary mb-2">
                Maintained 90%+ test coverage with Jasmine & Karma
              </p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Performance Boost */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-foreground">Performance Optimization</p>
                <Badge className="text-lg font-bold bg-primary/10 text-primary border border-primary/20">
                  <AnimatedCounter end={40} suffix="%" />
                </Badge>
              </div>
              <p className="text-xs text-secondary mb-2">
                Enhanced UI responsiveness by 40% using Angular
              </p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Concurrent Users */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-foreground">Scalability</p>
                <Badge className="text-lg font-bold bg-accent/10 text-accent border border-accent/20">
                  <AnimatedCounter end={1000} suffix="+" />
                </Badge>
              </div>
              <p className="text-xs text-secondary mb-2">
                State management supporting 1000+ concurrent users
              </p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

