export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React" },
      { name: "Angular" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "NgRx" },
      { name: "Redux" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Responsive Design" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Socket.IO" },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Vercel" },
      { name: "CI/CD" },
      { name: "Redis" },
    ],
  },
  {
    name: "AI & Emerging Tech",
    skills: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "LangChain" },
      { name: "Vector Databases" },
      { name: "LLM APIs" },
      { name: "OpenAI" },
      { name: "Machine Learning" },
    ],
  },
];

