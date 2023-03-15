/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inria-serif': ['Inria Serif', 'serif'],
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        '-main-bg': '#BF8791',
        '-secondary-bg': '#FAEBEC',
        '-main-fg': '#FFFFFF',
        '-secondary-fg': '#201E1D',
        '-footer-fg': '#0A142F',
        '-footer-fg-lightest': '#2B3D51',
        '-accent-rose': '#A04656',
        '-accent-beige': '#BE9783',
        '-accent-border': '#E6E7EA',
      },
    },
  },
  plugins: [],
};
