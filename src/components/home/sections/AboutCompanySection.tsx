import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";
import { Building2, Users, Award, Calendar } from "lucide-react";

export default function AboutCompanySection() {
  const stats = [
    {
      icon: Calendar,
      value: "10+",
      label: "Years Experience",
      description: "Building institutional software",
    },
    {
      icon: Building2,
      value: "150+",
      label: "ERP Projects Delivered",
      description: "For universities and government",
    },
    {
      icon: Users,
      value: "48+",
      label: "Institutions Served",
      description: "Universities and government bodies",
    },
    {
      icon: Award,
      value: "99%",
      label: "Client Satisfaction",
      description: "Repeat partnerships",
    },
  ];

  return (
    <section className={`bg-slate-50 ${SECTION_SPACING.section.vertical}`}>
      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0494e2]"></div>
              <span
                className={`${TYPOGRAPHY.caption.md} font-medium`}
                style={{ color: "#0494e2" }}
              >
                Our Story
              </span>
            </div>

            <h2 className={`${TYPOGRAPHY.heading.xl} text-[#0F172A] mb-6`}>
              Trusted Technology Partner for Institutions
            </h2>

            <p className={`${TYPOGRAPHY.body.lg} text-[#334155] mb-8`}>
              Since our founding, we&apos;ve focused exclusively on delivering
              ERP and digital platform solutions for universities, colleges, and
              government institutions. Our deep understanding of institutional
              requirements has made us the preferred technology partner for
              organizations seeking reliable, scalable software solutions.
            </p>

            <p className={`${TYPOGRAPHY.body.md} text-[#334155] mb-10`}>
              We understand the unique challenges faced by universities,
              colleges, and government bodies. Our solutions are built with
              compliance standards, regulatory requirements, and institutional
              workflows at their core, ensuring seamless integration with
              existing systems.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#0494e2] flex-shrink-0"></div>
                <div>
                  <h3
                    className={`${TYPOGRAPHY.content.md} font-semibold text-gray-900 mb-1`}
                  >
                    Institutional Expertise
                  </h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-gray-600`}>
                    Deep knowledge of university and government systems
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#0494e2] flex-shrink-0"></div>
                <div>
                  <h3
                    className={`${TYPOGRAPHY.content.md} font-semibold text-gray-900 mb-1`}
                  >
                    Compliance Ready
                  </h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-gray-600`}>
                    Built to meet regulatory requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#0494e2] flex-shrink-0"></div>
                <div>
                  <h3
                    className={`${TYPOGRAPHY.content.md} font-semibold text-gray-900 mb-1`}
                  >
                    Long-term Partnership
                  </h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-gray-600`}>
                    We build relationships, not just software
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0494e2]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0494e2]" />
                  </div>
                  <div
                    className={`${TYPOGRAPHY.heading.lg} font-bold mb-1 text-[#0494e2]`}
                    style={{ color: "#0494e2" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`${TYPOGRAPHY.content.sm} font-semibold text-gray-900 mb-2`}
                  >
                    {stat.label}
                  </div>
                  <div className={`${TYPOGRAPHY.caption.sm} text-gray-500`}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
