/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cedarvilleCursive: ["Cedarville Cursive", "sans-serif"],
      dancing: ["Dancing Script", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      caveat: ["Caveat", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
