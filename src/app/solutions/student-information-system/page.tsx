import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StudentInformationSystemInteractiveDemo from "@/components/common/StudentInformationSystemInteractiveDemo";
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
} from "lucide-react";

export default function StudentInformationSystemPage() {
  const features = [
    {
      title: "Student Life Cycle Management",
      description: "Manages students from enrollment to graduation",
      icon: Users,
    },
    {
      title: "Learning Management System",
      description: "Videos, quizzes, grading in one platform",
      icon: BookOpen,
    },
    {
      title: "Examination Management",
      description: "Online/offline exams with auto-grading and results",
      icon: FileText,
    },
    {
      title: "Finance Management",
      description: "Payments, invoices, fines, and scholarships simplified",
      icon: DollarSign,
    },
    {
      title: "Analytics & Performance",
      description: "Attendance tracking and performance dashboards",
      icon: TrendingUp,
    },
    {
      title: "Mobile App Support",
      description: "Timetables, assignments, fees, and alerts on the go",
      icon: Smartphone,
    },
  ];

  const lifecycleModules = [
    "Student Enrollment & Registration",
    "Attendance Management",
    "Course & Exam Management",
    "Fee Management & Financial Aid",
    "Student Performance & Analytics",
    "Communication & Alerts",
    "Graduation Tracking",
    "Alumni Transition",
  ];

  const advantages = [
    "Automates workflows and reduces manual tasks",
    "Real-time academic data for faster, informed decisions",
    "Secure access for students, faculty, and parents",
    "High performance with role-based data protection",
    "Interactive tools for better learning outcomes",
  ];

  const servicesAreas = [
    "Online Admission Management System",
    "Institutional Website & Campus Portal",
    "Centralized Recruitment Platform",
    "Faculty Profile Management (Aacharyaa Platform)",
    "Office Automation & HRMS",
    "NAAC, NIRF, NBA Accreditation & Ranking Support",
    "Startup & Incubation Portals",
    "University Research Journal & Conference Portals",
    "Alumni & Placement Systems",
    "Hostel Management System",
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
                  Complete Digital Campus Solution
                </span>
              </div>

              <h1
                className={`${TYPOGRAPHY.display.xl} text-slate-900 font-bold mb-6 leading-tight`}
              >
                <span className="text-[#0494e2]">
                  Student Information System
                </span>{" "}
                & Learning Management System
              </h1>

              <p
                className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}
              >
                Everything You Need in One LMS. Web Portal, Mobile App, Admin
                Panel for complete student lifecycle tracking.
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
              <StudentInformationSystemInteractiveDemo />
            </div>
          </div>
        </div>
      </section>

      {/* System Overview Section */}
      <section className="py-24 bg-white">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              System Overview
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              A powerful platform for online, hybrid, and blended learning
              supporting flexible teaching models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                    {feature.title}
                  </h3>

                  <p
                    className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}
                  >
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-slate-50">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              Why It Matters
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              Real-time academic data for better decision-making, enhanced
              learning outcomes, and improved productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-slate-200 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}
              >
                Smart Insights
              </h3>
              <p
                className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}
              >
                Real-time academic data for better decision-making and
                predictive analytics.
              </p>
            </Card>

            <Card className="p-8 border-slate-200 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}
              >
                Flexible Teaching
              </h3>
              <p
                className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}
              >
                Supports online, hybrid, and blended learning models for diverse
                educational needs.
              </p>
            </Card>

            <Card className="p-8 border-slate-200 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold mb-3`}
              >
                Enhanced Learning
              </h3>
              <p
                className={`${TYPOGRAPHY.body.md} text-slate-600 leading-relaxed`}
              >
                Interactive tools for better learning outcomes and improved
                academic productivity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Life Cycle Management Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0494e2]/30 mb-6 shadow-sm">
                <UserCheck className="w-4 h-4 text-[#0494e2]" />
                <span
                  className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wider`}
                >
                  Complete Student Lifecycle Management
                </span>
              </div>

              <h2
                className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}
              >
                Manage the complete student lifecycle with{" "}
                <span className="text-[#0494e2]">accuracy and efficiency</span>
              </h2>

              <p
                className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}
              >
                From enrollment to graduation, our system handles every aspect
                of the student journey with precision and care.
              </p>

              <div className="space-y-4">
                {advantages.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`${TYPOGRAPHY.body.md} text-slate-700`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-white border-2 border-[#0494e2]/20 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`${TYPOGRAPHY.heading.lg} text-slate-900 font-bold mb-2`}
                  >
                    Student Lifecycle Modules
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-slate-600`}>
                    Complete management of the student journey
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {lifecycleModules.slice(0, 6).map((module, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <span className={`${TYPOGRAPHY.body.sm} text-slate-700`}>
                        {module}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="py-24 bg-white">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              Core Advantages
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              Streamlined operations, enhanced security, and improved
              communication for all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Improved Efficiency",
                desc: "Automates workflows and reduces manual tasks",
              },
              {
                icon: TrendingUp,
                title: "Better Decision-Making",
                desc: "Real-time academic data for faster, informed decisions",
              },
              {
                icon: Users,
                title: "Enhanced Communication",
                desc: "Secure access for students, faculty, and parents",
              },
              {
                icon: Database,
                title: "Scalable & Secure",
                desc: "High performance with role-based data protection",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 border-slate-200 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0494e2] to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3
                  className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}
                >
                  {item.title}
                </h3>

                <p
                  className={`${TYPOGRAPHY.body.sm} text-slate-600 leading-relaxed`}
                >
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Product Areas */}
      <section className="py-24 bg-slate-50">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center mb-16">
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-4`}
            >
              Services & Product Areas
            </h2>
            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-2xl mx-auto`}
            >
              Comprehensive suite of solutions for educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesAreas.map((service, index) => (
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
                  className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold mb-2`}
                >
                  {service}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0494e2]">
        <div
          className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}
        >
          <div className="text-center text-white">
            <h2 className={`${TYPOGRAPHY.heading.xl} font-bold mb-6`}>
              Let&apos;s connect
            </h2>

            <p
              className={`${TYPOGRAPHY.body.lg} text-blue-100 mb-8 max-w-2xl mx-auto`}
            >
              Ready to transform your educational institution with our
              comprehensive student information system?
            </p>

            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-left space-y-4">
                <div>
                  <h3
                    className={`${TYPOGRAPHY.heading.md} font-bold text-white mb-2`}
                  >
                    Our office
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-blue-100`}>
                    311, University Plaza, Navrangpura, Ahmedabad, Gujarat
                    380009, India
                  </p>
                </div>

                <div>
                  <h3
                    className={`${TYPOGRAPHY.heading.md} font-bold text-white mb-2`}
                  >
                    Call us
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-blue-100`}>
                    +91-8320566649
                  </p>
                  <p className={`${TYPOGRAPHY.body.sm} text-blue-200`}>
                    Available: Mon - Sat 9:00 AM - 6:00 PM
                  </p>
                </div>

                <div>
                  <h3
                    className={`${TYPOGRAPHY.heading.md} font-bold text-white mb-2`}
                  >
                    Email us
                  </h3>
                  <p className={`${TYPOGRAPHY.body.md} text-blue-100`}>
                    info@datarsoft.tech
                  </p>
                  <p className={`${TYPOGRAPHY.body.sm} text-blue-200`}>
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-white text-[#0494e2] hover:bg-slate-100"
              >
                Get Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
