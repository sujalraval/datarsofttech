"use client";

import { ShieldCheck, Lock, Activity, Eye } from "lucide-react";

const complianceSteps = [
  {
    title: "Accessibility Compliance",
    desc: "WCAG 2.1 AA standards ensuring inclusive access for all users.",
    icon: Eye,
  },
  {
    title: "Security & Data Protection",
    desc: "Enterprise-grade security controls aligned with government norms.",
    icon: Lock,
  },
  {
    title: "VAPT Testing",
    desc: "Regular vulnerability assessment and penetration testing.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Monitoring",
    desc: "Ongoing audits, logs, and threat monitoring.",
    icon: Activity,
  },
];

export default function ComplianceSecuritySection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            GIGW 3.0 Compliance & Security
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Built specifically for Indian government institutions and
            universities with strict compliance, accessibility, and security
            requirements.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-indigo-200 pl-10 space-y-16 mb-28">
          {complianceSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <span className="absolute -left-[38px] top-1 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <Icon size={20} />
                </span>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600 max-w-xl">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-20">
          {[
            { value: "24/7", label: "Technical Support" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "365", label: "Days Maintenance" },
            { value: "13+", label: "Integrated Modules" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl py-10 shadow-sm hover:shadow-md transition"
            >
              <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Speak to a Security Expert →
          </button>
        </div>
      </div>
    </section>
  );
}
