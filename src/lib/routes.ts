// src/lib/routes.ts

export const ROUTES = {
  HOME: "/",

  SOLUTIONS: "/#solutions",
  PRODUCTS: "/products",
  HOW_WE_WORK: "/#how-we-work",
  SECURITY: "/#security",
  CASE_STUDIES: "/#case-studies",

  ABOUT: "/about",
  CONTACT: "/contact",

  // CTA
  STRATEGY_CALL: "/contact",
} as const;

export const NAVIGATION_ITEMS = [
  {
    key: "solutions",
    label: "Solutions",
    path: ROUTES.SOLUTIONS,
  },
  {
    key: "products",
    label: "Products",
    path: ROUTES.PRODUCTS,
  },
  {
    key: "how-we-work",
    label: "How We Work",
    path: ROUTES.HOW_WE_WORK,
  },
  {
    key: "security",
    label: "Security",
    path: ROUTES.SECURITY,
  },
  {
    key: "case-studies",
    label: "Case Studies",
    path: ROUTES.CASE_STUDIES,
  },
  {
    key: "about",
    label: "About",
    path: ROUTES.ABOUT,
  },
  {
    key: "contact",
    label: "Contact",
    path: ROUTES.CONTACT,
  },
] as const;
