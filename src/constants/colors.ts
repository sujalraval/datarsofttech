/**
 * Color Palette Constants
 * Centralized color definitions for the entire website
 */

export const COLORS = {
  // Primary Colors
  CERULEAN: "#0593e2",
  BLIZZARD_BLUE: "#b4dbf3",
  BREAKER_BAY: "#549c8c",
  HIPPIE_BLUE: "#4a91a9",

  // Named exports for easier imports
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
