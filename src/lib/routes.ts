// src/lib/routes.ts

export const ROUTES = {
  HOME: "/",

  SOLUTIONS: "/#solutions",
  PRODUCTS: "/products",
  HOW_WE_WORK: "/#how-we-work",
  SECURITY: "/#security",
  CASE_STUDIES: "/#case-studies",

  AACHARYAA: "/solutions/aacharyaa-faculty-management",
  ALUMNI_PORTAL: "/solutions/alumni-portal",
  CONFERENCE_MANAGEMENT: "/solutions/conference-management",
  ONLINE_ADMISSION_PORTAL: "/solutions/online-admission-portal",
  INSTITUTIONAL_WEBSITE_PORTAL:
    "/solutions/institutional-website-campus-portal",
  ONLINE_RECRUITMENT_SYSTEM: "/solutions/online-recruitment-system",
  RESEARCH_JOURNAL: "/solutions/research-journal",
  STUDENT_INFORMATION_SYSTEM: "/solutions/student-information-system",
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
    key: "aacharyaa",
    label: "Aacharyaa",
    path: ROUTES.AACHARYAA,
  },
  {
    key: "online-admission",
    label: "Online Admission Portal",
    path: ROUTES.ONLINE_ADMISSION_PORTAL,
  },
  {
    key: "institutional-website",
    label: "Institutional Website Portal",
    path: ROUTES.INSTITUTIONAL_WEBSITE_PORTAL,
  },
  {
    key: "recruitment-system",
    label: "Online Recruitment System",
    path: ROUTES.ONLINE_RECRUITMENT_SYSTEM,
  },
  {
    key: "research-journal",
    label: "Research Journal",
    path: ROUTES.RESEARCH_JOURNAL,
  },
  {
    key: "student-information-system",
    label: "Student Information System",
    path: ROUTES.STUDENT_INFORMATION_SYSTEM,
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
