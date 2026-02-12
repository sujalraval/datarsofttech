import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConferenceManagementInteractiveDemo from "@/components/common/ConferenceManagementInteractiveDemo";
import { 
  CalendarDays,
  Globe,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Database,
  CheckCircle,
  Star,
  Settings,
  Mail,
  Camera,
  BookOpen
} from "lucide-react";

export default function ConferenceManagementPage() {
  const features = [
    {
      title: "Conference Website Development",
      description: "Professional, dynamic, mobile-responsive conference websites",
      icon: Globe
    },
    {
      title: "Registration & Payment Integration",
      description: "Seamless participant registration and secure payment processing",
      icon: CreditCard
    },
    {
      title: "Paper Management System",
      description: "End-to-end research submission and evaluation workflow",
      icon: FileText
    },
    {
      title: "Digital Assets & Publishing",
      description: "Conference branding, proceedings, and academic publishing",
      icon: BookOpen
    },
    {
      title: "Notifications & Analytics",
      description: "Automated communication and real-time reporting",
      icon: BarChart3
    },
    {
      title: "Creative & Promotional Support",
      description: "Complete branding and marketing campaign management",
      icon: Camera
    }
  ];

  const modules = [
    "Conference Website Builder",
    "Participant Registration System",
    "Paper Submission & Review",
    "Payment Gateway Integration",
    "Digital Proceedings & Publishing",
    "Analytics & Reporting Dashboard",
    "Communication & Notifications",
    "Creative Assets Management"
  ];

  const benefits = [
    "Centralized conference operations in one unified platform",
    "Improved participant experience through seamless digital workflows",
    "Reduced manual effort and operational risks",
    "Professional conference websites with mobile responsiveness",
    "Secure payment processing with auto-generated receipts",
    "Real-time analytics and data-driven insights"
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
                  Conference Lifecycle Platform
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Conference Management</span> - One Platform. Complete Lifecycle.
              </h1>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                Datarsoft&apos;s CMS simplifies academic conference management through one unified digital platform. It brings websites, registrations, papers, payments, and analytics together for efficient execution.
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
              <ConferenceManagementInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Complete Conference Management Solution
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Everything you need to plan, execute, and manage academic conferences efficiently
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
              End-to-End Conference Modules
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              No scattered systems. No complex coordination. Conference Management System handles your entire conference lifecycle through integrated modules.
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <CalendarDays className="w-4 h-4 text-[#0494e2]" />
                <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}>
                  Key Impact
                </span>
              </div>
              
              <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}>
                Built for Conferences. <span className="text-[#0494e2]">Essential for Institutions.</span>
              </h2>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                Designed specifically to streamline academic conference management while delivering exceptional participant experiences and institutional value.
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
                    Conference Metrics Dashboard
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    Real-time conference performance tracking
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Registrations</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>1,250+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Paper Submissions</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>890</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Speakers</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>45</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>Countries Represented</span>
                    <span className={`${TYPOGRAPHY.body.sm} font-semibold text-[#0494e2]`}>28</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* System Highlights */}
      <section className="py-24 bg-slate-900 text-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-4`}>
              Key System Highlights
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-300 max-w-2xl mx-auto`}>
              Professional features designed for academic excellence and seamless conference execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>Professional Conference Websites</h3>
              <ul className={`${TYPOGRAPHY.body.sm} text-slate-300 space-y-2`}>
                <li>• Mobile-responsive design</li>
                <li>• SEO optimization</li>
                <li>• Social media integration</li>
                <li>• Real-time schedule updates</li>
                <li>• Multi-language support</li>
              </ul>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>Smart Registration System</h3>
              <ul className={`${TYPOGRAPHY.body.sm} text-slate-300 space-y-2`}>
                <li>• Role-based registration</li>
                <li>• Configurable fee structures</li>
                <li>• QR code entry tracking</li>
                <li>• Auto-generated confirmations</li>
                <li>• Secure payment gateways</li>
              </ul>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${TYPOGRAPHY.heading.md} font-bold mb-3`}>Research Management</h3>
              <ul className={`${TYPOGRAPHY.body.sm} text-slate-300 space-y-2`}>
                <li>• Paper submission workflow</li>
                <li>• Peer review management</li>
                <li>• Plagiarism check integration</li>
                <li>• Proceedings publishing</li>
                <li>• Repository indexing ready</li>
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
              Transform Your Conference Management
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}>
              Join institutions that have streamlined their academic conferences with our comprehensive management platform
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