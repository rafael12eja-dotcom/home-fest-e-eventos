/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        black: "#0B0B0B",
        gold: "#D4AF37",
        rose: "#C08497",

        // Suporte/contraste
        offwhite: "#F7F5F2",

        // Mantemos 'detail' para bordas/sutilezas (corrige o erro do border-detail)
        detail: "#E5E7EB", // cinza-claro neutro (equiv. Tailwind slate-200)
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        lato: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
