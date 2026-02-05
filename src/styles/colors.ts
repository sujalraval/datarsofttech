/**
 * Color Utility System
 * Production-ready color management with semantic naming and consistent application
 */

import { COLORS } from "@/constants/colors";

// Semantic color mappings for consistent UI application
export const SEMANTIC_COLORS = {
  // Text colors
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    tertiary: "text-gray-500",
    inverse: "text-white",
    brand: `text-[${COLORS.cerulean}]`,
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
  },

  // Background colors
  background: {
    primary: "bg-white",
    secondary: "bg-gray-50",
    tertiary: "bg-gray-100",
    inverse: "bg-gray-900",
    brand: `bg-[${COLORS.cerulean}]`,
    brandLight: `bg-[${COLORS.blizzardBlue}]`,
    success: "bg-green-50",
    warning: "bg-yellow-50",
    error: "bg-red-50",
  },

  // Border colors
  border: {
    primary: "border-gray-200",
    secondary: "border-gray-100",
    tertiary: "border-gray-300",
    brand: `border-[${COLORS.cerulean}]`,
    success: "border-green-200",
    warning: "border-yellow-200",
    error: "border-red-200",
  },

  // Interactive states
  interactive: {
    hover: {
      brand: `hover:bg-[${COLORS.primaryBlue}]`,
      brandDark: "hover:bg-blue-700",
      secondary: "hover:bg-gray-50",
      inverse: "hover:bg-gray-800",
    },
    focus: {
      brand: `focus:ring-[${COLORS.primaryBlue}]`,
      ring: "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    },
    active: {
      brand: "active:bg-blue-800",
    },
  },
} as const;

// Gradient definitions
export const GRADIENTS = {
  brand: `from-[${COLORS.primaryBlue}] to-[${COLORS.primaryBlueLight}]`,
  subtle: "from-gray-50 to-gray-100",
  dark: "from-gray-900 to-gray-800",
} as const;

// Shadow utilities
export const SHADOWS = {
  sm: "shadow-sm",
  md: "shadow",
  lg: "shadow-lg",
  xl: "shadow-xl",
  inner: "shadow-inner",
  none: "shadow-none",
} as const;

// Helper functions for dynamic color application
export const applyColor = (
  colorToken: string,
  property: "text" | "bg" | "border"
): string => {
  return `${property}-${colorToken}`;
};

export const applyGradient = (gradientName: keyof typeof GRADIENTS): string => {
  return `bg-gradient-to-r ${GRADIENTS[gradientName]}`;
};

export const applyShadow = (shadowName: keyof typeof SHADOWS): string => {
  return SHADOWS[shadowName];
};

// Component-specific color presets
export const COMPONENT_COLORS = {
  button: {
    primary: {
      base: `bg-[${COLORS.cerulean}] text-white`,
      hover: "hover:bg-blue-700",
      focus:
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    },
    secondary: {
      base: "bg-white text-gray-900 border border-gray-300",
      hover: "hover:bg-gray-50",
      focus:
        "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
    },
    ghost: {
      base: "text-gray-700 hover:bg-gray-100",
      focus:
        "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
    },
  },

  card: {
    base: "bg-white border border-gray-200",
    hover: "hover:shadow-lg hover:-translate-y-1",
    focus:
      "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
  },

  navigation: {
    link: {
      base: "text-white transition-colors",
      hover: "hover:text-blue-300",
      active: "text-blue-400",
    },
  },
} as const;

export default SEMANTIC_COLORS;
