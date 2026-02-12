"use client";

import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Globe, 
  ShieldCheck,
  CheckCircle,
  Star,
  User,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Settings,
  Database,
  Network,
  Lock,
  Zap,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Award,
  Eye,
  Download,
  Share2,
  Bookmark,
  Filter,
  SortAsc,
  Hash,
  CalendarDays,
  ArrowRight
} from "lucide-react";
import ResearchJournalInteractiveDemo from "@/components/common/ResearchJournalInteractiveDemo";

export default function ResearchJournalPage() {
  const academicValues = [
    {
      title: "Encourages Original Research",
      description: "Motivates faculty and students to actively publish scholarly work",
      icon: BookOpen
    },
    {
      title: "Structured Publishing Platform",
      description: "Peer-reviewed publications with proper academic standards",
      icon: FileText
    },
    {
      title: "Academic Excellence",
      description: "Promotes innovation, inquiry, and scholarly writing",
      icon: Award
    },
    {
      title: "Institutional Credibility",
      description: "Strengthens academic standing and research output",
      icon: ShieldCheck
    }
  ];

  const internalImpacts = [
    "Motivates faculty and students to actively publish research",
    "Strengthens interdisciplinary and inter-departmental collaboration",
    "Builds a sustainable research ecosystem within the institution"
  ];

  const externalImpacts = [
    "Improves citations, indexing, and global visibility",
    "Attracts funded projects, consultancy, and collaborations",
    "Strengthens national and international academic presence"
  ];

  const rankingContributions = [
    {
      system: "NAAC - Criterion 3",
      contribution: "Research, Innovation & Extension"
    },
    {
      system: "NAAC - Criterion 6", 
      contribution: "Governance & Leadership"
    },
    {
      system: "NIRF",
      contribution: "Research & Professional Practice (30%)"
    },
    {
      system: "Best Practices",
      contribution: "Institutional Distinctiveness"
    }
  ];

  const keyCapabilities = [
    "Responsive design for desktop, tablet, and mobile",
    "WCAG / GIGW-compliant accessibility",
    "Fast, secure, and SEO-optimized performance",
    "Integration with DOI, indexing platforms, and social media"
  ];

  const homepageElements = [
    "Strong academic identity through journal branding",
    "Clear scope and research focus definition",
    "Qualified editorial board presentation",
    "Current issues and published research showcase",
    "Clear submission guidelines and easy paper submission",
    "Fast search across articles, authors, and keywords",
    "Defined peer review and copyright policies",
    "Impact metrics, announcements, and contact information"
  ];

  const managementFeatures = [
    {
      category: "User & Role Management",
      features: ["Authors, reviewers, editors, readers", "Role-based access and secure authentication"]
    },
    {
      category: "Reviewer Management", 
      features: ["Reviewer database with expertise mapping", "Automated reminders and deadlines"]
    },
    {
      category: "Editorial Workflow",
      features: ["Manuscript submission & tracking", "Peer review assignment & monitoring", "Editorial decisions and issue publishing"]
    },
    {
      category: "Analytics & Security",
      features: ["Article views, downloads, citation insights", "Secure data handling and regular backups"]
    }
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
                  Academic Publishing
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Research Journal</span> for Universities
              </h1>
              
              <h2 className={`${TYPOGRAPHY.heading.lg} text-slate-800 font-semibold mb-6 leading-tight`}>
                Building a Strong Research Culture. Publishing with Purpose.
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-4 leading-relaxed`}>
                A Research Journal is an official academic platform that enables universities and departments to publish, manage, and showcase original research by faculty and students.
              </p>
              
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 mb-8 leading-relaxed`}>
                It plays a critical role in strengthening academic credibility, research output, and institutional rankings.
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
              <ResearchJournalInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Value Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Why Every Department Needs a Research Journal?
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Academic & Institutional Value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0494e2] transition-colors">
                    <Icon className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}>
                    {value.title}
                  </h3>
                  
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <TrendingUp className="w-4 h-4 text-[#0494e2]" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                  Internal Impact
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
                Impact of a Research Journal
              </h2>
              
              <div className="space-y-4">
                {internalImpacts.map((impact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{impact}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Globe className="w-4 h-4 text-slate-600" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-slate-600 uppercase tracking-wider`}>
                  External Impact
                </span>
              </div>
              
              <div className="space-y-4">
                {externalImpacts.map((impact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking & Accreditation Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Impact on Rankings & Accreditation
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              A departmental journal directly contributes to institutional excellence metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rankingContributions.map((contribution, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>
                  {contribution.system}
                </h3>
                
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                  {contribution.contribution}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Portal Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className={`${TYPOGRAPHY.caption.sm} font-semibold uppercase tracking-wider`}>
                Modern Platform
              </span>
            </div>
            
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-6`}>
              Modern Research Journal Portal
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-slate-300 mb-8 leading-relaxed`}>
              A research journal today requires a robust, accessible, and scalable digital platform that supports publishing, discovery, and engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} font-bold mb-6`}>Key Website Capabilities</h3>
              <div className="space-y-4">
                {keyCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-200`}>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} font-bold mb-6`}>Essential Homepage Elements</h3>
              <div className="grid grid-cols-1 gap-3">
                {homepageElements.map((element, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-[#0494e2]"></div>
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-200`}>{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management System Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Powerful Editorial & Admin Management System
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Comprehensive tools for managing the entire research publication workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {managementFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-all">
                <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-4`}>
                  {feature.category}
                </h3>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={`${TYPOGRAPHY.body.sm} text-slate-600`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Security Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                <BarChart3 className="w-4 h-4 text-slate-600" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-slate-600 uppercase tracking-wider`}>
                  Analytics & Security
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
              Analytics, Security & Governance
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#0494e2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>Article Insights</h3>
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>Views, downloads, and citation tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#0494e2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>Data Security</h3>
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>Secure handling and regular backups</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-[#0494e2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>Scalable Architecture</h3>
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>Future-ready platform for growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-2`}>
                    Performance Metrics
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    Research Impact Analytics
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">15K+</div>
                    <div className="text-xs text-slate-600">Monthly Views</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">2.3K</div>
                    <div className="text-xs text-slate-600">Downloads</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">850+</div>
                    <div className="text-xs text-slate-600">Citations</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                    <div className="text-2xl font-bold text-[#0494e2] mb-1">99.9%</div>
                    <div className="text-xs text-slate-600">Uptime</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0494e2] to-cyan-600">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} text-center`}>
          <h2 className={`${TYPOGRAPHY.heading.xl} text-white mb-6`}>
            Why Datar Soft?
          </h2>
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 leading-relaxed`}>
              Deep expertise in higher-education digital platforms. Proven experience in research, accreditation, and compliance systems. Secure, scalable, and institution-ready solutions.
            </p>
            
            <p className={`${TYPOGRAPHY.body.md} text-blue-100 mb-10`}>
              Datar Soft helps institutions build research ecosystems — not just websites.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>8320566649</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>info@datarsoft.tech</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-white" />
                <span className={`${TYPOGRAPHY.body.md} text-blue-100`}>www.datarsoft.tech</span>
              </div>
            </div>
            
            <div className="text-blue-100">
              <span className={`${TYPOGRAPHY.body.md} font-medium`}>@datarsoft</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0494e2] hover:bg-slate-100">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}