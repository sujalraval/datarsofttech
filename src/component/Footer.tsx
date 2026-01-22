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
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#549c8c" }}>
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
              Leading technology company delivering innovative software, web
              development, and digital transformation solutions for education
              and enterprises.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-[#3f7f76] hover:bg-[#2f615a] transition"
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
            <div className="flex items-center bg-[#3f7f76] rounded-full overflow-hidden mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-transparent text-sm text-white 
                placeholder:text-white/70 focus:outline-none"
              />
              <button className="px-4 hover:text-white/80">
                <ArrowRight />
              </button>
            </div>

            {/* CONTACT INFO */}
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex gap-3">
                <Phone size={16} />
                +91 8320566649
              </li>
              <li className="flex gap-3">
                <Mail size={16} />
                info@datarsoft.tech
              </li>
              <li className="flex gap-3">
                <MapPin size={16} />
                311, University Plaza, Navrangpura, Ahmedabad – 380009
              </li>
            </ul>
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
