import Link from "next/link";
import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import {
  ArrowRight,
  Terminal,
  ShieldCheck,
  Zap,
  CheckCircle,
} from "lucide-react";
import InteractiveHeroOS from "./InteractiveHeroOS";

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

          {/* RIGHT COLUMN - Interactive ERP OS Experience */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <InteractiveHeroOS />
          </div>
        </div>
      </div>
    </section>
  );
}
