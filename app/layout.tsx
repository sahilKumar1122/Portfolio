import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sahil Kumar | Frontend Developer Portfolio",
  description:
    "Frontend-focused Software Engineer specializing in React, Angular, Next.js, and TypeScript. Building beautiful, scalable web applications with modern technologies.",
  keywords: [
    "Frontend Developer",
    "Software Engineer",
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "Web Development",
    "UI/UX",
    "Full Stack",
    "Sahil Kumar",
  ],
  authors: [{ name: "Sahil Kumar", url: "https://github.com/sahilKumar1122" }],
  openGraph: {
    title: "Sahil Kumar | Frontend Developer Portfolio",
    description:
      "Frontend-focused Software Engineer passionate about building beautiful interfaces and exploring intelligent systems.",
    url: "https://sahilkumar1122.github.io/portfolioWebsite/",
    siteName: "Sahil Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Kumar | Frontend Developer",
    description:
      "Frontend-focused Software Engineer specializing in React, Angular, and Next.js",
    creator: "@BazardSahil",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster position="top-right" />
        <Script id="console-easter-egg" strategy="afterInteractive">
          {`
            console.log(
              "%c👋 Hey fellow developer! You're exploring Sahil's portfolio — built with ❤️ and a sprinkle of AI.",
              "font-size: 14px; color: #2563EB; font-weight: bold;"
            );
          `}
        </Script>
      </body>
    </html>
  );
}
