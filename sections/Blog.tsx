"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Building Scalable Angular Applications",
    excerpt:
      "Learn best practices for structuring large-scale Angular apps with NgRx, lazy loading, and modular architecture.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Frontend",
    slug: "building-scalable-angular-apps",
  },
  {
    title: "My Journey into Full-Stack Development",
    excerpt:
      "From frontend specialist to full-stack developer: exploring Node.js, databases, and backend architecture.",
    date: "2024-11-20",
    readTime: "6 min read",
    category: "Career",
    slug: "full-stack-journey",
  },
  {
    title: "AI-Powered Chatbots: A Developer's Guide",
    excerpt:
      "Building intelligent chatbots with LLM APIs, vector databases, and contextual understanding for better user experiences.",
    date: "2024-10-10",
    readTime: "10 min read",
    category: "AI/ML",
    slug: "ai-chatbots-guide",
  },
];

export default function Blog() {
  return (
    <SectionWrapper id="blog">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog & Learning Journal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Sharing insights, experiences, and learnings from my journey in
            software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                  <div className="mb-4">
                    <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                      {post.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-secondary text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-secondary pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-primary group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

