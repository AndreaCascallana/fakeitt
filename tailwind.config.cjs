/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,cjs,jsx,sass}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        'post': ['0px 3px 8px rgba(0, 0, 0, 0.16)'],
      }
    },
  },
  plugins: [],
};
