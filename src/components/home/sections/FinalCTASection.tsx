import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { COLORS } from "@/constants/colors";
import { Phone, Mail, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Ambient Glow for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#b4d8f0]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div
        className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Text Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#b4d8f0] border border-[#0494e2]/30 text-[#0494e2] text-xs font-bold tracking-widest uppercase mb-6">
              Let&apos;s Build Together
            </span>
            <h2
              className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6`}
            >
              Ready to Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0494e2] to-[#0494e2]">
                Institution?
              </span>
            </h2>

            <p
              className={`${TYPOGRAPHY.body.lg} text-slate-600 leading-relaxed mb-8`}
            >
              Partner with DataSoft to build a secure, scalable, and compliant
              digital ecosystem. Our team is ready to guide you through every
              step of the ERP implementation.
            </p>

            {/* Stats & Trust Indicators */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {[
                { value: "48+", label: "Institutions Served" },
                { value: "150+", label: "ERP Projects" },
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index}>
                  <div
                    className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#0494e2] to-[#027abc] mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`${TYPOGRAPHY.caption.sm} text-slate-600 font-medium uppercase tracking-wide`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Assurance */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 text-slate-600">
              <div className="w-5 h-5 rounded-full bg-[#0494e2]/10 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#0494e2]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm">
                <strong className="text-slate-800">
                  No obligation consultation
                </strong>{" "}
                • Institution-specific solutions • Ongoing support
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Institution/Organization
                  </label>
                  <input
                    type="text"
                    id="institution"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                    placeholder="Name of your institution"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="erp">ERP Systems</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile Applications</option>
                    <option value="security">Cyber Security</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors resize-vertical"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-[#0494e2] border-slate-300 rounded focus:ring-[#0494e2]"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600">
                    I agree to receive communications from DataSoft and
                    understand that I can opt out at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#0494e2] hover:bg-[#027abc] text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
