"use client";

import {
  Code2,
  Globe,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

type InstitutionalService = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
};

const institutionalServices: InstitutionalService[] = [
  {
    id: "erp",
    title: "Institutional ERP Systems",
    description:
      "Comprehensive ERP solutions designed specifically for universities, colleges, and government institutions",
    icon: Code2,
    href: "/services#erp",
    features: [
      "Student Information Management",
      "Academic Administration",
      "Financial Management",
      "Research Management",
    ],
  },
  {
    id: "digital",
    title: "Digital Infrastructure",
    description:
      "Modern websites and applications that serve your institutional community effectively",
    icon: Globe,
    href: "/services#digital",
    features: [
      "Responsive Website Development",
      "Mobile Applications",
      "Portal Solutions",
      "Digital Transformation",
    ],
  },
  {
    id: "security",
    title: "Compliance & Security",
    description:
      "Government-grade security and compliance solutions for institutional requirements",
    icon: ShieldCheck,
    href: "/services#security",
    features: [
      "GIGW 3.0 Compliance",
      "WCAG 2.1 Accessibility",
      "Data Protection",
      "Security Audits",
    ],
  },
];

export default function InstitutionalServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#0494e2]"></div>
            <span className="text-sm font-semibold text-[#0494e2] tracking-wider">
              INSTITUTIONAL SOLUTIONS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technology Built for Public Institutions
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized IT solutions designed to meet the unique requirements of
            educational institutions and government bodies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {institutionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#0494e2] flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0494e2] flex-shrink-0"></div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#0494e2] font-semibold hover:gap-3 transition-all"
                >
                  Explore {service.title.split(" ")[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-slate-50 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "48+", label: "Institutions Served" },
              { value: "150+", label: "Projects Completed" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-[#0494e2] mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
