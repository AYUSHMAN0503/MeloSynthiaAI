/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gold: '#FFD700',
        purple: '#A855F7',
        purple: {
          '50': '#f4f1f9',
          '100': '#d6cde6',
          '200': '#b9a9d4',
          '300': '#9b85c1',
          '400': '#7e61af',
          '500': '#624d9d', 
          '600': '#4b3d7b',
          '700': '#362d5a',
          '800': '#201d38',
          '900': '#0a0e17',
        },

        
        "gray-20": "#F8F4EB",
        "gray-30": "#89CFF0",
        
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "purple-500": "#8B5CF6",
        "gold-500": "#d4af37",
        "gold-200": "#FFECB3",

      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/3669619.jpg')" }),
    
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};