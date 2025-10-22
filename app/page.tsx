import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotBubble from "@/components/ChatbotBubble";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Blog from "@/sections/Blog";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Resume />
      <Contact />
      <Footer />
      <ChatbotBubble />
    </main>
  );
}
