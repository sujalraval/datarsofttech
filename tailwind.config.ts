import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom color palette
        cerulean: {
          DEFAULT: "#0593e2",
          50: "#e6f4ff",
          100: "#cceaff",
          200: "#99d5ff",
          300: "#66c1ff",
          400: "#33adff",
          500: "#0593e2", // Original hex
          600: "#0078c4",
          700: "#005da6",
          800: "#004288",
          900: "#00286a",
        },
        blizzardBlue: {
          DEFAULT: "#b4dbf3",
          50: "#f2f9fd",
          100: "#e6f3fb",
          200: "#cbe8f7",
          300: "#b0ddf3",
          400: "#95d2ee",
          500: "#b4dbf3", // Original hex
          600: "#89c0dd",
          700: "#5ea5c7",
          800: "#338ab1",
          900: "#266c8a",
        },
        breakerBay: {
          DEFAULT: "#549c8c",
          50: "#ebf6f3",
          100: "#d7ede6",
          200: "#ade0d2",
          300: "#83d4bd",
          400: "#6bc8ac",
          500: "#549c8c", // Original hex
          600: "#3e7d70",
          700: "#295f54",
          800: "#144038",
          900: "#0a2a24",
        },
        hippieBlue: {
          DEFAULT: "#4a91a9",
          50: "#eaf4f7",
          100: "#d5e9ef",
          200: "#abdce8",
          300: "#82cfe0",
          400: "#65b7ce",
          500: "#4a91a9", // Original hex
          600: "#37738a",
          700: "#25556b",
          800: "#13374c",
          900: "#0a2435",
        },
      },
    },
  },
  plugins: [],
};

export default config;
