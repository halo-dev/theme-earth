import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    plugins: ["typescript", "promise", "node"],
    categories: {
      correctness: "error",
      suspicious: "error",
      perf: "warn",
    },
    rules: {},
    env: {
      builtin: true,
      browser: true,
      node: true,
    },
    globals: {},
    ignorePatterns: ["dist/**", "templates/assets/dist/**", "node_modules/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    "*.**": ["vp check --fix"],
  },
  fmt: {
    sortTailwindcss: {},
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    endOfLine: "lf",
    sortPackageJson: true,
    insertFinalNewline: true,
    sortImports: {},
    ignorePatterns: ["dist/**", "templates/assets/**"],
  },
  build: {
    outDir: "./templates/assets/dist",
    emptyOutDir: true,
    lib: {
      entry: "./src/main.ts",
      name: "main",
      fileName: "main",
      formats: ["iife"],
      cssFileName: "style",
    },
  },
});
