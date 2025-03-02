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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily:{
        tajwal : ["Tajawal", 'serif'],
        playfair: ["Playfair", 'serif'],
        cinzel: ["Cinzel", 'serif'],
        libre: ["Libre Baskerville", 'serif']

      }
    },
  },
  plugins: [],
} satisfies Config;
