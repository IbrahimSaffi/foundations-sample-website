/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      heading:"RGB(254, 254, 254)",
      para:"rgba(255, 255, 255, 0.6)"
    },
    background:{
     btnColor: "linear-gradient(121.21deg, rgb(82, 148, 255) 7.78%, rgb(30, 255, 120) 118.78%)"
    },
    gradientColorStops:{
      btnStart: "rgb(82, 148, 255) 7.78%",
      btnEnd :"rgb(30, 255, 120) 118.78%"
    }
  },
  plugins: [],
}
