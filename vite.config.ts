import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      server: {
        entry: "server",
      },
    }),
    nitro(),
    viteReact(),
    tailwindcss(),
  ],
});
