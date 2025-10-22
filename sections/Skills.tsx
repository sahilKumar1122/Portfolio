"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { skillCategories } from "@/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="bg-white p-4 rounded-lg border border-border hover:border-primary transition-all cursor-pointer text-center"
                    >
                      <p className="font-medium text-foreground">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-lg border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Achievements & Learning
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Badge className="text-lg font-bold">1200+</Badge>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Problem Solving
                </p>
                <p className="text-sm text-secondary">
                  Solved 1200+ problems on LeetCode and GeeksforGeeks
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Badge className="text-lg font-bold">90%+</Badge>
              </div>
              <div>
                <p className="font-semibold text-foreground">Test Coverage</p>
                <p className="text-sm text-secondary">
                  Maintained 90%+ test coverage with Jasmine & Karma
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Badge className="text-lg font-bold">40%</Badge>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Performance Boost
                </p>
                <p className="text-sm text-secondary">
                  Enhanced UI responsiveness by 40% using Angular
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-accent/10 p-2 rounded-lg">
                <Badge className="text-lg font-bold">1000+</Badge>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Concurrent Users
                </p>
                <p className="text-sm text-secondary">
                  State management supporting 1000+ concurrent users
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

