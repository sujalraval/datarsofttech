import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AacharyaaInteractiveDemo from "@/components/common/AacharyaaInteractiveDemo";
import { 
  Users, 
  FileText, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Calendar,
  BarChart3,
  Database,
  CheckCircle,
  Star
} from "lucide-react";

export default function AacharyaaPage() {
  const features = [
    {
      title: "Personal Academic Website",
      description: "Create your professional academic profile with ease",
      icon: Users
    },
    {
      title: "NAAC / NIRF Ready Data",
      description: "Structured data that meets accreditation standards",
      icon: FileText
    },
    {
      title: "Qualifications & Experience",
      description: "Organize and showcase your academic credentials",
      icon: GraduationCap
    },
    {
      title: "Extension & Outreach",
      description: "Track and present your community engagement",
      icon: Users
    },
    {
      title: "Auto CV & Reports",
      description: "Generate professional documents automatically",
      icon: BarChart3
    },
    {
      title: "Research & Publications",
      description: "Manage your scholarly work efficiently",
      icon: BookOpen
    }
  ];

  const modules = [
    "Personal & Professional Details",
    "Educational Qualifications", 
    "Teaching & Course Details",
    "Research Papers & Publications",
    "Projects, Grants & Consultancy",
    "Achievements, Awards & Honors",
    "FDPs, Conferences & Events",
    "Extension & Institutional Activities"
  ];

  const benefits = [
    "Centralized faculty data in one system",
    "Ready-to-show proof of academic activities", 
    "Easy extraction for NAAC criteria",
    "Consistent, verified & structured records",
    "Saves months of manual documentation"
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
                  Academic Excellence Platform
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Aacharyaa</span> - Complete Academic Profile Management
              </h1>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                One Platform for Your Complete Academic Profile. Manage. Showcase. Report.
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
              <AacharyaaInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Comprehensive Academic Management
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Everything you need to manage your academic career in one centralized platform
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
              All-in-One Academic Modules
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              No scattered files. No repeated work. Aacharyaa organizes your entire academic journey into clear, structured sections.
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
                  Complete management and reporting
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <Award className="w-4 h-4 text-[#0494e2]" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                  Why Aacharyaa is Critical for NAAC?
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
                Built for Individuals. <span className="text-[#0494e2]">Powerful for Institutions.</span>
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                Designed specifically to meet the needs of academic professionals and institutions 
                seeking NAAC accreditation with streamlined data management.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-white border-2 border-[#0494e2]/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-2`}>
                    Centralized Data Management
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    All your academic data in one place
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Faculty Profiles</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>100%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>NAAC Compliance</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Report Generation</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>Automated</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Data Verification</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>Verified</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0494e2]">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center text-white">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-6`}>
              Transform Your Academic Profile Management
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}>
              Join hundreds of academics who have streamlined their professional documentation with Aacharyaa
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