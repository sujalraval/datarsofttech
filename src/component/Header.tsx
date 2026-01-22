"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-3 shadow-lg ring-1 ring-black/5">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <div className="rounded-lg bg-[#f1f5f9] px-2 py-1">
              <Image
                src="/logo.png"
                alt="Datarsoft Logo"
                width={130}
                height={36}
                className="object-contain"
              />
            </div>
          </Link>

          {/* CENTER MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/services" className="hover:text-cerulean">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-cerulean">
              Portfolio
            </Link>
            <Link href="/pricing" className="hover:text-cerulean">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-cerulean">
              FAQ
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <Link
              href="/contact"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
