"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS, ROUTES } from "@/lib/routes";
import { COMPONENT_COLORS } from "@/styles";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.key}
          href={item.path}
          className={`
            transition-colors duration-200
            ${COMPONENT_COLORS.navigation.link.base}
            ${COMPONENT_COLORS.navigation.link.hover}
            ${pathname === item.path ? COMPONENT_COLORS.navigation.link.active : ""}
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}