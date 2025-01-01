import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light_background: 'var(--light_background)',
        background: 'var(--background)',
        accent: 'var(--accent)',
        text_general: 'var(--text_general)'
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
