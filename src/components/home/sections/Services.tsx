"use client";

import Link from "next/link";
import {
  Users,
  FlaskConical,
  CalendarDays,
  GraduationCap,
  Home,
  Database,
  Library,
  Smartphone,
  Briefcase,
  ClipboardList,
  BookOpen,
  Rocket,
  Layout,
  Network,
  BriefcaseBusiness,
  FileText,
  UserPlus,
  Cloud,
  ChevronRight,
  Building,
  School,
} from "lucide-react";
import { useState } from "react";

/* ---------------- TYPES ---------------- */
interface Solution {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

/* ---------------- DATA ---------------- */
const solutions: Solution[] = [
  {
    title: "Alumni Portal System",
    subtitle: "Alumni Management",
    description:
      "Building lifelong connections beyond campus with global networking.",
    slug: "/solutions/alumni-portal",
    icon: Users,
    category: "Community",
  },
  {
    title: "Lab Management",
    subtitle: "Chemical Inventory & Lab Management",
    description: "Track chemicals and manage laboratory operations safely.",
    slug: "/solutions/lab-management",
    icon: FlaskConical,
    category: "Operations",
  },
  {
    title: "Community Buildup",
    subtitle: "Community Building",
    description: "Build and engage your institutional community online.",
    slug: "/solutions/community-buildup",
    icon: Network,
    category: "Community",
  },
  {
    title: "Conference Management System",
    subtitle: "Conference Management",
    description:
      "One Platform. Complete Conference Lifecycle for academic events.",
    slug: "/solutions/conference-management",
    icon: CalendarDays,
    category: "Events",
  },
  {
    title: "Aacharyaa Faculty Management",
    subtitle: "Complete Academic Profile Management",
    description:
      "One Platform for Your Complete Academic Profile. Manage. Showcase. Report.",
    slug: "/solutions/aacharyaa-faculty-management",
    icon: GraduationCap,
    category: "Academic",
  },
  {
    title: "Hostel Management System",
    subtitle: "Hostel Management",
    description:
      "Efficient management of hostel operations and accommodations.",
    slug: "/solutions/hostel-management",
    icon: Home,
    category: "Operations",
  },
  {
    title: "Institutional Repository",
    subtitle: "IR Institutional Repository",
    description: "Digital repository for research outputs and publications.",
    slug: "/solutions/institutional-repository",
    icon: Database,
    category: "Research",
  },
  {
    title: "Library Software",
    subtitle: "Library Software",
    description: "Modern library management and digital cataloging system.",
    slug: "/solutions/library-software",
    icon: Library,
    category: "Academic",
  },
  {
    title: "Office Management & HRMS",
    subtitle: "Office Management",
    description: "Comprehensive HR and office task management solution.",
    slug: "/solutions/office-management",
    icon: Briefcase,
    category: "Operations",
  },
  {
    title: "Institutional Website & Campus Portal",
    subtitle: "Institutional Portal",
    description:
      "Centralized platform for universities and multi-campus institutions.",
    slug: "/solutions/institutional-website-campus-portal",
    icon: Building,
    category: "Institution",
  },
  {
    title: "Online Recruitment System",
    subtitle: "Academic Hiring",
    description:
      "Smart & compliant platform for faculty recruitment with UGC compliance.",
    slug: "/solutions/online-recruitment-system",
    icon: Users,
    category: "HR",
  },
  {
    title: "Research Journal",
    subtitle: "Academic Publishing",
    description:
      "Modern research journal platform for universities and departments.",
    slug: "/solutions/research-journal",
    icon: BookOpen,
    category: "Research",
  },
  {
    title: "Online Admission Portal",
    subtitle: "Online Admission",
    description: "Digital admission process from application to enrollment.",
    slug: "/solutions/online-admission-portal",
    icon: ClipboardList,
    category: "Student",
  },
  {
    title: "Online Services",
    subtitle: "Online Services",
    description: "Cloud-based services for modern educational needs.",
    slug: "/solutions/online-services",
    icon: Cloud,
    category: "Technology",
  },
  {
    title: "Placement Management System",
    subtitle: "Placement Management",
    description: "Streamline campus placements and career services.",
    slug: "/solutions/placement-management",
    icon: BriefcaseBusiness,
    category: "Student",
  },
  {
    title: "Publications",
    subtitle: "Publication / Annual Report / Newsletter",
    description: "Publish and distribute institutional communications.",
    slug: "/solutions/publications",
    icon: FileText,
    category: "Research",
  },
  {
    title: "Startup Management System",
    subtitle: "Startup Management",
    description: "Comprehensive solution to manage incubation programs.",
    slug: "/solutions/startup-management",
    icon: Rocket,
    category: "Innovation",
  },
  {
    title: "Student Information System & LMS",
    subtitle: "Student Information System",
    description: "Complete student management and learning platform.",
    slug: "/solutions/student-information-system",
    icon: School,
    category: "Academic",
  },
];

/* ---------------- CATEGORIES ---------------- */
const ALL_CATEGORIES = [
  "All",
  "Academic",
  "Student",
  "Operations",
  "Research",
  "Technology",
  "Community",
  "Events",
  "Innovation",
];

const MOBILE_PRIMARY = ["All", "Academic", "Operations", "Technology", "More"];
const MOBILE_SECONDARY = [
  "Student",
  "Research",
  "Community",
  "Events",
  "Innovation",
];

/* ---------------- COMPONENT ---------------- */
export default function SolutionsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleSolutions =
    activeCategory === "All"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <section
      id="solutions"
      className="relative bg-white py-24 border-y border-slate-200"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ---------- HEADER ---------- */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#0494e2]/30 bg-[#b4d8f0] text-[#0494e2] text-xs font-semibold tracking-wider uppercase">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Institutional ERP &{" "}
            <span className="text-[#0494e2]">Digital Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Comprehensive digital platforms designed to modernize every aspect
            of your educational institution.
          </p>
        </div>

        {/* ---------- FILTER (ALL SCREEN SIZES) ---------- */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md -mx-4 px-4 py-4 mb-8 border-b border-slate-200">
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#0494e2] text-white border-[#0494e2] shadow-lg shadow-[#0494e2]/20"
                    : "text-slate-600 border-slate-300 hover:text-slate-900 hover:border-[#0494e2]/50 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ---------- RESPONSIVE GRID ---------- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSolutions.map((s, index) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={s.slug}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 hover:bg-slate-50 hover:border-[#0494e2]/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Top Icon Bar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center group-hover:bg-[#90bbdf] transition-colors">
                    <Icon className="w-6 h-6 text-[#0494e2]" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                    <ChevronRight className="w-5 h-5 text-[#0494e2]" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 group-hover:text-[#0494e2] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs font-medium text-[#0494e2] uppercase tracking-wide mb-3">
                  {s.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* No Results State (Optional safety) */}
        {visibleSolutions.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No solutions found in this category.
          </div>
        )}
      </div>
    </section>
  );
}