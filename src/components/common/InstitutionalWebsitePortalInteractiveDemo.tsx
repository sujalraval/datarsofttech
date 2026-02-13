"use client";

import { useState, useEffect } from "react";
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
  X,
  Upload,
  Download,
  Plus,
  Eye,
  User,
  FileText,
  Calendar,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import { TYPOGRAPHY } from "@/styles/typography";

// Define types for modal content
interface FormField {
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

interface TableItem {
  date: string;
  action: string;
  by: string;
}

interface ChecklistItem {
  item: string;
  status: string;
}

interface OptionItem {
  name: string;
  desc: string;
}

interface StatItem {
  metric: string;
  value: number;
  trend: string;
}

interface EventItem {
  name: string;
  date: string;
  location: string;
  attendees: number;
}

interface TemplateItem {
  name: string;
  desc?: string;
  preview?: string;
  selected?: boolean;
}

interface FormatItem {
  name: string;
  desc: string;
  icon: string;
}

interface ModalContent {
  title: string;
  description: string;
  form?: FormField[];
  table?: TableItem[];
  checklist?: ChecklistItem[];
  options?: OptionItem[];
  stats?: StatItem[];
  events?: EventItem[];
  templates?: TemplateItem[];
  formats?: FormatItem[];
  instructions?: string[];
  uploadArea?: boolean;
}

// Module data interface
interface ModuleData {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  metrics: Array<{
    label: string;
    value: string | number;
    trend: "up" | "down" | "neutral";
    change?: string;
  }>;
  features: string[];
  color: string;
  gradient: string;
}

// Module data configuration for Institutional Website Portal
const modules: ModuleData[] = [
  {
    id: "university-management",
    name: "University Management",
    icon: Building,
    description: "Centralized control for complex institutions",
    metrics: [
      { label: "Campuses Managed", value: 15, trend: "up", change: "+3" },
      { label: "Departments", value: 150, trend: "up", change: "+25" },
      { label: "User Roles", value: 12, trend: "up", change: "+2" },
    ],
    features: ["Multi-campus Control", "Role Management", "Policy Enforcement"],
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "rbac-system",
    name: "Access Control",
    icon: ShieldCheck,
    description: "Secure role-based access management",
    metrics: [
      { label: "Access Levels", value: 8, trend: "up", change: "+1" },
      { label: "Permission Types", value: 15, trend: "up", change: "+3" },
      { label: "Audit Logs", value: "100%", trend: "up", change: "+5%" },
    ],
    features: ["Granular Permissions", "Audit Trails", "Compliance Ready"],
    color: "text-green-600",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "website-modules",
    name: "Website Modules",
    icon: Globe,
    description: "Dynamic content management system",
    metrics: [
      { label: "Content Modules", value: 24, trend: "up", change: "+4" },
      { label: "Pages Managed", value: 500, trend: "up", change: "+75" },
      { label: "Monthly Updates", value: 120, trend: "up", change: "+18" },
    ],
    features: ["Content Management", "SEO Optimization", "Multi-language"],
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "faculty-management",
    name: "Faculty Portal",
    icon: Users,
    description: "Faculty profiles and research tracking",
    metrics: [
      { label: "Faculty Profiles", value: 2450, trend: "up", change: "+150" },
      { label: "Research Projects", value: 340, trend: "up", change: "+45" },
      { label: "Publications", value: 1280, trend: "up", change: "+180" },
    ],
    features: [
      "Profile Management",
      "Research Tracking",
      "Activity Monitoring",
    ],
    color: "text-amber-600",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "erp-integration",
    name: "ERP Integration",
    icon: Server,
    description: "Real-time system connectivity",
    metrics: [
      { label: "API Connections", value: 45, trend: "up", change: "+8" },
      { label: "Data Sync Rate", value: "99.8%", trend: "up", change: "+0.2%" },
      { label: "Integration Points", value: 1200, trend: "up", change: "+150" },
    ],
    features: ["Real-time Sync", "Data Integrity", "System Monitoring"],
    color: "text-teal-600",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    id: "compliance-dashboard",
    name: "Compliance",
    icon: Lock,
    description: "GIGW 3.0 and audit readiness",
    metrics: [
      { label: "Compliance Score", value: "94%", trend: "up", change: "+3%" },
      { label: "Audit Reports", value: 24, trend: "up", change: "+4" },
      {
        label: "Accessibility Rating",
        value: "AA+",
        trend: "up",
        change: "+1",
      },
    ],
    features: ["GIGW 3.0 Ready", "Audit Trails", "Accessibility Compliance"],
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function InstitutionalWebsitePortalInteractiveDemo() {
  const [activeModule, setActiveModule] = useState<ModuleData>(modules[0]);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>(
    {}
  );
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  // Animation effect for metric values
  useEffect(() => {
    let animationFrameId: number;

    const animateMetrics = () => {
      // Reset all values to 0
      const initialValues: Record<string, number> = {};
      activeModule.metrics.forEach((metric, index) => {
        if (typeof metric.value === "number") {
          initialValues[`metric-${index}`] = 0;
        }
      });
      setAnimatedValues(initialValues);

      // Animate to final values
      const duration = 1500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentValues: Record<string, number> = {};
        activeModule.metrics.forEach((metric, index) => {
          if (typeof metric.value === "number") {
            currentValues[`metric-${index}`] = metric.value * progress;
          }
        });

        setAnimatedValues(currentValues);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    animateMetrics();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeModule]);

  const handleModuleSelect = (module: ModuleData) => {
    setActiveModule(module);
  };

  const handleActionClick = (action: string) => {
    let content: ModalContent | null = null;

    switch (action) {
      case "university-management-demo":
        content = {
          title: "University Management System",
          description:
            "Centralized control panel for managing universities, campuses, colleges, and departments from a single system.",
          form: [
            {
              label: "University Name",
              type: "text",
              placeholder: "Enter university name",
            },
            {
              label: "Number of Campuses",
              type: "number",
              placeholder: "How many campuses?",
            },
            {
              label: "Management Type",
              type: "select",
              options: ["Centralized", "Decentralized", "Hybrid"],
            },
            {
              label: "Integration Required",
              type: "select",
              options: ["Yes", "No"],
            },
          ],
        };
        break;
      case "rbac-system-demo":
        content = {
          title: "Role-Based Access Control",
          description:
            "Secure and structured access management with granular permissions and audit trails.",
          checklist: [
            { item: "Admin Access Setup", status: "Completed" },
            { item: "Faculty Permissions", status: "In Progress" },
            { item: "Student Access Levels", status: "Pending" },
            { item: "Audit Trail Configuration", status: "Ready" },
          ],
        };
        break;
      case "website-modules-demo":
        content = {
          title: "Website Content Management",
          description:
            "Dynamic and content-rich website modules representing the complete academic ecosystem.",
          stats: [
            { metric: "Institutional Pages", value: 150, trend: "Growing" },
            { metric: "Academic Content", value: 340, trend: "Growing" },
            { metric: "Student Services", value: 85, trend: "Stable" },
          ],
        };
        break;
      case "faculty-management-demo":
        content = {
          title: "Faculty Profile Management",
          description:
            "Comprehensive faculty profiles with research tracking and activity monitoring.",
          form: [
            {
              label: "Faculty Name",
              type: "text",
              placeholder: "Enter faculty name",
            },
            {
              label: "Department",
              type: "text",
              placeholder: "Enter department",
            },
            {
              label: "Research Areas",
              type: "textarea",
              placeholder: "List research areas",
            },
            {
              label: "Upload Profile Photo",
              type: "file",
              placeholder: "Select image file",
            },
          ],
        };
        break;
      case "erp-integration-demo":
        content = {
          title: "System Integration Dashboard",
          description:
            "Real-time connectivity and data synchronization with Smart ERP modules.",
          events: [
            {
              name: "Data Sync Status",
              date: "Live",
              location: "Connected",
              attendees: 45,
            },
            {
              name: "API Health Check",
              date: "Continuous",
              location: "Monitoring",
              attendees: 0,
            },
            {
              name: "Integration Reports",
              date: "Daily",
              location: "Dashboard",
              attendees: 0,
            },
          ],
        };
        break;
      case "compliance-dashboard-demo":
        content = {
          title: "Compliance & Audit Dashboard",
          description:
            "GIGW 3.0 compliance monitoring and audit readiness tracking.",
          formats: [
            {
              name: "GIGW Compliance",
              desc: "Web guidelines adherence",
              icon: "📋",
            },
            {
              name: "Accessibility Audit",
              desc: "WCAG compliance",
              icon: "♿",
            },
            { name: "Security Assessment", desc: "VAPT testing", icon: "🔒" },
            {
              name: "Performance Reports",
              desc: "Load and usability",
              icon: "⚡",
            },
          ],
        };
        break;
      default:
        content = {
          title: "Institutional Website & Campus Portal",
          description:
            "Your complete digital platform for managing universities, campuses, and affiliated colleges with integrated systems and compliance-ready features.",
        };
    }

    setModalContent(content);
    setShowModal(true);
  };

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col">
      {/* OS Header */}
      <div className="h-12 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="h-4 w-28 bg-slate-200 rounded-md" />
      </div>

      <div className="flex flex-1">
        {/* Mobile Navigation - Dropdown */}
        <div className="md:hidden w-full p-4 border-b border-slate-200">
          <select
            value={activeModule.id}
            onChange={(e) => {
              const selectedModule = modules.find(
                (m) => m.id === e.target.value
              );
              if (selectedModule) handleModuleSelect(selectedModule);
            }}
            className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
          >
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block w-16 bg-slate-50 border-r border-slate-200 flex flex-col py-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule.id === module.id;

            return (
              <button
                key={module.id}
                onClick={() => handleModuleSelect(module)}
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-2 transition-all duration-300
                  ${
                    isActive
                      ? `bg-gradient-to-r ${module.gradient} text-white shadow-lg`
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                  }
                `}
                aria-label={module.name}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Module Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-r ${activeModule.gradient} flex items-center justify-center`}
              >
                <activeModule.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className={`${TYPOGRAPHY.heading.sm} text-slate-900 font-bold`}
                >
                  {activeModule.name}
                </h3>
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600`}>
                  {activeModule.description}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {activeModule.metrics.map((metric, index) => {
              const displayValue =
                typeof metric.value === "number"
                  ? Math.floor(
                      animatedValues[`metric-${index}`] || metric.value
                    )
                  : metric.value;

              return (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xs text-slate-600">{metric.label}</h4>
                    {metric.change && (
                      <div
                        className={`text-[10px] px-2 py-1 rounded-full ${
                          metric.trend === "up"
                            ? "bg-green-100 text-green-700"
                            : metric.trend === "down"
                            ? "bg-red-100 text-red-700"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {metric.change}
                      </div>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {displayValue}
                    {typeof metric.value === "string" &&
                      metric.value.includes("%") && (
                        <span className="text-base text-slate-500"></span>
                      )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simplified Features Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4">
            <h4 className="text-sm font-semibold text-slate-900 mb-3 text-center">
              What This Does For You
            </h4>
            <div className="space-y-2">
              {activeModule.id === "university-management" && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">
                    Centralized University Control
                  </div>
                  <div className="text-xs text-slate-600">
                    Manage multiple campuses and departments
                  </div>
                </div>
              )}
              {activeModule.id === "rbac-system" && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">
                    Secure Access Management
                  </div>
                  <div className="text-xs text-slate-600">
                    Role-based permissions and audit trails
                  </div>
                </div>
              )}
              {activeModule.id === "website-modules" && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">
                    Dynamic Content Management
                  </div>
                  <div className="text-xs text-slate-600">
                    Rich website modules and SEO optimization
                  </div>
                </div>
              )}
              {activeModule.id === "faculty-management" && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">
                    Faculty Profile System
                  </div>
                  <div className="text-xs text-slate-600">
                    Research tracking and activity monitoring
                  </div>
                </div>
              )}
              {activeModule.id === "erp-integration" && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">
                    System Integration
                  </div>
                  <div className="text-xs text-slate-600">
                    Real-time data connectivity and sync
                  </div>
                </div>
              )}
              {activeModule.id === "compliance-dashboard" && (
                <div className="text-center p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-medium text-slate-800 mb-1">
                    Compliance & Audit Ready
                  </div>
                  <div className="text-xs text-slate-600">
                    GIGW 3.0 and accessibility compliance
                  </div>
                </div>
              )}
            </div>

            {/* Simple Action Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => handleActionClick(activeModule.id + "-demo")}
                className="px-4 py-2 bg-[#0494e2] text-white rounded-lg hover:bg-[#037ab8] transition-colors text-sm font-medium"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Modal Overlay */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
              <div className="bg-white rounded-xl w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {modalContent?.title}
                      </h3>
                      <p className="text-slate-600 mt-1">
                        {modalContent?.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowModal(false)}
                      className="p-1 rounded-full hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>

                  {/* Form Content */}
                  {modalContent?.form && (
                    <div className="space-y-4">
                      {modalContent.form.map(
                        (field: FormField, index: number) => (
                          <div key={index}>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                              {field.label}
                            </label>
                            {field.type === "select" ? (
                              <select className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent text-sm sm:text-base">
                                {field.options?.map(
                                  (option: string, idx: number) => (
                                    <option key={idx} value={option}>
                                      {option}
                                    </option>
                                  )
                                )}
                              </select>
                            ) : field.type === "textarea" ? (
                              <textarea
                                placeholder={field.placeholder}
                                className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent min-h-[100px] text-sm sm:text-base"
                              ></textarea>
                            ) : field.type === "file" ? (
                              <div
                                className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#0494e2] transition-colors cursor-pointer bg-slate-50 hover:bg-white"
                                onClick={() => {
                                  // Simulate file selection
                                  const input = document.createElement("input");
                                  input.type = "file";
                                  input.accept =
                                    ".pdf,.doc,.docx,.jpg,.jpeg,.png";
                                  input.onchange = (e) => {
                                    const file = (e.target as HTMLInputElement)
                                      .files?.[0];
                                    if (file) {
                                      alert(
                                        `File selected: ${file.name} (${(
                                          file.size /
                                          1024 /
                                          1024
                                        ).toFixed(2)} MB)`
                                      );
                                    }
                                  };
                                  input.click();
                                }}
                              >
                                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                <p className="text-slate-600 text-sm font-medium">
                                  Click to Upload
                                </p>
                                <p className="text-slate-500 text-xs mt-1">
                                  PDF, DOC, JPG up to 10MB
                                </p>
                                <p className="text-[#0494e2] text-xs mt-2 font-medium">
                                  Try clicking this area!
                                </p>
                              </div>
                            ) : (
                              <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-transparent text-sm sm:text-base"
                              />
                            )}
                          </div>
                        )
                      )}
                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 bg-[#0494e2] text-white py-2 px-4 rounded-lg hover:bg-[#037ab8] transition-colors">
                          Submit
                        </button>
                        <button
                          onClick={() => setShowModal(false)}
                          className="flex-1 bg-slate-100 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Table Content */}
                  {modalContent?.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-2 text-slate-700">
                              Date
                            </th>
                            <th className="text-left py-2 text-slate-700">
                              Action
                            </th>
                            <th className="text-left py-2 text-slate-700">
                              By
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {modalContent.table.map(
                            (row: TableItem, index: number) => (
                              <tr
                                key={index}
                                className="border-b border-slate-100 last:border-b-0"
                              >
                                <td className="py-2 text-slate-600">
                                  {row.date}
                                </td>
                                <td className="py-2 text-slate-800">
                                  {row.action}
                                </td>
                                <td className="py-2 text-slate-600">
                                  {row.by}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Checklist Content */}
                  {modalContent?.checklist && (
                    <div className="space-y-3">
                      {modalContent.checklist.map(
                        (item: ChecklistItem, index: number) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                          >
                            <span className="text-slate-700">{item.item}</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                item.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : item.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-slate-100 text-slate-800"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Options Content */}
                  {modalContent?.options && (
                    <div className="space-y-3">
                      {modalContent.options.map(
                        (option: OptionItem, index: number) => (
                          <div
                            key={index}
                            className="p-3 border border-slate-200 rounded-lg hover:border-[#0494e2] transition-colors"
                          >
                            <div className="font-medium text-slate-800">
                              {option.name}
                            </div>
                            <div className="text-sm text-slate-600">
                              {option.desc}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Stats Content */}
                  {modalContent?.stats && (
                    <div className="space-y-4">
                      {modalContent.stats.map(
                        (stat: StatItem, index: number) => (
                          <div
                            key={index}
                            className="p-3 border border-slate-200 rounded-lg"
                          >
                            <div className="font-medium text-slate-800">
                              {stat.metric}
                            </div>
                            <div className="flex justify-between mt-2">
                              <span className="text-slate-600">
                                Count: {stat.value}
                              </span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  stat.trend === "High"
                                    ? "bg-red-100 text-red-800"
                                    : stat.trend === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {stat.trend}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Events Content */}
                  {modalContent?.events && (
                    <div className="space-y-3">
                      {modalContent.events.map(
                        (event: EventItem, index: number) => (
                          <div
                            key={index}
                            className="p-3 border border-slate-200 rounded-lg"
                          >
                            <div className="font-medium text-slate-800">
                              {event.name}
                            </div>
                            <div className="flex justify-between text-sm text-slate-600">
                              <span>{event.date}</span>
                              <span>{event.location}</span>
                            </div>
                            <div className="text-sm text-slate-500 mt-1">
                              Metrics: {event.attendees}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Templates Content */}
                  {modalContent?.templates && (
                    <div className="space-y-3">
                      {modalContent.templates.map(
                        (template: TemplateItem, index: number) => (
                          <div
                            key={index}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                              template.selected
                                ? "border-[#0494e2] bg-[#f0f9ff]"
                                : "border-slate-200 hover:border-[#0494e2]"
                            }`}
                          >
                            <div className="font-medium text-slate-800">
                              {template.name}
                            </div>
                            <div className="text-sm text-slate-600">
                              {template.desc || template.preview}
                            </div>
                            {template.selected && (
                              <div className="mt-2 text-xs text-[#0494e2] font-medium">
                                SELECTED
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Formats Content */}
                  {modalContent?.formats && (
                    <div className="grid grid-cols-2 gap-3">
                      {modalContent.formats.map(
                        (format: FormatItem, index: number) => (
                          <div
                            key={index}
                            className="p-4 border border-slate-200 rounded-lg text-center hover:border-[#0494e2] transition-colors cursor-pointer"
                          >
                            <div className="text-2xl mb-1">{format.icon}</div>
                            <div className="font-medium text-slate-800">
                              {format.name}
                            </div>
                            <div className="text-xs text-slate-600">
                              {format.desc}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Instructions Content */}
                  {modalContent?.instructions && (
                    <div className="space-y-2">
                      {modalContent.instructions.map(
                        (instruction: string, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-slate-700">
                              {instruction}
                            </span>
                          </div>
                        )
                      )}
                      {modalContent.uploadArea && (
                        <div className="mt-4 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-[#0494e2] transition-colors">
                          <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-600 text-sm">
                            Click to upload
                          </p>
                          <p className="text-slate-500 text-xs mt-1">
                            PDF, JPG, PNG up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#b4d8f0] to-cyan-200 rounded-2xl blur-xl opacity-25 -z-10" />
    </div>
  );
}
