import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // devSourcemap: true,
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
      },
    },
  },
});
