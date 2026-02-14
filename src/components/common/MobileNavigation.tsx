"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { COMPONENT_COLORS } from "@/styles";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { key: "home", label: "Home", path: ROUTES.HOME },
    { key: "products", label: "Products", path: ROUTES.PRODUCTS },
    { key: "about", label: "About", path: ROUTES.ABOUT },
    { key: "services", label: "Services", path: "/services" },
    { key: "contact", label: "Contact Us", path: ROUTES.CONTACT },
  ];

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg text-white hover:bg-white/10 md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Drawer */}
        <aside
          className={`
            fixed right-0 top-0
            h-[100svh] w-full max-w-[320px] sm:max-w-[380px]
            bg-slate-900/95 backdrop-blur-xl
            flex flex-col shadow-2xl
            transition-transform duration-300 ease-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-5 border-b border-white/10">
            <Link href={ROUTES.HOME} onClick={closeMenu}>
              <img src="/logo.png" className="h-8 w-auto" alt="logo" />
            </Link>

            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const active =
                  pathname === item.path ||
                  pathname.startsWith(item.path + "/");

                return (
                  <li key={item.key}>
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={`
                        block rounded-lg px-4 py-3 text-base font-medium
                        transition-all duration-200
                        ${COMPONENT_COLORS.navigation.link.base}
                        ${
                          active
                            ? "bg-white/15 text-[#0494e2] font-semibold"
                            : "hover:bg-white/10 hover:text-[#0494e2]"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}
          <div className="border-t border-white/10 p-5">
            <Link
              href={ROUTES.CONTACT}
              onClick={closeMenu}
              className="block w-full rounded-xl bg-[#0494e2] py-3 text-center font-semibold text-white hover:bg-[#027abc]"
            >
              Get Quote
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
