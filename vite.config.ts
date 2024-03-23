import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// switch commented import to see error
// import solidSvg from "vite-plugin-solid-svg";
import solidSvg from "vite-plugin-solid-svg-updated";

export default defineConfig({
  plugins: [solidPlugin(), solidSvg()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
