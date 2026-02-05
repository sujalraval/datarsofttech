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

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          lg:hidden p-2 rounded-lg
          text-white hover:bg-white/10
          transition
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
        aria-label="Open navigation"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Root */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Slide-in Panel */}
          <aside
            className="
              absolute right-0 top-0
              h-[100dvh] w-80 max-w-[90vw]
              bg-slate-900 shadow-2xl
              flex flex-col
              animate-slide-in
            "
            role="dialog"
            aria-modal="true"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">Navigation</h2>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-white hover:bg-white/10"
                aria-label="Close navigation"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-2">
                {[
                  { key: "home", label: "Home", path: ROUTES.HOME },
                  { key: "products", label: "Products", path: ROUTES.PRODUCTS },
                  { key: "about", label: "About", path: ROUTES.ABOUT },
                  { key: "services", label: "Services", path: "/services" },
                  { key: "contact", label: "Contact Us", path: ROUTES.CONTACT },
                ].map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={`
                        block rounded-xl px-4 py-3 text-base font-medium
                        transition
                        ${COMPONENT_COLORS.navigation.link.base}
                        ${
                          pathname === item.path
                            ? "bg-white/10 text-[#0494e2]"
                            : "hover:bg-white/5 hover:text-[#0494e2]"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTAs */}
            <div className="border-t border-white/10 px-6 py-6 space-y-3">
              <Link
                href={ROUTES.CONTACT}
                onClick={closeMenu}
                className="block w-full rounded-xl bg-[#0494e2] py-3 text-center font-semibold text-white hover:bg-[#027abc]"
              >
                Get Quote
              </Link>

              <Link
                href={ROUTES.STRATEGY_CALL}
                onClick={closeMenu}
                className="block w-full rounded-xl border border-white/20 py-3 text-center font-semibold text-white hover:bg-white/10"
              >
                Request Strategy Call
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
