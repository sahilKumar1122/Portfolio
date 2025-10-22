"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/data/social";
import { Send, CheckCircle2, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Add timeout to prevent hanging (25 seconds to account for API cold starts)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "✓ Message sent successfully! I'll get back to you soon.",
        });
        toast.success("Message sent successfully!");
        reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message: errorData.error || "Failed to send message. Please try again.",
        });
        toast.error("Failed to send message. Please try again.");
      }

    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'AbortError') {
        setSubmitStatus({
          type: "error",
          message: "Request timed out. The server might be starting up. Please try again in a moment or contact me via social links below.",
        });
        toast.error("Request timed out. Please try again.");
      } else {
        setSubmitStatus({
          type: "error",
          message: "Unable to send message. Please contact me via social links below.",
        });
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I&apos;m always open to discussing new opportunities!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-xl border border-border shadow-sm space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or say hello..."
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Success/Error Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg flex items-start gap-2 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle size={20} className="flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-mesh p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-secondary mb-6">
                I&apos;m currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, feel free to
                reach out through any of these platforms!
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/sahil-bazard/",
                    handle: "sahil-bazard",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    bgColor: "bg-[#0A66C2]/10",
                    hoverColor: "group-hover:bg-[#0A66C2]/20",
                  },
                  {
                    name: "GitHub",
                    url: "https://github.com/sahilKumar1122",
                    handle: "sahilKumar1122",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#181717">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    ),
                    bgColor: "bg-gray-100",
                    hoverColor: "group-hover:bg-gray-200",
                  },
                  {
                    name: "LeetCode",
                    url: "https://leetcode.com/u/SAHIL_BAZARD/",
                    handle: "SAHIL_BAZARD",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FFA116">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                      </svg>
                    ),
                    bgColor: "bg-[#FFA116]/10",
                    hoverColor: "group-hover:bg-[#FFA116]/20",
                  },
                  {
                    name: "GeeksforGeeks",
                    url: "https://www.geeksforgeeks.org/user/ksahilbazard/",
                    handle: "ksahilbazard",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#2F8D46"/>
                        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">GfG</text>
                      </svg>
                    ),
                    bgColor: "bg-[#2F8D46]/10",
                    hoverColor: "group-hover:bg-[#2F8D46]/20",
                  },
                  {
                    name: "Email",
                    url: "mailto:ksahilbazard@gmail.com",
                    handle: "ksahilbazard@gmail.com",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#EA4335">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                    ),
                    bgColor: "bg-[#EA4335]/10",
                    hoverColor: "group-hover:bg-[#EA4335]/20",
                  },
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
            whileHover={{ scale: 1.03, x: 8 }}
                  >
                    <div className={`${link.bgColor} ${link.hoverColor} p-3 rounded-full transition-colors`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {link.name}
                      </p>
                      <p className="text-sm text-secondary">
                        {link.handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Response Time
              </h4>
              <p className="text-sm text-secondary">
                I typically respond within 24-48 hours on weekdays. Looking
                forward to hearing from you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

