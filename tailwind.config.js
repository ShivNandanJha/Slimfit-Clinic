/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        Alegrya: ["Alegrya", "serif"],
        Playfair: ["Playfair Display", "serif"],
        Calgary: ["Calgary"],
        Asap: ["Asap"],
      },
    },
  },
  plugins: [require("daisyui")],
};
