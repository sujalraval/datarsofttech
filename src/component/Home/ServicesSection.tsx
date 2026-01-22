"use client";

import { useState } from "react";
import {
  Cloud,
  Code2,
  Globe,
  ShieldCheck,
  Smartphone,
  Megaphone,
  LucideIcon,
} from "lucide-react";

/* ---------- TYPES ---------- */
type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

/* ---------- DATA ---------- */
const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence.",
    points: ["SEO & SEM", "Social Media Marketing", "Content Strategy"],
    icon: Megaphone,
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    points: ["iOS Development", "Android Development", "Cross-platform Apps"],
    icon: Smartphone,
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses.",
    points: ["Cloud Migration", "Infrastructure Setup", "DevOps Services"],
    icon: Cloud,
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom software solutions built with modern technologies and best practices.",
    points: [
      "Custom Web Applications",
      "Enterprise Software",
      "API Development",
    ],
    icon: Code2,
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Responsive and modern websites that engage users and drive conversions.",
    points: ["Responsive Design", "E-commerce Solutions", "CMS Development"],
    icon: Globe,
  },
  {
    id: "security",
    title: "Cyber Security",
    description:
      "Protect your business with comprehensive cybersecurity solutions and monitoring.",
    points: ["Security Audits", "Data Protection", "24/7 Monitoring"],
    icon: ShieldCheck,
  },
];

/* ---------- COMPONENT ---------- */
export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const ActiveIcon = activeService.icon;

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-indigo-600">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Smart IT Solutions for Growing Businesses
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We deliver end-to-end digital solutions that help businesses scale,
            secure, and succeed.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* LEFT: Service Selector */}
          <div className="space-y-3">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full flex items-center gap-4 rounded-xl px-5 py-4 text-left transition
                    ${
                      isActive
                        ? "bg-white shadow-lg border border-indigo-100"
                        : "hover:bg-white/70"
                    }
                  `}
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center
                      ${
                        isActive
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-100 text-indigo-600"
                      }
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  <span className="font-semibold text-slate-800">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Service Preview */}
          <div className="md:col-span-2 bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                <ActiveIcon size={32} />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  {activeService.title}
                </h3>
                <p className="text-slate-600 mt-3 max-w-xl">
                  {activeService.description}
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {activeService.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
