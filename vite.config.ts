import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

export default defineConfig({
  experimental: {
    enableNativePlugin: true,
  },
  build: {
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "main",
      fileName: "main",
      formats: ["iife"],
      cssFileName: "style",
    },
  },
});
