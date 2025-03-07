/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Agrega otras extensiones si tienes más tipos de archivos
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1A1C34",
        redBase: "#DD4445",
        palePink: "#E2CFCF",
        lightBlue: "#6E80B7",
        mediumYellow: "#EE9F43",
        redLight: "#EF8E84",
        paleBlue: "#B3C5E5",
        paleYellow: "#FFB666",
        darkBlue2: "#2B3049",
        darkBlue3: "#1A1C34",
      },
      
      screens: {
        xs: "360px",      // Teléfonos pequeños (Android más pequeños, iPhone SE)
        sm: "640px",      // Teléfonos medianos (iPhone 11, Samsung Galaxy S20)
        md: "768px",      // Tablets pequeñas (iPad Mini, Samsung Tab A)
        lg: "1024px",     // Tablets grandes y laptops pequeñas (iPad Pro, laptops de 13")
        xl: "1280px",     // Laptops estándar (MacBook Air de 13", laptops de hasta 15")
        xxl: "1536px",  // Laptops grandes y monitores pequeños (laptops de 17", monitores estándar)
        xxxl: "1920px"   // Monitores grandes (Full HD o superiores)
      },

      backgroundImage: {
        parallax : "url('../src/assets/foto3.jpg')",
      },

      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}