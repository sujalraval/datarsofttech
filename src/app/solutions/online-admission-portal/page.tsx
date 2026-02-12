"use client";

import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  FileText, 
  Award, 
  BookOpen, 
  Calendar,
  BarChart3,
  Database,
  CheckCircle,
  Star,
  Building,
  MessageCircle,
  UserCheck,
  Target,
  ClipboardList,
  Lock,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  UserPlus,
  Archive
} from "lucide-react";
import OnlineAdmissionPortalInteractiveDemo from "@/components/common/OnlineAdmissionPortalInteractiveDemo";

export default function OnlineAdmissionPortalPage() {
  const features = [
    {
      title: "Integrated CRM System",
      description: "Manage leads and enquiries from first contact to final admission",
      icon: MessageCircle
    },
    {
      title: "Centralized Dashboard",
      description: "Complete overview of all admissions and lead activities",
      icon: BarChart3
    },
    {
      title: "Faculty & Department Management",
      description: "Streamlined workflows for academic staff",
      icon: Building
    },
    {
      title: "NAAC-Aligned Records",
      description: "Compliance-ready documentation and storage",
      icon: FileText
    },
    {
      title: "Automated Notifications",
      description: "Keep applicants informed at every step",
      icon: UserCheck
    },
    {
      title: "Lead-to-Application Conversion",
      description: "Structured process for turning inquiries into applications",
      icon: TrendingUp
    }
  ];

  const modules = [
    "Lead Management System",
    "Enquiry Tracking & Follow-up",
    "Application Processing",
    "Document Verification",
    "Faculty Review Interface",
    "Department Management",
    "NAAC Compliance Module",
    "Reporting & Analytics"
  ];

  const crmCapabilities = [
    "Centralized Dashboard",
    "Lead Management",
    "Enquiry Tracking",
    "Consultant Data Management",
    "Automated Notifications",
    "Lead-to-Application Conversion"
  ];

  const facultyBenefits = [
    "Centralized Application View",
    "Structured Student Data",
    "Quick Review & Approval",
    "Department-Level Reports"
  ];

  const institutionalStrengths = [
    "Centralized Admission & CRM Data",
    "Policy & Quota Management",
    "NAAC-Ready Documentation",
    "Secure & Auditable System"
  ];

  const benefits = [
    "Improved response time and transparency",
    "Higher conversion rates across departments",
    "Faster decision-making process",
    "Better accountability and reduced workload",
    "Accurate, auditable, and inspection-ready data",
    "Simplified NAAC and audit preparation"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#0494e2]/15 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-slate-900">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <Star className="w-4 h-4 text-[#0494e2]" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                  Unified Admission Platform
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Digital Admission Portal</span> & Smart CRM
              </h1>
              
              <h2 className={`${TYPOGRAPHY.heading.lg} text-slate-800 font-semibold mb-6 leading-tight`}>
                A Unified Digital Admission & Lead Management System
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                Datar Soft&apos;s Online Admission Portal with integrated CRM brings the entire admission lifecycle—from first enquiry to final admission—onto one secure, structured digital platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0494e2] hover:bg-[#037ab8] text-white">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg" className="border-[#0494e2] text-[#0494e2] hover:bg-[#0494e2]/10">
                  View Features
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <OnlineAdmissionPortalInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Core Focus: Faculty & Department
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Admission Automation, Ease, Institutional Control, and NAAC-Aligned Records Management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mb-4 group-hover:bg-[#0494e2] transition-colors">
                <Target className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}>
                Admission Automation & Ease
              </h3>
              
              <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                Streamline the entire admission process with automated workflows that reduce manual tasks and improve efficiency.
              </p>
            </Card>

            <Card className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mb-4 group-hover:bg-[#0494e2] transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}>
                Institutional Control
              </h3>
              
              <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                Maintain complete oversight and control over the admission process with role-based access and policy management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrated CRM Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Integrated CRM for Enquiries & Leads
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Before an application is submitted, institutes must manage leads efficiently. The built-in CRM captures, tracks, and organizes all prospective student data—ensuring no enquiry is lost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmCapabilities.map((capability, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mb-4">
                  <span className={`${TYPOGRAPHY.caption.sm} text-white font-bold`}>
                    {index + 1}
                  </span>
                </div>
                
                <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>
                  {capability}
                </h3>
                
                <p className={`${TYPOGRAPHY.caption.sm} text-slate-500`}>
                  Essential CRM capability
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200">
            <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-4`}>
              How It Works
            </h3>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}>
              Leads from websites, campaigns, consultants, and referrals are systematically recorded and nurtured through structured follow-ups, converting interest into quality applications. This structured approach improves response time, transparency, and conversion rates across departments.
            </p>
          </div>
        </div>
      </section>

      {/* From Application to Approval */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <ClipboardList className="w-4 h-4 text-[#0494e2]" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                  Application Process
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
                From Application to Approval
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                Once an enquiry is ready, it seamlessly moves into the formal admission process. Faculty and department teams can review applications through a centralized dashboard with complete student information already in place. Document verification, approvals, and remarks are handled digitally, reducing repetitive work and manual coordination.
              </p>
              
              <div className="space-y-4">
                {facultyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <OnlineAdmissionPortalInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Governance & NAAC Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-4`}>
              Built for Institutions, Governance & NAAC
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-300 max-w-2xl mx-auto`}>
              For institutions, admissions data must be accurate, auditable, and inspection-ready. The system ensures all records—from leads to confirmed admissions—are securely stored and easily retrievable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {institutionalStrengths.map((strength, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>{strength}</h3>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className={`${TYPOGRAPHY.body.lg} text-slate-300 max-w-3xl mx-auto`}>
              Role-based access, policy-driven seat allocation, and complete activity logs support governance and compliance while simplifying NAAC and audit preparation. One platform that manages leads, simplifies admissions, supports faculty, and strengthens institutional compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Comprehensive Admission Management
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Everything you need to manage the entire admission lifecycle efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mb-4 group-hover:bg-[#0494e2] transition-colors">
                    <Icon className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              All-in-One Admission Platform Modules
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              No scattered systems. No complex coordination. Digital Admission Portal handles your entire admission lifecycle through integrated modules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mb-4">
                  <span className={`${TYPOGRAPHY.caption.sm} text-white font-bold`}>
                    {index + 1}
                  </span>
                </div>
                
                <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>
                  {module}
                </h3>
                
                <p className={`${TYPOGRAPHY.caption.sm} text-slate-500`}>
                  Complete management and automation
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Key Benefits
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Experience the measurable benefits of our integrated admission management system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0494e2]">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center text-white">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-6`}>
              Transform Your Admission Management
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}>
              Join institutions that have streamlined their admission processes with our comprehensive digital platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#0494e2] hover:bg-slate-100">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}