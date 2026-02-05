import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function DesktopNavigation() {
  return (
    <>
      <Link href={ROUTES.HOME} className="nav-link">
        Home
      </Link>

      <Link href={ROUTES.PRODUCTS} className="nav-link">
        Products
      </Link>

      <Link href={ROUTES.ABOUT} className="nav-link">
        About
      </Link>

      <Link href="/services" className="nav-link">
        Services
      </Link>

      <Link href={ROUTES.CONTACT} className="nav-link">
        Contact Us
      </Link>
    </>
  );
}
