"use client";

import {
  ShieldCheck,
  Code2,
  Headphones,
  Rocket,
  Users,
  Award,
  LucideIcon,
} from "lucide-react";
import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COMPONENT_COLORS } from "@/styles";
import { COLORS } from "@/constants/colors";

interface TrustMetric {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const trustMetrics: TrustMetric[] = [
  {
    value: "48+",
    label: "Institutions Served",
    description: "Universities, colleges, and government bodies",
    icon: Users,
  },
  {
    value: "150+",
    label: "ERP Projects Completed",
    description: "Successful implementations",
    icon: Code2,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    description: "Repeat business and referrals",
    icon: Award,
  },
  {
    value: "24/7",
    label: "Support Available",
    description: "Dedicated technical assistance",
    icon: Headphones,
  },
];
export default function TrustSection() {
  return (
    <section className={`bg-white ${SECTION_SPACING.section.vertical}`}>
      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span
              className={`${TYPOGRAPHY.caption.md} font-medium`}
              style={{ color: "#4a91a9" }}
            >
              Trusted By
            </span>
          </div>

          <h2 className={`${TYPOGRAPHY.heading.xl} text-[#0F172A] mb-6`}>
            Leading Institutions Choose Datar Soft Tech
          </h2>

          <p
            className={`${TYPOGRAPHY.body.md} text-[#334155] max-w-3xl mx-auto`}
          >
            We&apos;ve successfully delivered technology solutions to
            educational institutions and enterprises across India, building
            long-term partnerships based on trust and proven results.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-7 h-7 text-[#0EA5E9]" />
                </div>
                <div
                  className={`${TYPOGRAPHY.heading.xl} font-bold mb-2 text-[#0EA5E9]`}
                >
                  {metric.value}
                </div>
                <div
                  className={`${TYPOGRAPHY.content.sm} font-semibold text-gray-900 mb-2`}
                >
                  {metric.label}
                </div>
                <div className={`${TYPOGRAPHY.caption.sm} text-gray-500`}>
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8 border-t border-gray-200">
          <h3 className={`${TYPOGRAPHY.heading.lg} text-gray-900 mb-4`}>
            Ready to Join Our Trusted Client Base?
          </h3>
          <p
            className={`${TYPOGRAPHY.body.md} text-gray-600 mb-8 max-w-2xl mx-auto`}
          >
            Let&apos;s discuss how our proven expertise can help you achieve
            your digital transformation goals with reliable, scalable software
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className={`
                inline-flex items-center justify-center gap-2
                px-8 py-4 rounded-xl font-semibold
                transition-all duration-300
                shadow-lg hover:shadow-xl
                transform hover:-translate-y-1
                bg-gradient-to-r from-blue-600 to-cyan-600 text-white
                hover:from-blue-700 hover:to-cyan-700
              `}
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className={`
                inline-flex items-center justify-center gap-2
                px-8 py-4 rounded-xl font-semibold
                transition-all duration-300
                border-2 border-gray-300 text-gray-700
                hover:border-gray-400 hover:bg-gray-50
              `}
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
