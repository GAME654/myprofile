/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#7AB2D3",
        primaryContent: "B9E5E8",
        primarySubcontent: "B9E5E8",
        primaryBase: "B9E5E8",
        primaryAccent: "4A628A",
        primaryBg:"E7E7DE",
      }
    },
  },
  plugins: [],
}

