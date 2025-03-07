import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ROUTES } from "./src/routers/constants";

// https://vite.dev/config/
export default defineConfig({
  base: ROUTES.BASE_NAME,
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
