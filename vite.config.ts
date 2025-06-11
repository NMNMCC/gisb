import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    build: {
        target: "es2024",
    },
    define: {
        gist_id: JSON.stringify(process.env["GIST_ID"]),
    },
});
