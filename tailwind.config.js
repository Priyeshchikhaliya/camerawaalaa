/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['"Futura Book"', "sans-serif"],
        futuraBold: ['"Futura Bold"', "sans-serif"],
        futuraBook: ['"Futura Book"', "sans-serif"],
        futuraCondBold: ['"Futura CondBold"', "sans-serif"],
        futuraCondBook: ['"Futura CondBook"', "sans-serif"],
        futuraCondExtraBold: ['"Futura CondExtraBold"', "sans-serif"],
        futuraMedium: ['"Futura Medium"', "sans-serif"],
        futuraDemi: ['"Futura Demi"', "sans-serif"],
        futuraExtraBold: ['"Futura ExtraBold"', "sans-serif"],
        futuraHeavy: ['"Futura Heavy"', "sans-serif"],
        futuraLight: ['"Futura Light"', "sans-serif"],
        AileronsNormal: ['"Ailerons Normal"', "sans-serif"],
        QuahonNormal: ['"Quahon Normal"', "sans-serif"],
        NewakeFontNormal: ['"NewakeFont Normal"', "sans-serif"],
        BELOGONormal: ['"BELOGO Normal"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
