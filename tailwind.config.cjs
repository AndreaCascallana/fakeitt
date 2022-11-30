/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,cjs,jsx,sass}"],
  theme: {
    extend: {
      colors: {
        'primary900': '#cc2200',
        'primary800': '#e33400',
        'primary700': '#f13c00',
        'primary': '#FF4500',
        'primary500': '#ff4a05',
        'primary400': '#ff6835',
        'primary300': '#ff855b',
        'primary200': '#ffa88a',
        'primary100': '#ffcbb8',
        'primary50': '#fee8e6',
      },
      fontFamily: {
        body: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        'post': ['0px 3px 8px rgba(0, 0, 0, 0.16)'],
        'navi': ['0px 8px 32px rgba(0, 0, 0, 0.16)']
      }
    },
  },
  plugins: [],
};
