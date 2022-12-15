/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,cjs,jsx,sass}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#cc2200',
          800: '#e33400',
          700: '#f13c00',
          600: '#FF4500',
          500: '#ff4a05',
          400: '#ff6835',
          300: '#ff855b',
          200: '#ffa88a',
          100: '#ffcbb8',
          50: '#fee8e6',
        }
      },
      fontFamily: {
        body: ['"IBM Plex Sans"', "sans-serif"],
      },
      boxShadow: {
        'post': ['0px 3px 8px rgba(0, 0, 0, 0.16)'],
        'navi': ['0px 2px 16px rgba(0, 0, 0, 0.08)'],
        'spread': ['0px 0px 0px 4px rgba(254, 232, 230, 1)'],
      },
    },
  },
  plugins: [],
};
