import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import svgr from "@svgr/rollup";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ icon: "100%" }),
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: "eslint './src/**/*.{ts,tsx}'",
        dev: { logLevel: ["error"] },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
