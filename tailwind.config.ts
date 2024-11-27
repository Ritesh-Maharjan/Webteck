import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 8px))" },
        },
      },
      animation: {
        slide: "slide 25s linear infinite", // Set the duration and timing function
      },
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"], // Add Nunito Sans as the default sans font
      },
    },
  },
  plugins: [],
};
export default config;
