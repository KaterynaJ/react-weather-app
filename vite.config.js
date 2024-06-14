import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Same port as CRA for consistency
  },
  build: {
    outDir: "build", // Same output directory as CRA
  },
});
