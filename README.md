# 🚀 Sahil Kumar - Portfolio Website

A premium, modern, and visually stunning personal portfolio website showcasing my work as a **Frontend-Focused Software Developer** with expertise in React, Angular, Next.js, and explorations into Full-Stack Development, Cloud (AWS/Docker), and AI Systems.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff0055?style=for-the-badge&logo=framer)

## ✨ Features

- **🎨 Premium Light Theme**: Clean, minimal design with subtle gradients and modern aesthetics
- **✨ Smooth Animations**: Powered by Framer Motion for delightful micro-interactions
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **🚀 GitHub Integration**: Live repository data (stars, forks) fetched via GitHub API
- **📧 Contact Form**: Functional email integration with Resend API
- **📝 Blog Section**: MDX-based blog with sample posts
- **🤖 AI Chatbot Bubble**: Interactive floating assistant (decorative)
- **⚡ Optimized Performance**: Fast loading, lazy-loaded components, and SEO-ready
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

### Backend & APIs
- **Email Service**: Resend
- **GitHub API**: Octokit for repository data
- **API Routes**: Next.js API routes

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm installed
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/sahilKumar1122/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

   Edit \`.env.local\` and add your API keys:
   \`\`\`env
   RESEND_API_KEY=your_resend_api_key
   GITHUB_TOKEN=your_github_personal_access_token
   \`\`\`

   **Getting API Keys:**
   - **Resend**: Sign up at [resend.com](https://resend.com) and get your API key
   - **GitHub Token**: Create a personal access token at [github.com/settings/tokens](https://github.com/settings/tokens) (only needs \`public_repo\` scope)

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form endpoint
│   ├── blog/                # Blog pages
│   │   ├── [slug]/          # Individual blog post
│   │   └── page.tsx         # Blog list page
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── ui/                  # shadcn/ui components
│   ├── ChatbotBubble.tsx    # Floating AI assistant
│   ├── Footer.tsx           # Footer component
│   ├── Navbar.tsx           # Navigation bar
│   └── SectionWrapper.tsx   # Section container with animations
├── sections/                # Page sections
│   ├── About.tsx            # About section
│   ├── Blog.tsx             # Blog preview section
│   ├── Contact.tsx          # Contact form section
│   ├── Experience.tsx       # Work experience timeline
│   ├── Hero.tsx             # Hero/landing section
│   ├── Projects.tsx         # Projects showcase
│   ├── Resume.tsx           # Resume section
│   └── Skills.tsx           # Skills & technologies
├── data/                    # Static data files
│   ├── experience.ts        # Work experience data
│   ├── projects.ts          # Projects data
│   ├── skills.ts            # Skills categories
│   └── social.ts            # Social links
├── lib/                     # Utility functions
│   ├── github.ts            # GitHub API helper
│   └── utils.ts             # General utilities
├── public/                  # Static assets
│   ├── images/              # Image files
│   └── resume.pdf           # Resume PDF (add yours!)
└── content/                 # Blog content (MDX)
    └── blog/                # Blog post files
\`\`\`

## 🎨 Customization Guide

### 1. Personal Information

**Update social links** in \`data/social.ts\`:
\`\`\`typescript
export const socialLinks = [
  { name: "GitHub", url: "your-github-url", icon: Github },
  { name: "LinkedIn", url: "your-linkedin-url", icon: Linkedin },
  // ...
];
\`\`\`

**Update experience** in \`data/experience.ts\`:
\`\`\`typescript
export const experiences = [
  {
    company: "Your Company",
    role: "Your Role",
    duration: "Start - End",
    // ...
  },
];
\`\`\`

**Update projects** in \`data/projects.ts\`:
\`\`\`typescript
export const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description",
    techStack: ["React", "Node.js"],
    githubUrl: "github-url",
    repo: "username/repo-name", // For GitHub API
    // ...
  },
];
\`\`\`

**Update skills** in \`data/skills.ts\`:
\`\`\`typescript
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React" },
      // Add your skills...
    ],
  },
];
\`\`\`

### 2. Resume PDF

Place your resume PDF in the \`public/\` directory as \`resume.pdf\`, or update the path in \`sections/Resume.tsx\`.

### 3. Blog Posts

Add new blog posts in \`app/blog/[slug]/page.tsx\` by adding entries to the \`blogPosts\` object.

### 4. Color Scheme

Modify colors in \`tailwind.config.ts\` and \`app/globals.css\` to match your preferred palette.

### 5. SEO & Metadata

Update \`app/layout.tsx\` with your information:
\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  // ...
};
\`\`\`

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use their test domain for development)
3. Get your API key
4. Add to \`.env.local\`:
   \`\`\`
   RESEND_API_KEY=re_your_key_here
   \`\`\`
5. Update the "from" email in \`app/api/contact/route.ts\`:
   \`\`\`typescript
   from: "Portfolio Contact <noreply@yourdomain.com>"
   \`\`\`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - \`RESEND_API_KEY\`
   - \`GITHUB_TOKEN\`
5. Deploy!

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🔧 Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ across all metrics
- 🚀 **Fast Load Times**: Optimized with Next.js Image, lazy loading
- 📱 **Mobile-First**: Responsive design tested on all devices
- ♿ **Accessible**: WCAG 2.1 compliant

## 🐛 Troubleshooting

### GitHub API Rate Limiting
If you hit GitHub's rate limit:
- Add a \`GITHUB_TOKEN\` to \`.env.local\`
- This increases your limit from 60 to 5,000 requests/hour

### Email Not Sending
- Verify your Resend API key is correct
- Check that the "from" email domain is verified
- Review Resend dashboard for error logs

### Build Errors
- Clear \`.next\` folder: \`rm -rf .next\`
- Delete \`node_modules\` and reinstall: \`rm -rf node_modules && npm install\`
- Check for TypeScript errors: \`npm run build\`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

## 📫 Contact

**Sahil Kumar**
- Portfolio: [sahilkumar1122.github.io/portfolioWebsite/](https://sahilkumar1122.github.io/portfolioWebsite/)
- Email: ksahilbazard@gmail.com
- GitHub: [@sahilKumar1122](https://github.com/sahilKumar1122)
- LinkedIn: [sahil-bazard](https://www.linkedin.com/in/sahil-bazard/)

---

⭐ If you found this helpful, consider giving it a star!

Built with ❤️ and a sprinkle of AI by Sahil Kumar
