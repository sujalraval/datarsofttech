import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";
import DesktopNavigation from "@/components/common/DesktopNavigation";
import MobileNavigation from "@/components/common/MobileNavigation";
import { ROUTES } from "@/lib/routes";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div
          className="
            mt-2 sm:mt-4
            flex h-14 sm:h-16 items-center justify-between
            rounded-lg sm:rounded-xl
            px-3 sm:px-4 lg:px-6
            bg-slate-900/80 backdrop-blur-md
            ring-1 ring-white/10
            shadow-lg shadow-black/20
          "
        >
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center shrink-0">
            <OptimizedImage
              src="/logo.png"
              alt="Datarsoft"
              width={128}
              height={36}
              priority
              className="w-24 sm:w-28 lg:w-32 h-auto object-contain"
              showSkeleton={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-white items-center gap-8">
            <DesktopNavigation />
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* CTA (VISIBLE ON ALL SCREENS, SMALL ON MOBILE) */}
            <Link
              href={ROUTES.CONTACT}
              className="
                rounded-md
                px-3 py-1.5
                text-xs sm:text-sm
                font-semibold
                bg-[#0494e2] text-white
                hover:bg-[#027abc] transition
                whitespace-nowrap
              "
            >
              Get Quote
            </Link>

            {/* Hamburger */}
            <div className="lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
