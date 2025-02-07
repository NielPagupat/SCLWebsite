/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SCLYellow: '#fcfab1',//yellow
        SCLLightBlue: '#05F9EF',//blue
        SCLBlue: '#0c065c',//light blue
        SCLWhite: '#FFFFFF',//white
        PaperBlack: "rgba(189, 187, 188, 0.10)"
      },
      fontFamily: {
        tomorrow: ['Tomorrow', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

