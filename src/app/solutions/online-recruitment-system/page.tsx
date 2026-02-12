"use client";

import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Search, 
  BarChart3,
  CheckCircle,
  Star,
  User,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Settings,
  Database,
  Network,
  Lock,
  Zap,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import OnlineRecruitmentSystemInteractiveDemo from "@/components/common/OnlineRecruitmentSystemInteractiveDemo";

export default function OnlineRecruitmentSystemPage() {
  const keyImpacts = [
    {
      title: "Transparent & Compliant Recruitment",
      description: "Standardized process aligned with UGC and institutional guidelines",
      icon: ShieldCheck
    },
    {
      title: "Faster Hiring Process",
      description: "Reduced paperwork and accelerated recruitment cycles",
      icon: Clock
    },
    {
      title: "Secure Digital Process",
      description: "End-to-end encrypted recruitment workflow",
      icon: Lock
    }
  ];

  const userRoles = [
    {
      role: "Applicants",
      responsibilities: [
        "Apply online and manage profiles",
        "Upload documents securely",
        "Track application status in real-time",
        "Receive automated notifications"
      ],
      icon: User
    },
    {
      role: "HR Teams",
      responsibilities: [
        "Manage job postings and applications",
        "Streamline communication processes",
        "Review and evaluate candidates",
        "Generate recruitment reports"
      ],
      icon: Briefcase
    },
    {
      role: "Admins",
      responsibilities: [
        "Control system configuration",
        "Manage access rights and permissions",
        "Ensure compliance monitoring",
        "Oversee recruitment policies"
      ],
      icon: Settings
    }
  ];

  const institutionalBenefits = [
    "Eliminates manual errors and paperwork",
    "Ensures fairness and transparency in hiring",
    "Speeds up recruitment cycles significantly",
    "Supports audit-ready and policy-compliant processes",
    "Reduces administrative overhead by 60%",
    "Improves candidate experience and satisfaction"
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Login & Authentication",
      description: "Secure access with role-based permissions",
      icon: ShieldCheck
    },
    {
      step: 2,
      title: "Profile Management",
      description: "Edit personal details and upload documents",
      icon: User
    },
    {
      step: 3,
      title: "Job Search",
      description: "Search and filter open positions",
      icon: Search
    },
    {
      step: 4,
      title: "Application Submission",
      description: "Submit applications online with document upload",
      icon: FileText
    },
    {
      step: 5,
      title: "API Score Calculation",
      description: "Automated academic scoring system",
      icon: BarChart3
    },
    {
      step: 6,
      title: "HR Review & Management",
      description: "Dashboard for application review and candidate management",
      icon: Briefcase
    },
    {
      step: 7,
      title: "Reporting & Analytics",
      description: "Comprehensive recruitment data and insights",
      icon: BarChart3
    }
  ];

  const systemFeatures = [
    "Web-based system accessible on all major browsers",
    "Responsive design for desktop and mobile devices",
    "Integrated with University HR systems via secure APIs",
    "Role-based access control architecture",
    "Real-time data synchronization",
    "Multi-language support capabilities"
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
                  Recruitment Solution
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Online Recruitment</span> System
              </h1>
              
              <h2 className={`${TYPOGRAPHY.heading.lg} text-slate-800 font-semibold mb-6 leading-tight`}>
                A Smart & Compliant Platform for Academic Hiring
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-4 leading-relaxed`}>
                ORS by Datarsoft digitizes faculty recruitment with a transparent, secure, and guideline-driven process.
              </p>
              
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 mb-8 leading-relaxed`}>
                A fully online, role-based system ensuring faster hiring, accurate evaluation, and full UGC compliance.
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
              <OnlineRecruitmentSystemInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Key Impact Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Key Impact
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Transforming academic recruitment with digital innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyImpacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0494e2] transition-colors">
                    <Icon className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}>
                    {impact.title}
                  </h3>
                  
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                    {impact.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#0494e2]" />
              <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                System Purpose
              </span>
            </div>
            
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
              Purpose of ORS
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
              ORS is designed to standardize and simplify academic recruitment by replacing manual workflows with a structured digital process aligned with UGC and institutional guidelines.
            </p>
            
            <Card className="p-8 bg-white border-2 border-[#0494e2]/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-4`}>
                  Empowering Institutions
                </h3>
                <p className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed max-w-2xl mx-auto`}>
                  ORS empowers institutions with a structured, transparent, and policy-compliant recruitment framework that ensures fairness and efficiency in academic hiring.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Who Uses ORS
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Designed for all stakeholders in the academic recruitment process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-4`}>
                    {role.role}
                  </h3>
                  
                  <ul className="space-y-2">
                    {role.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className={`${TYPOGRAPHY.body.sm} text-slate-600`}>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Institutional Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Institutional Benefits
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Measurable advantages for academic institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {institutionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-[#0494e2]/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-4`}>
              User Interfaces & Workflow
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-300 max-w-2xl mx-auto`}>
              Seamless digital recruitment process from application to hiring
            </p>
          </div>

          <div className="relative">
            {/* Workflow Timeline */}
            <div className="relative">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex items-center mb-12 last:mb-0">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center z-10">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <Card className="bg-slate-800 border-slate-700 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-blue-400" />
                          <h3 className={`${TYPOGRAPHY.heading.md} font-bold`}>{step.title}</h3>
                        </div>
                        <p className={`${TYPOGRAPHY.body.sm} text-slate-300`}>{step.description}</p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* System Environment Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Network className="w-4 h-4 text-slate-600" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-slate-600 uppercase tracking-wider`}>
                  System Architecture
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
                Operating Environment
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                ORS is built on a secure, scalable, and accessible architecture that supports seamless recruitment workflows across devices while integrating smoothly with existing university systems.
              </p>
              
              <div className="space-y-4">
                {systemFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-2`}>
                    System Environment
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    Robust architecture for seamless operations
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">99.9%</div>
                    <div className="text-xs text-slate-600">Uptime</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">24/7</div>
                    <div className="text-xs text-slate-600">Support</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">150+</div>
                    <div className="text-xs text-slate-600">Institutions</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">API</div>
                    <div className="text-xs text-slate-600">Integration</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Score Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
              <BarChart3 className="w-4 h-4 text-[#0494e2]" />
              <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                Automated Scoring
              </span>
            </div>
            
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
              API Score Calculation
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
              An automated API scoring system aligned with Institutional & Government (UGC) norms, enabling accurate, transparent, and standardized faculty evaluation.
            </p>
            
            <Card className="p-8 bg-white border-2 border-[#0494e2]/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-green-700">95%</span>
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>Accuracy</h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>Automated scoring precision</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-blue-700">0.5s</span>
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>Processing</h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>Real-time calculation speed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-700">100%</span>
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>Compliance</h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>UGC guideline adherence</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0494e2] to-cyan-600">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} text-center`}>
          <h2 className={`${TYPOGRAPHY.heading.xl} text-white mb-6`}>
            Let&apos;s Connect
          </h2>
          
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className={`${TYPOGRAPHY.body.lg} text-blue-100`}>Ahmedabad, India</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>+91-8320566649</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>info@datarsoft.tech</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <LinkIcon className="w-5 h-5 text-white" />
              <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>www.datarsoft.tech</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0494e2] hover:bg-slate-100">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}