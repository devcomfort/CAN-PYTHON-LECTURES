import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [svelte()],
  build: {
    emptyOutDir: false,
    outDir: "../../public/03-functions-and-classes",
  },
});
