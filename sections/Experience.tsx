"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience & Education
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-secondary mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            My professional journey and academic background
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Experience Cards */}
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -80 : 80, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative mb-16 md:mb-24"
              >
                {/* Animated Timeline Node */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background transform -translate-x-1/2 z-20 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.5,
                    rotate: 180,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Pulsing ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Card Container */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  {/* Card Content */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white p-6 rounded-xl border border-border shadow-md hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl font-bold text-foreground mb-2"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.role}
                          </motion.h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <Building2 size={18} className="flex-shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Duration & Location */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary">
                        <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Tech Stack with stagger animation */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.techStack.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.2 + techIndex * 0.05
                            }}
                            whileHover={{ 
                              scale: 1.1,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <Badge 
                              className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default shadow-sm"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Achievements with stagger animation */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.2 + achIndex * 0.1
                            }}
                            whileHover={{ 
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                            className="text-sm text-secondary flex items-start gap-3 group/item"
                          >
                            <span className="text-primary mt-1 font-bold group-hover/item:scale-125 transition-transform">
                              •
                            </span>
                            <span className="group-hover/item:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
