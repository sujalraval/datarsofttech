import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Headphones,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function GIGWComplianceSection() {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "GIGW 3.0 Compliance",
      description:
        "Fully compliant with Guidelines for Indian Government Websites 3.0",
      detail: "MeitY Gov. of India Standards",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Advanced security protocols and encryption standards",
      detail: "VAPT & Penetration Testing",
    },
    {
      icon: Eye,
      title: "Accessibility",
      description: "WCAG 2.1 AA compliance for inclusive access",
      detail: "Universal Design Standards",
    },
    {
      icon: Server,
      title: "Uptime Guarantee",
      description: "99.9% guaranteed uptime for mission-critical operations",
      detail: "24/7 Active Monitoring",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support for government operations",
      detail: "Dedicated Public Sector Team",
    },
    {
      icon: TrendingUp,
      title: "Continuous Maintenance",
      description: "365 days maintenance and updates included",
      detail: "13+ Integrated Modules",
    },
  ];

  return (
    <section className="relative py-24 bg-white border-y border-slate-200 overflow-hidden">
      {/* Ambient Glow for visual depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
      >
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0494e2]/30 bg-[#b4d8f0] backdrop-blur-sm mb-6">
            <CheckCircle className="w-3.5 h-3.5 text-[#0494e2]" />
            <span
              className={`${TYPOGRAPHY.caption.sm} font-medium text-[#0494e2] tracking-wide uppercase`}
            >
              Certified & Secure
            </span>
          </div>

          <h2
            className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-6 leading-tight`}
          >
            GIGW 3.0 Compliant Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0494e2] to-cyan-600">
              Indian Institutions
            </span>
          </h2>

          <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
            Our solutions are architected to meet the rigorous standards of
            security, accessibility, and compliance required by Indian
            government and educational institutions.
          </p>
        </div>

        {/* Features Grid - Glassmorphism Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {complianceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 hover:border-[#0494e2]/30 rounded-2xl p-8 transition-all duration-300 hover:bg-[#b4d8f0]"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0494e2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#b4d8f0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#0494e2]" />
                  </div>

                  <h3
                    className={`${TYPOGRAPHY.heading.md} text-slate-900 mb-3 font-semibold`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-5 leading-relaxed`}
                  >
                    {feature.description}
                  </p>

                  {/* Detail Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span
                      className={`${TYPOGRAPHY.caption.sm} text-slate-700 font-medium uppercase tracking-wider`}
                    >
                      {feature.detail}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Dashboard Summary (Bottom Panel) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 relative overflow-hidden">
          {/* Decorative mesh overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 mb-4`}>
                Trusted by Government & Educational Institutions
              </h3>

              <p
                className={`${TYPOGRAPHY.body.md} text-slate-600 mb-8 leading-relaxed`}
              >
                Our commitment to security, compliance, and accessibility makes
                us the preferred technology partner for Indian government and
                educational institutions. We guarantee standards that exceed
                regulatory requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#0494e2] hover:bg-[#027abc] transition-all shadow-lg shadow-[#0494e2]/20"
                >
                  <Shield className="w-4 h-4" />
                  Get Compliance Audit
                </a>
              </div>
            </div>

            {/* Right: Badges Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "GIGW 3.0", label: "Compliance Certified" },
                { value: "WCAG AA", label: "Accessibility Ready" },
                { value: "VAPT", label: "Security Tested" },
                { value: "99.9%", label: "Uptime Guaranteed" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:bg-slate-100 transition-colors flex flex-col justify-center items-center text-center group"
                >
                  <div
                    className={`${TYPOGRAPHY.heading.xl} font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 mb-1`}
                  >
                    {badge.value}
                  </div>
                  <div
                    className={`${TYPOGRAPHY.caption.sm} text-slate-600 font-medium group-hover:text-slate-800 transition-colors`}
                  >
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
