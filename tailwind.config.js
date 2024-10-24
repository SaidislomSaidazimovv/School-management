/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kubmh: ["KubmhSans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          5: "#FCFAFA",
          100: '#A7A7A7',
          200: '#8A8A8A',
          400: "#4F4F4F",
          800: '#1A1A1A'
        },
        primary: {
          DEFAULT: "#667085",
          5:"#2D88D4",
          10: "#152259",
          15: "#BDBDBD",
          20: '#509CDB',
          30: "#EFF3FA",
          40: '#B9D7F1'
        }
      },
    },
  },
  plugins: [],
};
