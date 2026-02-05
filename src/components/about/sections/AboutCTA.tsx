import { TYPOGRAPHY } from "@/styles/typography";
import { SECTION_SPACING } from "@/styles/spacing";
import { 
  Phone, 
  Mail, 
  Calendar, 
  ArrowRight, 
  Users,
  MessageCircle,
  Building2
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">

      <div className={`${SECTION_SPACING.container.max} ${SECTION_SPACING.container.horizontal} relative z-10`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-slate-900">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b4d8f0] border border-[#0494e2]/30 mb-8">
              <Users className="w-4 h-4 text-[#0494e2]" />
              <span className={`${TYPOGRAPHY.caption.sm} font-semibold uppercase tracking-wider text-[#0494e2]`}>
                Let&apos;s Connect
              </span>
            </div>
            
            <h2 className={`${TYPOGRAPHY.heading.xl} text-slate-900 font-bold mb-6 leading-tight`}>
              Ready to <span className="text-[#0494e2]">Transform</span> Your Institution?
            </h2>
            
            <p className={`${TYPOGRAPHY.body.lg} text-slate-600 mb-8 leading-relaxed`}>
              Join the 48+ institutions that trust us for their digital transformation. 
              Our team is ready to understand your unique requirements and build solutions 
              that drive real institutional success.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                  { value: "150+", label: "Successful Projects" },
                  { value: "10+", label: "Years Experience" },
                  { value: "99%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="bg-slate-100 rounded-xl p-4 border border-slate-200">
                    <div className={`${TYPOGRAPHY.heading.lg} font-black text-[#0494e2] mb-1`}>
                      {stat.value}
                    </div>
                    <div className={`${TYPOGRAPHY.caption.sm} text-slate-600 font-medium`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            
              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#0494e2]" />
                  </div>
                  <div>
                    <div className={`${TYPOGRAPHY.body.sm} font-semibold text-slate-900`}>Call Us</div>
                    <div className={`${TYPOGRAPHY.caption.sm} text-slate-600`}>+91 98765 43210</div>
                  </div>
                </div>
                        
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0494e2]" />
                  </div>
                  <div>
                    <div className={`${TYPOGRAPHY.body.sm} font-semibold text-slate-900`}>Email Us</div>
                    <div className={`${TYPOGRAPHY.caption.sm} text-slate-600`}>hello@datarsoft.com</div>
                  </div>
                </div>
                        
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#b4d8f0] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#0494e2]" />
                  </div>
                  <div>
                    <div className={`${TYPOGRAPHY.body.sm} font-semibold text-slate-900`}>Schedule Meeting</div>
                    <div className={`${TYPOGRAPHY.caption.sm} text-slate-600`}>Book a consultation</div>
                  </div>
                </div>
              </div>
            </div> {/* Close the left content column */}

          {/* Right Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#b4d8f0] flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#0494e2]" />
                </div>
                <h3 className={`${TYPOGRAPHY.heading.md} text-slate-900 font-bold`}>
                  Start Your Journey
                </h3>
                <p className={`${TYPOGRAPHY.body.sm} text-slate-600 mt-2`}>
                  Tell us about your institutional needs
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                    placeholder="your@institution.edu"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors"
                    placeholder="Name of your institution"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors bg-white"
                  >
                    <option value="">Select your position</option>
                    <option value="administrator">Administrator</option>
                    <option value="it-director">IT Director</option>
                    <option value="faculty">Faculty Member</option>
                    <option value="registrar">Registrar</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors bg-white"
                  >
                    <option value="">Select area of interest</option>
                    <option value="erp">ERP Implementation</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile Applications</option>
                    <option value="security">Cyber Security</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0494e2] focus:border-[#0494e2] transition-colors resize-vertical"
                    placeholder="Tell us about your institutional requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-[#0494e2] border-slate-300 rounded focus:ring-[#0494e2]"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600">
                    I agree to receive communications from DataSoft regarding institutional technology solutions. 
                    I understand I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#0494e2] to-cyan-500 hover:from-[#027abc] hover:to-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-600 justify-center">
                  <Building2 className="w-4 h-4" />
                  <span>Trusted by 48+ institutions nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}