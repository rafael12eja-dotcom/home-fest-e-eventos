import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // Definimos base relativo para gerar caminhos relativos no build
  // Isso permite abrir o site diretamente via file:// sem servidor
  base: "./",
  plugins: [react()],
  resolve: {
    alias: { '@': '/src' },            // atalho para imports
  },
  optimizeDeps: {
    exclude: ['lucide-react'],         // evita problemas de otimização no dev
  },
})
