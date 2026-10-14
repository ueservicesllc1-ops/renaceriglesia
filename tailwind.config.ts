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
        brand: {
          50: "#f0f6fe",
          100: "#ddeafc",
          200: "#c2dcfa",
          300: "#97c6f6",
          400: "#65a6f0",
          500: "#3f84e8",
          600: "#2a67dc",
          700: "#2251ca",
          800: "#1f43a4",
          900: "#1d3a82",
          950: "#0b152d",
        },
        gold: {
          50: "#fbf8ec",
          100: "#f6eece",
          200: "#eddba0",
          300: "#e2c26c",
          400: "#d9ab41",
          500: "#cb9229",
          600: "#af7220",
          700: "#8c531d",
          800: "#74431d",
          900: "#63391d",
        },
        surface: {
          dark: "#0b1120",
          card: "#131d33",
          border: "#1e2c4d",
          hover: "#192644",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
