import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";
import {
  Target,
  Shield,
  Users,
  Clock,
  Zap,
  Headphones,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const differentiators = [
    {
      icon: Target,
      title: "Institutional Expertise",
      description:
        "Deep understanding of university and government requirements with knowledge of compliance standards.",
      highlight: "10+ years focused exclusively",
      featured: true, // This will make the card look different
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description:
        "Solutions built with regulatory requirements at their core, ensuring your institution meets guidelines.",
      highlight: "GDPR, FERPA compliant",
      featured: false,
    },
    {
      icon: Users,
      title: "Institution-Centric",
      description:
        "We understand the unique challenges faced by educational institutions, integrating seamlessly with workflows.",
      highlight: "Built for institutional workflows",
      featured: false,
    },
    {
      icon: Clock,
      title: "Proven Delivery",
      description:
        "Track record of successful ERP implementations with transparent project management and clear milestones.",
      highlight: "95% on-time delivery",
      featured: false,
    },
    {
      icon: Zap,
      title: "Scalable Systems",
      description:
        "ERP solutions designed to grow with your institution, handling increased users and evolving requirements.",
      highlight: "Built for future growth",
      featured: false,
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Dedicated support team familiar with institutional requirements, providing comprehensive maintenance.",
      highlight: "24/7 support available",
      featured: true,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-32 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>

      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
      >
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#b4d8f0] border border-[#0494e2]/20 text-[#0494e2] text-xs font-bold tracking-widest uppercase mb-6">
            Why DatarSoft
          </span>
          <h2
            className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}
          >
            Why Institutions <span className="text-[#0494e2]">Choose Us</span>
          </h2>
          <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
            We don&apos;t just build software - we build institutional ERP
            systems that streamline operations. Our focused approach and proven
            expertise make us the ideal partner for your digital transformation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                  item.featured
                    ? "bg-gradient-to-br from-[#0494e2] to-[#027abc] text-white border border-[#0494e2]/30 shadow-lg"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0494e2]/30"
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    item.featured
                      ? "bg-white/20 text-white"
                      : "bg-gradient-to-br from-[#b4d8f0] to-cyan-50 text-[#0494e2]"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Text Content */}
                <h3
                  className={`${TYPOGRAPHY.heading.md} font-bold mb-3 ${
                    item.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`${TYPOGRAPHY.body.sm} mb-6 ${
                    item.featured ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>

                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border ${
                    item.featured
                      ? "bg-white/20 text-white border-white/30"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.featured ? "bg-[#0494e2]" : "bg-[#0494e2]"
                    }`}
                  ></div>
                  {item.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
