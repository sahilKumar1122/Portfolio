import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary text-center md:text-left">
            © 2025 Sahil Kumar. Built with Next.js + Tailwind + Framer Motion
            ❤️
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

