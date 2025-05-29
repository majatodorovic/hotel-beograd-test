import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1670px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: { 800: "#59002C", 900: "#0E1A1A" },
        gray: { 200: "#F5F0EB" },
        brown: { 400: "#aa8453" },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { transform: "1" },
        },
      },
    },
  },

  plugins: [],
};
export default config;
