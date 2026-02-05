"use client";

import { useState } from "react";
import {
  Code2,
  Globe,
  ShieldCheck,
  Smartphone,
  Megaphone,
  Cloud,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  gradient: string;
};

const serviceCards: ServiceCard[] = [
  {
    id: "erp",
    title: "ERP Systems",
    description:
      "Custom institutional ERP solutions for universities and government bodies with comprehensive management capabilities",
    icon: Code2,
    href: "/services#erp",
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Modern, responsive websites that engage users and drive conversions with exceptional user experience",
    icon: Globe,
    href: "/services#website",
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Native and cross-platform apps for iOS and Android that extend your institutional reach",
    icon: Smartphone,
    href: "/services#mobile",
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "security",
    title: "Cyber Security",
    description:
      "Comprehensive security solutions and monitoring to protect your institutional data and infrastructure",
    icon: ShieldCheck,
    href: "/services#security",
    color: "text-rose-600",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to enhance your institutional online presence and engagement",
    icon: Megaphone,
    href: "/services#marketing",
    color: "text-amber-600",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern institutional requirements",
    icon: Cloud,
    href: "/services#cloud",
    color: "text-violet-600",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === serviceCards.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? serviceCards.length - 1 : prev - 1
    );
  };

  // Get visible cards (current + 2 neighbors)
  const getVisibleCards = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + serviceCards.length) % serviceCards.length;
      visible.push({ ...serviceCards[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-semibold text-blue-600 tracking-wider">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive IT Solutions
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end digital solutions designed to help your institution
            thrive in the modern technological landscape.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>

          {/* Cards Container */}
          <div className="flex justify-center items-center min-h-[500px]">
            {getVisibleCards().map((service, index) => {
              const Icon = service.icon;
              const isCenter = service.position === 0;
              const isSide = Math.abs(service.position) === 1;

              return (
                <div
                  key={`${service.id}-${currentIndex}`}
                  className={`
                    absolute transition-all duration-500 ease-in-out
                    ${
                      isCenter
                        ? "z-20 scale-100 opacity-100"
                        : "z-10 scale-90 opacity-70"
                    }
                    ${service.position === -1 ? "translate-x-[-200px]" : ""}
                    ${service.position === 1 ? "translate-x-[200px]" : ""}
                  `}
                >
                  <Link href={service.href} className="block">
                    <div
                      className={`
                      w-80 rounded-2xl p-8 shadow-lg border transition-all duration-300
                      ${
                        isCenter
                          ? "bg-white border-slate-200 hover:shadow-2xl"
                          : "bg-white/80 border-slate-100 hover:shadow-xl"
                      }
                    `}
                    >
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 mx-auto`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 mb-6 text-center leading-relaxed">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="text-center">
                        <span
                          className={`inline-flex items-center gap-2 font-semibold ${service.color} hover:gap-3 transition-all`}
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {serviceCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-all
                  ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
          >
            View All Our Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
