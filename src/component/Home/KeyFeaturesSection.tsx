"use client";

import {
  ShieldCheck,
  Database,
  Smartphone,
  Users,
  Accessibility,
  RefreshCcw,
  Gauge,
  Headphones,
  LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const secondaryFeatures: Feature[] = [
  {
    title: "Scalable Architecture",
    description:
      ".NET Core MVC architecture with MS SQL for growing institutional needs.",
    icon: Database,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first experience across all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Granular permissions for admins, faculty, staff, and students.",
    icon: Users,
  },
  {
    title: "Accessibility Standards",
    description:
      "WCAG 2.1 AA compliance ensuring inclusive access for all users.",
    icon: Accessibility,
  },
  {
    title: "Real-Time Integration",
    description: "Seamless API integration with Smart ERP for live data sync.",
    icon: RefreshCcw,
  },
  {
    title: "Performance Optimization",
    description: "Fast loading, SEO optimization, and superior performance.",
    icon: Gauge,
  },
  {
    title: "24/7 Support",
    description: "Dedicated technical assistance and regular system updates.",
    icon: Headphones,
  },
];

export default function KeyFeaturesSection() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Key Features & Benefits
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Advanced features designed specifically for higher education
            institutions.
          </p>
        </div>

        {/* PRIMARY FEATURE */}
        <div className="relative bg-white rounded-3xl p-12 shadow-xl mb-24 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
              <ShieldCheck size={32} />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                GIGW 3.0 Compliance
              </h3>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Full adherence to Guidelines for Indian Government Websites and
                Apps (GIGW) by the Ministry of Electronics & Information
                Technology, Government of India.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "WCAG 2.1 AA Accessibility Compliance",
                  "Government Security Standards",
                  "Regular Audits & Monitoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        {/* SECONDARY FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {secondaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <Icon size={22} />
                </div>

                <h4 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h4>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
