import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// GitHub Pages serves 404.html for paths it has no file for. Shipping a copy of
// index.html there lets deep links such as /projects/<slug> boot the app.
const spaFallback = (): Plugin => ({
  name: "spa-fallback",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    fs.copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/zeyad-elmaghraby-portfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    spaFallback(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
