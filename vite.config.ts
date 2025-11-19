import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,

    // ⭐ ADD THIS ⭐
    proxy: {
      "/google-sheet": {
        target:
          "https://script.google.com/macros/s/AKfycbzLDy_TXDUbTYombPapcegVQjznkJCESTP56zwIz4qMmvD9yG0DnTKn4UY6N_Iq9Ceq/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/google-sheet/, ""),
      },
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
