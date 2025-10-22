"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllRepoData, GitHubRepoData } from "@/lib/github";

export default function Projects() {
  const [repoData, setRepoData] = useState<Map<string, GitHubRepoData>>(
    new Map()
  );

  useEffect(() => {
    const fetchRepoData = async () => {
      const repos = projects
        .filter((p) => p.repo)
        .map((p) => p.repo as string);
      const data = await getAllRepoData(repos);
      setRepoData(data);
    };

    fetchRepoData();
  }, []);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => {
            const data = project.repo ? repoData.get(project.repo) : null;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Featured Project Image */}
                    <div
                      className={`bg-gradient-to-br ${project.gradient} h-64 md:h-auto flex items-center justify-center relative overflow-hidden`}
                    >
                      {/* Animated mesh background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.6),transparent_50%)]" />
                      </div>
                      
                      {/* Large project initial */}
                      <motion.div
                        className="text-white text-8xl md:text-9xl font-bold drop-shadow-2xl z-10"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, 0]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut",
                        }}
                      >
                        {project.title.charAt(0)}
                      </motion.div>
                      
                      {/* Decorative floating elements */}
                      <motion.div 
                        className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"
                        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                      />
                      <motion.div 
                        className="absolute bottom-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl"
                        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                      />
                      
                      <Badge className="absolute top-4 right-4 bg-white text-foreground shadow-lg">
                        Featured
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-secondary mb-4 leading-relaxed">
                        {project.longDescription || project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {data && (
                        <div className="flex items-center gap-4 mb-4 text-sm text-secondary">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500" />
                            <span>{data.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork size={14} />
                            <span>{data.forks}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {data.language}
                          </Badge>
                        </div>
                      )}

                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <Button variant="default" size="sm" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} className="mr-2" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => {
              const data = project.repo ? repoData.get(project.repo) : null;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="bg-white rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Gradient Header with Icon */}
                  <div
                    className={`bg-gradient-to-br ${project.gradient} h-40 flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
                    </div>
                    
                    {/* Project initial */}
                    <motion.div
                      className="text-white text-6xl font-bold drop-shadow-lg z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.title.charAt(0)}
                    </motion.div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-2 left-2 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-secondary mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>

                    {data && (
                      <div className="flex items-center gap-3 mb-4 text-xs text-secondary">
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" />
                          <span>{data.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={12} />
                          <span>{data.forks}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} className="mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} className="mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </SectionWrapper>
  );
}

