"use client";

import Link from "next/link";
import { 
  School, 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  BarChart3, 
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  GraduationCap,
  Code2,
  Headphones
} from "lucide-react";
import { useState, useEffect } from "react";
import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";

export default function StudentInformationSystemPage() {
  const features = [
    {
      icon: Users,
      title: "Student Information Management",
      description: "Comprehensive student database with personal, academic, and administrative information in one centralized system.",
      benefits: ["Single source of truth", "Real-time data synchronization", "Role-based access control", "Audit trails"]
    },
    {
      icon: BookOpen,
      title: "Academic Management",
      description: "Complete academic administration including courses, enrollments, grades, and academic records management.",
      benefits: ["Course catalog management", "Enrollment processing", "Grade book system", "Academic progress tracking"]
    },
    {
      icon: Calendar,
      title: "Attendance & Scheduling",
      description: "Automated attendance tracking and intelligent scheduling for classes, exams, and events.",
      benefits: ["Biometric integration", "Real-time attendance", "Smart scheduling", "Conflict resolution"]
    },
    {
      icon: FileText,
      title: "Assessment & Evaluation",
      description: "Comprehensive assessment tools including exams, assignments, and performance evaluation systems.",
      benefits: ["Online exam portals", "Assignment management", "Performance analytics", "Feedback systems"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboard with real-time insights and customizable reporting capabilities.",
      benefits: ["Student performance analytics", "Institutional reporting", "Data visualization", "Predictive insights"]
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description: "Government-grade security with full compliance to educational and data protection regulations.",
      benefits: ["Data encryption", "Role-based security", "Audit compliance", "Privacy protection"]
    }
  ];

  const modules = [
    {
      name: "Student Portal",
      description: "Self-service portal for students to access records, enrollments, and academic information",
      features: ["Profile management", "Grade viewing", "Enrollment status", "Document requests"]
    },
    {
      name: "Faculty Portal",
      description: "Comprehensive tools for instructors to manage courses, grades, and student interactions",
      features: ["Grade submission", "Attendance tracking", "Course management", "Communication tools"]
    },
    {
      name: "Admin Dashboard",
      description: "Centralized administrative control for institution management and oversight",
      features: ["User management", "System configuration", "Reports generation", "Compliance monitoring"]
    },
    {
      name: "Parent/Guardian Portal",
      description: "Secure access for parents to monitor student progress and institutional communications",
      features: ["Progress reports", "Attendance alerts", "Grade notifications", "Event updates"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Automate manual processes and reduce administrative workload by up to 70%"
    },
    {
      icon: Globe,
      title: "Anytime, Anywhere Access",
      description: "Cloud-based system accessible from any device with internet connectivity"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with existing systems and third-party applications"
    },
    {
      icon: Award,
      title: "Compliance Ready",
      description: "Built-in compliance with educational standards and government regulations"
    }
  ];

  const [stats, setStats] = useState([
    {
      value: "48+",
      label: "Educational Institutions",
      description: "Trusted by universities and colleges nationwide",
      icon: GraduationCap
    },
    {
      value: "150+",
      label: "ERP Projects",
      description: "Successfully delivered solutions",
      icon: Code2
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      description: "Repeat business and referrals",
      icon: Star
    },
    {
      value: "24/7",
      label: "Support",
      description: "Dedicated technical assistance",
      icon: Headphones
    }
  ]);

  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'modules', label: 'Modules' },
    { id: 'benefits', label: 'Benefits' }
  ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      const totalScrollable = docHeight - windowHeight;
      const progress = totalScrollable > 0 ? (scrollPosition / totalScrollable) * 100 : 0;
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-[#0494e2] transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Sticky Navigation Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-2 bg-white rounded-full p-2 shadow-lg border border-slate-200">
          {[
            { id: 'hero', label: 'Overview', icon: School },
            { id: 'features', label: 'Features', icon: Users },
            { id: 'demo', label: 'Demo', icon: Zap },
            { id: 'testimonials', label: 'Reviews', icon: Star },
            { id: 'comparison', label: 'Compare', icon: BarChart3 },
            { id: 'faq', label: 'FAQ', icon: FileText }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="p-3 rounded-full hover:bg-[#0494e2]/10 transition-colors group"
                title={item.label}
              >
                <Icon className="w-5 h-5 text-slate-600 group-hover:text-[#0494e2]" />
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Hero Section */}
      <section id="hero" className={`relative bg-gradient-to-br from-slate-50 to-white ${SECTION_SPACING.section.vertical}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0494e2]/10 border border-[#0494e2]/20 mb-8">
              <School className="w-4 h-4 text-[#0494e2]" />
              <span className={`${TYPOGRAPHY.caption.sm} font-semibold text-[#0494e2] uppercase tracking-wide`}>
                Institutional Solution
              </span>
            </div>
            
            <h1 className={`${TYPOGRAPHY.display.lg} text-slate-900 mb-6`}>
              Student Information System & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0494e2] to-cyan-600">
                Learning Management
              </span>
            </h1>
            
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 max-w-3xl mx-auto mb-12`}>
              A comprehensive, integrated platform that transforms how educational institutions manage student data, 
              deliver learning experiences, and achieve operational excellence with government-grade security and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0494e2] text-white font-semibold rounded-lg hover:bg-[#027abc] transition-all shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-all"
              >
                Request Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 rounded-full bg-[#0494e2]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0494e2]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#0494e2]" />
                  </div>
                  <div className={`${TYPOGRAPHY.heading.xl} font-bold text-slate-900 mb-2`}>
                    {stat.value}
                  </div>
                  <div className={`${TYPOGRAPHY.heading.sm} text-slate-700 mb-1`}>
                    {stat.label}
                  </div>
                  <div className={`${TYPOGRAPHY.caption.md} text-slate-500`}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className={`bg-gradient-to-br from-slate-50 to-white ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              See It In Action
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Interactive preview of key system features
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-lg">
            <div className="flex flex-wrap gap-4 mb-8">
              {['Dashboard', 'Student Profile', 'Grades', 'Attendance'].map((view, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-all ${index === 0 
                    ? 'bg-[#0494e2] text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  {view}
                </button>
              ))}
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 min-h-[300px] flex flex-col items-center justify-center">
              <div className="text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#0494e2]/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-[#0494e2]" />
                </div>
                <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 mb-3`}>
                  Interactive Demo
                </h3>
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-6`}>
                  Select a view above to see how our system works in real-time
                </p>
                <button className="px-6 py-3 bg-[#0494e2] text-white rounded-lg hover:bg-[#027abc] transition-colors">
                  Start Interactive Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`bg-slate-50 ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Trusted by Educational Leaders
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Hear from institutions that transformed their operations with our Student Information System
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The Student Information System transformed how we manage academic data. Enrollment processes that used to take days now complete in hours.",
                author: "Dr. Priya Sharma",
                role: "Registrar",
                institution: "State University"
              },
              {
                quote: "Implementation was seamless and staff adoption was faster than expected. The analytics dashboard provides insights we never had before.",
                author: "Prof. Rajesh Kumar",
                role: "IT Director",
                institution: "Regional College"
              },
              {
                quote: "Student satisfaction scores increased significantly after deploying the LMS component. Parents love the transparency and real-time updates.",
                author: "Ms. Anjali Mehta",
                role: "Academic Coordinator",
                institution: "Premier Institute"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#0494e2]/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${TYPOGRAPHY.body.md} text-slate-600 italic mb-6`}>
                  {'"'}{testimonial.quote}{'"'}
                </p>
                <div>
                  <div className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-semibold`}>
                    {testimonial.author}
                  </div>
                  <div className={`${TYPOGRAPHY.caption.md} text-slate-600`}>
                    {testimonial.role}, {testimonial.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section id="features" className={`bg-white ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Explore Our Student Information System
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto mb-8`}>
              Discover the comprehensive features and capabilities
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-slate-100 p-1 rounded-xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab.id 
                      ? 'bg-white text-[#0494e2] shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="mb-16">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="text-center max-w-4xl mx-auto">
                <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-12`}>
                  Our Student Information System is a comprehensive, integrated platform that transforms how educational institutions manage student data, 
                  deliver learning experiences, and achieve operational excellence with government-grade security and compliance.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.slice(0, 3).map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#0494e2]/30 transition-all duration-300 hover:shadow-lg">
                        <div className="w-12 h-12 rounded-xl bg-[#0494e2]/10 flex items-center justify-center mb-6 group-hover:bg-[#0494e2]/20 transition-colors">
                          <Icon className="w-6 h-6 text-[#0494e2]" />
                        </div>
                        <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 mb-3`}>
                          {feature.title}
                        </h3>
                        <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-4`}>
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className={`${TYPOGRAPHY.caption.md} text-slate-600`}>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-[#0494e2]/30 transition-all duration-300 hover:shadow-lg">
                      <div className="w-12 h-12 rounded-xl bg-[#0494e2]/10 flex items-center justify-center mb-6 group-hover:bg-[#0494e2]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#0494e2]" />
                      </div>
                      <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 mb-3`}>
                        {feature.title}
                      </h3>
                      <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-4`}>
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className={`${TYPOGRAPHY.caption.md} text-slate-600`}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Modules Tab */}
            {activeTab === 'modules' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {modules.map((module, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#0494e2]/30 transition-all">
                    <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 mb-3`}>
                      {module.name}
                    </h3>
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-6`}>
                      {module.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0494e2]"></div>
                          <span className={`${TYPOGRAPHY.caption.sm} text-slate-600`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 rounded-2xl bg-[#0494e2]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0494e2]/20 transition-colors">
                        <Icon className="w-8 h-8 text-[#0494e2]" />
                      </div>
                      <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 mb-3`}>
                        {benefit.title}
                      </h3>
                      <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* System Modules */}
      <section className={`bg-slate-50 ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Integrated System Modules
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Specialized portals and dashboards for different user roles
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#0494e2]/30 transition-all">
                <h3 className={`${TYPOGRAPHY.heading.lg} text-slate-900 mb-3`}>
                  {module.name}
                </h3>
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mb-6`}>
                  {module.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0494e2]"></div>
                      <span className={`${TYPOGRAPHY.caption.sm} text-slate-600`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`bg-white ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Transform Your Institution
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Experience the measurable benefits of our integrated student information system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-[#0494e2]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0494e2]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#0494e2]" />
                  </div>
                  <h3 className={`${TYPOGRAPHY.heading.sm} text-slate-900 mb-3`}>
                    {benefit.title}
                  </h3>
                  <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className={`bg-white ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Why Choose Our Student Information System?
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              How our solution compares to traditional systems
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Traditional Systems</th>
                  <th className="text-center py-4 px-4">Our System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  {
                    feature: "Implementation Time",
                    traditional: "Months",
                    ours: "3-4 weeks"
                  },
                  {
                    feature: "Integration Capability",
                    traditional: "Limited",
                    ours: "Seamless"
                  },
                  {
                    feature: "GIGW 3.0 Compliance",
                    traditional: "Manual",
                    ours: "Built-in"
                  },
                  {
                    feature: "Mobile Access",
                    traditional: "Basic",
                    ours: "Full-featured"
                  },
                  {
                    feature: "Real-time Analytics",
                    traditional: "Delayed",
                    ours: "Instant"
                  },
                  {
                    feature: "Support",
                    traditional: "Business Hours",
                    ours: "24/7"
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-slate-600">{row.traditional}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-green-600 font-semibold">{row.ours}</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className={`bg-white ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Implementation Process
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Our proven 5-step process ensures smooth deployment
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 -z-10"></div>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "Understanding your institutional requirements",
                  icon: GraduationCap
                },
                {
                  step: 2,
                  title: "Planning",
                  description: "Designing system architecture and workflow",
                  icon: Database
                },
                {
                  step: 3,
                  title: "Development",
                  description: "Building and configuring the system",
                  icon: Code2
                },
                {
                  step: 4,
                  title: "Testing",
                  description: "Ensuring quality and functionality",
                  icon: FileText
                },
                {
                  step: 5,
                  title: "Launch",
                  description: "Going live with training and support",
                  icon: TrendingUp
                }
              ].map((process, index) => {
                const Icon = process.icon;
                return (
                  <div key={index} className="text-center relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#0494e2]/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-[#0494e2]" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#0494e2] text-white flex items-center justify-center font-bold text-sm mb-4">
                        {process.step}
                      </div>
                      <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 mb-2`}>
                        {process.title}
                      </h3>
                      <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                        {process.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`bg-slate-50 ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal}`}>
          <div className="text-center mb-16">
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 mb-4`}>
              Frequently Asked Questions
            </h2>
            <p className={`${TYPOGRAPHY.body.md} text-slate-600 max-w-2xl mx-auto`}>
              Everything you need to know about our Student Information System
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does implementation typically take?",
                answer: "Our streamlined implementation process typically takes 3-4 weeks from initial setup to full deployment. We work closely with your team to ensure a smooth transition with minimal disruption to your daily operations."
              },
              {
                question: "Is the system compliant with educational regulations?",
                answer: "Yes, our system is fully compliant with GIGW 3.0 standards and other educational regulations. We have built-in compliance features that ensure your institution meets all required standards automatically."
              },
              {
                question: "Can the system integrate with existing databases?",
                answer: "Absolutely. Our Student Information System is designed for seamless integration with existing institutional databases, ERP systems, and other educational software. We provide APIs and migration tools to facilitate the process."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 technical support with dedicated account managers for each institution. Our support includes system maintenance, updates, training, and consultation services to ensure optimal performance."
              },
              {
                question: "How secure is the student data?",
                answer: "Security is our top priority. We implement government-grade security measures including end-to-end encryption, role-based access controls, audit trails, and regular security assessments to protect sensitive student information."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <details className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-semibold`}>
                      {faq.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-slate-500 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-4 pr-4">
                    <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`bg-gradient-to-r from-[#0494e2] to-cyan-600 ${SECTION_SPACING.section.vertical}`}>
        <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} text-center`}>
          <h2 className={`${TYPOGRAPHY.heading.xl} text-white mb-6`}>
            Ready to Transform Your Institution?
          </h2>
          <p className={`${TYPOGRAPHY.body.lg} text-blue-100 max-w-2xl mx-auto mb-10`}>
            Join over 48 institutions already using our Student Information System to streamline operations and enhance educational outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0494e2] font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}