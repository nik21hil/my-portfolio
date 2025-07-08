/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(text|bg|hover:bg)-(green|indigo|pink|purple|violet|teal|cyan|fuchsia|amber|lime|slate|rose|emerald|yellow|orange|red)-(300|500|600)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
