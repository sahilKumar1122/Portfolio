"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useEffect, useState } from "react";
import { GitHubRepoData } from "@/lib/github";

export default function Projects() {
  const [repoData, setRepoData] = useState<Map<string, GitHubRepoData>>(
    new Map()
  );

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const repos = projects
          .filter((p) => p.repo)
          .map((p) => p.repo as string);
        
        if (repos.length === 0) return;
        
        const response = await fetch("/api/github", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ repos }),
        });

        if (response.ok) {
          const { data } = await response.json();
          const dataMap = new Map<string, GitHubRepoData>(
            Object.entries(data)
          );
          setRepoData(dataMap);
        }
      } catch (error) {
        console.log("GitHub stats unavailable:", error);
      }
    };

    fetchRepoData();
  }, []);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => {
          const data = project.repo ? repoData.get(project.repo) : null;
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mb-8 md:mb-12 group"
            >
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Project Image/Gradient */}
                  <div
                    className={`bg-gradient-to-br ${project.gradient} h-64 md:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="text-white text-7xl md:text-8xl lg:text-9xl font-bold drop-shadow-2xl z-10">
                      {project.title.charAt(0)}
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    
                    <Badge className="absolute top-4 right-4 bg-white text-foreground shadow-lg z-20">
                      Featured
                    </Badge>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-background to-muted/20">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-secondary mb-6 leading-relaxed">
                        {project.longDescription || project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {data && (
                      <div className="flex items-center gap-4 mb-4 text-sm text-secondary">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-500" />
                          <span>{data.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={16} />
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
              </motion.div>
            </motion.div>
          );
        })}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {otherProjects.map((project, index) => {
            const data = project.repo ? repoData.get(project.repo) : null;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${project.gradient} h-32 relative overflow-hidden flex items-center justify-center`}>
                    <div className="text-white text-6xl font-bold z-10 drop-shadow-lg">
                      {project.title.charAt(0)}
                    </div>
                    
                    <div className="absolute top-2 right-2 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-2 left-2 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
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
                        <Badge variant="outline" className="text-xs">
                          {data.language}
                        </Badge>
                      </div>
                    )}

                    <div className="flex gap-2 mt-auto">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="default" size="sm" className="flex-1" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} />
                          </a>
                        </Button>
                      )}
                    </div>
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
