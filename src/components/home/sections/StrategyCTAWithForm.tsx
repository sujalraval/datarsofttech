"use client";

import { useState } from "react";
import { PhoneCall, CheckCircle, X } from "lucide-react";

export default function StrategyCTAWithForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CTA SECTION (NO BG COLOR) */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-black font-bold">
            Ready to Start Your Free Strategy Call?
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Get expert guidance, clear next steps, and a custom roadmap for your
            business — no obligation.
          </p>

          {/* BENEFITS */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              "30-minute expert consultation",
              "Actionable growth recommendations",
              "No sales pressure",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-emerald-600" size={20} />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition shadow-lg"
            >
              <PhoneCall size={22} />
              Book Free 30-Min Call
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-10 shadow-2xl text-slate-900">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-800"
            >
              <X size={22} />
            </button>

            {/* HEADER */}
            <h3 className="text-3xl font-bold">Book Your Free Consultation</h3>
            <p className="mt-2 text-slate-600">
              Share a few details and our expert will contact you shortly.
            </p>

            {/* FORM */}
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="input" />

              <input type="email" placeholder="Your Email" className="input" />

              <input type="tel" placeholder="Phone Number" className="input" />

              <select className="input">
                <option value="">Select Service</option>
                <option>Web Development</option>
                <option>Mobile Applications</option>
                <option>Custom Software</option>
                <option>Cloud Solutions</option>
                <option>Digital Marketing</option>
              </select>

              <textarea
                rows={4}
                placeholder="Briefly describe your requirement"
                className="input md:col-span-2"
              />

              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Book Free Call →
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
