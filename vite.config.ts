import { defineConfig } from 'vite'
import { resolve } from "path";

import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, "src");


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@assets": resolve(root, "assets"),
      "@components": resolve(root, "components"),
      "@data": resolve(root, "data"),
      "@layouts": resolve(root, "layouts"),
      "@pages": resolve(root, "pages"),
      "@routes": resolve(root, "routes"),
      "@services": resolve(root, "services"),
      "@styles": resolve(root, "styles"),
      "@utils": resolve(root, "utils"),
    },
  },
});
