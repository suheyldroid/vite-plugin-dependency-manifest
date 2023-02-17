import {defineConfig} from "vite";

export default defineConfig({
    build: {
        lib: {
            name: "vite-plugin-dependency-manifest",
            entry: "src/main.ts",
            formats: ["es"]
        }
    }
})