"use client";

import {
  Cloud,
  Code2,
  Globe,
  ShieldCheck,
  Smartphone,
  Megaphone,
  ArrowRight,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

type ServicePreview = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  borderColor: string;
  bgGradient: string;
};

const servicePreviews: ServicePreview[] = [
  {
    id: "erp",
    title: "ERP Systems",
    description:
      "Custom institutional ERP solutions for universities and government bodies.",
    icon: Code2,
    href: "/services#erp",
    color: "text-[#0494e2]",
    borderColor: "group-hover:border-[#0494e2]/50",
    bgGradient: "group-hover:bg-[#0494e2]/5",
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Modern, responsive websites that engage users and drive conversions.",
    icon: Globe,
    href: "/services#website",
    color: "text-purple-400",
    borderColor: "group-hover:border-purple-500/50",
    bgGradient: "group-hover:bg-purple-500/5",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Native and cross-platform apps for iOS and Android.",
    icon: Smartphone,
    href: "/services#mobile",
    color: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/50",
    bgGradient: "group-hover:bg-emerald-500/5",
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Comprehensive security solutions and monitoring.",
    icon: ShieldCheck,
    href: "/services#security",
    color: "text-rose-400",
    borderColor: "group-hover:border-rose-500/50",
    bgGradient: "group-hover:bg-rose-500/5",
  },
];

export default function EnhancedServicesPreview() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b4d8f0]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-white mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0494e2]" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Our Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive <span className="text-[#0494e2]">IT Solutions</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We deliver end-to-end digital solutions that help institutions
            thrive in the modern technological landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {servicePreviews.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group block h-full"
              >
                <div
                  className={`relative h-full bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg ${service.borderColor} hover:-translate-y-2`}
                >
                  {/* Top Glow Effect on Hover */}
                  <div
                    className={`absolute inset-0 ${
                      service.color.split("-")[1]
                    }-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  >
                    {/* Removed gradient background */}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Footer: Arrow */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-[#0494e2] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
