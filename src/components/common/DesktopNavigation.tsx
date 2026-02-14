"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/routes";
import { COMPONENT_COLORS } from "@/styles";

export default function DesktopNavigation() {
  const pathname = usePathname();

  const navItems = [
    { key: "home", label: "Home", path: ROUTES.HOME },
    { key: "products", label: "Products", path: ROUTES.PRODUCTS },
    { key: "about", label: "About", path: ROUTES.ABOUT },
    { key: "services", label: "Services", path: "/services" },
    { key: "contact", label: "Contact Us", path: ROUTES.CONTACT },
  ];

  return (
    <>
      {navItems.map((item) => {
        const active =
          pathname === item.path || pathname.startsWith(item.path + "/");

        return (
          <Link
            key={item.key}
            href={item.path}
            className={`
              transition-colors duration-200
              ${COMPONENT_COLORS.navigation.link.base}
              ${COMPONENT_COLORS.navigation.link.hover}
              ${active ? COMPONENT_COLORS.navigation.link.active : ""}
              px-1.5 py-2 sm:px-2 md:px-2.5 lg:px-3 rounded-md text-xs sm:text-sm md:text-sm lg:text-base font-medium whitespace-nowrap
            `}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
