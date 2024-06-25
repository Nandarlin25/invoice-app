/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    container : {
      center : true
    },
    fontFamily : {
      sans : ["Montserrat","Padauk", "sans-serif"]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

