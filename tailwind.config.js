/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SCLYellow: '#e2db28',//yellow
        SCLLightBlue: '#05F9EF',//blue
        SCLBlue: '#0c065c',//light blue
        SCLWhite: '#FFFFFF',//white
        PaperBlack: "rgba(78, 110, 88, 0.10)",
        Font : '#000000',
        Border: '#88cda5',
        lightgreen: '#57b07f',
        Nav: '#37d085'
      },
      fontFamily:{
        tomorrow: ['Tomorrow', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

