"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md text-white shadow-lg px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={128}
            height={36}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-white text-slate-900 px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md text-white shadow-lg px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg text-white/90 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
