import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AlumniPortalInteractiveDemo from "@/components/common/AlumniPortalInteractiveDemo";
import { 
  Users, 
  Globe, 
  Handshake, 
  GraduationCap, 
  Calendar,
  BarChart3,
  Database,
  CheckCircle,
  Star,
  Building,
  Heart,
  MapPin
} from "lucide-react";

export default function AlumniPortalPage() {
  const features = [
    {
      title: "Global Alumni Network",
      description: "Connect with alumni across regions and countries",
      icon: Globe
    },
    {
      title: "Mentorship Platform",
      description: "Enable career guidance and industry connections",
      icon: Handshake
    },
    {
      title: "Event Management",
      description: "Organize reunions and networking events",
      icon: Calendar
    },
    {
      title: "Donation System",
      description: "Secure contribution tracking and management",
      icon: Heart
    },
    {
      title: "Career Opportunities",
      description: "Job postings and professional development",
      icon: Building
    },
    {
      title: "Social Feed",
      description: "Share achievements and stay connected",
      icon: Users
    }
  ];

  const modules = [
    "Alumni Registration & Profiles",
    "Institution Branding & News",
    "Events Calendar & Gallery",
    "Mentorship & Career Portal",
    "Donation Management System",
    "Social Networking Feed",
    "Analytics & Reports",
    "Admin & User Management"
  ];

  const benefits = [
    "Strengthens institutional branding through alumni success",
    "Creates career opportunities for alumni and students",
    "Enables mentorship and industry guidance",
    "Supports institutional development through donations",
    "Builds global community across regions",
    "Centralized data and communication platform"
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
                  Community Building Platform
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Alumni Portal</span> - Building Lifelong Connections
              </h1>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                A secure, social-style digital platform that connects alumni, empowers students, and strengthens institutional reputation.
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
              <AlumniPortalInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Comprehensive Alumni Management System
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Everything you need to build and maintain a thriving alumni community
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
              All-in-One Alumni Platform Modules
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              No scattered platforms. No complex management. Alumni Portal organizes your entire alumni ecosystem into intuitive, connected modules.
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
                  Complete management and engagement
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
                <GraduationCap className="w-4 h-4 text-[#0494e2]" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                  Why Alumni Network Matters?
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
                Built for Alumni. <span className="text-[#0494e2]">Essential for Institutions.</span>
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                Designed specifically to create meaningful connections between alumni, students, and institutions while strengthening your organization&apos;s global presence.
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
                    Community Engagement Metrics
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    Track your alumni community growth
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Active Alumni</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>15,000+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Global Reach</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>45+ Countries</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Events Organized</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>200+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Mentorship Connections</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>5,000+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-24 bg-slate-900 text-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-4`}>
              Unified Alumni Platform Architecture
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-300 max-w-2xl mx-auto`}>
              Social-media inspired design with institutional-grade security and management capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>Main Alumni Website</h3>
              <ul className={`${TYPOGRAPHY.body.sm} text-slate-300 space-y-2`}>
                <li>• Personal alumni profiles</li>
                <li>• Social networking feed</li>
                <li>• Event discovery</li>
                <li>• Career opportunities</li>
                <li>• Community discussions</li>
              </ul>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>Alumni Member Dashboard</h3>
              <ul className={`${TYPOGRAPHY.body.sm} text-slate-300 space-y-2`}>
                <li>• Personal analytics</li>
                <li>• Connection management</li>
                <li>• Mentorship programs</li>
                <li>• Donation tracking</li>
                <li>• Achievement sharing</li>
              </ul>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>Institution & Admin Controls</h3>
              <ul className={`${TYPOGRAPHY.body.sm} text-slate-300 space-y-2`}>
                <li>• Alumni data management</li>
                <li>• Event organization</li>
                <li>• Content moderation</li>
                <li>• Analytics and reporting</li>
                <li>• Communication tools</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0494e2]">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center text-white">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-6`}>
              Transform Your Alumni Community Management
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}>
              Join institutions that have built thriving global alumni networks with our comprehensive platform
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