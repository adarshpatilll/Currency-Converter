/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      scrollbar: ['hidden'],
    },
  },

  plugins: [],

  corePlugins: {
    preflight: true,
  },
  
  variants: {
    scrollbar: ['rounded']
  }
}