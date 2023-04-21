/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  fontFamily: {
    oxygen: ["Oxygen", "sans-serif"],
  },

  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
