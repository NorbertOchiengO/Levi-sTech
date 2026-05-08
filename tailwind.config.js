/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne:   ["Syne", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        navy:    "#0B0F19",
        card:    "#1A2235",
        blue:    "#3B82F6",
        violet:  "#7C3AED",
        teal:    "#14B8A6",
        cyan:    "#06B6D4",
      },
    },
  },
  plugins: [],
};
