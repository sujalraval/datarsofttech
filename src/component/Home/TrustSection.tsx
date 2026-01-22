"use client";

import {
  ShieldCheck,
  Code2,
  Headphones,
  Rocket,
  LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Security & Compliance",
    description:
      "Robust security practices and compliance-ready solutions to protect your data.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Development",
    description:
      "Tailored software built to match your processes — not the other way around.",
    icon: Code2,
  },
  {
    title: "Dedicated Support",
    description:
      "Responsive support and maintenance so your systems stay online and healthy.",
    icon: Headphones,
  },
  {
    title: "Proven Delivery",
    description:
      "Timely delivery with transparent processes and measurable outcomes.",
    icon: Rocket,
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Trusted Partner For Education & Enterprise Technology
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Advanced features designed specifically for higher education
            institutions and enterprise-scale organizations.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Get a Quote
            </button>
            <button className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white transition">
              Talk to an Expert
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT FEATURES */}
          <div className="space-y-10">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10 md:mt-24">
            {features.slice(2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative Gradient */}
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <div className="w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
