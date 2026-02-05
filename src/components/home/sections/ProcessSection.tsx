"use client";

import { useState } from "react";
import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";
import {
  MessageCircle,
  FileText,
  Code,
  TestTube,
  Rocket,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

export default function ProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: "Requirements Analysis",
      description:
        "We start by understanding your institutional requirements, compliance needs, and integration points. This phase includes detailed requirement gathering and technical feasibility assessment for your ERP system.",
      timeline: "1-2 weeks",
      deliverables: [
        "Project scope document",
        "Technical architecture",
        "Timeline & budget",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "System Design",
      description:
        "Our team creates detailed system architecture, user interface designs, and technical specifications. We ensure the ERP solution aligns with your institutional processes and regulatory standards.",
      timeline: "2-3 weeks",
      deliverables: [
        "System architecture",
        "UI/UX designs",
        "Technical specifications",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Experienced developers build your ERP solution following best practices and institutional standards. We maintain regular communication and provide progress updates throughout development.",
      timeline: "4-12 weeks",
      deliverables: ["Working software", "Documentation", "Source code"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: TestTube,
      title: "Testing & Validation",
      description:
        "Rigorous testing ensures your ERP system meets all institutional requirements and quality standards. We conduct functional, performance, and compliance testing before deployment.",
      timeline: "2-3 weeks",
      deliverables: ["Test reports", "Bug fixes", "Performance metrics"],
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Rocket,
      title: "Deployment & Training",
      description:
        "We handle deployment to your institutional environment and provide comprehensive training for your staff. Our support team ensures smooth transition and ongoing maintenance.",
      timeline: "1-2 weeks",
      deliverables: [
        "Deployed solution",
        "User training",
        "Support documentation",
      ],
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0494e2]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#0494e2] font-bold tracking-widest text-xs uppercase mb-4 block">
            Development Lifecycle
          </span>
          <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold`}>
            How we build your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0494e2] to-cyan-500">
              Future
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Main Glass Card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden min-h-[550px]">
            {/* Slide Container */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row h-full relative"
                >
                  {/* Left: Visual Side */}
                  <div className="w-full md:w-2/5 bg-slate-900 relative flex flex-col justify-between p-10 overflow-hidden">
                    {/* Abstract Shapes */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`}
                    ></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-300 font-mono text-sm">
                        <span className="text-[#0494e2]">
                          STEP 0{index + 1}
                        </span>
                        <span className="text-[#0494e2]">•</span>
                        <span className="text-[#0494e2]">{step.timeline}</span>
                      </div>
                    </div>

                    {/* Big Ghost Number */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-white/5 pointer-events-none select-none">
                      0{index + 1}
                    </div>

                    <div className="relative z-10 mt-auto">
                      <p className="text-slate-300 text-sm max-w-xs">
                        Following industry standards to ensure robust, scalable
                        architecture.
                      </p>
                    </div>
                  </div>

                  {/* Right: Content Side */}
                  <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-white/50">
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                        Process Overview
                      </h4>
                      <p
                        className={`${TYPOGRAPHY.body.lg} text-slate-600 leading-relaxed`}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                        Key Deliverables
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {step.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b4d8f0] flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-[#0494e2]" />
                            </div>
                            <span className="text-sm font-medium text-slate-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Navigation Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-between px-8 md:px-16">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="group flex items-center gap-3 text-slate-400 hover:text-[#0494e2] transition-colors disabled:opacity-30"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0494e2]/20 group-hover:bg-[#b4d8f0] transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="hidden md:block text-sm font-medium">
                  Previous
                </span>
              </button>

              {/* Progress Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-1 bg-slate-100 w-1/3 hidden sm:block overflow-hidden rounded-full">
                <div
                  className="h-full bg-[#0494e2] transition-all duration-500"
                  style={{
                    width: `${((currentIndex + 1) / steps.length) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="group flex items-center gap-3 text-slate-900 hover:text-[#0494e2] transition-colors"
              >
                <span className="hidden md:block text-sm font-medium">
                  Next Step
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-[#0494e2] transition-all shadow-lg shadow-[#0494e2]/20">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Swipe Hint (Visible only on small screens) */}
          <div className="mt-6 text-center md:hidden">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">
              Swipe to navigate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
