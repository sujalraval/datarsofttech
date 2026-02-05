"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { NAVIGATION_ITEMS, ROUTES } from "@/lib/routes";
import { COMPONENT_COLORS } from "@/styles";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        onClick={toggleMenu}
        className="
          lg:hidden p-2 rounded-lg
          text-white hover:bg-white/10
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in panel */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-80 max-w-[calc(100vw-2rem)]
          bg-slate-900 shadow-xl
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Close navigation"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Primary navigation */}
          <nav className="flex-1">
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
                      block py-4 px-4 rounded-xl text-base font-medium
                      transition-all duration-200
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

          {/* Enterprise CTAs */}
          <div className="pt-6 pb-8 border-t border-white/10 space-y-3">
            {/* Primary CTA */}
            <Link
              href={ROUTES.STRATEGY_CALL}
              onClick={closeMenu}
              className={`
                block w-full py-3 px-4 rounded-xl text-center
                font-semibold text-white transition-all duration-200
                ${COMPONENT_COLORS.button.primary.base.replace("bg-", "")}
                ${COMPONENT_COLORS.button.primary.hover}
                ${COMPONENT_COLORS.button.primary.focus}
              `}
            >
              Request Strategy Call
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
