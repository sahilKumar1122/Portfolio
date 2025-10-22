export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  gradient: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "NaanStop",
    description:
      "Full-stack restaurant management system with real-time ordering, QR-based table service, and admin dashboard",
    longDescription:
      "Monorepo for NaanStop Restaurant OS — Next.js web app + NestJS API with Prisma and Socket.IO real-time, backed by Postgres/Redis (Docker). Features: menu browsing, dine-in/takeaway ordering, QR table service, admin dashboard with real-time updates.",
    techStack: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Docker",
      "TypeScript",
    ],
    githubUrl: "https://github.com/sahilKumar1122/NaanStop",
    featured: true,
    gradient: "from-orange-400 to-red-500",
    repo: "sahilKumar1122/NaanStop",
  },
  {
    title: "Frontend Prep Lab",
    description:
      "Comprehensive frontend interview preparation platform with coding challenges and solutions",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/sahilKumar1122/Frontend-Prep-Lab",
    gradient: "from-blue-400 to-cyan-500",
    repo: "sahilKumar1122/Frontend-Prep-Lab",
  },
  {
    title: "PR-Pilot",
    description:
      "AI-powered pull request reviewer that analyzes code, flags risks, suggests tests, and generates commit messages",
    techStack: ["Python", "OpenAI API", "GitHub API", "FastAPI"],
    githubUrl: "https://github.com/sahilKumar1122/PR-Pilot",
    gradient: "from-purple-400 to-pink-500",
    repo: "sahilKumar1122/PR-Pilot",
  },
  {
    title: "Nameless",
    description:
      "Anonymous social platform for college students with ML-powered content moderation and sentiment analysis",
    longDescription:
      "MERN-based social platform enabling college students to post anonymously with topic tagging, sentiment analysis, and ML moderation using TensorFlowJS. Features JWT authentication, Nodemailer email verification (92% success), and 15+ REST APIs.",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "TensorFlow.js",
      "JWT",
    ],
    githubUrl:
      "https://github.com/sahilKumar1122/nameless-anonymous-social-platform",
    gradient: "from-green-400 to-teal-500",
    repo: "sahilKumar1122/nameless-anonymous-social-platform",
  },
  {
    title: "Codeforces Companion",
    description:
      "VS Code extension to load, view, and solve Codeforces problems directly in your editor",
    techStack: ["TypeScript", "VS Code API", "Codeforces API", "Node.js"],
    githubUrl: "https://github.com/sahilKumar1122/Codeforces-Companion",
    gradient: "from-yellow-400 to-orange-500",
    repo: "sahilKumar1122/Codeforces-Companion",
  },
  {
    title: "Discord Clone",
    description:
      "Real-time messaging platform with file uploads, channel-based chat, and full light/dark theme support",
    longDescription:
      "Built a real-time messaging platform for 200+ test users with file uploads, message editing, channel-based chat, and fully responsive UI. Orchestrated reliable backend using Prisma ORM, Planetscale MySQL, and Clerk authentication, achieving 99.9% uptime.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Socket.IO",
      "Tailwind CSS",
      "Clerk",
    ],
    githubUrl: "https://github.com/sahilKumar1122/DISCORD-CLONE",
    gradient: "from-indigo-400 to-blue-500",
    repo: "sahilKumar1122/DISCORD-CLONE",
  },
];

