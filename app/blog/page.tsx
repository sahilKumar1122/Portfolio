import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog & Learning Journal
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Insights, experiences, and learnings from my journey in software
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                  <div className="mb-4">
                    <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                      {post.category}
                    </Badge>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-secondary text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-secondary pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

