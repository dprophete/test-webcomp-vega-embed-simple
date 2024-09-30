import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "src/vega-embed-simple.js",
            formats: ["es"],
        },
        rollupOptions: {
            // external: /^lit/
        },
    },
});
