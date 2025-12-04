/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta Premium Home Fest & Eventos
        "hf-cream": "#FFF7EC",        // Bege creme principal
        "hf-gold": "#D9A441",          // Dourado elegante
        "hf-brown": "#4A3F35",         // Marrom café
        "hf-offwhite": "#FDF7EF",      // Off-white suave
        
        // Variações para gradientes e hover states
        "hf-gold-light": "#E8C76A",    // Dourado claro
        "hf-gold-dark": "#C99A2F",     // Dourado escuro
        "hf-cream-dark": "#F3EADD",    // Bege escuro
        
        // Compatibilidade com código existente (mapeamento)
        black: "#0B0B0B",
        gold: "#D9A441",
        rose: "#F0C9C9",
        offwhite: "#FDF7EF",
        detail: "#E5E7EB",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        lato: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(74, 63, 53, 0.08)',
        'premium-lg': '0 30px 80px rgba(74, 63, 53, 0.12)',
        'gold': '0 16px 48px rgba(217, 164, 65, 0.25)',
        'gold-lg': '0 20px 60px rgba(217, 164, 65, 0.35)',
      },
    },
  },
  plugins: [],
}
