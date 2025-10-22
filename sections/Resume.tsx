"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />

          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and
            achievements in detail.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-12 rounded-xl border border-border shadow-sm"
          >
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Sahil Kumar
              </h3>
              <p className="text-secondary">
                Software Engineer Frontend | B.Tech CSE @ DTU
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Education</p>
                <p className="text-secondary">
                  Delhi Technological University
                </p>
                <p className="text-secondary">CGPA: 8.78</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Experience</p>
                <p className="text-secondary">Standard Chartered</p>
                <p className="text-secondary">Feb 2024 - Present</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline">
                    <ExternalLink size={20} className="mr-2" />
                    Preview Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>Resume Preview</DialogTitle>
                    <DialogDescription>
                      View my resume or download it for offline access
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="bg-muted/30 p-8 rounded-lg">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            Sahil Kumar
                          </h3>
                          <p className="text-secondary">
                            New Delhi, Delhi | +91-7665751858 |
                            ksahilbazard@gmail.com
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Education
                          </h4>
                          <p className="text-sm">
                            <strong>
                              Delhi Technological University
                            </strong>{" "}
                            - B.Tech in Computer Science and Engineering
                          </p>
                          <p className="text-sm text-secondary">
                            Dec 2020 – May 2024 | CGPA: 8.78
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Experience
                          </h4>
                          <p className="text-sm">
                            <strong>
                              Software Engineer Frontend (Intern to Full-Time)
                            </strong>
                          </p>
                          <p className="text-sm text-secondary mb-2">
                            Standard Chartered Research Technology | Feb 2024 -
                            Present
                          </p>
                          <ul className="text-sm text-secondary space-y-1 list-disc list-inside">
                            <li>
                              Enhanced UI responsiveness by 40% using Angular
                            </li>
                            <li>Reduced API latency by 25%</li>
                            <li>
                              Achieved 90%+ test coverage with Jasmine & Karma
                            </li>
                            <li>
                              Built AI-powered Chatbot reducing support queries
                              by 35%
                            </li>
                          </ul>
                        </div>

                        <div className="text-center pt-4">
                          <Button asChild>
                            <a href="/resume.pdf" download>
                              <Download size={16} className="mr-2" />
                              Download Full Resume
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

