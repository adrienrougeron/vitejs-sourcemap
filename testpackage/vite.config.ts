import { defineConfig } from "vite";
import path from "path";
import autoExternal from "rollup-plugin-auto-external";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "TestPackage",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      plugins: [autoExternal()],
    },
  },
});
