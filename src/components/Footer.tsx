"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to your newsletter service
    console.log("Subscribing email:", email);
    setIsSubscribed(true);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="DatarSoft" className="h-10" />
              {/* <span className="text-xl font-bold">DatarSoft</span> */}
            </div>

            <p className="text-white/90 leading-relaxed">
              Leading technology company delivering custom ERP systems and digital 
              platforms for universities, colleges, and government institutions.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-white/10 hover:bg-white/20 transition"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Solutions</h4>
            <ul className="space-y-3 text-white/90">
              {[
                "Website Development",
                "Recruitment Portal",
                "Student Information System & LMS",
                "Online Admission Portal",
                "Placement Management System",
                "Office Management & HRMS",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-white/90">
              {[
                "Home",
                "About Us",
                "Contact",
                "Get Quote",
                "Privacy Policy",
                "Terms of Service",
                "Cookies Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER + CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Stay Connected</h4>

            {/* NEWSLETTER */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              
              {isSubscribed ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-100">
                  <p className="text-sm font-medium">Thank you for subscribing!</p>
                  <p className="text-xs mt-1">You&apos;ll receive our latest updates and insights.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center bg-white/10 rounded-full overflow-hidden border border-white/20">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-5 py-3 bg-transparent text-sm text-white 
                    placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-4 py-3 text-white hover:text-white/80 transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send size={18} />
                  </button>
                </form>
              )}
              
              <p className="text-white/80 text-xs mt-3">
                Get industry insights, case studies, and technology updates delivered to your inbox.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm text-white/90">
                <li className="flex gap-3 items-center">
                  <Phone size={16} className="flex-shrink-0" />
                  <div>
                    <a href="tel:+918320566649" className="hover:text-white transition">+91 8320566649</a>
                    <div className="text-xs text-white/70 mt-1">Mon-Fri 9:00 AM - 6:00 PM IST</div>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={16} className="flex-shrink-0" />
                  <a href="mailto:info@datarsoft.tech" className="hover:text-white transition">info@datarsoft.tech</a>
                </li>
                <li className="flex gap-3">
                  <MapPin size={16} className="flex-shrink-0 mt-1" />
                  <div>
                    311, University Plaza, Navrangpura<br />
                    Ahmedabad – 380009, Gujarat, India
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90">
          <p>© 2026 DatarSoft. All rights reserved.</p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((item, index) => (
              <a key={index} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
