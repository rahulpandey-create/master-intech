
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isLanding = mode === "landing";

  return {
    plugins: [react(), tailwindcss()],

    base: "/",

    build: {
      outDir: isLanding ? "dist-landing" : "dist",
      emptyOutDir: true,

      rollupOptions: {
        input: isLanding ? "landing.html" : "index.html",
      },
    },
  };
});
