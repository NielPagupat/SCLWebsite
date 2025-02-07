/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SCLYellow: '#DDD614',//yellow
        SCLBlue: '#05F9EF',//blue
        SCLLightBlue: '##210FF7',//light blue
        SCLWhite: '##FFFFFF',//white
      },

    },
  },
  plugins: [],
}

