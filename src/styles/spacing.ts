/**
 * Spacing System
 * Consistent spacing scale for margins, padding, and gaps
 */

export const SPACING = {
  // Base spacing unit (0.25rem = 4px)
  xs: "1",      // 0.25rem - 4px
  sm: "2",      // 0.5rem  - 8px
  md: "4",      // 1rem    - 16px
  lg: "6",      // 1.5rem  - 24px
  xl: "8",      // 2rem    - 32px
  xxl: "12",    // 3rem    - 48px
  xxxl: "16",   // 4rem    - 64px
  xxxx: "20",   // 5rem    - 80px
  xxxxx: "24",  // 6rem    - 96px
} as const;

export const SECTION_SPACING = {
  // Vertical section spacing
  section: {
    top: "pt-16 md:pt-20 lg:pt-24",
    bottom: "pb-16 md:pb-20 lg:pb-24",
    vertical: "py-16 md:py-20 lg:py-24",  // Using the 4/8/16/24/32/48/64px scale
  },

  // Horizontal container padding
  container: {
    horizontal: "px-4 sm:px-6 lg:px-8",
    max: "max-w-7xl mx-auto",
  },

  // Content spacing
  content: {
    tight: "space-y-3",    // 12px
    normal: "space-y-4",   // 16px
    loose: "space-y-6",    // 24px
    extra: "space-y-8",    // 32px
  }
} as const;

export type SpacingScale = keyof typeof SPACING;
export type SectionSpacing = keyof typeof SECTION_SPACING.section;
export type ContainerSpacing = keyof typeof SECTION_SPACING.container;
export type ContentSpacing = keyof typeof SECTION_SPACING.content;

/**
 * Helper functions for consistent spacing
 */
export const spacing = (scale: SpacingScale): string => `p-${SPACING[scale]}`;
export const margin = (scale: SpacingScale): string => `m-${SPACING[scale]}`;
export const padding = (scale: SpacingScale): string => `p-${SPACING[scale]}`;

export const horizontalPadding = (scale: SpacingScale): string => `px-${SPACING[scale]}`;
export const verticalPadding = (scale: SpacingScale): string => `py-${SPACING[scale]}`;

export const horizontalMargin = (scale: SpacingScale): string => `mx-${SPACING[scale]}`;
export const verticalMargin = (scale: SpacingScale): string => `my-${SPACING[scale]}`;

export default SPACING;