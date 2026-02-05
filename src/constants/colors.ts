/**
 * Color Palette Constants
 * Centralized color definitions for the entire website
 */

export const COLORS = {
  // Institutional Colors
  PRIMARY_BLUE: "#0494e2",
  PRIMARY_BLUE_LIGHT: "#b4d8f0",
  PRIMARY_BLUE_DARK: "#027abc",
  NAVY_DARK: "#0F172A",
  NAVY: "#334155",
  NAVY_LIGHT: "#94A3B8",
  SURFACE: "#F1F5F9",
  SURFACE_BORDER: "#E2E8F0",
  SUCCESS_GREEN: "#16A34A",
  TEAL: "#22B8B8",

  // Legacy Colors (keep for compatibility)
  CERULEAN: "#0593e2",
  BLIZZARD_BLUE: "#b4dbf3",
  BREAKER_BAY: "#549c8c",
  HIPPIE_BLUE: "#4a91a9",

  // Named exports for easier imports
  primaryBlue: "#0494e2",
  primaryBlueLight: "#b4d8f0",
  primaryBlueDark: "#027abc",
  navyDark: "#0F172A",
  navy: "#334155",
  navyLight: "#94A3B8",
  surface: "#F1F5F9",
  surfaceBorder: "#E2E8F0",
  successGreen: "#16A34A",
  teal: "#22B8B8",
  cerulean: "#0593e2",
  blizzardBlue: "#b4dbf3",
  breakerBay: "#549c8c",
  hippieBlue: "#4a91a9",
} as const;

export type ColorName = keyof typeof COLORS;

/**
 * Helper function to get a color by name
 */
export const getColor = (name: ColorName): string => {
  return COLORS[name];
};

/**
 * Type-safe color palette object
 */
export default COLORS;
