/**
 * Typography System
 * Production-ready typographic scale with consistent hierarchy
 */

export const TYPOGRAPHY = {
  // Display headings (hero sections)
  display: {
    xl: "text-5xl font-bold text-[#0F172A] leading-tight", // matches new style guide: text-5xl
    lg: "text-4xl font-bold text-[#0F172A] leading-tight", // matches new style guide: text-4xl
    md: "text-3xl font-bold text-[#0F172A] leading-tight", // matches new style guide: text-3xl
  },

  // Section headings
  heading: {
    xl: "text-4xl font-bold text-[#0F172A]", // H1: text-4xl font-bold
    lg: "text-3xl font-semibold text-[#0F172A]", // H2: text-3xl font-semibold
    md: "text-2xl font-semibold text-[#0F172A]", // H3: text-2xl font-semibold
    sm: "text-xl font-semibold text-[#0F172A]", // Additional: text-xl font-semibold
  },

  // Content headings
  content: {
    lg: "text-lg font-semibold text-[#334155] leading-relaxed", // Body Large: text-lg
    md: "text-base font-semibold text-[#334155] leading-relaxed", // Body: text-base
    sm: "text-sm font-semibold text-[#334155] leading-relaxed", // Small: text-sm
  },

  // Body text
  body: {
    lg: "text-lg text-[#334155] leading-relaxed", // Body Large: text-lg
    md: "text-base text-[#334155] leading-relaxed", // Body: text-base
    sm: "text-sm text-[#334155] leading-relaxed", // Small: text-sm
  },

  // Captions and metadata
  caption: {
    md: "text-sm text-[#94A3B8] leading-relaxed", // Small: text-sm
    sm: "text-xs text-[#94A3B8] leading-relaxed", // XS: text-xs
  },

  // Utility classes
  utils: {
    uppercase: "uppercase tracking-wide",
    lowercase: "lowercase",
    capitalize: "capitalize",
    truncate: "truncate",
  },
} as const;

export type TypographyVariant = keyof typeof TYPOGRAPHY;
export type TypographySize<T extends TypographyVariant> =
  keyof (typeof TYPOGRAPHY)[T];

/**
 * Helper function to get typography classes
 */
export const getTypographyClasses = <T extends TypographyVariant>(
  variant: T,
  size: TypographySize<T>
): string => {
  return TYPOGRAPHY[variant][size as keyof (typeof TYPOGRAPHY)[T]] as string;
};

export default TYPOGRAPHY;
