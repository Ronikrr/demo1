/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to enable Tailwind in your src folder
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1536px',
        'lg': '1280px',
        'md': '1024px',
        'sm': '768px',
      },
      boxShadow: {
        'bottom-xl': '0 10px 15px rgba(0, 0, 0, 0.3)', // Creates a shadow on the bottom only
      
        'top-xl': '0 -10px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}


