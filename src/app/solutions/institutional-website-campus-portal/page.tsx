"use client";

import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building,
  Users,
  Globe,
  ShieldCheck,
  Database,
  CheckCircle,
  Star,
  Settings,
  Layout,
  BookOpen,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
  Server,
  Network,
  Lock,
  Accessibility,
  Zap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import InstitutionalWebsitePortalInteractiveDemo from "@/components/common/InstitutionalWebsitePortalInteractiveDemo";

export default function InstitutionalWebsiteCampusPortalPage() {
  const capabilities = [
    {
      title: "Multi-campus & Multi-college Management",
      description:
        "Centralized control for universities, campuses, colleges, and departments",
      icon: Building,
    },
    {
      title: "Role-Based Access Control (RBAC)",
      description: "Secure, structured, and accountable user permissions",
      icon: ShieldCheck,
    },
    {
      title: "Program & Syllabus Mapping",
      description: "CO, PO, PSO alignment with academic outcomes",
      icon: BookOpen,
    },
    {
      title: "Faculty Profile & Research Tracking",
      description: "Comprehensive faculty management and activity monitoring",
      icon: Users,
    },
    {
      title: "Granular Permissions System",
      description: "View, Create, Approve access levels across modules",
      icon: Settings,
    },
    {
      title: "Campus & Department Access",
      description:
        "Module-wise access control for different organizational units",
      icon: Layout,
    },
  ];

  const websiteModules = [
    {
      category: "Institutional & Academic",
      items: [
        "University overview, leadership & governance",
        "Schools, departments, programs & research",
      ],
    },
    {
      category: "Student & Campus Life",
      items: [
        "Hostels, placements, scholarships, sports",
        "NCC/NSS, counseling & student services",
      ],
    },
    {
      category: "Digital Services",
      items: [
        "Downloads, forms, webmail, internal portals",
        "News, events, circulars & announcements",
      ],
    },
    {
      category: "Community Outreach",
      items: ["Extension services, publications & success stories"],
    },
  ];

  const complianceFeatures = [
    "GIGW 3.0 Compliant",
    "Accessibility & Inclusivity",
    "Performance & Usability",
    "Security & Compliance Audits",
    "VAPT Testing",
    "Multi-device Compatibility",
  ];

  const benefits = [
    "Improved data security & operational efficiency",
    "Real-time data connectivity across systems",
    "Centralized management for complex institutions",
    "Enhanced user experience and accessibility",
    "Streamlined compliance and audit readiness",
    "Scalable architecture for future growth",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#0494e2]/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-slate-900">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <Star className="w-4 h-4 text-[#0494e2]" />
                <span
                  className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}
                >
                  Institutional Solution
                </span>
              </div>

              <h1
                className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}
              >
                <span className="text-[#0494e2]">Institutional Website</span> &
                Campus Portal
              </h1>

              <h2
                className={`${TYPOGRAPHY.heading.lg} text-slate-800 font-semibold mb-6 leading-tight`}
              >
                One Digital Platform. One Institutional Identity.
              </h2>

              <p
                className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-4 leading-relaxed`}
              >
                Built for Governance. Designed for Growth.
              </p>

              <p
                className={`${TYPOGRAPHY.body.md} text-slate-600 mb-8 leading-relaxed`}
              >
                A centralized, secure, and scalable digital platform designed
                for universities, multi-campus institutions, and affiliated
                colleges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#0494e2] hover:bg-[#037ab8] text-white"
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#0494e2] text-[#0494e2] hover:bg-[#0494e2]/10"
                >
                  View Features
                </Button>
              </div>
            </div>

            <div className="relative">
              <InstitutionalWebsitePortalInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              Key Capabilities
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              Secure. Structured. Accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mb-4 group-hover:bg-[#0494e2] transition-colors">
                    <Icon className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
                  </div>

                  <h3
                    className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}
                  >
                    {capability.title}
                  </h3>

                  <p
                    className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}
                  >
                    {capability.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-slate-50">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <Network className="w-4 h-4 text-[#0494e2]" />
                <span
                  className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}
                >
                  Smart Integration
                </span>
              </div>

              <h2
                className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}
              >
                Integrated with Smart ERP, SIS & LMS
              </h2>

              <p
                className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}
              >
                Connected. Real-Time. Intelligent.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>
                    API-based integration with 45 Smart ERP modules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>
                    Live academic, administrative & user data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>
                    One unified digital ecosystem
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <Card className="p-8 bg-white border-2 border-[#0494e2]/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-2`}
                  >
                    System Integration
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    Real-time data connectivity across systems
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span
                        className={`${TYPOGRAPHY.body.sm} font-medium text-slate-800`}
                      >
                        ERP System
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      Connected: Real-time data sync
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span
                        className={`${TYPOGRAPHY.body.sm} font-medium text-slate-800`}
                      >
                        SIS Integration
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      Active: Student information sync
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span
                        className={`${TYPOGRAPHY.body.sm} font-medium text-slate-800`}
                      >
                        LMS Platform
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      Integrated: Learning management
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website Modules Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              Comprehensive Frontend Website Modules
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              A dynamic and content-rich website representing the complete
              academic and institutional ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteModules.map((module, index) => (
              <Card
                key={index}
                className="p-6 border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mb-4">
                  <span
                    className={`${TYPOGRAPHY.caption.sm} text-white font-bold`}
                  >
                    {index + 1}
                  </span>
                </div>

                <h3
                  className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-3`}
                >
                  {module.category}
                </h3>

                <ul className="space-y-2">
                  {module.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0494e2] mt-2 flex-shrink-0"></div>
                      <span
                        className={`${TYPOGRAPHY.caption.sm} text-slate-600`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-4`}>
              Built for Compliance. Delivered with Confidence
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-300 max-w-2xl mx-auto`}
            >
              GIGW 3.0 Compliant & Secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Accessibility className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>
                Accessibility & Inclusivity
              </h3>
              <p className={`${TYPOGRAPHY.body.sm} text-slate-300`}>
                Built to meet Government of India Web Guidelines with focus on
                accessibility and inclusivity for all users.
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>
                Security & Compliance
              </h3>
              <p className={`${TYPOGRAPHY.body.sm} text-slate-300`}>
                Robust security measures including VAPT testing, compliance
                audits, and multi-device compatibility.
              </p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>
                Performance & Usability
              </h3>
              <p className={`${TYPOGRAPHY.body.sm} text-slate-300`}>
                Optimized for performance and usability across all devices and
                user scenarios.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <h3
              className={`${TYPOGRAPHY.heading.lg} font-bold mb-6 text-center`}
            >
              Compliance Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {complianceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className={`${TYPOGRAPHY.body.sm} text-slate-200`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              Why Choose Our Institutional Platform?
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              Experience the measurable benefits of our integrated institutional
              management system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0494e2] to-cyan-600">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} text-center`}
        >
          <h2 className={`${TYPOGRAPHY.heading.xl} text-white mb-6`}>
            Let&apos;s Build Your Digital Campus
          </h2>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className={`${TYPOGRAPHY.body.lg} text-blue-100`}>
                Ahmedabad, India
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>
                  +91-8320566649
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>
                  info@datarsoft.tech
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <LinkIcon className="w-5 h-5 text-white" />
              <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>
                www.datarsoft.tech
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0494e2] hover:bg-slate-100"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
