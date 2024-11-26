import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Videochat/",
  // server: {
  //   host: "192.168.100.3",
  // },
  css: {
    postcss: "./postcss.config.js",
  },
});
