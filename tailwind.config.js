/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'cards':'1.875rem',
      'medium':'1.25rem',
      'inputs':'0.625rem',
      '5px':"0.313rem"
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      gray:colors.coolGray,
      white:colors.white,
      black:colors.black,
      dark_blue:"#001428",
      blue_300:"#9ECEF4",
      gray_300:"#787878",
      gray_400:"#5B5B5B",
      green_700:"#00AA61",
      green_500:"#00FF91",
      green_150:"#C7E9E5",
      green_50:"#ECF8F6",
      neutral_300:"#A6B0BF",
      neutral_200:"#E5ECF5",
      neutral_100:"#F2F7FA",
      text_100:"#71879C",
    },
    fontFamily: {
      'Roboto': ["Roboto"],
      'clash-regular': ["ClashGrotesk-Regular"],
      'clash-medium': ["ClashGrotesk-Medium"],
      'clash-semibold': ["ClashGrotesk-Semibold"],
      'clash-bold': ["ClashGrotesk-Bold"],
    },
  },
  plugins: [],
}
