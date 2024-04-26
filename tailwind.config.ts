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
        body: "rgb(var(--primary-text-rgb))",
        bodySecondary: "rgb(var(--secondary-text-rgb))",
        primary: "rgb(var(--primary-rgb))",
        secondary: "rgb(var(--secondary-rgb))",
        scrollHandle: "rgb(var(--secondary-text-rgb))",
        scrollHandleDark: "rgb(var(--secondary-text-rgb))",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu Mono", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
