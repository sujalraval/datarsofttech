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

  // Handle body scroll and focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Set focus to the close button when menu opens
      const closeBtn = document.querySelector('[aria-label="Close navigation"]') as HTMLElement;
      closeBtn?.focus();
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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out"
            onClick={closeMenu}
          />

          {/* Slide-in Panel */}
          <aside
            className="
              absolute right-0 top-0
              h-[100dvh] w-full max-w-[90vw] min-w-[280px]
              bg-slate-900/90 backdrop-blur-lg
              flex flex-col
              transition-all duration-300 ease-out
              transform translate-x-full
              shadow-2xl
              data-[state=open]:translate-x-0
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
              <div className="flex items-center">
                <Link href={ROUTES.HOME} className="flex items-center" onClick={closeMenu}>
                  <img 
                    src="/logo.png" 
                    alt="Datarsoft" 
                    width={100} 
                    height={28} 
                    className="w-20 h-auto object-contain"
                  />
                </Link>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition"
                aria-label="Close navigation"
                aria-controls="mobile-menu-nav"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav id="mobile-menu-nav" className="flex-1 overflow-y-auto px-6 pt-6 pb-8" aria-label="mobile navigation">
              <ul className="space-y-1">
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
                      onClick={(e) => {
                        closeMenu();
                        // Smooth scroll to top after navigation
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`
                        block rounded-lg px-4 py-3.5 text-base font-medium
                        transition-all duration-200
                        ${COMPONENT_COLORS.navigation.link.base}
                        ${
                          pathname === item.path
                            ? "bg-white/15 text-[#0494e2] font-semibold"
                            : "hover:bg-white/10 hover:text-[#0494e2]"
                        }
                        border-l-2 border-transparent
                        hover:border-[#0494e2]
                      `}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTAs */}
            <div className="border-t border-white/10 px-6 py-6">
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
      )}
    </>
  );
}
