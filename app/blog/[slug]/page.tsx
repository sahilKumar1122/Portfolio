import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "building-scalable-angular-apps": {
    title: "Building Scalable Angular Applications",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Frontend",
    content: `
# Building Scalable Angular Applications

Angular is a powerful framework for building enterprise-scale applications. In this post, I'll share my learnings from working on large-scale Angular projects at Standard Chartered.

## Key Principles

### 1. Modular Architecture
Breaking your application into feature modules is crucial for maintainability. Each module should be:
- Self-contained
- Lazy-loaded when possible
- Follow single responsibility principle

### 2. State Management with NgRx
NgRx provides predictable state management:
- Centralized store for application state
- Actions for state modifications
- Selectors for efficient data retrieval
- Effects for handling side effects

At Standard Chartered, implementing NgRx helped us support 1000+ concurrent users while maintaining a clean codebase.

### 3. Performance Optimization
- Use OnPush change detection strategy
- Implement virtual scrolling for large lists
- Lazy load routes and modules
- Optimize bundle sizes with code splitting

### 4. Testing Strategy
Maintaining 90%+ test coverage requires:
- Unit tests with Jasmine & Karma
- Integration tests for critical flows
- E2E tests for user journeys
- Mock services for isolated testing

## Real-World Example

At work, I revamped our admin portal which enhanced UI responsiveness by 40%. Key techniques included:
- Optimizing change detection
- Implementing efficient state management
- Reducing API calls with smart caching
- Using async pipes for reactive data

## Conclusion

Building scalable Angular apps requires careful planning, consistent architecture, and continuous optimization. These practices have helped me deliver high-quality, maintainable applications.
    `,
  },
  "full-stack-journey": {
    title: "My Journey into Full-Stack Development",
    date: "2024-11-20",
    readTime: "6 min read",
    category: "Career",
    content: `
# My Journey into Full-Stack Development

Starting as a frontend specialist, I've been expanding my skills into full-stack development. Here's what I've learned along the way.

## The Frontend Foundation

My journey began with:
- React & Angular for building UIs
- TypeScript for type safety
- State management with Redux & NgRx
- Modern CSS with Tailwind

This solid foundation gave me the skills to build beautiful, responsive interfaces.

## Exploring the Backend

Moving to backend development opened new possibilities:

### Node.js & Express
- Building RESTful APIs
- Middleware patterns
- Authentication & authorization
- Error handling strategies

### Databases
- MongoDB for flexible schemas
- PostgreSQL for relational data
- Prisma ORM for type-safe queries
- Redis for caching

### Real-Time Features
Socket.IO enabled me to build:
- Real-time messaging (Discord Clone)
- Live order updates (NaanStop)
- Collaborative features

## Full-Stack Projects

### NaanStop Restaurant OS
A complete restaurant management system with:
- Next.js frontend
- NestJS backend
- Prisma + PostgreSQL
- Real-time Socket.IO updates
- Docker containerization

### Nameless Social Platform
MERN stack application featuring:
- Anonymous posting system
- JWT authentication
- TensorFlow.js for ML moderation
- 15+ REST APIs

## Key Learnings

1. **Think in Systems**: Understanding the entire stack helps make better architectural decisions
2. **API Design Matters**: Well-designed APIs make frontend development smoother
3. **Database Optimization**: Query optimization is crucial for performance
4. **DevOps Awareness**: Understanding deployment helps design better applications

## What's Next?

I'm currently exploring:
- Microservices architecture
- AWS cloud services
- Kubernetes for orchestration
- GraphQL for flexible APIs

The journey from frontend to full-stack has been incredibly rewarding, and I'm excited to continue learning!
    `,
  },
  "ai-chatbots-guide": {
    title: "AI-Powered Chatbots: A Developer's Guide",
    date: "2024-10-10",
    readTime: "10 min read",
    category: "AI/ML",
    content: `
# AI-Powered Chatbots: A Developer's Guide

Building an AI-powered chatbot that actually helps users requires more than just hooking up an LLM API. Here's what I learned building a chatbot for the Seller Portal at Standard Chartered.

## The Challenge

Support teams were overwhelmed with repetitive questions. We needed an intelligent assistant that could:
- Answer FAQs accurately
- Understand context
- Provide relevant responses
- Reduce support query load

## The Solution Stack

### 1. Vector Database (Qdrant)
Qdrant stores embedded documentation and FAQs:
- Semantic search capabilities
- Fast similarity matching
- Scalable for large datasets

### 2. LLM APIs
Using OpenAI/Azure OpenAI for:
- Natural language understanding
- Response generation
- Context awareness

### 3. RAG Pattern
Retrieval-Augmented Generation combines:
- Vector search for relevant context
- LLM for natural responses
- Domain-specific knowledge

## Implementation Steps

### Step 1: Data Preparation
\`\`\`typescript
// Embed your documentation
const embeddings = await openai.embeddings.create({
  model: "text-embedding-ada-002",
  input: documentChunks
});

// Store in vector database
await qdrant.upsert({
  collection: "docs",
  points: embeddings
});
\`\`\`

### Step 2: Query Processing
\`\`\`typescript
// Search for relevant context
const searchResults = await qdrant.search({
  collection: "docs",
  query: userQuery,
  limit: 5
});

// Generate response with context
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: \`Context: \${searchResults}\\n\\nQuestion: \${userQuery}\` }
  ]
});
\`\`\`

### Step 3: Response Optimization
- Stream responses for better UX
- Implement fallback to human support
- Track conversation context
- Monitor and improve accuracy

## Results

Our chatbot achieved:
- **35% reduction** in support queries
- **92% accuracy** on FAQ questions
- **<2 second** average response time
- High user satisfaction scores

## Best Practices

1. **Context Management**: Maintain conversation history for better responses
2. **Prompt Engineering**: Craft clear, specific system prompts
3. **Fallback Strategy**: Always provide option to reach human support
4. **Monitoring**: Track response quality and user satisfaction
5. **Continuous Improvement**: Use feedback to refine responses

## Challenges & Solutions

### Challenge: Hallucinations
**Solution**: Strict context-based responses, fact-checking layer

### Challenge: Cost Management
**Solution**: Efficient caching, smaller models for simple queries

### Challenge: Response Time
**Solution**: Streaming responses, optimized vector search

## Future Enhancements

- Multi-language support
- Voice interface
- Proactive assistance
- Integration with more data sources

## Conclusion

Building effective AI chatbots requires careful architecture, good data preparation, and continuous optimization. The results can significantly improve user experience and reduce support load.

If you're building similar systems, focus on:
- Quality context retrieval
- Careful prompt engineering
- User experience polish
- Continuous monitoring

Happy building! 🤖
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-secondary">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div
              className="bg-white p-8 rounded-lg border border-border"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# "))
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                    if (line.startsWith("## "))
                      return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`;
                    if (line.startsWith("### "))
                      return `<h3 class="text-xl font-semibold mt-4 mb-2">${line.slice(4)}</h3>`;
                    if (line.startsWith("- "))
                      return `<li class="ml-6">${line.slice(2)}</li>`;
                    if (line.startsWith("**") && line.endsWith("**"))
                      return `<p class="font-semibold mt-2">${line.slice(2, -2)}</p>`;
                    if (line.trim().startsWith("```"))
                      return `<pre class="bg-muted p-4 rounded-md overflow-x-auto my-4"><code>${line.slice(3)}</code>`;
                    if (line.trim() === "```") return `</pre>`;
                    if (line.trim()) return `<p class="mb-4">${line}</p>`;
                    return "";
                  })
                  .join(""),
              }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft size={16} className="mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

