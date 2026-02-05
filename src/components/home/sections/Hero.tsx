import Link from "next/link";
import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";
import {
  ArrowRight,
  Terminal,
  ShieldCheck,
  Zap,
  Activity,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden bg-white ${SECTION_SPACING.section.vertical}`}
    >
      {/* 1. COMFORTABLE BACKGROUND: Soft, subtle glows instead of heavy noise */}
      {/* Using a softer, wider glow for depth without eye strain */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0494e2]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 2. SUBTLE GRID: Very faint structure lines to guide the eye, not distract */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#00000010 1px, transparent 1px), linear-gradient(90deg, #00000010 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT COLUMN - Clear Value Proposition */}
          <div className="lg:col-span-6 text-left space-y-8">
            {/* Badge: Trustworthy & Stable (No pulsing, clean border) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0494e2]/30 bg-[#b4d8f0] backdrop-blur-md">
              <CheckCircle className="w-3.5 h-3.5 text-[#0494e2]" />
              <span
                className={`${TYPOGRAPHY.caption.sm} font-medium text-[#0494e2] tracking-wide uppercase`}
              >
                v2.4 System Stable
              </span>
            </div>

            {/* Main Heading: Optimized for readability */}
            <div className="space-y-5">
              <h1
                className={`${TYPOGRAPHY.display.xl} font-bold text-slate-900 leading-[1.15] tracking-tight`}
              >
                The Operating System for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0494e2] via-cyan-600 to-[#0494e2]">
                  Modern Institutions
                </span>
              </h1>

              <p
                className={`${TYPOGRAPHY.body.lg} text-slate-600 leading-[1.7] max-w-lg`}
              >
                Unify academic and administrative data into a single, secure
                ecosystem. We provide the digital infrastructure for
                government-grade education.
              </p>
            </div>

            {/* Feature Tokens: Pill shaped, easy to scan */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Terminal, text: "Unified Admissions" },
                { icon: ShieldCheck, text: "Gov-Grade Security" },
                { icon: Zap, text: "Real-time Analytics" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-[#b4d8f0] hover:border-[#0494e2]/30 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-[#0494e2]" />
                  <span className={`${TYPOGRAPHY.body.sm} font-medium`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Area: Clean, high contrast */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/contact"
                className={`
                  w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-8 py-3.5 rounded-lg font-semibold text-white
                  bg-[#0494e2] hover:bg-[#027abc]
                  transition-all shadow-lg shadow-[#0494e2]/20 hover:shadow-[#0494e2]/30
                `}
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-3 text-slate-600">
                {/* Mock Avatars for Social Proof */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 backdrop-blur-sm"
                      style={{ opacity: 1 - i * 0.15 }}
                    ></div>
                  ))}
                </div>
                <div className={`${TYPOGRAPHY.body.sm}`}>
                  Trusted by{" "}
                  <span className="text-slate-800 font-semibold">48+</span>{" "}
                  Institutions
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - The "OS" Interface (Mockup) */}
          {/* Designed to look like FLAT, CLEAN Software, not a 3D object */}
          <div className="lg:col-span-6 relative h-[550px] flex items-center justify-center">
            {/* Main "Screen" Container */}
            <div className="relative w-full h-full bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col">
              {/* Simulated OS Header / Sidebar (Visual Context) */}
              <div className="h-12 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-4 w-32 bg-slate-200 rounded-md"></div>{" "}
                {/* Search Bar Mock */}
              </div>

              {/* Dashboard Content Grid */}
              <div className="flex-1 p-6 grid grid-cols-12 gap-6 grid-rows-6">
                {/* Widget 1: Active Students (Large Left) */}
                <div className="col-span-8 row-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0494e2]/10 blur-[50px]"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-slate-600 font-medium text-sm">
                        Active Enrollment
                      </h3>
                      <div className="text-3xl font-bold text-slate-900 mt-1">
                        12,450
                      </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-medium border border-green-200">
                      +12.5%
                    </div>
                  </div>

                  {/* Clean Bar Chart */}
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[35, 50, 45, 70, 60, 85, 55, 90, 80, 95, 75, 60].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="w-full bg-[#b4d8f0] rounded-t-sm hover:bg-[#90bbdf] transition-colors"
                          style={{ height: `${h}%` }}
                        ></div>
                      )
                    )}
                  </div>
                </div>

                {/* Widget 2: Retention Rate (Top Right) */}
                <div className="col-span-4 row-span-3 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Activity className="w-4 h-4" />
                    <span className="text-sm">Retention</span>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-slate-900 tracking-tight">
                      94.2<span className="text-lg text-slate-500">%</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[94.2%]"></div>
                  </div>
                </div>

                {/* Widget 3: System Log (Bottom Right - The "Alert") */}
                <div className="col-span-4 row-span-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      System Log
                    </span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>

                  <div className="space-y-3">
                    {/* Log Item 1 */}
                    <div className="flex items-start gap-3 p-2 rounded bg-white border border-slate-200">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-slate-800">
                          Enrollment synced
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Just now
                        </div>
                      </div>
                    </div>
                    {/* Log Item 2 */}
                    <div className="flex items-start gap-3 p-2 rounded bg-white border border-slate-200 opacity-70">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-slate-800">
                          Backup completed
                        </div>
                        <div className="text-[10px] text-slate-500">
                          2 hrs ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Widget 4: Quick Actions (Bottom Left Wide) */}
                <div className="col-span-8 row-span-2 flex items-center gap-4">
                  <div className="flex-1 h-full bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-800">
                          Faculty Portal
                        </div>
                        <div className="text-xs text-slate-500">
                          Manage access
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element: Subtle glow behind screen */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b4d8f0] to-cyan-200 rounded-2xl blur-xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
