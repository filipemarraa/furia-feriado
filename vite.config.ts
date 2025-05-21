import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Importação removida

// https://vitejs.dev/config/ - Configuração do Vite
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Plugin removido
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
