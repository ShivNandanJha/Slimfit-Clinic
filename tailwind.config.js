  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "Alegrya": ['Alegrya', 'serif'],
        "Playfair":["Playfair Display", 'serif']
    } 
    },
  },
  plugins: [
    require('daisyui'),
  ],
}