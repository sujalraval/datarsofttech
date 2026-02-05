"use client";

export default function ComplianceSecuritySection() {
  const complianceBlocks = [
    {
      title: "GIGW 3.0 Compliance",
      text: "Our university and institutional websites adhere to the Guidelines for Indian Government Websites and Apps (GIGW) 3.0 issued by the Ministry of Electronics & Information Technology (MeitY), Government of India.",
    },
    {
      title: "Web Accessibility (WCAG 2.1 AA)",
      text: "We implement accessibility standards to ensure websites are usable by all users, including persons with disabilities, in accordance with WCAG 2.1 AA guidelines.",
    },
    {
      title: "Security Standards & Data Protection",
      text: "Our solutions follow secure coding practices, role-based access control, and data protection mechanisms suitable for institutional and government environments.",
    },
    {
      title: "VAPT & Security Audits",
      text: "We support Vulnerability Assessment & Penetration Testing (VAPT) and conduct regular security audits and monitoring to identify and mitigate risks proactively.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-3xl font-semibold text-[#0F172A] mb-6">
            Compliance, Accessibility & Security Standards
          </h2>
          <p className="text-base text-[#334155] max-w-4xl">
            Our systems are designed for public institutions and universities.
            We strictly follow government guidelines, accessibility standards,
            and security best practices to ensure long-term compliance and
            reliability.
          </p>
        </div>

        {/* Compliance Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {complianceBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md p-8"
            >
              <h3 className="text-xl font-medium text-[#0F172A] mb-4">
                {block.title}
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center">
          <p className="text-sm text-[#94A3B8]">
            Compliance requirements are reviewed during project initiation and
            validated before final deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
