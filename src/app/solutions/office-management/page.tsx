import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OfficeManagementInteractiveDemo from "@/components/common/OfficeManagementInteractiveDemo";
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
  Star,
  Laptop,
  DollarSign,
  Calculator,
  UserCheck,
  TrendingUp,
  Shield,
  Smartphone,
  Clock,
  UserCog,
  Kanban,
  BadgeCheck
} from "lucide-react";

export default function OfficeManagementPage() {
  const features = [
    {
      title: "HR Operations",
      description: "Digital onboarding & document storage",
      icon: Users
    },
    {
      title: "Biometric Attendance",
      description: "Real-time attendance logs & reports",
      icon: Clock
    },
    {
      title: "Task Management",
      description: "Kanban boards & milestone tracking",
      icon: Kanban
    },
    {
      title: "Payroll & Finance",
      description: "Attendance-linked payroll automation",
      icon: DollarSign
    },
    {
      title: "Performance Tracking",
      description: "Dynamic KPIs & 360° reviews",
      icon: TrendingUp
    },
    {
      title: "Project Management",
      description: "Gantt charts & workload balancing",
      icon: FileText
    }
  ];

  const strategicSolutions = [
    {
      title: "HR Operations",
      description: "Connects HR processes with finance systems"
    },
    {
      title: "Biometric Devices",
      description: "Integrates with fingerprint, RFID, and face recognition"
    },
    {
      title: "Daily Work Reporting",
      description: "Monitors DID and effort-based productivity tracking"
    },
    {
      title: "Project & Task Management",
      description: "Kanban boards and milestone tracking"
    },
    {
      title: "Payroll & Finance",
      description: "Attendance-linked payroll automation"
    },
    {
      title: "KPI & Performance Tracking",
      description: "Real-time dashboards with actionable insights"
    }
  ];

  const impactAreas = [
    "40-60% reduction in manual HR work",
    "Real-time workforce visibility",
    "Increased task accountability",
    "Accurate biometric-based payroll",
    "Transparent performance evaluation",
    "Better fund & project tracking"
  ];

  const businessBenefits = [
    "Proven expertise in Educational & Institutional IT Systems",
    "Secure, scalable & role-based architecture",
    "Multi-branch biometric integration support",
    "Customizable for universities & startup ecosystems",
    "Dedicated technical & implementation support"
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
                  Smart Workforce. Real-Time Control.
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}>
                <span className="text-[#0494e2]">Office Management & Task</span> Management – HRMS
              </h1>
              
              <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
                A unified digital platform that integrates HR, Payroll, Task Management, Biometric Attendance, and Performance Tracking. Built for Universities, Incubators & Startup Ecosystems.
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
              <OfficeManagementInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              The Problem & Strategic Solution
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Connecting all HR and task management processes in one centralized system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
                The Operational Challenges Institutions Face
              </h3>
              <div className="space-y-4">
                {[
                  "Manual attendance & payroll errors",
                  "No real-time workforce visibility",
                  "Untracked employee productivity",
                  "Poor task accountability",
                  "Disconnected HR and finance systems",
                  "Lack of biometric integration",
                  "Inefficient fund utilization tracking"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
                Datarsoft&apos;s Integrated HRMS & Task Management Platform
              </h3>
              <p className={`${TYPOGRAPHY.body.md} text-slate-600 mb-6`}>
                Connects all inside one centralized web-based system. No silos. No duplication. No confusion.
              </p>
              <div className="space-y-4">
                {strategicSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>{solution.title}</h4>
                      <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task & Project Intelligence Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Task & Project Intelligence
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              DID & Timesheet Monitoring with advanced project management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Kanban, title: "Kanban Boards & Milestone Tracking", desc: "Visual project management with milestone tracking" },
              { icon: FileText, title: "Gantt Charts & Workload Balancing", desc: "Advanced scheduling and resource allocation" },
              { icon: Users, title: "Startup-wise & Department-wise Allocation", desc: "Efficient resource distribution across teams" },
              { icon: UserCheck, title: "Daily Task Reporting", desc: "Real-time task progress tracking" },
              { icon: TrendingUp, title: "Effort-based Productivity Tracking", desc: "Measure productivity based on actual efforts" },
              { icon: UserCog, title: "Manager Validation System", desc: "Supervisor approval workflows" }
            ].map((item, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:border-[#0494e2]/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center mb-4 group-hover:bg-[#0494e2] transition-colors">
                  <item.icon className="w-6 h-6 text-[#0494e2] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}>
                  {item.title}
                </h3>
                
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart HR & Biometric Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Smart HR & Employee Management
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Real-time biometric integration with comprehensive HR tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Digital Onboarding", desc: "Document storage and employee setup" },
              { icon: Calendar, title: "Leave & Shifts Automation", desc: "Automated leave and shift management" },
              { icon: Clock, title: "Real-time Attendance Logs", desc: "Live attendance tracking and reporting" },
              { icon: BadgeCheck, title: "Fingerprint/RFID/Face Recognition", desc: "Multiple biometric integration options" },
              { icon: Laptop, title: "Live Check-in Dashboard", desc: "Real-time employee status tracking" },
              { icon: Calculator, title: "Auto Work-hour Calculation", desc: "Automated work hour calculations" }
            ].map((item, index) => (
              <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}>
                  {item.title}
                </h3>
                
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Payroll Section */}
      <section className="py-24 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Performance & KPI Engine
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Payroll & Finance Control built for Decision-Makers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
                Performance & KPI Engine
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Dynamic KPIs", desc: "Customizable performance indicators" },
                  { title: "360° Reviews", desc: "Comprehensive employee evaluations" },
                  { title: "Task Completion Scorecards", desc: "Detailed task performance metrics" },
                  { title: "Department Efficiency Analytics", desc: "Department-wise performance tracking" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>{item.title}</h4>
                      <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
                Payroll & Finance Control
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Salary Slips & Statutory Deductions", desc: "Automated salary processing" },
                  { title: "Attendance-linked Payroll Automation", desc: "Payroll based on actual attendance" },
                  { title: "Fund Utilization Reports", desc: "Detailed expense tracking" },
                  { title: "Approval Workflows", desc: "Streamlined approval processes" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>{item.title}</h4>
                      <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}>
              Business Impact & Benefits
            </h2>
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}>
              Transform Your Workforce Management Today. Smart Systems. Smarter Institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
                Measurable Impact
              </h3>
              <div className="space-y-4">
                {impactAreas.map((impact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-6`}>
                Why Datarsoft?
              </h3>
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-[#0494e2]" />
                    </div>
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0494e2]">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center text-white">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-6`}>
              Transform Your Workforce Management
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}>
              Ready to streamline your HR operations with our comprehensive Office Management & HRMS solution?
            </p>
            
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-left space-y-4">
                <div>
                  <h3 className={`${TYPOGRAPHY.heading.md} font-bold text-white mb-2`}>Contact Us</h3>
                  <p className={`${TYPOGRAPHY.body.md} text-blue-100`}>8320566649 | info@datarsoft.tech | www.datarsoft.tech</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-[#0494e2] hover:bg-slate-100">
                Get Quote
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